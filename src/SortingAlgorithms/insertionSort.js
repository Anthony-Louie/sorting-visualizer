export function getInsertionSortAnimations(array){
    const animations = [];
    if (array.length <= 1) return array; 
    for (let i = 1; i < array.length; i++)
    { 
        let key = array[i];
        animations.push('key-on', i);
        for(let j=i-1; j>=0; j--){
            if(key < array[j]){
                swap(array, i, j, animations);
                key = array[j];
            }
        }
    }
    return animations; 
}

function swap(array, i, j, animations) {
    //animations.push(['color-on', j]);
    animations.push(['swap', i, array[j], j, array[i]]);
    //animations.push(['color-off', j]);
    animations.push('key-off', i);
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}