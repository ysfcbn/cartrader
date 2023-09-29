<template>
	<div>
		<div class="text-red-500">{{ make }}</div>

		<div class="mt-32 flex">
			<NuxtErrorBoundary>
				<CarSideBar />
				<NuxtPage />
				<template #error="{ error }">
					<div class="text-center mx-auto flex flex-col">
						<h1 class="text-3xl text-red-500 mb-4">
							Sorry, something went wrong
						</h1>
						<code>{{ error }}</code>
						<button
							@click="error.value = null"
							class="text-white bg-blue-400 px-10 py-3 rounded-full mt-4"
						>
							Go back
						</button>
					</div></template
				>
			</NuxtErrorBoundary>
		</div>
	</div>
</template>

<script setup>
definePageMeta({
	layout: 'custom',
});

const { toTitleCase } = useUtilities();
const { make } = useRoute().params;
const route = useRoute();

const carName = computed(() =>
	route.params.make ? toTitleCase(route.params.make) : 'Cars'
);

useHead({
	title: `${carName.value} in ${toTitleCase(route.params.city)}`,
});
</script>

<style lang="scss" scoped></style>
