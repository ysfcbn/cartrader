<template>
	<!-- CAR CARD -->
	<div
		class="shadow border min-w-[32rem] overflow-hidden mb-5 cursor-pointer h-[200px]"
		@click="navigateTo(`/car/${car.name}-${car.id}`)"
	>
		<div class="flex h-full">
			<img :src="car.url" alt="" class="w-[300px] h-full" />
			<div class="p-4 flex flex-col min-w-[5rem]">
				<div class="">
					<h1 class="text-2xl text-blue-700">{{ car.name }}</h1>
					<p class="text-gray-700">
						{{ car.description }}
					</p>
				</div>
				<h1 class="mt-auto text-xl">${{ car.price }}</h1>
			</div>
		</div>
	</div>
	<!-- CAR CARD -->
</template>

<script setup>
const props = defineProps({
	car: Object,
});
</script>
