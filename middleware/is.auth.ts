import useAuth from "~/composables/useAuth";

export default defineNuxtRouteMiddleware((to, from) => {
    const { token, logout } = useAuth();
    if (token === "") {
        logout();
        return navigateTo({ name: "auth-login" });
    }
});