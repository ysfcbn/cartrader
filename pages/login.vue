<template>
	<div class="mt-10">
		<div>{{ user }}</div>
		<h1 class="text-5xl font-bold mb-7">Login</h1>
		<button @click="login" class="bg-red-400 p-3 rounded text-white font-bold">
			Login with Google
		</button>
	</div>
</template>

<script setup>
definePageMeta({
	layout: 'custom',
});

const supabase = useSupabaseClient();

const user = useSupabaseUser();

const login = async () => {
	supabase.auth.signInWithOAuth({
		provider: 'google',
	});

	if (error) {
		console.log(error);
	}
};
</script>
