export function getInsertionSortAnimations(array){
    const animations = [];
    if (array.length <= 1) return array;
    for (let i = 1; i < array.length; i++)
    {   
        let key = array[i];
        for(let j=i-1; j>=0; j--){
            if(key < array[j]){
                animations.push(['color-on', j+1]);
                swap(array, j+1, j, animations);
                key = array[j];
            }
        }
    }
    return animations; 
}

function swap(array, i, j, animations) {
    animations.push(['color-off', i]);
    animations.push(['swap', i, array[j], j, array[i]]);
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}