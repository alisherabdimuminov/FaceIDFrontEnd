import useAuth from "~/composables/useAuth";

export default defineNuxtRouteMiddleware((to, from) => {
    const { token, logout } = useAuth();
    if (token !== "") {
        return navigateTo("/");
    }
});