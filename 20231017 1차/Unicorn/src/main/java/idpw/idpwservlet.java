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

		String name = "�̼���";
		String email = "123";
		String id = "123";

		String inputIdname = request.getParameter("idname");
		String inputMail = request.getParameter("email");
		String inputId = request.getParameter("id");
		String inputPwname = request.getParameter("pwname");

	
		PrintWriter out = response.getWriter();
		out.println("<script>");

		

		// ���̵� ã�� ���
		

			if (inputIdname.trim().isEmpty() || inputMail.trim().isEmpty()) {
				out.println("alert('������ �Է����ּ���.');");
				
			} else if (!id.equals(inputIdname) || !email.equals(inputMail)) {
				out.println("alert('�Է��Ͻ� ������ ��ġ�ϴ� ���̵� �����ϴ�.');");
				
			} else {
				out.println("alert('���̵�: " + id + ", �̸�: " + name + "');");
			}
		

		// ��й�ȣ ã�� ���
		

			if (inputId.trim().isEmpty() || inputPwname.trim().isEmpty()) {
				out.println("alert('������ �Է����ּ���.');");
				
			} else if (!id.equals(inputId) || !name.equals(inputPwname)) {
				out.println("alert('�Է��Ͻ� ������ ��ġ�ϴ� ��й�ȣ�� �����ϴ�.');");
				
			} else {
				out.println("alert('��й�ȣ �缳�� ��ũ�� �̸��Ϸ� �����߽��ϴ�.');");
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
