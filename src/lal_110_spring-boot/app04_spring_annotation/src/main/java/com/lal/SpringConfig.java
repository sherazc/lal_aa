package com.lal;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan("com.lal")
public class SpringConfig {
    public SpringConfig() {
        System.out.println("Configuration");
    }
}
