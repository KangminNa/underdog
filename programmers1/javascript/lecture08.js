/*
### **undefined**

- 시스템에서 어떤 변수나 속성이 정의되지 않은 경우를 표현하기 위해 사용
    - 선언만 하고 초기화가 되지 않는 변수의 타입이나 값
    - 객체의 정의되지 않은 속성의 타입이나 값

### **null**

- 개발자가 명시적으로 아무것도 없는 비어있는 상태를 나타낼 때 사용
    - typeof의 결과는 object이며 값은 null
*/

var undefined_var;

//undefined_var;
//> undefined

//typeof(uninitialized_var);
//>undefined

var obj={
    x:1,
    y:2
}
//obj.x
//>1

//obj.y
//>2

//typeof(obj.z)
//>undefined

//var null_var;
//undefined

//null_var=null;
//>null

//typeof(null_var);
//>object

// 개발자가 명시적으로 비어있다고 선언
// 복잡한 프로그래밍이 아니라면 null의 개념을 사용할 일이 많지 않음
// 하지만 정의하지않는 변수나 속성에 접근하면 많이 보기 때문에 기억하기.
