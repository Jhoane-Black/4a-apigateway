package com.example.Register.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.Register.models.SaleRegister;

import java.util.List;

public interface SaleRegisterRepository extends MongoRepository<SaleRegister, String> {
    List<SaleRegister> getByNombreCliente(String nombreCliente);
    List<SaleRegister> getByProveedorAndNombreCliente(String proveedor, String nombreCliente);
    List<SaleRegister> getByProveedorAndNombreProducto(String proveedor, String nombreProducto);
    List<SaleRegister> getByNombreProductoAndNombreClienteAndProveedor(String nombreProducto,String nombreCliente,String proveedor);
    List<SaleRegister> deleteByProveedorAndRegistroID(String proveedor, String registroID);
}
