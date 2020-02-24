
// You should implement your task here.

module.exports = function towelSort(matrix)
{
  let sorted = [];

  if (matrix === undefined) {
    return [];
  }

  //iterate over an outer array
  for (let i = 0; i < matrix.length; i++) {

    //for an outer array with an even index
    if (i % 2 == 0) {
      //iterate over the inner array starting from the beginning
      for (let j = 0; j < matrix[i].length; j++) {
        sorted.push(matrix[i][j]);
      }
    //for an outer array with an odd index
    } else {
      //iterate over the inner array starting from the end
      for (let j = matrix[i].length - 1; j >= 0; j--) {
        sorted.push(matrix[i][j]);
      }
    }

  }

  return sorted;
}
