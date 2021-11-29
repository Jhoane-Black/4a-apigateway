package com.example.Register.models;

import java.util.Date;
import org.springframework.data.annotation.Id;

public class SaleRegister {
    @Id
    private String registroID;
    private String nombreCliente;
    private String proveedor;
    private String nombreProducto;
    private Integer cantidad;
    private Integer precio;
    private Integer total;
    private Date fecha;
    private String promocion;

    public SaleRegister(String registroID, String nombreCliente, String proveedor, String nombreProducto, Integer cantidad, Integer precio, Date fecha, String promocion) {
        this.registroID = registroID;
        this.nombreCliente = nombreCliente;
        this.proveedor = proveedor;
        this.nombreProducto = nombreProducto;
        this.cantidad = cantidad;
        this.precio = precio;
        this.total = cantidad * precio;
        this.fecha = fecha;
        this.promocion = promocion;

    }

    public String getRegistroID() {
        return registroID;
    }
    /*
    public void setRegistroID(String registroID) {
        this.registroID = registroID;
    }
    */

    public String getNombreCliente() {
        return nombreCliente;
    }

    public void setNombreCliente(String nombreCliente) {
        this.nombreCliente = nombreCliente;
    }

    public String getProveedor() {
        return proveedor;
    }

    public void setProveedor(String proveedor) {
        this.proveedor = proveedor;
    }

    public String getNombreProducto() {
        return nombreProducto;
    }

    public void setNombreProducto(String nombreProducto) {
        this.nombreProducto = nombreProducto;
    }

    public Integer getCantidad() {
        return cantidad;
    }

    public void setCantidad(Integer cantidad) {
        this.cantidad = cantidad;
    }

    public Integer getPrecio() {
        return precio;
    }

    public void setPrecio(Integer precio) {
        this.precio = precio;
    }

    public Integer getTotal() {
        return total;
    }

    public void setTotal(Integer total) {
        this.total = total;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public String getPromocion() {
        return promocion;
    }

    public void setPromocion(String promocion) {
        this.promocion = promocion;
    }
}
