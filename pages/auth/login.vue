<script setup lang="ts">
import useAuth from "@/composables/useAuth";
import { useToast } from "~/components/ui/toast";
import apify from "~/composables/useAPI";
import type { IResponse } from "~/types";

definePageMeta({
    layout: "auth",
    middleware: "is-not-auth",
});
useHead({
    title: "Kirish"
});

const { login } = useAuth();
const { toast } = useToast();

const username = ref("");
const password = ref("");
const isLoading = ref(false);


const loginHandler = async () => {
    isLoading.value = true;
    let response = await $fetch<IResponse<string>>(apify("auth/login/"), {
        method: "POST",
        body: JSON.stringify({
            username: username.value,
            password: password.value,
        }),
    });

    if (response.status === "success") {
        login(response.data);
        navigateTo('/');
    } else {
        if (response.code === "404") {
            toast({
                title: "Xatolik",
                description: "Foydalanuvchi topilmadi! Qaytadan urinib ko'ring",
            });
        } else if (response.code === "405") {
            toast({
                title: "Xatolik",
                description: "Parol noto'g'ri. Qaytadan urinib ko'ring",
            });
        } else {
            toast({
                title: "Xatolik",
                description: "Tizim xatoligi. Adminga murojat qiling.",
            });
        }
    }
    isLoading.value = false;
}

</script>

<template>
    <div class="w-96 grid gap-3">
        <p class="text-center">Kirish</p>

        <div>
            <Label>Foydalanuvchi nomi</Label>
            <Input :disabled="isLoading" v-model="username" />
        </div>

        <div>
            <Label>Parol</Label>
            <Input :disabled="isLoading" v-model="password" />
        </div>

        <Button :disabled="isLoading" @click="loginHandler">Kirish</Button>
    </div>
</template>
