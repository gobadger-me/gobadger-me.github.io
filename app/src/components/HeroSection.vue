<!-- ****************** Script ****************** -->
<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
	bgImg: {
		type: Object,
		default: null,
	},
	scrollToId: {
		type: String,
		default: null,
	},
	scrollToText: {
		type: String,
		default: "Get Started",
	},
	header: {
		type: String,
		default: "Lorem Ipsum",
	},
});

function scrollTo() {
	const el = document.getElementById(props.scrollToId);
	if (el) {
		const offset = 70;
		const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
		window.scrollTo({ top, behavior: "smooth" });
	}
}
</script>

<!-- ****************** Template **************** -->
<template>
	<section class="hero d-flex align-center">
		<div class="hero-bg" :style="{ backgroundImage: `url(${props.bgImg})` }"></div>
		<div class="text-left px-6 py-16 ml-16" style="max-width: 800px">
			<h1 class="text-h2 font-weight-bold mb-4 text-on-background">{{ header }}</h1>
			<slot name="subtitle" class="text-subtitle-1 text-on-background" />
			<v-btn class="mt-16" color="primary" size="large" @click="scrollTo">{{ scrollToText }}</v-btn>
		</div>
	</section>
</template>

<!-- ****************** Style ******************* -->
<style scoped lang="scss">
.hero {
	position: relative;
	min-height: 80vh;
	background-color: var(--v-theme-background);
	overflow: hidden;
	border-bottom: 1px solid white;

	.hero-bg {
		position: absolute;
		inset: 0;
		background-size: cover;
		background-position: center;
		filter: blur(2px);
		opacity: 0.3;
		z-index: 0;
	}

	> div:not(.hero-bg) {
		position: relative;
		z-index: 1;
	}
}
</style>
