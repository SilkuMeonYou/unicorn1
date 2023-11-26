package com.human.unicorn.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.human.unicorn.dto.InquiryDTO;

@Repository
public class InquiryDAO {
	@Autowired
	SqlSession sqlSession;
	
	public List<InquiryDTO> viewInquiry(int productNo) {
		List<InquiryDTO> list = sqlSession.selectList("inquiry.viewInquiry", productNo);
		return list;
	}
	
	public int insertInquiry(InquiryDTO dto) {
		int result = sqlSession.insert("inquiry.insertInquiry", dto);
		return result;
	}
}
