<script setup lang="ts">
import apify from '~/composables/useAPI';
import type { IApplication, ICountry, IEmployee, IResponse } from '~/types';
import { vMaska } from 'maska/vue';
import { LucideDownload, LucideUpload } from 'lucide-vue-next';



definePageMeta({
    middleware: "employee-is-exists"
});
useHead({
    title: "Xodim"
});


const route = useRoute();
const { token } = useAuth();

const employee = ref<IEmployee>();
const applications = ref<IApplication[]>();
const application = ref<IApplication>({
    name: "",
    file: "",
    description: "",
    created: "",
});
const applicationModal = ref(false);
const isLoading = ref(false);
const genders = ref(["Ayol", "Erkak"]);
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


const getEmployee = async () => {
    isLoading.value = true;
    let response = await $fetch<IEmployee>(apify(`employees/employee/${route.params.uuid}/`), {
        headers: {
            "Authorization": `Token ${token}`
        }
    });
    employee.value = response;
    console.log(response);
    isLoading.value = false;
}

const editEmployee = async () => {
    isLoading.value = true;
    const form = new FormData();
    const image = document.getElementById("image") as HTMLInputElement;
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

        form.append("position", employee.value.position);
        form.append("specialist", employee.value.specialist || "");
        form.append("scientific_title", employee.value.scientific_title || "");
        form.append("academic_degree", employee.value.academic_degree || "");

        if (image && image.files) {
            if (image.files[0]) {
                form.append("image", image.files[0]);
            }
        }
    }
    let response = await $fetch<IResponse<string>>(apify(`employees/employee/${route.params.uuid}/edit/`), {
        method: "POST",
        body: form,
        headers: {
            "Authorization": `Token ${token}`
        }
    });
    console.log(response);
    getEmployee();
    isLoading.value = false;
}


const getApplications = async () => {
    isLoading.value = true;
    let response = await $fetch<IApplication[]>(apify(`applications/?employee=${route.params.uuid}`), {
        headers: {
            "Authorization": `Token ${token}`
        }
    });
    applications.value = response;
    isLoading.value = false;
}

const addApplication = async () => {
    isLoading.value = true;
    let form = new FormData();
    let file = document.getElementById("file") as HTMLInputElement;
    form.append("name", application.value.name);
    form.append("description", application.value.description);
    if (employee.value) {
        form.append("employee", employee.value.id.toString());
    }
    if (file && file.files) {
        form.append("file", file.files[0]);
    }
    console.log(form);
    let response = await $fetch(apify("applications/create/"), {
        method: "POST",
        body: form,
        headers: {
            "Authorization": `Token ${token}`
        }
    });
    console.log(response);
    applicationModal.value = false;
    getApplications();
    isLoading.value = false;
}


onMounted(() => {
    getEmployee();
    getApplications();
});
</script>

<template>
    <div class="flex flex-col gap-5 p-5 md:p-10">
        <div class="flex items-center justify-between">
            <p class="text-2xl">Xodimni tahrirlash</p>
            <Button @click="editEmployee">Saqlash</Button>
        </div>
        <div v-if="employee" class="flex flex-col gap-5">
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
                                        <SelectItem v-for="gender in genders" :value="gender">{{ gender }}</SelectItem>
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
                                <Input v-maska data-maska="##-##-####" placeholder="01-01-2000" v-model="employee.passport_of_issue" />
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
                            <img class="w-56 h-56 border rounded" :src="employee.image" alt="">
                            <Input type="file" id="image" />
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
                            <Input v-model="employee.department.name" :disabled="true" />
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
                            <Input v-model="employee.phone" v-maska="'+998 (##) - ### - ## - ##'" />
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Hujjatlar</CardTitle>
                </CardHeader>
                <CardContent>
                    <div class="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableHead>#</TableHead>
                                <TableHead>Turi</TableHead>
                                <TableHead>Sana</TableHead>
                                <TableHead class="w-96">Izox</TableHead>
                                <TableHead class="w-32">Yuklab olish</TableHead>
                            </TableHeader>
                            <TableBody>
                                <TableRow v-for="application, index in applications">
                                    <TableCell>#{{ index+1 }}</TableCell>
                                    <TableCell>{{ application.name }}</TableCell>
                                    <TableCell>{{ application.created }}</TableCell>
                                    <TableCell class="font-mono text-muted-foreground">{{ application.description }}</TableCell>
                                    <TableCell class="text-center">
                                        <Button @click="navigateTo(application.file, { external: true, open: { target: '_blank' } })" variant="outline" size="icon"><LucideDownload :size="16" /> </Button>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div> <br>
                    <div class="flex justify-end">
                        <Dialog v-model:open="applicationModal">
                            <DialogTrigger>
                                <Button variant="outline" size="sm"><LucideUpload :size="16" /> Hujjat qo'shish</Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Yangi hujjat yuklash</DialogTitle>
                                </DialogHeader>
                                <div>
                                    <Label>Nomi</Label>
                                    <Input v-model="application.name" />
                                </div>
                                <div>
                                    <Label>Izox</Label>
                                    <Textarea rows="10" class="resize-none" v-model="application.description" />
                                </div>
                                <div>
                                    <Label>Fayl</Label>
                                    <Input id="file" type="file" />
                                </div>
                                <DialogFooter>
                                    <DialogClose>
                                        <Button variant="destructive">Yopish</Button>
                                    </DialogClose>
                                    <Button @click="addApplication">Yuklash</Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </div>
                </CardContent>
            </Card>
        </div>
    </div>
</template>
