<script setup lang="ts">
import apify from '~/composables/useAPI';
import type { ICountry, IDepartment, IEmployee, IResponse } from '~/types';
import { vMaska } from 'maska/vue';
import { useUserMedia } from '@vueuse/core';
import { LucideDownload, LucideUpload } from 'lucide-vue-next';
import { toast } from 'vue-sonner';



definePageMeta({
    middleware: "is-auth"
});
useHead({
    title: "Xodim qo'shish"
});


const route = useRoute();
const { token } = useAuth();
const { stream, start } = useUserMedia();

const employee = ref<IEmployee>({
    id: 0,
    uuid: "",
    first_name: "",
    last_name: "",
    middle_name: "",
    gender: "",
    nationality: "",
    birth_date: "",
    passport_number: "",
    passport_pinfl: "",
    passport_of_issue: "",

    state: "",
    province: "",
    district: "",
    address: "",

    department: {
        id: "1",
        name: "",
        employees: 0
    },
    position: "",
    specialist: "",
    scientific_title: "",
    academic_degree: "",

    email: "",
    phone: "",
    image: ""
});
const departments = ref<IDepartment[]>();
const isLoading = ref(false);
const provincesList = ref([
    "Andijon",
    "Buxoro",
    "Farg'ona",
    "Jizzax",
    "Namangan",
    "Navoiy",
    "Qashqadaryo",
    "Qoraqalpog'iston Respublikasi",
    "Samarqand",
    "Sirdaryo",
    "Surxondaryo",
    "Toshkent",
    "Toshkent shahri",
    "Xorazm",
]);
const countries = ref<ICountry[]>([
    {
        "name": "O'zbekiston",
        "flag": "🇺🇿",
    },
    {
        "name": "Rossiya",
        "flag": "🇷🇺",
    },
    {
        "name": "Qozog'iston",
        "flag": "🇰🇿"
    },
    {
        "name": "Tojikiston",
        "flag": "🇹🇯",
    }
]);

const addEmployee = async () => {
    let image = document.getElementById("image") as HTMLInputElement;
    isLoading.value = true;
    const form = new FormData();
    if (employee.value) {
        form.append("first_name", employee.value.first_name);
        form.append("last_name", employee.value.last_name);
        form.append("middle_name", employee.value.middle_name);
        form.append("gender", employee.value.gender);
        form.append("nationality", employee.value.nationality);
        form.append("birth_date", employee.value.birth_date);
        form.append("passport_number", employee.value.passport_number);
        form.append("passport_pinfl", employee.value.passport_pinfl);
        form.append("passport_of_issue", employee.value.passport_of_issue);

        form.append("state", employee.value.state || "");
        form.append("province", employee.value.province || "");
        form.append("district", employee.value.district || "");
        form.append("address", employee.value.address || "");
        form.append("phone", employee.value.phone || "");

        form.append("department", employee.value.department.id);
        form.append("position", employee.value.position);
        form.append("specialist", employee.value.specialist || "");
        form.append("scientific_title", employee.value.scientific_title || "");
        form.append("academic_degree", employee.value.academic_degree || "");

        if (image && image.files) {
            form.append("image", image.files[0]);
        }
    }
    let response = await $fetch<IResponse<string>>(apify(`employees/create/`), {
        method: "POST",
        body: form,
        headers: {
            "Authorization": `Token ${token}`
        }
    });
    if (response.status === "success") {
        if (response.data) {
            navigateTo({ name: "admin-employees-uuid", params: { uuid: response.data } });
        }
    } else {
        toast("Ogohlantirish", {
            description: "Majburiy maydonlarni to'diring",
        });
    }
    console.log(form);
    isLoading.value = false;
}

const getDepartments = async () => {
    isLoading.value = true;
    let response = await $fetch<IDepartment[]>(apify("departments/"));
    departments.value = response;
    isLoading.value = false;
}


onMounted(() => {
    getDepartments();
    let image = document.getElementById("image") as HTMLInputElement;
    if (image) {
        image.onchange = function (event) {
            if (image.files) {
                let fileReader = new FileReader();
                fileReader.readAsDataURL(image.files[0]);
                fileReader.onload = function() {
                    let output = document.getElementById("output") as HTMLImageElement;
                    if (output && fileReader.result) {
                        output.src = fileReader.result.toString();
                    }
                }
            }
        }
    }
});
</script>

<template>
    <div class="flex flex-col gap-5 p-5 md:p-10">
        <div class="flex items-center justify-between">
            <p class="text-2xl">Yangi xodim qo'shish</p>
            <Button @click="addEmployee">Saqlash</Button>
        </div>
        <div class="flex flex-col gap-5">
            <div class="flex flex-col md:flex-row gap-5">
                <Card class="flex-1 bg-accent/10">
                    <CardHeader>
                        <CardTitle>Shaxsiy ma'lumotlari</CardTitle>
                    </CardHeader>
                    <CardContent class="flex flex-col gap-5">
                        <div class="flex flex-col md:flex-row gap-5">
                            <div class="w-full">
                                <Label>Familiyasi</Label>
                                <Input v-model="employee.last_name" />
                            </div>
                            <div class="w-full">
                                <Label>Ismi</Label>
                                <Input v-model="employee.first_name" />
                            </div>
                            <div class="w-full">
                                <Label>Sharifi</Label>
                                <Input v-model="employee.middle_name" />
                            </div>
                        </div>
                        <div class="flex flex-col md:flex-row gap-5">
                            <div class="w-full">
                                <Label>Jinsi</Label>
                                <Select v-model="employee.gender">
                                    <SelectTrigger>
                                        <SelectValue placeholder="Jinsini tanlang" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Erkak">Erkak</SelectItem>
                                        <SelectItem value="Ayol">Ayol</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div class="w-full">
                                <Label>Millati</Label>
                                <Input v-model="employee.nationality" />
                            </div>
                            <div class="w-full">
                                <Label>Tug'ilgan sanasi</Label>
                                <Input v-maska="'##-##-####'" v-model="employee.birth_date" />
                            </div>
                        </div>
                        <div class="flex flex-col md:flex-row gap-5">
                            <div class="w-full">
                                <Label>Passport raqami</Label>
                                <Input v-maska data-maska="AA-#######" data-maska-tokens="A:[a-zA-Z]" v-model="employee.passport_number" />
                            </div>
                            <div class="w-full">
                                <Label>JShShR</Label>
                                <Input v-maska="'##############'" v-model="employee.passport_pinfl" />
                            </div>
                            <div class="w-full">
                                <Label>Passport amal qilish sanasi</Label>
                                <Input v-maska data-maska="##-##-####" v-model="employee.passport_of_issue" />
                            </div>
                        </div>
                        </CardContent>
                </Card>
                <Card class="bg-accent/10">
                    <CardHeader>
                        <CardTitle>Rasm</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div class="w-full md:w-56 flex flex-col gap-5">
                            <img id="output" class="w-56 h-56 border rounded" :src="employee.image" alt="">
                            <Input id="image" type="file" accept="image/*" />
                        </div>
                    </CardContent>
                </Card>
            </div>
            <Card class="bg-accent/10">
                <CardHeader>
                    <CardTitle>Manzil</CardTitle>
                </CardHeader>
                <CardContent>
                    <div class="flex flex-col md:flex-row gap-5">
                        <div class="w-full">
                            <Label>Davlat</Label>
                            <Select v-model="employee.state">
                                <SelectTrigger>
                                    <SelectValue placeholder="Davlatni tanlang" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem v-for="state in countries" :value="state.name">{{ state.flag }} {{ state.name }}</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div class="w-full">
                            <Label>Viloyat</Label>
                            <Select v-model="employee.province">
                                <SelectTrigger>
                                    <SelectValue placeholder="Viloyatni tanlang" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem v-for="province in provincesList" :value="province">{{ province }}</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div class="flex flex-col md:flex-row gap-5">
                        <div class="w-full">
                            <Label>Tuman</Label>
                            <Input v-model="employee.district" />
                        </div>
                        <div class="w-full">
                            <Label>Manzil</Label>
                            <Input v-model="employee.address" />
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card class="bg-accent/10">
                <CardHeader>
                    <CardTitle>Qo'shimcha ma'lumotlar</CardTitle>
                </CardHeader>
                <CardContent>
                    <div class="flex flex-col md:flex-row gap-5">
                        <div class="w-full">
                            <Label>Department</Label>
                            <!-- <Input v-model="employee.state" /> -->
                            <Select v-model="employee.department.id">
                                <SelectTrigger>
                                    <SelectValue placeholder="Bo'limni tanlang"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem v-for="department in departments" :value="department.id">{{ department.name }}</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div class="w-full">
                            <Label>Lavozimi</Label>
                            <Input v-model="employee.position" />
                        </div>
                    </div>
                    <div class="flex flex-col md:flex-row gap-5">
                        <div class="w-full">
                            <Label>Mutaxasisligi</Label>
                            <Input v-model="employee.specialist" />
                        </div>
                        <div class="w-full">
                            <Label>Ilmiy unvoni</Label>
                            <Input v-model="employee.scientific_title" />
                        </div>
                    </div>
                    <div class="flex flex-col md:flex-row gap-5">
                        <div class="w-full">
                            <Label>Akademik darajasi</Label>
                            <Input v-model="employee.academic_degree" />
                        </div>
                        <div class="w-full">
                            <Label>Telefon raqami</Label>
                            <Input v-maska="'+998 (##) - ### - ## - ##'" v-model="employee.phone" />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    </div>
</template>
