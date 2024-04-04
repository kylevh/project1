package com.skillstorm.project1backend.dtos;

public class WarehouseAccessDTO {
    private Long accessId;
    private Long adminId;
    private Long warehouseId;


    public WarehouseAccessDTO() {
    }
    public WarehouseAccessDTO(Long accessId, Long adminId, Long warehouseId) {
        this.accessId = accessId;
        this.adminId = adminId;
        this.warehouseId = warehouseId;
    }
    public Long getAccessId() {
        return accessId;
    }
    public void setAccessId(Long accessId) {
        this.accessId = accessId;
    }
    public Long getAdminId() {
        return adminId;
    }
    public void setAdminId(Long adminId) {
        this.adminId = adminId;
    }
    public Long getWarehouseId() {
        return warehouseId;
    }
    public void setWarehouseId(Long warehouseId) {
        this.warehouseId = warehouseId;
    }
    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((accessId == null) ? 0 : accessId.hashCode());
        result = prime * result + ((adminId == null) ? 0 : adminId.hashCode());
        result = prime * result + ((warehouseId == null) ? 0 : warehouseId.hashCode());
        return result;
    }
    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        WarehouseAccessDTO other = (WarehouseAccessDTO) obj;
        if (accessId == null) {
            if (other.accessId != null)
                return false;
        } else if (!accessId.equals(other.accessId))
            return false;
        if (adminId == null) {
            if (other.adminId != null)
                return false;
        } else if (!adminId.equals(other.adminId))
            return false;
        if (warehouseId == null) {
            if (other.warehouseId != null)
                return false;
        } else if (!warehouseId.equals(other.warehouseId))
            return false;
        return true;
    }

    
}
