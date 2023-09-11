
let boardStyle = document.getElementById("noticeBoard").style;

// font size
document.querySelector("#textSize").addEventListener("click", function (event) {

    let size = event.target;

    if(size.value == '13') {
        boardStyle.fontSize = '13px';

    }
    else if(size.value == '15') {
        boardStyle.fontSize = '15px';

        
    }else if(size.value == '24') {
        boardStyle.fontSize = '24px';
        
    }else if(size.value == '28') {
        boardStyle.fontSize = '28px';
        
    }
})

// font Bold
document.querySelector("#textWeight").addEventListener("click", function(){
    
    if( boardStyle.fontWeight != 'bold'){
        document.getElementById('textWeight').style.backgroundColor = 'rgb(201, 201, 201)';
        document.getElementById('textWeight').style.borderRadius = '10px';
        boardStyle.fontWeight = 'bold';
    } else {
        document.getElementById('textWeight').style.backgroundColor = 'rgb(243, 243, 243)';
        boardStyle.fontWeight = '100';
    }
    
})

// font color   
document.querySelector("#textColor").addEventListener("input",function(event){

    boardStyle.color = event.target.value;

})

// font underline  
document.querySelector("#textLine").addEventListener("click",function(){
    if(boardStyle.textDecoration != 'underline') {
        document.getElementById('textLine').style.backgroundColor = 'rgb(201, 201, 201)';
        document.getElementById('textLine').style.borderRadius = '10px';
        boardStyle.textDecoration = 'underline';
    } else {
        document.getElementById('textLine').style.backgroundColor = 'rgb(243, 243, 243)';
        boardStyle.textDecoration = '';
    }
 
 })

 // font italic 
document.querySelector("#textItalic").addEventListener("click",function(){
    if(boardStyle.fontStyle != 'italic') {
        document.getElementById('textItalic').style.backgroundColor = 'rgb(201, 201, 201)';
        document.getElementById('textItalic').style.borderRadius = '10px';
        boardStyle.fontStyle = 'italic';
    } else {
        document.getElementById('textItalic').style.backgroundColor = 'rgb(243, 243, 243)';
        boardStyle.fontStyle = '';
    }
 
 })

 // 사진 업로드

 var fileInput = document.getElementById("fileUpload");

 // input 요소의 값(선택한 파일)이 변경될 때 이벤트 리스너를 등록합니다.
 fileInput.addEventListener("change", function() {
     // 선택한 파일을 가져옵니다.
     var selectedFile = fileInput.files[0]; // 여기서는 첫 번째 선택한 파일을 가져옵니다.
 
     if (selectedFile) {
         // 파일 정보 출력 예제
         console.log("파일 이름: " + selectedFile.name);
         console.log("파일 크기: " + selectedFile.size + " 바이트");
         console.log("파일 유형: " + selectedFile.type);
     } else {
         console.log("파일을 선택하지 않았습니다.");
     }
 });

// 글쓰기 버튼

document.querySelector("#finish").addEventListener("click", function () {
    if(confirm("작성을 완료하시겠습니까?")){
        location = '이인혜_class_board.html';
    }
    
})

// 취소 버튼
document.querySelector("#cencle").addEventListener("click", function () {

    if(confirm("취소하시겠습니까? 작성중인 글은 저장되지 않습니다.")){
        location = '이인혜_class_board.html';
    }
})


        // <main head>
        //logo
        var text = document.querySelector(".typing .text");
        var letters = [
            "Human",
        ];
        // 글자 입력 속도
        var speed = 100;
        let i = 0;
        // 타이핑 효과
        var typing = async () => {
            var letter = letters[i].split("");
            while (letter.length) {
                await wait(speed);
                text.innerHTML += letter.shift();
            }
            // 잠시 대기
            await wait(3200);
            // 지우는 효과
            remove();
        }
        // 글자 지우는 효과
        var remove = async () => {
            var letter = letters[i].split("");
            while (letter.length) {
                await wait(speed);
                letter.pop();
                text.innerHTML = letter.join("");
            }

            // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
            i = !letters[i + 1] ? 0 : i + 1;
            typing();
        }

        // 딜레이 기능 ( 마이크로초 )
        function wait(ms) {
            return new Promise(res => setTimeout(res, ms))
        }

        // 초기 실행
        setTimeout(typing, 1000);

        // logo end

        window.addEventListener("load", function () {
            bind();
        })
        function bind() {
            console.log("check")
            for (let i = 1; i < 5; i++) {
                let button = document.querySelector("[name='buttonsub_" + i + "']");
                let category = document.querySelector("#category .category_" + i);

                // 하위버튼 마우스오버 상태에서 마우스 빼도 안 사라지는 것 방지(사라지게)
                button.addEventListener("mouseover", function () {
                    console.log("mouseover");
                    category.style.display = "block";
                });
                button.addEventListener("mouseout", function () {
                    console.log("mouseout");
                    category.style.display = "none";
                });
                // 버튼에서 바로 마우스 빼면 사라짐. 하위버튼으로 마우스오버해도 사라지지 않게
                category.addEventListener("mouseover", function () {
                    console.log("category mouseover");
                    category.style.display = "block";
                });
                category.addEventListener("mouseout", function () {
                    console.log("category mouseout");
                    category.style.display = "none";
                });
            }
        }
        // 버튼 마우스오버 이벤트 끝 

        // 스크롤 이벤트
        window.addEventListener("scroll", function () {
            let head = document.querySelector("#head");
            let category = document.querySelector("#category");
            let button = document.querySelector(".button");

            if (window.scrollY > 10) {
                head.style.transform = "translateY(-80%)";
                category.style.paddingTop = "45px";
            } else {
                head.style.transform = "translateY(0)";
                category.style.paddingTop = "230px";
            }
        });

// <링크>
// 메인
document.querySelector(".logo").addEventListener("click", function () {
    console.log("click")
    window.location.href = "윤여준_main.html";
});

// 만경(좌석)
document.querySelector(".tmp4").addEventListener("click", function () {
    console.log("click")
    window.location.href = "최만경_seat.html"
});
// 인혜(강의실)
document.querySelector(".tmp5").addEventListener("click", function () {
    console.log("click")
    window.location.href = "이인혜_class_board.html"
});
// 여준(맛집)
document.querySelector(".tmp3").addEventListener("click", function () {
    console.log("click")
    window.location.href = "윤여준_place.html"
});
document.querySelector(".tmp2").addEventListener("click", function () {
    console.log("click")
    window.location.href = "이인혜_notice_list.html"
});


        // <main head end>
