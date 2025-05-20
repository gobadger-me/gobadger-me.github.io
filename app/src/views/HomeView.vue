<!-- ****************** Script ****************** -->
<script setup lang="ts">
import backgroundImage from "@/assets/img/background.png";

function scrollToLearnMore() {
	const el = document.getElementById("learn-more");
	if (el) {
		const offset = 70;
		const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
		window.scrollTo({ top, behavior: "smooth" });
	}
}
</script>

<!-- ****************** Template **************** -->
<template>
	<!-- Hero -->
	<section class="hero d-flex align-center">
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

	<!-- Problem & Solution -->
	<section id="learn-more" class="py-16 px-6 text-center">
		<div class="mx-auto" style="max-width: 1000px">
			<h2 class="text-h4 font-weight-bold mb-6">Events Are Complex. Badger Simplifies Them.</h2>
			<p class="text-subtitle-1 mb-10">
				Managing an event shouldn't mean juggling multiple tools, disjointed systems, and constant
				stress. Badger brings everything under one roof—registration, engagement tracking,
				scheduling, and more—so you can focus on delivering a great experience.
			</p>
		</div>
		<v-row dense>
			<v-col cols="12" md="6">
				<v-card class="pa-6" outlined>
					<h3 class="mb-2 font-weight-bold">Without Badger</h3>
					<p class="text-body-2">Multiple tools, missed scans, manual work.</p>
				</v-card>
			</v-col>
			<v-col cols="12" md="6">
				<v-card class="pa-6" color="primary" dark>
					<h3 class="mb-2 font-weight-bold">With Badger</h3>
					<p class="text-body-2">Integrated, real-time, automatic tracking and engagement.</p>
				</v-card>
			</v-col>
		</v-row>
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
