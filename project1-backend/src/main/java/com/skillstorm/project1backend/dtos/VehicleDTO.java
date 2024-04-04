package com.skillstorm.project1backend.dtos;

public class VehicleDTO {
    private Long id;
    private String model;
    private Integer year;
    private String color;
    private String vin;
    private Double width;
    private Double length;
    private Double height;
    private Boolean isReserved;
    private Boolean isSoftDeleted;
    private Long warehouseId;

    
    public VehicleDTO() {
    }

    

    public VehicleDTO(Long id, String model, Integer year, String color, String vin, Double width, Double length,
            Double height, Boolean isReserved, Boolean isSoftDeleted, Long warehouseId) {
        this.id = id;
        this.model = model;
        this.year = year;
        this.color = color;
        this.vin = vin;
        this.width = width;
        this.length = length;
        this.height = height;
        this.isReserved = isReserved;
        this.isSoftDeleted = isSoftDeleted;
        this.warehouseId = warehouseId;
    }



    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getModel() {
        return model;
    }
    public void setModel(String model) {
        this.model = model;
    }
    public Integer getYear() {
        return year;
    }
    public void setYear(Integer year) {
        this.year = year;
    }
    public String getColor() {
        return color;
    }
    public void setColor(String color) {
        this.color = color;
    }
    public String getVin() {
        return vin;
    }
    public void setVin(String vin) {
        this.vin = vin;
    }
    public Double getWidth() {
        return width;
    }
    public void setWidth(Double width) {
        this.width = width;
    }
    public Double getLength() {
        return length;
    }
    public void setLength(Double length) {
        this.length = length;
    }
    public Double getHeight() {
        return height;
    }
    public void setHeight(Double height) {
        this.height = height;
    }
    public Boolean getIsReserved() {
        return isReserved;
    }
    public void setIsReserved(Boolean isReserved) {
        this.isReserved = isReserved;
    }
    public Boolean getIsSoftDeleted() {
        return isSoftDeleted;
    }
    public void setIsSoftDeleted(Boolean isSoftDelete) {
        this.isSoftDeleted = isSoftDelete;
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
        result = prime * result + ((id == null) ? 0 : id.hashCode());
        result = prime * result + ((model == null) ? 0 : model.hashCode());
        result = prime * result + ((year == null) ? 0 : year.hashCode());
        result = prime * result + ((color == null) ? 0 : color.hashCode());
        result = prime * result + ((vin == null) ? 0 : vin.hashCode());
        result = prime * result + ((width == null) ? 0 : width.hashCode());
        result = prime * result + ((length == null) ? 0 : length.hashCode());
        result = prime * result + ((height == null) ? 0 : height.hashCode());
        result = prime * result + ((isReserved == null) ? 0 : isReserved.hashCode());
        result = prime * result + ((isSoftDeleted == null) ? 0 : isSoftDeleted.hashCode());
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
        VehicleDTO other = (VehicleDTO) obj;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        if (model == null) {
            if (other.model != null)
                return false;
        } else if (!model.equals(other.model))
            return false;
        if (year == null) {
            if (other.year != null)
                return false;
        } else if (!year.equals(other.year))
            return false;
        if (color == null) {
            if (other.color != null)
                return false;
        } else if (!color.equals(other.color))
            return false;
        if (vin == null) {
            if (other.vin != null)
                return false;
        } else if (!vin.equals(other.vin))
            return false;
        if (width == null) {
            if (other.width != null)
                return false;
        } else if (!width.equals(other.width))
            return false;
        if (length == null) {
            if (other.length != null)
                return false;
        } else if (!length.equals(other.length))
            return false;
        if (height == null) {
            if (other.height != null)
                return false;
        } else if (!height.equals(other.height))
            return false;
        if (isReserved == null) {
            if (other.isReserved != null)
                return false;
        } else if (!isReserved.equals(other.isReserved))
            return false;
        if (isSoftDeleted == null) {
            if (other.isSoftDeleted != null)
                return false;
        } else if (!isSoftDeleted.equals(other.isSoftDeleted))
            return false;
        if (warehouseId == null) {
            if (other.warehouseId != null)
                return false;
        } else if (!warehouseId.equals(other.warehouseId))
            return false;
        return true;
    }

    
}
