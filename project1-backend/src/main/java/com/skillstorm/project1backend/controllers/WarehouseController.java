package com.skillstorm.project1backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skillstorm.project1backend.models.Warehouse;
import com.skillstorm.project1backend.services.WarehouseService;

@RestController
@RequestMapping("/api/warehouses")
public class WarehouseController {

    @Autowired
    private WarehouseService warehouseService;

    // Lists all warehouses in database and their stats
    @GetMapping
    public ResponseEntity<List<Warehouse>> getAllWarehouses() {
        List<Warehouse> warehouses = warehouseService.findAll();
        return ResponseEntity.ok(warehouses);
    }

    // Gets a specific warehouse by id
    @GetMapping("/{id}")
    public ResponseEntity<Warehouse> getWarehouseById(@PathVariable Long id) {
        Warehouse warehouse = warehouseService.findById(id);
        return ResponseEntity.ok(warehouse);
    }

    // Will create a new warehouse, must input fields like the name and location
    @PostMapping
    public ResponseEntity<Warehouse> createWarehouse(@RequestBody Warehouse warehouse) {
        Warehouse createdWarehouse = warehouseService.save(warehouse);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdWarehouse);
    }

    // Will update a specific warehouse by id, must input fields like the name and
    // location
    @PutMapping("/{id}")
    public ResponseEntity<Warehouse> updateWarehouse(@PathVariable Long id, @RequestBody Warehouse warehouse) {
        warehouse.setWarehouseId(id);
        Warehouse updatedWarehouse = warehouseService.save(warehouse);
        return ResponseEntity.ok(updatedWarehouse);
    }

    // Will delete a specific warehouse by id
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteWarehouse(@PathVariable Long id) {
        warehouseService.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    // Check if a vehicle fits in a warehouse
    // @GetMapping("/{warehouseId}/vehicles/{vehicleId}/fit")
    // public ResponseEntity<Boolean> doesVehicleFitInWarehouse(@PathVariable Long warehouseId, @PathVariable Long vehicleId) {
    //     boolean doesFit = warehouseService.doesVehicleFitInWarehouse(warehouseId, vehicleId);
    //     return ResponseEntity.ok(doesFit);
    // }
}
