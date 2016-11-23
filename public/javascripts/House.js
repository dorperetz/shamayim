app.controller('house', ['$scope', '$http', '$state', '$interval', '$mdDialog', '$mdSidenav', function($scope, $http, $state, $interval, $mdDialog, $mdSidenav) {
    // Get value from the cookie
    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1);
            if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
        }
        return "";
    }
    // Just print kind of 'hay message'
    $scope.message = 'M. ' + getCookie("username");
    $scope.DebterName = "";
    $scope.house_id = "1";
    $scope.state = "ca";
    $scope.city = "la";
    $scope.street = "bafla";
    $scope.house_number = 32;
    $scope.house_kind = 3;
    $scope.number_of_rooms = 1;
    $scope.number_of_living_rooms = 1;
    $scope.number_of_kitchens = 1;
    $scope.number_of_bedrooms = 1;
    $scope.number_of_bathrooms = 1;
    $scope.location_kind = 5;
    $scope.comments = "???? ???? ???? ???? ?????";
    $scope.purchase_price = 0.0;
    $scope.treatment_fees = 21.2;
    $scope.renovation_fees = 54.5;
    $scope.divers_fees = 54.2;
    $scope.userName = getCookie("username");
    var houseName = "";
    var tempArr = [];


    // For the house
    $scope.houses = {
        availableOptions: [],
        selectedOption: {
            id: '1',
            house: 'default'
        }
    };

    function showAlert(title, textContent, ariaLabel) {
        // Appending dialog to document.body to cover sidenav in docs app
        // Modal dialogs should fully cover application
        // to prevent interaction outside of dialog
        $mdDialog.show(
            $mdDialog.alert()
            .parent(angular.element(document.querySelector('#popupContainer')))
            .clickOutsideToClose(true)
            .title(title)
            .textContent(textContent)
            .ariaLabel(ariaLabel)
        );
    }
    // Get information conserning the
    $http.get("/GET_LIST_OF_HOUSES")
        .then(function successCallback(response) {
                angular.forEach(response.data.houses, function(value, key) {
                    itemName = {
                        id: key,
                        house: value
                    }
                    tempArr.push(itemName);
                    $scope.houses.availableOptions.push(itemName.house);
                }, $scope.houses);
            },
            function error(response) {
                showAlert("Your attention please", response.data, "cant load houses");
            });

    function checkIfNeedConfirming() {
        // While Thread
        // Get information conserning the
        $http.get("/GET_LIST_OF_HOUSES")
            .then(function successCallback(response) {
                    angular.forEach(response.data.houses, function(value, key) {
                        itemName = {
                            id: key,
                            house: value
                        }
                        tempArr.push(itemName);
                        $scope.houses.availableOptions.push(itemName.house);
                    }, $scope.houses);
                },
                function error(response) {
                    showAlert("Your attention please", response.data, "cant load houses");
                });
    }
    $interval(checkIfNeedConfirming, 200000);


    // Logic methods section
    function getHouse(nHouseId) {
        // Get information conserning the house
        $http.get("/GET_HOUSE_BY_ID/" + nHouseId)
            .then(function successCallback(response) {
                    $scope.house_id = response.data.house.house_id;
                    $scope.state = response.data.house.state;
                    $scope.city = response.data.house.city;
                    $scope.street = response.data.house.street;
                    $scope.house_number = response.data.house.house_number;
                    $scope.house_kind = response.data.house.house_kind;
                    $scope.number_of_rooms = response.data.house.number_of_rooms;
                    $scope.number_of_living_rooms = response.data.house.number_of_living_rooms;
                    $scope.number_of_kitchens = response.data.house.number_of_kitchens;
                    $scope.number_of_bedrooms = response.data.house.number_of_bedrooms;
                    $scope.number_of_bathrooms = response.data.house.number_of_bathrooms;
                    $scope.location_kind = response.data.house.location_kind;
                    $scope.comments = response.data.house.comments;
                    $scope.purchase_price = response.data.house.purchase_price;
                    $scope.treatment_fees = response.data.house.treatment_fees;
                    $scope.renovation_fees = response.data.house.renovation_fees;
                    $scope.divers_fees = response.data.house.divers_fees;
                },
                function error(response) {
                    showAlert("Your attention please", response.data, "cant load houses");
                });
    }



    // Just check if there is a user name
    if (getCookie("username") == null) {
        // Go to the main application
        $state.go('wellcom');
    }

    $scope.$watch('houses.selectedOption', function(newVal, oldVal) {
        if (newVal != oldVal) {
            houseName = newVal;
            //alert(newVal.house_number + " " + newVal.street + " " + newVal.city + " " + newVal.state + " " + newVal.house_id);
            getHouse(newVal.house_id);

        }
    })
    $scope.toggleLeft = function() {
        $mdSidenav('left').toggle();
    }
    $scope.goToCopyright = function() {
        $state.go('Copyright');
    }
    $scope.goToUserInformation = function() {
        $state.go('userInformation');
    }
    $scope.goToGroups = function() {
        $state.go('Groups');
    }
    $scope.goToHouses = function() {
        $state.go('Houses');
    }
    $scope.goToNewHouse = function() {
        $state.go('NewOrEditHouse');
    }
    $scope.goToHouse = function() {
        $state.go('House');
    }

    var results = {
        "results": [{
            "address_components": [{
                "long_name": "1600",
                "short_name": "1600",
                "types": ["street_number"]
            }, {
                "long_name": "Amphitheatre Pkwy",
                "short_name": "Amphitheatre Pkwy",
                "types": ["route"]
            }, {
                "long_name": "Mountain View",
                "short_name": "Mountain View",
                "types": ["locality", "political"]
            }, {
                "long_name": "Santa Clara County",
                "short_name": "Santa Clara County",
                "types": ["administrative_area_level_2", "political"]
            }, {
                "long_name": "California",
                "short_name": "CA",
                "types": ["administrative_area_level_1", "political"]
            }, {
                "long_name": "United States",
                "short_name": "US",
                "types": ["country", "political"]
            }, {
                "long_name": "94043",
                "short_name": "94043",
                "types": ["postal_code"]
            }],
            "formatted_address": "1600 Amphitheatre Parkway, Mountain View, CA 94043, USA",
            "geometry": {
                "location": {
                    "lat": 37.4224764,
                    "lng": -122.0842499
                },
                "location_type": "ROOFTOP",
                "viewport": {
                    "northeast": {
                        "lat": 37.4238253802915,
                        "lng": -122.0829009197085
                    },
                    "southwest": {
                        "lat": 37.4211274197085,
                        "lng": -122.0855988802915
                    }
                }
            },
            "place_id": "ChIJ2eUgeAK6j4ARbn5u_wAGqWA",
            "types": ["street_address"]
        }],
        "status": "OK"
    }
var latitude = results.results[0].geometry.location.lat;
var longitude = results.results[0].geometry.location.lng;

    var uluru = {
        lat: latitude,
        lng: longitude
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });


function newMapLocation(nNumberOfHouse,szStreetName,szCityName,szStateName)
{
//https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY
https://maps.googleapis.com/maps/api/geocode/json?address="nNumberOfHouse+szStreetName+szCityName,+szStateName&key=YOUR_API_KEY;
}

}]);