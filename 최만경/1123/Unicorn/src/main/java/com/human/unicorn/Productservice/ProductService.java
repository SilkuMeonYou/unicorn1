package com.human.unicorn.Productservice;

import java.util.List;
import java.util.Map;

import com.human.unicorn.Productdto.ProductDTO;

public interface ProductService {

	List<ProductDTO> productList();

	List<ProductDTO> getTop10List();

	void increasePopularity(int productNo);
}
