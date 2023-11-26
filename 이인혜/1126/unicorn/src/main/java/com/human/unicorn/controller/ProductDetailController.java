package com.human.unicorn.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.human.unicorn.dto.CartDTO;
import com.human.unicorn.dto.ImgDTO;
import com.human.unicorn.dto.OptionDTO;
import com.human.unicorn.dto.PaymentDTO;
import com.human.unicorn.dto.WishlistDTO;
import com.human.unicorn.service.ProductDetailService;
import com.human.unicorn.dto.ProductDTO;

@Controller
public class ProductDetailController {

	@Autowired

	ProductDetailService productDetailService;

	@RequestMapping("/productDetail")
	public String productdetailList(@RequestParam("productNo") int productNo, Model model,
			@ModelAttribute ProductDTO productDTO, @ModelAttribute OptionDTO optionDTO, @ModelAttribute ImgDTO imgDTO) {

		List<ProductDTO> productDetails = productDetailService.product(productDTO);
		model.addAttribute("productDetails", productDetails);

		List<OptionDTO> productOptions = productDetailService.productOption(optionDTO);
		model.addAttribute("productOptions", productOptions);

		List<ImgDTO> productImages = productDetailService.productImg(imgDTO);
		model.addAttribute("productImages", productImages);

		return "productDetail";

	}

	@RequestMapping("/cartinfo")
	public String cartinfo(@ModelAttribute CartDTO dto, @RequestParam int type, Model model, HttpSession session
			,@RequestParam("productNo") int productNo) {
		System.out.println(type);
		System.out.println(productNo);
		dto.setUserNo(3);
		if (type == 1) {
			int cart = productDetailService.cartinfo(dto);

		} else if (type == 2) {
			int wishlist = productDetailService.wishinfo(dto);

		} else if (type == 3) {
			PaymentDTO order = productDetailService.orderinfo(dto);
			model.addAttribute("cart", order);

			System.out.println(dto);

		}
		return "redirect:/productDetail?productNo=" + productNo;

	}
}
