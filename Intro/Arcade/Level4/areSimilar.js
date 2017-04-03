function areSimilar(A, B) {
  var flag = true,
      next = 0,
      indexA = -1,
      indexB;
  
  for(var i = 0, ln = A.length; i < ln; i++) {
    if(A[i] != B[i]) {
      flag = false;
      next++;

      if(indexA == -1) {
        indexA = i;
      } else {
        indexB = i;
      }
    }
  }

  if(flag) {
    return true;
  }

  if(next != 2) {
    return false;
  } 

  if(next == 2) {
    if(A[indexA] == B[indexB] && A[indexB] == B[indexA]) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));