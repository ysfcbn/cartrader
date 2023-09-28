<template>
	<div>
		<NavBar />
		<div
			class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5"
		>
			<!-- CAR HERO -->
			<CarDetail />
			<!-- CAR HERO -->
			<!-- CAR ATTRIBUTES -->
			<CarAttributes />
			<!-- CAR ATTRIBUTES -->
			<!-- CAR DESCRISPTION -->
			<CarDescription />
			<!-- CAR DESCRISPTION -->
			<!-- CAR CONTACT -->
			<CarContact />
			<!-- CAR CONTACT -->
		</div>
	</div>
</template>
<script setup>
import toTitleCase from '../../../utils/titleCase.js';

const route = useRoute();

useHead({
	title: `${toTitleCase(route.params.name) + '-' + route.params.id} `,
});
</script>
