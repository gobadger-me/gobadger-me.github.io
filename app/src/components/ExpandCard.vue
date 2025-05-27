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
	backgroundColor: {
		type: String,
		default: "",
	},
	imageSrc: {
		type: String,
		default: "",
	},
});

const expanded = ref(!!props.initiallyExpanded);

function toggle() {
	expanded.value = !expanded.value;
}
</script>

<!-- ****************** Template **************** -->
<template>
	<v-card
		:color="props.backgroundColor || undefined"
		:outlined="!props.backgroundColor"
		class="pa-2"
	>
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
				<v-row no-gutters align="start">
					<!-- Image Column -->
					<v-col cols="12" md="4" v-if="props.imageSrc" class="pr-4">
						<v-img
							:src="props.imageSrc"
							alt="Card visual"
							contain
							class="rounded"
							max-height="200"
						/>
					</v-col>

					<!-- Text Content Column -->
					<v-col :cols="props.imageSrc ? 12 : 12" :md="props.imageSrc ? 8 : 12">
						<slot />
					</v-col>
				</v-row>
			</v-card-text>
		</v-expand-transition>
	</v-card>
</template>

<!-- ****************** Style ******************* -->
<style scoped lang="scss">
v-card {
	user-select: none;
	transition: box-shadow 0.2s ease;
}
v-card:hover {
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
</style>
