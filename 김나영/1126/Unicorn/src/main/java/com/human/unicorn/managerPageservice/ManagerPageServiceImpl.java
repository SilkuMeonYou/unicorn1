package com.human.unicorn.managerPageservice;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.human.unicorn.Productdao.ProductDAO;
import com.human.unicorn.Productdto.ProductDTO;

@Service
public class ManagerPageServiceImpl implements ManagerPageService {

//	EmpDAO empDAO = new EmpDAOImpl();
	@Autowired
	ProductDAO productDAO;

	@Override
	public List productList() {
		List productList = productDAO.productList();

		return productList;
	}
	


}
