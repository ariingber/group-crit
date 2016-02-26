# group-crit README.md


#ERD's

| group | datatype |
| :------------- | :-------------|
| groupID        | primary key   |
| groupName      | varchar(50)   |
| timestamp    |  varchar(100) |

One <---------> Many

| artist | datatype |
| :------------- | :-------------|
| artistID     | primary key   |
| email      | varchar(50)   |
| password   | varchar(50) |
| groupID    | integer refrences group  |
| timestamp    |  varchar(100) |

One <---------> Many

| piece | datatype |
| :------------- | :-------------|
| pieceID     | primary key   |
| artistID      | integer refrences artist   |
| imgURL   | varchar(200) |
| nameOfPiece    | varchar(50)  |
|timestamp | varchar (100)

One <---------> Many

| comments | datatype |
| :------------- | :-------------|
| commentID     | primary key   |
| pieceID      | integer refrences piece   |
| artistID   | integer refrences piece |
| timestamp    |  varchar(100) |

artist is connected to comments in a one to many relationship as well
