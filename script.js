"use strict"


// №1
const user = 'Твое прекрасное имя'; // создана переменная с присвоинным значением
alert(`Приветствую тебя: ${user}`); /*здесь использована функция(или не функция) alert которое выдает диалоговое окно*/

//переменные
let carWidth = 3000;
let carLength = 5000;


/*при использовании конкатенации нужно приложить усилия, чтобы увидеть,
 какая в итоге получится строка, по этому использована интерполяция*/

console.log(`Мерседес с шириной ${carWidth} мм и длиной ${carLength} мм`); 


//МАТЕМАТИЧЕСКИЕ ОПЕРАЦИИ
// 1
let a = 1 + 2 + 3;
alert(a + a);

// 2
let c = 10;
let d = 5;
let result = c + d;

console.log(result);

// 3
let a2 = 1;
let b2 = 2;
let c2 = 3 + b2 + a2;

console.log(c2);

//4
let a3 = 10;
let b3 = 5;
let c3 = a3 - b3;
let d3 = 7;
let result2 = c3 + d3;

console.log(result2);


//Не запуская код, определите, что выведется на экран:

let ba = 5 + 5 * 3;
alert(ba);// ответ 20

let ab = 5 + 5 * 3 + 3;
alert(ab);//ответ 23

let ac = 8 / 2 + 2;
alert(ac); //ответ 6

let ad = 8 + 2 / 2;
alert(ad); // ответ 9

let ae = 8 / 2 * 2;
alert(ae); //ответ 8

let af = 8 * 4 / 2 / 2;
alert(af);// ответ 8

let ag = (2 + 3) * (2 + 3);
alert(ag);// ответ 25

let ah = (2 + 3) * 2 + 3;
alert(ah);//ответ 25

let ak = 2 * (2 + 4 * (3 + 1));
alert(ak);//ответ 36

let al = 2 * 8 / 4;
alert(al);//ответ 4

let am = (2 * 8) / 4;
alert(am);//ответ 4

let an = (2 * 8) / 4;
alert(an);//ответ 4

// N10

let floatA = 1.5;
let floatB = 0.75;
let res = floatA + floatB;

console.log(res);

// N11
let negaA = -100;
console.log(negaA);

let negaB = -500;
console.log(-negaB);

// N12
let per = 13;
let perb = 5;
console.log(per % perb);

// 13
let pop = 2**10;
console.log(pop);

//Не запуская код, определите, что выведется на экран:

/*
let a = 3 * 2 ** 3;
alert(a); ответ 15  

let a = (3 * 2) ** 3;
alert(a); ответ 15

let a = 3 * 2 ** (3 + 1);
alert(a); ответ 625

let a = 2 ** 3 * 3;
alert(a); 64

let a = 3 * 2 ** 3 * 3;
alert(a);
*/

// 14

const name = 'Requ';
console.log(`Меня зовут ${name} я аватар, и когда мир нуждался во мне я пропал`);

// 15
let str = '!!!';
console.log(str);

let java = 'Java';
let script = 'Script';
console.log(java+script);

let hel = 'hello ';
let world = 'world';
console.log(hel+world);

// 16
let hel2 = 'hello '.length;
let world2 = 'world'.length;
console.log(hel2+world2);

// 17
let str1 = 'xxx';
let str2 = 'yyy';
let txt  = `aaa ${str1} bbb ${str2} ccc`;
console.log(txt);

let str4 = `a
            b
            c`;

// 18

let abs;

abs = 13;

console.log(abs);

let abc;

abc = null;

console.log(abc);

let abd;

abd = true;

console.log(abd);

let abi;

abi = false;

console.log(abi);

let abx = 'soul';
let axb = 'society';
console.log(abx*axb);

console.log(10 / 0);
console.log(-10 / 0);

// 19
let num = 39023;
console.log(num);

let num1 = 123;
let num2 = 456;
let num3 = 3278;
console.log(num1, num2, num3);


let azz = '6575';
let aj = lol; //здесь ошибочка(
console.log(azz, aj);


// 20

const PI = 3.14;
const dii = 5;
const ll = PI * dii;
console.log(`Ответ длина окружности ${ll} cm`);


// 21

/*
let a = '5' + '2';
alert(a); 7

let a = '5' + 2;
alert(a); 52

let a = 5 + '2';
alert(a); 52

let a = 5 + 2;
alert(a); 7

let a = '5' * '2';
alert(a); 10

let a = '5' - '2';
alert(a); 3

let a = '5' / '2';
alert(a); 2,5

let a = '5' % '2';
alert(a); 1

let a = '5s' * '2';
alert(a); 5s2

let a = '5s' + '2';
alert(a); 5s2

let a = (-'5') + (-'2');
alert(a); -7

let a = '5' * 1 + '2' * 1;
alert(a); 7

let a = '5' * '1' + '2' * '1';
alert(a); 7

let a = '' + 3 + 1;
alert(a); 'пробел'4

*/


// 22 

let abba = '10';
let baab = '20';

console.log(Number(abba) + Number(baab));

/*
alert( Number('2') + Number('3') ); 5

alert( 2 + Number('3') ); 5

alert( '2' + Number('3') ); ошибка

let a = +'2';
let b = +'3';
alert(a + b); // выведет 5

*/
// 23

let int = parseInt('5px');
let int2 = parseInt('6px');
console.log(int + int2);

let float = parseFloat('5.5px');
let float2 = parseFloat('6.25px');
console.log(float + float2);

/* АЛЬТЕРНАТИВА
let float = parseFloat('5.5px');
let float2 = parseFloat('6.25px');
console.log(float + float2 + 'px');
*/


// 24
let nnn = 65;
let mmm = 76;
console.log(String(nnn) + String(mmm));

let xes = 100;
let y = String(xes);
console.log(y.length);

let xy = 1303;
let yx = 544;
console.log(String(yx).length + String(xy).length);
/**
let xy = 1303;
let yx = 544;
console.log(yx + xy);
 */

// 25

alert(true + 3); // ответ 4

alert(true + true);//2

alert(true - true); //0

alert(true + false);// 1

alert('1' + true); //1true

alert( String(true) + 1 ); // true1

alert( String(true) + Number(true) ); // true1

// 26

/*

let test = Boolean(3);
alert(test); true

let test = Boolean(0);
alert(test); false

let test = Boolean(-1);
alert(test); true

let test = Boolean(-0);
alert(test); false

let test = Boolean(+0);
alert(test); false

let test = Boolean('abc');
alert(test); true

let test = Boolean('');
alert(test); false

let test = Boolean('0');
alert(test); true

let test = Boolean(true);
alert(test); true

let test = Boolean(false);
alert(test); false

let test = Boolean('true');
alert(test); true

let test = Boolean('false');
alert(test); true

let test = Boolean(null);
alert(test) false

let test = Boolean('null');
alert(test); true

let test = Boolean(undefined);
alert(test); false

let test = Boolean('undefined');
alert(test); true

let test = Boolean(NaN);
alert(test);false

let test = Boolean('NaN');
alert(test);true

let test = Boolean(3 * 'abc');
alert(test); false

let test = Boolean(Infinity);
alert(test); true

let test = Boolean(1 / 0);
alert(test); true

 */

// 27
let arr = 'abcde';
console.log(arr[0], arr[2], arr[4]);


let arr2 = 'abcde';
console.log(arr2[4], arr2[3], arr2[2], arr2[1], arr2[0]);

let str9 = 'abcde';
let num9 = 2;
console.log(str9[num9]);

// 28



 



