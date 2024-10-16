export default function apify(url: string) {
    const config = useRuntimeConfig();
    return `${config.public.api}${url}`;
}