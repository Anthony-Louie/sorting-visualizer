export function getQuickSortAnimations(array){
    const animations = [];
    if (array.length <= 1) return array;
    quickSort(array, 0, array.length-1, animations);
    return animations;
}
//Courtesy of geeksforgeeks.org/quick-sort/
function partition(arr, low, high, animations) {
    let pivot = arr[high]; //pivot
    animations.push(['pivot-on', high]);
 
    // Index of smaller element and
    // indicates the right position
    // of pivot found so far
    let i = (low - 1);
 
    for (let j = low; j <= high - 1; j++) {
        // If current element is smaller
        // than the pivot
        if (arr[j] < pivot) {
            // Increment index of
            // smaller element
            i++;
            swap(arr, i, j, animations);
        }
    }
    swap(arr, i + 1, high, animations);
    animations.push(['pivot-off', high]);
    return (i + 1);
}
 
/* The main function that implements QuickSort
          arr[] --> Array to be sorted,
          low --> Starting index,
          high --> Ending index
 */
function quickSort(arr, low, high, animations) {
    if (low < high) {
        // pi is partitioning index, arr[p]
        // is now at right place
        let pi = partition(arr, low, high, animations);
 
        // Separately sort elements before
        // partition and after partition
        quickSort(arr, low, pi - 1, animations);
        quickSort(arr, pi + 1, high, animations);
    }
}
function swap(array, i, j, animations) {
    animations.push(['color-on', i, j]);
    animations.push(['color-off', i, j]);
    animations.push(['swap', i, array[j], j, array[i]]);
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}