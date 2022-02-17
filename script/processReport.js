var xReportValues = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
reProcess();

function reProcess() {

    var day1Visit = +processedOrder["SUNDAY"].PEDIGREE_MOTHER_AND_BABYDOG_MILK_FLAVOR.VISITS +
        +processedOrder["SUNDAY"].INSTINCT_OF_RAWBOOST_MIXERS.VISITS +
        +processedOrder["SUNDAY"].TASTE_OF_THE_WILD_ANCIENT_PRAIRIE.VISITS+
        +processedOrder["SUNDAY"].WHISKAS_DRY_CAT_FOOD.VISITS;
  
var day2Visit = +processedOrder["MONDAY"].PEDIGREE_MOTHER_AND_BABYDOG_MILK_FLAVOR.VISITS +
        +processedOrder["MONDAY"].INSTINCT_OF_RAWBOOST_MIXERS.VISITS +
        +processedOrder["MONDAY"].TASTE_OF_THE_WILD_ANCIENT_PRAIRIE.VISITS+
        +processedOrder["MONDAY"].WHISKAS_DRY_CAT_FOOD.VISITS;

 
var day3Visit = +processedOrder["TUESDAY"].PEDIGREE_MOTHER_AND_BABYDOG_MILK_FLAVOR.VISITS +
        +processedOrder["TUESDAY"].INSTINCT_OF_RAWBOOST_MIXERS.VISITS +
        +processedOrder["TUESDAY"].TASTE_OF_THE_WILD_ANCIENT_PRAIRIE.VISITS+
        +processedOrder["TUESDAY"].WHISKAS_DRY_CAT_FOOD.VISITS;

var day4Visit = +processedOrder["WEDNESDAY"].PEDIGREE_MOTHER_AND_BABYDOG_MILK_FLAVOR.VISITS+
        +processedOrder["WEDNESDAY"].INSTINCT_OF_RAWBOOST_MIXERS.VISITS +
        +processedOrder["WEDNESDAY"].TASTE_OF_THE_WILD_ANCIENT_PRAIRIE.VISITS+
        +processedOrder["WEDNESDAY"].WHISKAS_DRY_CAT_FOOD.VISITS;

var day5Visit = +processedOrder["THURSDAY"].PEDIGREE_MOTHER_AND_BABYDOG_MILK_FLAVOR.VISITS +
        +processedOrder["THURSDAY"].INSTINCT_OF_RAWBOOST_MIXERS.VISITS +
        +processedOrder["THURSDAY"].TASTE_OF_THE_WILD_ANCIENT_PRAIRIE.VISITS+
        +processedOrder["THURSDAY"].WHISKAS_DRY_CAT_FOOD.VISITS;

var day6Visit = +processedOrder["FRIDAY"].PEDIGREE_MOTHER_AND_BABYDOG_MILK_FLAVOR.VISITS +
        +processedOrder["FRIDAY"].INSTINCT_OF_RAWBOOST_MIXERS.VISITS +
        +processedOrder["FRIDAY"].TASTE_OF_THE_WILD_ANCIENT_PRAIRIE.VISITS+
        +processedOrder["FRIDAY"].WHISKAS_DRY_CAT_FOOD.VISITS;

var day7Visit = +processedOrder["SATURDAY"].PEDIGREE_MOTHER_AND_BABYDOG_MILK_FLAVOR.VISITS +
        +processedOrder["SATURDAY"].INSTINCT_OF_RAWBOOST_MIXERS.VISITS +
        +processedOrder["SATURDAY"].TASTE_OF_THE_WILD_ANCIENT_PRAIRIE.VISITS+
        +processedOrder["SATURDAY"].WHISKAS_DRY_CAT_FOOD.VISITS;

var values = [day1Visit, day2Visit, day3Visit, day4Visit, day5Visit, day6Visit, day7Visit];
    var barColors = ["green", "blue", "orange", "yellow", "red", "violet", "black"];
    
    
    new Chart("myCustomerVisitChart", {
        type: "line",
        data: {
            labels: xReportValues,
            datasets: [{
           			   backgroundColor: "violet",
                data: values,
                borderColor: "#00FFFF",
                fill: true,
                label: "NO. OF VISITS"
            }]
        },
        options: {
            title: {
                display: true,
                text: "WEEKDAY's CUSTOMER VISIT REPORT"
            },legend: {
                display: true
            }
        }
    });

    // KILO PER WEEK
    var a = +processedOrder["SUNDAY"].PEDIGREE_MOTHER_AND_BABYDOG_MILK_FLAVOR.KILO +
        +processedOrder["MONDAY"].PEDIGREE_MOTHER_AND_BABYDOG_MILK_FLAVOR.KILO +
        +processedOrder["TUESDAY"].PEDIGREE_MOTHER_AND_BABYDOG_MILK_FLAVOR.KILO +
        +processedOrder["WEDNESDAY"].PEDIGREE_MOTHER_AND_BABYDOG_MILK_FLAVOR.KILO +
        +processedOrder["THURSDAY"].PEDIGREE_MOTHER_AND_BABYDOG_MILK_FLAVOR.KILO +
        +processedOrder["FRIDAY"].PEDIGREE_MOTHER_AND_BABYDOG_MILK_FLAVOR.KILO +
        +processedOrder["SATURDAY"].PEDIGREE_MOTHER_AND_BABYDOG_MILK_FLAVOR.KILO;

    var b = +processedOrder["SUNDAY"].WHISKAS_DRY_CAT_FOOD.KILO +
        +processedOrder["MONDAY"].WHISKAS_DRY_CAT_FOOD.KILO +
        +processedOrder["TUESDAY"].WHISKAS_DRY_CAT_FOOD.KILO +
        +processedOrder["WEDNESDAY"].WHISKAS_DRY_CAT_FOOD.KILO +
        +processedOrder["THURSDAY"].WHISKAS_DRY_CAT_FOOD.KILO +
        +processedOrder["FRIDAY"].WHISKAS_DRY_CAT_FOOD.KILO +
        +processedOrder["SATURDAY"].WHISKAS_DRY_CAT_FOOD.KILO;

    var c = +processedOrder["SUNDAY"].TASTE_OF_THE_WILD_ANCIENT_PRAIRIE.KILO +
        +processedOrder["MONDAY"].TASTE_OF_THE_WILD_ANCIENT_PRAIRIE.KILO +
        +processedOrder["TUESDAY"].TASTE_OF_THE_WILD_ANCIENT_PRAIRIE.KILO +
        +processedOrder["WEDNESDAY"].TASTE_OF_THE_WILD_ANCIENT_PRAIRIE.KILO +
        +processedOrder["THURSDAY"].TASTE_OF_THE_WILD_ANCIENT_PRAIRIE.KILO +
        +processedOrder["FRIDAY"].TASTE_OF_THE_WILD_ANCIENT_PRAIRIE.KILO +
        +processedOrder["SATURDAY"].TASTE_OF_THE_WILD_ANCIENT_PRAIRIE.KILO;

    var d = +processedOrder["SUNDAY"].INSTINCT_OF_RAWBOOST_MIXERS.KILO +
        +processedOrder["MONDAY"].INSTINCT_OF_RAWBOOST_MIXERS.KILO +
        +processedOrder["TUESDAY"].INSTINCT_OF_RAWBOOST_MIXERS.KILO +
        +processedOrder["WEDNESDAY"].INSTINCT_OF_RAWBOOST_MIXERS.KILO +
        +processedOrder["THURSDAY"].INSTINCT_OF_RAWBOOST_MIXERS.KILO +
        +processedOrder["FRIDAY"].INSTINCT_OF_RAWBOOST_MIXERS.KILO +
        +processedOrder["SATURDAY"].INSTINCT_OF_RAWBOOST_MIXERS.KILO;

    var xValues = ["PEDIGREE", "WHISKAS", "TOTW", "IORM"];
    var yValues = [a, b, c, d];
    
    new Chart("myKiloWeekChart", {
        type: "bar",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: "#304D63",
                data: yValues,
                label: "Kilogram/s"
            }]
        },
        options: {
            legend: {
                display: true
            },
            title: {
                display: true,
                text: "EXPECTED KILOGRAMS FOR NEXT WEEK"
            }
        }
    });
    
    
    
    // Amount get per day
    
    var day1 = +processedOrder["SUNDAY"].PEDIGREE_MOTHER_AND_BABYDOG_MILK_FLAVOR.PRICE +
        +processedOrder["SUNDAY"].INSTINCT_OF_RAWBOOST_MIXERS.PRICE +
        +processedOrder["SUNDAY"].TASTE_OF_THE_WILD_ANCIENT_PRAIRIE.PRICE+
        +processedOrder["SUNDAY"].WHISKAS_DRY_CAT_FOOD.PRICE;

    
var day2 = +processedOrder["MONDAY"].PEDIGREE_MOTHER_AND_BABYDOG_MILK_FLAVOR.PRICE +
        +processedOrder["MONDAY"].INSTINCT_OF_RAWBOOST_MIXERS.PRICE +
        +processedOrder["MONDAY"].TASTE_OF_THE_WILD_ANCIENT_PRAIRIE.PRICE+
        +processedOrder["MONDAY"].WHISKAS_DRY_CAT_FOOD.PRICE;

 
var day3 = +processedOrder["TUESDAY"].PEDIGREE_MOTHER_AND_BABYDOG_MILK_FLAVOR.PRICE +
        +processedOrder["TUESDAY"].INSTINCT_OF_RAWBOOST_MIXERS.PRICE +
        +processedOrder["TUESDAY"].TASTE_OF_THE_WILD_ANCIENT_PRAIRIE.PRICE+
        +processedOrder["TUESDAY"].WHISKAS_DRY_CAT_FOOD.PRICE;

var day4 = +processedOrder["WEDNESDAY"].PEDIGREE_MOTHER_AND_BABYDOG_MILK_FLAVOR.PRICE+
        +processedOrder["WEDNESDAY"].INSTINCT_OF_RAWBOOST_MIXERS.PRICE +
        +processedOrder["WEDNESDAY"].TASTE_OF_THE_WILD_ANCIENT_PRAIRIE.PRICE+
        +processedOrder["WEDNESDAY"].WHISKAS_DRY_CAT_FOOD.PRICE;

var day5 = +processedOrder["THURSDAY"].PEDIGREE_MOTHER_AND_BABYDOG_MILK_FLAVOR.PRICE +
        +processedOrder["THURSDAY"].INSTINCT_OF_RAWBOOST_MIXERS.PRICE +
        +processedOrder["THURSDAY"].TASTE_OF_THE_WILD_ANCIENT_PRAIRIE.PRICE+
        +processedOrder["THURSDAY"].WHISKAS_DRY_CAT_FOOD.PRICE;

var day6 = +processedOrder["FRIDAY"].PEDIGREE_MOTHER_AND_BABYDOG_MILK_FLAVOR.PRICE +
        +processedOrder["FRIDAY"].INSTINCT_OF_RAWBOOST_MIXERS.PRICE +
        +processedOrder["FRIDAY"].TASTE_OF_THE_WILD_ANCIENT_PRAIRIE.PRICE+
        +processedOrder["FRIDAY"].WHISKAS_DRY_CAT_FOOD.PRICE;

var day7 = +processedOrder["SATURDAY"].PEDIGREE_MOTHER_AND_BABYDOG_MILK_FLAVOR.PRICE +
        +processedOrder["SATURDAY"].INSTINCT_OF_RAWBOOST_MIXERS.PRICE +
        +processedOrder["SATURDAY"].TASTE_OF_THE_WILD_ANCIENT_PRAIRIE.PRICE+
        +processedOrder["SATURDAY"].WHISKAS_DRY_CAT_FOOD.PRICE;


    var xAmountValues = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
    var yValues = [day1, day2, day3, day4, day5, day6, day7];

    new Chart("myPriceChart", {
        type: "bar",
        data: {
            labels: xAmountValues,
            datasets: [{
                backgroundColor: "#E50058",
                data: yValues,
                borderColor: "#F18C8E",
                fill: false,
                label: "Philippine Peso"
            }]
        },
        options: {
            legend: {
                display: true
            },
            title: {
                display: true,
                text: "AMOUNT OF MONEY RECEIVED FROM PET FOODS PER DAY"
            }
        }
    });
    
}
