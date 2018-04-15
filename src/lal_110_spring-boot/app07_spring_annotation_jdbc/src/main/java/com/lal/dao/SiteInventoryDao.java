package com.lal.dao;

import com.lal.modal.Item;

import java.util.List;

@FunctionalInterface
public interface SiteInventoryDao {

    List<Item> getAll();



}
