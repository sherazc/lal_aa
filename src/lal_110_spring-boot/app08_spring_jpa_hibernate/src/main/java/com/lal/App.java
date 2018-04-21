package com.lal;

import com.lal.services.StoreInventory;
import org.springframework.beans.factory.BeanFactory;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class App {
    public static void main(String[] args) {
        // BeanFactory beanFactory = new ClassPathXmlApplicationContext("context.xml");
        BeanFactory beanFactory = new AnnotationConfigApplicationContext(SpringConfig.class);
        StoreInventory storeInventory = beanFactory.getBean(StoreInventory.class);
        storeInventory.findAllInventory().forEach(item -> System.out.println(item.getName()));

    }
}
