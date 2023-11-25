package com.human.unicorn.service;

import java.util.List;

import com.human.unicorn.dto.CartDTO;
import com.human.unicorn.dto.ImgDTO;
import com.human.unicorn.dto.OptionDTO;
import com.human.unicorn.dto.ProductDTO;

public interface ProductDetailService {

	public List product(ProductDTO dto); 
	public List productOption(OptionDTO dto); 
	public List productImg (ImgDTO dto); 
	public int cartinfo (CartDTO dto);
	



}
