package com.human.unicorn.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.human.unicorn.dto.OrderlistDTO;
import com.human.unicorn.service.OrderlistService;

@Controller
public class OrderlistController {
	
	@Autowired
	OrderlistService orderlistService;
	
	@RequestMapping("/orderlist")
	public String orderlist(Model model, OrderlistDTO dto) {
		
		dto.setUserno(3);
		
		List list = orderlistService.selectOrderlist(dto);
		
		System.out.println("orderlist : " + list);
		
		model.addAttribute("list", list);
		
		return "orderlist";
	}

}
