<!-- ****************** Script ****************** -->
<script setup lang="ts">
import HeroSection from "@/components/HeroSection.vue";
import ProblemStatement from "@/components/ProblemStatement.vue";
import ProblemRow from "@/components/ProblemRow.vue";

import bgImg from "@/assets/img/background.png";
</script>

<!-- ****************** Template **************** -->
<template>
	<div>
		<HeroSection
			header="It starts with the Badge."
			scrollToId="learn-more"
			scrollToText="Learn More"
			:bgImg="bgImg"
		>
			<template #subtitle>
				<p class="mb-4">
					Integrate in-person and online functions for a seamless event experience.
				</p>
				<p>
					Manage registrations, incentivize and track engagement, build schedules —
					<b>and so much more</b> — with ease. Badger handles the details, so you can focus on the
					event.
				</p>
			</template>
		</HeroSection>

		<ProblemStatement header="Events Are Complex. Badger Simplifies Them.">
			<template #subtitle>
				<p>
					Managing an event shouldn't mean juggling disconnected systems, stressed staff, and
					endless spreadsheets. Badger unifies registration, engagement tracking, attendance,
					scheduling, analytics, and so much more—all in one seamless platform. With Badger, you can
					focus on creating a memorable event instead of managing chaos.
				</p>
			</template>
			<template #contents>
				<ProblemRow lcolHeader="Without Badger" rcolHeader="With Badger">
					<template #lcol>
						<p>
							Tracking attendance and engagement is clunky at best, nonexistent at worst, and almost
							always chaotic.
							<br class="mb-4" />
							You’re stuck relying on spreadsheets, paper sign-in forms, check-in staff, or systems
							that don’t talk to each other. Lines form as your staff have to look for names in
							lists, people fumble with QR codes, camera apps fail to scan, and every interaction
							becomes a bottleneck.
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
				</ProblemRow>
				<ProblemRow lcolHeader="Without Badger" rcolHeader="With Badger">
					<template #lcol>
						<p>
							Making announcements, managing a schedule, adapting to on-the-fly changes, and keeping
							everyone on the same page is a complicated game of telephone, spreadsheets, and
							crossed fingers. Communication is fragmented, and everyone is left guessing, leaving
							attendees frustrated and staff scrambling.
						</p>
					</template>
					<template #rcol>
						<p>
							Let Badger be your event's central platform. Manage your event from the Event
							Management Interface. Unify the event experience for both staff and attendees.
						</p>
					</template>
				</ProblemRow>
				<ProblemRow lcolHeader="Without Badger" rcolHeader="With Badger">
					<template #lcol>
						<p>
							Talk to different vendors for badge design and manufacturing; lanyard design and
							manufacturing; web design, development, hosting, and support; and more. Each of your
							business needs is a different vendor, and each vendor has a different system. You’re
							stuck with a patchwork of solutions that don’t work together.
						</p>
					</template>
					<template #rcol>
						<p>
							Let Badger be your one-stop shop. Everything is done under one roof, simplifying your
							procurement process and reducing the number of account managers you need to engage.
						</p>
					</template>
				</ProblemRow>
				<ProblemRow lcolHeader="Without Badger" rcolHeader="With Badger">
					<template #lcol>
						<p>
							Get ready to receive 6-figure invoices from our competitors, each solving only a
							fraction of your event management needs. They don't care about the little fish.
						</p>
					</template>
					<template #rcol>
						<p>
							We'll work with your team's capability. Student events, non-profits, local community
							events, and more—we have your back.
						</p>
					</template>
				</ProblemRow>
			</template>
		</ProblemStatement>
	</div>
</template>

<!-- ****************** Style ******************* -->
<style scoped lang="scss"></style>
