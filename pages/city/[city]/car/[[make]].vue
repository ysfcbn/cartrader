<template>
	<div class="min-w-[20rem]">
		<CarCards v-if="cars.length" :cars="cars" />
		<h1 v-else class="text-red-500">No Cars Found</h1>
	</div>
</template>

<script setup>
const route = useRoute();
const { data: cars, refresh } = await useFetchCars(route.params.city, {
	minPrice: route.query.minPrice,
	maxPrice: route.query.maxPrice,
	make: route.params.make,
});
// watch(
// 	() => route.query,
// 	() => refresh()
// );
watch(
	() => route.query,
	() => window.location.reload(true)
);
</script>

<style lang="scss" scoped></style>
