package com.lal.datasource;

import java.sql.Connection;
import java.sql.DriverManager;

public class ConnectionUtil {
    private static Connection connection;

    public static Connection createConnection() throws Exception {
        if (connection == null || connection.isClosed()) {
            connection = DriverManager.getConnection("jdbc:hsqldb:mem:mymemdb", "SA", "");
            // connection = DriverManager.getConnection("jdbc:hsqldb:file:target/db/testdb", "SA", "");
        }
        return connection;
    }
}
