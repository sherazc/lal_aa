package com.lal.services;

import com.lal.dao.SiteInventoryDao;
import com.lal.dao.WarehouseInventoryDao;
import com.lal.entity.SiteInventoryItem;
import com.lal.entity.WarehouseInventoryItem;
import com.lal.modal.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Component
public class StoreInventoryImpl implements StoreInventory {

    private SiteInventoryDao siteInventoryDao;
    private WarehouseInventoryDao warehouseInventoryDao;

    @Autowired
    private StoreInventoryImpl(SiteInventoryDao siteInventoryDao,
                              WarehouseInventoryDao warehouseInventoryDao) {
        this.siteInventoryDao = siteInventoryDao;
        this.warehouseInventoryDao = warehouseInventoryDao;
    }

    public List<Item> findAllInventory() {


        List<SiteInventoryItem> siteInventoryItems = siteInventoryDao.getAll();
        List<WarehouseInventoryItem> warehouseInventoryItems = warehouseInventoryDao.getAll();
        List<Item> allItems = new ArrayList<>();


        if (siteInventoryItems != null) {
            siteInventoryItems.forEach(
                    siteInventoryItem ->
                            allItems.add(
                                    new Item(
                                            siteInventoryItem.getId(),
                                            siteInventoryItem.getName(),
                                            siteInventoryItem.getPrice()))
            );
        }


        if (warehouseInventoryItems != null) {
            warehouseInventoryItems.forEach(
                    warehouseInventoryItem ->
                            allItems.add(
                                    new Item(
                                            warehouseInventoryItem.getId(),
                                            warehouseInventoryItem.getName(),
                                            warehouseInventoryItem.getPrice()))
            );
        }
        return allItems;
    }

    private static StoreInventory storeInventory;

    public static StoreInventory create(SiteInventoryDao siteInventoryDao,
                                              WarehouseInventoryDao warehouseInventoryDao) {
        if (storeInventory == null) {
            storeInventory = new StoreInventoryImpl(siteInventoryDao, warehouseInventoryDao);
        }
        return storeInventory;
    }
}
