package signup;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

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

		String inputName = request.getParameter("name");
		String inputId = request.getParameter("id");
		String inputPw = request.getParameter("pw");
		String inputMail = request.getParameter("email");
		String inputNum = request.getParameter("phone");
		String inputAd = request.getParameter("address");
		
		// �Է� ���� ������ ArrayList ����
		List<SignUp> list = new ArrayList<>();

		SignUp signup = new SignUp();

		signup.setName(inputName);
		signup.setId(inputId);
		signup.setPw(inputPw);
		signup.setEmail(inputMail);
		signup.setPhone(inputNum);
		signup.setAddress(inputAd);

		list.add(signup);

		System.out.println("list" + list);
		// ������ ������
		HttpSession session = request.getSession();
		session.setAttribute("signup", signup);
		
		// ��� �Է��ʵ尡 ���� �ƴϸ�
		if (inputName != null && !inputName.isEmpty() 
				&& inputId != null && !inputId.isEmpty() 
				&& inputPw != null && !inputPw.isEmpty() 
				&& inputMail != null && !inputMail.isEmpty() 
				&& inputNum != null && !inputNum.isEmpty() 
				&& inputAd != null && !inputAd.isEmpty()) {
			// �α��� �������� �̵�
			System.out.println("ȸ������ �Ϸ�");
			response.sendRedirect("loginStart");
		} else {
			System.out.println("ȸ������ ����");
			PrintWriter out = response.getWriter();
			out.println("<script>");
			out.println("alert('��������� �Է����ּ���.');");
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
