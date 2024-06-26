package com.skillstorm.project1backend.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.skillstorm.project1backend.models.Vehicle;

@Repository
public interface VehicleRepository extends JpaRepository<Vehicle, Long>{
    List<Vehicle> findByWarehouseWarehouseId(Long warehouseId);
}
