let btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", function () {

    btn1.style.backgroundColor = "rgb(23, 34, 44)";
    btn2.style.backgroundColor = "#555";


    let like1 = document.querySelector("#like1");
    like1.style.display = "block";

    let like2 = document.querySelector("#like2");
    like2.style.display = "none";

})


let btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", function () {

    btn1.style.backgroundColor = "#555";
    btn2.style.backgroundColor = "rgb(23, 34, 44)";


    let like1 = document.querySelector("#like1");
    like1.style.display = "none";

    let like2 = document.querySelector("#like2");
    like2.style.display = "block";


})



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


function showConfirmation() {
    let isConfirmed = confirm("삭제하시겠습니까?");

    // 사용자가 확인을 누른 경우에만 삭제 작업을 수행
    if (isConfirmed) {
        alert("삭제되었습니다."); 
    } else {
        alert("취소되었습니다.");
    }
}
