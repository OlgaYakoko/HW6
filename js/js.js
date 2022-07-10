//1
let firstExemple = Boolean(Number("10")) + 1;
console.log(firstExemple);
// метод number приводит строку "10" к числу 10 -> метод Boolean преобразовывает число 10 в булевый тип true -> при конкатенации булевое значение будет числом -> результат 2;

let secondExemple = "sub " + Number(false);
console.log(secondExemple);
// метод number приводит булевое значение false к числу 0 ->  при конкатенации строка приведет число 0 к строке -> результат "sub 0"

let thirdExample = 16  *  "      91    ";
console.log(thirdExample);
// при умножении строка "91" преобразовывается в число -> результат 1456

let fourthExample = true-70;
console.log(fourthExample);
// при вычитании булевое значение преобразовывается в число 1 -> 1 - 70 -> результат -69

let fifthExample = Number(1 + String(1)) + 1;
console.log(Number(1 + String(1)) + 1); 
// первым действием выполнится операция в скобках, метод String приведет число 1 к строке "1" -> 1 + строка "1"  -> "11" -> метод Number преобразует строку в число 11 -> 11 + 1 = 12; 