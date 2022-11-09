IF OBJECT_ID('dbo.Number', 'U') IS NOT NULL
DROP TABLE dbo.Number
GO
CREATE TABLE dbo.Number
(
    NumberId INT NOT NULL PRIMARY KEY,
    numberCount INT NOT NULL DEFAULT(0),
);
GO