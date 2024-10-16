export default function useAuth() {
    const tokenCookie = useCookie<string>("token", {
        watch: "shallow",
        default: () => ""
    });

    const token = tokenCookie.value;

    const logout = () => {
        tokenCookie.value = "";
    }

    const login = (token: string) => {
        tokenCookie.value = token;
    }

    return {
        token,
        login,
        logout,
    }
}
