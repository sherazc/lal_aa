package com.lal.dao;

import com.lal.entity.WarehouseInventoryItem;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import java.util.List;

@Repository
public class WarehouseInventoryDaoImpl implements WarehouseInventoryDao {
    @PersistenceContext
    private EntityManager entityManager;

    public List<WarehouseInventoryItem> getAll() {
        Query query = entityManager.createQuery("from WarehouseInventoryItem");
        return query.getResultList();
    }
}
