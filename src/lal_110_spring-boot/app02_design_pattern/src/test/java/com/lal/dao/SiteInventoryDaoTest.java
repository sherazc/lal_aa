package com.lal.dao;

import com.lal.modal.Item;
import org.junit.After;
import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;

import java.util.List;

import static org.junit.Assert.*;

public class SiteInventoryDaoTest {

    private SiteInventoryDao siteInventoryDao;

    @Before
    public void setUp() throws Exception {
        siteInventoryDao = new SiteInventoryDaoImpl();
    }

    @After
    public void tearDown() throws Exception {

    }

    @Test
    public void testGetAllNotNull() throws Exception {
        List<Item> items = siteInventoryDao.getAll();
        assertNotNull(items);
    }

    @Test
    public void testGetAllListSize() throws Exception {
        List<Item> items = siteInventoryDao.getAll();
        assertEquals(3, items.size());
    }

}