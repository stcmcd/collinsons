$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Bikes.feature");
formatter.feature({
  "line": 2,
  "name": "Bikes",
  "description": "",
  "id": "bikes",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@steve"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "1. Verify City in Country",
  "description": "",
  "id": "bikes;1.-verify-city-in-country",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "the city \"Frankfurt\" is in \"Germany\" is displayed in the console",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "Frankfurt",
      "offset": 10
    },
    {
      "val": "Germany",
      "offset": 28
    }
  ],
  "location": "BikeStepdefs.iPerformGetOperationFor2(String,String)"
});
formatter.result({
  "duration": 8819238900,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 6,
      "value": "#      | longitude | latitude |"
    },
    {
      "line": 7,
      "value": "#      | 8.66375   | 50.1072  |"
    }
  ],
  "line": 9,
  "name": "2. Find extras at bike stations",
  "description": "",
  "id": "bikes;2.-find-extras-at-bike-stations",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "display in console what extras are in stations \"{path}\"",
  "rows": [
    {
      "cells": [
        "network"
      ],
      "line": 11
    },
    {
      "cells": [
        "v2/networks"
      ],
      "line": 12
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "{path}",
      "offset": 48
    }
  ],
  "location": "BikeStepdefs.displayInConsoleWhatExtrasAreInStations(String,DataTable)"
});
formatter.result({
  "duration": 12154115800,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "3. Find bike stations that a specific extra is available",
  "description": "",
  "id": "bikes;3.-find-bike-stations-that-a-specific-extra-is-available",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "Find bike stations that the extra \"has_ebikes\" is available \"{path}\"",
  "rows": [
    {
      "cells": [
        "network"
      ],
      "line": 16
    },
    {
      "cells": [
        "v2/networks"
      ],
      "line": 17
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "has_ebikes",
      "offset": 35
    },
    {
      "val": "{path}",
      "offset": 61
    }
  ],
  "location": "BikeStepdefs.displayInConsoleWhatSpecificExtrasAreInStations(String,String,DataTable)"
});
formatter.result({
  "duration": 7885654400,
  "status": "passed"
});
formatter.uri("Vending.feature");
formatter.feature({
  "line": 2,
  "name": "Vending machine for the drinks Coke 25), Pepsi (35) and Soda (45)",
  "description": "",
  "id": "vending-machine-for-the-drinks-coke-25),-pepsi-(35)-and-soda-(45)",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@steve"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "1.Enter exact price for drink so no refund",
  "description": "",
  "id": "vending-machine-for-the-drinks-coke-25),-pepsi-(35)-and-soda-(45);1.enter-exact-price-for-drink-so-no-refund",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "i want to buy a \"Soda\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "i enter the following coins",
  "rows": [
    {
      "cells": [
        "coin"
      ],
      "line": 7
    },
    {
      "cells": [
        "Quarter"
      ],
      "line": 8
    },
    {
      "cells": [
        "Dime"
      ],
      "line": 9
    },
    {
      "cells": [
        "Nickle"
      ],
      "line": 10
    },
    {
      "cells": [
        "Penny"
      ],
      "line": 11
    },
    {
      "cells": [
        "Penny"
      ],
      "line": 12
    },
    {
      "cells": [
        "Penny"
      ],
      "line": 13
    },
    {
      "cells": [
        "Penny"
      ],
      "line": 14
    },
    {
      "cells": [
        "Penny"
      ],
      "line": 15
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "i  receive a refund of 0",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Soda",
      "offset": 17
    }
  ],
  "location": "VendingStepDefs.iWantToBuyADrink(String)"
});
formatter.result({
  "duration": 478900,
  "status": "passed"
});
formatter.match({
  "location": "VendingStepDefs.iEnterTheFollowingCoins(DataTable)"
});
formatter.result({
  "duration": 227000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 23
    }
  ],
  "location": "VendingStepDefs.iReceiveARefundOf(int)"
});
formatter.result({
  "duration": 2982500,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "2.Enter more than the price for drink so refund",
  "description": "",
  "id": "vending-machine-for-the-drinks-coke-25),-pepsi-(35)-and-soda-(45);2.enter-more-than-the-price-for-drink-so-refund",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "i want to buy a \"Coke\"",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "i enter the following coins",
  "rows": [
    {
      "cells": [
        "coin"
      ],
      "line": 21
    },
    {
      "cells": [
        "Quarter"
      ],
      "line": 22
    },
    {
      "cells": [
        "Dime"
      ],
      "line": 23
    },
    {
      "cells": [
        "Nickle"
      ],
      "line": 24
    },
    {
      "cells": [
        "Penny"
      ],
      "line": 25
    },
    {
      "cells": [
        "Penny"
      ],
      "line": 26
    },
    {
      "cells": [
        "Penny"
      ],
      "line": 27
    },
    {
      "cells": [
        "Penny"
      ],
      "line": 28
    },
    {
      "cells": [
        "Penny"
      ],
      "line": 29
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "i want to buy a \"Pepsi\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "i enter the following coins",
  "rows": [
    {
      "cells": [
        "coin"
      ],
      "line": 32
    },
    {
      "cells": [
        "Quarter"
      ],
      "line": 33
    },
    {
      "cells": [
        "Dime"
      ],
      "line": 34
    },
    {
      "cells": [
        "Nickle"
      ],
      "line": 35
    },
    {
      "cells": [
        "Penny"
      ],
      "line": 36
    },
    {
      "cells": [
        "Penny"
      ],
      "line": 37
    },
    {
      "cells": [
        "Penny"
      ],
      "line": 38
    },
    {
      "cells": [
        "Penny"
      ],
      "line": 39
    },
    {
      "cells": [
        "Penny"
      ],
      "line": 40
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "i  receive a refund of 30",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Coke",
      "offset": 17
    }
  ],
  "location": "VendingStepDefs.iWantToBuyADrink(String)"
});
formatter.result({
  "duration": 142800,
  "status": "passed"
});
formatter.match({
  "location": "VendingStepDefs.iEnterTheFollowingCoins(DataTable)"
});
formatter.result({
  "duration": 112200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pepsi",
      "offset": 17
    }
  ],
  "location": "VendingStepDefs.iWantToBuyADrink(String)"
});
formatter.result({
  "duration": 62800,
  "status": "passed"
});
formatter.match({
  "location": "VendingStepDefs.iEnterTheFollowingCoins(DataTable)"
});
formatter.result({
  "duration": 74400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 23
    }
  ],
  "location": "VendingStepDefs.iReceiveARefundOf(int)"
});
formatter.result({
  "duration": 174000,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "3.Enter more than the price for drink so refund",
  "description": "",
  "id": "vending-machine-for-the-drinks-coke-25),-pepsi-(35)-and-soda-(45);3.enter-more-than-the-price-for-drink-so-refund",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 44,
  "name": "i want to buy a \"Cancel\"",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "i enter the following coins",
  "rows": [
    {
      "cells": [
        "coin"
      ],
      "line": 46
    },
    {
      "cells": [
        "Quarter"
      ],
      "line": 47
    },
    {
      "cells": [
        "Dime"
      ],
      "line": 48
    },
    {
      "cells": [
        "Nickle"
      ],
      "line": 49
    },
    {
      "cells": [
        "Penny"
      ],
      "line": 50
    },
    {
      "cells": [
        "Penny"
      ],
      "line": 51
    },
    {
      "cells": [
        "Penny"
      ],
      "line": 52
    },
    {
      "cells": [
        "Penny"
      ],
      "line": 53
    },
    {
      "cells": [
        "Penny"
      ],
      "line": 54
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "i  receive a refund of 45",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Cancel",
      "offset": 17
    }
  ],
  "location": "VendingStepDefs.iWantToBuyADrink(String)"
});
formatter.result({
  "duration": 486500,
  "status": "passed"
});
formatter.match({
  "location": "VendingStepDefs.iEnterTheFollowingCoins(DataTable)"
});
formatter.result({
  "duration": 416600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "45",
      "offset": 23
    }
  ],
  "location": "VendingStepDefs.iReceiveARefundOf(int)"
});
formatter.result({
  "duration": 298900,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "4.Vending machine supplier resets machine and takes accumulated cash",
  "description": "",
  "id": "vending-machine-for-the-drinks-coke-25),-pepsi-(35)-and-soda-(45);4.vending-machine-supplier-resets-machine-and-takes-accumulated-cash",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 58,
  "name": "supplier resets machine and takes accumulated cash of 105",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "105",
      "offset": 54
    }
  ],
  "location": "VendingStepDefs.supplierEmptiesMachineOf(int)"
});
formatter.result({
  "duration": 233900,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 60,
      "value": "#This time only a soda is bought"
    }
  ],
  "line": 61,
  "name": "5.Enter exact price for drink so no refund",
  "description": "",
  "id": "vending-machine-for-the-drinks-coke-25),-pepsi-(35)-and-soda-(45);5.enter-exact-price-for-drink-so-no-refund",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 62,
  "name": "i want to buy a \"Soda\"",
  "keyword": "Given "
});
formatter.step({
  "line": 63,
  "name": "i enter the following coins",
  "rows": [
    {
      "cells": [
        "coin"
      ],
      "line": 64
    },
    {
      "cells": [
        "Quarter"
      ],
      "line": 65
    },
    {
      "cells": [
        "Dime"
      ],
      "line": 66
    },
    {
      "cells": [
        "Nickle"
      ],
      "line": 67
    },
    {
      "cells": [
        "Penny"
      ],
      "line": 68
    },
    {
      "cells": [
        "Penny"
      ],
      "line": 69
    },
    {
      "cells": [
        "Penny"
      ],
      "line": 70
    },
    {
      "cells": [
        "Penny"
      ],
      "line": 71
    },
    {
      "cells": [
        "Penny"
      ],
      "line": 72
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "i  receive a refund of 0",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Soda",
      "offset": 17
    }
  ],
  "location": "VendingStepDefs.iWantToBuyADrink(String)"
});
formatter.result({
  "duration": 201300,
  "status": "passed"
});
formatter.match({
  "location": "VendingStepDefs.iEnterTheFollowingCoins(DataTable)"
});
formatter.result({
  "duration": 252800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 23
    }
  ],
  "location": "VendingStepDefs.iReceiveARefundOf(int)"
});
formatter.result({
  "duration": 301300,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 75,
      "value": "#Only the price of a soda is in machine when supplier comes and resets"
    }
  ],
  "line": 76,
  "name": "6.Vending machine supplier resets machine and takes accumulated cash",
  "description": "",
  "id": "vending-machine-for-the-drinks-coke-25),-pepsi-(35)-and-soda-(45);6.vending-machine-supplier-resets-machine-and-takes-accumulated-cash",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 77,
  "name": "supplier resets machine and takes accumulated cash of 45",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "45",
      "offset": 54
    }
  ],
  "location": "VendingStepDefs.supplierEmptiesMachineOf(int)"
});
formatter.result({
  "duration": 388000,
  "status": "passed"
});
});