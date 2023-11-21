package com.human.unicorn.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class PaymentDAOImpl implements PaymentDAO{

	
	@Autowired
	SqlSession sqlSession;
	
	@Override
	public List paymentTable() {
		List list = sqlSession.selectOne("id_payment.paymentTable");
		System.out.println("DAO check");
		System.out.println("list : " + list);
		
		return list;
	}

}
