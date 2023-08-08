/*
### for in 문 - 실습(2)

### **문제 설명**

`for in`문을 이용해서 obj의 속성중, number 타입의 값을 모두 더해서 sum에 저장하도록 빈칸을 채워 코드를 완성해 보세요.

---

`for in`문은 객체의 각 엘리먼트에 접근할 수 있는 반복문입니다. for문은 인덱스를 통해 엘리먼트에 접근할 수 있는 반면 for in문은 속성의 이름을 통해 엘리먼트에 접근할 수 있습니다. 아래의 두 코드는 객체의 속성들을 출력하는 동일한 역할을 합니다. 이 예제를 살펴보고 문제를 해결해 보세요.

### for문 사용

```jsx
var property_list = Object.keys(obj);     // Object.keys()를 통해 속성에 접근

for( var i=0 ; i<property_list.length ; i++ ){
    var propertyName = property_list[i];
    console.log( "\t", propertyName, ": ", obj[propertyName] );
}
```

### for in문 사용

```jsx
for( var propertyName in obj ){
    console.log( "\t", propertyName, ": ", obj[propertyName] );
}
```
*/
var obj = {
    name: "object",
    age: 10,
    weight: 5
}
var sum = 0;
for (var key in obj){
    if( typeof( obj[key]) == "number" ){
			sum = sum + obj[key];
    }
}

console.log("sum :", sum);