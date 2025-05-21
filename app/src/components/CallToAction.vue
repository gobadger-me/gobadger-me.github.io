<!-- ****************** Script ****************** -->
<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
	header: {
		type: String,
		default: "Lorem Ipsum",
	},
	subtitle: {
		type: String,
		default: "Dolor sit amet, consectetur adipiscing elit.",
	},
	linkTo: {
		type: String,
		default: null,
	},
	buttonText: {
		type: String,
		default: "Sed Do",
	},
});
</script>

<!-- ****************** Template **************** -->
<template>
	<section class="cta-section py-16 px-6 text-center">
		<v-container>
			<v-row justify="center">
				<v-col cols="12" md="8">
					<h2 class="text-h4 font-weight-bold mb-4">
						{{ props.header }}
					</h2>
					<p class="text-subtitle-1 mb-6">
						{{ props.subtitle }}
					</p>
					<v-btn color="primary" size="large" :to="props.linkTo">
						{{ props.buttonText }}
					</v-btn>
				</v-col>
			</v-row>
		</v-container>
	</section>
</template>

<!-- ****************** Style ******************* -->
<style scoped lang="scss">
.cta-section {
	background-color: var(--v-theme-surface);
	border-radius: 16px;
	margin: 4rem auto;
	box-shadow: 0 2px 16px rgba(0, 0, 0, 0.05);
}
</style>
