package com.human.unicorn.ProductDetailController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.human.unicorn.ProductDetaildto.ImgDTO;
import com.human.unicorn.ProductDetaildto.OptionDTO;
import com.human.unicorn.ProductDetailservice.ProductDetailService;
import com.human.unicorn.Productdto.ProductDTO;

@Controller
public class ProductDetailController {
	
	@Autowired
	
	ProductDetailService productDetailService;
	
	 @RequestMapping("/ProductDetail")
	    public String productdetailList(@RequestParam("productNo") int productNo,
	                                    Model model, @ModelAttribute ProductDTO productDTO,
	                                    @ModelAttribute OptionDTO optionDTO, @ModelAttribute ImgDTO imgDTO) {

	        // ProductDTO 데이터 가져오기
	        List<ProductDTO> productDetails = productDetailService.product(productDTO);
	        model.addAttribute("productDetails", productDetails);

	        // OptionDTO 데이터 가져오기
	        List<OptionDTO> productOptions = productDetailService.productOption(optionDTO);
	        model.addAttribute("productOptions", productOptions);

	        // ImgDTO 데이터 가져오기
	        List<ImgDTO> productImages = productDetailService.productImg(imgDTO);
	        model.addAttribute("productImages", productImages);

		return "product/ProductDetail";
	
}
}
