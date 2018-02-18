package com.lal.dao;

import com.lal.entity.SiteInventoryItem;
import org.hibernate.Session;
import org.hibernate.query.Query;

import java.util.List;

public class SiteInventoryDaoImpl implements SiteInventoryDao {

    @Override
    public List<SiteInventoryItem> getAll(Session session) {
        // HQL
        Query query = session.createQuery("from SiteInventoryItem");
        return query.list();
    }
}
