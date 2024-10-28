<script setup lang="ts">
import { LucideLogOut, LucideMoon, LucideSun, LucideUser, LucideHome } from 'lucide-vue-next';
import { buttonVariants } from '~/components/ui/button';
import { cn } from '~/lib/utils';

const { logout } = useAuth();
const colorMode = useColorMode();
const route = useRoute();

</script>

<template>
    <div class="h-screen w-full">
        <header class="h-[3rem] flex items-center justify-between px-5 md:px-10 border-b">
            <div class="flex items-center justify-center gap-5">
                <div>
                    <p :class="cn(buttonVariants({ variant: 'outline', size: 'sm' }))">Admin</p>
                </div>
                <div class="flex items-center gap-2">
                    <NuxtLink class="font-bold" :class="route.name === 'admin' ? 'text-foreground underline underline-offset-4': 'text-muted-foreground'" :to="{ name: 'admin' }"><LucideHome :size="16" /></NuxtLink>
                    <NuxtLink class="font-bold" :class="route.path.includes('employees') ? 'text-foreground underline underline-offset-4': 'text-muted-foreground'" :to="{ name: 'admin-employees' }">Xodimlar</NuxtLink>
                    <NuxtLink class="font-bold" :class="route.path.includes('reports') ? 'text-foreground underline underline-offset-4': 'text-muted-foreground'" :to="{ name: 'admin-reports' }">Hisobotlar</NuxtLink>
                </div>
            </div>
            <div>
                <ClientOnly>
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Button variant="outline" size="icon"><LucideUser :size="16" /> </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent class="w-56">
                            <DropdownMenuLabel>Admin</DropdownMenuLabel>
                            <DropdownMenuItem @click="colorMode.preference = 'light'">
                                <span>Yorqin</span>
                                <DropdownMenuShortcut>
                                    <LucideSun :size="16" />
                                </DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem @click="colorMode.preference = 'dark'">
                                <span>Qorong'u</span>
                                <DropdownMenuShortcut>
                                    <LucideMoon :size="16" />
                                </DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem class="text-red-500" @click="logout">
                                Chiqish
                                <DropdownMenuShortcut>
                                    <LucideLogOut :size="16" />
                                </DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </ClientOnly>
            </div>
        </header>
        <ScrollArea class="h-[calc(100%-3.1rem)] w-full">
            <slot />
        </ScrollArea>
    </div>
</template>
