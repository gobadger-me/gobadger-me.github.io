<!-- ****************** Script ****************** -->
<script setup lang="ts">
const showSocial = true;

const companyLinks = [
	{ label: "Home", to: "/" },
	{ label: "About", to: "/about" },
	{ label: "Products", to: "/products" },
	//	{ label: "Solutions", to: "/solutions" },
	{ label: "Careers", to: "/careers" },
	{ label: "Contact", to: "/contact" },
	//	{ label: "Blog", to: "/blog" },
];

const legalLinks = [
	{ label: "Terms and Conditions", to: "/terms" },
	{ label: "Privacy Policy", to: "/privacy" },
	{ label: "Acceptable Use Policy", to: "/acceptable-use" },
	{ label: "Disclaimer", to: "/disclaimer" },
];

function scrollToTop() {
	window.scrollTo({ top: 0, behavior: "smooth" });
}
</script>

<!-- ****************** Template **************** -->
<template>
	<v-footer color="background" class="pt-10 pb-6 border-top">
		<v-container>
			<v-row>
				<!-- Left: Logo / Brand Info -->
				<v-col cols="12" md="4">
					<div class="text-h6 font-weight-bold mb-2">Badger</div>
					<p class="text-body-2">Let's make a great event together.</p>
				</v-col>

				<!-- Middle: Navigation Links -->
				<v-col cols="12" sm="6" md="4">
					<div class="text-subtitle-2 font-weight-medium mb-2">Company</div>
					<v-list density="compact" nav>
						<v-list-item
							v-for="(link, i) in companyLinks"
							:key="i"
							:to="link.to"
							@click="scrollToTop"
						>
							<v-list-item-title>{{ link.label }}</v-list-item-title>
						</v-list-item>
					</v-list>
				</v-col>

				<!-- Right: Legal Links -->
				<v-col cols="12" sm="6" md="4">
					<div class="text-subtitle-2 font-weight-medium mb-2">Legal</div>
					<v-list density="compact" nav>
						<v-list-item
							v-for="(link, i) in legalLinks"
							:key="i"
							:to="link.to"
							@click="scrollToTop"
						>
							<v-list-item-title>{{ link.label }}</v-list-item-title>
						</v-list-item>
					</v-list>
				</v-col>
			</v-row>

			<!-- Bottom Row -->
			<v-row class="mt-8 justify-space-between align-center">
				<v-col cols="12" md="6" class="text-caption">
					&copy; {{ new Date().getFullYear() }} GoBadger LLC. All rights reserved.
				</v-col>

				<!-- Optional: Social Links -->
				<v-col cols="12" md="6" class="d-flex justify-end" v-if="showSocial">
					<v-btn
						icon
						variant="text"
						href="https://www.linkedin.com/company/106381083"
						target="_blank"
					>
						<v-icon>mdi-linkedin</v-icon>
					</v-btn>
				</v-col>
			</v-row>
		</v-container>
	</v-footer>
</template>

<!-- ****************** Style ******************* -->
<style scoped lang="scss">
.border-top {
	border-top: 1px solid rgba(255, 255, 255, 0.1);
}
</style>
