
-- Creating tables;
CREATE TABLE SITE_INVENTORY (
  ID INTEGER IDENTITY PRIMARY KEY,
  NAME VARCHAR(255),
  PRICE DOUBLE
);

CREATE TABLE WAREHOUSE_INVENTORY (
  ID INTEGER IDENTITY PRIMARY KEY,
  NAME VARCHAR(255),
  PRICE DOUBLE
);
