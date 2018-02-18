package com.lal.dao;

import com.lal.entity.WarehouseInventoryItem;
import org.hibernate.Session;
import org.hibernate.query.Query;

import javax.persistence.criteria.CriteriaQuery;
import java.util.List;


public class WarehouseInventoryDaoImpl implements WarehouseInventoryDao {

    @Override
    public List<WarehouseInventoryItem> getAll(Session session) {
        Query query = session.createQuery("from WarehouseInventoryItem");
        return query.list();
    }
}
