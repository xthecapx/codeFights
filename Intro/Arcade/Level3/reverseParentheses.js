function reverseParentheses(s) {
    for (var i = 0, ln = s.length; i < ln; i++) {
        if(s[i] == ')') {
            for (var j = i; j >= 0; j--) {
                if(s[j] == '(') {
                    s = s.substr(0, j) + s.substring(i , j + 1).split("").reverse().join("") + s.substr(i + 1, s.length);
                    i  = 0;
                    break;
                }
            }
        }
    }
    return s;
}

//console.log(reverseParentheses("a(bc)de"));
//console.log(reverseParentheses("a(bcdefghijkl(mno)p)q"));
//console.log(reverseParentheses("co(de(fight)s)"));

console.log(reverseParentheses("The ((quick (brown) (fox) jumps over the lazy) dog)"));