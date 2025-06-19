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
		<JobOpportunities class="my-8" id="opportunities">
			<p>There are no current openings.</p>
		</JobOpportunities>
	</div>
</template>

<!-- ****************** Style ******************* -->
<style scoped lang="scss">
.job-details {
	ul {
		padding-left: 1.2rem;
		list-style-type: disc;
		margin-bottom: 1rem;
	}

	p {
		margin: 0.5rem 0;
	}
}
</style>
