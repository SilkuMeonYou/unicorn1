// JavaScript 코드로 댓글 추가를 처리합니다.
document.getElementById("addCommentButton").addEventListener("click", function () {
    var commentInput = document.getElementById("commentInput").value; // 입력된 댓글 가져오기
    var commentDisplay = document.getElementById("commentDisplay"); // 댓글 표시 영역 가져오기

    // 새로운 div 엘리먼트 생성
    var newCommentDiv = document.createElement("div");
    newCommentDiv.classList.add("commentDiv"); // 주황색 보더 스타일 클래스 추가

    // 새로운 div에 입력된 댓글 추가
    var newComment = document.createElement("p");
    newComment.textContent = commentInput;
    newCommentDiv.appendChild(newComment);

    // 답글 입력 필드 생성
    var replyInput = document.createElement("input");
    replyInput.classList.add("replyInput");
    replyInput.type = "text";
    replyInput.placeholder = "답글을 입력하세요.";
    newCommentDiv.appendChild(replyInput);

    // "답글쓰기" 버튼 생성
    var replyButton = document.createElement("button");
    replyButton.classList.add("replyButton");
    replyButton.textContent = "답글쓰기";
    newCommentDiv.appendChild(replyButton);

    // 답글쓰기 버튼 클릭 이벤트 처리
    replyButton.addEventListener("click", function () {
        var replyText = replyInput.value;
        if (replyText) {
            var replyDiv = document.createElement("div");
            replyDiv.textContent = replyText;
            newCommentDiv.appendChild(replyDiv);
            replyInput.value = ""; // 입력 필드 초기화
        }
    });

    // 새로운 div를 댓글 표시 영역에 추가
    commentDisplay.appendChild(newCommentDiv);

    // 입력 필드 초기화
    document.getElementById("commentInput").value = "";
});