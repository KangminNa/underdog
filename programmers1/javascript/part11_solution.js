/*
# 파트11. 연습문제

# 1. 평균구하기

### **문제 설명**

정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

### **제한사항**

- arr은 길이 1 이상, 100 이하인 배열입니다.
- arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.

### **입출력 예**

| arr | return |
| --- | --- |
| [1,2,3,4] | 2.5 |
| [5,5] | 5 |
*/

function solution(arr) {
    return getAverage(arr);
}

function getSum(arr) {
  if (!arr || arr.length === 0) {
    return 0; // 빈 배열이거나 배열이 주어지지 않은 경우 0을 반환
  }

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; // 배열의 요소들을 더하여 sum에 누적
  }

  return sum;
}

function getAverage(arr) {
  const sum = getSum(arr); // 배열의 합을 구하는 getSum 함수 호출
  const average = sum / arr.length; // 배열의 평균값 계산
  return average;
}