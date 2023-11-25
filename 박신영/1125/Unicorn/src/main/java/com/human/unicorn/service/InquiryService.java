package com.human.unicorn.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.human.unicorn.dao.InquiryDAO;
import com.human.unicorn.dto.InquiryDTO;


@Service
public class InquiryService {
	@Autowired
	InquiryDAO inquiryDAO;
	
//	public Map viewInquiry(int productNo, int pageNum, int countPerPage) {
//		int startNum = 0, endNum = 0;
//
//		// 이전 페이지의 마지막 숫자 + 1
//		startNum = ((pageNum - 1) * countPerPage) + 1;
//		endNum = pageNum * countPerPage;
//		InquiryDTO dto = new InquiryDTO();
//		dto.setStartNum(startNum);
//		dto.setEndNum(endNum);
//		dto.setProductNo(productNo);
//		
//		int total = inquiryDAO.inquiryTotal();
//		List<InquiryDTO> list = inquiryDAO.viewInquiry(dto);
//
//
//		Map map = new HashMap();
//		map.put("list", list);
//		map.put("total", total);
//
//		return map;
//	}
	public List<InquiryDTO>  viewInquiry(int productNo) {
		List<InquiryDTO> list = inquiryDAO.viewInquiry(productNo);
		return list;
	}
	
	public int insertInquiry(InquiryDTO dto) {
		int result = inquiryDAO.insertInquiry(dto);;
		return result;
	}
}
