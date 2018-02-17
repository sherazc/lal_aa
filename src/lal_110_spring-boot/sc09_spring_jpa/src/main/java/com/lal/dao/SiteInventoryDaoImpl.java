package com.lal.dao;

import com.lal.modal.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Repository
public class SiteInventoryDaoImpl implements SiteInventoryDao {


    @PersistenceContext
    private EntityManager em;


    public List<Item> getAll() {

        System.out.println(em);
        /*return jdbcTemplate.query("SELECT ID, NAME, PRICE FROM SITE_INVENTORY", new RowMapper<Item>() {
            @Nullable
            @Override
            public Item mapRow(ResultSet rs, int rowNum) throws SQLException {
                return new Item(
                        rs.getLong("ID"),
                        rs.getString("NAME"),
                        rs.getDouble("PRICE"));
            }
        });
        */

        return null;
    }
}
