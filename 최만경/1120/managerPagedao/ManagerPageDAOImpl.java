package com.human.unicorn.managerPagedao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.human.unicorn.Productdto.ProductDTO;

@Repository
public class ManagerPageDAOImpl implements ManagerPageDAO {

	@Autowired
	SqlSession sqlSession;

	@Override
	public List<ProductDTO> productList() {
		List<ProductDTO> productList = sqlSession.selectList("product.selectProductList");
		return productList;
	}

	@Override
	public List managerProduct(ProductDTO productdto) {
		List<ProductDTO> managerProductList = sqlSession.selectList("product.productList", productdto);
		return managerProductList;
	}

	@Override
	public int productTotal() {
		int total = sqlSession.selectOne("product.productTotal");
		return total;
	}

	@Override
	public ProductDTO getProductByProductNo(int productNo) {
		return sqlSession.selectOne("product.getProductByProductNo", productNo);
	}

	@Override
	public void updateProduct(ProductDTO product) {
		sqlSession.update("product.updateProduct", product);
		
	}
	@Override
    public void deleteProduct(int productNo) {
        sqlSession.delete("product.deleteProduct", productNo);
    }
	
	@Override
    public void insertProduct(ProductDTO product) {
        sqlSession.insert("product.insertProduct", product);
    }
}
