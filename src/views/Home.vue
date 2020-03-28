<template>
	<main class="home flex justify-center h-auto text-gray-300 bg-bf-navy text-sm">
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

			<!-- Data Tabs - Overview -->
			<section id="data-tabs" class="relative mx-auto ">
				<div class="pt-5 pb-2 px-6 bg-bf-navy-1 border-b-2 border-bf-navy">
					<div class="flex justify-between text-base font-medium">
						<span class="block text-bf-yellow pb-1 border-b border-bf-yellow"
							>Overview</span
						>
						<span class="block">Matches</span>
						<span class="block">Tables</span>
					</div>
					<div class="flex bg-bf-grey h-225 mt-10 rounded-07 font-bold">
						<span
							class="flex justify-center items-center block bg-bf-grey-1 w-1/2 m-015 text-bf-navy-1 rounded-lg"
							>H2H</span
						>
						<span class="flex justify-center items-center block text-bf-grey-1 w-1/2"
							>All</span
						>
					</div>
					<div
						class="flex justify-between text-xs font-bold uppercase text-bf-grey-1 tracking-widest mt-6"
					>
						<span class="block">
							Performance
						</span>
						<span class="block">
							Last 10
						</span>
					</div>
				</div>
				<!-- Overview -->
				<div
					class="py-5 px-6 border-t-2 border-bf-grey-2 bg-bf-grey h-auto text-xs font-bold"
				>
					<!-- stat line -->
					<div>
						<div class="stat-line">
							<div class="flex justify-between">
								<span class="block">60%</span>
								<span class="block">All</span>
								<span class="block">80%</span>
							</div>
							<div class="flex justify-between mt-1 ">
								<div class="w-47p h-04 bg-bf-grey-1">
									<div class="w-full flex justify-start">
										<span class="block bg-bf-green w-2/4 h-04"></span>
										<span class="block bg-bf-orange w-1/5 h-04"></span>
									</div>
								</div>
								<div class="w-47p h-04 bg-bf-grey-1">
									<div class="w-full flex justify-end">
										<span class="block bg-bf-orange w-1/5 h-04"></span>
										<span class="block bg-bf-green w-3/5 h-04"></span>
									</div>
								</div>
							</div>
						</div>
						<div class="stat-line border-t border-bf-grey-2 pt-6">
							<div class="flex justify-between">
								<span class="block">80%</span>
								<span class="block">Home</span>
								<span class="block">60%</span>
							</div>
							<div class="flex justify-between mt-1 ">
								<div class="w-47p h-04 bg-bf-grey-1">
									<div class="w-full flex justify-start">
										<span class="block bg-bf-green w-3/5 h-04"></span>
										<span class="block bg-bf-orange w-1/5 h-04"></span>
									</div>
								</div>
								<div class="w-47p h-04 bg-bf-grey-1">
									<div class="w-full flex justify-end">
										<span class="block bg-bf-orange w-1/5 h-04"></span>
										<span class="block bg-bf-green w-2/4 h-04"></span>
									</div>
								</div>
							</div>
						</div>
						<div class="stat-line border-t border-bf-grey-2 pt-6">
							<div class="flex justify-between">
								<span class="block">60%</span>
								<span class="block">Away</span>
								<span class="block">40%</span>
							</div>
							<div class="flex justify-between mt-1 ">
								<div class="w-47p h-04 bg-bf-grey-1">
									<div class="w-full flex justify-start">
										<span class="block bg-bf-green w-2/4 h-04"></span>
										<span class="block bg-bf-orange w-1/5 h-04"></span>
									</div>
								</div>
								<div class="w-47p h-04 bg-bf-grey-1">
									<div class="w-full flex justify-end">
										<span class="block bg-bf-orange w-1/5 h-04"></span>
										<span class="block bg-bf-green w-1/5 h-04"></span>
									</div>
								</div>
							</div>
						</div>
					</div>

					<!-- Last 10 -->
					<div class="flex justify-between mt-2">
						<div class="flex flex-wrap w-4/12">
							<span
								class="block mr-2 bg-bf-red h-4 w-4 leading-7 text-center font-extrabold rounded-sm mt-2"
								style="font-size: 10px; line-height: 1.75"
								>L</span
							>
							<span
								class="block mr-2 bg-bf-orange h-4 w-4 leading-7 text-center font-extrabold rounded-sm mt-2"
								style="font-size: 10px; line-height: 1.75"
								>D</span
							>
							<span
								class="block mr-2 bg-bf-green h-4 w-4 leading-7 text-center font-extrabold rounded-sm mt-2"
								style="font-size: 10px; line-height: 1.75"
								>W</span
							>
							<span
								class="block mr-2 bg-bf-red h-4 w-4 leading-7 text-center font-extrabold rounded-sm mt-2"
								style="font-size: 10px; line-height: 1.75"
								>L</span
							>
							<span
								class="block mr-2 bg-bf-orange h-4 w-4 leading-7 text-center font-extrabold rounded-sm mt-2"
								style="font-size: 10px; line-height: 1.75"
								>D</span
							>
							<span
								class="block mr-2 bg-bf-green h-4 w-4 leading-7 text-center font-extrabold rounded-sm mt-2"
								style="font-size: 10px; line-height: 1.75"
								>W</span
							>
							<span
								class="block mr-2 bg-bf-red h-4 w-4 leading-7 text-center font-extrabold rounded-sm mt-2"
								style="font-size: 10px; line-height: 1.75"
								>L</span
							>
							<span
								class="block mr-2 bg-bf-orange h-4 w-4 leading-7 text-center font-extrabold rounded-sm mt-2"
								style="font-size: 10px; line-height: 1.75"
								>D</span
							>
							<span
								class="block mr-2 bg-bf-green h-4 w-4 leading-7 text-center font-extrabold rounded-sm mt-2"
								style="font-size: 10px; line-height: 1.75"
								>W</span
							>
							<span
								class="block mr-2 bg-bf-red h-4 w-4 leading-7 text-center font-extrabold rounded-sm mt-2"
								style="font-size: 10px; line-height: 1.75"
								>L</span
							>
						</div>
						<div class="flex flex-wrap w-4/12">
							<span
								class="block mr-2 bg-bf-green h-4 w-4 leading-7 text-center font-extrabold rounded-sm mt-2"
								style="font-size: 10px; line-height: 1.75"
								>W</span
							>
							<span
								class="block mr-2 bg-bf-red h-4 w-4 leading-7 text-center font-extrabold rounded-sm mt-2"
								style="font-size: 10px; line-height: 1.75"
								>L</span
							>
							<span
								class="block mr-2 bg-bf-orange h-4 w-4 leading-7 text-center font-extrabold rounded-sm mt-2"
								style="font-size: 10px; line-height: 1.75"
								>D</span
							>
							<span
								class="block mr-2 bg-bf-green h-4 w-4 leading-7 text-center font-extrabold rounded-sm mt-2"
								style="font-size: 10px; line-height: 1.75"
								>W</span
							>
							<span
								class="block mr-2 bg-bf-red h-4 w-4 leading-7 text-center font-extrabold rounded-sm mt-2"
								style="font-size: 10px; line-height: 1.75"
								>L</span
							>
							<span
								class="block mr-2 bg-bf-orange h-4 w-4 leading-7 text-center font-extrabold rounded-sm mt-2"
								style="font-size: 10px; line-height: 1.75"
								>D</span
							>
							<span
								class="block mr-2 bg-bf-green h-4 w-4 leading-7 text-center font-extrabold rounded-sm mt-2"
								style="font-size: 10px; line-height: 1.75"
								>W</span
							>
							<span
								class="block mr-2 bg-bf-red h-4 w-4 leading-7 text-center font-extrabold rounded-sm mt-2"
								style="font-size: 10px; line-height: 1.75"
								>L</span
							>
							<span
								class="block mr-2 bg-bf-orange h-4 w-4 leading-7 text-center font-extrabold rounded-sm mt-2"
								style="font-size: 10px; line-height: 1.75"
								>D</span
							>
							<span
								class="block mr-2 bg-bf-green h-4 w-4 leading-7 text-center font-extrabold rounded-sm mt-2"
								style="font-size: 10px; line-height: 1.75"
								>W</span
							>
						</div>
					</div>

					<!-- More Stats -->
					<div></div>
				</div>
				<!-- Matches -->
				<!-- Tables -->
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
	name: 'Home'
};
</script>

<style lang="scss">
.stat-line:after {
	display: block;
	width: 100%;
	border-bottom: 1px solid #171b29;
	padding-top: 3px;
	content: '';
}
</style>
