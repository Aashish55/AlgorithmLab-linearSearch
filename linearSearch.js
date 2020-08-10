function linear_search(arr, x) {
    // Go through all the elements of arr to look for item.
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === x) return `INDEX of ${x} is: ${i}`;
    }
    // Item not found in the array.
    return `${x} cannot be found!`;
}
//numerical search
var arr = [1, 3, 7, 11, 19, 23, 29, 37, 43, 56, 61, 67, 71, 79, 83, 97]

console.log(linear_search(arr, 67))
console.log(linear_search(arr, 89))
//character search
arr = ['a', 'e', 'b', 'd', 'g', 'z'];
console.log(linear_search(arr, 'b'));
console.log(linear_search(arr, 'f'));
//running time
let start = Date.now();
x = 67
linear_search([1, 3, 7, 11, 19, 23, 29, 37, 43, 56, 61, 67, 71, 79, 83, 97], x)
let end = Date.now()
console.log(`Linear Searching time taken for ${x} is: ${end - start} ms.`)
//random data running time
start = Date.now();
data = [...Array(1000000).keys()];
linear_search(data, 10000)
end = Date.now()
console.log(`Linear Searching time taken is:: ${end - start} ms.`)
