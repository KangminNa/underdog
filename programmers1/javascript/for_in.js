/*
# 4. for in 문

### **for in**

객체의 각 엘리먼트에 접근할 수 있는 반복문.

### **객체의 속성들을 출력하는 동일한 코드**

### for 구문 사용

```jsx
var property_list = Object.keys(obj);

for( var i=0 ; i<property_list.length ; i++ ){
    var propertyName = property_list[i];
    console.log( "\t", propertyName, ": ", obj[propertyName] );
}
```

### for in 구문 사용

```jsx
for( var propertyName in obj ){
    console.log( "\t", propertyName, ": ", obj[propertyName] );
}
```
*/
var obj = {
	name:"object",
	weight:30,
	isObject:true,
	arr:[1,2,3],
	obj:{property:1}
};
Object.keys(obj); // -> 객체의 속성의 이름을 반환

console.log("For 구문으로 object property 반복하기");

var property_list = Object.keys(obj);
console.log("Property List :", property_list);

for(var i=0; i<property_list.length; i++){
	var propertyName = property_list[i];
	console.log("\t", propertyName, ":", obj[propertyName]);
}

console.log("\n\nFor in 구문으로 object poperty 반복하기");

for(var propertyName in obj){
	console.log("\t", propertyName, ":", obj[propertyName]);
}

