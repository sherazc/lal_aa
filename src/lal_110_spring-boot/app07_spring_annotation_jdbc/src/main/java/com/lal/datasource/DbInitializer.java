package com.lal.datasource;

import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.function.Consumer;
import java.util.stream.Stream;

public class DbInitializer {
    public static void initialize() throws Exception {
        URL resource = DbInitializer.class.getClassLoader().getResource("create_db.sql");

        Path path = Paths.get(resource.toURI());
        byte[] bytes = Files.readAllBytes(path);
        String script = new String(bytes);

        String[] allSqlStatementsString = script.split(";");
        for (int i = 0; i < allSqlStatementsString.length; i++) {


            String scriptLine = allSqlStatementsString[i];
            if (scriptLine.indexOf("--") != 0) {
                //System.out.println(scriptLine.trim());
            }

        }


        Stream<String> allStatementsStream = Arrays.stream(allSqlStatementsString);

        Consumer<? super String> consumer = new Consumer<String>() {
            @Override
            public void accept(String s) {
                System.out.println(s);
            }
        };

        Consumer<? super String> consumer1 = string -> {
            System.out.println(string);
        };

        Consumer<? super String> consumer2 = string -> System.out.println(string);

        Consumer<? super String> consumer3 = System.out::println;



        allStatementsStream
                .map(String::trim)
                .filter(s -> s.indexOf("--") != 0)
                .forEach(System.out::println);
    }
}
