<script lang="ts">
	export let date: Date;
</script>

<div class="calendar-detail">
	<div class="calendar-detail__heading">
			{date.toLocaleDateString('en-us', {
				weekday: 'long',
				year: 'numeric',
				month: 'long',
				day: 'numeric',
			})}
	</div>
</div>