package com.human.unicorn.ProductDetaildao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.human.unicorn.ProductDetaildto.CartDTO;
import com.human.unicorn.ProductDetaildto.ImgDTO;
import com.human.unicorn.ProductDetaildto.OptionDTO;
import com.human.unicorn.ProductDetaildto.PaymentDTO;
import com.human.unicorn.ProductDetaildto.WishlistDTO;
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

	@Override
	public int cartinfo(CartDTO dto) {
		int cart = sqlsession.insert("ProductDetail.cartinfo", dto);
		return cart;
	}

	@Override
	public int wishinfo(CartDTO dto) {
		int wishlist = sqlsession.insert("ProductDetail.wishinfo", dto);
		return wishlist;
	}

	@Override
	public PaymentDTO orderinfo(CartDTO dto) {
		PaymentDTO order = sqlsession.selectOne("ProductDetail.orderinfo", dto);
		return order;
	}





}
