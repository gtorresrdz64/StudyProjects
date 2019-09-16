package com.bolsadeideas.springboot.web.app.controllers;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/params")
public class EjemploParamsController {
	
	@GetMapping("/")
	public String index() {
		return "params/index";
	}

	@GetMapping("/string")
	public String param(@RequestParam(name="texto",required=false,defaultValue="empty") String texto, Model model) {
		
		model.addAttribute("resultado", "El texto enviado es: "+texto);
		
		return "params/ver";
	}
	
	@GetMapping("/mix-params")
	public String param(@RequestParam String saludo, @RequestParam int numero, Model model) {
		
		model.addAttribute("resultado", "El saludo es: "+saludo + " y el numero es "+numero);
		
		return "params/ver";
	}
	
	@GetMapping("/mix-params-request")
	public String param(HttpServletRequest request, Model model) {
		
		String saludo= request.getParameter("saludo");
		int numero=0;
				
		try {		
		numero=	Integer.parseInt(request.getParameter("numero"));
		}catch(NumberFormatException ex) {
			
		}
		model.addAttribute("resultado", "El saludo es: "+saludo + " y el numero es "+numero);
		
		return "params/ver";
	}
	
}
