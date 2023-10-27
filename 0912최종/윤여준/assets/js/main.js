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
document.querySelector("#movehotple").addEventListener("click", function () {
    console.log("click")
    window.location.href = "윤여준_place.html"
});
// document.querySelector(".tmp").addEventListener("click", function () {
//     console.log("click")
//     window.location.href = "이인혜_mypage_main.html"
// });
document.querySelector(".tmp2").addEventListener("click", function () {
    console.log("click")
    window.location.href = "이인혜_notice_list.html"
});


// // 신영
// document.querySelector(".tmp").addEventListener("click", function () {
//     console.log("click")
//     window.location.href = "0906_notice.html"
// });


// // 여준(지도)
// document.querySelector(".tmp3").addEventListener("click", function () {
//     console.log("click")
//     window.location.href = "윤여준_place.html"
// });

// // 인혜
// document.querySelector(".tmp2").addEventListener("click", function () {
//     console.log("click")
//     window.location.href = "0906_yeojun/0907_api_copy4.html"
// });


// <main head end>


document.addEventListener("DOMContentLoaded", function () {
    var imageContainers = document.querySelectorAll(".image-container");

    imageContainers.forEach(function (imageContainer) {
        var topHighlight = imageContainer.querySelector(".top-highlight");
        var bottomHighlight = imageContainer.querySelector(".bottom-highlight");
        var leftHighlight = imageContainer.querySelector(".left-highlight");
        var rightHighlight = imageContainer.querySelector(".right-highlight");

        imageContainer.addEventListener("mouseenter", function () {
            topHighlight.style.width = "100%";
            bottomHighlight.style.width = "100%";
            leftHighlight.style.height = "100%";
            rightHighlight.style.height = "100%";
        });

        imageContainer.addEventListener("mouseleave", function () {
            topHighlight.style.width = "0";
            bottomHighlight.style.width = "0";
            leftHighlight.style.height = "0";
            rightHighlight.style.height = "0";
        });
    });

});


// 특정 스크롤 위치에서 이미지 보이기  (신영)
window.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY;    // 현재 스크롤 위치

    let imgBox = document.querySelector('.imgBox');

    if (scrollPosition > 1100) {
        // imgBox에 클래스 추가
        imgBox.classList.add('animation-active');

        // 배경 색상을 변경하고 부드럽게 전환
        imgBox.style.backgroundColor = 'black';
        imgBox.style.transition = 'background-color 2s ease-in-out';
    } else {
        // imgBox에 클래스 제거
        imgBox.classList.remove('animation-active');

        // 배경 색상을 다시 흰색으로 변경하고 부드럽게 전환
        imgBox.style.backgroundColor = 'white';
        imgBox.style.transition = 'background-color 0.5s ease-in-out';
    }




    if (scrollPosition > 1100 && scrollPosition < 4500) {
        document.getElementById('movehotple').style.display = 'block';
        for (let i = 1; i < 14; i++) {
            document.getElementById('img' + i).style.display = 'block';
        }
    } else {
        document.getElementById('movehotple').style.display = 'none';
        for (let i = 1; i < 14; i++) {
            document.getElementById('img' + i).style.display = 'none';
        }
    }
})


// 스크롤 내리면 이미지 위치 이동 (신영)
window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        const translateXValue1 = scrollPosition * 1 + 'px'; // 스크롤 위치에 따라 이동할 거리를 계산
        const translateXValue2 = scrollPosition * 1.5 + 'px';
        const translateXValue3 = scrollPosition * 2 + 'px';
        img1.style.transform = `translateX(${translateXValue1})`;
        img2.style.transform = `translateX(${translateXValue2})`;
        img3.style.transform = `translateX(${translateXValue3})`;
        img4.style.transform = `translateX(${translateXValue3})`;
        img5.style.transform = `translateX(${translateXValue1})`;
        img6.style.transform = `translateX(${translateXValue2})`;
        img7.style.transform = `translateX(${translateXValue2})`;
        img8.style.transform = `translateX(${translateXValue1})`;
        img9.style.transform = `translateX(${translateXValue2})`;
        img10.style.transform = `translateX(${translateXValue1})`;
        img11.style.transform = `translateX(${translateXValue3})`;
        img12.style.transform = `translateX(${translateXValue1})`;
        img13.style.transform = `translateX(${translateXValue2})`;


    } else {
        const translateXValue1 = scrollPosition * 1 + 'px';
        const translateXValue2 = scrollPosition * 1.5 + 'px';
        const translateXValue3 = scrollPosition * 2 + 'px';
        img1.style.transform = `translateX(${translateXValue1})`;
        img2.style.transform = `translateX(${translateXValue2})`;
        img3.style.transform = `translateX(${translateXValue3})`;
        img4.style.transform = `translateX(${translateXValue3})`;
        img5.style.transform = `translateX(${translateXValue1})`;
        img6.style.transform = `translateX(${translateXValue2})`;
        img7.style.transform = `translateX(${translateXValue2})`;
        img8.style.transform = `translateX(${translateXValue1})`;
        img9.style.transform = `translateX(${translateXValue2})`;
        img10.style.transform = `translateX(${translateXValue1})`;
        img11.style.transform = `translateX(${translateXValue3})`;
        img12.style.transform = `translateX(${translateXValue1})`;
        img13.style.transform = `translateX(${translateXValue2})`;
    }

})

document.querySelector("#movehotple").addEventListener("mouseover", function () {
    for (let i = 1; i < 14; i++) {
        document.getElementById('img' + i).style.filter = 'blur(10px)';
        document.getElementById('img' + i).style.transition = '1s';
    }
})
document.querySelector("#movehotple").addEventListener("mouseout", function () {
    for (let i = 1; i < 14; i++) {
        document.getElementById('img' + i).style.filter = '';
    }
})