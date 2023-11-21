<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<form action="signup">
<input type="submit" value="추가">
</form>
<table border=1>
	<thead>
		<tr>
			<th>user_no</th>
			<th>id</th>
			<th>pw</th>
			<th>name</th>
			<th>address</th>
			<th>address_details</th>
			<th>postcode</th>
			<th>tel</th>
			<th>email</th>
			<th>userpoint</th>
			<th>grade</th>
			<th>signupdate</th>
		</tr>
	</thead>
	<tbody>
		<c:forEach var="dto" items="${list }">
			<tr>
				<td>${dto.user_no }</td>
				<td>${dto.id }</td>
				<td>${dto.pw }</td>
				<td>${dto.name }</td>
				<td>${dto.address }</td>
				<td>${dto.address_details }</td>
				<td>${dto.postcode }</td>
				<td>${dto.tel }</td>
				<td>${dto.email }</td>
				<td>${dto.userpoint }</td>
				<td>${dto.grade }</td>
				<td>${dto.signupdate }</td>
			</tr>
		</c:forEach>
	</tbody>
</table>
	
</body>
</html>