@steve
Feature: Vending machine for the drinks Coke 25), Pepsi (35) and Soda (45)

  Scenario: 1.Enter exact price for drink so no refund
    Given i want to buy a "Soda"
    And i enter the following coins
      | coin    |
      | Quarter |
      | Dime    |
      | Nickle  |
      | Penny   |
      | Penny   |
      | Penny   |
      | Penny   |
      | Penny   |
    Then i  receive a refund of 0

  Scenario: 2.Enter more than the price for drink so refund
    Given i want to buy a "Coke"
    And i enter the following coins
      | coin    |
      | Quarter |
      | Dime    |
      | Nickle  |
      | Penny   |
      | Penny   |
      | Penny   |
      | Penny   |
      | Penny   |
    And i want to buy a "Pepsi"
    And i enter the following coins
      | coin    |
      | Quarter |
      | Dime    |
      | Nickle  |
      | Penny   |
      | Penny   |
      | Penny   |
      | Penny   |
      | Penny   |
    Then i  receive a refund of 30

  Scenario: 3.Enter more than the price for drink so refund
    Given i want to buy a "Cancel"
    And i enter the following coins
      | coin    |
      | Quarter |
      | Dime    |
      | Nickle  |
      | Penny   |
      | Penny   |
      | Penny   |
      | Penny   |
      | Penny   |
    Then i  receive a refund of 45

  Scenario: 4.Vending machine supplier resets machine and takes accumulated cash
    Given supplier resets machine and takes accumulated cash of 105

#This time only a soda is bought
  Scenario: 5.Enter exact price for drink so no refund
    Given i want to buy a "Soda"
    And i enter the following coins
      | coin    |
      | Quarter |
      | Dime    |
      | Nickle  |
      | Penny   |
      | Penny   |
      | Penny   |
      | Penny   |
      | Penny   |
    Then i  receive a refund of 0

#Only the price of a soda is in machine when supplier comes and resets
  Scenario: 6.Vending machine supplier resets machine and takes accumulated cash
    Given supplier resets machine and takes accumulated cash of 45