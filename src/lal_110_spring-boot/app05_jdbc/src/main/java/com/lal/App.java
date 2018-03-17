package com.lal;

import com.lal.datasource.ConnectionUtil;
import com.lal.datasource.DbInitializer;
import com.lal.modal.Item;
import com.lal.services.StoreInventory;
import org.springframework.beans.factory.BeanFactory;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class App {
    public static void main(String[] args) throws  Exception {

        //ConnectionUtil.getConnection();

        DbInitializer.initialize();


/*
        BeanFactory beanFactory = new AnnotationConfigApplicationContext(SpringConfig.class);
        StoreInventory storeInventory = beanFactory.getBean(StoreInventory.class);

        for (Item item : storeInventory.findAllInventory()) {
            System.out.println(item.getName());

        }
*/
    }
}
