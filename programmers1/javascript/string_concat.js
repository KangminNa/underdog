/*
### **문제 설명**

변수 prefix에 저장된 문자열에 변수 suffix에 저장된 문자열을 붙여서 word에 저장하세요. 그리고 그 길이를 변수 word_length에 저장하세요.

---

문자열을 붙이기 위해서 두 가지 방법을 사용할 수 있습니다.

- `.concat` 함수 사용
- 더하기(+) 연산자 사용

```jsx
var str1 = "Hello";
var str2 = "World";

var a = str1.concat(str2);    // a 와 b의 결과값은
var b = str1 + str2;          // `HelloWorld`로 같습니다.
```

문자열의 길이를 알아내기 위해 `.length` 속성을 이용할 수 있습니다.

```jsx
var a_length = a.length;      // 'HelloWorld'의 길이인 10이 저장됩니다.
```
*/
var prefix = "program";
var suffix = "mer";
var word = prefix + suffix;
var word_length = word.length;

console.log("word : ", word);
console.log("word_length : ", word_length);