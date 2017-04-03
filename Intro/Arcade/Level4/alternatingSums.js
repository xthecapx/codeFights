function alternatingSums(a) {
  var ans = [0, 0];
  
  for(var i = 0, l = a.length; i < l; i++) {
    if(i % 2) {
        ans[1] += a[i];
    }    
    else {
        ans[0] += a[i];
    }
  }

  return ans;
}

alternatingSums([50, 60, 60, 45, 70]);