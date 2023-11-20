package com.human.unicorn.managerPageservice;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.human.unicorn.Productdao.ProductDAO;
import com.human.unicorn.Productdto.ProductDTO;
import com.human.unicorn.managerPagedao.ManagerPageDAO;

@Service
public class ManagerPageServiceImpl implements ManagerPageService {

//	EmpDAO empDAO = new EmpDAOImpl();
	@Autowired ProductDAO productDAO;
	@Autowired ManagerPageDAO managerPageDAO;

	@Override
	public List productList() {
		List productList = productDAO.productList();

		return productList;
	}

	@Override
	public Map getManagerProductList(int pageNum, int countPerPage) {
		int startNum = 0, endNum = 0;

		// 이전 페이지의 마지막 숫자 + 1
		startNum = ((pageNum - 1) * countPerPage) + 1;
		endNum = pageNum * countPerPage;
//		endNum = startNum + countPerPage - 1;

		ProductDTO dto = new ProductDTO();
		dto.setStartNum(startNum);
		dto.setEndNum(endNum);
		
		// 보여줄 리스트만 쏙 뽑았음
		List list = managerPageDAO.managerProduct(dto);
		System.out.println(list.size());
		// 전체 회원수를 뽑았음
		int total = managerPageDAO.productTotal();
		
		Map map = new HashMap();
		
		map.put("list", list);
		map.put("total", total);
		
		return map;
	}

	
	@Override
    public ProductDTO getProductByProductNo(int productNo) {
        return managerPageDAO.getProductByProductNo(productNo);
    }

	@Override
    public void updateProduct(ProductDTO product) {
        managerPageDAO.updateProduct(product);
    }
	
	@Override
    public void deleteProducts(List<Integer> productNoList) {
        if (productNoList != null && !productNoList.isEmpty()) {
            for (Integer productNo : productNoList) {
                managerPageDAO.deleteProduct(productNo);
            }
        }
    }

	@Override
    public void insertProduct(ProductDTO product) {
        managerPageDAO.insertProduct(product);
    }
	

}
