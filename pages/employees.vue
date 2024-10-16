<script setup lang="ts">
import useAuth from "~/composables/useAuth";
import apify from "~/composables/useAPI";
import type { IDepartment, IEmployee, IResponse } from "~/types";
import { LucideEdit, LucideLayoutGrid, LucidePlus, LucideTrash, LucideTriangleAlert, LucideUsers } from "lucide-vue-next";
import { useToast } from "~/components/ui/toast";


definePageMeta({
    middleware: "is-auth"
});

useHead({
    title: "Xodimlar"
});


const { token } = useAuth();
const { toast } = useToast();

const employees = ref<IEmployee[]>();
const departments = ref<IDepartment[]>();
const isLoading = ref(false);
const departmentName = ref("");
const department = ref("0");

const employeeFirstName = ref("");
const employeeLastName = ref("");
const employeeMiddleName = ref("");
const employeePassportNumber = ref("");
const employeePassportPINFL = ref("");
const employeeDepartment = ref("");
const employeePosition = ref("");

const departmentDialog = ref(false);
const employeeDialog = ref(false);


onMounted(async () => {
    getEmployees();
    getDepartments();
});


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
    let response = await $fetch<IResponse<string>>(apify("departments/create/"), {
        method: "POST",
        body: JSON.stringify({
            "name": departmentName.value,
        })
    });
    if (response.status === "success") {
        getDepartments();
        toast({
            title: "Ajoyib!",
            description: "Yangi bo'lim qo'shildi."
        });
    } else {
        toast({
            title: "Afsus",
            description: h("p", { class: "text-red-500" }, "Tizimda xatolik")
        });
    }
    departmentDialog.value = false;
    isLoading.value = false;
}


const editDepartment = async (id: number, name: string) => {
    isLoading.value = true;
    let response = await $fetch<IResponse<string>>(apify(`departments/department/${id}/edit/`), {
        method: "POST",
        body: JSON.stringify({
            "id": id,
            "name": name
        })
    });
    if (response.status === "success") {
        toast({
            title: "Ajoyib",
            description: h("p", { class: "text-green-500" }, `${name} bo'limi tahrirlandi.`)
        });
    } else {
        toast({
            title: "Afsus",
            description: h("p", { class: "text-red-500" } , "Tizim xatoligi.")
        });
    }
    getDepartments();
    isLoading.value = false;
}


const deleteDepartment = async (id: number) => {
    isLoading.value = true;
    let response = await $fetch<IResponse<string>>(apify(`departments/department/${id}/delete/`), {
        method: "POST",
        body: JSON.stringify({
            "id": id,
            "name": name
        })
    });
    if (response.status === "success") {
        toast({
            title: "Ajoyib",
            description: h("p", { class: "text-green-500" }, `Bo'limi o'chirildi.`)
        });
    } else {
        toast({
            title: "Afsus",
            description: h("p", { class: "text-red-500" } , "Tizim xatoligi.")
        });
    }
    getDepartments();
    isLoading.value = false;
}


const getEmployees = async () => {
    isLoading.value = true;
    let response = await $fetch<IEmployee[]>(apify(`employees/?department=${department.value}`), {
        headers: {
            "Authorization": `Token ${token}`
        }
    });
    employees.value = response;
    isLoading.value = false;
}


const addEmployee = async () => {
    let form = new FormData()
    let image = document.getElementById("image") as HTMLInputElement;
    form.append("first_name", employeeFirstName.value);
    form.append("last_name", employeeLastName.value);
    form.append("middle_name", employeeMiddleName.value);
    form.append("passport_number", employeePassportNumber.value);
    form.append("passport_pinfl", employeePassportPINFL.value);
    form.append("department", employeeDepartment.value);
    form.append("position", employeePosition.value);
    if (image && image.files) {
        form.append("image", image.files[0]);
    }

    if (employeeDepartment.value !== null && employeeDepartment.value !== "") {
        console.log(employeeDepartment.value === "")
        let response = await $fetch(apify("employees/create/"), {
            method: "POST",
            body: form
        });
        toast({
            title: "Ajoyib",
            description: h("p", { class: "text-green-500" }, "Yangi xodim qo'shildi")
        });
    } else {
        toast({
            title: "Ogohlantirish",
            description: h("p", { class: "text-orange-500" }, "Bo'limni tanlang")
        });
    }

    getEmployees();
    employeeDialog.value = false;
}

const editEmployee = async (employee: IEmployee) => {
    let form = new FormData()
    form.append("first_name", employee.first_name);
    form.append("last_name", employee.last_name);
    form.append("middle_name", employee.middle_name);
    form.append("passport_number", employee.passport_number);
    form.append("passport_pinfl", employee.passport_pinfl);
    form.append("position", employee.position);

    let response = await $fetch(apify(`employees/employee/${employee.uuid}/edit/`), {
        method: "POST",
        body: form
    });

    toast({
        title: "Ajoyib",
        description: h("p", { class: "text-green-500" }, `${employee.first_name} tahrirlandi`)
    });

    getEmployees();
}

const deleteEmployee = async (employee: IEmployee) => {
    let response = await $fetch(apify(`employees/employee/${employee.uuid}/delete/`), {
        method: "POST",
    });
    toast({
        title: "Ajoyib",
        description: h("p", { class: "text-green-500" }, "Xodim o'chirildi.")
    })
    getEmployees();
}

const updateDepartment = async (value: any) => {
    department.value = value;
    getEmployees();
}
</script>

<template>
    <div class="flex flex-col gap-5 p-5 md:p-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Card class="bg-accent/50">
                <CardHeader>
                    <CardTitle>Xodimlar soni</CardTitle>
                </CardHeader>
                <CardContent>
                    <div class="flex items-center">
                        <div class="flex-1">
                            <Skeleton v-if="isLoading" class="w-12 h-8" />
                            <p v-else class="text-3xl font-bold">{{ employees?.length }}</p>
                        </div>
                        <div>
                            <LucideUsers :size="40" />
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card class="bg-accent/50">
                <CardHeader>
                    <CardTitle>Bo'limlar soni</CardTitle>
                </CardHeader>
                <CardContent>
                    <div class="flex items-center">
                        <div class="flex-1">
                            <Skeleton v-if="isLoading" class="w-12 h-8" />
                            <p v-else class="text-3xl font-bold">{{ departments?.length }}</p>
                        </div>
                        <div>
                            <LucideLayoutGrid :size="40" />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
        <Tabs default-value="employees">
            <TabsList>
                <TabsTrigger value="employees">Xodimlar</TabsTrigger>
                <TabsTrigger value="departments">Bo'limlar</TabsTrigger>
            </TabsList>
            <TabsContent value="employees" class="flex flex-col gap-5">
                <div class="flex flex-col md:flex-row gap-3 justify-between">
                    <div class="w-64">
                        <Select @update:model-value="updateDepartment" v-model="department">
                            <SelectTrigger>
                                <SelectValue placeholder="Select department" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="0">Barcha bo'limlar</SelectItem>
                                <SelectItem v-for="department in departments" :value="department.id.toString()">{{ department.name }}</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div class="flex items-center gap-3">
                        <Dialog v-model:open="employeeDialog">
                            <DialogTrigger>
                                <Button><LucidePlus :size="16" /> Xodim qo'shish</Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Yangi xodim qo'shish</DialogTitle>
                                </DialogHeader>
                                <div class="grid gap-3">
                                    <div class="flex flex-col md:flex-row gap-3">
                                        <div class="w-full">
                                            <Label>Ismi</Label>
                                            <Input v-model="employeeFirstName" />
                                        </div>
                                        <div class="w-full">
                                            <Label>Familiyasi</Label>
                                            <Input v-model="employeeLastName" />
                                        </div>
                                    </div>
                                    <div>
                                        <Label>Otasini ismi</Label>
                                        <Input v-model="employeeMiddleName"/>
                                    </div>
                                    <div class="flex flex-col md:flex-row gap-3">
                                        <div class="w-full">
                                            <Label>Passport raqami</Label>
                                            <Input v-model="employeePassportNumber" />
                                        </div>
                                        <div class="w-full">
                                            <Label>JShShR</Label>
                                            <Input v-model="employeePassportPINFL" />
                                        </div>
                                    </div>
                                    <div class="flex flex-col md:flex-row gap-3">
                                        <div class="w-full">
                                            <Label>Bo'lim</Label>
                                            <Select v-model="employeeDepartment">
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Bo'limni tanlang"/>
                                                    <SelectContent>
                                                        <SelectItem v-for="department in departments" :value="department.id.toString()">{{ department.name }}</SelectItem>
                                                    </SelectContent>
                                                </SelectTrigger>
                                            </Select>
                                        </div>
                                        <div class="w-full">
                                            <Label>Lavozimi</Label>
                                            <Input v-model="employeePosition" />
                                        </div>
                                    </div>
                                    <div>
                                        <Label>Rasmi</Label>
                                        <Input id="image" type="file" />
                                    </div>
                                </div>
                                <DialogFooter>
                                    <DialogClose as-child>
                                        <Button variant="destructive">Yopish</Button>
                                    </DialogClose>
                                    <Button @click="addEmployee">Qo'shish</Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
                <div class="border rounded-md">
                    <Table class="whitespace-nowrap">
                        <TableHeader class="border-b">
                            <TableHead class="w-10">#</TableHead>
                            <TableHead>Ism</TableHead>
                            <TableHead>Familiya</TableHead>
                            <TableHead>Otasini ismi</TableHead>
                            <TableHead>Bo'lim</TableHead>
                            <TableHead>Lavozimi</TableHead>
                            <TableHead class="w-16">Rasm</TableHead>
                            <TableHead class="w-4"></TableHead>
                            <TableHead class="w-4"></TableHead>
                        </TableHeader>
                        <TableBody>
                            <TableRow v-if="employees && !isLoading" v-for="employee, index in employees">
                                <TableCell class="">{{ index+1 }}</TableCell>
                                <TableCell class="">{{ employee.first_name }}</TableCell>
                                <TableCell class="">{{ employee.last_name }}</TableCell>
                                <TableCell class="">{{ employee.middle_name }}</TableCell>
                                <TableCell class="">{{ employee.department ?  employee.department.name : "" }}</TableCell>
                                <TableCell class="">{{ employee.position }}</TableCell>
                                <TableCell class="">
                                    <img :src="employee.image" class="w-10 h-10 border rounded" alt="">
                                </TableCell>
                                <TableCell>
                                    <Sheet>
                                        <SheetTrigger>
                                            <Button size="icon"><LucideEdit :size="16" /> </Button>
                                        </SheetTrigger>
                                        <SheetContent>
                                            <SheetHeader>
                                                <SheetTitle>{{ employee.first_name }} ni tahrirlash</SheetTitle>
                                                <SheetDescription></SheetDescription>
                                            </SheetHeader>
                                            <div class="flex flex-col gap-2">
                                                <div>
                                                    <Label>Ismi</Label>
                                                    <Input v-model="employee.first_name" />
                                                </div>
                                                <div>
                                                    <Label>Familiyasi</Label>
                                                    <Input v-model="employee.last_name" />
                                                </div>
                                                <div>
                                                    <Label>Otasini ismi</Label>
                                                    <Input v-model="employee.middle_name" />
                                                </div>
                                                <div>
                                                    <Label>Lavozimi</Label>
                                                    <Input v-model="employee.position" />
                                                </div>
                                                <div>
                                                    <Label>Passport raqami</Label>
                                                    <Input v-model="employee.passport_number" />
                                                </div>
                                                <div>
                                                    <Label>JShShR</Label>
                                                    <Input v-model="employee.passport_pinfl" />
                                                </div>
                                                <div>
                                                    <Button @click="editEmployee(employee)">Tahrirlash</Button>
                                                </div>
                                            </div>
                                        </SheetContent>
                                    </Sheet>
                                </TableCell>
                                <TableCell>
                                    <Dialog>
                                        <DialogTrigger>
                                            <Button variant="destructive" size="icon"><LucideTrash :size="16" /> </Button>
                                        </DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogTitle>{{ employee.first_name }} ni o'chirish</DialogTitle>
                                            </DialogHeader>
                                            <p>{{ employee.first_name }} {{ employee.last_name }} ni o'chirsangiz. Unga tegishli barcha ma'lumotlar o'chib ketadi. O'chirasizmi?</p>
                                            <DialogFooter class="gap-2">
                                                <DialogClose>
                                                    <Button>Yo'q</Button>
                                                </DialogClose>
                                                <Button @click="deleteEmployee(employee)" variant="destructive">Ha</Button>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>
                                </TableCell>
                            </TableRow>
                            <TableRow v-if="isLoading" v-for="index in 10" :key="index">
                                <TableCell><Skeleton class="w-4 h-4" /></TableCell>
                                <TableCell><Skeleton class="w-full h-4" /></TableCell>
                                <TableCell><Skeleton class="w-full h-4" /></TableCell>
                                <TableCell><Skeleton class="w-full h-4" /></TableCell>
                                <TableCell><Skeleton class="w-full h-4" /></TableCell>
                                <TableCell><Skeleton class="w-full h-4" /></TableCell>
                                <TableCell><Skeleton class="w-8 h-8" /></TableCell>
                                <TableCell><Skeleton class="w-8 h-8" /></TableCell>
                                <TableCell><Skeleton class="w-8 h-8" /></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <div v-if="employees?.length === 0" class="flex gap-5 items-center justify-center py-5">
                        <LucideTriangleAlert :size="30" /><p class="text-3xl">Ma'lumot topilmadi</p>
                    </div>
                </div>
            </TabsContent>
            <TabsContent value="departments" class="grid gap-5">
                <div class="flex justify-between">
                    <div>
                    </div>
                    <div class="flex items-center gap-3">
                        <Dialog v-model:open="departmentDialog">
                            <DialogTrigger>
                                <Button><LucidePlus :size="16" /> Bo'lim qo'shish</Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Yangi bo'lim qo'shish</DialogTitle>
                                </DialogHeader>
                                <div class="grid gap-3">
                                    <div>
                                        <Label>Nomi</Label>
                                        <Input v-model="departmentName"/>
                                    </div>
                                </div>
                                <DialogFooter class="gap-3">
                                    <DialogClose as-child>
                                        <Button variant="destructive">Yopish</Button>
                                    </DialogClose>
                                    <Button @click="addDepartment">Qo'shish</Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
                <div class="border rounded-md">
                    <Table class="whitespace-nowrap">
                        <TableHeader class="border-b">
                            <TableHead class="w-10">#</TableHead>
                            <TableHead>Nomi</TableHead>
                            <TableHead></TableHead>
                        </TableHeader>
                        <TableBody>
                            <TableRow v-if="departments" v-for="department, index in departments">
                                <TableCell>{{ index + 1 }}</TableCell>
                                <TableCell>
                                    {{ department.name }}
                                </TableCell>
                                <TableCell class="w-4">
                                    <ClientOnly>
                                        <Sheet>
                                            <SheetTrigger>
                                                <Button size="icon"><LucideEdit :size="16" /> </Button>
                                            </SheetTrigger>
                                            <SheetContent>
                                                <SheetHeader>
                                                    <SheetTitle>{{ department.name }} ni tahrirlash</SheetTitle>
                                                    <SheetDescription></SheetDescription>
                                                </SheetHeader>
                                                <div class="flex flex-col gap-3">
                                                    <Input v-model="department.name"/>
                                                    <Button @click="editDepartment(department.id, department.name)">Tahrirlash</Button>
                                                </div>
                                            </SheetContent>
                                        </Sheet>
                                    </ClientOnly>
                                </TableCell>
                                <TableCell class="w-6">
                                    <Dialog>
                                        <DialogTrigger>
                                            <Button variant="destructive" size="icon"><LucideTrash :size="16" /> </Button>
                                        </DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogTitle>{{ department.name }} ni o'chirish</DialogTitle>
                                            </DialogHeader>
                                            <p><span class="font-bold">`{{ department.name }}`</span> ni o'chirishga ishonchingiz komilmi?</p>
                                            <DialogFooter class="gap-3">
                                                <DialogClose>
                                                    <Button>Yo'q</Button>
                                                </DialogClose>
                                                <Button @click="deleteDepartment(department.id)" variant="destructive">Ha</Button>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>
                                </TableCell>
                            </TableRow>
                            <TableRow v-if="isLoading" v-for="index in 10" :key="index">
                                <TableCell><Skeleton class="w-4 h-4" /></TableCell>
                                <TableCell><Skeleton class="w-full h-4" /></TableCell>
                                <TableCell><Skeleton class="w-6 h-4" /></TableCell>
                                <TableCell><Skeleton class="w-6 h-4" /></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <div v-if="departments?.length === 0" class="flex gap-5 items-center justify-center py-5">
                        <LucideTriangleAlert :size="30" /><p class="text-3xl">Ma'lumot topilmadi</p>
                    </div>
                </div>
            </TabsContent>
        </Tabs>
    </div>
</template>
