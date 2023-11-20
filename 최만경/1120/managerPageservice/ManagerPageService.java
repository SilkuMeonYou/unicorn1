package com.human.unicorn.managerPageservice;

import java.util.List;
import java.util.Map;

import com.human.unicorn.Productdto.ProductDTO;

public interface ManagerPageService {

	List<ProductDTO> productList();

	Map getManagerProductList(int pageNum, int countPerPage);

	ProductDTO getProductByProductNo(int productNo);

	void updateProduct(ProductDTO product);

	void deleteProducts(List<Integer> productNoList);

	void insertProduct(ProductDTO product);
}
