<!-- ****************** Script ****************** -->
<script setup lang="ts">
import { ref } from "vue";

const expanded = ref(false);
const toggle = () => {
	expanded.value = !expanded.value;
};
</script>

<!-- ****************** Template **************** -->
<template>
	<v-card class="job-card" outlined>
		<v-card-title @click="toggle" class="card-header">
			<slot name="title" />
			<v-icon>{{ expanded ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
		</v-card-title>
		<v-expand-transition>
			<div v-show="expanded">
				<v-card-text>
					<slot name="content" />
				</v-card-text>
			</div>
		</v-expand-transition>
	</v-card>
</template>

<!-- ****************** Style ******************* -->
<style scoped lang="scss">
.job-card {
	margin-bottom: 16px;
}

.card-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
}
</style>
