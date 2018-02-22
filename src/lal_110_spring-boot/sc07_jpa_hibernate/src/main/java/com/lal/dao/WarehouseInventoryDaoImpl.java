package com.lal.dao;

import com.lal.entity.WarehouseInventoryItem;
import org.hibernate.query.Query;

import javax.persistence.EntityManager;
import java.util.List;


public class WarehouseInventoryDaoImpl implements WarehouseInventoryDao {

    @Override
    public List<WarehouseInventoryItem> getAll(EntityManager session) {
        Query query = session.createQuery("from WarehouseInventoryItem");
        return query.list();
    }

    @Override
    public void save(EntityManager session, WarehouseInventoryItem warehouseInventoryItem) {
        session.persist(warehouseInventoryItem);
    }
}
