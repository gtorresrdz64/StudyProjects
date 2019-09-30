package com.bolsadeideas.springboot.di.app;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

import com.bolsadeideas.springboot.di.app.models.domain.ItemFactura;
import com.bolsadeideas.springboot.di.app.models.domain.Producto;
import com.bolsadeideas.springboot.di.app.models.services.IServicio;
import com.bolsadeideas.springboot.di.app.models.services.MiServicio;
import com.bolsadeideas.springboot.di.app.models.services.MiServicioComplejo;

@Configuration
public class AppConfig {

	@Bean("miServicioSimple")
	@Primary
	public IServicio registarMiServicio() {
		return new MiServicio();
	}
	
	@Bean("miServicioComplejo")
	public IServicio registarMiServicioComplejo() {
		return new MiServicioComplejo();
	}
	
	@Bean("default")
	public List<ItemFactura> registrarItems(){
		Producto producto1=new Producto("Camara Sony", 100);
		Producto producto2=new Producto("Bicicleta Bianchi aro 26", 200);
		
		ItemFactura linea1=new ItemFactura(producto1,2);
		ItemFactura linea2=new ItemFactura(producto2,4);
		
		return Arrays.asList(linea1, linea2);
	}
	
	@Bean("itemsFacturaOficina")
	@Primary
	public List<ItemFactura> registrarItemsOficina(){
		Producto producto1=new Producto("Minitor LG LCD 24", 250);
		Producto producto2=new Producto("Notebook Asus", 500);
		Producto producto3=new Producto("Impresora HP Multifuncional", 500);
		Producto producto4=new Producto("Escritorio Oficina", 500);
		
		ItemFactura linea1=new ItemFactura(producto1,2);
		ItemFactura linea2=new ItemFactura(producto2,1);
		ItemFactura linea3=new ItemFactura(producto3,1);
		ItemFactura linea4=new ItemFactura(producto4,1);
		
		return Arrays.asList(linea1, linea2,linea3,linea4);
	}
	
}
