<!-- ****************** Script ****************** -->
<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
	header: {
		type: String,
		default: "Lorem Ipsum",
	},
	lcolHeader: {
		type: String,
		default: "Dolor Sit",
	},
	rcolHeader: {
		type: String,
		default: "Amet Consectetur",
	},
});
</script>

<!-- ****************** Template **************** -->
<template>
	<section id="learn-more" class="py-16 px-6 text-center">
		<div class="mx-auto mb-10" style="max-width: 1000px">
			<h2 class="text-h4 font-weight-bold mb-6">{{ props.header }}</h2>
			<slot name="subtitle" class="text-subtitle-1" />
		</div>
		<v-row dense>
			<v-col cols="12" md="6">
				<v-card class="pa-6" outlined>
					<h3 class="mb-2 font-weight-bold">{{ props.lcolHeader }}</h3>
					<slot name="lcol" class="text-body-2" />
				</v-card>
			</v-col>
			<v-col cols="12" md="6">
				<v-card class="pa-6" color="primary" dark>
					<h3 class="mb-2 font-weight-bold">{{ props.rcolHeader }}</h3>
					<slot name="rcol" class="text-body-2" />
				</v-card>
			</v-col>
		</v-row>
	</section>
</template>

<!-- ****************** Style ******************* -->
<style scoped lang="scss"></style>
