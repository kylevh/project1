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

import com.skillstorm.project1backend.models.Vehicle;
import com.skillstorm.project1backend.models.Warehouse;
import com.skillstorm.project1backend.services.VehicleService;
import com.skillstorm.project1backend.services.WarehouseService;

@RestController
@RequestMapping("/api/vehicles")
public class VehicleController {

    @Autowired
    private VehicleService vehicleService;
    @Autowired
    private WarehouseService warehouseService;

    
    // Gets all vehicles in entire database
    @GetMapping("/all")
    public ResponseEntity<List<Vehicle>> getAllVehicles() {
        List<Vehicle> vehicles = vehicleService.findAllVehicles();
        return ResponseEntity.ok(vehicles);
    }

    // Get a vehicle by id
    @GetMapping("/{id}")
    public ResponseEntity<Vehicle> getVehicleById(@PathVariable Long id) {
        Vehicle vehicle = vehicleService.findById(id);
        return ResponseEntity.ok(vehicle);
    }

    // Creates a new vehicle
    @PostMapping
    public ResponseEntity<Vehicle> createVehicle(@RequestBody Vehicle vehicle) {
        Warehouse warehouse = vehicle.getWarehouse();
        if (warehouse == null || warehouse.getWarehouseId() == null || !warehouseService.existsById(warehouse.getWarehouseId())) {
            Vehicle errorVehicle = new Vehicle();
            System.out.println(warehouse + " " + warehouse.getWarehouseId() + " " + warehouseService.existsById(warehouse.getWarehouseId()));
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorVehicle);
        }
        vehicle.setWarehouse(warehouse);
        Vehicle createdVehicle = vehicleService.save(vehicle);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdVehicle);
    }

    // Updates the vehicle
    @PutMapping("/{id}")
    public ResponseEntity<Vehicle> updateVehicle(@PathVariable Long id, @RequestBody Vehicle vehicle) {
        vehicle.setId(id);
        Vehicle updatedVehicle = vehicleService.save(vehicle);
        return ResponseEntity.ok(updatedVehicle);
    }

    // Will delete vehicle
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteVehicle(@PathVariable Long id) {
        vehicleService.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    // Reserve a vehicle
    @PutMapping("/{vehicleId}/reserve")
    public ResponseEntity<Vehicle> reserveVehicle(@PathVariable Long vehicleId) {
        Vehicle reservedVehicle = vehicleService.reserveVehicle(vehicleId);
        return ResponseEntity.ok(reservedVehicle);
    }

    // Get all vehicles in a warehouse
    @GetMapping("/warehouse/{warehouseId}")
    public ResponseEntity<List<Vehicle>> getVehiclesByWarehouse(@PathVariable Long warehouseId) {
        List<Vehicle> vehicles = vehicleService.findAllByWarehouseId(warehouseId);
        return ResponseEntity.ok(vehicles);
    }
}
