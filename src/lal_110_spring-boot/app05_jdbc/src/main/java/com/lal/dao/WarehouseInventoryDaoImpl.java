package com.lal.dao;

import com.lal.modal.Item;
import org.springframework.stereotype.Repository;

import java.util.Arrays;
import java.util.List;

public class WarehouseInventoryDaoImpl implements WarehouseInventoryDao {
    public WarehouseInventoryDaoImpl() {
        System.out.println("WarehouseInventoryDao initialized");
    }

    public List<Item> getAll() {
        return Arrays.asList(
                new Item(400, "Item 4", 400),
                new Item(500, "Item 5", 500),
                new Item(600, "Item 6", 600)
        );
    }
}
