package com.skillstorm.project1backend.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.skillstorm.project1backend.models.WarehouseAccess;


@Repository
public interface WarehouseAccessRepository extends JpaRepository<WarehouseAccess, Integer> {

}
