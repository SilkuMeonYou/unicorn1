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
		
		// �����Ҷ� 
		if(btn.equals("����")) {
			
			boolean delete = true;
			int deleteResult = cartService.deleteCart(deleteList);
			System.out.println("�������:" + deleteResult);
			model.addAttribute("delete", delete);
			
		// �ֹ��Ҷ�
		}else if(btn.equals("�ֹ��ϱ�")) {
			
		}
		
		return "redirect:/cart";
	}
	
	@RequestMapping("/modify")
	public String modifyAmount(@ModelAttribute CartDTO dto, Model model) {
	
		System.out.println("cartno:" + dto.getCartNo());
		System.out.println("amount:" + dto.getCartCount());
		
		int result = cartService.modifyAmount(dto);
		System.out.println("�����Ϸ�:" + result);
		
		return "redirect:/cart";
	}
}
