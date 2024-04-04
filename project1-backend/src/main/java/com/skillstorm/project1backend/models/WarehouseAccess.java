package com.skillstorm.project1backend.models;

import jakarta.persistence.*;

@Entity
@Table(name = "WAREHOUSE_ACCESS")
public class WarehouseAccess {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "access_id")
    private Long accessId;

    @ManyToOne
    @JoinColumn(name = "admin_id")
    private Administrator administrator;

    
    public WarehouseAccess(Long accessId, Administrator administrator, Warehouse warehouse) {
        this.accessId = accessId;
        this.administrator = administrator;
        this.warehouse = warehouse;
    }

    public WarehouseAccess() {
    }

    public Long getAccessId() {
        return accessId;
    }

    public void setAccessId(Long accessId) {
        this.accessId = accessId;
    }

    public Administrator getAdministrator() {
        return administrator;
    }

    public void setAdministrator(Administrator administrator) {
        this.administrator = administrator;
    }

    public Warehouse getWarehouse() {
        return warehouse;
    }

    public void setWarehouse(Warehouse warehouse) {
        this.warehouse = warehouse;
    }

    @ManyToOne
    @JoinColumn(name = "warehouse_id")
    private Warehouse warehouse;

    // Constructors, getters, and setters
}