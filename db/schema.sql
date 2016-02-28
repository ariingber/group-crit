DROP TABLE if EXISTS comments, works, users CASCADE;

CREATE TABLE users (
       id SERIAL UNIQUE PRIMARY KEY,
       email VARCHAR(255),
       password_digest TEXT,
       name VARCHAR(100),
       groupName VARCHAR(100),
       img_url TEXT DEFAULT 'https://image.freepik.com/free-icon/male-user-shadow_318-34042.png'
);

CREATE TABLE works (
       id SERIAL UNIQUE PRIMARY KEY,
       userID INTEGER REFERENCES users,
       imgURL TEXT,
       name VARCHAR(100)
);

CREATE TABLE comments (
      id SERIAL UNIQUE PRIMARY KEY,
      workId INTEGER REFERENCES works,
      userId INTEGER REFERENCES users,
      commentContent VARCHAR (200)
);
