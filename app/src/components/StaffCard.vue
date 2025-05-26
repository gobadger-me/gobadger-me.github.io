<!-- ****************** Script ****************** -->
<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
	avatar: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		default: "",
	},
});

const expanded = ref(false);
</script>

<!-- ****************** Template **************** -->
<template>
	<v-card class="pa-4" outlined @click="expanded = !expanded" style="cursor: pointer">
		<v-row no-gutters align="center">
			<v-col cols="auto">
				<v-avatar size="72">
					<v-img :src="props.avatar" :alt="props.name" cover />
				</v-avatar>
			</v-col>
			<v-col class="pl-4">
				<div class="text-subtitle-1 font-weight-medium">{{ props.name }}</div>
				<div class="text-caption text-grey-darken-1">{{ props.title }}</div>
			</v-col>
		</v-row>
		<v-expand-transition>
			<div v-if="expanded" class="mt-4 text-body-2 bio">
				<slot />
			</div>
		</v-expand-transition>
	</v-card>
</template>

<!-- ****************** Style ******************* -->
<style scoped lang="scss">
v-card:hover {
	box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.bio {
	white-space: pre-line;
}
</style>
