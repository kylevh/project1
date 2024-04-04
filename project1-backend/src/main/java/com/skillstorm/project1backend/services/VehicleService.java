package com.skillstorm.project1backend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.skillstorm.project1backend.models.Vehicle;
import com.skillstorm.project1backend.repositories.VehicleRepository;

@Service
public class VehicleService {
    @Autowired
    VehicleRepository vehicleRepository;

    public List<Vehicle> findAllVehicles() {
        return vehicleRepository.findAll();
    }

    public List<Vehicle> findAllByWarehouseId(Long warehouseId) {
        return vehicleRepository.findByWarehouseWarehouseId(warehouseId);
    }

    public Vehicle findById(Long id) {
        return vehicleRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Vehicle not found with id: " + id));
    }

    public Vehicle save(Vehicle vehicle) {
        return vehicleRepository.save(vehicle);
    }

    public void deleteById(Long id) {
        vehicleRepository.deleteById(id);
    }

    public Vehicle reserveVehicle(Long vehicleId) {
        Vehicle vehicle = vehicleRepository.findById(vehicleId).orElseThrow(() -> new RuntimeException("Vehicle not found with id: " + vehicleId));
        vehicle.setIsReserved(true);
        return vehicleRepository.save(vehicle);
    }

    public void deleteByWarehouseId(Long warehouseId) {
        vehicleRepository.findByWarehouseWarehouseId(warehouseId).forEach(vehicleRepository::delete);
    }
}
