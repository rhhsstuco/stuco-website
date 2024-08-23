/**
 * Generates an reordered array where every each partition is in sequential order
 * A partition is a subarray consisting of each item at index nx, nx + 1, nx + 2, ..., where x is a natural number
 * @param array the array to reorder
 * @param numPartitions the number of equally sized partitions (except for remainders) to generate
 */
function flatPartitions<T>(array: T[], numPartitions: number): T[] {
  const newArray: T[] = [];

  const n = Math.floor(array.length / numPartitions);

  for (let offset = 0; offset < numPartitions; offset++) {
    for (let i = 0; i < n; i++) {
      newArray.push(array[offset + i * numPartitions]);
    }
  }

  for (let i = n * numPartitions; i < array.length; i++) {
    newArray.push(array[i]);
  }

  return newArray;
}

export default flatPartitions;
