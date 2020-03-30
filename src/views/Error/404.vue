<template>
	<main class="home flex justify-center h-screen text-gray-300 bg-bf-navy text-sm ">
		<div class="block self-center flex flex-col justify-center text-center">
			<span class="block text-4xl text-bf-red"> 404 Error </span>
			<span class="block mt-6 text-bf-grey-1 capitalize">page does not exist</span>
			<router-link to="/" class="block mt-6 text-bf-orange">Go back Home</router-link>
		</div>
	</main>
</template>

<script>
export default {
	name: 'Error404'
};
</script>
