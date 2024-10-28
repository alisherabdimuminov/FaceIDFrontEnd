import apify from "~/composables/useAPI";
import useAuth from "~/composables/useAuth";

export default defineNuxtRouteMiddleware(async (to, from) => {
    const { token } = useAuth();
    try {
        let response = await $fetch(apify(`employees/employee/${to.params.uuid}/`), {
            headers: {
                "Authorization": `Token ${token}`
            }
        });
    } catch {
        return navigateTo({ name: "admin" });
    }
});