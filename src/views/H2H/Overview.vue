<template>
	<div id="overview">
		<div class="pt-1 pb-5 px-6 bg-bf-navy-1 border-b-2 border-bf-navy">
			<div class="flex bg-bf-grey-3 h-225 mt-10 rounded-07 font-bold">
				<span
					class="flex justify-center items-center block bg-bf-grey-1 w-1/2 m-015 text-bf-navy-1 rounded-lg"
					>H2H</span
				>
				<span class="flex justify-center items-center block text-bf-grey-1 w-1/2">All</span>
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

		<!-- Overview - Stat line -->
		<div class="px-6 pt-5 border-t-2 border-bf-grey-3 bg-bf-grey h-auto text-xs font-bold">
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

			<!-- Overview - Stat line - Last 10 -->
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
						class="block ml-2 bg-bf-green h-4 w-4 leading-7 text-center font-extrabold rounded-sm mt-2"
						style="font-size: 10px; line-height: 1.75"
						>W</span
					>
					<span
						class="block ml-2 bg-bf-red h-4 w-4 leading-7 text-center font-extrabold rounded-sm mt-2"
						style="font-size: 10px; line-height: 1.75"
						>L</span
					>
					<span
						class="block ml-2 bg-bf-orange h-4 w-4 leading-7 text-center font-extrabold rounded-sm mt-2"
						style="font-size: 10px; line-height: 1.75"
						>D</span
					>
					<span
						class="block ml-2 bg-bf-green h-4 w-4 leading-7 text-center font-extrabold rounded-sm mt-2"
						style="font-size: 10px; line-height: 1.75"
						>W</span
					>
					<span
						class="block ml-2 bg-bf-red h-4 w-4 leading-7 text-center font-extrabold rounded-sm mt-2"
						style="font-size: 10px; line-height: 1.75"
						>L</span
					>
					<span
						class="block ml-2 bg-bf-orange h-4 w-4 leading-7 text-center font-extrabold rounded-sm mt-2"
						style="font-size: 10px; line-height: 1.75"
						>D</span
					>
					<span
						class="block ml-2 bg-bf-green h-4 w-4 leading-7 text-center font-extrabold rounded-sm mt-2"
						style="font-size: 10px; line-height: 1.75"
						>W</span
					>
					<span
						class="block ml-2 bg-bf-red h-4 w-4 leading-7 text-center font-extrabold rounded-sm mt-2"
						style="font-size: 10px; line-height: 1.75"
						>L</span
					>
					<span
						class="block ml-2 bg-bf-orange h-4 w-4 leading-7 text-center font-extrabold rounded-sm mt-2"
						style="font-size: 10px; line-height: 1.75"
						>D</span
					>
					<span
						class="block ml-2 bg-bf-green h-4 w-4 leading-7 text-center font-extrabold rounded-sm mt-2"
						style="font-size: 10px; line-height: 1.75"
						>W</span
					>
				</div>
			</div>

			<!-- Overview - Stat line - More Stats -->
			<div>
				<div class="stat-line stat-line__more mt-10">
					<div class="flex justify-between">
						<span class="block">10</span>
						<span class="block">Played</span>
						<span class="block">10</span>
					</div>
				</div>
				<div class="stat-line stat-line__more">
					<div class="flex justify-between">
						<span class="block">3</span>
						<span class="block">Win</span>
						<span class="block">4</span>
					</div>
				</div>
				<div class="stat-line stat-line__more">
					<div class="flex justify-between">
						<span class="block">3</span>
						<span class="block">Draw</span>
						<span class="block">3</span>
					</div>
				</div>
				<div class="stat-line stat-line__more">
					<div class="flex justify-between">
						<span class="block">4</span>
						<span class="block">Loss</span>
						<span class="block">3</span>
					</div>
				</div>
				<div class="stat-line stat-line__more">
					<div class="flex justify-between">
						<span class="block">6</span>
						<span class="block">Goals For</span>
						<span class="block">14</span>
					</div>
				</div>
				<div class="stat-line stat-line__more">
					<div class="flex justify-between">
						<span class="block">14</span>
						<span class="block">Goals Against</span>
						<span class="block">6</span>
					</div>
				</div>
				<div class="stat-line stat-line__more">
					<div class="flex justify-between">
						<span class="block">2</span>
						<span class="block">Goals per Match</span>
						<span class="block">2</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Overview'
};
</script>
