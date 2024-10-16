<script setup lang="ts">
import { FaceLandmarker, FilesetResolver, type FaceLandmarkerResult, ObjectDetector,type ObjectDetectorResult } from "@mediapipe/tasks-vision";
import { LucideCamera, LucideScanFace, LucideCircleCheckBig } from "lucide-vue-next";
import rodriguesRotationVectorFromMatrix from "@/utils/rodrigues";
import drawBorder from "@/utils/drawBorder";
import takePicture from "~/utils/takePicture";


let colorMode = useColorMode();
colorMode.preference = "dark";
const config = useRuntimeConfig();
const route = useRoute();
const passport = ref(route.query.passport);

if (passport.value === "") {
    navigateTo("/");
}

definePageMeta({
    layout: "empty"
});

useHead({
    title: "FaceID"
})

let video: HTMLVideoElement;
let faceLandMarker: FaceLandmarker;
let runningMode = ref<"VIDEO" | "IMAGE">("VIDEO");
let enableWebcamButton: HTMLElement;
let webcamRunnig = false;
let videoWidth = 400;
let cameraWidth = 0;
let cameraHeight = 0;
let lastVideoTime = -1;
let timeout: any = null;
let results: FaceLandmarkerResult | null = null;
let h = 0;
let success = false;
let photoTaken = false;
let tasks = ref<{ direction: "left" | "right" | "top" | "bottom", translation: "Chapga" | "O'ngga" | "Tepaga" | "Pastga" }[][]>([
    // left
    [
        { direction: "left", translation: "Chapga" },
        { direction: "right", translation: "O'ngga" },
   ],
    [
        { direction: "left", translation: "Chapga" },
        { direction: "top", translation: "Tepaga" },
    ],
    [
        { direction: "left", translation: "Chapga" },
        { direction: "bottom", translation: "Pastga" },
    ],
    // right
    [
        { direction: "right", translation: "O'ngga" },
        { direction: "left", translation: "Chapga" }
    ],
    [
        { direction: "right", translation: "O'ngga" },
        { direction: "top", translation: "Tepaga" },
    ],
    [
        { direction: "right", translation: "O'ngga" },
        { direction: "bottom", translation: "Pastga" },
    ],
    // top
    [
        { direction: "top", translation: "Tepaga" },
        { direction: "left", translation: "Chapga" },
    ],
    [
        { direction: "top", translation: "Tepaga" },
        { direction: "right", translation: "O'ngga" },
    ],
    [
        { direction: "top", translation: "Tepaga" },
        { direction: "bottom", translation: "Pastga" }
    ],
    // bottom
    [
        { direction: "bottom", translation: "Pastga" },
        { direction: "left", translation: "Chapga" },
    ],
    [
        { direction: "bottom", translation: "Pastga" },
        { direction: "right", translation: "O'ngga" },
    ],
    [
        { direction: "bottom", translation: "Pastga" },
        { direction: "top", translation: "Tepaga" },
    ]
]);

let givenTasks = ref(tasks.value[Math.floor(Math.random() * tasks.value.length)]);
let tasksDone = ref({
    task1: false,
    task2: false,
});

async function createFaceLandmarker() {
    // isLoading.value = true;
    const filesetResolver = await FilesetResolver.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3/wasm");
    faceLandMarker = await FaceLandmarker.createFromOptions(filesetResolver, {
        baseOptions: {
            modelAssetPath: "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task",
            delegate: "GPU"
        },
        outputFaceBlendshapes: true,
        outputFacialTransformationMatrixes: true,
        runningMode: runningMode.value,
        numFaces: 10,
    });
    // isLoading.value = false;
}

onMounted(async () => {
    await createFaceLandmarker();
    video = document.getElementById("video") as HTMLVideoElement;
    let canvasImage = document.getElementById("image") as HTMLCanvasElement;
    enableWebcamButton = document.getElementById("button") as HTMLButtonElement;

    const border = document.getElementById("border") as HTMLCanvasElement;
    const borderContext = border.getContext("2d") as CanvasRenderingContext2D;

    drawBorder(borderContext, "white");

    function hasGetUserMedia() {
        return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
    }

    if (hasGetUserMedia()) {
        enableWebcamButton?.addEventListener("click", enableCam);
    } else {
    }

    function enableCam(event: Event) {
        if (!faceLandMarker) {
            return;
        }
        if (webcamRunnig === true) {
            webcamRunnig = false;
        } else {
            webcamRunnig = true;
        }

        const constraints = {
            video: true
        }

        navigator.mediaDevices.getUserMedia(constraints)
            .then((stream) => {
                video.srcObject = stream;
                video.addEventListener("loadeddata", predictWebcam);
                let settings = stream.getVideoTracks()[0].getSettings();
                cameraWidth = settings.width || 0;
                cameraHeight = settings.height || 0;
            })
    }

    async function send() {
        if (success && !photoTaken && tasksDone.value.task1 && tasksDone.value.task2) {
            photoTaken = true;
            webcamRunnig = false;
            let pic = takePicture(canvasImage, video, cameraWidth, cameraHeight);
            if (pic) {
                let response = await $fetch<{ status: "success" | "error", code: string, data: boolean }>(config.public.api + "faceid/", {
                    method: "POST",
                    body: JSON.stringify({
                        "image": pic,
                        "passport": passport.value,
                    })
                });
                if (response.status === "success") {
                    if (response.data === true) {
                        enableWebcamButton.innerText = "Nazoratdan o'tdingiz";
                        enableWebcamButton.setAttribute("disabled", "true");
                    } else {
                        enableWebcamButton.innerText = "Kechirasiz yuzlar mos kelmadi."
                    }
                } else {
                    if (response.code === "201") {
                        enableWebcamButton.innerText = "Siz davomatdan o'tgansiz.";
                    }
                }
                clearTimeout(timeout);
            }
        }
    }

    async function predictWebcam() {
        const radio = video.videoHeight / video.videoWidth;

        let startTimeMS = performance.now();

        if (lastVideoTime !== video.currentTime) {
            lastVideoTime = video.currentTime;
            results = faceLandMarker.detectForVideo(video, startTimeMS);
        }

        let x1 = cameraWidth;
        let y1 = cameraHeight;
        let x2 = 0;
        let y2 = 0;
        
        if (results) {
            if (results.faceLandmarks.length === 1) {
                results.faceLandmarks.forEach((element) => {
                    for (let a of element) {
                        let cordX = a.x * cameraWidth;
                        let cordY = a.y * cameraHeight;

                        if (cordX < x1) {
                            x1 = cordX;
                        }
                        if (cordY < y1) {
                            y1 = cordY;
                        }
                        if (cordX > x2) {
                            x2 = cordX;
                        }
                        if (cordY > y2) {
                            y2 = cordY;
                        }
                    }
                });

                if (x1 < cameraWidth / 6.0 || x1 > cameraWidth * 5 / 6 || y1 < cameraHeight / 6 || y1 > cameraHeight * 5 / 6 ||
                    x2 < cameraWidth / 6.0 || x2 > cameraWidth * 5 / 6 || y2 < cameraHeight / 6 || y2 > cameraHeight * 5 / 6) {
                        drawBorder(borderContext, "red");
                } else {
                    drawBorder(borderContext, "green");
                    success = true;
                }

                let scale = Math.max(Math.ceil(x2) - Math.ceil(x1), Math.ceil(y2) - Math.ceil(y1) / (videoWidth / 4));

                if (scale < 1.9 || scale > 2.1) {
                    drawBorder(borderContext, "red");
                    success = false;
                }

                results.facialTransformationMatrixes.forEach((element) => {
                    const matrix = [
                        element.data[0], element.data[1], element.data[2],
                        element.data[4], element.data[5], element.data[6],
                        element.data[8], element.data[9], element.data[10],
                    ];
                    const rodriguesVector = rodriguesRotationVectorFromMatrix(matrix);

                    let pitch = rodriguesVector[0];
                    let yaw = rodriguesVector[1];
                    let roll = rodriguesVector[2];

                    if (yaw < -7) {
                        drawBorder(borderContext, "red");
                        success = false;
                        if (givenTasks.value[0].direction === "right" && !tasksDone.value.task1) {
                            tasksDone.value.task1 = true;
                        }
                        if (givenTasks.value[1].direction === "right" && tasksDone.value.task1) {
                            tasksDone.value.task2 = true;
                        }
                    } else if (yaw > 7) {
                        drawBorder(borderContext, "red");
                        success = false;
                        if (givenTasks.value[0].direction === "left" && !tasksDone.value.task1) {
                            tasksDone.value.task1 = true;
                        }
                        if (givenTasks.value[1].direction === "left" && tasksDone.value.task1) {
                            tasksDone.value.task2 = true;
                        }
                    } else if (pitch < -7) {
                        drawBorder(borderContext, "red");
                        success = false;
                        if (givenTasks.value[0].direction === "top" && !tasksDone.value.task1) {
                            tasksDone.value.task1 = true;
                        }
                        if (givenTasks.value[1].direction === "top" && tasksDone.value.task1) {
                            tasksDone.value.task2 = true;
                        }
                        if (givenTasks.value[0].direction === "top" && !tasksDone.value.task1) {
                            tasksDone.value.task1 = true;
                        }
                        if (givenTasks.value[1].direction === "top" && tasksDone.value.task1) {
                            tasksDone.value.task2 = true;
                        }
                    } else if (pitch > 7) {
                        drawBorder(borderContext, "red");
                        success = false;
                        if (givenTasks.value[0].direction === "bottom" && !tasksDone.value.task1) {
                            tasksDone.value.task1 = true;
                        }
                        if (givenTasks.value[1].direction === "bottom" && tasksDone.value.task1) {
                            tasksDone.value.task2 = true;
                        }
                    } else if (roll < -7) {
                        drawBorder(borderContext, "red");
                        success = false;
                    } else if (roll > 7) {
                        drawBorder(borderContext, "red");
                        success = false;
                    } else {
                        success = true;
                        drawBorder(borderContext, "green");
                        timeout = setTimeout(send, 5000);
                    }
                });
            } else if (results.faceLandmarks.length >= 2) {
                drawBorder(borderContext, "orange");
            } else {
                drawBorder(borderContext, "yellow");
            }
        } else {
        }

        if (webcamRunnig === true) {
            window.requestAnimationFrame(predictWebcam);
        } else {
            video.pause();
            video.src = "";
            if (video.srcObject) {
                // @ts-ignore
                video.srcObject.getTracks()[0].stop();
            }
        }
    }
});

</script>

<template>
    <div class="h-screen">
        <div class="p-5 z-50">
            <p class="font-bold text-3xl">FaceID</p>
            <span>1. Kamerani yoqish tugmasini bosing. 2. Quyidagi holatlarni kameraga qarab bajaring.</span>
            <p class="flex items-center justify-center gap-3 text-center">1. {{ givenTasks[0].translation }} <LucideCircleCheckBig :color="tasksDone.task1 ? '#008000' : '#fff'" /> </p>
            <p class="flex items-center justify-center gap-3 text-center">2. {{ givenTasks[1].translation }} <LucideCircleCheckBig :color="tasksDone.task2 ? '#008000' : '#fff'" /> </p>
            <Button id="button" class="fixed gap-2 left-1/4 bottom-10">
                <LucideCamera />
                <span>Kamerni yoqish</span>
            </Button>
        </div>
        <video class="fixed top-0 left-0 w-full h-full z-[-1]" id="video" autoplay playsinline></video>
        <canvas  height="900" class="fixed top-0 w-full left-0 border z-[-1]" id="border"></canvas>
        <canvas id="image" class="hidden"></canvas>
    </div>
</template>

<style>
#video {
    transform: rotateY(180deg);
    -webkit-transform:rotateY(180deg);
    -moz-transform:rotateY(180deg);
    object-fit: cover;
}
</style>
