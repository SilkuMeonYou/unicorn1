package com.human.unicorn.managerPageservice;

import java.util.List;
import java.util.Map;

import com.human.unicorn.Productdto.ProductDTO;
import com.human.unicorn.memberdto.MemberDTO;

public interface ManagerPageService {

	List<ProductDTO> productList();

	Map getManagerProductList(int pageNum, int countPerPage);

	ProductDTO getProductByProductNo(int productNo);

	void updateProduct(ProductDTO product);

	void deleteProducts(List<Integer> productNoList);

	void insertProduct(ProductDTO product);

	Map getManagerMemberList(int pageNum, int countPerPage);

	Map getManagerNoticeList(int pageNum, int countPerPage);

	void deleteMembers(List<Integer> userNos);

	 MemberDTO getMemberByMemberNo(int memberNo);
	

}
