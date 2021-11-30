package com.example.Register.controllers;

import com.example.Register.exceptions.SaleRegisterNotFoundException;
import com.example.Register.repositories.SaleRegisterRepository;
import com.example.Register.models.SaleRegister;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
@RestController
public class SaleRegisterController {
    private final SaleRegisterRepository repository;

    public SaleRegisterController(SaleRegisterRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/saleregisters/{nombrecliente}") // convert the next method to an endpoint
    List<SaleRegister> getSaleRegisterByCliente(@PathVariable String nombrecliente){
        List<SaleRegister> saleRegister = repository.getByNombreCliente(nombrecliente);
        int corroborate = 0;
        int corroborated = 0;
        for(SaleRegister i : saleRegister){
            if(i.getNombreCliente().equals(nombrecliente)){
                corroborate = 0;
                corroborated = 1;
            }
            else{
                if (corroborated == 0){
                    corroborate = 1;
                }
            }
        }
        if (corroborate == 0){
            return this.repository.getByNombreCliente(nombrecliente);
        }
        else{
            throw new SaleRegisterNotFoundException("El cliente no existe");
        }
    }

    @GetMapping("/saleregistersc/{proveedor}/{nombrecliente}") // convert the next method to an endpoint
    List<SaleRegister> getSaleRegisterByProveedorAndCliente(@PathVariable String proveedor, @PathVariable String nombrecliente){
        return this.repository.getByProveedorAndNombreCliente(proveedor, nombrecliente);
    }
    @GetMapping("/saleregistersp/{proveedor}/{nombreproducto}") // convert the next method to an endpoint
    List<SaleRegister> getSaleRegisterByProveedorAndProducto(@PathVariable String proveedor, @PathVariable String nombreproducto){
        return this.repository.getByProveedorAndNombreProducto(proveedor, nombreproducto);
    }
    @GetMapping("/saleregisterscp/{proveedor}/{nombrecliente}/{nombreproducto}") // convert the next method to an endpoint
    List<SaleRegister> getSaleRegisterByNombreProductoAndNombreClienteAndProveedor(@PathVariable String proveedor, @PathVariable String nombrecliente,@PathVariable String nombreproducto){
        return this.repository.getByNombreProductoAndNombreClienteAndProveedor(nombreproducto,nombrecliente,proveedor);
    }
    @PostMapping("/saleregister")
    SaleRegister newSaleRegister(@RequestBody SaleRegister saleregisters){
        return this.repository.save(saleregisters);
    }

    @DeleteMapping("/saleregister/{proveedor}/{registroID}")
    public void deleteSaleRegister(@PathVariable String proveedor, @PathVariable String registroID){
        repository.deleteByProveedorAndRegistroID(proveedor, registroID);
    }
    /*
    @PutMapping("/saleRegister/{registroID}")
    public SaleRegister updateRegister(@PathVariable String registroID, @RequestBody SaleRegister newSRegister){
        SaleRegister oldSRegister = repository.findById(registroID).orElse(null);
        oldSRegister.setCantidad(newSRegister.getCantidad());
        oldSRegister.setFecha(newSRegister.getFecha());
        oldSRegister.setNombreCliente(newSRegister.getNombreCliente());
        oldSRegister.setProveedor(newSRegister.getProveedor());
        oldSRegister.setNombreProducto(newSRegister.getNombreProducto());
        oldSRegister.setPromocion(newSRegister.getPromocion());
        oldSRegister.setPrecio(newSRegister.getPrecio());
        oldSRegister.setTotal(newSRegister.getPrecio() * newSRegister.getCantidad());
        return repository.save(oldSRegister);
    }*/
}
