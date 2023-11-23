package com.human.unicorn.ProductDetaildao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.human.unicorn.ProductDetaildto.ImgDTO;
import com.human.unicorn.ProductDetaildto.OptionDTO;
import com.human.unicorn.Productdto.ProductDTO;

@Repository
public class ProductDetailDAOImpl implements ProductDetailDAO {

	 @Autowired
	 SqlSession sqlsession;
	 
	@Override
	public List product(ProductDTO dto) {
		List list = sqlsession.selectList("ProductDetail.product",dto);
		return list;
	}

	@Override
	public List productOption(OptionDTO dto) {
		 List list = sqlsession.selectList("ProductDetail.productOption", dto);
		return list;
	}

	@Override
	public List productImg(ImgDTO dto) {
		 List list = sqlsession.selectList("ProductDetail.productImg", dto);
		return list;
	}





}
