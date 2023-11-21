package com.human.unicorn.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.human.unicorn.dao.PaymentDAO;

@Service
public class PaymentServiceImpl implements PaymentService {

	
	@Autowired
	PaymentDAO paymentDAO;
	
	@Override
	public List paymentTable() {
		
		List list = paymentDAO.paymentTable();
		System.out.println("Service check");
		return list;
	}

}
