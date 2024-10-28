<script setup lang="ts">
import { LucideLayers, LucideShield, LucideUsers } from 'lucide-vue-next';
import LineChart from '~/components/ui/chart-line/LineChart.vue';
import apify from '~/composables/useAPI';
import type { IData, IDepartment, IEmployee, IReport } from '~/types';


definePageMeta({
    middleware: "is-auth"
});
useHead({
    title: "Bosh sahifa"
});


const { token } = useAuth();

const today = new Date();
const isLoading = ref(false);
const data = ref<IData[]>([
    {
        date: "15-10-2024",
        "Ishga kelgan xodimlar": 426,
    },
    {
        date: "16-10-2024",
        "Ishga kelgan xodimlar": 406,
    },
    {
        date: "17-10-2024",
        "Ishga kelgan xodimlar": 406,
    },
    {
        date: "18-10-2024",
        "Ishga kelgan xodimlar": 406,
    },
    {
        date: "19-10-2024",
        "Ishga kelgan xodimlar": 466,
    },
    {
        date: "20-10-2024",
        "Ishga kelgan xodimlar": 567,
    },
    {
        date: "21-10-2024",
        "Ishga kelgan xodimlar": 499,
    },
    {
        date: "22-10-2024",
        "Ishga kelgan xodimlar": 534,
    },
    {
        date: "23-10-2024",
        "Ishga kelgan xodimlar": 400,
    },
    {
        date: "24-10-2024",
        "Ishga kelgan xodimlar": 478,
    },
    {
        date: "25-10-2024",
        "Ishga kelgan xodimlar": 501,
    },
]);
const reports = ref<IReport[]>();
const employees =  ref<IEmployee[]>();
const departments = ref<IDepartment[]>();


const getReports = async () => {
    isLoading.value = true;
    let response = await $fetch<IReport[]>(apify(`reports/?day=${today.getDate()}&month=${today.getMonth() + 1}&year=${today.getFullYear()}`), {
        headers: {
            "Authorization": `Token ${token}`
        }
    });
    reports.value = response;
    (h("div", {
        class: "w-full flex justify-between"
    }, [
        h("p", {}, `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`),
        h("p", {}, h(LucideShield, { size: 16 }))
    ]), {
        description: "Hisobotlar muvafaqqiyatli yuklandi. Ishlashda davom etishingiz mumkin."
    });
    isLoading.value = false;
}

const getEmployees = async () => {
    isLoading.value = true;
    let response = await $fetch<IEmployee[]>(apify(`employees/`), {
        headers: {
            "Authorization": `Token ${token}`
        }
    });
    employees.value = response;
    isLoading.value = false;
}

const getDepartments = async () => {
    isLoading.value = true;
    let response = await $fetch<IDepartment[]>(apify("departments/"), {
        headers: {
            "Authorization": `Token ${token}`
        }
    });
    departments.value = response;
    isLoading.value = false;
}


onMounted(async () => {
    getEmployees();
    getReports();
    getDepartments();
});
</script>

<template>
    <div class="flex flex-col gap-5 p-5 md:p-10">
        <div class="flex flex-col md:flex-row gap-5">
            <Card class="w-full">
                <CardHeader>
                    <CardTitle>Xodimlar soni</CardTitle>
                </CardHeader>
                <CardContent>
                    <div class="flex items-center justify-between">
                        <p>{{ employees?.length }}</p>
                        <LucideUsers />
                    </div>
                </CardContent>
            </Card>
            <Card class="w-full">
                <CardHeader>
                    <CardTitle>Bo'limlar soni</CardTitle>
                </CardHeader>
                <CardContent>
                    <div class="flex items-center justify-between">
                        <p>{{ departments?.length }}</p>
                        <LucideLayers />
                    </div>
                </CardContent>
            </Card>
        </div>
        <div class="flex flex-col md:flex-row gap-5">
            <div class="w-full flex flex-col gap-3 overflow-x-auto">
                <p class="text-2xl">Tug'ilgan kunlar</p>

                <div class="w-full border rounded-md overflow-x-auto">
                    <Table class="whitespace-nowrap">
                        <TableHeader>
                            <TableHead class="w-4">#</TableHead>
                            <TableHead>Ism, familiya</TableHead>
                            <TableHead>Bo'lim</TableHead>
                            <TableHead>Tug'ilgan kuni</TableHead>
                        </TableHeader>
                        <TableBody>
                            <TableRow v-for="employee, index in employees" >
                                <TableCell>{{ index+1 }}</TableCell>
                                <TableCell>{{ employee.first_name }} {{ employee.last_name }} </TableCell>
                                <TableCell>{{ employee.department.name }}</TableCell>
                                <TableCell>{{ employee.birth_date }} </TableCell>
                            </TableRow>
                            <TableRow v-if="isLoading" v-for="_ in 10">
                                <TableCell><Skeleton class="w-4 h-4" /> </TableCell>
                                <TableCell><Skeleton class="w-full h-4" /> </TableCell>
                                <TableCell><Skeleton class="w-full h-4" /> </TableCell>
                                <TableCell><Skeleton class="w-full h-4" /> </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>
            <div class="w-full flex flex-col gap-3 overflow-x-auto">
                <p class="text-2xl">Statistika</p>
                <div class="w-full border rounded-md overflow-x-auto">
                    <LineChart :data="data" index="date" :categories="['Ishga kelgan xodimlar']">
                        
                    </LineChart>
                </div>
            </div>
        </div>
        <div class="w-full flex flex-col gap-3">
            <p class="text-2xl">Bugungi hisobotlar</p>
            <div class="border rounded-md overflow-x-auto">
                <Table class="whitespace-nowrap">
                    <TableHeader>
                        <TableHead class="w-4">#</TableHead>
                        <TableHead>Ism, familiyasi</TableHead>
                        <TableHead>Bo'limi</TableHead>
                        <TableHead>Lavozimi</TableHead>
                        <TableHead>Tel raqami</TableHead>
                        <TableHead>Bino</TableHead>
                        <TableHead>Vaqt</TableHead>
                        <TableHead>Holati</TableHead>
                        <TableHead>Rasm</TableHead>
                    </TableHeader>
                    <TableBody>
                        <TableRow v-for="report, index in reports">
                            <TableCell>{{ index+1 }}</TableCell>
                            <TableCell>{{ report.employee.first_name }} {{ report.employee.last_name }}</TableCell>
                            <TableCell>{{ report.employee.department.name }}</TableCell>
                            <TableCell>{{ report.employee.position }}</TableCell>
                            <TableCell>{{ report.employee.phone }}</TableCell>
                            <TableCell>{{ report.area.name }}</TableCell>
                            <TableCell>{{ report.created }}</TableCell>
                            <TableCell>{{ report.status }}</TableCell>
                            <TableCell>
                                <img class="w-4 h-4 rounded" :src="report.image" alt="">
                            </TableCell>
                        </TableRow>
                        <TableRow v-if="isLoading" v-for="_ in 10">
                            <TableCell><Skeleton class="w-4 h-4" /> </TableCell>
                            <TableCell><Skeleton class="w-full h-4" /> </TableCell>
                            <TableCell><Skeleton class="w-full h-4" /> </TableCell>
                            <TableCell><Skeleton class="w-full h-4" /> </TableCell>
                            <TableCell><Skeleton class="w-full h-4" /> </TableCell>
                            <TableCell><Skeleton class="w-full h-4" /> </TableCell>
                            <TableCell><Skeleton class="w-full h-4" /> </TableCell>
                            <TableCell><Skeleton class="w-full h-4" /> </TableCell>
                            <TableCell><Skeleton class="w-6 h-6" /> </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    </div>
</template>
