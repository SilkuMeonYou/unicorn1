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
			// ���̵�� ��й�ȣ�� ��ġ�ϴ� ���
			System.out.println("id, pw ��ġ");
			response.sendRedirect("main.jsp");
		} else {
			// ���̵� �Ǵ� ��й�ȣ�� �Է����� ���� ���
			if (inputId.isEmpty() || inputPw.isEmpty()) {
				PrintWriter out = response.getWriter();
				out.println("<script>");
				out.println("alert('���̵� �Ǵ� ��й�ȣ�� �Է����ּ���.');");
				out.println("location.href = 'login.jsp';");
				out.println("</script>");
			}

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
