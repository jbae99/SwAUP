DROP TABLE IF EXISTS User;
DROP TABLE IF EXISTS Sells;
DROP TABLE IF EXISTS Items;

CREATE TABLE User(
    aup_id TEXT,
    nickname TEXT,
    password TEXT,
    PRIMARY KEY (aup_id)
);

CREATE TABLE Sells(
    aup_id TEXT,
    item_id TEXT,
    datePosted TEXT,
    FOREIGN KEY (aup_id) REFERENCES User(aup_id) ON DELETE CASCADE
);

CREATE TABLE Items(
    title TEXT NOT NULL,
    picture BLOB,
    description TEXT,
    item_id INT NOT NULL,
    category TEXT,
status TEXT);

INSERT INTO User 
VALUES ('a108643','sophieisdope', 'Apassword'),
('a108195','danisdope', 'AbetterPassword'),
('a111676','johnisdope', 'AcoolPassword'),
('a108019','hanaisdope', 'AfunPassword');