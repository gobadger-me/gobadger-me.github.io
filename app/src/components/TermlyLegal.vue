<!-- ****************** Script ****************** -->
<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
	id: {
		type: String,
		required: true,
	},
});

import { ref, onMounted, nextTick, watch } from "vue";

import { useRoute } from "vue-router";
const route = useRoute();

const termlyDataId = props.id;
const termlyEmbed = ref(null);

function injectTermlyScript() {
	return new Promise((resolve) => {
		const script = document.createElement("script");
		script.id = "termly-jssdk";
		script.src = "https://app.termly.io/embed-policy.min.js";
		script.onload = resolve;
		document.head.appendChild(script);
	});
}

async function initTermlyEmbed() {
	await nextTick();

	if (termlyEmbed.value) {
		termlyEmbed.value.innerHTML = "";
	}

	await injectTermlyScript();
	if (window.termly?.loadEmbed) {
		window.termly.loadEmbed();
	}
}

onMounted(() => {
	initTermlyEmbed();
});

watch(
	() => route.fullPath,
	() => {
		initTermlyEmbed();
	}
);
</script>

<!-- ****************** Template **************** -->
<template>
	<div class="terms">
		<div ref="termlyEmbed" name="termly-embed" :data-id="termlyDataId"></div>
	</div>
</template>

<!-- ****************** Style ******************* -->
<style scoped lang="scss">
.terms {
	margin: 100px 10% 80px 10%;
}
</style>
