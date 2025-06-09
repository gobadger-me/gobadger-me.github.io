<!-- ****************** Script ****************** -->
<script setup lang="ts">
import ProductCategoryCard from "@/components/ProductCategoryCard.vue";
import { defineProps } from "vue";

const props = defineProps({
	goToLink: {
		// if defined, go to this link instead of the anchor.
		type: String,
		default: "",
	},
});

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
			{ label: "PVC, PCB, and Paper Badges", anchor: "badges" },
			{ label: "Bx Scanner Rentals", anchor: "bx-scanner-rentals" },
			{ label: "Lanyards and Accessories", anchor: "lanyards-and-accessories" },
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
	<v-container>
		<v-row justify="center" class="mb-4">
			<v-col cols="12">
				<h1 class="text-center text-h4 font-weight-bold mb-6">Products</h1>
				<p class="text-center">
					Explore our offerings, or
					<router-link to="/contact" class="text-primary" @click="scrollToTop">
						contact us</router-link
					>
					to learn more about how we can help you with your next event.
				</p>
			</v-col>
		</v-row>

		<v-row class="mb-4">
			<v-col v-for="(category, index) in productCategories" :key="index" cols="12" md="4">
				<ProductCategoryCard
					:title="category.title"
					:subtitle="category.subtitle"
					:icon="category.icon"
					:color="category.color"
					:items="category.items"
					:parentAnchor="category.parentAnchor"
					:goToLink="props.goToLink"
				/>
			</v-col>
		</v-row>
	</v-container>
</template>

<!-- ****************** Style ******************* -->
<style scoped lang="scss"></style>
