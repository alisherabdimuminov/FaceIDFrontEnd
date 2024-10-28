<script setup lang="ts">
import { Toaster as T } from './components/ui/sonner';
import Toaster from './components/ui/toast/Toaster.vue';
</script>

<template>
	<ClientOnly>
		<Toaster />
		<T />
	</ClientOnly>
	<div>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>
