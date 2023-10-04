<template>
	<!-- NAVBAR -->
	<header
		class="sticky top-0 z-50 flex justify-between items-center space-x-1 border-b bg-white p-4 shadow-md font-semibold"
	>
		<NuxtLink class="text-3xl" to="/">cartrader</NuxtLink>
		<div v-if="user" class="flex">
			<NuxtLink to="/profile/listings" class="mr-5">profile</NuxtLink>
			<p @click="logout" class="cursor-pointer">Logout</p>
		</div>
		<NuxtLink v-else to="/login" class="mr-5">Login</NuxtLink>
	</header>
	<!-- NAVBAR -->
</template>

<script setup>
const user = useSupabaseUser();
const supabase = useSupabaseClient();

const logout = () => {
	// 1)  make user.value = null
	// 2) Remove JWT from Cookie browser
	const { error } = supabase.auth.signOut();
	// 3) Navigate to Homepage
	navigateTo('/');

	if (error) {
		console.log(error);
	}
};
</script>
