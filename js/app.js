// var app = angular.module('rtpsmapp', ['ui.router','ui.bootstrap','angular-loading-bar','angularUtils.directives.dirPagination']);



var app = angular.module('yangapp', ['ui.router', 'ui.bootstrap']);

//google.charts.load('current', {'packages':['geochart','corechart','controls']});	

//google.setOnLoadCallback(function() {
//	  angular.bootstrap(document.body, ['rtpsmapp']);
//});

// To define global variables
app.constant('globalVars', { sortCol: false, sortColName: '' });

// another way to define global variables
var UserConfig = {};

// this app depends on Angular UI router

function showLog(msg, obj) {
    console.log(msg);
    if (obj)
        console.log(obj);
};


//document.getElementById('navbar').innerHTML = 'Hello JavaScript!'


// The following uses ngRoute
// app.config(function ($routeProvider) {

//     $routeProvider.when('/', {
//         templateUrl: '/index.html',
//         controller: 'indexController'
//     }).when('/contact', {
//         templateUrl: 'html/contact.html',
//         controller: 'contactController'
//     }).when('/products', {
//         templateUrl: 'html/products.html',
//         controller: 'productController'
//     }).otherwise({
//         redirectTo: "/"
//     });

//     app.controller('indexController', function ($scope, $state, $http, sharedbook, $filter) {
//     });

// });

app.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "html/home.html",
                params: { 'sortGenTime': false, 'anotherKey': null }
            })
            .state('products', {
                url: "/products",
                templateUrl: "html/products.html"
            })
            .state('contact', {
                url: "/contact",
                templateUrl: "html/contact.html"
            })
    }
]);

//         // The following is not needed. We will not provide GUI to to post alerts
//         // Posting alert will use the url:
//         // http://zldv6315.vci.att.com:8888/testPost to post the alert data

//         /*		.state('postAlert', {
//          url: "/postalert",
//          templateUrl: "templates/postAlert.html"
//          })*/
//     }
// ]);

app.run(function ($rootScope, $state) {
    $rootScope.$state = $state;
});

app.service('sharedbook', function () {
    var property = [];
    return {
        getProperty: function () {
            return property;
        },
        setProperty: function (value) {
            property = value;
        }
    };
});

// for datetime picker

// given an array of books, arr, return all the books whose bookname or authorname match the value of the variable, searchBook, 
// which is bounded to an input in home.htnl

app.filter('searchFor', function () {
    return function (arr, searchAlert) {
        if (!searchAlert) {
            return arr;
        }
        var result = [];
        searchAlert = searchAlert.toLowerCase();
        angular.forEach(arr, function (item) {
            // The following "AlertID" should be the same as in home.html: <td>{{item.AlertID}}</td>
            // The following sentence assumes that each document has the fields, AlertID and AlertSource. If not so
            // the browser will see errors when we try to search something

            //			if(item.alertId.toLowerCase().indexOf(searchAlert) !== -1 
            //					|| item.sourceName.toLowerCase().indexOf(searchAlert) !== -1
            //					|| item.alertType.toLowerCase().indexOf(searchAlert) !== -1
            //					|| item.alertAction.toLowerCase().indexOf(searchAlert) !== -1
            //					|| item.alertSeverity.toLowerCase().indexOf(searchAlert) !== -1
            //					|| item.eventStartTimestamp.toLowerCase().indexOf(searchAlert) !== -1
            //					){
            //				result.push(item);
            //			}
            UserConfig.columnToShow.forEach(function (val) {

                if (item[val].toLowerCase().indexOf(searchAlert) != -1) {
                    result.push(item);
                }
            });

        });
        return result;
    };
});

// this controller needs AngularJS internally provided service $http, and we ourself defined service, sharebook
// it is used in home.html

//Given a rule object, which contains all the user selected search criteria, returning 
// an object, which contains two objects: 1. rule4 and ruleSelection. So the returning 
// object returnRule = {
// 	 "rule4" : {rule4},
// 	 "ruleSelection : {ruleSelection}
// }
// where rule4 object is an object which will be used by mongoDB, and
// ruleSelection is an object to remember what the user selected in the search page 
// so that we can remember what user selected and its format help us to get back
// user's selection easily




// used in index.html
app.controller('indexController', function ($scope, $http, $state) {
    // $http.get(webhost + "/getSearchResources").success(function (response) {

    //     $scope.attuid = response.attuid;
    //     var nameArray = response.userName.split(" ");
    //     var tmpStr = nameArray[0].toLowerCase();
    //     $scope.userName = tmpStr.slice(0, 1).toUpperCase() + tmpStr.slice(1);
    // });
});

app.controller('contact', function ($scope, $http, $state) {

});

app.controller('home', function ($scope, $http, $state) {
    showLog("in home controller");
    function CarouselCtrl($scope) {

        // initializing the time Interval
        $scope.myInterval = 10000;

        // Initializing  slide rray  
        $scope.slides = [
            { image: 'http://www.wetwebmedia.com/fwsubwebindex/Cyprinodontiform%20PIX/Platy%20PIX/Xiphophorus%20maculatusAQ%20Neon%20female.jpg', text: 'Cute Fish' },

            { image: 'http://www.wetwebmedia.com/fwsubwebindex/Cyprinodontiform%20PIX/Platy%20PIX/Xiphophorus%20maculatusAQ%20Neon%20female.jpg', text: 'Image2' },
            { image: 'http://www.wetwebmedia.com/fwsubwebindex/Cyprinodontiform%20PIX/Swordtail%20PIX/Xiphophorus%20helleriAQ%20Hifin%20Black%20males.jpg', text: 'Image3' },
            { image: 'http://www.wetwebmedia.com/fwsubwebindex/Cyprinodontiform%20PIX/Platy%20PIX/Xiphophorus%20maculatusAQ%20Neon%20female.jpg', text: 'Image4' }
        ];

        var slides = $scope.slides;
        console.log(slides);
    }
    CarouselCtrl($scope);
});

app.controller('products', function ($scope, $http, $state) {
  $scope.X="123";
});

