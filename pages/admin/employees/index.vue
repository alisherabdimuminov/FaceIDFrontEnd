<script setup lang="ts">
import type { IDepartment, IEmployee } from '~/types';
import apify from '~/composables/useAPI';


definePageMeta({
    middleware: "is-auth",
});
useHead({
    title: "Xodimlar"
});


const { token } = useAuth();

const today = new Date();
const department = ref("");
const departmentName = ref("");
const isLoading = ref(false);
const employees = ref<IEmployee[]>();
const departments = ref<IDepartment[]>();
const departmentModal = ref(false);



const getEmployees = async (departmentID: string = "0") => {
    isLoading.value = true;
    let response = await $fetch<IEmployee[]>(apify(`employees/?department=${departmentID}`), {
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

const addDepartment = async () => {
    isLoading.value = true;
    let response = await $fetch(apify(`departments/create/`), {
        method: "POST",
        body: JSON.stringify({
            name: departmentName.value
        }),
        headers: {
            "Authorization": `Token ${token}`
        }
    });
    getDepartments();
    isLoading.value = false;
    departmentModal.value = false;
}


onMounted(async () => {
    getEmployees();
    getDepartments();
});

watch(department, (newValue) => {
    getEmployees(department.value);
});

</script>

<template>
    <div class="flex flex-col gap-5 p-5 md:p-10">
        <Tabs default-value="employees">
            <TabsList>
                <TabsTrigger value="employees">Xodimlar</TabsTrigger>
                <TabsTrigger value="departments">Bo'limlar</TabsTrigger>
            </TabsList>
            <TabsContent value="employees">
                <div class="flex flex-col gap-3">
                    <div class="flex flex-col md:flex-row justify-between">
                        <p class="text-2xl">Xodimlar ro'yxati</p>
                        <div class="flex gap-3">
                            <Input class="w-full md:w-96" placeholder="Xodim qidirish"/>
                            <Button @click="navigateTo({ name: 'admin-employees-add' })">Xodim qo'shish</Button>
                        </div>
                    </div>
                    <div class="border rounded-md overflow-x-auto">
                        <Table class="whitespace-nowrap">
                            <TableHeader>
                                <TableHead class="w-4">#</TableHead>
                                <TableHead>Ism, familiya, sharifi</TableHead>
                                <TableHead>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger>
                                            <Button size="xs" variant="ghost">Bo'lim</Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            <DropdownMenuLabel>Filtrlash</DropdownMenuLabel>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuRadioGroup v-model="department">
                                                <DropdownMenuRadioItem value="0">Barcha bo'limlar</DropdownMenuRadioItem>
                                                <DropdownMenuRadioItem v-for="d in departments" :value="d.id">{{ d.name }}</DropdownMenuRadioItem>
                                            </DropdownMenuRadioGroup>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableHead>
                                <TableHead>Lavozimi</TableHead>
                                <TableHead>Tel raqami</TableHead>
                                <TableHead>Passport raqami</TableHead>
                                <TableHead>JShShR</TableHead>
                                <TableHead>Rasmi</TableHead>
                            </TableHeader>
                            <TableBody>
                                <TableRow @click="navigateTo({ name: 'admin-employees-uuid', params: { uuid: employee.uuid } })" v-for="employee, index in employees">
                                    <TableCell>{{ index+1 }} </TableCell>
                                    <TableCell>{{ employee.first_name }} {{ employee.last_name }} {{ employee.middle_name }}</TableCell>
                                    <TableCell>{{ employee.department.name }}</TableCell>
                                    <TableCell>{{ employee.position }}</TableCell>
                                    <TableCell>{{ employee.phone }}</TableCell>
                                    <TableCell>{{ employee.passport_number }}</TableCell>
                                    <TableCell>{{ employee.passport_pinfl }}</TableCell>
                                    <TableCell>
                                        <img class="w-6 h-6 rounded border" :src="employee.image" alt="">
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
                                    <TableCell><Skeleton class="w-6 h-6" /> </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </TabsContent>
            <TabsContent value="departments">
                <div class="flex flex-col gap-3">
                    <div class="flex flex-col md:flex-row justify-between">
                        <p class="text-2xl">Bo'limlar ro'yxati</p>
                        <div class="flex gap-3">
                            <Dialog v-model:open="departmentModal">
                                <DialogTrigger>
                                    <Button>Bo'lim qo'shish</Button>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Yangi bo'lim qo'shish</DialogTitle>
                                    </DialogHeader>
                                    <div>
                                        <Label>Nomi</Label>
                                        <Input v-model="departmentName" />
                                    </div>
                                    <DialogFooter>
                                        <DialogClose>
                                            <Button variant="destructive">Yopish</Button>
                                        </DialogClose>
                                        <Button @click="addDepartment">Qo'shish</Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>
                    <div class="overflow-x-auto">
                        <Table class="whitespace-nowrap">
                            <TableHeader>
                                <TableHead>#</TableHead>
                                <TableHead>Bo'lim</TableHead>
                                <TableHead>Xodimlari soni</TableHead>
                            </TableHeader>
                            <TableBody>
                                <TableRow v-for="department, index in departments">
                                    <TableCell>{{ index+1 }}</TableCell>
                                    <TableCell>{{ department.name }}</TableCell>
                                    <TableCell>{{ department.employees }}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </TabsContent>
        </Tabs>
    </div>
</template>
