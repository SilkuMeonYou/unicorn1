package com.human.unicorn.dto;

import java.sql.Date;
import java.util.List;

public class InquiryDTO {
	
	private String inquiryno;
	private int userno;
	private int productno;
	private String inquirytitle;
	private String inquirydetails;
	private Date inquirydate;
	private String productname;
	
	List list_remove;
	
	private int startNum;
	private int endNum;
	
	public String getInquiryno() {
		return inquiryno;
	}
	public void setInquiryno(String inquiryno) {
		this.inquiryno = inquiryno;
	}
	public int getUserno() {
		return userno;
	}
	public void setUserno(int userno) {
		this.userno = userno;
	}
	public int getProductno() {
		return productno;
	}
	public void setProductno(int productno) {
		this.productno = productno;
	}
	public String getInquirytitle() {
		return inquirytitle;
	}
	public void setInquirytitle(String inquirytitle) {
		this.inquirytitle = inquirytitle;
	}
	public String getInquirydetails() {
		return inquirydetails;
	}
	public void setInquirydetails(String inquirydetails) {
		this.inquirydetails = inquirydetails;
	}
	public Date getInquirydate() {
		return inquirydate;
	}
	public void setInquirydate(Date inquirydate) {
		this.inquirydate = inquirydate;
	}
	public String getProductname() {
		return productname;
	}
	public void setProductname(String productname) {
		this.productname = productname;
		
	}
	@Override
	public String toString() {
		return "InquiryDTO [inquiryno=" + inquiryno + ", userno=" + userno + ", productno=" + productno
				+ ", inquirytitle=" + inquirytitle + ", inquirydetails=" + inquirydetails + ", inquirydate="
				+ inquirydate + ", productname=" + productname + ", list_remove=" + list_remove + ", staruNum="
				+ startNum + ", endNum=" + endNum + "]";
	}
	public List getList_remove() {
		return list_remove;
	}
	public void setList_remove(List list_remove) {
		this.list_remove = list_remove;
	}
	public int getStartNum() {
		return startNum;
	}
	public void setStartNum(int startNum) {
		this.startNum = startNum;
	}
	public int getEndNum() {
		return endNum;
	}
	public void setEndNum(int endNum) {
		this.endNum = endNum;
	}
	
	
	

}
