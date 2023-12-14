function migratoryBirds(arr) {
    // Write your code here
    arr.sort((a, b) => a - b);
    let maxFreq = 1;
    let currentFreq = 1; 
    let mostFrequent = arr[0];

    for (let i = 1; i < arr.length; i++) {
        currentFreq = (arr[i] === arr[i - 1]) ? currentFreq + 1 : 1;
        if (currentFreq > maxFreq) {
            maxFreq = currentFreq;
            mostFrequent = arr[i];
        }
    }
    return mostFrequent;
}