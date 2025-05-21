<script setup lang="ts">
import NavigationBar from "@/components/NavigationBar.vue";
import FooterSection from "@/components/FooterSection.vue";
</script>

<template>
	<v-app class="bg-background text-on-background">
		<NavigationBar />
		<router-view v-slot="{ Component }">
			<transition name="fade" mode="out-in">
				<component :is="Component" />
			</transition>
		</router-view>
		<FooterSection />
	</v-app>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
