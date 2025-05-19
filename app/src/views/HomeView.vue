<!-- ****************** Script ****************** -->
<script setup lang="ts">
import backgroundImage from "@/assets/img/background.png";
</script>

<!-- ****************** Template **************** -->
<template>
	<!-- Hero -->
	<section class="hero d-flex align-center">
		<!-- Background image div -->
		<div class="hero-bg" :style="{ backgroundImage: `url(${backgroundImage})` }"></div>

		<div class="text-left px-6 py-16 ml-16" style="max-width: 800px">
			<h1 class="text-h2 font-weight-bold mb-4 text-on-background">It starts with the Badge.</h1>
			<p class="text-subtitle-1 mb-4 text-on-background">
				Integrate in-person and online functions for a seamless event experience.
			</p>
			<p class="text-subtitle-1 mb-16 text-on-background">
				Manage registrations, incentivize and track engagement, build schedules —
				<b>and so much more</b> — with ease. Badger handles the details, so you can focus on the
				event.
			</p>
			<v-btn color="primary" size="large" @click="scrollToLearnMore"> Learn More </v-btn>
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
