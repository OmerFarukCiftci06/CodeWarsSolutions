//https://www.codewars.com/kata/580a4734d6df748060000045/train/javascript

function isSortedAndHow(array) {
    const ascendingArray = [...array].sort((a, b) => a - b);
    const descendingArray = [...array].sort((a, b) => b - a);
    const isAscending = array.every((val, i) => val === ascendingArray[i]);
    const isDescending = array.every((val, i) => val === descendingArray[i]);

    if (isAscending) return "yes, ascending";
    if (isDescending) return "yes, descending";
    return "no";
}
isSortedAndHow([1, 3, 9, 4])
isSortedAndHow([1, 1, 2, 3])
isSortedAndHow([3, 3, 2, 1])