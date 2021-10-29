let a = 56;
let n = "krisanu";

console.log(a);
console.log(n);
console.log(typeof a);
console.log(typeof n);

// concat the two variable using "+" operator. & printing.
let c = 'Krisanu';
let d= 'Dey';
let name = c + " "+ d;
console.log(name);
//see variable values length.
console.log(name.length);
//upper case & lower case translate.
console.log(name.toUpperCase());
console.log(name.toLowerCase());
// trim function-- erase all space.
let e = '                Some content here            ';
console.log(e);
console.log(e.trim());

//includes() --function -- searching element. output true/false.
let krisanu = 'jhbsjibc dssh Krisanu jbjbjsdbib hbijcbidbj jbhihginb';
let anu = 'Krisanu';
console.log(krisanu.includes(anu));
//index posision.
console.log(anu.charAt(4));

//concat some element.
console.log(anu.concat(' Dey'));
//using split method
let mr = "1,2,3,4,5,6,7,8";
console.log(mr.split(','));

//sum in two numbers
let j = 50;
let k= 2;

console.log(j+k);
console.log(j-k);
console.log(j/k);
console.log(j*k);
console.log(j%k);

//toFixed()-- function using.
let f = 205.5415412;
console.log(f.toFixed(2));

//using floor/ceil/random number method.
console.log(Math.floor(f));
console.log(Math.ceil(f));
console.log(Math.random());

//change variables value typeof-- using parseInt()-- method.
let g = "250";
let h = parseInt(g);
console.log(g, typeof g);
console.log(h, typeof h);

//using toString() -- method.
let i = 2005;
let l = i.toString();
console.log(l, typeof l);

//template string.
let m = 'Krisanu Dey';
let age = 25;
let string = `My name is ${m} and I am ${age} years old.`;
console.log(string);

let isFreezing = true;
let isWord = false;
console.log(isFreezing, typeof isFreezing);
console.log(isWord, typeof isWord);