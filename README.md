![](http://images.restapi.co.za/pvt/Noroff-64.png)
# Back-end Development Year 1
 
 ## DAB Module 3 Lesson 4 - Hotel application
NOTE: Remember to create the .env file with the information for your database. The username, password, database and host information needs to be in the .env file.

### Setup the database with initial data
Insert default values with no users
```sql
INSERT INTO Hotels (Name, Location)
VALUES ('Street Motel', 'Chicago');
```
```sql
INSERT INTO Hotels (Name, Location)
VALUES ('Mariott', 'Warshaw');
```
```sql
INSERT INTO Rooms (Capacity, PricePerDay, HotelId)
VALUES (2, 22.50, 1),(4, 40, 1);
```
```sql
INSERT INTO Rates (UserId, HotelId, Value)
VALUES (1, 1, 4);
```
```sql
INSERT INTO Reservations (UserId, RoomId, StartDate, EndDate)
VALUES (1, 1, '2022-11-11 10:00:00', '2022-11-14 10:00:00');
```

### Stored procedure
```sql
CREATE PROCEDURE `insert_reservation` (_UserId INT, _RoomId INT, _StartDate DATETIME, _EndDate DATETIME)
BEGIN
INSERT INTO Reservations SET UserId = _UserId, StartDate = _StartDate, EndDate = _EndDate, RoomId = _RoomId
ON DUPLICATE KEY UPDATE StartDate = _StartDate, EndDate = _EndDate;
END
```
