<!-- ****************** Script ****************** -->
<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
	lcolHeader: {
		type: String,
		default: "Lorem Ipsum",
	},
	rcolHeader: {
		type: String,
		default: "Dolor Sit",
	},
});
</script>

<!-- ****************** Template **************** -->
<template>
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
</template>

<!-- ****************** Style ******************* -->
<style scoped lang="scss"></style>
