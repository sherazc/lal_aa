package com.lal;

import com.lal.dao.SiteInventoryDao;
import com.lal.dao.SiteInventoryDaoImpl;
import com.lal.dao.WarehouseInventoryDao;
import com.lal.dao.WarehouseInventoryDaoImpl;
import com.lal.modal.Item;
import com.lal.services.StoreInventory;
import com.lal.services.StoreInventoryImpl;

import java.util.List;

public class App {
    public static void main(String[] args) {
        SiteInventoryDao siteInventoryDao = new SiteInventoryDaoImpl();
        WarehouseInventoryDao warehouseInventoryDao = new WarehouseInventoryDaoImpl();

        StoreInventory storeInventory = StoreInventoryImpl.create(siteInventoryDao, warehouseInventoryDao);

        List<Item> allInventory = storeInventory.findAllInventory();
        System.out.println(allInventory);
    }
}
