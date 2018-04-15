package com.lal.datasource;

import java.sql.Connection;
import java.sql.DriverManager;

public class ConnectionUtil {

    private static Connection connection;

    public static Connection getConnection() throws Exception {
        if (connection == null || connection.isClosed()) {
            Class.forName("org.hsqldb.jdbc.JDBCDriver");
            connection = DriverManager.getConnection("jdbc:hsqldb:mem:mymemdb", "SA", "");
        }
        return connection;
    }
}
