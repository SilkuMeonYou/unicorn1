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

