package idpw;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/find_id")
public class find_id extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public find_id() {
		super();
		// TODO Auto-generated constructor stub
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html; charset=UTF-8");

		String idname = "이수연";
		String email = "123";

		String inputIdname = request.getParameter("idname");
		String inputMail = request.getParameter("email");

		PrintWriter out = response.getWriter();

		if (inputIdname == null || inputMail == null || inputIdname.isEmpty() || inputMail.isEmpty()) {
			out.println("<script>");
			out.println("alert('정보를 입력해주세요.');");
			out.println("location.href = 'idpw.jsp';");
			out.println("</script>");

		} else if (!idname.equals(inputIdname) || !email.equals(inputMail)) {
			out.println("<script>");			
			out.println("alert('입력하신 정보와 일치하는 아이디가 없습니다.');");
			out.println("location.href = 'idpw.jsp';");
			out.println("</script>");

		} else {
			out.println("<script>alert('아이디 : " + idname +  "'); location.href='idpw.jsp';</script>");
		}

	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
