package com.lal.dao;

import com.lal.modal.Item;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;

import java.util.Arrays;
import java.util.List;

public class SiteInventoryDaoImpl implements SiteInventoryDao {

    private NamedParameterJdbcTemplate jdbcTemplate;

    public SiteInventoryDaoImpl(NamedParameterJdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<Item> getAll() {
        return Arrays.asList(
                new Item(100, "Item 1", 100),
                new Item(200, "Item 2", 200),
                new Item(300, "Item 3", 300)
        );
    }
}
