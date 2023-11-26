package com.human.unicorn.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.human.unicorn.dto.InquiryDTO;
import com.human.unicorn.service.InquiryService;

@Controller
public class InquiryController {
	@Autowired
	InquiryService inquiryService;
	
//	@RequestMapping("/inquiry")
//	public String viewInquiry(@RequestParam("productno") int productNo,
//							  Model model,
//							  HttpServletRequest request) {
//	
//		
//		int pageNum = 1;
//		int countPerPage = 10;
//		
//		String tmp_pageNum = request.getParameter("pageNum");
//		if(tmp_pageNum != null) {
//			try {
//				pageNum = Integer.parseInt(tmp_pageNum);
//			} catch(Exception e) {
//				e.printStackTrace();
//			}
//		}
//		
//		String tmp_countPerPage = request.getParameter("countPerPage");
//		if(tmp_countPerPage != null) {
//			try {
//				countPerPage = Integer.parseInt(tmp_countPerPage);
//			}catch(Exception e) {
//				e.printStackTrace();
//			}
//		}
//		
//		Map map = inquiryService.viewInquiry(productNo, pageNum, countPerPage);
//		map.put("pageNum", pageNum);
//		map.put("countPerPage", countPerPage);
//		
//		
//		// 페이지 넘버 넘겨줌
//		model.addAttribute("data", map);
//		
//		
//		return "inquiry";
//	}
//	@RequestMapping("/review")
//	public String viewInquiry(@RequestParam("productno") int productNo,
//							  Model model) {
//		List<InquiryDTO> list = inquiryService.viewInquiry(productNo);
//
//		model.addAttribute("inquiry", list);
//		return "review";
//	}
	
	@RequestMapping("/insertInquiry")
	public String insertInquiry(@ModelAttribute InquiryDTO dto) {
		int result = inquiryService.insertInquiry(dto);
		System.out.println("문의 등록 결과:" + result);
		return "redirect:/inquiry?productno="+dto.getProductNo();
	}
}
