<script lang="ts">
	export let events: SchoolEvent[];

	/** 
	 * Represents a mapping of a key to all entries which have this key
	*/
	type Grouping<K, T> = Map<K, T[]>;

	/**
	 * Groups the entries in the array using the keyMapper function
	 * 
	*/
	function groupBy<K, T>(array: T[], keyMapper: (obj: T) => K): Grouping<K, T> {
		const map: Grouping<K, T> = new Map();

		array.forEach(item => {
			const key = keyMapper(item);
			const collection = map.get(key) || [];
			collection.push(item);

			map.set(key, collection);
		})

		return map;
	}

	$: eventsMap = groupBy(events, event => event.startDate.toISOString());
	$: console.log(events)
</script>

{#each eventsMap.entries() as entry}
	{entry[0]}: {JSON.stringify(entry[1])} <br>
{/each}



