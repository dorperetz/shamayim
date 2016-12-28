app.controller('welcome', ['$scope', '$http', '$state', '$interval', '$mdDialog', '$mdSidenav', 'ShamayimFunctions', '$rootScope', function ($scope, $http, $state, $interval, $mdDialog, $mdSidenav, ShamayimFunctions, $rootScope) {

    $scope.state_1;
    $scope.city_1 = "";
    $scope.street_1 = "";
    $scope.house_number_1;
    $scope.house_kind_1;
    $scope.number_of_rooms_1;
    $scope.number_of_living_rooms_1;
    $scope.number_of_kitchens_1;
    $scope.number_of_bedrooms_1;
    $scope.number_of_bathrooms_1;
    $scope.location_kind_1;
    $scope.comments_1 = "";
    $scope.purchase_price_1;
    $scope.treatment_fees_1;
    $scope.renovation_fees_for_sale_1;
    $scope.renovation_fees_for_renting_1;
    $scope.divers_fees_1;
    
    $scope.state_2;
        $scope.city_2 = "";
        $scope.street_2 = "";
        $scope.house_number_2;
        $scope.house_kind_2;
        $scope.number_of_rooms_2;
        $scope.number_of_living_rooms_2;
        $scope.number_of_kitchens_2;
        $scope.number_of_bedrooms_2;
        $scope.number_of_bathrooms_2;
        $scope.location_kind_2;
        $scope.comments_2 = "";
        $scope.purchase_price_2;
        $scope.treatment_fees_2;
        $scope.renovation_fees_for_sale_2;
        $scope.renovation_fees_for_renting_2;
        $scope.divers_fees_2;
    var houseName = "";
    var tempArr = [];
    $rootScope.dictionary;
    var results;
    // For the house
    $scope.houses = {
        availableOptions: [],
        selectedOption: {
            id: '1',
            house: 'default'
        }
    };


    // For Images
    $scope.housePathesImages = {
        availableOptions: [],
        selectedOption: {
            id: '1',
            imagesSource: 'default'
        }
    };

    $scope.houseImages = {
        availableOptions: [],
        selectedOption: {
            id: '1',
            image: 'default'
        }
    };

    var totalPages = 0;


    function getHouseImages(nHouseId) {
        totalPages = 0;
        $http.get('/GET_FILES_PATHS/' + nHouseId)
            .then(function successCallback(response) {
                    angular.forEach(response.data.files, function (value, key) {
                        itemName = {
                            id: key,
                            imagesSource: value
                        }
                        totalPages++;
                        $scope.housePathesImages.availableOptions.push(itemName.imagesSource);
                    }, $scope.housePathesImages);
$scope.paging = {
    total: totalPages,
    current: 1,
    onPageChanged: loadPages,
  };
                },
                function error(response) {
                    showAlert("Your attention please", response.data, "cant load houses");
                });
    }

    // Logic methods section
    function getHouse1(nHouseId) {
        // Get information conserning the house
        $http.get("/GET_HOUSE_BY_ID/" + nHouseId)
            .then(function successCallback(response) {
                    $scope.state_1 = response.data.house.state;
                    $scope.city_1 = response.data.house.city;
                    $scope.street_1 = response.data.house.street;
                    $scope.house_number_1 = response.data.house.house_number;
                    $scope.house_kind_1 = response.data.house.house_kind;
                    $scope.number_of_rooms_1 = response.data.house.number_of_rooms;
                    $scope.number_of_living_rooms_1 = response.data.house.number_of_living_rooms;
                    $scope.number_of_kitchens_1 = response.data.house.number_of_kitchens;
                    $scope.number_of_bedrooms_1 = response.data.house.number_of_bedrooms;
                    $scope.number_of_bathrooms_1 = response.data.house.number_of_bathrooms;
                    $scope.location_kind_1 = response.data.house.location_kind;
                    $scope.comments_1 = response.data.house.comments;
                    $scope.purchase_price_1 = response.data.house.purchase_price;
                    $scope.treatment_fees_1 = response.data.house.treatment_fees;
                    $scope.renovation_fees_for_sale_1 = response.data.house.renovation_fees_for_sale;
                    $scope.renovation_fees_for_renting_1 = response.data.house.renovation_fees_for_renting;
                    $scope.divers_fees_1 = response.data.house.divers_fees;
                    newMapLocation($scope.house_number, $scope.street, $scope.city, $scope.state);
                    $scope.houseWasLoaded =  true;
                },
                function error(response) {
                    ShamayimFunctions.showAlert("Your attention please", response.data, "cant load houses");
                });

        // Get images
        $scope.houseImages.availableOptions = [];
        $scope.housePathesImages.availableOptions = [];
        getHouseImages(nHouseId);

    }
getHouse1(1);
 // Logic methods section
    function getHouse2(nHouseId) {
        // Get information conserning the house
        $http.get("/GET_HOUSE_BY_ID/" + nHouseId)
            .then(function successCallback(response) {
                    $scope.state_2 = response.data.house.state;
                    $scope.city_2 = response.data.house.city;
                    $scope.street_2 = response.data.house.street;
                    $scope.house_number_2 = response.data.house.house_number;
                    $scope.house_kind_2 = response.data.house.house_kind;
                    $scope.number_of_rooms_2 = response.data.house.number_of_rooms;
                    $scope.number_of_living_rooms_2 = response.data.house.number_of_living_rooms;
                    $scope.number_of_kitchens_2 = response.data.house.number_of_kitchens;
                    $scope.number_of_bedrooms_2 = response.data.house.number_of_bedrooms;
                    $scope.number_of_bathrooms_2 = response.data.house.number_of_bathrooms;
                    $scope.location_kind_2 = response.data.house.location_kind;
                    $scope.comments_2 = response.data.house.comments;
                    $scope.purchase_price_2 = response.data.house.purchase_price;
                    $scope.treatment_fees_2 = response.data.house.treatment_fees;
                    $scope.renovation_fees_for_sale_2 = response.data.house.renovation_fees_for_sale;
                    $scope.renovation_fees_for_renting_2 = response.data.house.renovation_fees_for_renting;
                    $scope.divers_fees_2 = response.data.house.divers_fees;
                    newMapLocation($scope.house_number, $scope.street, $scope.city, $scope.state);
                    $scope.houseWasLoaded =  true;
                },
                function error(response) {
                    ShamayimFunctions.showAlert("Your attention please", response.data, "cant load houses");
                });

        // Get images
        $scope.houseImages.availableOptions = [];
        $scope.housePathesImages.availableOptions = [];
        getHouseImages(nHouseId);

    }
getHouse2(2);

    $scope.sendMeMail = function (szHouseId) {
        // Get information conserning the house
        $http.get("/SEND_ME_THE_HOUSE/" + ShamayimFunctions.getCookie("username") + "/" + szHouseId)
            .then(function successCallback(response) {
                    ShamayimFunctions.showAlert("Operation Success Open You Mail To See The House", response.data, "");
                },
                function error(response) {
                    ShamayimFunctions.showAlert("Your attention please", response.data, "cant load houses");
                });

    }


    // Language Section

    $rootScope.Languages = {
        availableOptions: [],
        selectedOption: {
            id: '1',
            HouseLanguage: 'default'
        }
    };

    $rootScope.Languages = ShamayimFunctions.getExistingLanguages();

    function getLanguage(szLanguageName) {
        // Get information conserning the house
        $http.get("/GET_LANGUAGE/" + szLanguageName)
            .then(function successCallback(response) {
                    $rootScope.dictionary = response.data;
                    $rootScope.pageDirection = $rootScope.dictionary.Dictionary[0].PageDirection;
                },
                function error(response) {
                    ShamayimFunctions.showAlert("Your attention please", response.data, "cant load houses");
                });
        ShamayimFunctions.setLanguageCookie(szLanguageName);

    }

    var languageToGet = ShamayimFunctions.setLanguageCookie();

    if (languageToGet == null) {
        languageToGet = "עברית";
    }

    getLanguage(languageToGet);

    $rootScope.$watch('Languages.selectedOption', function (newVal, oldVal) {
        if (newVal != oldVal) {
            HouseLanguageName = newVal;
            getLanguage(newVal);

        }
    })

    // End Of Language Section

    // Just check if there is a user name
    if (ShamayimFunctions.getCookie("username") == null) {
        // Go to the main application
        $state.go('wellcom');
    }
    getLanguage("English");
    $scope.$watch('houses.selectedOption', function (newVal, oldVal) {
        if (newVal != oldVal) {
            houseName = newVal;
            getHouse(newVal.house_id);

        }
    })

    $rootScope.bIsLoged = true;





    function newMapLocation(nNumberOfHouse, szStreetName, szCityName, szStateName) {
        var longitude = 0.0;
        var latitude = 0.0;

        // Get information conserning the house
        $http.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + nNumberOfHouse + "," + szStreetName + "," + szCityName + "," + szStateName + "&key=AIzaSyCOx3ErCzTt9zayUQluJsKo_Gpnp4ztMbI")
            .then(function successCallback(response) {
                    latitude = response.data.results[0].geometry.location.lat;
                    longitude = response.data.results[0].geometry.location.lng;
                    var uluru = {
                        lat: latitude,
                        lng: longitude
                    };
                    var map1 = new google.maps.Map(document.getElementById('map1'), {
                        zoom: 15,
                        center: uluru
                    });
                    var marker = new google.maps.Marker({
                        position: uluru,
                        map: map
                    });
                },
                function error(response) {
                    ShamayimFunctions.showAlert("Your attention please", response.data, "cant load maps");
                });

    }
    $scope.imageSrc = "images/background.jpg";
    $rootScope.toggleLeft = function () {
        $mdSidenav('left').toggle();
    }
    $rootScope.goToCopyright = function () {
        $state.go('Copyright');
    }
    $rootScope.goToUserInformation = function () {
        $state.go('userInformation');
    }
    $rootScope.goToHouses = function () {
        $state.go('Houses');
    }
    $rootScope.goToNewHouse = function () {
        $state.go('NewOrEditHouse');
    }
    $rootScope.goToHouse = function () {
        $state.go('House');
    }
    $rootScope.goToHouse = function () {
        $state.go('House');
    }


$scope.currentPage = 0;
  $scope.paging = {
    total: totalPages,
    current: 1,
    onPageChanged: loadPages,
  };
  function loadPages() {
    console.log('Current page is : ' + $scope.paging.current);
    $scope.currentPage = $scope.paging.current;
$scope.houseImage = $scope.housePathesImages.availableOptions[$scope.currentPage - 1];
  }


}]).directive('lazyLoad', function ($timeout) {
    return {
        restrict: 'A',
        scope: {},
        link: function (scope, elem, attrs) {
            $timeout(function () {
                elem.attr('src', attrs.llSrc)
            });
        },
    }
});
