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

}
