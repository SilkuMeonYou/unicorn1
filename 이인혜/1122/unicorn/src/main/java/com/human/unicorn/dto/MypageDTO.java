package com.human.unicorn.dto;

public class MypageDTO {

	private String name;
	private int userno;
	private String detailno;
	private String couponno;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getUserno() {
		return userno;
	}

	public void setUserno(int userno) {
		this.userno = userno;
	}

	@Override
	public String toString() {
		return "MypageDTO [name=" + name + ", userno=" + userno + ", detailno=" + detailno + ", couponno=" + couponno
				+ "]";
	}

	public String getDetailno() {
		return detailno;
	}

	public void setDetailno(String detailno) {
		this.detailno = detailno;
	}

	public String getCouponno() {
		return couponno;
	}

	public void setCouponno(String couponno) {
		this.couponno = couponno;
	}

	
	
}
