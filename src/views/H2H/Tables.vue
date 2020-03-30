<template>
	<div id="tables">
		<div class="pt-1 pb-5 px-6 bg-bf-navy-1">
			<div
				class="flex justify-start text-xs font-bold uppercase text-bf-grey-1 tracking-widest mt-6"
			>
				<span class="block">
					All Tables<i class="fas fa-sort-up transform rotate-180"></i>
				</span>
			</div>
		</div>

		<!-- Tables - List -->
		<div class="bg-bf-navy-1 h-auto text-sm">
			<div class="border-t border-bf-grey-2">
				<div
					class="flex justify-between text-xs font-bold uppercase text-bf-grey-1 tracking-widest py-3 px-6 "
				>
					<span class="block">
						League Table
					</span>
					<span class="block">
						All<i class="fas fa-sort-up transform rotate-180"></i>
					</span>
				</div>
				<div class="w-full overflow-auto relative">
					<table class="border-collapse table-auto bg-bf-grey-3 w-full">
						<thead>
							<tr class="border-t border-b border-bf-navy-3">
								<th class=" px-4 py-2 text-left">
									<div>#</div>
								</th>
								<th class=" px-4 py-2 border-r border-bf-navy-3 min-w-12 text-left">
									<div>Team</div>
								</th>
								<th class=" px-4 py-2">PLD</th>
								<th class=" px-4 py-2">W</th>
								<th class=" px-4 py-2">D</th>
								<th class=" px-4 py-2">L</th>
								<th class=" px-4 py-2">GA</th>
								<th class=" px-4 py-2">GD</th>
								<th class=" px-4 py-2">GM</th>
							</tr>
						</thead>
						<tbody>
							<tr class="border-b border-bf-navy-3">
								<td class=" px-4 py-2">
									<div>4</div>
								</td>
								<td class=" px-4 py-2 border-r border-bf-navy-3">
									<div class="flex items-center justify-start">
										<span class="block mr-2"
											><img
												src="https://statistics.bcapps.org/images/e/b/7/15723.png"
												alt="Team1"
												class="w-4 h-4"
										/></span>
										<span class="block">FC Minsk</span>
									</div>
								</td>
								<td class=" px-4 py-2 text-center text-bf-green">1</td>
								<td class=" px-4 py-2 text-center text-bf-orange">1</td>
								<td class=" px-4 py-2 text-center text-bf-red">0</td>
								<td class=" px-4 py-2 text-center">0</td>
								<td class=" px-4 py-2 text-center">0</td>
								<td class=" px-4 py-2 text-center">0</td>
								<td class=" px-4 py-2 text-center">0</td>
							</tr>
							<tr class="border-b border-bf-navy-3">
								<td class=" px-4 py-2">
									<div>10</div>
								</td>
								<td class=" px-4 py-2 border-r border-bf-navy-3">
									<div class="flex items-center justify-start">
										<span class="block mr-2"
											><img
												src="https://statistics.bcapps.org/images/e/b/5/11839.png"
												alt="Team2"
												class="w-4 h-4"
										/></span>
										<span class="block">FC Dinamo Minsk</span>
									</div>
								</td>
								<td class=" px-4 py-2 text-center">1</td>
								<td class=" px-4 py-2 text-center">0</td>
								<td class=" px-4 py-2 text-center">0</td>
								<td class=" px-4 py-2 text-center">1</td>
								<td class=" px-4 py-2 text-center">1</td>
								<td class=" px-4 py-2 text-center">1</td>
								<td class=" px-4 py-2 text-center">1</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<div class="border-t border-bf-grey-2  mt-10">
				<div
					class="flex justify-between text-xs font-bold uppercase text-bf-grey-1 tracking-widest py-3 px-6 "
				>
					<span class="block">
						Handicap Y / N
					</span>
					<span class="block">
						All<i class="fas fa-sort-up transform rotate-180"></i>
					</span>
				</div>
				<div class="w-full overflow-auto relative">
					<table class="border-collapse table-auto bg-bf-grey-3 w-full">
						<thead>
							<tr class="border-t border-b border-bf-navy-3">
								<th class=" px-4 py-2 text-left">
									<div>#</div>
								</th>
								<th class=" px-4 py-2 border-r border-bf-navy-3 min-w-12 text-left">
									<div>Team</div>
								</th>
								<th class=" px-4 py-2">PLD</th>
								<th class=" px-4 py-2">W</th>
								<th class=" px-4 py-2">D</th>
								<th class=" px-4 py-2">L</th>
								<th class=" px-4 py-2">GA</th>
								<th class=" px-4 py-2">GD</th>
								<th class=" px-4 py-2">GM</th>
							</tr>
						</thead>
						<tbody>
							<tr class="border-b border-bf-navy-3">
								<td class=" px-4 py-2">
									<div>4</div>
								</td>
								<td class=" px-4 py-2 border-r border-bf-navy-3">
									<div class="flex items-center justify-start">
										<span class="block mr-2"
											><img
												src="https://statistics.bcapps.org/images/e/b/7/15723.png"
												alt="Team1"
												class="w-4 h-4"
										/></span>
										<span class="block">FC Minsk</span>
									</div>
								</td>
								<td class=" px-4 py-2 text-center text-bf-green">1</td>
								<td class=" px-4 py-2 text-center text-bf-orange">1</td>
								<td class=" px-4 py-2 text-center text-bf-red">0</td>
								<td class=" px-4 py-2 text-center">0</td>
								<td class=" px-4 py-2 text-center">0</td>
								<td class=" px-4 py-2 text-center">0</td>
								<td class=" px-4 py-2 text-center">0</td>
							</tr>
							<tr class="border-b border-bf-navy-3">
								<td class=" px-4 py-2">
									<div>10</div>
								</td>
								<td class=" px-4 py-2 border-r border-bf-navy-3">
									<div class="flex items-center justify-start">
										<span class="block mr-2"
											><img
												src="https://statistics.bcapps.org/images/e/b/5/11839.png"
												alt="Team2"
												class="w-4 h-4"
										/></span>
										<span class="block">FC Dinamo Minsk</span>
									</div>
								</td>
								<td class=" px-4 py-2 text-center">1</td>
								<td class=" px-4 py-2 text-center">0</td>
								<td class=" px-4 py-2 text-center">0</td>
								<td class=" px-4 py-2 text-center">1</td>
								<td class=" px-4 py-2 text-center">1</td>
								<td class=" px-4 py-2 text-center">1</td>
								<td class=" px-4 py-2 text-center">1</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<div class="border-t border-bf-grey-2  mt-10">
				<div
					class="flex justify-between text-xs font-bold uppercase text-bf-grey-1 tracking-widest py-3 px-6 "
				>
					<span class="block">
						Over / Under
					</span>
					<span class="block">
						All<i class="fas fa-sort-up transform rotate-180"></i>
					</span>
				</div>
				<div class="w-full overflow-auto relative">
					<table class="border-collapse table-auto bg-bf-grey-3 w-full">
						<thead>
							<tr class="border-t border-b border-bf-navy-3">
								<th class=" px-4 py-2 text-left">
									<div>#</div>
								</th>
								<th class=" px-4 py-2 border-r border-bf-navy-3 min-w-12 text-left">
									<div>Team</div>
								</th>
								<th class=" px-4 py-2">PLD</th>
								<th class=" px-4 py-2">W</th>
								<th class=" px-4 py-2">D</th>
								<th class=" px-4 py-2">L</th>
								<th class=" px-4 py-2">GA</th>
								<th class=" px-4 py-2">GD</th>
								<th class=" px-4 py-2">GM</th>
							</tr>
						</thead>
						<tbody>
							<tr class="border-b border-bf-navy-3">
								<td class=" px-4 py-2">
									<div>4</div>
								</td>
								<td class=" px-4 py-2 border-r border-bf-navy-3">
									<div class="flex items-center justify-start">
										<span class="block mr-2"
											><img
												src="https://statistics.bcapps.org/images/e/b/7/15723.png"
												alt="Team1"
												class="w-4 h-4"
										/></span>
										<span class="block">FC Minsk</span>
									</div>
								</td>
								<td class=" px-4 py-2 text-center text-bf-green">1</td>
								<td class=" px-4 py-2 text-center text-bf-orange">1</td>
								<td class=" px-4 py-2 text-center text-bf-red">0</td>
								<td class=" px-4 py-2 text-center">0</td>
								<td class=" px-4 py-2 text-center">0</td>
								<td class=" px-4 py-2 text-center">0</td>
								<td class=" px-4 py-2 text-center">0</td>
							</tr>
							<tr class="border-b border-bf-navy-3">
								<td class=" px-4 py-2">
									<div>10</div>
								</td>
								<td class=" px-4 py-2 border-r border-bf-navy-3">
									<div class="flex items-center justify-start">
										<span class="block mr-2"
											><img
												src="https://statistics.bcapps.org/images/e/b/5/11839.png"
												alt="Team2"
												class="w-4 h-4"
										/></span>
										<span class="block">FC Dinamo Minsk</span>
									</div>
								</td>
								<td class=" px-4 py-2 text-center">1</td>
								<td class=" px-4 py-2 text-center">0</td>
								<td class=" px-4 py-2 text-center">0</td>
								<td class=" px-4 py-2 text-center">1</td>
								<td class=" px-4 py-2 text-center">1</td>
								<td class=" px-4 py-2 text-center">1</td>
								<td class=" px-4 py-2 text-center">1</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Tables'
};
</script>

<style lang="scss">
th {
	font-weight: normal !important;
}
</style>
