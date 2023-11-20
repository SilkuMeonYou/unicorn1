package com.human.unicorn.managerPagedao;

import java.util.List;

import com.human.unicorn.Productdto.ProductDTO;

public interface ManagerPageDAO {

	List<ProductDTO> productList();

	List managerProduct(ProductDTO productdto);

	int productTotal();

	ProductDTO getProductByProductNo(int productNo);

	void updateProduct(ProductDTO product);

	void deleteProduct(int productNo);

	void insertProduct(ProductDTO product);
}
