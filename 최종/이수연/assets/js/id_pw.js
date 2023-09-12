window.addEventListener("load", function () {
    search()
})

function search() {
    let mail = document.querySelector(".mail1");        // 메일입력필드를 쿼리셀렉터로 불러오기
    let button = document.querySelector(".button");     // 아이디찾기 버튼 쿼리셀렉터로 불러오기

    button.addEventListener("click", function () {      // 버튼 클릭했을때
        if (mail.value == '') {                         // 메일 입력필드가 빈값이면
            alert("이메일을 입력해주세요 !");             // 경고창
        }
    });

    let id = document.querySelector(".id1");            // 아이디 입력필드를 쿼리셀렉터로 불러오기
    let button1 = document.querySelector(".button1");   // 비밀번호찾기 버튼 쿼리셀렉터로 불러오기
    button1.addEventListener("click", function () {     // 버튼 클릭했을때
        if (id.value == '') {                           // 아이디 입력필드가 빈값이면
            alert("아이디를 입력해주세요 !");             // 경고창
        }
    });

    // 이메일 값을 정해놓고 이메일 값을 입력했을때 값이 일치하면 입력창 사라지고 아이디 값 뜨게
    // 비밀번호도 마찬가지로
    var mailvalue = "human123@naver.com"; // 이메일값 지정
    var idvalue = "human123"              // 비밀번호값 지정

    let idid = document.querySelector(".idid"); // 아이디찾기 입력필드를 쿼리셀렉터로 불러오기
    let pwpw = document.querySelector(".pwpw"); // 비밀번호찾기 입력필드를 쿼리셀렉터로 불러오기
    let success = document.querySelector(".success"); // 아이디 문구 쿼리셀렉터로 불러오기
    let success1 = document.querySelector(".success1"); // 아이디 문구 쿼리셀렉터로 불러오기


    button.addEventListener("click", function () {    // 아이디찾기 버튼을 클릭했을때

        if (mailvalue == mail.value) {               // 이메일값이 입력한 값과 같으면

            idid.querySelector(".mail1").style.display = "none"    // 입력필드랑
            idid.querySelector(".button").style.display = "none"    // 아이디 찾기버튼이 안보이게하고

            success.style.display = "block";                // 문구가 보이게
        }
    });

    button1.addEventListener("click", function () {   // 비밀번호찾기 버튼을 클릭했을때
        console.log("click")
        if (idvalue == id.value) {                    // 아이디값이 입력한 값과 같으면

            pwpw.querySelector(".id1").style.display = "none"       // 입력필드랑
            pwpw.querySelector(".button1").style.display = "none"   // 비밀번호 찾기버튼이 안보이게하고

            success1.style.display = "block";        // 문구가 보이게
        }
    });
}