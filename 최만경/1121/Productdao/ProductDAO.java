package com.human.unicorn.Productdao;

import java.util.List;

import com.human.unicorn.Productdto.ProductDTO;

public interface ProductDAO {

	List<ProductDTO> productList();

	List<ProductDTO> selectTop10List();

	

}
