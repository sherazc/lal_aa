package com.sc.khrooj.domain;

public class Person {
    private long id;
    private String name;
    private String khroojType;

    public Person() {
    }

    public Person(long id, String name, String khroojType) {
        this.id = id;
        this.name = name;
        this.khroojType = khroojType;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getKhroojType() {
        return khroojType;
    }

    public void setKhroojType(String khroojType) {
        this.khroojType = khroojType;
    }
}
