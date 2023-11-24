package com.human.unicorn.service;

import java.util.List;
import java.util.Map;

public interface InquiryService {

	Map selectInquiry(int pageNum, int countPerPage);
	
	int deleteInquiry(String[] list);


}
