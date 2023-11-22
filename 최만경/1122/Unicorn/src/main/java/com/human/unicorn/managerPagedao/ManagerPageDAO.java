package com.human.unicorn.managerPagedao;

import java.util.List;

import com.human.unicorn.Productdto.ProductDTO;
import com.human.unicorn.dto.NoticeDTO;
import com.human.unicorn.memberdto.MemberDTO;

public interface ManagerPageDAO {

	List<ProductDTO> productList();

	List managerProduct(ProductDTO productdto);

	int productTotal();

	ProductDTO getProductByProductNo(int productNo);

	void updateProduct(ProductDTO product);

	void deleteProduct(int productNo);

	void insertProduct(ProductDTO product);

	List managerMember(MemberDTO memberdto);

	int memberTotal();

	List managerNotice(NoticeDTO noticeDTO);

	int noticeTotal();

	void deleteMembers(List<Integer> userNos);

	MemberDTO getMemberByMemberNo(int memberNo);

	NoticeDTO getNoticeByNoticeNo(String noticeNo);

	void updateNotice(NoticeDTO notice);

	int getNextNoticeSeq();

	void insertNotice(NoticeDTO notice);

	void deleteNotices(List<String> noticeNoList);

}

