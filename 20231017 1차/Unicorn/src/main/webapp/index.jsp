<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
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

/* =========================
	  헤더
    ========================= */
#header {
	background: #fff;
}

header .toparea {
	height: 50px;
}

header .topbar {
	vertical-align: middle;
}

header .top-item {
	float: right;
	margin-right: 20px;
	margin-top: 10px;
	font-size: 12px;
}

header .container-fluid {
	height: 100px;
}

/* =========================
	  섹션 캐러셀 슬라이드
    ========================= */
#demo {
	margin-top: 200px;
}

/* =========================
	  best item
    ========================= */
.img-wrap {
	margin-right: 20px;
	margin-bottom: 20px;
	width: 350px;
	height: 300px;
}

.imgcontent {
	color: #888;
	font-size: 13px
}

.btn.btn-outline-dark {
	margin-top: -10px;
}

/* =========================
	  new item
    ========================= */
/* new - item*/
.new-item {
	height: 800px;
	position: relative;
}

.new-title {
	width: 500px;
	font-weight: bold;
	font-size: 52px;
	position: relative;
}

.new-detail {
	width: 600px;
	font-size: 28px;
	position: relative;
}

.new-readmore {
	width: 70px;
	height: 40px;
	padding: 10px;
	position: relative;
	background-color: rgb(237, 218, 189);
	font-weight: bold;
	border-radius: 5px;
}

/* new - item*/
.new-item {
	height: 800px;
	position: relative;
}

.new-title {
	width: 500px;
	font-weight: bold;
	font-size: 50px;
	position: relative;
}

.new-detail {
	width: 600px;
	font-size: 28px;
	position: relative;
}

.new-readmore {
	width: 70px;
	height: 40px;
	padding: 10px;
	position: relative;
	background-color: #d0ac88;
	font-weight: bold;
	border-radius: 5px;
	text-align: center;
}

/* 새상품 1 이미지& 위치 조정 */
#new-item1 {
	background-image:
		url("https://p.turbosquid.com/ts-thumb/L5/fPVQZK/CzLlq5lO/03/png/1586281684/1920x1080/fit_q87/8faf3fe307ed07168372161fc592754ba653d995/03.jpg");
	background-size: cover;
}

#new-title1 {
	top: 100px;
	left: 100px;
}

#new-detail1 {
	top: 90px;
	left: 100px;
}

#new-readmore1 {
	top: 100px;
	left: 100px;
	color: white;
}

/* 새상품 2 이미지& 위치 조정 */
#new-item2 {
	background-image:
		url("https://p.turbosquid.com/ts-thumb/Tc/X6JZPf/Kr/renderdemuestra1/jpg/1639339611/1920x1080/fit_q87/ce28a85e2e42bed18a8ea4fe3b05b2043bc367fc/renderdemuestra1.jpg");
	background-size: cover;
}

#new-title2 {
	top: 100px;
	left: 50%;
}

#new-detail2 {
	top: 90px;
	left: 50%;
}

#new-readmore2 {
	top: 100px;
	left: 70%;
	color: white;
}

/* =========================
	  푸터
    ========================= */
footer .toparea {
	height: 50px;
}

footer .topbar {
	vertical-align: middle;
}

footer .top-item {
	float: right;
	margin-right: 20px;
	margin-top: 0px;
	font-size: 12px;
}

footer .logo {
	padding-left: 15px;
}

.footer .container {
	font-size: 11px;
	font-weight: 1000;
	line-height: 4;
}

.footercontent {
	color: rgb(59, 59, 59);
	font-weight: 300;
	margin-right: 30px;
}
</style>
</head>

<body class="main" style="margin-top: 0;">

	<div id="wrap">
		<header id="header" class="head fixed-top">
			<div class="toparea">
			<form method="get" action="loginStart">
				<ul class="topbar">
					<li class="top-item"><a href="supportCustomer.html"
						class="top-link" style="margin-right: 50px;">고객지원</a></li>
					<li class="top-item"><a href="mypage_main.html"
						class="top-link">마이페이지</a></li>
					<li class="top-item"><a href="#" class="top-link">최근본상품</a></li>
					<li class="top-item"><a href="2_login.html" class="top-link">주문조회</a></li>
					<li class="top-item" name="login"><a href="2_login.html" class="top-link">로그인</a></li>
					<li class="top-item" name="logout"><a href="2_login.html" class="top-link">로그아웃</a></li>
				</ul>
				</form>
			</div>
			<!-- top area end-->
			<!-- nav bar -->
			<nav class="navbar navbar-expand-lg">
				<!-- expand-lg 지점에 도달하면 메뉴 사라지고 버튼 나타남 -->
				<div class="container-fluid">
					<a class="navbar-brand" href="index.html"
						style="font-family: 'ImcreSoojin';">
						<h2>Noop Noop</h2>
					</a>
					<button class="navbar-toggler" type="button"
						data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup" aria-expanded="false"
						aria-label="Toggle navigation">
						<!-- 버튼 나타나고 클릭시 target으로 -->
						<span class="navbar-toggler-icon"></span>
					</button>

					<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
						<!-- collapse -->
						<div class="navbar-nav ms-5 hstack gap-4">
							<a class="nav-link active" aria-current="page" href="index.html"><h6>
									Home</h6></a> <a class="nav-link" href="event.html"><h6>Event</h6></a> <a
								class="nav-link" href="pd3.html"><h6>Best</h6></a> <a
								class="nav-link" href="pd3.html#listUP"><h6>Product</h6></a>
							<div class="vr"></div>
							<a class="nav-link" href="AboutUs.html"><h6>About us</h6></a>
						</div>

						<div class="searchbar ms-auto" style="float: right;">
							<form class="d-flex" role="search">
								<input class="form-control me-2" type="search"
									placeholder="Search" aria-label="Search">
								<button class="btn btn-outline-warning" type="submit">
									<img src="https://ifh.cc/g/TWFXdO.png">
								</button>
							</form>
						</div>
					</div>
				</div>
			</nav>
		</header>
		<!-- header end -->
		<!-- section -->
		<section id="section" class="sectionbody">

			<!-- 캐러셀 슬라이드 : 좌우로 넘어가는 슬라이드(쇼핑몰 등)-->
			<div id="demo" class="carousel slide" data-bs-ride="carousel">
				<div class="carousel-indicators">
					<button data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
					<button data-bs-target="#demo" data-bs-slide-to="1"></button>
					<button data-bs-target="#demo" data-bs-slide-to="2"></button>
					<button data-bs-target="#demo" data-bs-slide-to="3"></button>
					<button data-bs-target="#demo" data-bs-slide-to="4"></button>

				</div>

				<!-- indicators 숫자와 이미지 개수 같게  -->
				<div class="carousel-inner">
					<div class="carousel-item active">
						<!-- 이미지 자리 -->
						<img src="https://ifh.cc/g/RRjV6Z.jpg" height="650px"
							class="d-block w-100">
					</div>
					<div class="carousel-item">
						<!-- 이미지 자리 -->
						<img src="https://ifh.cc/g/Lhmn6o.jpg" height="650px"
							class="d-block w-100">
					</div>
					<div class="carousel-item">
						<!-- 이미지 자리 -->
						<img src="https://ifh.cc/g/1RndrM.jpg" height="650px"
							class="d-block w-100">
					</div>
					<div class="carousel-item">
						<!-- 이미지 자리 -->
						<img src="https://ifh.cc/g/rPJ2Hz.jpg" height="650px"
							class="d-block w-100">
					</div>
					<div class="carousel-item">
						<!-- 이미지 자리 -->
						<img src="https://ifh.cc/g/h8rFTx.jpg" height="650px"
							class="d-block w-100">
					</div>

				</div>

				<button class="carousel-control-prev" data-bs-target="#demo"
					data-bs-slide="prev">
					<span class="carousel-control-prev-icon"></span>
				</button>
				<button class="carousel-control-next" data-bs-target="#demo"
					data-bs-slide="next">
					<!-- 아이콘 배치 -->
					<span class="carousel-control-next-icon"></span>
				</button>
			</div>

			<div class="container mt-5">
				<h2>Best</h2>

				<div class="bestcontainer d-flex flex-wrap flex-row ">

					<div class="img-wrap mt-3 d-inline-block">
						<a href="#none"> <img class="bestimg m-auto"
							src="https://ifh.cc/g/WTJ8NH.jpg" width="100%" alt="">
							<div class="imgtitle">Blue&Wood tone bed</div>
							<div class="imgcontent">noop noop</div>
						</a>
					</div>

					<div class="img-wrap mt-3 d-inline-block">
						<a href="#none"> <img class="bestimg m-auto"
							src="https://ifh.cc/g/oXBBxt.jpg" width="100%" alt="">
							<div class="imgtitle">White&Cornflowerblue tone bed</div>
							<div class="imgcontent">noop noop</div>
						</a>
					</div>

					<div class="img-wrap mt-3 d-inline-block">
						<a href="#none"> <img class="bestimg m-auto"
							src="https://ifh.cc/g/kjkXlN.jpg" width="100%" height="230px"
							alt="">
							<div class="imgtitle">Mark-champs bed</div>
							<div class="imgcontent">noop noop</div>
						</a>
					</div>

					<div class="img-wrap mt-3 d-inline-block">
						<a href="#none"> <img class="bestimg m-auto"
							src="https://ifh.cc/g/J90Fbn.jpg" width="100%" height="230px"
							alt="">
							<div class="imgtitle">Fred-Grey bed</div>
							<div class="imgcontent">noop noop</div>
						</a>
					</div>
				</div>
				<div class="button d-flex justify-content-center">
					<button type="button" class="btn btn-outline-secondary">더보기</button>
				</div>



			</div>


			<!-- new item -->
			<div class="new-container mt-5">
				<!-- new item 1 -->
				<div class="new-item" id="new-item1">
					<div class="new-title" id="new-title1">Bello edition</div>
					<div class="new-detail" id="new-detail1">모던함을 더한 세미클래식 스타일</div>
					<a class="new-readmore" id="new-readmore1" href="#none">더보기</a>

				</div>
			</div>

			<!-- new item 2 -->
			<div class="new-item" id="new-item2">
				<div class="new-title" id="new-title2">Rowl</div>
				<div class="new-detail" id="new-detail2">최고 퀄리티의 천연 가죽인 톱 그레인
					적용</div>
				<a class="new-readmore" id="new-readmore2" href="#none">더보기</a>
			</div>
	</div>
	</section>
	<!-- section end -->

	<hr class="hr mt-5 style=" color:#d0ac88;">
	<footer id="footer" class="footer">
		<div class="toparea">
			<ul class="topbar">
				<li class="top-item"><a href="#none" class="top-link"
					style="margin-right: 50px;">이용안내</a></li>
				<li class="top-item"><a href="#none" class="top-link">개인정보처리방침</a></li>
				<li class="top-item"><a href="#none" class="top-link">이용약관</a></li>
				<li class="top-item"><a href="#none" class="top-link">인재채용</a></li>
				<li class="top-item"><a href="#none" class="top-link">회사소개</a></li>
			</ul>
		</div>
		<div class="logo" style="margin-top: -70px;">
			<a class="logo" href="index.html" style="font-family: 'ImcreSoojin';">
				<h2>Noop Noop</h2>
			</a>
		</div>
		<div class="footer container">
			쇼핑몰 기본정보 <br> 상호명 <span class="footercontent"> Noop Noop
			</span> 대표 <span class="footercontent"> Unicorn </span> 대표전화 <span
				class="footercontent"> 000-000-0000 </span> 사업자등록번호 <span
				class="footercontent"> 000-000-0000 </span><br> 통신판매업 신고번호
			개인정보보호책임자 <span class="footercontent"> 유니콘 </span> 주소 <span
				class="footercontent"> 충남 천안시 동남구 대흥로 134</span>

		</div>


	</footer>
	</div>
</body>

</html>