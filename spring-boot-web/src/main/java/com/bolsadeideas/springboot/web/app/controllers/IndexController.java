package com.bolsadeideas.springboot.web.app.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;

import com.bolsadeideas.springboot.web.app.models.Usuario;

@Controller
@RequestMapping("/app")
public class IndexController {

	@Value("${texto.indexcontroller.index.titulo}")
	private String textoIndex;
	@Value("${texto.indexcontroller.perfil.titulo}")
	private String textoPerfil;
	@Value("${texto.indexcontroller.listar.titulo}")
	private String textoListar;
	
	
	@GetMapping({"/index","/","/home"})
	public String index(Model model) {
		model.addAttribute("titulo",textoIndex);
		return "index";
	}
	
	@RequestMapping("/perfil")
	public String perfil(Model model) {
		
		Usuario usuario=new Usuario();
		usuario.setApellido("Torres");
		usuario.setNombre("Gustavo");
		usuario.setEmail("gtorresrodrig64@gmail.com");
		
		model.addAttribute("titulo",textoPerfil+usuario.getNombre());
		model.addAttribute("usuario",usuario);
		
		return "perfil";
	}
	
	@RequestMapping("/listar")
	public String listar(Model model) {	
		
		model.addAttribute("titulo",textoListar);

		return "listar";
	}
	
	@ModelAttribute("usuarios")
	public List<Usuario> poblarUsuarios(){
		
		List<Usuario> usuarios=new ArrayList<>();
		usuarios.add(new Usuario("Gustavo","Torres","gtorresrodrig64@gmail.com"));
		usuarios.add(new Usuario("Persona1","Apellido1","personapellido1@gmail.com"));
		usuarios.add(new Usuario("Persona2","Apellido2","personaapellido2@gmail.com"));
		
		return usuarios;
		
	}
	
}
