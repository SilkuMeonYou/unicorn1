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




// 페이지 버튼 

for (let i = 0; i < 5; i++) {
    let pagedom = document.querySelectorAll(".pageNum");
    pagedom[i].addEventListener("click", function (event) {
        let j = i + 1;
        if (event.target == pagedom[i]) {
            document.getElementById("pageNum" + 1).style.backgroundColor = 'rgb(243, 243, 243)';
            document.getElementById("pageNum" + 1).style.color = '#000000';
            document.getElementById("pageNum" + 2).style.backgroundColor = '';
            document.getElementById("pageNum" + 2).style.color = '#000000';
            document.getElementById("pageNum" + 3).style.backgroundColor = '';
            document.getElementById("pageNum" + 3).style.color = '#000000';
            document.getElementById("pageNum" + 4).style.backgroundColor = '';
            document.getElementById("pageNum" + 4).style.color = '#000000';
            document.getElementById("pageNum" + 5).style.backgroundColor = '';
            document.getElementById("pageNum" + 5).style.color = '#000000';

            document.getElementById("pageNum" + j).style.backgroundColor = 'rgb(34, 50, 65)';
            document.getElementById("pageNum" + j).style.color = '#ffffff';
        }

    })
}



    let like = document.querySelectorAll(".like img");
    // let isliked = false;
    let islikedArr = new Array(like.length).fill(false);
    for(let i=0; i<like.length; i++){
    like[i].addEventListener("click", function () {
        console.log("click check")

        if (islikedArr[i]) {
            let img = this;
            this.src = "https://ifh.cc/g/zPXGj2.png";
            toast("즐겨찾기를 해제했습니다")
        }
        else {
            this.src = "https://ifh.cc/g/NJJBzw.png";
            toast("즐겨찾기에 추가했습니다")
        }
        // isliked = !isliked;
        islikedArr[i] = !islikedArr[i];
    });
}

// 토스트 팝업
function toast(string) {
    let toast = document.getElementById("toast");

    toast.classList.contains("reveal") ?
        (clearTimeout(removeToast), removeToast = setTimeout(function () {
            document.getElementById("toast").classList.remove("reveal")
        }, 1000)) :
        removeToast = setTimeout(function () {
            document.getElementById("toast").classList.remove("reveal")
        }, 1000)
    toast.classList.add("reveal"),
        toast.innerText = string

}