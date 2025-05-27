<!-- ****************** Script ****************** -->
<script setup lang="ts">
import ProductCategoryCard from "@/components/ProductCategoryCard.vue";
import ExpandCard from "@/components/ExpandCard.vue";

const productCategories = [
	{
		title: "Web Services",
		subtitle: "Custom web solutions and managed IT services for your event needs.",
		icon: "mdi-web",
		color: "indigo-lighten-1",
		items: [
			{ label: "Badger Web Core", anchor: "badger-web-core" },
			{ label: "Event Management Interface", anchor: "event-management-interface" },
			{ label: "Event Live Page", anchor: "event-live-page" },
			{ label: "Managed Web Hosting", anchor: "managed-web-hosting" },
			{ label: "Extensions and Plugins", anchor: "extensions-and-plugins" },
		],
		parentAnchor: "section-web",
	},
	{
		title: "Badge Services",
		subtitle: "NFC-enabled badge manufacturing and scanner solutions.",
		icon: "mdi-card-account-details",
		color: "deep-orange-darken-3",
		items: [
			{ label: "PVC, PCB, and/or Paper Badges", anchor: "badges" },
			{ label: "Bx Scanner Rentals", anchor: "scanner-rentals" },
			{ label: "Lanyards and Accessories", anchor: "lanyards" },
		],
		parentAnchor: "section-badge",
	},
	{
		title: "Event Services",
		subtitle: "Badger support for your event, before, during, and after your big day.",
		icon: "mdi-calendar-star",
		color: "teal-lighten-2",
		items: [
			{ label: "Engagement Support", anchor: "engagement-support" },
			{ label: "Online Event Support", anchor: "online-support" },
			{ label: "On-site Event Support", anchor: "onsite-support" },
		],
		parentAnchor: "section-event",
	},
];

function scrollToTop() {
	window.scrollTo({ top: 0, behavior: "smooth" });
}
</script>

<!-- ****************** Template **************** -->
<template>
	<v-container class="main-section">
		<v-row justify="center" class="mb-4">
			<v-col cols="12">
				<h1 class="text-center text-h4 font-weight-bold mb-6">Products</h1>
				<p class="text-center">
					Explore our offerings, or
					<router-link to="/contact" class="text-primary" @click="scrollToTop"
						>contact us</router-link
					>
					to learn more about how we can help you with your next event.
				</p>
			</v-col>
		</v-row>

		<v-row>
			<v-col v-for="(category, index) in productCategories" :key="index" cols="12" md="4">
				<ProductCategoryCard
					:title="category.title"
					:subtitle="category.subtitle"
					:icon="category.icon"
					:color="category.color"
					:items="category.items"
					:parentAnchor="category.parentAnchor"
				/>
			</v-col>
		</v-row>

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
