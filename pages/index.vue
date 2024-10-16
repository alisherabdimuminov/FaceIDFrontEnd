<script setup lang="ts">
import { LucideCalendar, LucideCheckCheck, LucideDownload, LucideTriangleAlert, LucideX } from 'lucide-vue-next';
import { buttonVariants } from '~/components/ui/button';
import apify from '~/composables/useAPI';
import { cn } from '~/lib/utils';
import type { IReport } from '~/types';


definePageMeta({
    middleware: "is-auth"
});
useHead({
    title: "Hisobotlar"
});

const { token } = useAuth();

const isLoading = ref(false);
const reports = ref<IReport[]>();
const today = new Date();
const date = ref({
    day: 14,
    era: "AD",
    month: today.getMonth()+1,
    year: today.getFullYear(),
    toString() {
        return `${this.year}-${this.month}-${this.day}`
    }
});

onMounted(() => {
    getReports();
});

const getReports = async () => {
    isLoading.value = true;
    let response = await $fetch<IReport[]>(apify(`reports/?day=${date.value.day}&month=${date.value.month}&year=${date.value.year}`), {
        headers: {
            "Authorization": `Token ${token}`
        }
    });
    reports.value = response;
    isLoading.value = false;
}

</script>

<template>
    <div class="flex flex-col gap-5 p-5 md:p-10">
        <div class="flex items-center justify-between">
            <p class="text-3xl font-bold">Dashboard</p>
            <Button><LucideDownload :size="16" /> Yuklab olish</Button>
        </div>
        <div class="border rounded-md flex flex-col overflow-x-auto">
            <Table>
                <TableHeader class="border-b">
                    <TableHead class="w-4">#</TableHead>
                    <TableHead>Ism</TableHead>
                    <TableHead>Familiya</TableHead>
                    <TableHead>Bo'lim</TableHead>
                    <TableHead>Bino</TableHead>
                    <TableHead>Holati</TableHead>
                    <TableHead>Vaqt</TableHead>
                    <TableHead>Rasm</TableHead>
                </TableHeader>
                <TableBody>
                    <TableRow v-for="report, index in reports" :key="index">
                        <TableCell>{{ index+1 }}</TableCell>
                        <TableCell>{{ report.employee.first_name }}</TableCell>
                        <TableCell>{{ report.employee.last_name }}</TableCell>
                        <TableCell>{{ report.employee.department.name }}</TableCell>
                        <TableCell>{{ report.area.name }}</TableCell>
                        <TableCell>
                            <LucideCheckCheck class="text-green-500" v-if="report.status === 'passed'" />
                            <LucideX class="text-red-500" v-else />
                        </TableCell>
                        <TableCell>{{ report.created }}</TableCell>
                        <TableCell>
                            <img class="w-8 h-8 rounded-md" :src="report.image" alt="">
                        </TableCell>
                    </TableRow>
                    <TableRow v-if="isLoading" v-for="index in 10" :key="index">
                        <TableCell><Skeleton class="w-4 h-4" /></TableCell>
                        <TableCell><Skeleton class="w-full h-4" /></TableCell>
                        <TableCell><Skeleton class="w-full h-4" /></TableCell>
                        <TableCell><Skeleton class="w-full h-4" /></TableCell>
                        <TableCell><Skeleton class="w-16 h-4" /></TableCell>
                        <TableCell>
                            <Skeleton class="w-6 h-4" />
                        </TableCell>
                        <TableCell><Skeleton class="w-16 h-4" /> </TableCell>
                        <TableCell>
                            <Skeleton class="w-8 h-8 rounded-md" />
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <div v-if="reports?.length === 0" class="flex gap-5 items-center justify-center py-5">
                <LucideTriangleAlert :size="30" /><p class="text-3xl">Ma'lumot topilmadi</p>
            </div>
        </div>
    </div>
</template>
