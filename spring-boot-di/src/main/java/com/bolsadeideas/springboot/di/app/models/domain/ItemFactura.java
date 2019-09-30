package com.bolsadeideas.springboot.di.app.models.domain;

public class ItemFactura {

	private Producto producto;
	private int cantidad;
	
	public ItemFactura(Producto producto, int cantidad) {
		this.producto = producto;
		this.cantidad = cantidad;
	}

	public ItemFactura() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Producto getProducto() {
		return producto;
	}

	public void setProducto(Producto producto) {
		this.producto = producto;
	}

	public int getCantidad() {
		return cantidad;
	}

	public void setCantidad(int cantidad) {
		this.cantidad = cantidad;
	}
	
	public float calcularImporte() {
		return cantidad * producto.getPrecio();
	}
}
