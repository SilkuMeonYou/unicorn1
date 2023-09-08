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





let boardStyle = document.getElementById("noticeBoard").style;

// font size
document.querySelector("#textSize").addEventListener("click", function (event) {

    let size = event.target;

    if(size.value == '13') {
        boardStyle.fontSize = '13px';

    }
    else if(size.value == '15') {
        boardStyle.fontSize = '15px';

        
    }else if(size.value == '24') {
        boardStyle.fontSize = '24px';
        
    }else if(size.value == '28') {
        boardStyle.fontSize = '28px';
        
    }
})

// font Bold
document.querySelector("#textWeight").addEventListener("click", function(){
    
    if( boardStyle.fontWeight != 'bold'){
        document.getElementById('textWeight').style.backgroundColor = 'rgb(201, 201, 201)';
        document.getElementById('textWeight').style.borderRadius = '10px';
        boardStyle.fontWeight = 'bold';
    } else {
        document.getElementById('textWeight').style.backgroundColor = 'rgb(243, 243, 243)';
        boardStyle.fontWeight = '100';
    }
    
})

// font color   
document.querySelector("#textColor").addEventListener("input",function(event){

    boardStyle.color = event.target.value;

})

// font underline  
document.querySelector("#textLine").addEventListener("click",function(){
    if(boardStyle.textDecoration != 'underline') {
        document.getElementById('textLine').style.backgroundColor = 'rgb(201, 201, 201)';
        document.getElementById('textLine').style.borderRadius = '10px';
        boardStyle.textDecoration = 'underline';
    } else {
        document.getElementById('textLine').style.backgroundColor = 'rgb(243, 243, 243)';
        boardStyle.textDecoration = '';
    }
 
 })

 // font italic 
document.querySelector("#textItalic").addEventListener("click",function(){
    if(boardStyle.fontStyle != 'italic') {
        document.getElementById('textItalic').style.backgroundColor = 'rgb(201, 201, 201)';
        document.getElementById('textItalic').style.borderRadius = '10px';
        boardStyle.fontStyle = 'italic';
    } else {
        document.getElementById('textItalic').style.backgroundColor = 'rgb(243, 243, 243)';
        boardStyle.fontStyle = '';
    }
 
 })

 // 사진 업로드

 var fileInput = document.getElementById("fileUpload");

 // input 요소의 값(선택한 파일)이 변경될 때 이벤트 리스너를 등록합니다.
 fileInput.addEventListener("change", function() {
     // 선택한 파일을 가져옵니다.
     var selectedFile = fileInput.files[0]; // 여기서는 첫 번째 선택한 파일을 가져옵니다.
 
     if (selectedFile) {
         // 파일 정보 출력 예제
         console.log("파일 이름: " + selectedFile.name);
         console.log("파일 크기: " + selectedFile.size + " 바이트");
         console.log("파일 유형: " + selectedFile.type);
     } else {
         console.log("파일을 선택하지 않았습니다.");
     }
 });

// 수정하기 버튼

document.querySelector("#finish").addEventListener("click", function () {
    if(confirm("수정을 완료하시겠습니까?")){
        location = '/Unicorn/administrator.html';
    }
    
})

// 취소 버튼
document.querySelector("#cencle").addEventListener("click", function () {

    if(confirm("취소하시겠습니까? 작성중인 글은 저장되지 않습니다.")){
        location = '/Unicorn/administrator.html';
    }
})