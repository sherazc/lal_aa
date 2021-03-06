package com.lal.dao;

import com.lal.datasource.ConnectionUtil;
import com.lal.modal.Item;

import java.sql.Connection;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class WarehouseInventoryDaoImpl implements WarehouseInventoryDao {

    public List<Item> getAll() {
        List<Item> items = new ArrayList<>();
        try {
            Connection connection = ConnectionUtil.createConnection();
            ResultSet resultSet = connection.createStatement()
                    .executeQuery("SELECT ID, NAME, PRICE FROM WAREHOUSE_INVENTORY");
            while (resultSet.next()) {
                items.add(new Item(
                        resultSet.getLong("ID"),
                        resultSet.getString("NAME"),
                        resultSet.getDouble("PRICE")));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return items;
    }
}
