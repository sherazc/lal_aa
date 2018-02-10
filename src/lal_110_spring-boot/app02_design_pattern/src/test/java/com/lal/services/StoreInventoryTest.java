package com.lal.services;

import com.lal.dao.SiteInventoryDao;
import com.lal.dao.WarehouseInventoryDao;
import com.lal.modal.Item;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.runners.MockitoJUnitRunner;

import java.util.Arrays;
import java.util.List;

import static org.junit.Assert.*;

@RunWith(MockitoJUnitRunner.class)
public class StoreInventoryTest {

    private StoreInventory storeInventory;

    @Mock
    private SiteInventoryDao siteInventoryDao;

    @Mock
    private WarehouseInventoryDao warehouseInventoryDao;

    @Before
    public void setUp() throws Exception {
        storeInventory = StoreInventoryImpl.create(siteInventoryDao, warehouseInventoryDao);
    }

    @Test
    public void findAllInventorySiteReturnsItemsWarehouseNull() throws Exception {
        // Prepare
        Mockito.when(siteInventoryDao.getAll()).thenReturn(Arrays.asList(new Item(1, "a", 1.1)));
        Mockito.when(warehouseInventoryDao.getAll()).thenReturn(null);

        // Call
        List<Item> allInventory = storeInventory.findAllInventory();

        // Test
        assertEquals(1, allInventory.size());
    }

}