export function getInsertionSortAnimations(array){
    const animations = [];
    if (array.length <= 1) return array;
    let i, key, j; 
    for (i = 1; i < array.length; i++)
    { 
        animations.push('key-on', i); 
        j = i - 1; 
   
        /*Move elements of arr[0..i-1], that are 
        greater than key, to one position ahead 
        of their current position*/
        while (j >= 0 && array[j] > array[i])
        {
            animations.push('color-on', j);
            animations.push('color-off', j);
            animations.push('swap', i, array[j], j, array[i]);
            array[j + 1] = array[j]; 
            j = j - 1; 
        } 
        array[j + 1] = array[i];
        /*for(let j=i-1; j>=0; j--){
            while(array[j] > array[i]){
                swap(array, j, i, animations);
            }
        }
        animations.push('key-off', i);*/
    }
    return animations; 
}

function swap(array, i, j, animations) {
    animations.push(['color-on', j]);
    animations.push([j, array[i], i, array[j]]);
    animations.push(['color-off', j]);
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}