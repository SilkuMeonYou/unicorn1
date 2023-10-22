package login;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/loginservlet")
public class loginservlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public loginservlet() {
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html; charset=UTF-8");

		String id = "suuu";
		String pw = "123";

		String inputId = request.getParameter("id");
		String inputPw = request.getParameter("pw");

		if (id.equals(inputId) && pw.equals(inputPw)) {
			// 아이디와 비밀번호가 일치하는 경우
			System.out.println("id, pw 일치");
			response.sendRedirect("main.jsp");
		} else {
			// 아이디 또는 비밀번호를 입력하지 않은 경우
			if (inputId.isEmpty() || inputPw.isEmpty()) {
				PrintWriter out = response.getWriter();
				out.println("<script>");
				out.println("alert('아이디 또는 비밀번호를 입력해주세요.');");
				out.println("location.href = 'login.jsp';");
				out.println("</script>");
			}

			// 아이디 또는 비밀번호가 일치하지 않는 경우
			PrintWriter out = response.getWriter();
			out.println("<script>");
			out.println("alert('아이디 또는 비밀번호가 일치하지 않습니다.');");
			out.println("location.href = 'login.jsp';");
			out.println("</script>");
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
