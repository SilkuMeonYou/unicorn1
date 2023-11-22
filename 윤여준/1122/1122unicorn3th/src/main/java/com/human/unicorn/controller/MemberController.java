package com.human.unicorn.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

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

		// �Է��ʵ尡 ���� �ƴϸ�
		if (dto.getId() != null && !dto.getId().equals("") && dto.getPw() != null && !dto.getPw().equals("")) {

//			List<MemberDTO> list = memberService.getselectusers(dto);
			System.out.println(dto.getId());
			System.out.println(dto.getPw());

			MemberDTO user_list = memberService.loginUsers(dto);

			// ���ǿ� ���
			HttpSession session = request.getSession();
			session.setAttribute("list", user_list);

			// ��ġ����������
			if (user_list == null) {
				model.addAttribute("error2", "���̵� �Ǵ� ��й�ȣ�� ��ġ�����ʽ��ϴ�");

//				System.out.println("User_list_id : " + user_list.getId());
//				System.out.println("User_list_pw : " + user_list.getPw());
//				System.out.println("User_list_name : " + user_list.getName());
//				System.out.println("User_list_email : " + user_list.getEmail());

				// �α��� ��������
				return "login";

			} else {
				return "main";
			}

		} else {
			model.addAttribute("error1", "���̵� �Ǵ� ��й�ȣ�� �Է����ּ���");

			return "login";
		}
	}

	// ȸ������ ������ ����
	@RequestMapping("/signup")
	public String signup() {
		System.out.println("/signup ����");
		return "signup";
	}

	// DB���� �Է��Ѱ��� ��
	@RequestMapping("/signup_Users")
	public String signupUsers(HttpServletRequest request, Model model, @ModelAttribute MemberDTO dto) {

		// ��� �Է��ʵ尡 ������� �������
		if (dto.getName() != null && !dto.getName().isEmpty() && dto.getId() != null && !dto.getId().isEmpty()
				&& dto.getPw() != null && !dto.getPw().isEmpty() && dto.getEmail() != null && !dto.getEmail().isEmpty()
				&& dto.getTel() != null && !dto.getTel().isEmpty() && dto.getAddress() != null
				&& !dto.getAddress().isEmpty()) {

			MemberDTO signup_list = memberService.loginUsers(dto);

			System.out.println("signup_list.size : " + signup_list);

			// �ߺ��˻�
			if (signup_list != null) {
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

	// ���̵� ã��
	@RequestMapping("/find_id")
	public String find_id(HttpServletRequest request, Model model, @ModelAttribute MemberDTO dto) {
		System.out.println("/find_id ����");

		if (dto.getName() != null && !dto.getName().equals("") && dto.getEmail() != null
				&& !dto.getEmail().equals("")) {

			System.out.println("Name : " + dto.getName());
			System.out.println("Email : " + dto.getEmail());

			MemberDTO list = memberService.loginUsers(dto);

			if (list == null) {
//				model.addAttribute("id", "���̵��" + user_list.getId() + "�Դϴ�");
				return "idpw";

			} else {
				return "idpw";
			}
		} else {
			model.addAttribute("error5", "������ �Է����ּ���");
				return "idpw";
			
		}
	}

	// ��й�ȣ ã��
	@RequestMapping("/find_pw")
	public String find_pw(HttpServletRequest request, Model model, @ModelAttribute MemberDTO dto) {
		System.out.println("/find_pw ����");

		System.out.println("Name : " + dto.getName());
		System.out.println("Email : " + dto.getEmail());

		MemberDTO user_list = memberService.loginUsers(dto);

		if (user_list == null) {
			model.addAttribute("error5", "������ �Է����ּ���");
			return "idpw";
		}

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
	@RequestMapping("/main")
	public String index() {
		System.out.println("/main ����");

		return "main";
	}

}