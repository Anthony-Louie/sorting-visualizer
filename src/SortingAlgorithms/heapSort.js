export function getHeapSortAnimations(array){
    const animations = [];
    if (array.length <= 1) return array;
    const auxArray = array.slice();
    let n = array.length;
    // Build heap (rearrange array)
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--)
        heapify(array, n, i, animations);

    // One by one extract an element from heap
    for (let i = n - 1; i > 0; i--) {
        // Move current root to end
        animations.push([0, i]);
        animations.push([0, i]);
        animations.push([0, array[i], i, array[0]]);
        let temp = array[0];
        array[0] = array[i];
        array[i] = temp;

        // call max heapify on the reduced heap
        heapify(array, i, 0, animations);
    }
    return animations;
}
//Courtesy of https://www.geeksforgeeks.org/heap-sort/?ref=gcse
function heapify(array, n, i, animations){
    let largest = i; // Initialize largest as root
    let l = 2 * i + 1; // left = 2*i + 1
    let r = 2 * i + 2; // right = 2*i + 2
 
    // If left child is larger than root
    if (l < n && array[l] > array[largest])
        largest = l;
 
    // If right child is larger than largest so far
    if (r < n && array[r] > array[largest])
        largest = r;
 
    // If largest is not root
    if (largest != i) {
        animations.push([i, largest]);
        animations.push([i, largest]);
        animations.push([i, array[largest], largest, array[i]]);
        let temp = array[i];
        array[i] = array[largest];
        array[largest] = temp;

        // Recursively heapify the affected sub-tree
        heapify(array, n, largest, animations);
    }
}