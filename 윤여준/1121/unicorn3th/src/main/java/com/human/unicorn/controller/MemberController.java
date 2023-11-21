package com.human.unicorn.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;

import com.human.unicorn.dto.MemberDTO;
import com.human.unicorn.service.MemberService;

@Controller
public class MemberController {

	@Autowired
	MemberService memberService;

	// 로그인 페이지 열기
	@RequestMapping("/login")
	public String login() {
		System.out.println("/login 실행");
		return "login";
	}

	// DB에서 입력한값과 비교해서
	// 성공하면 메인, 실패하면 로그인페이지 이동
	@RequestMapping("/login_Users")
	public String loginUsers(HttpServletRequest request, Model model, @ModelAttribute MemberDTO dto) {

		List User_list = memberService.loginUsers(dto);

		System.out.println("User_list.size : " + User_list.size());
		System.out.println("dto_id : " + dto.getId());
		System.out.println("dto_pw : " + dto.getPw());

		if (User_list.size() != 0) {
			return "main";
		} else if(dto.getId() == null || dto.getPw() == null) {
			model.addAttribute("error1", "아이디 또는 비밀번호를 입력해주세요");
			return "login";
		} else {
			model.addAttribute("error2", "아이디 또는 비밀번호가 일치하지않습니다");
			return "login";
			
		}

	}


	//확인차 페이지 없어도 됨	
	// DB 정보 출력
	@RequestMapping("/users")
	public String users(Model model, MemberDTO dto) {
		List list = memberService.getselectusers(dto);
		
		model.addAttribute("List", list);
		
		return "signup_list";
	}
	@RequestMapping("/signup_data")
	public String signup(@ModelAttribute MemberDTO dto, Model model) {
		
		int data = memberService.signup(dto);
		System.out.println("data : " + data);
		
		List list = memberService.getselectusers(dto);
			
			model.addAttribute("list", list);
			
			return "/signup_list";
	}
	
	

	// DB에서 입력한값과 비교
	//
	@RequestMapping("/signup")
	public String signupUsers(HttpServletRequest request, Model model, @ModelAttribute MemberDTO dto) {

		System.out.println("dto_id : " + dto.getId());
		System.out.println("dto_id : " + dto.getPw());

		// 모든 입력필드가 비어있지 않은경우
		if (dto.getName() != null && dto.getId() != null && dto.getPw() != null && dto.getEmail() != null
				&& dto.getTel() != null && dto.getAddress() != null) {

			List Signup_list = memberService.getselectusers(dto);
			System.out.println("Signup_list.size : " + Signup_list);
			
			// 아이디 중복검사
			if (Signup_list.size() != 0) {
				model.addAttribute("error3", "이미 존재하는 회원입니다");
				return "signup";
			}

			// 중복되지않으면 가입 진행
			int result = memberService.signup(dto);
			System.out.println("회원가입 완료");
			return "login";

			// 비어있는 경우
		} else {
			System.out.println("회원가입 실패");
			model.addAttribute("error4", "모든 정보를 입력해주세요");

			// 회원가입 페이지로 이동
			return "signup";
//			return "redirect:/signup";

		}

	}
}