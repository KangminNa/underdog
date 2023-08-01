/*
Part 04 - 연산자
Arithematic operator
이항연산자 (binary operator)
두개의 피연산자(A, B)를 가지는 연산자. A 연산자 B 의 꼴로 사용함. 피연산자는 변수나 숫자가 될 수 있음.

+ 더하기
- 빼기
* 곱하기
/ 나누기
% 나머지
단항연산자 (unary operator)
하나의 피연산자(A)를 가지는 연산자. 보통 연산자A의 꼴로 사용함. 대표적으로 - 연산자가 있으며, -A의 꼴로 사용하는 경우 -는 이항 연산자가 아닌, 단항연산자임. A변수에 -1을 곱한 효과가 발생.

증감연산자 (++, --)
표현식 안에서 변수의 값을 증가하거나 감소시킬 수 있음.
각각, A=A+1, A=A-1의 효과를 발생함. 연산자를 변수 앞에 사용한 경우와 변수 뒤에 사용한 경우에 따라 변수의 값을 업데이트 하는 순서가 바뀜.

Code 1

var a;

a = 1;
console.log(++a);
console.log(a);

a = 1;
console.log(a++);
console.log(a);

Result 1

2
2

1
2

Math 관련 명령어
Math.pow(A,b) : A의 B승을 구해 줌
Math.sqrt(A) : A의 제곱근을 구해 줌
Math.random() : 0~1 사이의 임의의 난수를 발생시켜 줌

*/

// var a=5, b=3;
// a+b;// 8
// a-b;//2
// a+3;//8
// 5+3;//8
// a*b;//15
// a/b;//1.6666666666666667
// a%b;//2
// -a;//-5

var a=1;
console.log(a);//1
console.log(++a);//++a -> a+1, --a -> a-1, ++a -> 실행문 이후에 +1, --a 도 마찬가지
console.log(a);//2

Math.pow(2,3); //2의 3승 -> 8
Math.sqrt(16); // 16의 제곱근 -> 4
Math.random(); // 아무숫자 랜덤