package com.micro_arc.eurekaservicediscovery;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.config.server.EnableConfigServer;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
@EnableConfigServer
public class EurekaServiceDiscoveryApplication {

    public static void main(String[] args) {
        SpringApplication.run(EurekaServiceDiscoveryApplication.class, args);
    }

}
