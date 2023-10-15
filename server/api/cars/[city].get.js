import cars from '@/data/cars.json';

export default defineEventHandler(event => {
	const { city } = event.context.params;
	const { make, minPrice, maxPrice } = getQuery(event);
	console.log(make, minPrice, maxPrice);

	let filteredCars = cars;

	filteredCars = filteredCars.filter(
		car => car.city.toLowerCase() === city.toLowerCase()
	);

	if (make) {
		return (filteredCars = filteredCars.filter(
			car => car.make.toLowerCase() === make.toLowerCase()
		));
	}

	if (minPrice) {
		return (filteredCars = filteredCars.filter(
			car => car.price >= parseInt(minPrice)
		));
	}

	if (maxPrice) {
		return (filteredCars = filteredCars.filter(
			car => car.price <= parseInt(maxPrice)
		));
	}

	return filteredCars;
});
