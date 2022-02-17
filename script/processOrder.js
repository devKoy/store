var weekdays = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY"
]
var productList = [
    "PEDIGREE_MOTHER_AND_BABYDOG_MILK_FLAVOR",
    "TASTE_OF_THE_WILD_ANCIENT_PRAIRIE",
    "INSTINCT_OF_RAWBOOST_MIXERS",
    "WHISKAS_DRY_CAT_FOOD"
]
var buttonBuyCollection = {
    "button1": {
        orderImage: document.getElementsByClassName("food1Image")[0].getAttribute("src"),
        foodTitle: document.getElementsByClassName("food1Title")[0].innerText,
        foodtype: document.getElementsByClassName("food1Type")[0].innerText,
        foodPrice: document.querySelectorAll(".food1Price span")[0].innerText
    },
    "button2": {
        orderImage: document.getElementsByClassName("food2Image")[0].getAttribute("src"),
        foodTitle: document.getElementsByClassName("food2Title")[0].innerText,
        foodtype: document.getElementsByClassName("food2Type")[0].innerText,
        foodPrice: document.querySelectorAll(".food2Price span")[0].innerText
    },
    "button3": {
        orderImage: document.getElementsByClassName("food3Image")[0].getAttribute("src"),
        foodTitle: document.getElementsByClassName("food3Title")[0].innerText,
        foodtype: document.getElementsByClassName("food3Type")[0].innerText,
        foodPrice: document.querySelectorAll(".food3Price span")[0].innerText
    },
    "button4": {
        orderImage: document.getElementsByClassName("food4Image")[0].getAttribute("src"),
        foodTitle: document.getElementsByClassName("food4Title")[0].innerText,
        foodtype: document.getElementsByClassName("food4Type")[0].innerText,
        foodPrice: document.querySelectorAll(".food4Price span")[0].innerText
    }
}
var orderedKilo = 0;
var selectedDay = "";
var selectedProduct = "";
var orderPrice = 0;
var processedOrder = {
    "SUNDAY": {
        "PEDIGREE_MOTHER_AND_BABYDOG_MILK_FLAVOR": {
            "KILO": "",
            "PRICE": 0,
            "VISITS": 0
        },
        "TASTE_OF_THE_WILD_ANCIENT_PRAIRIE": {
            "KILO": "",
            "PRICE": 0,
            "VISITS": 0
        },
        "INSTINCT_OF_RAWBOOST_MIXERS": {
            "KILO": "",
            "PRICE": 0,
            "VISITS": 0
        },
        "WHISKAS_DRY_CAT_FOOD": {
            "KILO": "",
            "PRICE": 0,
            "VISITS": 0
        }
    },
    "MONDAY": {
        "PEDIGREE_MOTHER_AND_BABYDOG_MILK_FLAVOR": {
            "KILO": "",
            "PRICE": 0,
            "VISITS": 0
        },
        "TASTE_OF_THE_WILD_ANCIENT_PRAIRIE": {
            "KILO": "",
            "PRICE": 0,
            "VISITS": 0
        },
        "INSTINCT_OF_RAWBOOST_MIXERS": {
            "KILO": "",
            "PRICE": 0,
            "VISITS": 0
        },
        "WHISKAS_DRY_CAT_FOOD": {
            "KILO": "",
            "PRICE": 0,
            "VISITS": 0
        }
    },
    "TUESDAY": {
        "PEDIGREE_MOTHER_AND_BABYDOG_MILK_FLAVOR": {
            "KILO": "",
            "PRICE": 0,
            "VISITS": 0
        },
        "TASTE_OF_THE_WILD_ANCIENT_PRAIRIE": {
            "KILO": "",
            "PRICE": 0,
            "VISITS": 0
        },
        "INSTINCT_OF_RAWBOOST_MIXERS": {
            "KILO": "",
            "PRICE": 0,
            "VISITS": 0
        },
        "WHISKAS_DRY_CAT_FOOD": {
            "KILO": "",
            "PRICE": 0,
            "VISITS": 0
        }

    },
    "WEDNESDAY": {
        "PEDIGREE_MOTHER_AND_BABYDOG_MILK_FLAVOR": {
            "KILO": "",
            "PRICE": 0,
            "VISITS": 0
        },
        "TASTE_OF_THE_WILD_ANCIENT_PRAIRIE": {
            "KILO": "",
            "PRICE": 0,
            "VISITS": 0
        },
        "INSTINCT_OF_RAWBOOST_MIXERS": {
            "KILO": "",
            "PRICE": 0,
            "VISITS": 0
        },
        "WHISKAS_DRY_CAT_FOOD": {
            "KILO": "",
            "PRICE": 0,
            "VISITS": 0
        }
    },
    "THURSDAY": {
        "PEDIGREE_MOTHER_AND_BABYDOG_MILK_FLAVOR": {
            "KILO": "",
            "PRICE": 0,
            "VISITS": 0
        },
        "TASTE_OF_THE_WILD_ANCIENT_PRAIRIE": {
            "KILO": "",
            "PRICE": 0,
            "VISITS": 0
        },
        "INSTINCT_OF_RAWBOOST_MIXERS": {
            "KILO": "",
            "PRICE": 0,
            "VISITS": 0
        },
        "WHISKAS_DRY_CAT_FOOD": {
            "KILO": "",
            "PRICE": 0,
            "VISITS": 0
        }
    },
    "FRIDAY": {
        "PEDIGREE_MOTHER_AND_BABYDOG_MILK_FLAVOR": {
            "KILO": "",
            "PRICE": 0,
            "VISITS": 0
        },
        "TASTE_OF_THE_WILD_ANCIENT_PRAIRIE": {
            "KILO": "",
            "PRICE": 0,
            "VISITS": 0
        },
        "INSTINCT_OF_RAWBOOST_MIXERS": {
            "KILO": "",
            "PRICE": 0,
            "VISITS": 0
        },
        "WHISKAS_DRY_CAT_FOOD": {
            "KILO": "",
            "PRICE": 0,
            "VISITS": 0
        }
    },
    "SATURDAY": {
        "PEDIGREE_MOTHER_AND_BABYDOG_MILK_FLAVOR": {
            "KILO": "",
            "PRICE": 0,
            "VISITS": 0
        },
        "TASTE_OF_THE_WILD_ANCIENT_PRAIRIE": {
            "KILO": "",
            "PRICE": 0,
            "VISITS": 0
        },
        "INSTINCT_OF_RAWBOOST_MIXERS": {
            "KILO": "",
            "PRICE": 0,
            "VISITS": 0
        },
        "WHISKAS_DRY_CAT_FOOD": {
            "KILO": "",
            "PRICE": 0,
            "VISITS": 0
        }
    }

}

function processOrder(button) {
    var order = buttonBuyCollection[button];
    document.getElementById("modalImage").setAttribute("src", order.orderImage);
    selectedProduct = document.getElementById("modalTitle").innerText = order.foodTitle;
    document.getElementById("modalType").innerText = order.foodtype;
    orderPrice = document.getElementById("modalPrice").innerText = order.foodPrice;

}

function saveDataSet() {
    var getWeek = document.getElementById("weeks").selectedIndex;
    selectedDay = weekdays[getWeek]; //get selected day
    orderedKilo = document.getElementById("myKilo").value; //get kilo
    orderPrice = +orderPrice * +orderedKilo // get price
    selectedProduct = selectedProduct.replace(/(\r\n|\n|\r)/gm, " "); 
    selectedProduct = selectedProduct.replace(/ /g, "_");
    selectedProduct = selectedProduct.toUpperCase();

    // process to add the orders to the dataset object
    var success = false;
    if (selectedDay in processedOrder) {
        if (selectedProduct == productList[0]) {
            processedOrder[selectedDay].PEDIGREE_MOTHER_AND_BABYDOG_MILK_FLAVOR.KILO = orderedKilo;          processedOrder[selectedDay].PEDIGREE_MOTHER_AND_BABYDOG_MILK_FLAVOR.VISITS = +processedOrder[selectedDay].PEDIGREE_MOTHER_AND_BABYDOG_MILK_FLAVOR.VISITS + 1; processedOrder[selectedDay].PEDIGREE_MOTHER_AND_BABYDOG_MILK_FLAVOR.PRICE = orderPrice;
            success = true;
        } else if (selectedProduct == productList[1]) {
            processedOrder[selectedDay].TASTE_OF_THE_WILD_ANCIENT_PRAIRIE.KILO = orderedKilo;           processedOrder[selectedDay].TASTE_OF_THE_WILD_ANCIENT_PRAIRIE.VISITS = +processedOrder[selectedDay].TASTE_OF_THE_WILD_ANCIENT_PRAIRIE.VISITS + 1; processedOrder[selectedDay].TASTE_OF_THE_WILD_ANCIENT_PRAIRIE.PRICE = orderPrice;
            success = true;
        } else if (selectedProduct == productList[2]) {
        processedOrder[selectedDay].INSTINCT_OF_RAWBOOST_MIXERS.KILO = orderedKilo;        processedOrder[selectedDay].INSTINCT_OF_RAWBOOST_MIXERS.VISITS = +processedOrder[selectedDay].INSTINCT_OF_RAWBOOST_MIXERS.VISITS + 1;
            processedOrder[selectedDay].INSTINCT_OF_RAWBOOST_MIXERS.PRICE = orderPrice;
            success = true;
        } else if (selectedProduct == productList[3]) {
     processedOrder[selectedDay].WHISKAS_DRY_CAT_FOOD.KILO = orderedKilo;       processedOrder[selectedDay].WHISKAS_DRY_CAT_FOOD.VISITS = +processedOrder[selectedDay].WHISKAS_DRY_CAT_FOOD.VISITS +1;
            processedOrder[selectedDay].WHISKAS_DRY_CAT_FOOD.PRICE = orderPrice;
            success = true;
        }
        if (success) {
            alert("Order Completed");
        }
        document.getElementById("myKilo").value = "";
        reProcess()
    } else {
        alert("TRANSACTION NOT PROCESSED, PLESE TRY AGAIN")
    }
    document.getElementById("myKilo").value = "";
    reProcess()
}
