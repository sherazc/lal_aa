package com.lal.dao;

import com.lal.modal.Item;

import java.util.Arrays;
import java.util.List;

public class SiteInventoryDaoImpl implements SiteInventoryDao {
    public SiteInventoryDaoImpl() {
        System.out.println("Site inventory initialized");
    }

    public List<Item> getAll() {
        return Arrays.asList(
                new Item(100, "Item 1", 100),
                new Item(200, "Item 2", 200),
                new Item(300, "Item 3", 300)
        );
    }
}
