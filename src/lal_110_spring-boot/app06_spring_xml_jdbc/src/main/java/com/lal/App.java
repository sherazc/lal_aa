package com.lal;

import com.lal.services.StoreInventory;
import org.springframework.beans.factory.BeanFactory;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class App {
    public static void main(String[] args) {
        BeanFactory beanFactory = new ClassPathXmlApplicationContext("context.xml");
        StoreInventory storeInventory = (StoreInventory) beanFactory.getBean("storeInventory");
        storeInventory.findAllInventory().forEach(item -> System.out.println(item.getName()));

    }
}
