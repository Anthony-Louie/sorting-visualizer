export function getBubbleSortAnimations(array){
    const animations = [];
    if (array.length <= 1) return array;
    let swapped = false;
    for(let i = 0; i < array.length; i++){
        swapped = false;
        for(let j = 0; j < (array.length-i-1); j++){
            if(array[j] > array[j+1]){
                swap(array, j, j+1, animations);
                swapped = true;
            }
        }
        if(swapped === false) break;
    }
    return animations;
}

function swap(array, i, j, animations){
    animations.push([i, j]);
    animations.push([i, j]);
    animations.push([i, array[j], j, array[i]]);
    let temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}