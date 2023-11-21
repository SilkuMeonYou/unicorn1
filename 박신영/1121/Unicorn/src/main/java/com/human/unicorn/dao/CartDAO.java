package com.human.unicorn.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.human.unicorn.dto.CartDTO;

@Repository
public class CartDAO {
	
	@Autowired
	SqlSession sqlSession;
	
	public List viewCart() {
		List list = sqlSession.selectList("cart.viewCart");
		return list;
	}
	
	public int deleteCart(List<String> deleteList) {
		int result = sqlSession.delete("cart.deleteCart", deleteList);
		return result;
	}
	
	public int modifyAmount(CartDTO dto) {
		int result = sqlSession.update("cart.cartModify", dto);
		return result;
	}
}
