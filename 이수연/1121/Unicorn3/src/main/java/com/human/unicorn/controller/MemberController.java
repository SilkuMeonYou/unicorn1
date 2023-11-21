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

		List<MemberDTO> list = memberService.getselectusers(dto);
		
		MemberDTO User_list = memberService.loginUsers(dto);
		
		// ���ǿ� ���
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
		
			model.addAttribute("error1", "���̵� �Ǵ� ��й�ȣ�� �Է����ּ���");
			return "login";
			
		} else {
			model.addAttribute("error2", "���̵� �Ǵ� ��й�ȣ�� ��ġ�����ʽ��ϴ�");
			return "login";
			
		}

	}

	// ȸ������ ������ ����
	@RequestMapping("/signup")
	public String signup() {
		System.out.println("/signup ����");
		return "signup";
	}
	
	// DB ���� ���
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

	// DB���� �Է��Ѱ��� ��
	@RequestMapping("/signup_Users")
	public String signupUsers(HttpServletRequest request, Model model, @ModelAttribute MemberDTO dto) {

		System.out.println("dto_id : " + dto.getId());
		System.out.println("dto_pw : " + dto.getPw());

		// ��� �Է��ʵ尡 ������� �������
		if (dto.getName() != null && !dto.getName().isEmpty() &&
		        dto.getId() != null && !dto.getId().isEmpty() &&
		        dto.getPw() != null && !dto.getPw().isEmpty() &&
		        dto.getEmail() != null && !dto.getEmail().isEmpty() &&
		        dto.getTel() != null && !dto.getTel().isEmpty() &&
		        dto.getAddress() != null && !dto.getAddress().isEmpty()) {

			List Signup_list = memberService.getselectusers(dto);
			System.out.println("Signup_list.size : " + Signup_list.size());
			
			// �ߺ��˻�
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
			model.addAttribute("error4", "��� ������ �Է����ּ���");
			System.out.println("ȸ������ ����");

			// ȸ������ �������� �̵�
			return "signup";

		}

	}
	
	// ���̵�,��й�ȣ ã�� ������ ����
	@RequestMapping("/idpw")
	public String idpw() {
		System.out.println("/idpw ����");
		
		return "idpw";
	}
	
	// ������� ������ ����
	@RequestMapping("/cheked")
	public String cheked() {
		System.out.println("/cheked ����");
		
		return "cheked";
	}
	
	// �α׾ƿ� ������ ����
	@RequestMapping("/logout")
	public String logout() {
		System.out.println("/logout ����");
		
		return "logout";
	}
	
	// ���� ������ ����
	@RequestMapping("/index")
	public String index() {
		System.out.println("/index ����");
		
		return "index";
	}
	
}