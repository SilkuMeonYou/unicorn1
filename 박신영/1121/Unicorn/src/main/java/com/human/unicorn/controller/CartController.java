package com.human.unicorn.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.human.unicorn.dto.CartDTO;
import com.human.unicorn.service.CartService;

@Controller
public class CartController {
	@Autowired
	CartService cartService;
	
	@RequestMapping("/cart")
	public String viewCart(Model model) {
		List list = cartService.viewCart();
		model.addAttribute("cartList", list);
		return "cart";
	}
	
	@RequestMapping("/clickBtn")
	public String clickBtn(@RequestParam("btn") String btn,
							@RequestParam("cartNoList") List<String> deleteList,
							Model model) {
		
		System.out.println("click: " + btn);

		if(deleteList != null) {
			for(String c : deleteList) {
				System.out.println("deleteList: " + c);
			}	
		}
		
		// 삭제할때 
		if(btn.equals("삭제")) {
			
			boolean delete = true;
			int deleteResult = cartService.deleteCart(deleteList);
			System.out.println("삭제결과:" + deleteResult);
			model.addAttribute("delete", delete);
			
		// 주문할때
		}else if(btn.equals("주문하기")) {
			
		}
		
		return "redirect:/cart";
	}
	
	@RequestMapping("/modify")
	public String modifyAmount(@ModelAttribute CartDTO dto, Model model) {
	
		System.out.println("cartno:" + dto.getCartNo());
		System.out.println("amount:" + dto.getCartCount());
		
		int result = cartService.modifyAmount(dto);
		System.out.println("수정완료:" + result);
		
		return "redirect:/cart";
	}
}
