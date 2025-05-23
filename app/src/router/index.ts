//import { createRouter, createWebHistory } from "vue-router";
import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import CareersView from "@/views/CareersView.vue";
import ContactView from "@/views/ContactView.vue";
import LegalTermsView from "@/views/LegalTermsView.vue";
import LegalPrivacyPolicyView from "@/views/LegalPrivacyPolicyView.vue";
import LegalAcceptableUseView from "@/views/LegalAcceptableUseView.vue";
import LegalDisclaimerView from "@/views/LegalDisclaimerView.vue";

import NotFound from "@/views/NotFound.vue";

const router = createRouter({
	//	history: createWebHistory(import.meta.env.BASE_URL),
	history: createWebHashHistory(),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView,
		},
		{
			path: "/careers",
			name: "careers",
			component: CareersView,
		},
		{
			path: "/contact",
			name: "contact",
			component: ContactView,
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
		{
			path: "/:pathMatch(.*)*",
			name: "NotFound",
			component: NotFound,
		},
	],
});

export default router;
