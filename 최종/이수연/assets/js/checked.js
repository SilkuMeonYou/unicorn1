let checkAll = document.querySelector(".allchk"); // 전체동의 쿼리셀렉터로 불러오기
let ischecked = false;

checkAll.addEventListener("click", function () {
    console.log("click")
    ischecked = !ischecked;
    console.log(ischecked)

    let essentialCheckboxes = document.querySelectorAll(".essential"); // 필수동의
    essentialCheckboxes.forEach(function (checkbox) { // 필수안의 체크박스들 체크하게 만들기
        checkbox.checked = ischecked;
    });

    let selectcheckboxes = document.querySelectorAll(".select"); // 선택동의
    selectcheckboxes.forEach(function (checkbox) { // 선택동의 체크박스들 체크하게 만들기
        checkbox.checked = ischecked;
    });

    if (ischecked) {
        submitButton.disabled = false; // 전체동의가 선택되었을 때 버튼 활성화
    } else {
        submitButton.disabled = true; // 전체동의가 해제되었을 때 버튼 비활성화
    }
})

let submitButton = document.querySelector("button"); // 확인버튼 쿼리셀렉터로 불러오기

let essentialCheckboxes = document.querySelectorAll(".essential"); // 필수동의 쿼리셀렉터로 불러오기
let eschecked = false;

let e1 = document.querySelector("#e1"); // 선택버튼 쿼리셀렉터로 불러오기
let e2 = document.querySelector("#e2"); // 선택버튼 쿼리셀렉터로 불러오기

// 필수 체크박스 상태 변경 시 버튼 활성화 여부 업데이트
function updateSubmitButton() {
    if (e1.checked && e2.checked) { // 두개 선택이 되면
        submitButton.disabled = false; // 확인버튼 활성화
    } else {
        submitButton.disabled = true; // 확인버튼 비활성화
    }
}

// 체크박스 상태가 변경될 때마다 업데이트 함수 호출
e1.addEventListener("change", updateSubmitButton);
e2.addEventListener("change", updateSubmitButton);