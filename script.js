//Знайти число в відсортованому масиві//
let arr = [4, 6, 9, 11, 13, 17, 20];

function binarySearch(array, num) {
    let low = 0;
    let high = array.length - 1;

    while (low <= high) {
        let mid = Marth.floor((low + high) / 2);
        if (aray[mid] === num) {
            return mid;
        } else if (array[mid] < num) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}

console.log(`Index: ${binarySearch(arr, 9)}`);



//Знайти число в невідсортованому масиві//
let arr = [7, 11, 5, 17, 9, 19, 15];

function binarySearch(array, num) {
    let low = 0;
    let high = array.length - 1;

    while (low <= high) {
        let mid = Marth.floor((low + high) / 2);
        if (aray[mid] === num) {
            return mid;
        } else if (array[mid] < num) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}

console.log(`Index: ${binarySearch(arr, 5)}`);
