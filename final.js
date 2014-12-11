function factorial(n) { 
if ( (n == 0) || (n == 1) ) return 1 
else return (n * factorial(n-1) ) 
} 

function unscramble() { 
var ipLen, ipStr, e ; 

e = document.getElementById("txtIP") ; 
ipStr = e.value ; 
ipLen = ipStr.length ; 

if ( ipLen < 2 ) { 
alert ( "Please enter two or more characters!" ) ; 
return ; 
} 

alert ( "You have entered " + ipLen + " characters - there are " + factorial(ipLen) + " permutations!" ) ; 

getCombinations ( "", ipStr ) ; 

} 

function getCombinations ( estr, ostr ) { 
var i, j, e ; 

j = ostr.length ; 

if ( j < 2 ) { 
e = document.getElementById("results") 
s = e.innerHTML 
s = s + "<br>" + estr + ostr 
e.innerHTML = s 
} 
else { 
for ( i=1; i<=j; i++ ){ 
getCombinations ( estr + jsMid(ostr,i, 1), jsLeft(ostr, i-1) + jsRight(ostr, j-i)) 
} 
} 
} 

function jsMid ( str, s, c ) { 
return str.substring(s-1, s-1+c) ; 
} 

function jsLeft (str, c ) { 
return str.substring ( 0, c ) ; 
} 

function jsRight ( str, c ) { 
return str.substring ( str.length - c ) ; 
}