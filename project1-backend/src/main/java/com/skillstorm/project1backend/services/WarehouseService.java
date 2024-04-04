package com.skillstorm.project1backend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skillstorm.project1backend.models.Warehouse;
import com.skillstorm.project1backend.repositories.WarehouseRepository;

@Service
public class WarehouseService {
    @Autowired
    private  WarehouseRepository warehouseRepository;

    @Autowired
    private VehicleService vehicleService;

    public List<Warehouse> findAll() {
        return warehouseRepository.findAll();
    }

    public Warehouse findById(Long id) {
        return warehouseRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Warehouse not found with id: " + id));
    }

    public Warehouse save(Warehouse warehouse) {
        return warehouseRepository.save(warehouse);
    }

    public void deleteById(Long id) {
        vehicleService.deleteByWarehouseId(id);
        warehouseRepository.deleteById(id);
    }

    public boolean existsById(Long warehouseId) {
        return warehouseRepository.findById(warehouseId).isPresent();
    }
}