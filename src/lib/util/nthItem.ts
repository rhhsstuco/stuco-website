export default function nthItem<T>(array: T[], numPartitions: number): T[] {
	const newArray: T[] = [];

	const n = Math.floor(array.length / numPartitions);

	for (let offset = 0; offset < numPartitions; offset++) {
		for (let i = 0; i < n; i++) {
			newArray.push(array[offset + i * numPartitions])
		}
	}

	for (let i = n * numPartitions; i < array.length; i++) {
		newArray.push(array[i]);
	}

	return newArray;
}