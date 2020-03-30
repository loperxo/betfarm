<template>
	<main class="home flex justify-center h-screen text-gray-300 bg-bf-navy text-sm ">
		<div class="block self-center flex flex-col justify-center text-center">
			<span class="block text-4xl"> Betfarm </span>
			<!-- <button
				class="bg-bf-yellow rounded-sm px-1 py-4 text-bf-navy font-medium text-base mt-8"
			>
				find matches
			</button> -->
			<router-link
				to="/h2h/overview"
				class="block bg-bf-yellow rounded-sm px-1 py-4 text-bf-navy font-medium text-base mt-8"
				>find matches</router-link
			>

			<!-- <span class="block mt-6 text-bf-grey-1">ebukaloper@gmail.com</span> -->
		</div>
	</main>
</template>

<script>
export default {
	name: 'Home'
};
</script>

<style lang="scss"></style>
