package com.lal.dao;

import com.lal.modal.Item;

import java.util.Arrays;
import java.util.List;

/**
 * Created by sheraz on 2/10/18.
 */
public class SiteInventoryDaoImpl implements SiteInventoryDao {
    public List<Item> getAll() {
        return Arrays.asList(
                new Item(100, "Item 1", 100),
                new Item(200, "Item 2", 200),
                new Item(300, "Item 3", 300)
        );
    }
}
