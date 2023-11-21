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

	// �α��� ������ ����
	@RequestMapping("/login")
	public String login() {
		System.out.println("/login ����");
		return "login";
	}

	// DB���� �Է��Ѱ��� ���ؼ�
	// �����ϸ� ����, �����ϸ� �α��������� �̵�
	@RequestMapping("/login_Users")
	public String loginUsers(HttpServletRequest request, Model model, @ModelAttribute MemberDTO dto) {

		List User_list = memberService.loginUsers(dto);

		System.out.println("User_list.size : " + User_list.size());
		System.out.println("dto_id : " + dto.getId());
		System.out.println("dto_pw : " + dto.getPw());

		if (User_list.size() != 0) {
			return "main";
		} else if(dto.getId() == null || dto.getPw() == null) {
			model.addAttribute("error1", "���̵� �Ǵ� ��й�ȣ�� �Է����ּ���");
			return "login";
		} else {
			model.addAttribute("error2", "���̵� �Ǵ� ��й�ȣ�� ��ġ�����ʽ��ϴ�");
			return "login";
			
		}

	}


	//Ȯ���� ������ ��� ��	
	// DB ���� ���
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
	
	

	// DB���� �Է��Ѱ��� ��
	//
	@RequestMapping("/signup")
	public String signupUsers(HttpServletRequest request, Model model, @ModelAttribute MemberDTO dto) {

		System.out.println("dto_id : " + dto.getId());
		System.out.println("dto_id : " + dto.getPw());

		// ��� �Է��ʵ尡 ������� �������
		if (dto.getName() != null && dto.getId() != null && dto.getPw() != null && dto.getEmail() != null
				&& dto.getTel() != null && dto.getAddress() != null) {

			List Signup_list = memberService.getselectusers(dto);
			System.out.println("Signup_list.size : " + Signup_list);
			
			// ���̵� �ߺ��˻�
			if (Signup_list.size() != 0) {
				model.addAttribute("error3", "�̹� �����ϴ� ȸ���Դϴ�");
				return "signup";
			}

			// �ߺ����������� ���� ����
			int result = memberService.signup(dto);
			System.out.println("ȸ������ �Ϸ�");
			return "login";

			// ����ִ� ���
		} else {
			System.out.println("ȸ������ ����");
			model.addAttribute("error4", "��� ������ �Է����ּ���");

			// ȸ������ �������� �̵�
			return "signup";
//			return "redirect:/signup";

		}

	}
}