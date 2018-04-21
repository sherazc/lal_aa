package com.lal;

import com.lal.services.StoreInventory;
import org.springframework.beans.factory.BeanFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class App09sbJpaApplication {

	public static void main(String[] args) {


		BeanFactory beanFactory = SpringApplication.run(App09sbJpaApplication.class, args);
		StoreInventory storeInventory = beanFactory.getBean(StoreInventory.class);
		storeInventory.findAllInventory().forEach(item -> System.out.println(item.getName()));

	}
}
