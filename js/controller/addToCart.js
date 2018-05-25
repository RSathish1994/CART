    var app = angular.module("addToCardApp", []);

app.controller("addToCardController", function($scope, $timeout) {

    $scope.products = [

        {
            "product_id": 1,
            "product_name": "smasung galaxy s6",
            "product_desc": "4GB RAM , 32GB ROM",
            "product_image": "./images/samsung.png",
            "product_price": "22000",
            "product_Selection": false

        },
        {
            "product_id": 2,
            "product_name": "huawei A1",
            "product_desc": "3GB RAM , 32GB ROM",
            "product_image": "./images/huawei.jpg",
            "product_price": "10000",
            "product_Selection": false

        },
        {
            "product_id": 3,
            "product_name": "phanasonic P6",
            "product_desc": "3GB RAM , 32GB ROM",
            "product_image": "./images/gallery-.png",
            "product_price": "12000",
            "product_Selection": false
        }

    ];



    $scope.cart = [];
    $scope.addToCart = function(productIndex, value, Product) {

        $scope.callGG($scope.products[productIndex]);
        if (value) {
            $scope.cart.push($scope.products[productIndex]);
        }

        if (value == false) {

        	for (var i = 0; i < $scope.cart.length; i++) {

            if ($scope.cart[i].product_id == Product.product_id) {
                $scope.cart.splice(i, 1);
                break;

            }
        }

        $scope.initlize();


        }
    }
    $scope.removeItemFromCart = function(itemIndex, item) {

        $scope.cart.splice(itemIndex, 1);

        for (var i = 0; i < $scope.products.length; i++) {

            if ($scope.products[i].product_id == item.product_id) {
                $scope.products[i].product_Selection = false;
                break;

            }
        }

        $scope.initlize();

    }

    $scope.callGG = function(product) {
        $timeout(function() {
            remove(product);
        }, 120000);
    }

    $scope.remove = function(product) {
        for (var i = 0; i < $scope.products.length; i++) {

            if ($scope.products[i].product_id == product.product_id) {
                $scope.products[i].product_Selection = false;
                break;
            }
        }

        for (var j = 0; j < $scope.cart.length; j++) {

            if ($scope.cart[j].product_id == product.product_id) {
                $scope.cart.splice(j, 1);
                break;

            }
        }

        $scope.initlize();
    }

    $scope.initlize = function(){

    	if($scope.cart.length == 0){

        	$scope.totalValue = 0;
        }
    }

    $scope.getTotal = function(){

    	var total = 0;

    	angular.forEach($scope.cart, function(value){

    		 total += (value.product_price == "") ? 0 : (value.product_price == undefined) ? 0 :  parseFloat(value.product_price);

    		$scope.totalValue = total;
    	});
    }

});