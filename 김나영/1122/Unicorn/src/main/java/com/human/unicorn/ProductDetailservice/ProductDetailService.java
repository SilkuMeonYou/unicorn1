package com.human.unicorn.ProductDetailservice;

import java.util.List;

import com.human.unicorn.ProductDetaildto.ImgDTO;
import com.human.unicorn.ProductDetaildto.OptionDTO;
import com.human.unicorn.Productdto.ProductDTO;

public interface ProductDetailService {

	public List product(ProductDTO dto); 
	public List productOption(OptionDTO dto); 
	public List productImg (ImgDTO dto); 
	



}
