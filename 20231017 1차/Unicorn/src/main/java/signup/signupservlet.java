package signup;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/signupservlet")
public class signupservlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public signupservlet() {
		super();
		// TODO Auto-generated constructor stub
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html; charset=UTF-8");
		
		String inputId = request.getParameter("id");
		String inputPw = request.getParameter("pw");
		String inputMail = request.getParameter("email");
		String inputNum = request.getParameter("num");

		
		// 모든 입력필드가 빈값이 아니면
		if (inputId != null && !inputId.isEmpty() && inputPw != null && !inputPw.isEmpty() && inputMail != null
				&& !inputMail.isEmpty() && inputNum != null && !inputNum.isEmpty()) {
			// 로그인 페이지로 이동
			System.out.println("회원가입 완료");
			response.sendRedirect("loginStart");
		} else {
			System.out.println("회원가입 실패");
			PrintWriter out = response.getWriter();
			out.println("<script>");
			out.println("alert('모든정보를 입력해주세요.');");
			out.println("location.href = 'signupStart';");
			out.println("</script>");
		}
			
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
