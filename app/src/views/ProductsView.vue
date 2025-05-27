<!-- ****************** Script ****************** -->
<script setup lang="ts">
import ProductsOverview from "@/components/ProductsOverview.vue";
import ExpandCard from "@/components/ExpandCard.vue";
</script>

<!-- ****************** Template **************** -->
<template>
	<v-container class="main-section">
		<ProductsOverview />

		<div id="section-web" class="my-16">
			<h1 class="text-center text-h4 font-weight-bold mb-6">Badger Web Services</h1>
			<p class="text-center">
				Badger provides both out-of-the-box and custom-made web solutions for your event. Pick and
				choose features with our library of extensions and plugins, shaping Badger to suit your
				event's specific needs. Let Badger worry about the technology, from the development and
				deployment to the hosting and management.
			</p>
			<div id="badger-web-core" class="my-4">
				<ExpandCard
					title="Badger Web Core"
					:initiallyExpanded="true"
					backgroundColor="indigo-lighten-1"
					imageSrc="/promo/bwc.jpg"
				>
					<p>
						The Badger Web Core (BWC) is the central platform that powers the Badger system. It
						serves as the unified backend API that supports everything from attendee-facing web
						portals to on-site badge scanners. Built with scalability and reliability in mind, the
						Web Core acts as the data and logic layer for your entire event experience — managing
						user sessions, registration workflows, real-time badge scans, and more.
					</p>
				</ExpandCard>
			</div>
			<div id="event-management-interface" class="my-4">
				<ExpandCard
					title="Event Management Interface"
					:initiallyExpanded="true"
					backgroundColor="indigo-lighten-1"
					imageSrc="/promo/emi-browser.png"
				>
					<p>
						The Event Management Interface (EMI) is Badger's intuitive, browser-based control center
						for event staff. Designed with simplicity in mind, it provides a user-friendly
						environment for managing all aspects of your event — from registration data and badge
						assignments to check-in logistics and live updates. No technical background is required,
						making it easy for teams to get up and running quickly, even during fast-paced event
						prep.
					</p>
				</ExpandCard>
			</div>
			<div id="event-live-page" class="my-4">
				<ExpandCard
					title="Event Live Page"
					:initiallyExpanded="true"
					backgroundColor="indigo-lighten-1"
					imageSrc="/promo/elp-user.jpg"
				>
					<p>
						The Event Live Page (ELP) is the digital home base for your attendees during an event.
						It gives participants real-time access to everything they need — from live announcements
						and schedule updates to reward redemptions and personalized notifications. Whether
						they’re checking in, browsing sessions, or unlocking achievements, the Event Live Page
						keeps your audience informed, engaged, and connected throughout the entire event
						experience.
						<br /><br />
						Remix one of Badger's pre-built templates, let us create a custom page for you, or use
						the Badger Web Core to build your own from scratch. Whatever route you'd like to take,
						Badger can help you get there.
					</p>
				</ExpandCard>
			</div>
			<div id="managed-web-hosting" class="my-4">
				<ExpandCard
					title="Managed Web Hosting"
					:initiallyExpanded="true"
					backgroundColor="indigo-lighten-1"
					imageSrc="/promo/it-infrastructure.jpg"
				>
					<p>
						Badger takes care of the supporting IT infrastructure so you don't have to. We handle
						everything from deployment and hosting to performance tuning, security hardening, and
						ongoing maintenance. Whether it's the Badger Web Core, Event Management Interface, or
						Event Live Page, our team ensures your entire event platform is reliably hosted, always
						up-to-date, and secure — letting your staff focus on delivering a great event instead of
						managing servers or worrying about uptime.
					</p>
				</ExpandCard>
			</div>
			<!-- TODO extensions and plugins -->
		</div>

		<div id="section-badge" class="my-16"></div>
	</v-container>
</template>

<!-- ****************** Style ******************* -->
<style scoped lang="scss"></style>
