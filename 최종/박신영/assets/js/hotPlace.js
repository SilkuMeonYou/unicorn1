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