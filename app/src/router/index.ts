import { createRouter, createWebHashHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ProductsView from "@/views/ProductsView.vue";
import ContactView from "@/views/ContactView.vue";

import CareersView from "@/views/CareersView.vue";
import LegalTermsView from "@/views/LegalTermsView.vue";
import LegalPrivacyPolicyView from "@/views/LegalPrivacyPolicyView.vue";
import LegalAcceptableUseView from "@/views/LegalAcceptableUseView.vue";
import LegalDisclaimerView from "@/views/LegalDisclaimerView.vue";

import NotFound from "@/views/NotFound.vue";

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		// General
		{
			path: "/",
			name: "home",
			component: HomeView,
		},
		{
			path: "/about",
			name: "about",
			component: AboutView,
		},
		{
			path: "/products",
			name: "products",
			component: ProductsView,
		},
		{
			path: "/contact",
			name: "contact",
			component: ContactView,
		},
		// Footer Only
		{
			path: "/careers",
			name: "careers",
			component: CareersView,
		},
		{
			path: "/terms",
			name: "terms",
			component: LegalTermsView,
		},
		{
			path: "/privacy",
			name: "privacy",
			component: LegalPrivacyPolicyView,
		},
		{
			path: "/acceptable-use",
			name: "acceptable-use",
			component: LegalAcceptableUseView,
		},
		{
			path: "/disclaimer",
			name: "disclaimer",
			component: LegalDisclaimerView,
		},
		// 404
		{
			path: "/:pathMatch(.*)*",
			name: "NotFound",
			component: NotFound,
		},
	],
	scrollBehavior(to) {
		if (to.hash) {
			return {
				el: to.hash,
				behavior: "smooth",
			};
		}
		return { top: 0, behavior: "smooth" };
	},
});

export default router;
