// 강의실메뉴 열었다 닫기
document.querySelector("#admin_class").addEventListener("click", function () {
    console.log("click")
    let class1 = document.getElementById("admin_class1");
    let class2 = document.getElementById("admin_class2");
    let class3 =  document.getElementById("admin_class3");
    let class4 = document.getElementById("admin_class4"); 

    let doBlock = class1.style.display == false && class2.style.display == false && class3.style.display == false && class4.style.display == false;

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
