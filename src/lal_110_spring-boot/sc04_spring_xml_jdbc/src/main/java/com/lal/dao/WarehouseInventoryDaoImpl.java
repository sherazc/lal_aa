package com.lal.dao;

import com.lal.modal.Item;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;

import java.util.Arrays;
import java.util.List;

public class WarehouseInventoryDaoImpl implements WarehouseInventoryDao {

    private NamedParameterJdbcTemplate jdbcTemplate;

    public WarehouseInventoryDaoImpl(NamedParameterJdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<Item> getAll() {
        return Arrays.asList(
                new Item(400, "Item 4", 400),
                new Item(500, "Item 5", 500),
                new Item(600, "Item 6", 600)
        );
    }
}
