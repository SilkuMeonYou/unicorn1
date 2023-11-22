package com.human.unicorn.ProductDetaildao;

import java.util.List;

import com.human.unicorn.ProductDetaildto.ImgDTO;
import com.human.unicorn.ProductDetaildto.OptionDTO;
import com.human.unicorn.Productdto.ProductDTO;

public interface ProductDetailDAO {
	
	public List product(ProductDTO dto); 
	public List productOption(OptionDTO dto); 
	public List productImg (ImgDTO dto); 
	

 
}
