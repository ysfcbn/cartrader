import cars from '@/data/cars.json';

export default defineEventHandler(event => {
	const { id } = event.context.params;

	const car = cars.find(car => car.id === parseInt(id));

	if (!car) {
		throw createError({
			statusCode: 404,
			statusMessage: `Car with ID of ${id} does not exist`,
		});
	}

	return car;
});
