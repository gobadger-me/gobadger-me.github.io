<!-- ****************** Script ****************** -->
<script setup lang="ts"></script>

<!-- ****************** Template **************** -->
<template>
	<section class="hero-section d-flex align-center">
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
.hero-section {
	min-height: 80vh;
	background-color: var(--v-theme-background);
}
</style>
