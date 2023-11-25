<script>
	let today = new Date();
	let year = today.getFullYear();
	let thanksgiving = new Date(year, 10, 23);
	let christmas = new Date(year, 11, 25);
	let selectedHoliday = today > thanksgiving && today < christmas ? 'Christmas' : 'Thanksgiving';
	let daysUntil;

	$: {
		let targetDate = selectedHoliday === 'Thanksgiving' 
			? (today > thanksgiving ? new Date(year + 1, 10, 23) : thanksgiving)
			: (today > christmas ? new Date(year + 1, 11, 25) : christmas);
		daysUntil = Math.ceil((targetDate - today) / (1000 * 60 * 60 * 24));
	}
</script>

<div class={selectedHoliday.toLowerCase()}>
	<h1>{selectedHoliday} Countdown</h1>
	<p>There are {daysUntil} days until {selectedHoliday}</p>
	<label>
		<input type="radio" value="Thanksgiving" bind:group={selectedHoliday} />
		<span>Thanksgiving</span>
	</label>
	<label>
		<input type="radio" value="Christmas" bind:group={selectedHoliday} />
		<span>Christmas</span>
	</label>
	{#if selectedHoliday === 'Thanksgiving'}
		<div>
			<iframe width="560" height="315" src="https://www.youtube.com/embed/CORgL-Iejps" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
		</div>
	{:else}
		<div>
			<iframe width="560" height="315" src="https://www.youtube.com/embed/riSPpUNWdTE" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
		</div>
	{/if}
</div>