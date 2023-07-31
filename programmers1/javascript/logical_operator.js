// 관계연산자 - 실습(2)
// 문제 설명
// 함수 solution의 내용을 수정해서 a와 b가 모두 True라면 True를, 그렇지 않으면 False를 return하도록 만들어 보세요.

// 이번 문제에서는 논리연산자에 대해 알아봅시다.
// 논리연산자는 두 boolean 피연산자에 대해 연산하는 연산자로 AND, OR, NOT 등이 있습니다. 이를 참고하여 문제를 해결해 보세요.

// AND (&&)
// 두 피연산자가 모두 true인 경우에만 true를 나타냅니다.

// True	False
// True	True	False
// False	False	False
// OR (||)
// 두 피연산자가 하나라도 true인 경우 true를 나타냅니다.

// True	False
// True	True	True
// False	True	False

function solution(a,b){
    //이 아래줄을 수정해서 a와 b가 모두 True인지를 return하도록 만들어 보세요.
    return a&&b
}