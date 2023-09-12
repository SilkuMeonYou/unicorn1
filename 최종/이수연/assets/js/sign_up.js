document.addEventListener('DOMContentLoaded', function () {
    let idInput = document.querySelector('.t2 input[type="text"]');
    let pwInput = document.querySelector('.t2 input[type="password"]');
    let eInput = document.querySelector('.t3 input[type="text"]');
    let numInput = document.querySelector('.t4 input[type="text"]');

    let idMessage = document.getElementById('id1');
    let pwMessage = document.getElementById('pw1');
    let eMessage = document.getElementById('e1');
    let numMessage = document.getElementById('num1');

    let signUp = document.getElementById('.signup-input');

    let pwEvent = document.querySelector('.pw-event');
    let eEvent = document.querySelector('.t3');
    let numEvent = document.querySelector('.num-event');
    let upEvent = document.querySelector('.signup-input');


    // 엔터 키를 누르면 다음 입력 필드로 이동하도록 설정
    idInput.addEventListener('keydown', function (event) {
        if (event.key == 'Enter') {
            event.preventDefault();
            pwInput.focus();
        }
    });

    pwInput.addEventListener('keydown', function (event) {
        if (event.key == 'Enter') {
            event.preventDefault();
            eInput.focus();
        }
    });

    eInput.addEventListener('keydown', function (event) {
        if (event.key == 'Enter') {
            event.preventDefault();
            numInput.focus();
        }
    });

    numInput.addEventListener('keydown', function (event) {
        if (event.key == 'Enter') {
            event.preventDefault();
            classInput.focus();
        }
    });

    pwInput.addEventListener('focus', function () { // 비밀번호 입력 필드를 선택(포커스)했을때
        let input1 = document.querySelector('.id-input')
        if (idInput.value == '') { // 아이디 입력 필드가 빈값이면
            idMessage.style.visibility = 'visible'; // 아이디는 필수입니다 보이게 설정
            input1.style.border = "1px solid red"; // 아이디 입력필드 빨간색 테두리 효과
        } else {
            idMessage.style.visibility = 'hidden'; // 아니면 안보이게 설정
            input1.style.border = "1px solid gray";
        }
    });

    eInput.addEventListener('focus', function () { // 이메일 입력 필드를 선택(포커스)했을때
        let input2 = document.querySelector('.pw-input')
        if (pwInput.value == '') { // 비밀번호 입력 필드가 빈값이면
            pwMessage.style.visibility = 'visible'; // 비밀번호는 필수입니다 보이게 설정
            input2.style.border = "1px solid red";
        } else {
            pwMessage.style.visibility = 'hidden'; // 아니면 안보이게 설정
            input2.style.border = "1px solid gray";
        }
    });

    numInput.addEventListener('focus', function () { // 전화번호 입력 필드를 선택(포커스)했을때
        let input3 = document.querySelector('.e-input')
        if (eInput.value == '') { // 이메일 입력 필드가 빈값이면
            eMessage.style.visibility = 'visible'; // 이메일은 필수입니다 보이게 설정
            input3.style.border = "1px solid red";
        } else {
            eMessage.style.visibility = 'hidden'; // 아니면 안보이게 설정
            input3.style.border = "1px solid gray";
        }
    });

    // 가입하기 버튼 눌렀을때 이벤트
    document.querySelector('.signup-input').addEventListener('focus', function () { // 아이디
        let input1 = document.querySelector(".id-input")
        if (idInput.value == '') {                          // 아이디 입력필드가 빈값이면
            idMessage.style.visibility = 'visible';         // 아이디는 필수입니다 문구가 보이게
            input1.style.border = "1px solid red";          // 빨간색 테두리 표시
        } else {
            idMessage.style.visibility = 'hidden';
            input1.style.border = "1px solid gray";
        }
    });

    idInput.addEventListener('focus', function () { // 아이디 입력 필드를 선택(포커스)했을때
        if (idInput.value !== '') { // 아이디 입력 필드가 빈값이 아니면
            input1.style.visibility = 'hidden'; // 테두리효과 안보이게 설정
        }
    });

    document.querySelector('.signup-input').addEventListener('focus', function () { // 비밀번호
        let input2 = document.querySelector(".pw-input")
        if (pwInput.value == '') {                          // 비밀번호 입력필드가 빈값이면
            pwMessage.style.visibility = 'visible';         // 비밀번호는 필수입니다 문구가 보이게
            input2.style.border = "1px solid red";          // 빨간색 테두리 표시
        } else {                                            // 아니면
            pwMessage.style.visibility = 'hidden';          // 비밀번호 필수입니다 문구가 안보이게
            input2.style.border = "1px solid gray";         // 회색 테두리 표시
        }
    });

    pwInput.addEventListener('focus', function () { // 비밀번호 입력 필드를 선택(포커스)했을때
        if (pwInput.value !== '') { // 비밀번호 입력 필드가 빈값이 아니면
            input2.style.display = 'none'; // 테두리효과 안보이게 설정
        }
    });

    document.querySelector('.signup-input').addEventListener('focus', function () { // 이메일
        let input3 = document.querySelector(".e-input")
        if (eInput.value == '') {
            eMessage.style.visibility = 'visible';
            input3.style.border = "1px solid red";
        } else {
            eMessage.style.visibility = 'hidden';
            input3.style.border = "1px solid gray";
        }
    });

    eInput.addEventListener('focus', function () { // 이메일 입력 필드를 선택(포커스)했을때
        if (eInput.value !== '') { // 이메일 입력 필드가 빈값이 아니면
            input3.style.visibility = 'hidden'; // 테두리효과 안보이게 설정
        }
    });

    document.querySelector('.signup-input').addEventListener('focus', function () { // 핸드폰번호
        let input4 = document.querySelector(".num-input")
        if (numInput.value == '') {
            numMessage.style.visibility = 'visible';
            input4.style.border = "1px solid red";
        } else {
            numMessage.style.visibility = 'hidden';
            input4.style.border = "1px solid gray";
        }
    });

    numInput.addEventListener('focus', function () { // 핸드폰번호 입력 필드를 선택(포커스)했을때
        if (numInput.value !== '') { // 핸드폰번호 입력 필드가 빈값이 아니면
            input4.style.visibility = 'hidden'; // 테두리효과 안보이게 설정
        }
    });

});