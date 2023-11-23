package com.human.unicorn.ProductDetailservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.human.unicorn.ProductDetaildao.ProductDetailDAO;
import com.human.unicorn.ProductDetaildto.ImgDTO;
import com.human.unicorn.ProductDetaildto.OptionDTO;

import com.human.unicorn.Productdto.ProductDTO;

@Service
public class ProductDetailServiceImpl implements ProductDetailService {

	
	@Autowired 
	ProductDetailDAO productDetailDAO;
	
	
	
	@Override
	public List product(ProductDTO dto) {
		List list = productDetailDAO.product(dto);
		return list;
	}

	@Override
	public List productOption(OptionDTO dto) {
		List list = productDetailDAO.productOption(dto);
		return list;
	}

	@Override
	public List productImg(ImgDTO dto) {
		List list = productDetailDAO.productImg(dto);
		return list;
	}


}
	

	



