# group-crit README.md


###ERD's

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

<!--[if IE]><meta http-equiv="X-UA-Compatible" content="IE=5,IE=9" ><![endif]-->
<!DOCTYPE html>
<html>
<head>
<title>group-crit-home</title>
</head>
<body style="background-color:#ffffff;">
<div class="mxgraph" style="position:relative;overflow:auto;width:100%;">
<div style="width:1px;height:1px;overflow:hidden;">7ZdBc+o2EMc/DcdmsA2EHoGkeZe0h3Sas2LLtgbZcmXxgHz67ForW8KQdgY6aacPGLD+K63k/a3WYpJsqsOTZk35rDIuJ/E0O0ySh0kc38+X8I3C0QqzJQmFFpmVokF4Ee+cxCmpO5HxNuholJJGNKGYqrrmqQk0prXah91yJcNZG1a4GQfhJWVyrL6KzJRWXcaLQf/GRVG6maPFz9byxtJtodWupvkmcZJ3L2uumPNFN3qY2iYNP4bNhtXBet6VqgJB87aPHXnMBS2K2m9KZ1xbyWlS1Fs/QskjsNRKwUi8qg4bLpGnY2WH/XLB2gdL8zqY+9IAMOGA70zuaO1WaM3RAWiNVts+9tEkWbcly9QeGhCidcbakqM3bDApCoxTCtPjna5LU8lhVIMuq0OBiXpXqXS7a+4gbwwTNdft3RtmC9evou7crzVlI3rOhZQbJZUNnyMJXrvVeZZF9wJLBV5/5wcbhg0IdKtcG06b40y4BgiwobiquNFHTA7aPETN7SVq7ofEnM9JK72kTJYkMkJd9J4HNnBBeM6jSkaoSnDyhbhYnZYY9XUOGqGK7ql9joibTvIcAvP3eHT5eJHHIuQRUfZ6PCJXx3wernhcg2M2xmEM1sTVZL6BD5aeJtXCQMiqfwOlYDd9GbEoCZE5gh6y2T+FjFx4yH4zJUQ0nq60Ea1p4epV6W3bsBQeeafMumdJRwUjH0K4gG5fCsNf0B0IeyB0EvszlW0U+x77qNTNHvA9xtcXxxvwSk54Rc6Fv8dcHQyA3aDk3Y+APePSekY/EHVROiV0pgo6ij6hiA6C1xCi01FwflhIrBV4wwGcxZ87PNV0hp/sWWkFHeBOD4MRrgr8fcLqCdZfGT7irEdYi3Vqu4zgQwRR96kHOGpVQ88AJkkjjshDwBl0RYZKZBlOczZbFPTOZZddJfTjMOAmlXIaco1d2+fqdpnP1e3Ga7i6EnwZbG5jMKD7g+uM1cxn+df0k+Qz+ht4fP5f6Z8cbWK3gz36vebTd+fPa+hTYfDgdwfp/3zIPz/cu5x3dfTMyeQ2zzloDv/wOpv31z15/AA=</div>
</div>
<script type="text/javascript" src="https://www.draw.io/embed.js?s=mockup/containers"></script>
</body>
</html>
