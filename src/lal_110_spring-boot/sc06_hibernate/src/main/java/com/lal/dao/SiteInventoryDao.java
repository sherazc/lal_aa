package com.lal.dao;

import com.lal.entity.SiteInventoryItem;

import java.util.List;

public interface SiteInventoryDao {

    List<SiteInventoryItem> getAll();
}
