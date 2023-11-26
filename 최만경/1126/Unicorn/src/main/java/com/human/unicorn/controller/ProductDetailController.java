package com.human.unicorn.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.human.unicorn.dto.CartDTO;
import com.human.unicorn.dto.ImgDTO;
import com.human.unicorn.dto.OptionDTO;
import com.human.unicorn.service.ProductDetailService;
import com.human.unicorn.dto.ProductDTO;

@Controller
public class ProductDetailController {
	
	@Autowired
	
	ProductDetailService productDetailService;
	
	 @RequestMapping("/productDetail")
	    public String productdetailList(@RequestParam("productNo") int productNo,
	                                    Model model, @ModelAttribute ProductDTO productDTO,
	                                    @ModelAttribute OptionDTO optionDTO, @ModelAttribute ImgDTO imgDTO) {

	      
		 
		 
		 
		 
	        List<ProductDTO> productDetails = productDetailService.product(productDTO);
	        model.addAttribute("productDetails", productDetails);

	      
	        List<OptionDTO> productOptions = productDetailService.productOption(optionDTO);
	        model.addAttribute("productOptions", productOptions);

	     
	        List<ImgDTO> productImages = productDetailService.productImg(imgDTO);
	        model.addAttribute("productImages", productImages);

		return "productDetail";
	
}
	 
	 @RequestMapping("/cartinfo")
	 public String cartinfo (@ModelAttribute CartDTO dto) {
		 System.out.println(dto); 
		 int userNo = 3;
		 dto.setUserNo(userNo);
		     int cart = productDetailService.cartinfo(dto);
			return "productDetail";
			
	 }
	 
	 
}
