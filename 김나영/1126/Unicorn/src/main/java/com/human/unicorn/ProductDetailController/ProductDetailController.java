package com.human.unicorn.ProductDetailController;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.human.unicorn.ProductDetaildto.CartDTO;
import com.human.unicorn.ProductDetaildto.ImgDTO;
import com.human.unicorn.ProductDetaildto.MemberDTO;
import com.human.unicorn.ProductDetaildto.OptionDTO;
import com.human.unicorn.ProductDetaildto.PaymentDTO;
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

		 
		 
	        List<ProductDTO> productDetails = productDetailService.product(productDTO);
	        model.addAttribute("productDetails", productDetails);

	      
	        List<OptionDTO> productOptions = productDetailService.productOption(optionDTO);
	        model.addAttribute("productOptions", productOptions);

	     
	        List<ImgDTO> productImages = productDetailService.productImg(imgDTO);
	        model.addAttribute("productImages", productImages);

		return "product/ProductDetail";
	
}
	 
	 @RequestMapping("/cartinfo")
	 public String cartinfo(@ModelAttribute CartDTO dto, @RequestParam int type, Model model, HttpSession session) {
	     System.out.println(type);

	     MemberDTO userlist = (MemberDTO) session.getAttribute("userlist");

	     if (userlist != null) {
	         dto.setUserNo(userlist.getUserno());

	         if (type == 1) {
	             int cart = productDetailService.cartinfo(dto);
	         } else if (type == 2) {
	             int wishlist = productDetailService.wishinfo(dto);
	         } else if (type == 3) {
	             PaymentDTO order = productDetailService.orderinfo(dto);
	             model.addAttribute("cart", order);
	         }

	         System.out.println(dto);

	         return "product/ProductDetail";
	     } else {
	    	 	
	    	 model.addAttribute("loginWarning", "로그인이 필요합니다.");

	    	    return "product/ProductDetail";
	     }
	 }}
