package net.itinajero.app.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.LinkedList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import net.itinajero.app.model.Pelicula;
import net.itinajero.app.util.Utileria;

@Controller
public class HomeController {

	private SimpleDateFormat dateFormat= new SimpleDateFormat("dd-MM-yyyy");
	
	
	@RequestMapping(value="/home", method=RequestMethod.GET)
	public String goHome(){
		return "home";
	}
	
	@RequestMapping(value="/search",method = RequestMethod.POST)
	public String buscar(@RequestParam("fecha") String fecha,Model model) {
		
		List<String> listaFechas= Utileria.getNextDays(4);
		System.out.println(listaFechas);
		List<Pelicula> peliculas= getLista(); 
		
		model.addAttribute("fechaBusqueda",fecha);
		model.addAttribute("fechas",listaFechas);
		model.addAttribute("peliculas",peliculas);
		
		System.out.println("Fecha Seleccionada: "+fecha);
		return "home";
	}
	
	@RequestMapping(value="/", method=RequestMethod.GET)
	public String mostrarPrincipal(Model model) {
		
		List<String> listaFechas= Utileria.getNextDays(4);
		System.out.println(listaFechas);
		List<Pelicula> peliculas= getLista(); 
		//List<String> peliculas=new LinkedList<>();
		
		/*peliculas.add("Rapidos y Furiosos");
		peliculas.add("El aro 2");
		peliculas.add("Matrix");*/
		
		model.addAttribute("fechaBusqueda",dateFormat.format(new Date()));
		model.addAttribute("fechas",listaFechas);
		model.addAttribute("peliculas",peliculas);
		
		return "home";
	}
	
	//@RequestMapping(value="/detail/{id}/{fecha}",method=RequestMethod.GET)
	@RequestMapping(value="/detail",method=RequestMethod.GET)
	public String mostrarDetalle(Model model,@RequestParam("idMovie") int idPelicula,@RequestParam("fecha") String fecha) {
		
		System.out.println("Buscando Horarios para la pelicula: "+idPelicula);
		System.out.println("Para la fecha: "+fecha);
		
		
		//TODO Buscar en la base de datos los horarios.
		/*String tituloPelicula="Rapidos y Furiosos";
		int duracion= 136;
		double precioEntrada= 50;
		
		model.addAttribute("titulo",tituloPelicula);
		model.addAttribute("duracion",duracion);
		model.addAttribute("precio",precioEntrada);*/
		
		return "detalle";
	}
	
	private List<Pelicula> getLista(){
		SimpleDateFormat formatter=new SimpleDateFormat("dd-MM-yyyy");
		List<Pelicula> lista=null;
		
		try {
			lista=new LinkedList<>();
			Pelicula pelicula1=new Pelicula();
			pelicula1.setId(1);
			pelicula1.setTitulo("Avengers End Game");
			pelicula1.setDuracion(180);
			pelicula1.setClasificacion("A");
			pelicula1.setGenero("Acción");
			pelicula1.setFechaEstreno(formatter.parse("02-05-2017"));
			pelicula1.setImagen("endgame");
			pelicula1.setStatus("Activa");
			
			Pelicula pelicula2=new Pelicula();
			pelicula2.setId(2);
			pelicula2.setTitulo("Star Wars");
			pelicula2.setDuracion(140);
			pelicula2.setClasificacion("B");
			pelicula2.setGenero("Acción");
			pelicula2.setFechaEstreno(formatter.parse("02-05-2017"));
			pelicula2.setImagen("star_wars");
			pelicula2.setStatus("Inactiva");
			
			Pelicula pelicula3=new Pelicula();
			pelicula3.setId(3);
			pelicula3.setTitulo("John Wick");
			pelicula3.setDuracion(120);
			pelicula3.setClasificacion("M");
			pelicula3.setGenero("Acción");
			pelicula3.setFechaEstreno(formatter.parse("02-05-2017"));
			pelicula3.setImagen("john");
			pelicula3.setStatus("Activa");
			
			Pelicula pelicula4=new Pelicula();
			pelicula4.setId(4);
			pelicula4.setTitulo("Kong La isla Calavera");
			pelicula4.setDuracion(120);
			pelicula4.setClasificacion("B");
			pelicula4.setGenero("Aventura");
			pelicula4.setFechaEstreno(formatter.parse("02-05-2017"));
			pelicula4.setImagen("estreno4");
			pelicula4.setStatus("Activa");
			
			Pelicula pelicula5=new Pelicula();
			pelicula5.setId(5);
			pelicula5.setTitulo("Life: Vida Inteligente");
			pelicula5.setDuracion(104);
			pelicula5.setClasificacion("B");
			pelicula5.setGenero("Drama");
			pelicula5.setFechaEstreno(formatter.parse("02-05-2017"));
			pelicula5.setImagen("estreno5");
			pelicula5.setStatus("Activa");
			
			lista.add(pelicula1);
			lista.add(pelicula2);
			lista.add(pelicula3);
			lista.add(pelicula4);
			lista.add(pelicula5);
			
			return lista;
		
		}catch (Exception e) {
			System.err.println(e.getMessage());
			return null;
		}
		
	}
}
