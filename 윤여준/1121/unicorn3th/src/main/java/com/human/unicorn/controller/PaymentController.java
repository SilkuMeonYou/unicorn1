package com.human.unicorn.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.human.unicorn.service.PaymentService;

@Controller
public class PaymentController {

	@Autowired
	PaymentService paymentService;
	

	@RequestMapping("/payment")
	public String paymentList(Model m) {
		
		List list = paymentService.paymentTable();
		
		m.addAttribute("list", list);
		System.out.println("Controller check");
		System.out.println("list : " + list.get(1));
		
		return "payment"; 
	}
}
