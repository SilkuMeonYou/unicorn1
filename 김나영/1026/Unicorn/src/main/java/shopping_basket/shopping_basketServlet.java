package shopping_basket;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/shopping_basketServlet")
public class shopping_basketServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		response.setContentType("text/html; charset=UTF-8");
		 HttpSession session = request.getSession();
	 
		 
		 
		List<Cart> list = (List<Cart>)session.getAttribute("cartIndex");
		if(list == null) {
			list = new ArrayList<>();
		}
		
		
		
		Cart cart = new Cart();
		cart.setNum(2);
		cart.setSize("S");
		cart.setAmount(2);
		list.add(cart);
		
		
		
		
		session.setAttribute("cartList", list);
		
		String productName = request.getParameter("productName");
		String productPrice = request.getParameter("productPrice");
		String productsalePrice = request.getParameter("salePrice");
		String productSize = request.getParameter("productSize");
	
		
		System.out.println(productName);
		System.out.println(productPrice);
		System.out.println(productsalePrice);
		System.out.println(productSize);
		

		String t = request.getParameter("type");
		
		
		
		
//		int num = Integer.parseInt(request.getParameter("productNum"));
//
//		List<Integer> list = (List<Integer>) session.getAttribute("cartIndex");
//		if (list == null) {
//			list = new ArrayList<>();
//		}
//		list.add(num - 1);
//
//		session.setAttribute("cartIndex", list);
	}

}
