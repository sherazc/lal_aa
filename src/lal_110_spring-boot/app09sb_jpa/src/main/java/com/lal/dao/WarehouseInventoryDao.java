package com.lal.dao;

import com.lal.entity.WarehouseInventoryItem;

import java.util.List;

public interface WarehouseInventoryDao {
    List<WarehouseInventoryItem> getAll();
}
