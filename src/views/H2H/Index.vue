<template>
	<main class="home flex justify-center h-auto text-gray-300 bg-bf-navy text-sm sm-min:h-screen">
		<div class="w-3/12 sm-max:w-full sm-max:block sm-min:hidden">
			<!-- Header -->
			<header id="header" class="relative mx-auto py-3 px-6 border-b border-bf-yellow">
				<div class="container mx-auto flex justify-center w-full">
					<div class="flex justify-start items-center absolute left-0 pl-6 py-2">
						<span class="block flex items-center"
							><i class="fas fa-chevron-left text-xl"></i
						></span>
					</div>
					<div class="flex flex-col items-center">
						<span class="block font-medium text-base">Belarus</span>
						<span class="block text-xs font-bold text-bf-grey-1">Premier League</span>
					</div>
				</div>
			</header>

			<!-- Comparison -->
			<section id="comparison" class="relative mx-auto py-12 px-6 border-b border-bf-yellow">
				<div class="flex justify-center">
					<span class="block text-xs font-bold text-bf-grey-1">2020 Group Stage</span>
				</div>
				<div class="flex justify-around mt-5">
					<div class="flex flex-col items-start w-2/5">
						<div class="flex flex-col items-start">
							<!-- Team1 -->
							<img
								src="https://statistics.bcapps.org/images/e/b/7/15723.png"
								alt="Team1"
								class="w-12 h-12"
							/>
							<span class="block mt-5 font-medium">FC Minsk</span>
						</div>
						<div class="flex mt-5">
							<img
								src="https://statistics.bcapps.org/images/sh/31/1-15723.png"
								alt=""
								class="w-8 h-8 mr-3"
							/>
							<img
								src="https://statistics.bcapps.org/images/sh/31/2-15723.png"
								alt=""
								class="w-8 h-8"
							/>
						</div>
					</div>
					<div class="flex flex-col text-white text-xs items-center w-1/5">
						<!-- Mid Stat -->
						<div class="flex">
							<span class="block mr-2">0</span>
							<span
								class="block mr-2 bg-bf-green h-4 w-4 leading-7 text-center font-extrabold rounded-sm"
								style="font-size: 10px; line-height: 1.75"
								>W</span
							>
							<span>6</span>
						</div>
						<div class="flex mt-1">
							<span class="block mr-2">4</span>
							<span
								class="block mr-2 bg-bf-orange h-4 w-4 leading-7 text-center font-extrabold rounded-sm"
								style="font-size: 10px; line-height: 1.75"
								>D</span
							>
							<span>4</span>
						</div>
						<div class="flex mt-1">
							<span class="block mr-2">6</span>
							<span
								class="block mr-2 bg-bf-red h-4 w-4 leading-7 text-center font-extrabold rounded-sm"
								style="font-size: 10px; line-height: 1.75"
								>L</span
							>
							<span>0</span>
						</div>
					</div>
					<div class="flex flex-col items-end w-2/5">
						<div class="flex flex-col items-end">
							<!-- Team2 -->
							<img
								src="https://statistics.bcapps.org/images/e/b/5/11839.png"
								alt="Team2"
								class="w-12 h-12"
							/>
							<span class="block mt-5 font-medium"> FC Dinamo Minsk</span>
						</div>
						<div class="flex mt-5">
							<img
								src="https://statistics.bcapps.org/images/sh/23/1-11839.png"
								alt=""
								class="w-8 h-8 mr-3"
							/>
							<img
								src="https://statistics.bcapps.org/images/sh/23/2-11839.png"
								alt=""
								class="w-8 h-8"
							/>
						</div>
					</div>
				</div>
			</section>

			<!-- Data Tabs - Switcher -->
			<section id="data-tabs" class="relative mx-auto ">
				<div id="switcher" class="pt-5 pb-2 px-6 bg-bf-navy-1">
					<div class="flex justify-between text-base font-medium">
						<router-link to="/h2h/overview" class="block">Overview</router-link>
						<router-link to="/h2h/matches" class="block">Matches</router-link>
						<router-link to="/h2h/tables" class="block">Tables</router-link>
					</div>
				</div>

				<!-- Overview -->
				<!-- Matches -->
				<!-- Tables -->
				<transition name="slide-fade">
					<router-view></router-view>
				</transition>
			</section>
		</div>
		<div class="sm-max:hidden sm-min:block self-center flex justify-center text-center">
			<span class="block"> This implementation is only available on mobile devices </span>
			<span class="block mt-6 text-bf-grey-1">ebukaloper@gmail.com</span>
		</div>
	</main>
</template>

<script>
export default {
	name: 'H2H'
};
</script>

<style lang="scss">
.stat-line {
	&:after {
		display: block;
		width: 100%;
		border-bottom: 1px solid #171b29;
		padding-top: 3px;
		content: '';
	}

	&__more {
		&:after {
			margin-top: 1rem;
		}
		&:before {
			display: block;
			width: 100%;
			border-bottom: 1px solid #3d3f4b;
			margin-bottom: 1rem;
			content: '';
		}

		&:first-child:before {
			border-bottom: 1px solid transparent;
		}
	}
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
	transition: all 0.3s ease;
}
.slide-fade-leave-active {
	transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
	transform: translateX(10px);
	opacity: 0;
}
</style>
