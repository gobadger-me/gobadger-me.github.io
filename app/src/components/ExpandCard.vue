<!-- ****************** Script ****************** -->
<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
	title: {
		type: String,
		required: true,
	},
	initiallyExpanded: {
		type: Boolean,
		default: false,
	},
});

const expanded = ref(!!__props.initiallyExpanded);

function toggle() {
	expanded.value = !expanded.value;
}
</script>

<!-- ****************** Template **************** -->
<template>
	<v-card outlined>
		<v-card-title
			class="d-flex justify-space-between align-center"
			style="cursor: pointer"
			@click.stop="toggle"
		>
			<div class="text-h5 font-weight-bold">{{ props.title }}</div>
			<v-icon>{{ expanded ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
		</v-card-title>

		<v-expand-transition>
			<v-card-text v-if="expanded" class="mt-2">
				<slot />
			</v-card-text>
		</v-expand-transition>
	</v-card>
</template>

<!-- ****************** Style ******************* -->
<style scoped lang="scss">
v-card {
	user-select: none;
}
v-card:hover {
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
</style>
