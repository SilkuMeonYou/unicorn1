// 강의실메뉴 열었다 닫기
document.querySelector("#admin_class").addEventListener("click", function () {
 
    let class1 = document.getElementById("admin_class1");
    let class2 = document.getElementById("admin_class2");
    let class3 =  document.getElementById("admin_class3");
    let class4 = document.getElementById("admin_class4"); 

    let doBlock = class1.style.display == false && class2.style.display == false && class3.style.display == false && class4.style.display == false;
    console.log(doBlock)
    if(doBlock) {
        class1.style.display = 'block';
        class2.style.display = 'block';
        class3.style.display = 'block';
        class4.style.display = 'block';
    } else if(doBlock == false) {
        class1.style.display = '';
        class2.style.display = '';
        class3.style.display = '';
        class4.style.display = '';
    }
})

// 페이지 버튼 

for(let i = 0; i < 5; i++){
    let pagedom = document.querySelectorAll(".pageNum");
    pagedom[i].addEventListener("click",function(event){
        let j = i +1;
           if(event.target == pagedom[i]){
            document.getElementById("pageNum"+1).style.backgroundColor='rgb(243, 243, 243)';    
            document.getElementById("pageNum"+1).style.color='#000000';
            document.getElementById("pageNum"+2).style.backgroundColor='';    
            document.getElementById("pageNum"+2).style.color='#000000';
            document.getElementById("pageNum"+3).style.backgroundColor='';    
            document.getElementById("pageNum"+3).style.color='#000000';
            document.getElementById("pageNum"+4).style.backgroundColor='';    
            document.getElementById("pageNum"+4).style.color='#000000';
            document.getElementById("pageNum"+5).style.backgroundColor='';    
            document.getElementById("pageNum"+5).style.color='#000000';

            document.getElementById("pageNum"+j).style.backgroundColor='rgb(34, 50, 65)';    
            document.getElementById("pageNum"+j).style.color='#ffffff';  
           } 
            
    })
}

// select 요소와 input 요소에 대한 참조 가져오기
        var selectElement = document.getElementById("seat_select");
        var inputElement = document.getElementById("seat_input");


        // select 요소에 이벤트 리스너 추가하기
        selectElement.addEventListener("change", function () {
            // 선택된 옵션 텍스트 가져오기
            var selectedOptionText = selectElement.options[selectElement.selectedIndex].text;

            // 선택된 옵션 텍스트가 "강의실 선택"이 아닌 경우
            if (selectedOptionText !== "강의실 선택") {
                // input 요소의 값을 20으로 설정하기
                inputElement.value = "20";
            } else {
                // "강의실 선택" 옵션이 선택된 경우, input 요소의 값을 0으로 설정하기
                inputElement.value = "0";
            }
        });
        var plusButton = document.getElementById("plus");
        var minusButton = document.getElementById("minus");

        // 더하기(+) 버튼과 빼기(-) 버튼 초기 상태: 비활성화
        plusButton.disabled = true;
        minusButton.disabled = true;

        // select 요소에 이벤트 리스너 추가
        selectElement.addEventListener("change", function () {
            var selectedOptionText = selectElement.options[selectElement.selectedIndex].text;

            // "강의실 선택" 이외의 옵션을 선택하면 버튼 활성화, 그렇지 않으면 비활성화
            if (selectedOptionText !== "강의실 선택") {
                plusButton.disabled = false;
                minusButton.disabled = false;
            } else {
                plusButton.disabled = true;
                minusButton.disabled = true;
                inputElement.value = "0"; // "강의실 선택"일 때 값 0으로 초기화
            }
        });

        // 더하기(+) 버튼 클릭 이벤트 리스너 추가
        plusButton.addEventListener("click", function () {
            var currentValue = parseInt(inputElement.value);
            if (currentValue < 30) {
                inputElement.value = (currentValue + 1).toString();
            } else {
                alert("최대 좌석은 30석 입니다.");
            }
        });

        // 빼기(-) 버튼 클릭 이벤트 리스너 추가
        minusButton.addEventListener("click", function () {
            var currentValue = parseInt(inputElement.value);
            if (currentValue > 10) {
                inputElement.value = (currentValue - 1).toString();
            } else {
                alert("최소 좌석은 10석 입니다.");
            }
        });

        // seat_input의 값이 변경될 때 이벤트 리스너 추가
        inputElement.addEventListener("change", function () {
            var currentValue = parseInt(inputElement.value);
            if (currentValue > 30) {
                alert("최대 좌석은 30석 입니다.");
                inputElement.value = "30"; // 값이 30을 초과하면 30으로 설정
            } else if (currentValue < 10) {
                alert("최소 좌석은 10석 입니다.");
                inputElement.value = "10"; // 값이 10 미만이면 10으로 설정
            }
        });





        var selectedRoom = ''; // 현재 선택된 강의실 이름
        var selectedSeats = 0; // 현재 선택된 강의실의 좌석 수
        var correctionButton = document.getElementById("correction");


        // select 요소에 이벤트 리스너 추가하기
        selectElement.addEventListener("change", function () {
            // 선택된 옵션 텍스트 가져오기
            var selectedOptionText = selectElement.options[selectElement.selectedIndex].text;

            // 선택된 옵션 텍스트가 "강의실 선택"이 아닌 경우
            if (selectedOptionText !== "강의실 선택") {
                // input 요소의 값을 20으로 설정하기
                inputElement.value = "20";
            } else {
                // "강의실 선택" 옵션이 선택된 경우, input 요소의 값을 0으로 설정하기
                inputElement.value = "0";
            }
        });
        // 각 강의실에 대한 정보를 객체로 저장
        var classrooms = {
            "1강의실": { seats: 20 },
            "2강의실": { seats: 20 },
            "3강의실": { seats: 20 },
            "4강의실": { seats: 20 }
        };

        // "수정" 버튼 클릭 이벤트 리스너
        correctionButton.addEventListener("click", function () {
            var selectedOptionText = selectElement.options[selectElement.selectedIndex].text;
            var inputValue = parseInt(inputElement.value);

            if (selectedOptionText !== "강의실 선택" && inputValue >= 0) {
                // 선택된 강의실 정보 업데이트
                classrooms[selectedOptionText].seats = inputValue;

                // 알림으로 수정된 좌석 수 표시
                alert(selectedOptionText + " 강의실의 좌석이 " + inputValue + "개로 수정되었습니다.");
            }
        });

        // 선택된 강의실이 변경될 때 select 요소에 이벤트 리스너 추가
        selectElement.addEventListener("change", function () {
            var selectedOptionText = selectElement.options[selectElement.selectedIndex].text;

            if (selectedOptionText !== "강의실 선택") {
                // 선택된 강의실의 좌석 수를 입력 필드에 표시
                inputElement.value = classrooms[selectedOptionText].seats;
            } else {
                inputElement.value = "0";
            }
        });

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

            if (window.scrollY > 50) {
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
    document.querySelector(".tmp").addEventListener("click", function () {
        console.log("click")
        window.location.href = "이인혜_mypage_main.html"
    });
    document.querySelector(".tmp2").addEventListener("click", function () {
        console.log("click")
        window.location.href = "이인혜_notice_list.html"
    });