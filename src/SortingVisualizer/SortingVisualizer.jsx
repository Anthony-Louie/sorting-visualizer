import React from 'react';
import {getMergeSortAnimations} from '../SortingAlgorithms/mergeSort.js'
import {getQuickSortAnimations} from '../SortingAlgorithms/quickSort.js'
import {getBubbleSortAnimations} from '../SortingAlgorithms/bubbleSort.js'
import {getHeapSortAnimations} from '../SortingAlgorithms/heapSort.js'
import {getInsertionSortAnimations} from '../SortingAlgorithms/insertionSort.js';
import {getSelectionSortAnimations} from '../SortingAlgorithms/selectionSort.js';
import './SortingVisualizer.css';

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 5;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 141;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'darkturquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'crimson';

export default class SortingVisualizer extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            array: [],//main array
        };
    }

    componentDidMount(){//when this component loads for the first time, resetArray will be called
        this.resetArray();
    }

    resetArray(){//method that creates an array and pushes in 100 random values into that array
        const array = [];
        for(let i = 0; i < NUMBER_OF_ARRAY_BARS; i++){
            array.push(randomIntFromInterval(5,700));
        }
        this.setState({array});
    }

    mergeSort() {
        const animations = getMergeSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('array-bar');
          const isColorChange = i % 3 !== 2;
          if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;//if i%3===0 is true SECONDARY_COLOR, else PRIMARY_COLOR
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * ANIMATION_SPEED_MS);
          } else {
            setTimeout(() => {
              const [barOneIdx, newHeight] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight}px`;
            }, i * ANIMATION_SPEED_MS);
          }
        }
    }

    quickSort(){
        const animations = getQuickSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            if(animations[i][0] === 'pivot-on'){
                const[message, pivotIdx] = animations[i];
                const pivotStyle = arrayBars[pivotIdx].style;
                setTimeout(() => {
                    pivotStyle.backgroundColor = 'yellow';
                }, i * ANIMATION_SPEED_MS);
            }
            else if(animations[i][0] === 'pivot-off'){
                const[message, pivotIdx] = animations[i];
                const pivotStyle = arrayBars[pivotIdx].style;
                setTimeout(() => {
                    pivotStyle.backgroundColor = PRIMARY_COLOR;
                }, i * ANIMATION_SPEED_MS);
            }
            else if(animations[i][0] === 'color-on'){
                const [message, barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = SECONDARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            }
            else if(animations[i][0] === 'color-off'){
                const [message, barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            }
            else{
                setTimeout(() => {
                    const [message, barOneIdx, newHeight, barTwoIdx, newHeight2] = animations[i]
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    barTwoStyle.height = `${newHeight2}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }

    bubbleSort(){//First SUCCESS!!!
        const animations = getBubbleSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            if(i % 3 !== 2){
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            }
            else{
                setTimeout(() => {
                    const [barOneIdx, newHeight, barTwoIdx, newHeight2] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    barTwoStyle.height = `${newHeight2}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }

    heapSort(){
        const animations = getHeapSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            if(i % 3 !== 2){
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            }
            else{
                setTimeout(() => {
                    const [barOneIdx, newHeight, barTwoIdx, newHeight2] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    barTwoStyle.height = `${newHeight2}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }

    insertionSort(){//WIP
        const animations = getInsertionSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++){
            const arrayBars = document.getElementsByClassName('array-bar');
                
        }
    }

    selectionSort(){
        const animations = getSelectionSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            if(i % 3 !== 2){
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            }
            else{
                setTimeout(() => {
                    const [barOneIdx, newHeight, barTwoIdx, newHeight2] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    barTwoStyle.height = `${newHeight2}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }

    TestSort(){
        for (let i = 0; i < 100; i++) {
            const array = [];
            const length = randomIntFromInterval(1, 1000);
            for (let i = 0; i < length; i++) {
              array.push(randomIntFromInterval(-1000, 1000));
            }
            const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
            let testArray = array.slice();
            //quickSort(testArray, 0, testArray.length-1);
            for (let i = 1; i < testArray.length; i++){ 
                let j = i-1; 
                while(testArray[i] < testArray[j] && j > 0){
                    swap(testArray, i, j);
                    j--;
                }
            }

            console.log(arraysAreEqual(javaScriptSortedArray, testArray));
          }
    }

    render(){
        const {array} = this.state;

        return(//{array.map...} iterates through the array and maps the values to "array-bar" divs
            <div className="array-container">
                {array.map((value, idx) => (
                    <div 
                        className="array-bar" 
                        key={idx}
                        style={{
                            backgroundColor: 'darkturquoise',
                            height: `${value}px`,/*sets the heights of each bar so that it is <value> pixels tall */
                        }}></div>
                ))}
                <button onClick={() => this.resetArray()}>Generate New Array</button>
                <button onClick={() => this.mergeSort()}>Merge Sort</button>
                <button onClick={() => this.quickSort()}>Quick Sort</button>
                <button onClick={() => this.heapSort()}>Heap Sort</button>
                <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
                <button onClick={() => this.insertionSort()}>Insertion Sort</button>
                <button onClick={() => this.selectionSort()}>Selection Sort</button>
                <button onClick={() => this.shellSort()}>Shell Sort</button>
                <button onClick={() => this.TestSort()}>Test Sorting</button>
            </div>
        );
    }
}

function randomIntFromInterval(min, max){//function generates a random integer that is between min and max inclusive
    return Math.floor(Math.random() * (max-min+1)) + min;
}

function arraysAreEqual(arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length) return false;
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) {
        return false;
      }
    }
    return true;
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
 
/* This function takes last element as pivot, places
   the pivot element at its correct position in sorted
   array, and places all smaller (smaller than pivot)
   to left of pivot and all greater elements to right
   of pivot */
function partition(arr, low, high) {
 
    // pivot
    let pivot = arr[high];
 
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
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, high);
    return (i + 1);
}
 
/* The main function that implements QuickSort
          arr[] --> Array to be sorted,
          low --> Starting index,
          high --> Ending index
 */
function quickSort(arr, low, high) {
    if (low < high) {
 
        // pi is partitioning index, arr[p]
        // is now at right place
        let pi = partition(arr, low, high);
 
        // Separately sort elements before
        // partition and after partition
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}
