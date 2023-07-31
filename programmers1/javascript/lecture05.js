//파트3. Number 강의

var height=prompt("키를 입력해 주세요"); // 입력창 만들기
console.log(height, typeof(height)); // 입력한 값이 String으로만 들어옴

var height_int = parseInt(height);
console.log(height_int, typeof(height_int)); // 입력한 값을 Int -> Number로 변경

var height_float = parseFloat(height_float);
console.log(height_float, typeof(height_float));// 입력한 값을 Float -> Number로 변경

// var a=1/0; -> Infinity type