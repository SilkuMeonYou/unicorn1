<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>비밀번호 재설정</title>
    <!-- bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
        crossorigin="anonymous"></script>
    <!-- font -->
    <link rel="stylesheet" type="text/css"
        href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css" />

    <style>
        /* div { border: 1px solid orange; } */

        /* common */
        body {
            font-family: pretendard;
        }

        /* ul, ol, dl, li { list-style: none; } */
        /* a { text-decoration: none; color: none; color: #000; } */
        /* common end */
        /* a:hover, a:active, a:focus { text-decoration: none; } */
        @font-face {
            font-family: 'ImcreSoojin';
            src:
                url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.3/ImcreSoojin.woff') format('woff');
            font-weight: normal;
            font-style: normal;
        }

        body {
            font-family: pretendard;
        }

        /* div {
            border: 1px solid red;
        } */

        #div1 {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            /* min-height: 100dvh; */
            text-align: center;
            margin-top: 50px;
        }

        h3 {
            margin: 30px;
        }

        input[type=password] {
            width: 300px;
            height: 40px;
            border: 1px solid gray;
            border-radius: 5px;
            /* margin: 20px; */
        }

        .success {
            display: none;
            display: flex;
            justify-content: center;
        }

        input[type=submit] {
            width: 250px;
            height: 35px;
            margin: 10px;
            margin-top: 20px;
            background-color: #d8c69c;
            color: white;
            font-size: medium;
            font-weight: bold
        }

        .login {
            padding: 20px;
            margin: 50px;
            display: flex;
            justify-content: center;
        }
        
        .pwpw {
            margin: 60px;
        }

        .button {
            background-color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 14px;
        }

        .div2 {
            margin-top: 50px;
            margin-bottom: 10px;
            margin-left: 10px;
            text-align: left;
        }

        .span {
            font-size: 20px;
            /* color: #d0ac88; */
        }

        hr {
            border: 2px solid #d0ac88;
        }

        a {
            color: black;
            text-decoration-line: none;
        }
    </style>
</head>



<script>
    window.addEventListener("load", function () {
        search()
    })

    function search() {
        let name = document.querySelector(".name"); // 아이디찾기 이름입력필드를 쿼리셀렉터로 불러오기
        let email = document.querySelector(".email"); // 메일입력필드를 쿼리셀렉터로 불러오기
        let button = document.querySelector(".button"); // 설정 버튼 쿼리셀렉터로 불러오기

        let pw1 = document.querySelector(".pw1");
        let pw2 = document.querySelector(".pw2");
        let success = document.querySelector(".success"); // 재설정 문구 쿼리셀렉터로 불러오기

        button.addEventListener("click", function () { // 설정 버튼을 클릭했을때

            if (mailvalue == mail.value && namevalue == name1.value) { // 이메일값이 입력한 값과 이름값이 입력한 값이 같으면

                idid.querySelector(".name1").style.display = "none" // 이름입력필드,
                idid.querySelector(".mail1").style.display = "none" // 이메일 입력필드,
                bt1.querySelector(".button").style.display = "none" // 아이디 찾기버튼이 안보이게하고

                success.style.display = "block"; // 문구가 보이게
            }
        });

        // var error5 = "${error5}";
        // if (error5 !== "") {
        //     alert(error5);
        // }

        // var id = "${id}";
        // if (id !== "") {
        //     alert(id);
        // }
    }
</script>

<body>
    <h3>
        <a href="index.jsp" style="font-family: 'ImcreSoojin';"> Noop Noop
        </a>
    </h3>
    <form method="post" action="reset">
        <div id="div1">
            <div class="pw-reset">
                <div class="div2">
                    <span class="span">비밀번호 재설정</span>
                </div>
                <hr>
                <div class="pwpw">
                    <input type="password" class="pw1" name="name" placeholder="비밀번호 입력">
                </div>
                <div class="pwpw">
                    <input type="password" class="pw2" name="email" placeholder="비밀번호 확인">
                </div>
            </div>
                <div class="success">
<!--                     비밀번호 재설정을 완료했습니다 -->
                </div>
                <div class="bt">
                    <input type="submit" class="button" value="설정">
                </div>
    </form>
    <div class="login">
        <a href="login">로그인하기</a>
    </div>
    </div>
</body>

</html>