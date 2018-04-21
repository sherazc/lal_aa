package com.lal.dao;

import com.lal.entity.SiteInventoryItem;
import com.lal.modal.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.RowCallbackHandler;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Arrays;
import java.util.List;

@Repository
public class SiteInventoryDaoImpl implements SiteInventoryDao {

    @PersistenceContext
    private EntityManager entityManager;

    public List<SiteInventoryItem> getAll() {
        Query query = entityManager.createQuery("from SiteInventoryItem");
        return query.getResultList();
    }
}
