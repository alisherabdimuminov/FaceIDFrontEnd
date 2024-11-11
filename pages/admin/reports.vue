<script setup lang="ts">
import { LucideCalendar, LucideCheckCheck, LucideX } from 'lucide-vue-next';
import { buttonVariants } from '~/components/ui/button';
import apify from '~/composables/useAPI';
import { cn } from '~/lib/utils';
import type { IAttendance, IDepartment, IReport } from '~/types';


definePageMeta({
    middleware: "is-auth"
});
useHead({
    title: "Hisobotlar"
});

const { token } = useAuth();

const isLoading = ref(false);
const department = ref("0");
const departments = ref<IDepartment[]>();
const attendance = ref<IAttendance[]>();
const today = new Date();
const date = ref({
    day: today.getDate(),
    era: "AD",
    month: today.getMonth()+1,
    year: today.getFullYear(),
    toString() {
        return `${this.year}-${this.month}-${this.day}`
    }
});


const getDepartments = async () => {
    isLoading.value = true;
    let response = await $fetch<IDepartment[]>(apify(`departments`), {
        headers: {
            "Authorization": `Token ${token}`
        }
    });
    departments.value = response;
    isLoading.value = false;
}

const getAttendance = async (department: string | number) => {
    isLoading.value = true;
    let response = await $fetch<IAttendance[]>(apify(`attendance/?department=${department}&day=${date.value.day}&month=${date.value.month}&year=${date.value.year}`), {
        headers: {
            "Authorization": `Token ${token}`
        }
    });
    attendance.value = response;
    isLoading.value = false;
}

const updateDate = async (value: any) => {
    date.value = value;
    getAttendance(department.value);
}


onMounted(() => {
    getAttendance(0);
    getDepartments();
});


watch(department, (newValue) => {
    getAttendance(department.value);
});
</script>

<template>
    <div class="flex flex-col gap-5 p-5 md:p-10">
        <div class="flex items-center justify-between">
            <p :class="cn(buttonVariants({ variant: 'outline' }))">Sana: {{ date }}</p>
            <Popover>
                <PopoverTrigger as-child>
                    <Button variant="outline" size="icon"><LucideCalendar :size="16" /> </Button>
                </PopoverTrigger>
                <PopoverContent>
                    <Calendar @update:model-value="updateDate"></Calendar>
                </PopoverContent>
            </Popover>
        </div>
        <div>
            <Select v-model="department">
                <SelectTrigger>
                    <SelectValue placeholder="Bo'limni tanlang" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="0">Barcha bo'limlar</SelectItem>
                    <SelectItem v-for="d in departments" :value="d.id">{{ d.name }}</SelectItem>
                </SelectContent>
            </Select>
        </div>
        <div class="border rounded-md flex flex-col overflow-x-auto">
            <Table>
                <TableHeader class="border-b">
                    <TableHead class="w-4">#</TableHead>
                    <TableHead>Xodim</TableHead>
                    <TableHead class="border-l">(Kelgan) Holati</TableHead>
                    <TableHead>(Kelgan) Vaqt</TableHead>
                    <TableHead class="border-r">(Ketgan) Bino</TableHead>
                    <TableHead>(Ketgan) Holati</TableHead>
                    <TableHead>(Ketgan) Vaqt</TableHead>
                    <TableHead>(Ketgan) Bino</TableHead>
                </TableHeader>
                <TableBody>
                    <TableRow v-for="report, index in attendance" @click="navigateTo({ name: 'admin-employees-uuid', params: { uuid: report.uuid } })" :key="index">
                        <TableCell>{{ index+1 }}</TableCell>
                        <TableCell>{{ report.last_name }} {{ report.first_name }}</TableCell>
                        <TableCell class="border-l">
                            <span class="text-green-500 font-bold" v-if="report.attendance === 'arrived'">Kelgan</span>
                            <span class="text-yellow-500 font-bold" v-else-if="report.attendance === 'failed'">Xatolik</span>
                            <span class="text-orange-500 font-bold" v-else-if="report.attendance === 'late'">Kech qolgan</span>
                            <span class="text-red-500 font-bold" v-else-if="report.attendance === 'did_not_come'">Kelmagan</span>
                        </TableCell>
                        <TableCell>{{ report.attendance_time }}</TableCell>
                        <TableCell>{{ report.attendance_area }}</TableCell>
                        <TableCell class="border-l">
                            <span class="text-green-500 font-bold" v-if="report.attendance === 'arrived'">Ishda</span>
                            <span class="text-yellow-500 font-bold" v-else-if="report.attendance === 'failed'">Xatolik</span>
                            <span class="text-orange-500 font-bold" v-else-if="report.attendance === 'late'">Kech qolgan</span>
                            <span class="text-red-500 font-bold" v-else-if="report.attendance === 'did_not_come'">Kelmagan</span>
                        </TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
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
            <div v-if="attendance?.length === 0" class="flex gap-5 items-center justify-center py-5">
                <LucideTriangleAlert :size="30" /><p class="text-3xl">Ma'lumot topilmadi</p>
            </div>
        </div>
    </div>
</template>
