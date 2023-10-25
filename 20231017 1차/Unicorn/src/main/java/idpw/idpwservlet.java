package idpw;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/idpwservlet")
public class idpwservlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public idpwservlet() {
		super();
		// TODO Auto-generated constructor stub
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html; charset=UTF-8");

		String name = "이수연";
		String email = "123";
		String id = "123";

		String inputIdname = request.getParameter("idname");
		String inputMail = request.getParameter("email");
		String inputId = request.getParameter("id");
		String inputPwname = request.getParameter("pwname");

	
		PrintWriter out = response.getWriter();
		out.println("<script>");

		

		// 아이디 찾기 기능
		

			if (inputIdname.trim().isEmpty() || inputMail.trim().isEmpty()) {
				out.println("alert('정보를 입력해주세요.');");
				
			} else if (!id.equals(inputIdname) || !email.equals(inputMail)) {
				out.println("alert('입력하신 정보와 일치하는 아이디가 없습니다.');");
				
			} else {
				out.println("alert('아이디: " + id + ", 이름: " + name + "');");
			}
		

		// 비밀번호 찾기 기능
		

			if (inputId.trim().isEmpty() || inputPwname.trim().isEmpty()) {
				out.println("alert('정보를 입력해주세요.');");
				
			} else if (!id.equals(inputId) || !name.equals(inputPwname)) {
				out.println("alert('입력하신 정보와 일치하는 비밀번호가 없습니다.');");
				
			} else {
				out.println("alert('비밀번호 재설정 링크를 이메일로 전송했습니다.');");
			}
		

		out.println("location.href = 'idpw.jsp';");
		out.println("</script>");
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
