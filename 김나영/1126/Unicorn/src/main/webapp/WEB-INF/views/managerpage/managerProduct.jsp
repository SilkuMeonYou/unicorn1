<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ page import="java.util.List"%>
<%@ page import="com.human.unicorn.Productdto.ProductDTO"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>manager_product</title>
<head>

<style>
/* div { border: 1px solid orange; } */

/* common */
body {
	font-family: pretendard;
}

ul, ol, dl, li {
	list-style: none;
}

a {
	text-decoration: none;
	color: none;
	color: #000;
}

/* common end */
a:hover, a:active, a:focus {
	text-decoration: none;
}

@font-face {
	font-family: 'ImcreSoojin';
	src:
		url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.3/ImcreSoojin.woff')
		format('woff');
	font-weight: normal;
	font-style: normal;
}

/* °íÁ¤ »çÀÌµå¸Þ´º ====================*/
.mainbar2 {
	width: 1200px;
	display: flex;
	justify-content: space-between;
	margin: auto;
}

.menubar {
	width: 250px;
}

.orderbar {
	width: 900px;
}

.menubar_title {
	font-weight: bold;
	margin-top: 70px;
	margin-bottom: 10px;
	font-size: 20px;
	cursor: pointer;
}

.menubar_item {
	margin-bottom: 10px;
}

/* .menubar:hover {
            cursor: pointer;
        } */

/* ==================== °íÁ¤ »çÀÌµå¸Þ´º*/
#container {
	margin: auto;
}

.mypage {
	padding: 50px;
	font-size: 30px;
	font-weight: bold;
	text-align: center;
	color: white;
	background-color: #d8c69c;
}

.mypage2 {
	font-size: 20px;
	text-align: center;
	margin-top: 20px;
}

.none_id {
	text-align: center;
	color: gray;
	font-size: 15px;
	padding: 20px;
}

/* ÃÑ ÁÖ¹®, Àû¸³±Ý, ÄíÆù====================*/
.mainbar {
	display: flex;
	justify-content: space-around;
	width: 1000px;
	margin: 70px auto;
	text-align: center;
}

.mainbar_item {
	border: 1px solid rgb(179, 178, 178);
	border-radius: 10px;
	width: 330px;
	height: 150px;
}

.mainbar_title {
	font-size: 17px;
	font-weight: bold;
}

/* ÁÖ¹®³»¿ª Á¶È¸ ====================*/
.orderbar_title {
	border-bottom: 2px solid gray;
	padding: 20px;
	font-weight: bold;
}

.orderbar_item {
	width: 900px;
	margin: auto;
	margin-top: 20px;
}

.order_detail {
	margin-bottom: 10px;
	text-align: right;
}

.detail_btn {
	border: none;
	background-color: white;
	color: gray;
	font-size: 15px;
}

th, td {
	height: 40px;
	text-align: center;
	vertical-align: middle;
}

.table_top {
	background-color: #d8c69c;
	color: white;
	width: 20%;
}

.table_produtNo {
	width: 200px;
}

.table_productName {
	width: 500px;
}

.table_productPrice {
	width: 200px;
}

/* ÆäÀÌÁö ³Ñ¹ö ====================*/
.oderbar_num {
	display: flex;
	justify-content: center;
	margin-top: 20px;
}

.oderbar_num_item {
	width: 30px;
	height: 30px;
	margin: 5px;
	text-align: center;
}
</style>
</head>
<body>
<body class="main" style="margin-top: 0;">

	<!-- header end -->

	<!-- section -->
	<section id="section" class="sectionbody">

		<div id="container">

			<div class="mypage">관리자 페이지</div>


			<div class="mypage2">안녕하세요, 관리자님!</div>


			<div class="mainbar2">
				<div class="menubar">
					<ul>
						<li class="menubar_title">회원 관리</li>
						<li class="menubar_item"><a href="">회원 조회</a></li>
						<li class="menubar_item"><a href="">회원 관리</a></li>
					</ul>

					<ul>
						<li class="menubar_title">게시글 관리</li>
						<li class="menubar_item"><a href="">이벤트</a></li>
						<li class="menubar_item"><a href="">공지사항</a></li>
						<li class="menubar_item"><a href="">Q&A</a></li>
						<li class="menubar_item"><a href="">후기</a></li>
					</ul>

					<ul>
						<li class="menubar_title">제품 관리</li>
						<li class="menubar_item"><a href="">제품 추가</a></li>
						<li class="menubar_item"><a href="">제품 수정 | 삭제</a></li>
					</ul>

					<ul>
						<li class="menubar_title">쿠폰 관리</li>
						<li class="menubar_item"><a href="">쿠폰 생성</a></li>
						<li class="menubar_item"><a href="">쿠폰 지급</a></li>
					</ul>

				</div>

				<div class="orderbar">
					<div class="orderbar_title">제품 관리</div>

					<div class="orderbar_item">

						<table>

							<tr>
								<td class="table_top">제품 번호</td>
								<td class="table_top">제품명</td>
								<td class="table_top">가격</td>
							</tr>
							<!--for문 돌려서 제품 dto 꺼내기-->
							<c:forEach var="productDTO" items="${productList}">
								<tr id="products">
									<td class="table_produtNo">${productDTO.productNo}</td>
									<td class="table_productName">${productDTO.productName}</td>
									<td class="table_productPrice">${productDTO.productPrice}</td>
								</tr>
							</c:forEach>
						</table>

					</div>
					<div class="oderbar_num">
						<div class="oderbar_num_item"><<</div>
						<div class="oderbar_num_item"><</div>
						<div class="oderbar_num_item">1</div>
						<div class="oderbar_num_item">></div>
						<div class="oderbar_num_item">>></div>
					</div>

				</div>
			</div>

		</div>


	</section>
	<!-- section end -->


	</div>
	<script>
		document.addEventListener('DOMContentLoaded', function() {
			var mypageElement = document.querySelector('.mypage');
			if (mypageElement) {
				mypageElement.addEventListener("click", function() {
					window.location.href = "manager_product_main.html";
				});
			}

			// 제품 행 요소 가져오기
			var productRow = document.getElementById('products');

			// 제품 행에 클릭 이벤트 리스너 추가
			productRow.addEventListener('click', function() {
				// manager_product_edite 파일로 이동
				window.location.href = 'manager_product_edit.html';
			});
		});
	</script>
</body>
</body>

</html>