package com.lal.dao;

import com.lal.modal.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.RowCallbackHandler;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Arrays;
import java.util.List;

@Repository
public class SiteInventoryDaoImpl implements SiteInventoryDao {

    private NamedParameterJdbcTemplate jdbcTemplate;

    @Autowired
    public SiteInventoryDaoImpl(NamedParameterJdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
        System.out.println("Site inventory initialized");
    }

    public List<Item> getAll() {
        return jdbcTemplate.query("select ID, NAME, PRICE from SITE_INVENTORY", (resultSet, i) -> new Item(
                resultSet.getLong("ID"),
                resultSet.getString("NAME"),
                resultSet.getDouble("PRICE")));
    }
}
