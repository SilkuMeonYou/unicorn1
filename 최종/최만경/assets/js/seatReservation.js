// JavaScript로 현재 날짜를 가져오는 함수
function getCurrentDate() {
    var today = new Date();
    var year = today.getFullYear();
    var month = (today.getMonth() + 1).toString().padStart(2, '0'); // 월은 0부터 시작하므로 1을 더하고 두 자리로 만듭니다.
    var date = today.getDate().toString().padStart(2, '0'); // 일자를 두 자리로 만듭니다.

    return { year: year, month: month, date: date };
}

// 연도 옵션 초기화
function initializeYearOptions() {
    var yearSelect = document.getElementById('yearSelect');
    var currentDate = getCurrentDate();

    // 현재 연도를 기준으로 과거 5년부터 미래 5년까지의 연도 옵션 초기화
    for (var i = currentDate.year - 5; i <= currentDate.year + 5; i++) {
        var option = document.createElement('option');
        option.value = i;
        option.textContent = i + '년'; // "년" 추가
        yearSelect.appendChild(option);
    }
}

// 월별 일자 옵션 초기화
function updateDayOptions() {
    var yearSelect = document.getElementById('yearSelect');
    var monthSelect = document.getElementById('monthSelect');
    var dateSelect = document.getElementById('dateSelect');

    // 선택된 연도와 월 가져오기
    var selectedYear = parseInt(yearSelect.value);
    var selectedMonth = parseInt(monthSelect.value);

    // 해당 월의 일자 옵션 초기화
    dateSelect.innerHTML = ''; // 기존 옵션 삭제

    var maxDays;
    if ([1, 3, 5, 7, 8, 10, 12].includes(selectedMonth)) {
        maxDays = 31;
    } else if ([4, 6, 9, 11].includes(selectedMonth)) {
        maxDays = 30;
    } else {
        // 2월은 윤년을 고려하여 28 또는 29일
        maxDays = (selectedYear % 4 === 0 && (selectedYear % 100 !== 0 || selectedYear % 400 === 0)) ? 29 : 28;
    }

    for (var i = 1; i <= maxDays; i++) {
        var option = document.createElement('option');
        var date = i.toString().padStart(2, '0');
        option.value = date;
        option.textContent = date + '일'; // "일" 추가
        dateSelect.appendChild(option);
    }
}

// 페이지가 로드될 때 초기화
window.onload = function () {
    var yearSelect = document.getElementById('yearSelect');
    var monthSelect = document.getElementById('monthSelect');
    var dateSelect = document.getElementById('dateSelect');

    // 연도 옵션 초기화
    initializeYearOptions();

    // 월 옵션 초기화
    for (var i = 1; i <= 12; i++) {
        var option = document.createElement('option');
        var month = i.toString().padStart(2, '0');
        option.value = month;
        option.textContent = month + '월'; // "월" 추가
        monthSelect.appendChild(option);
    }

    // 현재 날짜 선택
    var currentDate = getCurrentDate();
    yearSelect.value = currentDate.year;
    monthSelect.value = currentDate.month;

    // 일자 옵션 초기화
    updateDayOptions();

    // 현재 일자 선택
    dateSelect.value = currentDate.date;
}



// 좌석 버튼 클릭 시 동작
var seatButtons = document.querySelectorAll('.seat-button');
var seatNum = document.getElementById('seatNum');
var seatNumCheck = document.getElementById('seatNumCheck');
var reserveButton = document.querySelector('input[value="예약하기"]');

// 좌석 버튼 클릭 시 동작
seatButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        var selectedSeat = button.value;
        var buttonColor = window.getComputedStyle(button).color;

        if (buttonColor === 'rgb(255, 0, 0)') {
            alert('이미 예약된 좌석 ' + selectedSeat + '번입니다.');
        } else {
            seatNum.textContent = selectedSeat;

            // 모든 좌석 버튼의 글씨 색상을 검정색으로 초기화
            seatButtons.forEach(function (resetButton) {
                if (window.getComputedStyle(resetButton).color !== 'rgb(255, 0, 0)') {
                    resetButton.style.color = 'black';
                }
            });

            button.style.color = 'blue';
        }
    });
});

// 예약하기 버튼 클릭 시 동작
reserveButton.addEventListener('click', function () {
    var selectedSeat = seatNum.textContent;
    if (selectedSeat !== '00') {
        seatNumCheck.textContent = selectedSeat;
        alert('좌석 ' + selectedSeat + '번이 예약되었습니다.');

        // 선택한 좌석의 글씨 색상을 빨간색으로 변경
        seatButtons.forEach(function (button) {
            if (button.value === selectedSeat) {
                button.style.color = 'red';
            }
        });
    } else {
        alert('좌석을 선택해주세요.');
    }
});

// 선택한 강의실과 사용 시간 업데이트
function updateRoomName() {
    var selectedRoomNumber = document.querySelector('.roomNumber').value;
    var selectedUseTime = document.getElementById('useTimeSelect').value;
    var roomName = selectedRoomNumber + '강의실';

    document.getElementById('roomName').textContent = roomName;
    document.getElementById('roomTime').textContent = selectedUseTime;
}

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
// 스크롤 이벤트
window.addEventListener("scroll", function () {
    let head = document.querySelector("#head");
    let category = document.querySelector("#category");
    let button = document.querySelector(".button");

    if (window.scrollY > 100) {
        head.style.transform = "translateY(-80%)";
        category.style.paddingTop = "45px";
    } else {
        head.style.transform = "translateY(0)";
        category.style.paddingTop = "230px";
    }

});

// link
// 메인
document.querySelector(".img1").addEventListener("click", function () {
    window.location.href = "0906_윤여준_main_home.html";
    let img1 = document.querySelector(".img1")
});