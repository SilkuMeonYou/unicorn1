// 강의실메뉴 열었다 닫기
document.querySelector("#admin_class").addEventListener("click", function () {

    let class1 = document.getElementById("admin_class1");
    let class2 = document.getElementById("admin_class2");
    let class3 = document.getElementById("admin_class3");
    let class4 = document.getElementById("admin_class4");

    let doBlock = class1.style.display == false && class2.style.display == false && class3.style.display == false && class4.style.display == false;
    console.log(doBlock)
    if (doBlock) {
        class1.style.display = 'block';
        class2.style.display = 'block';
        class3.style.display = 'block';
        class4.style.display = 'block';
    } else if (doBlock == false) {
        class1.style.display = '';
        class2.style.display = '';
        class3.style.display = '';
        class4.style.display = '';
    }
})



// 맛집 추가
let addHotple = document.querySelector('.addHotple');

addHotple.addEventListener("click", function () {
    console.log("click")
    let foodboxWrap = document.querySelector('.foodboxWrap');

    let foodboxHtml = "";

    foodboxHtml += "<div class='foodimg'></div>";
    foodboxHtml += "<div class='foodTitle'>제목을 입력해주세요</div>";
    foodboxHtml += "<div class='foodAddress'>주소를 입력해주세요</div>";
    foodboxHtml += "<div class='foodDetails'>상세정보를 입력해주세요</div>";
    foodboxHtml += "<input type='file' class='imgfileButton'>";
    foodboxHtml += "<div class='reviseButton'>수정</div>";
    foodboxHtml += "<div class='delButton'>삭제</div>";

    foodboxHtml += "<input type='text' class='input_foodTitle' placeholder='제목 입력'>";
    foodboxHtml += "<input type='text' class='input_foodAddress' placeholder='주소 입력'>";
    foodboxHtml += "<textarea placeholder='상세정보입력' class='input_foodDetails'></textarea>";
    foodboxHtml += "<div class='finishButton>확인</div>";
    foodboxHtml += "<div class='cencleButton>취소</div>";

    let html = document.createElement('div');
    html.setAttribute("class", "foodBox");
    html.innerHTML = foodboxHtml;
    foodboxWrap.append(html);

})

// foodBox dom All 변수선언
let input_foodTitleAll = document.querySelectorAll('.input_foodTitle');
let input_foodAddressAll = document.querySelectorAll('.input_foodAddress');
let input_foodDetailsAll = document.querySelectorAll('.input_foodDetails');
let finishButtonAll = document.querySelectorAll('.finishButton');
let reviseButtonAll = document.querySelectorAll('.reviseButton');
let cencleButtonAll = document.querySelectorAll('.cencleButton');
let delButtonAll = document.querySelectorAll('.delButton');

let foodTitleAll = document.querySelectorAll('.foodTitle');
let foodAddressAll = document.querySelectorAll('.foodAddress');
let foodDetailsAll = document.querySelectorAll('.foodDetails');



// 전체 수정버튼 수만큼 반복
for (let i = 0; i < reviseButtonAll.length; i++) {

    // foodBox 수정버튼 클릭
    reviseButtonAll[i].addEventListener("click", function () {
        console.log("click")
        input_foodTitleAll[i].style.visibility = 'visible';
        input_foodAddressAll[i].style.visibility = 'visible';
        input_foodDetailsAll[i].style.visibility = 'visible';
        finishButtonAll[i].style.visibility = 'visible';
        reviseButtonAll[i].style.visibility = 'hidden';
        cencleButtonAll[i].style.visibility = 'visible';
    })


    // foodBox 수정버튼 클릭 후 확인 버튼 
    finishButtonAll[i].addEventListener("click", function () {
        if (confirm("수정하시겠습니까?")) {
            input_foodTitleAll[i].style.visibility = 'hidden';
            input_foodAddressAll[i].style.visibility = 'hidden';
            input_foodDetailsAll[i].style.visibility = 'hidden';
            finishButtonAll[i].style.visibility = 'hidden';
            reviseButtonAll[i].style.visibility = 'visible';
            cencleButtonAll[i].style.visibility = 'hidden';

            foodTitleAll[i].innerHTML = input_foodTitleAll[i].value;
            foodAddressAll[i].innerHTML = input_foodAddressAll[i].value;
            foodDetailsAll[i].innerHTML = input_foodDetailsAll[i].value;
        }
    })

    // foodBox 수정버튼 클릭 후 취소 버튼
    cencleButtonAll[i].addEventListener("click", function () {

        if(confirm("수정을 취소하시겠습니까?")){
            input_foodTitleAll[i].style.visibility = 'hidden';
            input_foodAddressAll[i].style.visibility = 'hidden';
            input_foodDetailsAll[i].style.visibility = 'hidden';
            finishButtonAll[i].style.visibility = 'hidden';
            reviseButtonAll[i].style.visibility = 'visible';
            cencleButtonAll[i].style.visibility = 'hidden';
        }

    })


    // foodBox 삭제 버튼 
    delButtonAll[i].addEventListener("click", function () {
        if (confirm("삭제하시겠습니까?")) {
            delButtonAll[i].parentNode.remove();
        }
    })

}


// 검색기능
// HTML에서 검색 버튼과 검색 입력 필드를 가져옵니다.
let searchButton = document.querySelector(".searchButton");
let searchInput = document.querySelector(".search");

// 검색 버튼에 클릭 이벤트 리스너를 추가합니다.
searchButton.addEventListener("click", function () {
    filterUserInfo();
});

// 검색 입력 필드에서 Enter 키를 눌렀을 때도 검색하도록 합니다.
searchInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        filterUserInfo();
    }
});

// 사용자 정보를 필터링하고 보여줄 함수를 정의합니다.
function filterUserInfo() {
    // 검색어를 입력 필드에서 가져옵니다.
    let searchKeyword = searchInput.value.toLowerCase(); // 입력된 검색어를 소문자로 변환합니다.

    // 모든 정보 상자(infoBox) 엘리먼트를 가져옵니다.
    let foodBoxes = document.querySelectorAll(".foodBox");

    // 각 정보 상자를 순회하며 검색어와 일치하는 이름을 가진 엘리먼트만 보여주거나 숨깁니다.
    foodBoxes.forEach((foodBox) => {
        let foodtitle = foodBox.querySelector(".foodTitle").textContent.toLowerCase(); // userName을 소문자로 변환합니다.

        if (foodtitle.includes(searchKeyword)) {
            console.log("ok")
            foodBox.style.display = "block";
            foodBox.style.padding = '10px';
            
        } else {
            foodBox.style.display = "none";
        }
    });
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