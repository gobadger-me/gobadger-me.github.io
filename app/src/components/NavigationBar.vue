<!-- ****************** Script ****************** -->
<script setup lang="ts">
import logo from "@/assets/img/logo.svg";
import { ref, onMounted, onBeforeUnmount } from "vue";

const navLinks = [
	{ text: "Home", href: "/" },
	//	{ text: "Features", href: "/features" },
	//	{ text: "Pricing", href: "/pricing" },
	//	{ text: "About", href: "/about" },
];

const isScrolled = ref(false);

const handleScroll = () => {
	isScrolled.value = window.scrollY > 10;
};

onMounted(() => {
	window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
	window.removeEventListener("scroll", handleScroll);
});
</script>

<!-- ****************** Template **************** -->
<template>
	<v-app-bar
		:elevation="isScrolled ? 4 : 0"
		:color="isScrolled ? 'background' : 'transparent'"
		flat
		height="80"
		class="transition-colors"
		scroll-behavior="elevate"
		scroll-threshold="10"
		app
	>
		<v-img :src="logo" alt="GoBadger LLC" contain max-width="150" class="ml-6" />
		<v-spacer />
		<v-btn text class="mx-2" v-for="link in navLinks" :key="link.text" :to="link.href">
			{{ link.text }}
		</v-btn>
		<v-btn color="primary" class="ml-4 mr-6" rounded to="/contact"> Get Started </v-btn>
	</v-app-bar>
</template>

<!-- ****************** Style ******************* -->
<style scoped lang="scss">
.v-app-bar {
	backdrop-filter: blur(8px); /* subtle glass effect */
	transition:
		background-color 0.3s ease,
		box-shadow 0.3s ease;
}
</style>
