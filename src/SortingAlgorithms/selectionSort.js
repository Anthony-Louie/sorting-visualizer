export function getSelectionSortAnimations(array){
    const animations = [];
    if (array.length <= 1) return array;
    var min_idx;
  
    // One by one move boundary of unsorted subarray
    for (let i = 0; i < array.length-1; i++){
        // Find the minimum element in unsorted array
        min_idx = i;
        for (let j = i + 1; j < array.length; j++)
        if (array[j] < array[min_idx])
            min_idx = j;
  
        // Swap the found minimum element with the first element
        swap(array,min_idx, i, animations);
    }
    return animations;
}
function swap(array, i, j, animations) {
    animations.push([i, j]);
    animations.push([i, j]);
    animations.push([i, array[j], j, array[i]]);
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}