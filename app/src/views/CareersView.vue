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
			<JobListing>
				<template #title>Front-end Web Development Internship</template>
				<template #content>
					<div class="job-details">
						<p><strong>Job Type:</strong> Part-time, paid internship</p>
						<p><strong>Duration:</strong> June – August 2025 (8 Weeks)</p>
						<p>
							<strong>Compensation:</strong> $20 per hour, for an average of 20 hours per week. No
							overtime. No benefits.
						</p>
						<p><strong>Location:</strong> Remote in California</p>

						<br />
						<p>
							<strong>Summary:</strong> Badger is seeking a Front-end Web Development Intern for an
							eight-week-long project. In this entry-level role, you’ll be responsible for building
							four customer-facing web templates powered by Badger. You’ll be working in a creative,
							Results-Only Work Environment (ROWE), where autonomy and accountability are key. This
							role is ideal for college or university students seeking a summer opportunity flexible
							with their other academic or professional obligations.
						</p>

						<br />
						<p><strong>Responsibilities:</strong></p>
						<ul>
							<li>Create four Event Live Page (ELP) front-end web templates powered by Badger.</li>
							<li>Communicate front-end needs to our back-end team for API development.</li>
							<li>Work in Vue.js. Usage of Vuetify is preferred, but not required.</li>
							<li>Write test cases simulating various user stories to ensure code integrity.</li>
							<li>Log progress and time in OpenProject.</li>
						</ul>

						<p><strong>Required Qualifications:</strong></p>
						<ul>
							<li>Must be 18 years or older.</li>
							<li>No prior work experience required.</li>
							<li>Strong reliability and consistent work ethics are expected.</li>
							<li>Be able to work an average of 20 hours per week for 8 weeks.</li>
							<li>Must be a resident of California.</li>
						</ul>

						<p><strong>Preferred Qualifications:</strong></p>
						<ul>
							<li>Currently pursuing a degree at a college or university.</li>
							<li>Portfolio of past projects. A GitHub or personal website are encouraged.</li>
							<li>Familiarity with Vue.js or other modern front-end frameworks such as React.</li>
							<li>Familiarity with REST and WebSocket APIs.</li>
						</ul>

						<br />
						<p>
							<strong>Apply:</strong> Please send a resume and cover letter to
							<a href="mailto:contact@gobadger.me">contact@gobadger.me</a>.
						</p>
						<p><strong>This posting will remain open until filled.</strong></p>
					</div>
				</template>
			</JobListing>
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
