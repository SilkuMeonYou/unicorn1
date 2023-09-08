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
    let infoBoxes = document.querySelectorAll(".infoBox");

    // 각 정보 상자를 순회하며 검색어와 일치하는 이름을 가진 엘리먼트만 보여주거나 숨깁니다.
    infoBoxes.forEach((infoBox) => {ㅁ
        let userName = infoBox.querySelector(".userinfo#userName").textContent.toLowerCase(); // userName을 소문자로 변환합니다.

        if (userName.includes(searchKeyword)) {
            infoBox.style.display = "block";
        } else {
            infoBox.style.display = "none";
        }
    });
}