<!-- ****************** Script ****************** -->
<script setup lang="ts">
import logo from "@/assets/img/logo.svg";
import { ref, onMounted, onBeforeUnmount } from "vue";

const navLinks = [
	{ text: "Home", href: "/" },
	{ text: "About", href: "/about" },
	{ text: "Products", href: "/products" },
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

function scrollToTop() {
	window.scrollTo({ top: 0, behavior: "smooth" });
}
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
		<router-link
			to="/"
			class="ml-6 px-2 d-inline-block"
			style="max-width: 150px"
			@click="scrollToTop"
		>
			<img :src="logo" alt="GoBadger Logo" style="width: 100%" />
		</router-link>
		<v-spacer />
		<v-btn
			text
			class="mx-2"
			v-for="link in navLinks"
			:key="link.text"
			:to="link.href"
			@click="scrollToTop"
		>
			{{ link.text }}
		</v-btn>
		<v-btn color="primary" class="ml-4 mr-6" rounded to="/contact" @click="scrollToTop">
			Get Started
		</v-btn>
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
