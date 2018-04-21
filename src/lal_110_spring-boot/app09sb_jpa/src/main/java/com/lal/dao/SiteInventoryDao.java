package com.lal.dao;

import com.lal.entity.SiteInventoryItem;
import com.lal.modal.Item;

import java.util.List;

@FunctionalInterface
public interface SiteInventoryDao {

    List<SiteInventoryItem> getAll();



}
