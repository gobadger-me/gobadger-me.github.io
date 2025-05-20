<!-- ****************** Script ****************** -->
<script setup lang="ts">
import Hero from "@/components/Hero.vue";
import bgImg from "@/assets/img/background.png";
</script>

<!-- ****************** Template **************** -->
<template>

	<Hero
		:bgImg="bgImg"
		scrollTo="learn-more"
		scrollToText="Learn More"
		header="It starts with the Badge."
	>
		<template #subtitle>
			<p class="mb-4">Integrate in-person and online functions for a seamless event experience.</p>
			<p>
				Manage registrations, incentivize and track engagement, build schedules —
				<b>and so much more</b> — with ease. Badger handles the details, so you can focus on the
				event.
			</p>
		</template>
	</Hero>

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
</style>
