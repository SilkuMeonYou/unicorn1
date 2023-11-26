<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>

<%@ page import="java.util.*"%>

<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>index</title>
<!-- bootstrap -->
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
	rel="stylesheet"
	integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
	crossorigin="anonymous">
<script
	src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
	integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
	crossorigin="anonymous"></script>
<!-- font -->
<link rel="stylesheet" type="text/css"
	href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css" />
<script src="https://code.jquery.com/jquery-3.7.0.js"></script>
<style>
/* div { border: 1px solid orange; } */

/* common */
body { font-family: pretendard; }
ul, ol, dl, li { list-style: none; }
a { text-decoration: none; color: none; color: #000; }
/* common end */
a:hover, a:active, a:focus { text-decoration: none; }

@font-face {
  font-family: 'ImcreSoojin';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.3/ImcreSoojin.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

/* =========================
  botton tabs
  ========================= */
.sectionbody .nav-link { width: 278px; text-align: center; }

.returninfo { list-style: disc; }

.table.table td { text-align: left; font-size: 13px; }

/* =========================
  review tabs
  ========================= */
.table.table td { text-align: left;	font-size: 13px; }

.reviewcontainer { display: flex; }

.reviewbutton, .deletebutton { text-align: right; justify-content: flex-end; margin-right: 10px; margin-bottom: 50px; }

.reviewcontainer .content-container { display: flex; flex-wrap: wrap; width: 750px; font-size: 13px; }

.reviewcontainer .score { width: 10%; height: 30px; padding-left: 5px; }

.reviewcontainer .scorevalue { width: 90%; height: 30px; font-weight: 1000; font-size: 14px; padding-left: 5px; }

.reviewcontainer .id, .date, .report { height: 30px; margin-right: 10px; }

.reviewcontainer .reviewcontent { width: 100%; height: 100px; padding-left: 5px; margin-top: 10px; }

.reviewcontainer .id, .date, .report, .product, .productname,
	.productsize, .productcolor { color: #a0a0a0; padding-left: 5px; }

.reviewcontainer .reviewcontent { overflow: hidden; }

.reviewcontainer .reviewphoto { display: none; }

.reviewcontainer .recommend { width: 15%; text-align: center; display: flex; justify-content: center; align-items: center; }

.recommend .btn { border-radius: 10px; }

.reviewcontainer .photo { width: 150px; text-align: center; display: flex; justify-content: center; align-items: center; }

/* 툴팁 */
.custom-tooltip { border: 1px solid #d0ac88; --bs-tooltip-bg: var(--bs-white); --bs-tooltip-color: var(--bs-black); }

/* q&a board css */
th { height: 50px; background-color: #d8c69c; text-align: center; }

td { text-align: center; border-bottom: 1px solid #d8c69c; padding: 5px; font-size: 13px; }

/* 페이지 css*/
.pageWrap { width: 100%; margin-top: 50px; display: flex; justify-content: center; }

.page_button { border: 1px solid #a0a0a0; width: 35px; text-align: center; margin-right: 5px; margin-left: 5px; padding: 3px 0 3px 0; }

.page_sidebutton { width: 35px; text-align: center; }

.page_button:hover { cursor: pointer; }

.page_sidebutton:hover { cursor: pointer; }

.writeWrap { margin-top: 10px; }

.write_QnA { width: 100px; background-color: #d0ac88; padding: 5px; text-align: center; float: right; color: white; }


/* 작은 이미지 호버 효과*/
.small-image:hover { border: 3px solid #9b9b9b; border-radius: 3px; }

.price { font-family: Arial; color: red; font-weight: 1000; font-size: 20px; }

.form-select { width: 300px; }

#quantity-select { width: 300px;}

.quantity-selection button { font-weight: 500;}

.top-button, .bottom-button { display: none; position: fixed; background-color: transparent; color: white; border: none; border-radius: 5px; cursor: pointer; height: 50px; width: 50px; position: fixed; right: 10px; transform: translateY(-50%); padding: 10px; border-radius: 10px; margin-right: 10px; }

.top-button { top: 83%; }

.bottom-button { top: 90%; }

.top-button img, .bottom-button img { width: 160%; /* 이미지가 버튼에 꽉 차게 표시 */ }

.deletearea { visibility:hidden;}
.buttongroup { padding-left: 30px;  padding-bottom: 10px;}   


</style>
</head>
<body class="main" style="margin-top: 0;">

	<button class="top-button" onclick="scrollToTop()">
		<img src="https://ifh.cc/g/1MrkVC.png" alt="To Top">
	</button>
	<button class="bottom-button" onclick="scrollToBottom()">
		<img src="https://ifh.cc/g/xSLhk2.png" alt="To Bottom">
	</button>

	<div>
		<button class="top-button" onclick="scrollToTop()">Top</button>
		<button class="bottom-button" onclick="scrollToBottom()">Bottom</button>
	</div>
	<!-- header end -->
	<!-- section -->
	<section id="section" class="sectionbody">

		<!-- nav tabs 기본형태 -->
		<div class="container mt-3">
			<ul class="nav nav-tabs justify-content-between">
				<li class="nav-item"><a href="#home" class="nav-link "
					data-bs-toggle="tab">상세정보</a></li>
				<li class="nav-item"><a href="#menu1" class="nav-link active"
					data-bs-toggle="tab">리뷰</a></li>
				<li class="nav-item"><a href="#menu2" class="nav-link "
					data-bs-toggle="tab">Q&A</a></li>
				<li class="nav-item"><a href="#menu3" class="nav-link "
					data-bs-toggle="tab">반품/교환정보</a></li>
			</ul>
			<!-- Tab panes 상세정보-->
			<div class="tab-content">
				<div class="tab-pane container " id="home">
					<div class="titleArea">
						<h3 class="title mt-3">상세정보</h3>
						<hr>

						<div class="infoimg">
							<div>
<%-- 								<img src="${info.imagedetail}" alt="" style="width: 100%;"> --%>
							</div>
							<br>
							<div>
								<img src="https://ifh.cc/g/Qasqj5.jpg" alt=""
									style="width: 100%;">

							</div>
							<br>
							<div>
								<img src="https://ifh.cc/g/4XOrfh.jpg" alt=""
									style="width: 100%;">
							</div>
							<br>

						</div>

					</div>
					<table width="100%">
						<colgroup>
							<col width="20%">
							<col width="20%">
							<col width="25%">
							<col width="40%">
						</colgroup>
						<tr>
							<th>브랜드</th>
<%-- 							<th>${info.productbrand}</th> --%>
							<th>상품 이름</th>
<%-- 							<th>${info.productName}</th> --%>

						</tr>
						<tr>
							<td>제조사</td>
<%-- 							<td>${info.productcompany}</td> --%>
							<td>모델명</td>
<%-- 							<td>${info.productnumber}</td> --%>

						</tr>
						<tr>
							<td>원산지</td>
<%-- 							<td>${info.productmadein}</td> --%>
							<td>사용대상</td>
<%-- 							<td>${info.productuserage}</td> --%>
						</tr>
						<tr>
							<td>구성품</td>
							<td>상세페이지참조</td>
							<td>배송/설치비용</td>
							<td>지역별 상이</td>
						</tr>
						<tr>
							<td>제조일자</td>
<%-- 							<td>${info.productmadeday}</td> --%>
							<td>품질보증기준</td>
							<td>제품 이상 시 공정거래위원회 고시 <br>소비자분쟁해결기준에 의거 보상합니다.
							</td>
						</tr>
					</table>

				</div>
		 <!-- =========================
          review tabs 
          ========================= -->
				<div class="tab-pane container active" id="menu1">
				
		            <div class="sectioncontainer">
		              <div class="titleArea">
		                <h3 class="title mt-3"> Review </h3>
		            <hr>
		              </div>
		              	<div class="reviewarea">
			              
		
						<c:forEach var="review" items="${data.list }">
						
			              <div class="reviewcontainer mt-3">
			                <div class="profile"> 
			                  <img src="https://ifh.cc/g/9QpqRb.jpg" width="30px" style="opacity: 0.4;" alt="">
			                </div>
			                <div class="content-container">
			                  <div class="id"> ${review.id }</div>
			                  <div class="date"> ${review.reviewdate }</div>
			                  <div class="score">   </div>
	        	              <div class="scorevalue">
    		             		<c:forEach var="i" begin="1" end="${review.reviewrates}">
							        <span style="color:orange;">&#9733;</span>
							    </c:forEach> &nbsp;
		        	              ${review.reviewrates } 
	        	              </div>
			                  <div class="content-container">
			                  <div class="productname"> 상품명 : </div>
			                  <div class="product me-1"> ${review.productname } </div>
			                  <div> / </div>
<!-- 			                  <div class="productsize me-1">  </div> -->
			                  
			                  
			                  <div class="reviewcontent">${review.reviewdetails } 
			                  
			                  </div>
			                </div>
			                <div class="reviewphoto">photozone</div>
			              </div>
			                  
			                <div class="photo"> 
			                  <img src=${review.reviewimg } >
			                </div>
			              
			                <div class="recommend">
			                  <button type="button" class="btn btn-outline-warning" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="리뷰가 도움이 되셨나요?">
			                    <img src="https://ifh.cc/g/zPXGj2.png" width="15px;" alt="">
			                    <span class="likecount" style="color: #000;">0</span>
			                  </button>
			                  <div class="deletearea">
			                  <button class="btn btn-outline-secondary"> 삭제</button>
			                  </div>
			                </div>
			              </div>
			              <div class="buttongroup">
			              <button type="button" class="btn btn-outline-info btn-sm" id="modifyreview">수정</button>
			              <form id="deletereview" action="deleteReview" style="display: inline;"><input type="submit" class="btn btn-outline-info btn-sm" value="삭제">
							<input type="hidden" name="reviewno" value="${review.reviewno}">
								</form>
			              </div>
			              <hr>
						</c:forEach>
						
							              <!-- 리뷰 1개 끝 -->
	              <!-- 리뷰 1개 클래스로 구역 설정-->
				<div class="container mt-2">
				<ul class="pagination justify-content-center">	              
<%
	// model에 넣은 "data" 값 가져오기
	Map data = (Map)request.getAttribute("data");
	int total = (Integer)data.get("total");
	
	int pageNum = (Integer)data.get("pageNum");
	//한 번에 보여줄 글의 개수 
	int countPerPage = (Integer)data.get("countPerPage");
	
	//한 번에 보여줄 페이지의 개수
	int groupCount = 2;
	
	//전체 페이지의 수
	// (올림 처리) (전체 글의 수 / 한번에 보여줄 글의 수)
	int totalPaging = (int)Math.ceil((double)total / countPerPage);
	// 12 / 5 >> 2.4 >> ceil결과 3.0 >> int 변수에 저장 >> 3

	//현재 페이지가 몇번째 그룹에 있는지
	int position = (int) Math.ceil((double)pageNum / groupCount); 

	// 현재 그룹에 첫번째 페이지 번호
	int beginPaging = ((position-1) * groupCount) + 1;
	int endPaging = position * groupCount;
	
	
	if(endPaging > totalPaging) {
		endPaging = totalPaging;
	}
	
	
	if(beginPaging == 1) {
	out.println("<li class='page-item disabled'><a href='review?pageNum=" + (beginPaging-1) + "' class='page-link'>[ 이전 ]</a></li>");
	} else {
		out.println("<li class='page-item active'><a href='review?pageNum=" + (beginPaging-1) + "' class='page-link'>[ 이전 ]</a></li>");
	}
%>
	
<%
	for( int i = beginPaging; i <= endPaging; i++ ) {
	
		if(i == pageNum) {
		out.println("<li class='page-item'><a href='review?pageNum="+ i + "' ' class='page-link'><strong>[ " + i + " ]</strong></a></li>");
		} else {
			out.println("<li class='page-item'><a href='review?pageNum="+ i + "'class='page-link'>[ " + i + " ]</a></li>");
		}
	}

	if(endPaging == totalPaging) {
		out.println("<li class='page-item disabled'><a href='review?pageNum="+ (endPaging+1) +"' class='page-link'>[ 다음 ]</a></li>");
	} else {
		out.println("<li class='page-item active'><a href='review?pageNum="+ (endPaging+1) +"' class='page-link'>[ 다음 ]</a></li>");
	}
%>
								</ul>
							</div>
						
						
						</div>
					</div>
				</div>

	              
	              
          <!-- =========================
          review tabs 끝
          ========================= -->

				<div class="tab-pane container " id="menu2">

					<div class="sectioncontainer">
						<div class="titleArea">
							<h3 class="title mt-3">Q & A</h3>
							<hr>
						</div>

						<table width="100%">
							<colgroup>
								<col width="50px">
								<col width="500px">
								<col width="100px">
								<col width="120px">
								<col width="50px">
							</colgroup>

							<th>번호</th>
							<th>제목</th>
							<th>작성자</th>
							<th>작성일</th>
							<th>조회수</th>

							<tr id="qna10">
								<td>10</td>
								<td>상품 Q&A 입니다..</td>
								<td>Noop Noop</td>
								<td>2023-10-17</td>
								<td>0</td>
							</tr>

							<tr id="qna9">
								<td>9</td>
								<td>상품 Q&A 입니다..</td>
								<td>Noop Noop</td>
								<td>2023-10-17</td>
								<td>0</td>
							</tr>

							<tr id="qna8">
								<td>8</td>
								<td>상품 Q&A 입니다..</td>
								<td>Noop Noop</td>
								<td>2023-10-17</td>
								<td>0</td>
							</tr>

							<tr id="qna7">
								<td>7</td>
								<td>상품 Q&A 입니다..</td>
								<td>Noop Noop</td>
								<td>2023-10-17</td>
								<td>0</td>
							</tr>

							<tr id="qna6">
								<td>6</td>
								<td>상품 Q&A 입니다..</td>
								<td>Noop Noop</td>
								<td>2023-10-17</td>
								<td>0</td>
							</tr>

							<tr id="qna5">
								<td>5</td>
								<td>상품 Q&A 입니다..</td>
								<td>Noop Noop</td>
								<td>2023-10-17</td>
								<td>0</td>
							</tr>

							<tr id="qna4">
								<td>4</td>
								<td>상품 Q&A 입니다..</td>
								<td>Noop Noop</td>
								<td>2023-10-17</td>
								<td>0</td>
							</tr>

							<tr id="qna3">
								<td>3</td>
								<td>상품 Q&A 입니다..</td>
								<td>Noop Noop</td>
								<td>2023-10-17</td>
								<td>0</td>
							</tr>

							<tr id="qna2">
								<td>2</td>
								<td>상품 Q&A 입니다..</td>
								<td>Noop Noop</td>
								<td>2023-10-17</td>
								<td>0</td>
							</tr>

							<tr id="qna1">
								<td>1</td>
								<td>상품 Q&A 입니다..</td>
								<td>Noop Noop</td>
								<td>2023-10-17</td>
								<td>0</td>
							</tr>

						</table>
						<div class="writeWrap">
							<div class="write_QnA">글쓰기</div>

						</div>

						<!-- 페이지버튼 -->
						<div class="pageWrap">
							<div class="page_sidebutton"><</div>

							<div class="page_button" id="page_1">1</div>

							<div class="page_sidebutton">></div>
						</div>
					</div>

				</div>
				<!-- 반품 교환정보 tab -->
				<div class="tab-pane container " id="menu3">
					<h3 class="title mt-3">반품/교환정보</h3>
					<hr>
					<div class="table-responsive">
						<table class="table table-bordered">
							<thead>
								<tr>
									<td colspan="4" style="text-align: center;">
										<p style="font-weight: 1000; font-size: 20px;">반품 / 교환 안내</p>
									</td>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td style="background-color: #d8c69c; text-align: center;">판매자
										지정택배사</td>
									<td colspan="3">한진 택배</td>
								</tr>
								<tr>
									<td style="background-color: #d8c69c; text-align: center;">반품배송비</td>
									<td>편도 100,000원(최초 배송비 무료인 경우 200,000원 부과)</td>
									<td style="background-color: #d8c69c; text-align: center;">교환배송비</td>
									<td>200,000원</td>
								</tr>
								<tr>
									<td rowspan="2"
										style="background-color: #d8c69c; text-align: center; vertical-align: middle;">반품교환
										사유에<br> 따른 요청 가능 기간
									</td>
									<td colspan="3">구매자 단순 변심은 상품 수령후 7일 이내(구매자 반품배송비 부담)</td>
								</tr>
								<tr>
									<td colspan="3">표시/광고와 상이, 계약 내용과 다르게 이행된 경우 상품 수령 후 3개월
										이내 혹은 표시/광고와 다른 사실을 안 날로부터 30일 이내 둘 중 하나 경과 시 반품/교환 불가</td>
								</tr>
								<tr>
									<td
										style="background-color: #d8c69c; text-align: center; vertical-align: middle;">반품/교환
										불가능 사유</td>
									<td colspan="3">
										<ul class="returninfo" style="margin-left: -30px;">
											<li>1. 반품 요청 기간이 지난 경우</li>
											<li>2. 구매자의 책임 있는 사유로 상품 등이 멸실 또는 훼손된 경우</li>
											<li>3. 구매자의 사용 또는 일부 소비에 의하여 상품의 가치가 현저히 감소한 경우</li>
											<li>4. 시간의 경과에 의하여 재판매가 곤란할 정도로 상품 등의 가치가 현저히 감소한 경우</li>
											<li>5. 고객의 요청사항에 맞춰 제작에 들어가는 맞춤제작 상품의 경우</li>
											<li>6. 복제가 가능한 상품 등의 포장을 훼손한 경우</li>
										</ul>
									</td>
								</tr>
							</tbody>
						</table>
					</div>


				</div>
			</div>
		</div>


		<!-- section end -->


<script>
   // 리뷰 좋아요 스크립트
   var tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
   var tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
	
   // 리뷰 쓰기 이동
//    var reviewList = ${data.reviewList}
   
   
   document.getElementById("modifyreview").addEventListener("click", function(){
	   		$.ajax({
	   			url : "writereview",
	   			type : "get",
// 	   			data : { reviewrates: reviewList.reviewrates, reviewdetails : reviewList.reviewdetails},
	   			success:function(data) {
	   				$(".reviewarea").html(data);
	  				},
	  				error:function() {
	  					console.log("error");
	  				}
	   		});
	   });
   		

   //위에 이미지 호버 스크립트 /
   function changeImage(targetId, newImageUrl) {
      var targetImage = document.getElementById(targetId);
      targetImage.src = newImageUrl;
   }
   
   
	document.querySelector("#deletereview").addEventListener('submit', function (event) {
        event.preventDefault(); 
        if (confirm('정말로 삭제하시겠습니까?')) {
            this.submit();
        } else {
        	window.location.href='review';
        }
    });




</script>
</body>
</html>