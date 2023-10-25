package idpw;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import signup.SignUp;

@WebServlet("/find_id")
public class find_id extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public find_id() {
		super();
		// TODO Auto-generated constructor stub
	}

	List<SignUp> userList = new ArrayList<>();
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html; charset=UTF-8");

		// 세션을 가져옴
		HttpSession session = request.getSession();

		String inputIdname = request.getParameter("idname");
		String inputMail = request.getParameter("email");

//		SignUp signup = new SignUp();

		PrintWriter out = response.getWriter();
		
//		if (inputIdname == null || inputMail == null || inputIdname.isEmpty() || inputMail.isEmpty()) {
//			out.println("<script>");
//			out.println("alert('정보를 입력해주세요.');");
//			out.println("location.href = 'idpw.jsp';");
//			out.println("</script>");
//		}

		List list = (List) session.getAttribute("signup");

		String id = null;

		boolean ck = false;

		for (int i = 0; i < list.size(); i++) {

			SignUp user = (SignUp) list.get(i);
			String name = user.getName();
			String email = user.getEmail();

			if (name.equals(inputIdname) && email.equals(inputMail)) {
				ck = true;
				id = user.getId();
			}
		}
		
		

		if (ck) {
			request.setAttribute("found_id", id);
			RequestDispatcher dispatcher = request.getRequestDispatcher("idpw.jsp");
			dispatcher.forward(request, response);
		} else {
			request.setAttribute("error", "입력하신 정보와 일치하는 아이디가 없습니다");
			RequestDispatcher dispatcher = request.getRequestDispatcher("idpw.jsp");
			dispatcher.forward(request, response);
		}

		
//
//		} else {
//			out.println("<script>alert('아이디 : " + idname + "'); location.href='idpw.jsp';</script>");
//		}

	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
