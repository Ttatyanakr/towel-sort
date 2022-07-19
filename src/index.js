module.exports = function towelSort(matrix) {
  
  let emptyArr = [];
  function isEmpty(obj) {
    for (let key in obj) {
      return false;
    }
    return true;
  }

  if (isEmpty(matrix)) {
    return emptyArr;
  }  else {
    for (let i = 0; i < matrix.length; i++) {
      (i % 2 === 0) ? matrix[i].sort((a, b) => a - b) : matrix[i].sort((a, b) => b - a);
    }
  
    return matrix.flat();
  }
}