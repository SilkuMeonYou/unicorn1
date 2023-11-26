package com.human.unicorn.dao;

import java.util.List;

import com.human.unicorn.dto.PaymentDTO;
import com.human.unicorn.dto.ReviewDTO;

public interface PaymentDAO {

	List PaymentList();
	
	
	int insertPaymentDTO(PaymentDTO dto);
	
	
}
	