package login;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/loginservlet")
public class loginservlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public loginservlet() {
		// TODO Auto-generated constructor stub
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html; charset=UTF-8");

		HttpSession session = request.getSession();
		
		String id = "suuu";
		String pw = "123";

		String inputId = request.getParameter("id");
		String inputPw = request.getParameter("pw");
		

		if (id.equals(inputId) && pw.equals(inputPw)) {
			// ���̵�� ��й�ȣ�� ��ġ�ϴ� ���
			session.setAttribute("id", id);
			System.out.println("id, pw ��ġ");
			response.sendRedirect("main.jsp");
		} else if (inputId == null || inputPw == null || inputId.isEmpty() || inputPw.isEmpty()) {
			// ���̵� �Ǵ� ��й�ȣ�� �Է����� ���� ���
			PrintWriter out = response.getWriter();
			out.println("<script>");
			out.println("alert('���̵� �Ǵ� ��й�ȣ�� �Է����ּ���.');");
			out.println("location.href = 'login.jsp';");
			out.println("</script>");
		} else {
			// ���̵� �Ǵ� ��й�ȣ�� ��ġ���� �ʴ� ���
			PrintWriter out = response.getWriter();
			out.println("<script>");
			out.println("alert('���̵� �Ǵ� ��й�ȣ�� ��ġ���� �ʽ��ϴ�.');");
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
