<template>
	<div
		class="font-serif w-[1000px] text-2xl rounded-full bg-white flex justify-between overflow-hidden drop-shadow-2xl mx-auto"
	>
		<input
			type="text"
			class="py-3 px-5 w-full text-2xl rounded-full focus:outline-none"
			:class="cityError ? 'border-2 border-red-500 rounded-r-none' : ''"
			placeholder="Search by city..."
			v-model="city"
		/>
		<button @click="searchHandle" class="bg-sky-500 px-10 text-white">
			Search
		</button>
	</div>
</template>

<script setup>
const city = ref('');
const cityError = ref(false);

const searchHandle = () => {
	if (!city.value) {
		cityError.value = true;
	} else navigateTo(`/city/${city.value}/car`);
};
</script>

<style scoped></style>
