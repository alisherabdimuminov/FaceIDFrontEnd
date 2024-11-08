<script setup lang="ts">
import { LucideFileWarning } from "lucide-vue-next";
import { useToast } from "~/components/ui/toast";

definePageMeta({
    layout: "empty"
});

useHead({
    title: "Location"
});

const { toast } = useToast();
const config = useRuntimeConfig();
const route = useRoute();

const longitude = ref(0);
const latitude = ref(0);
const login = ref(false);
const errorText = ref("");
const passport = ref("");
const isLoading = ref(false);


const success = async (position: GeolocationPosition) => {
    isLoading.value = true;
    longitude.value = position.coords.longitude;
    latitude.value = position.coords.latitude;
    let response = await $fetch<{ status: "success" | "error", code: string, data: object }>(config.public.api + "location/", {
        method: "POST",
        body: JSON.stringify({
            longitude: longitude.value,
            latitude: latitude.value,
            // longitude: "66.922222",
            // latitude: "39.671892",
        }),
        headers: {
            "Content-Type": "application/json",
        }
    });
    console.log(response);
    if (response.code === "200") {
        login.value = true;
        toast({
            title: "Ajoyib",
            description: "Siz institut hududidasiz. Davom etishingiz mumkin."
        });
    } else {
        errorText.value = "Siz institut hududida emassiz. Iltimos institut hududiga kelib qaytadan urinib ko'ring";
    }
    isLoading.value = false;
}

const error = (err: GeolocationPositionError) => {
    errorText.value = "Sizning joylashuvingizni ololmadik. Iltimos, qaytadan urinib ko'ring";
}

const sendViaQuery = async (lon: number, lat: number) => {
    longitude.value = lon;
    latitude.value = lat;
    let response = await $fetch<{ status: "success" | "error", code: string, data: object }>(config.public.api + "location/", {
        method: "POST",
        body: JSON.stringify({
            longitude: longitude.value,
            latitude: latitude.value,
            // longitude: "66.922222",
            // latitude: "39.671892",
        }),
        headers: {
            "Content-Type": "application/json",
        }
    });
    console.log(response);
    if (response.code === "200") {
        login.value = true;
        toast({
            title: "Ajoyib",
            description: "Siz office hududidasiz. Davom etishingiz mumkin."
        });
    } else {
        errorText.value = "Siz office hududida emassiz. Iltimos office hududiga kelib qaytadan urinib ko'ring";
    }
    isLoading.value = false;
}

const loginWithPassport = async () => {
    let response = await $fetch<{ status: "success" | "error", code: string, data: { user_id: number } | null }>(config.public.api + "passport/", {
        method: "POST",
        body: JSON.stringify({
            passport: passport.value
        }),
        headers: {
            "Content-Type": "application/json",
        }
    });
    if (response.status === "success") {
        if (response.code === "200") {
            if (response.data) {
                navigateTo({name: "faceid", query: { passport: passport.value }});
            } else {
                errorText.value = "Passport raqami noto'g'ri kiritildi.";
            }
        } else {
            errorText.value = "Passport raqami noto'g'ri kiritildi."
        }
    } else {
        errorText.value = "Passport raqami noto'g'ri kiritildi.";
    }
}

onMounted(() => {
    if (route.query.longitude && route.query.latitude) {
        let lon = parseFloat(route.query.longitude.toString());
        let lat = parseFloat(route.query.latitude.toString());
        sendViaQuery(lon, lat);
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
    }
});

</script>

<template>
    <div class="h-screen w-full flex items-center justify-center">
        <div class="grid gap-5 p-5 w-96">
            <p v-if="errorText" class=" border border-red-500 p-1 rounded-lg bg-red-500/10 flex items-center gap-3 text-lg font-bold text-red-500"><LucideFileWarning :size="50" /> {{ errorText }} </p>
            <Label>Passport raqam</Label>
            <Input v-model="passport" :disabled="!login" class="w-full" />
            <Button @click="loginWithPassport" :disabled="!login" class="w-full">Kirish</Button>
        </div>
    </div>
</template>
