/*
# 파트5. String

# 1. String 이어 붙이기

****String 이어 붙이기****

### **문자열 길이 알아내기**

- 문자열의 `.length` 속성을 이용
    - `str.length`

### **문자열 붙이기**

1. `.concat` 함수 사용
    - `str1.concat(str2)`
2. 더하기(+) 연산자 사용
    - `str1+str2`

*/
var str = "Hello";
str.length;//5
str["length"];//5
//두 문자열 붙이기
var str2="world";
str.concat(str2);//concat을 활용하여 문자열 붙임
var str3 = str.concat(str2);//새로운 변수에 선언
str.concat(str2).concat("!");//concat은 이어서 사용 가능

"Hello".concat("world").concat("!");
"hello".length;

str+str2;//위와 같은 값 반환
"Hello" + "World";//Hello World
3.14 + "is pi";//"3.14 is pi" String 반환