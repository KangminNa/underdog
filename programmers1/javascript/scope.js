/*
# 1. 변수의 scope

### **변수의 Scope**

- 선언한 변수가 유효한 영역

### **function scope**

- 선언된 변수는 선언된 함수 안에서 접근 가능
- 선언된 함수 안에서 선언된 함수 (nested function)에서도 접근 가능
*/

function a(){
	var v_a="a";
	

	function b(){
		var v_b="b";
		console.log("o :", typeof(v), typeof(v_a), typeof(v_b));
	}

console.log("o :", typeof(v), typeof(v_a), typeof(v_b));
}

var v="v";

a();

console.log("o :", typeof(v), typeof(v_a), typeof(v_b));

//o : string undefined undefined
//a : string string undefined
//b : string string string

//변수의 scope는 function의 scope를 따른다.
//객체(변수)는 선언된 함수 안에서만 접근이 가능하다.