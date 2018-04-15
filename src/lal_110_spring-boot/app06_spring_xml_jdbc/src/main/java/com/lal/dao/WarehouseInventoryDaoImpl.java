package com.lal.dao;

import com.lal.modal.Item;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.Arrays;
import java.util.List;

public class WarehouseInventoryDaoImpl implements WarehouseInventoryDao {
    private NamedParameterJdbcTemplate jdbcTemplate;

    public WarehouseInventoryDaoImpl(NamedParameterJdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
        System.out.println("WarehouseInventoryDao initialized");
    }

    public List<Item> getAll() {

        return jdbcTemplate.query("SELECT ID, NAME, PRICE from WAREHOUSE_INVENTORY",
                (resultSet, i) -> new Item(
                        resultSet.getLong("ID"),
                        resultSet.getString("NAME"),
                        resultSet.getDouble("PRICE")));
    }
}
