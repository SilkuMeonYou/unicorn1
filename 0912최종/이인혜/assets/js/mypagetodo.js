  // + 버튼 누르면 내용에 추가
  let title_btn = document.querySelector("#title_btn");
  let title_btnv = document.querySelector("#title_btnv");
  let view = document.querySelector("#view");

  title_btn.addEventListener("click", function () {
      let text = document.querySelector("#text");
      let value = text.value;

      if (value.trim() !== "") { // 빈 문자열이 아닌 경우에만 추가
          let view2 = document.createElement("div");

          let del = "<input type='button' class='del' value='X'>";
          let check = "<input type='checkbox' class='check'>";
          view2.innerHTML = check + " " + "<span>" + value + "</span>" + " " + del;

          view.prepend(view2);
          text.value = ""; // 입력 필드를 비웁니다.
      }
  });

//   let done = document.querySelector(".check");

  // v 버튼 누르면 체크된 체크박스의 부모 요소인 div에 줄 긋기 또는 제거하기
  title_btnv.addEventListener("click", function () {
      let checkboxes = document.querySelectorAll(".check");
      checkboxes.forEach(function (checkbox) {
          let listItem = checkbox.parentElement;
          let textElement = listItem.querySelector("span");

          if (checkbox.checked) {
              if (textElement) {
                  if (textElement.style.textDecoration === "line-through") {
                      textElement.style.textDecoration = "none"; // 줄 제거
                  } else {
                      textElement.style.textDecoration = "line-through"; // 줄 긋기
                  }
                  checkbox.checked = false; // 체크박스 해제
              }
          }
      });
  });

  // X 버튼 클릭 시 항목 삭제

  view.addEventListener("click", function (event) {
      if (event.target.classList.contains("del")) {
          let listItem = event.target.parentElement;
          listItem.remove();
      }
  });



let info = document.querySelector("#tab_info");
info.addEventListener("click", function () {

    info.style.backgroundColor = "rgba(255, 255, 255, 0.301)";
    calendar.style.backgroundColor = "rgb(34, 50, 65)";
    like.style.backgroundColor = "rgb(34, 50, 65)";
    todo.style.backgroundColor = "rgb(34, 50, 65)";
})

let calendar = document.querySelector("#tab_calendar");
calendar.addEventListener("click", function () {

    info.style.backgroundColor = "rgb(34, 50, 65)";
    calendar.style.backgroundColor = "rgba(255, 255, 255, 0.301)";
    like.style.backgroundColor = "rgb(34, 50, 65)";
    todo.style.backgroundColor = "rgb(34, 50, 65)";
})

let like = document.querySelector("#tab_like");
like.addEventListener("click", function () {

    info.style.backgroundColor = "rgb(34, 50, 65)";
    calendar.style.backgroundColor = "rgb(34, 50, 65)";
    like.style.backgroundColor = "rgba(255, 255, 255, 0.301)";
    todo.style.backgroundColor = "rgb(34, 50, 65)";
})

let todo = document.querySelector("#tab_todo");
todo.addEventListener("click", function () {

    info.style.backgroundColor = "rgb(34, 50, 65)";
    calendar.style.backgroundColor = "rgb(34, 50, 65)";
    like.style.backgroundColor = "rgb(34, 50, 65)";
    todo.style.backgroundColor = "rgba(255, 255, 255, 0.301)";
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