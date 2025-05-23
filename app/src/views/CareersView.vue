<!-- ****************** Script ****************** -->
<script setup lang="ts">
import HeroSection from "@/components/HeroSection.vue";
import bgImg from "@/assets/img/background.png";
import JobOpportunities from "@/components/JobOpportunities.vue";
import JobListing from "@/components/JobListing.vue";
</script>

<!-- ****************** Template **************** -->
<template>
	<div>
		<!-- Hero -->
		<HeroSection
			header="Careers"
			scrollToId="opportunities"
			scrollToText="Explore Opportunities"
			:bgImg="bgImg"
		>
			<template #subtitle>
				<p>Help us build technologies that facilitate meaningful connections.</p>
			</template>
		</HeroSection>

		<!-- Opportunities -->
		<JobOpportunities class="mt-8">
			<JobListing>
				<template #title>Frontend Developer</template>
				<template #content>Work on Vue-based applications.</template>
			</JobListing>
		</JobOpportunities>
	</div>
</template>

<!-- ****************** Style ******************* -->
<style scoped lang="scss"></style>
