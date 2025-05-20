<!-- ****************** Script ****************** -->
<script setup lang="ts">
import HeroSection from "@/components/HeroSection.vue";
import ProblemStatement from "@/components/ProblemStatement.vue";

import bgImg from "@/assets/img/background.png";
</script>

<!-- ****************** Template **************** -->
<template>
	<HeroSection
		:bgImg="bgImg"
		scrollToId="learn-more"
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
	</HeroSection>

	<ProblemStatement
		header="Events Are Complex. Badger Simplifies Them."
		lcolHeader="Without Badger"
		rcolHeader="With Badger"
	>
		<template #subtitle>
			<p>
				Managing an event shouldn't mean juggling disconnected systems, stressed staff, and endless
				spreadsheets. Badger unifies registration, engagement tracking, attendance, scheduling,
				analytics, and so much more—all in one seamless platform. You can focus on creating a
				memorable event instead of managing chaos.
			</p>
		</template>
		<template #lcol>
			<p>
				Tracking attendance and engagement is clunky at best, nonexistent at worst, and almost
				always chaotic.
				<br class="mb-4" />
				You’re stuck relying on spreadsheets, paper sign-in forms, check-in staff, or systems that
				don’t talk to each other. Lines form as your staff has to look for names in lists, people
				fumble with QR codes, camera apps fail to scan, and every interaction becomes a bottleneck.
				<br class="mb-4" />
				It’s inefficient, error-prone, and drains your team’s time and energy.
			</p>
		</template>
		<template #rcol>
			<p>
				Tap a card.
				<br class="mb-4" />
				It's done in 0.05 seconds (yes, really).
			</p>
		</template>
	</ProblemStatement>
</template>

<!-- ****************** Style ******************* -->
<style scoped lang="scss"></style>
