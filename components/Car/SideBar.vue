<template>
	<div class="shadow border w-full mr-10 z-30 h-[190px]">
		<!-- LOCATİON START -->
		<div class="p-5 flex justify-between relative cursor-pointer border-b">
			<h3>Location</h3>
			<h3
				@click="updateModal('location')"
				class="ml-2 text-blue-400 capitalize"
			>
				{{ route.params.city }}
			</h3>
			<div
				v-if="modal.location"
				class="absolute border shadow left-52 p-5 top-1 -m-1 bg-white"
			>
				<input type="text" class="border p-1 rounded" v-model="city" />
				<button
					@click="onChangeLocation"
					class="bg-blue-400 w-full mt-2 rounded text-white p-1"
				>
					Apply
				</button>
			</div>
		</div>
		<!-- LOCATİON END -->

		<!-- MAKE START -->
		<div class="p-5 flex justify-between relative cursor-pointer border-b">
			<h3>Make</h3>
			<h3 @click="updateModal('make')" class="text-blue-400 capitalize">
				{{ route.params.make || 'Any' }}
			</h3>
			<div
				v-if="modal.make"
				class="absolute border shadow left-52 p-5 top-1 -m-1 w-[600px] flex justify-between items-center bg-white flex-wrap"
			>
				<h4
					@click="onChangeMake(make)"
					class="w-1/3"
					v-for="make in makes"
					:key="make"
				>
					{{ make }}
				</h4>
			</div>
		</div>
		<!-- MAKE END -->

		<!-- PRICE START -->
		<div class="p-5 flex justify-between relative cursor-pointer">
			<h3>Price</h3>
			<h3 @click="updateModal('price')" class="text-blue-400 capitalize w-fit">
				{{ priceRangeText }}
			</h3>
			<div
				v-if="modal.price"
				class="absolute border shadow left-52 p-4 top-1 -m-1 bg-white h-fit"
			>
				<input
					type="number"
					placeholder="Min"
					v-model="priceRange.min"
					class="border p-1 rounded"
				/>
				<input
					type="number"
					placeholder="Max"
					v-model="priceRange.max"
					class="border p-1 rounded"
				/>
				<button
					@click="onChangePrice"
					class="bg-blue-400 w-full mt-2 rounded text-white p-1"
				>
					Apply
				</button>
			</div>
		</div>
		<!-- PRICE END -->
	</div>
</template>

<script setup>
const { makes } = useCars();

const modal = ref({
	make: false,
	location: false,
	price: false,
});

const city = ref('');
const priceRange = ref({ min: '', max: '' });

const route = useRoute();
const router = useRouter();

const priceRangeText = computed(() => {
	const minPrice = route.query.minPrice;
	const maxPrice = route.query.maxPrice;

	if (!minPrice && !maxPrice) return 'Any';
	else if (!minPrice && maxPrice) {
		return `< $${maxPrice}`;
	} else if (!maxPrice && minPrice) {
		return `> $${minPrice}`;
	} else {
		return `$${minPrice}-$${maxPrice}`;
	}
});

const updateModal = key => {
	modal.value[key] = !modal.value[key];
};

const onChangeLocation = () => {
	if (!city.value) return;
	if (!isNaN(parseInt(city.value))) {
		throw createError({
			statusCode: 400,
			message: 'Invalid city format',
		});
	}
	updateModal('location');
	navigateTo(`/city/${city.value}/car/${route.params.make}`);
	city.value = '';
};

const onChangeMake = make => {
	updateModal('make');
	navigateTo(`/city/${route.params.city}/car/${make}`);
};

const onChangePrice = () => {
	updateModal('price');
	if (priceRange.value.max && priceRange.value.min) {
		if (priceRange.value.min > priceRange.value.max) return;
	}
	router.push({
		query: {
			minPrice: priceRange.value.min,
			maxPrice: priceRange.value.max,
		},
	});
};
</script>
