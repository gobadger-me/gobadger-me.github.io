<!-- ****************** Script ****************** -->
<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
	title: {
		type: String,
		required: true,
	},
	subtitle: {
		type: String,
		default: "",
	},
	icon: {
		type: String,
		default: "mdi-folder",
	},
	color: {
		type: String,
		default: "primary",
	},
	items: {
		type: Array as () => string[],
		default: () => [],
	},
	parentAnchor: {
		type: String,
		default: "",
	},
});

function scrollToAnchor(anchorId: string) {
	const el = document.getElementById(anchorId);
	if (el) {
		const yOffset = -80; // Adjust this to match your header height
		const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

		window.scrollTo({ top: y, behavior: "smooth" });
	}
}

function scrollToParentAnchor() {
	if (props.parentAnchor) {
		scrollToAnchor(props.parentAnchor);
	}
}
</script>

<!-- ****************** Template **************** -->
<template>
	<v-card :color="color" class="pa-4 text-white" rounded="xl" elevation="4">
		<v-row no-gutters align="center" @click="scrollToParentAnchor" style="cursor: pointer">
			<v-col cols="auto">
				<v-icon size="48" class="mr-4 text-white">{{ icon }}</v-icon>
			</v-col>
			<v-col>
				<h2 class="text-h6 font-weight-bold mb-1">{{ title }}</h2>
				<p class="text-body-2 text-white text-opacity-80">{{ subtitle }}</p>
			</v-col>
		</v-row>

		<v-divider class="my-4" color="white" />

		<div>
			<v-card
				v-for="(item, index) in items"
				:key="index"
				class="mb-2 cursor-pointer"
				elevation="1"
				color="white"
				@click="scrollToAnchor(item.anchor)"
			>
				<v-card-text class="text-black">{{ item.label }}</v-card-text>
			</v-card>
		</div>
	</v-card>
</template>

<!-- ****************** Style ******************* -->
<style scoped lang="scss"></style>
