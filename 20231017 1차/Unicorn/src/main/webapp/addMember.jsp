<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	request.setCharacterEncoding("UTF-8");
%>
<jsp:useBean id="member" class="com.saeyan.javabeans.MemberBean"/>
<jsp:setProperty name="member" property="*"/>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<%

	String name = member.getName();
String param_name = request.getParameter("name");

%>
<table>
	<tr>
		<td> 아이디 </td>
		<td><jsp:setPropety name="member" property="userid" value='<%=param_name %>'/></td>
		<td><jsp:getPropety name="member" property="userid"/></td>
	</tr>
	<tr>
		<td> 비밀번호 </td>
		<td><jsp:getPropety name="member" property="pwd"/></td>
	</tr>
	<tr>
		<td> 이메일 </td>
		<td><jsp:getPropety name="member" property="email"/></td>
	</tr>
	<tr>
		<td> 전화번호 </td>
		<td><jsp:getPropety name="member" property="phone"/></td>
	</tr>
</table>

</body>
</html>