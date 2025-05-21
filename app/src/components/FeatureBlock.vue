<!-- ****************** Script ****************** -->
<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
	image: {
		type: String,
		required: true,
	},
	alt: {
		type: String,
		default: "Feature Image",
	},
	reverse: {
		type: Boolean,
		default: false,
	},
});
</script>

<!-- ****************** Template **************** -->
<template>
	<section class="feature-block py-16 px-6">
		<v-container>
			<v-row align="center" :class="['feature-row', { 'flex-row-reverse': reverse }]">
				<!-- Text Content -->
				<v-col cols="12" md="6" class="mb-8 mb-md-0">
					<slot />
				</v-col>

				<!-- Image -->
				<v-col cols="12" md="6" class="text-center">
					<v-img
						:src="props.image"
						:alt="props.alt"
						max-width="100%"
						max-height="400"
						class="mx-auto"
						cover
					/>
				</v-col>
			</v-row>
		</v-container>
	</section>
</template>

<!-- ****************** Style ******************* -->
<style scoped lang="scss">
.feature-block {
	background-color: var(--v-theme-surface);
	border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.feature-row {
	gap: 2rem;
	flex-wrap: wrap;

	@media (min-width: 960px) {
		/* Vuetify md breakpoint */
		flex-wrap: nowrap;
	}
}

.flex-row-reverse {
	@media (max-width: 959px) {
		flex-direction: row !important;
	}
}
</style>
