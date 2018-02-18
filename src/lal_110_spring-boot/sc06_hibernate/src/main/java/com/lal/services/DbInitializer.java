package com.lal.services;

import org.hibernate.Session;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Arrays;

public class DbInitializer {

    private static boolean initialized = false;

    public static void initialize(Session session) {
        try {
            Path path = Paths.get(DbInitializer.class.getClassLoader().getResource("create_db.sql").toURI());
            String entireScript = new String(Files.readAllBytes(path));

            Arrays.stream(entireScript.split(";"))
                    .map(String::trim)
                    .filter(query -> query.length() > 0)
                    .forEach(query -> {
                        session.createNativeQuery(query).executeUpdate();
                    });
            session.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
