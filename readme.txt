The scenarios can be run using 1. C:\Projects\collinsons "mvn clean install" or 2. from the Intellij IDE

A.
The Vending machine feature file is located at C:\Projects\collinsons\src\test\resources\steve\features
The VendingStepDefs.java is stored at C:\Projects\collinsons\src\test\java\steve\step_definitions

It contains 6 Scenarios
1. Select Soda (45) and enter 45 => refund = 0
2. Select Coke (25) and Pepsi (35) and enter 90 => refund = 30
3. Select Cancel and eter 45 => refund = 45
4. Supplier takes 105 (45 + 25 + 35)
5. Select Soda (45) and enter 45 => refund = 0
6. Supplier takes 45 (45)

B.
The Bikes feature file is also stored at C:\Projects\collinsons\src\test\resources\steve\features
The BikesStepDefs.java is stored at C:\Projects\collinsons\src\test\java\steve\step_definitions\RestAss
It uses Pojo files stored at C:\Projects\collinsons\src\test\java\steve\step_definitions\RestAss\pojo

It calls C:\Projects\collinsons\src\main\java\steve\BikesExtension.java to help build the response

Analysing all extras to fully create Extras.java was taking too much time so it only checks the first 48 networks.

It contains 3 Scenarios
1. Verify City in Country
2. Find extras at bike stations
3. Find bike stations that a specific extra is available