<template>
	<div>
		<CarDetail :car="car" />
		<CarAttributes :features="car.features" />
		<CarDescription :description="car.description" />
		<CarContact />
	</div>
</template>

<script setup>
definePageMeta({
	layout: 'custom',
});

const { toTitleCase } = useUtilities();
const route = useRoute();

const { data: car } = await useFetchCar(route.params.id);

if (!car.value) {
	throw createError({
		statusCode: 404,
		message: `Car with ID:${route.params.id} does not exist`,
	});
}

useHead({
	title: `${toTitleCase(route.params.name) + '-' + route.params.id} `,
});
</script>
