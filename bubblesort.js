// fill array with random numbers
let rndArray;

// show the arrays we are dealing with
document.getElementById("generateNumbers")
    .addEventListener("click", (e) => {
        rndArray = fillList(10);
        document.getElementById("randomNumbers").textContent = rndArray;
    });

// show the end result;
document.getElementById("bubblesort")
.addEventListener("click", (e) => {
    document.getElementById("result").textContent = 'Bubble Sort: ' + bubbleSort(rndArray);
});
document.getElementById("selectionsort")
.addEventListener("click", (e) => {
    document.getElementById("result").textContent = 'Selection Sort: ' + selectionSort(rndArray);
});

function fillList(itemCount) {
    let anArray = [];
    for (let i = 0; i < itemCount; i++) {
        anArray.push(Math.floor((Math.random() * 10) + 1));
    }
    return anArray;
};

function bubbleSort(theArray) {
    // we will need a tmpArray to store values into, we simply copy theArray to tmpArray
    // because otherwise we cannot change the contents of theArray (without risking errors)
    let tmpArray = theArray;

    // lets begin our OUTSIDE loop, this will keep us looping enough times
    // to sort our numbers
    for (let loopCount = 0; loopCount < tmpArray.length; loopCount++) {
        // now lets loop from left to right in the array
        for (let n = 0; n < tmpArray.length - 1; n++) {
            console.log(tmpArray)
            // output some information
            console.log("Checking: " + tmpArray[n] + " is more than " + tmpArray[n + 1])

            // check our two elements in the array
            if (tmpArray[n + 1] < tmpArray[n]) {
                // we should switch, the next element is larger than the current  
                // get from array           
                let a = tmpArray[n];
                let b = tmpArray[n + 1];
                console.log("Switching: " + a + " with " + b)
                // put back into array
                tmpArray[n + 1] = a;
                tmpArray[n] = b;
            }
        }
    }
    return tmpArray;
};

// begin a loop from left to right
// while in the loop
// take I+1 - check if its < i
// if less, then put i+1 into i, and i into i+1

function selectionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        let min = i;

        for (var j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }

        if (i !== min) {
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }
    return arr;
};

console.log(selectionSort([6, 3, 8, 9, 2, 0, 3, 1, 4]));