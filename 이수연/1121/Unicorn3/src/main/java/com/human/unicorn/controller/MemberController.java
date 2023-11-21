package com.human.unicorn.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;

import com.human.unicorn.memberdto.MemberDTO;
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

		List<MemberDTO> list = memberService.getselectusers(dto);
		
		MemberDTO User_list = memberService.loginUsers(dto);
		
		// 세션에 담기
		HttpSession session = request.getSession();
		session.setAttribute("list", User_list);

		System.out.println("User_list_id : " + User_list.getId());
		System.out.println("User_list_pw : " + User_list.getPw());
		System.out.println("User_list_name : " + User_list.getName());
		System.out.println("User_list_email : " + User_list.getEmail());
		
		boolean login = false;		
		 
		for(MemberDTO d: list) {
		
			if(d.getId().equals(User_list.getId()) && d.getPw().equals(User_list.getPw())) {			
				login = true;
				
				break;
			}
		}
		
		if(login) {
			return "index";
			
		} else if (User_list.getId() == null || User_list.getPw() == null 
					|| User_list.getId().equals("") || User_list.getPw().equals("")){
		
			model.addAttribute("error1", "아이디 또는 비밀번호를 입력해주세요");
			return "login";
			
		} else {
			model.addAttribute("error2", "아이디 또는 비밀번호가 일치하지않습니다");
			return "login";
			
		}

	}

	// 회원가입 페이지 열기
	@RequestMapping("/signup")
	public String signup() {
		System.out.println("/signup 실행");
		return "signup";
	}
	
	// DB 정보 출력
//	@RequestMapping("/users")
//	public String users(HttpServletRequest request, Model model, MemberDTO dto) {
//		List list = memberService.getselectusers(dto);
//		
//		model.addAttribute("List", list);
//		
//		return "signup_list";
//	}
//	
//	@RequestMapping("/signup_data")
//	public String signup(@ModelAttribute MemberDTO dto, Model model) {
//		
//		int data = memberService.signup(dto);
//		System.out.println("data : " + data);
//		
//		List list = memberService.getselectusers(dto);
//			
//			model.addAttribute("list", list);
//			
//			return "/signup_list";		
//	}

	// DB에서 입력한값과 비교
	@RequestMapping("/signup_Users")
	public String signupUsers(HttpServletRequest request, Model model, @ModelAttribute MemberDTO dto) {

		System.out.println("dto_id : " + dto.getId());
		System.out.println("dto_pw : " + dto.getPw());

		// 모든 입력필드가 비어있지 않은경우
		if (dto.getName() != null && !dto.getName().isEmpty() &&
		        dto.getId() != null && !dto.getId().isEmpty() &&
		        dto.getPw() != null && !dto.getPw().isEmpty() &&
		        dto.getEmail() != null && !dto.getEmail().isEmpty() &&
		        dto.getTel() != null && !dto.getTel().isEmpty() &&
		        dto.getAddress() != null && !dto.getAddress().isEmpty()) {

			List Signup_list = memberService.getselectusers(dto);
			System.out.println("Signup_list.size : " + Signup_list.size());
			
			// 중복검사
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
			model.addAttribute("error4", "모든 정보를 입력해주세요");
			System.out.println("회원가입 실패");

			// 회원가입 페이지로 이동
			return "signup";

		}

	}
	
	// 아이디,비밀번호 찾기 페이지 열기
	@RequestMapping("/idpw")
	public String idpw() {
		System.out.println("/idpw 실행");
		
		return "idpw";
	}
	
	// 약관동의 페이지 열기
	@RequestMapping("/cheked")
	public String cheked() {
		System.out.println("/cheked 실행");
		
		return "cheked";
	}
	
	// 로그아웃 페이지 열기
	@RequestMapping("/logout")
	public String logout() {
		System.out.println("/logout 실행");
		
		return "logout";
	}
	
	// 메인 페이지 열기
	@RequestMapping("/index")
	public String index() {
		System.out.println("/index 실행");
		
		return "index";
	}
	
}