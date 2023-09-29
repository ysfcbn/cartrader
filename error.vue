<template>
	<div class="flex h-screen justify-center items-center flex-col">
		<h1 class="text-6xl">{{ error.statusCode }}</h1>
		<p class="mt-7 text-3xl">{{ error.message }}</p>
		<button
			@click="handleError"
			class="rounded-full mt-7 text-xl bg-blue-700 px-7 py-4 text-white"
		>
			Go Back!
		</button>
	</div>
</template>

<script setup>
const error = useError();

const handleError = () => {
	clearError({
		redirect: '/',
	});
};
</script>
