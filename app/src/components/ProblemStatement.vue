<!-- ****************** Script ****************** -->
<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
	header: {
		type: String,
		default: "Lorem Ipsum",
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
		<slot name="contents" />
	</section>
</template>

<!-- ****************** Style ******************* -->
<style scoped lang="scss"></style>
