<!-- ****************** Script ****************** -->
<script setup lang="ts">
import { ref, nextTick } from "vue";

const props = defineProps({
	header: {
		type: String,
		default: "Lorem Ipsum",
	},
});

const expanded = ref(false);
const containerRef = ref<HTMLElement | null>(null);
const contentHeight = ref("0px");

function toggleExpanded() {
	expanded.value = !expanded.value;

	nextTick(() => {
		if (containerRef.value) {
			if (expanded.value) {
				// Expand: set explicit height to scrollHeight for smooth transition
				contentHeight.value = `${containerRef.value.scrollHeight}px`;
			} else {
				// Collapse: set height to 150px preview height
				contentHeight.value = "300px";
			}
		}
	});
}

// Initialize collapsed height on mount
if (containerRef.value === null) {
	contentHeight.value = "300px";
}
</script>

<!-- ****************** Template **************** -->
<template>
	<section
		id="learn-more"
		class="py-16 px-6 text-center relative"
		style="max-width: 1000px; margin: 0 auto"
	>
		<h2 class="text-h4 font-weight-bold mb-6">{{ props.header }}</h2>

		<div
			ref="containerRef"
			class="contents-wrapper"
			:style="{ height: contentHeight, transition: 'height 0.5s ease' }"
		>
			<div class="subtitle text-subtitle-1">
				<slot name="subtitle" />
			</div>

			<div class="contents">
				<slot name="contents" />
			</div>

			<!-- Fade overlay with blur and gradient -->
			<div class="fade-overlay" :class="{ 'fade-overlay--hidden': expanded }"></div>
		</div>

		<button
			class="expand-btn mt-6"
			@click="toggleExpanded"
			:aria-expanded="expanded.toString()"
			aria-controls="learn-more"
		>
			<span v-if="!expanded">Show More ▼</span>
			<span v-else>Show Less ▲</span>
		</button>
	</section>
</template>

<!-- ****************** Style ******************* -->
<style scoped lang="scss">
.contents-wrapper {
	position: relative;
	overflow: hidden;
	max-width: 100%;
	border-radius: 8px;
}

.subtitle {
	margin-bottom: 1rem;
}

.contents {
	margin-top: 1rem;
}

.fade-overlay {
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	height: 80px;
	background: linear-gradient(to bottom, transparent, rgba(var(--v-theme-background), 1));

	/* Apply blur to everything behind */
	backdrop-filter: blur(12px);

	/* Mask so blur fades from transparent (top) to fully visible (bottom) */
	-webkit-mask-image: linear-gradient(to bottom, transparent, black);
	mask-image: linear-gradient(to bottom, transparent, black);

	pointer-events: none;
	border-radius: inherit;
	transition: opacity 0.4s ease;
	z-index: 2;
}

.fade-overlay--hidden {
	opacity: 0;
	pointer-events: none;
}

.expand-btn {
	background: none;
	border: none;
	color: var(--v-theme-primary);
	font-weight: 600;
	cursor: pointer;
	font-size: 1rem;
	user-select: none;
	transition: color 0.3s ease;

	&:hover {
		color: var(--v-theme-primary-darken1);
	}
}
</style>
