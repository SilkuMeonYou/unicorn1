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


for (let i = 1; i <= 10; i++) {
    let like = document.querySelector(".like img");
    let isliked = false;
    like.addEventListener("click", function () {
        console.log("click check")

        if (isliked) {
            let img = this;
            this.src = "https://ifh.cc/g/zPXGj2.png";
            toast("즐겨찾기를 해제했습니다")
        }
        else {
            this.src = "https://ifh.cc/g/NJJBzw.png";
            toast("즐겨찾기에 추가했습니다")
        }
        isliked = !isliked;
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