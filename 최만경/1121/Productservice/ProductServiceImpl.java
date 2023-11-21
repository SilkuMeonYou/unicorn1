package com.human.unicorn.Productservice;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.human.unicorn.Productdao.ProductDAO;
import com.human.unicorn.Productdto.ProductDTO;

@Service
public class ProductServiceImpl implements ProductService {

//	EmpDAO empDAO = new EmpDAOImpl();
	@Autowired
	ProductDAO productDAO;

	@Override
	public List productList() {
		List productList = productDAO.productList();

		return productList;
	}
	
	@Override
    public List<ProductDTO> getTop10List() {
        // ProductService에서 필요한 로직 추가 (예: popularity가 높은 상위 10개의 상품 목록 가져오기)
        return productDAO.selectTop10List();
    }

}
