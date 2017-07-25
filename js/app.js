// var app = angular.module('rtpsmapp', ['ui.router','ui.bootstrap','angular-loading-bar','angularUtils.directives.dirPagination']);



var app = angular.module('yangapp', ['ngRoute']);

//google.charts.load('current', {'packages':['geochart','corechart','controls']});	

//google.setOnLoadCallback(function() {
//	  angular.bootstrap(document.body, ['rtpsmapp']);
//});

// To define global variables
app.constant('globalVars', {sortCol: false, sortColName: ''});

// another way to define global variables
var UserConfig = {};

// To add a 0 before d, if d < 10 -- used in format date string
function add0(d) {
    if (d < 10) {
        d = '0' + d;
    }
    return d;
}


// to convert a date string, 06/01/2016 1:01 AM, to 20160601010100

function convertTimeToString(dateString) {

    var st = new Date(dateString);
    var dd = add0(st.getDate());
    var mm = add0(st.getMonth() + 1); // now months are 1-12
    var yyyy = st.getFullYear();
    var hh = add0(st.getHours());
    var min = add0(st.getMinutes());
    var sec = add0(st.getSeconds());
    var result = "" + yyyy + mm + dd + hh + min + sec;
    return result;

}
;

function drawDashboard() {
 //   showLog("asdf666 inside drawDashboard")

    // draw the map
    var data = google.visualization.arrayToDataTable([
        ['Country', 'Event #'],
        ['Germany', 200],
        ['United States', 700],
        ['Brazil', 450],
        ['Australia', 500],
        ['Canada', 500],
        ['British', 600],
        ['China', 700],
        ['RU', 300]
    ]);

    var options = {};

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);

    // draw the combo chart
    var data3 = google.visualization.arrayToDataTable([
        ['Month', 'Mobility', 'DCAK-KPI', 'DCAE-L3', 'Compass', 'VoIP', 'Average'],
        ['2016/02', 165, 938, 522, 998, 450, 614.6],
        ['2016/03', 135, 1120, 599, 1268, 288, 682],
        ['2016/04', 157, 1167, 587, 807, 397, 623],
        ['2016/05', 139, 1110, 615, 968, 215, 609.4],
        ['2016/06', 136, 691, 629, 1026, 366, 569.6]
    ]);

    var options3 = {
        vAxis: {title: 'Alert Numbers'},
        hAxis: {title: 'Month'},
        seriesType: 'bars',
        series: {5: {type: 'line'}},
        width: 600,
        height: 300
    };

    var chart3 = new google.visualization.ComboChart(document.getElementById('combo_div'));
    chart3.draw(data3, options3);


    // draw the pie
    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Topping');
    data2.addColumn('number', 'Slices');
    data2.addRows([
        ['Element-Anomaly', 3],
        ['Interface-Anomaly', 1],
        ['User-KPI-Related', 1],
        ['Equipment-Related', 1],
        ['DNR', 2]
    ]);

    // Set chart options

    var options2 = {
        'pieHole': 0.3,
        'width': 400,
        'height': 210};

    // Instantiate and draw our chart, passing in some options.
    var chart2 = new google.visualization.PieChart(document.getElementById('pieChart_div'));
    chart2.draw(data2, options2);

    // To draw line charts

    var data4 = google.visualization.arrayToDataTable([
        ['Month', 'Critical', 'Major', 'Minor'],
        ['2016.1', 600, 720, 640],
        ['2016.2', 220, 300, 760],
        ['2016.3', 1000, 400, 360],
        ['2016.4', 1170, 460, 777, ],
        ['2016.5', 660, 1120, 666],
        ['2016.6', 1030, 540, 1240]
    ]);

    var options4 = {
        curveType: 'function',
        width: 600,
        legend: {position: 'bottom'}
    };

    var chart4 = new google.visualization.LineChart(document.getElementById('lineChart_div'));
    chart4.draw(data4, options4);

    // to draw marker chart, alert hot spot
    var data5 = google.visualization.arrayToDataTable([
        ['City', 'Total Alerts', 'Area'],
        ['Rome', 2761477, 1285.31],
        ['Milan', 1324110, 181.76],
        ['Naples', 959574, 117.27],
        ['Turin', 907563, 130.17],
        ['Palermo', 655875, 158.9],
        ['Genoa', 607906, 243.60],
        ['Bologna', 380181, 140.7],
        ['Florence', 371282, 102.41],
        ['Fiumicino', 67370, 213.44],
        ['Anzio', 52192, 43.43],
        ['Ciampino', 38262, 11]
    ]);

    var options5 = {
        region: 'IT',
        displayMode: 'markers',
        colorAxis: {colors: ['green', 'blue']}
    };

    var chart5 = new google.visualization.GeoChart(document.getElementById('markerChart_div'));
    chart5.draw(data5, options5);

    // draw gauge chart
    var data6 = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['Memory', 80],
        ['Delay', 55],
        ['Jitter', 68]
    ]);

    var options6 = {
        width: 600, height: 150,
        redFrom: 90, redTo: 100,
        yellowFrom: 75, yellowTo: 90,
        minorTicks: 5
    };

    var chart6 = new google.visualization.Gauge(document.getElementById('gaugeChart_div'));

    chart6.draw(data6, options6);

    setInterval(function () {
        data6.setValue(0, 1, 40 + Math.round(60 * Math.random()));
        chart6.draw(data6, options6);
    }, 8000);
    setInterval(function () {
        data6.setValue(1, 1, 40 + Math.round(60 * Math.random()));
        chart6.draw(data6, options6);
    }, 5000);
    setInterval(function () {
        data6.setValue(2, 1, 60 + Math.round(20 * Math.random()));
        chart6.draw(data6, options6);
    }, 2000);



}
;

// this app depends on Angular UI router

//var host = "http://zldv6315.vci.att.com:8888";
// var webhost = "http://" + rtpsm.webhost + ":" + rtpsm.webPort;
function showLog(msg, obj) {
    console.log(msg);
    if (obj)
        console.log(obj);
};


//document.getElementById('navbar').innerHTML = 'Hello JavaScript!'

app.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider
                .state('home', {
                    url: "/home",
                    templateUrl: "templates/home.html",
                    params:      {'sortGenTime': false, 'anotherKey': null}
                })
                .state('Dashboard', {
                    url: "/dashboard",
                    templateUrl: "templates/dashboard.html"
                })
                .state('Search', {
                    url: "/search",
                    templateUrl: "templates/search.html"
                })
                .state('Config', {
                    url: "/config",
                    templateUrl: "templates/config.html"
                })
                .state('eventDetail', {
                    url: "/eventDetail/:eventID",
                    templateUrl: "templates/eventDetail.html"
                })
                .state('Newbook', {
                    url: "/addnew",
                    templateUrl: "templates/newbook.html"
                })
                .state('Editbook', {
                    url: "/editbook",
                    templateUrl: "templates/editbook.html"
                })




        // The following is not needed. We will not provide GUI to to post alerts
        // Posting alert will use the url:
        // http://zldv6315.vci.att.com:8888/testPost to post the alert data

        /*		.state('postAlert', {
         url: "/postalert",
         templateUrl: "templates/postAlert.html"
         })*/
    }
]);

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

function formatRule(rule) {
    // rule may have something like
    // {"sources": ["VOIP","DCAE-L3"],
    //"types":["INTERFACE-ANOMALY","USER-KPI-RELATED"]
    //}
    // the returning object looks like:
    // {__and : [{__or:[{sourceName:"s1"}, {sourceName:"s2"}]}, {__or:[{alertType:"t1"},{alertType:"t2"}]}]}

    // to construct object ruleSelection, which is used to remember what user
    // has selected various search criteria. For example
    // ruleseSelection = {
    //		sourceName = ["src1", "src2"],
    //		alertType = ["type1", "type2", "type3"]
    //}
    var ruleArray = [];
    var returnRule = {};
    var ruleSelection = {};
    var rule4 = {};
    var alertIdRule = {};

 //   var alertId = 
    for(var i in rule.alertId) {
        var alertId = rule.alertId;
    }
    // alertId = /^SME/;

    var sources = rule.selectedSources4;
    var types = rule.selectedTypes3;  // type is an array of strings
    var networkSets = rule.selectedNetworkSets;
    var elementTypes = rule.selectedElementTypes;
    var actions = rule.actions;
    var activeStatuses = rule.activeStatuses;
    
    var severities = rule.severities;

    var sourceArray = []; // used to contruct the search rule
    if (sources) {
        // user selected sources
        ruleSelection["sourceName"] = sources;
        orStr = "";
        for (i = 0; i < sources.length; i++) {
            var srcObj = new Object();
            srcObj["sourceName"] = sources[i];
            sourceArray[i] = srcObj;
            orStr = orStr +
                    "{\"sourceName\":" + "\"" + sources[i] + "\"},";

        }
    }

    if (sourceArray.length > 0) {
        var srcRule = new Object();
        srcRule["__or"] = sourceArray;
    }

    var typeArray = []; // used to contruct the search rule
    if (types) {
        // user selected types
        ruleSelection["alertType"] = types;
        orStr = "";
        for (i = 0; i < types.length; i++) {
            var typeObj = {};
            typeObj["alertType"] = types[i];
            typeArray[i] = typeObj
            orStr = orStr +
                    "{'alertType':" + "'" + types[i] + "'},";
        }
        if (types.length >= 1) {
            var typeRule = new Object();
            typeRule["__or"] = typeArray;
        }
    }
    
    var actionArray = [];
    if (actions) {
        orStr = "";
        actions.forEach(function (val) {
           var tObj = {}; 
           tObj["alertAction"] = val;
           actionArray.push(tObj);
        });
        if(actions.length >0) {
            var actionRule = {};
            actionRule["__or"] = actionArray;
        }       
    }
    
    var activeStatusArray = [];
    if (activeStatuses) {
        orStr = "";
        activeStatuses.forEach(function (val) {
           var tObj = {}; 
           tObj["activeStatus"] = val;
           activeStatusArray.push(tObj);
        });
        if(activeStatuses.length >0) {
            var activeStatusRule = {};
            activeStatusRule["__or"] = activeStatusArray;
        }       
    }   

   var severityArray = [];
    if (severities) {
        orStr = "";
        severities.forEach(function (val) {
           var tObj = {}; 
           tObj["alertSeverity"] = val;
           severityArray.push(tObj);
        });
        if(severities.length >0) {
            var severityRule = {};
            severityRule["__or"] = severityArray;
        }       
    }
    if(severityRule){
        ruleArray.push(severityRule);
    }
    
    var networkSetArray = [];
     if (networkSets) {
        networkSets.forEach(function (val) {
           var tObj = {}; 
           tObj["networkService"] = val;
           networkSetArray.push(tObj);
        });
        if(networkSets.length >0) {
            var networkSetRule = {};
            networkSetRule["__or"] = networkSetArray;
        }       
    }
    if(networkSetRule){
        ruleArray.push(networkSetRule);
    }   
 
     var elementTypeArray = [];
     if (elementTypes) {
        elementTypes.forEach(function (val) {
           var tObj = {}; 
           tObj["elementType"] = val;
           elementTypeArray.push(tObj);
        });
        if(elementTypes.length >0) {
            var elementTypetRule = {};
            elementTypetRule["__or"] = elementTypeArray;
        }       
    }
    if(elementTypetRule){
        ruleArray.push(elementTypetRule);
    } 
    
    if (srcRule) {
        ruleArray.push(srcRule);
    }
    if (typeRule) {
        ruleArray.push(typeRule);
    }
    if (actionRule) {
        ruleArray.push(actionRule);
    }
    if(activeStatusRule) {
    	ruleArray.push(activeStatusRule);
    }
    

    var stRule = {};
    if (rule.startTime) {
        stRule["eventStartTimestamp"] = {__gte: rule.startTime};
        ruleArray.push(stRule);
//	ruleArray["eventStartTimestamp"] = {$lt : rule.startTime};
    }
    var etRule = {};
    if (rule.endTime) {
        etRule["eventStartTimestamp"] = {__lte: rule.endTime};
        ruleArray.push(etRule);
//	ruleArray["eventStartTimestamp"] = {$lt : rule.startTime};
    }

    if (alertId) {
 //       showLog("asdf100 alertId=", alertId.length);
        alertIdRule["alertId"] = alertId;

        ruleArray.push(alertIdRule);
    }
    if (ruleArray.length > 0) {
        rule4["__and"] = ruleArray;
    }

    returnRule["rule4"] = rule4;
    returnRule["ruleSelection"] = ruleSelection;

//	return returnRule;

    return rule4;
}

function unique(list) {
    var result = [];
    $.each(list, function (i, e) {
        if ($.inArray(e, result) == -1)
            result.push(e);
    });
    return result;
}

app.controller('dashboard', function ($scope, $state, $http, sharedbook, $filter) {
//	  google.charts.load('current', {'packages':['geochart','corechart','controls']});
//      google.charts.setOnLoadCallback(drawDashboard);
//      
//      

    // the following is uesed to test metadata
    
    var dashboardData = {
        "thisWeekQ" : "67,269",
        "dqPctChange" : 8,
        "top5Q": ["Ericsson", "1507 Release", "CDR", "Rainstor", "PRIDE"],
        "totalDataByDB" : [
            ["Database 1", "157"],
            ["Database 2", "56"],
            ["Database 3", "28"],
            ["Database 4", "27"],
            ["Database 5", "25"],
        ],

        "rowsAddedByDB" : [
            {
             "databaseName":"DSC",
             "totalRowsLoaded" : ["157","148"]
            },
            {
             "databaseName":"PRIDE 2.0",
             "totalRowsLoaded" : ["88","97"]
            },
            {
             "databaseName":"Optima",
             "totalRowsLoaded" : ["28","30"]
            },
            {
             "databaseName":"PMCM",
             "totalRowsLoaded" : ["27","26"]
            },
            {
             "databaseName":"PRIDE 1.0",
             "totalRowsLoaded" : ["25","18"]
            },
         ],                        
    };
    

    
    // To calculate the width of each block
    var allAddedRows = [];
    dashboardData.rowsAddedByDB.forEach(function (val) {
        var tmpA = val.totalRowsLoaded;
        allAddedRows.push(tmpA[0]);
        allAddedRows.push(tmpA[1]);
    });
        
//    showLog("asdf allAddedRows=",allAddedRows);
    var maxR = Math.max.apply(Math,allAddedRows);
    
    
    // assume canvas length is 200;
    var canvasW = 200;
    var blockWidthP = canvasW/maxR;
    
 //       showLog("asdf maxR", maxR);

    $scope.blockWidthP = blockWidthP;
    // if a block has number X, its width should be
    // x * blockWidthP;
    
    $scope.getStyle = function(x,y) {
        hColors=["#ff6600", "#ff9966", "#ff6600", "#ffcc99","#00cc00","#33cc33",
        "#0033cc","#0099ff","#000099","#0099ffC"];
        var tmpA = dashboardData.rowsAddedByDB[x].totalRowsLoaded;
   //     showLog("asdf tmpA=", tmpA);
  //      showLog("asdf tmpA[Y]=", tmpA[y]);

        var barW = Math.floor(blockWidthP * tmpA[y]);
        var style = "width:" + barW + "px;" + "background-color:" + hColors[2*x+y];
 //       showLog("asdf style=", style);
        return style;
       // return "width: 140px"
    };
    
    $scope.getAddedRows = function(x,y) {
        var tmpA = dashboardData.rowsAddedByDB[x].totalRowsLoaded;
        return tmpA[y];
    };
    
    $scope.getDBname = function(idx) {
        return dashboardData.rowsAddedByDB[idx].databaseName;
    }; 
    
    
    $scope.dashboardData = dashboardData;
     
    var data4 = {
        type : 'donut',
        onclick: function (d, i, v) { console.log("onclick", d, i, v); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }, 
        tooltip: {
            format: {
                value: function (value, ratio, id) {
                    return value;
                }
            }
        } 
    };
  
    data4["columns"]= dashboardData.totalDataByDB;
    
    // for the horizontal bar
    //D3
    
    /***
    var data = [4, 8, 15, 16, 23, 42];

    var x = d3.scale.linear()
            .domain([0, d3.max(data)])
            .range([0, 420]);
    showLog("asdf x=",x);

    d3.select(".Hchart1")
            .selectAll("div")
            .data(data)
            .enter().append("div")
            .style("width", function(d) { return x(d) + "px"; })
            .text(function(d) { return d; });
    
    ***/
   
    
    //C3
    var chart = c3.generate({
        bindto: '#Hchart',
        padding: {
            left: 60
        },
        data: {
            x: 'x',
            columns:
                    [
                ['x', 'Category1'],
                ['value', 10]
            ],
            type: 'bar'
        },
        axis: {
            rotated: true,
 //           x: {
 //               type: 'category'
 //           }
              x: {show: false},
              y: {show: false}
        }
        
    });
                    
    
    
    
    
    var chart = c3.generate({
        bindto: '#totalDataByDB',
        data: data4,

    });
 //        size: {height:200}   


    try {
        drawDashboard();
    } catch (err) {
        showLog("asdf68 Caught an error");
    }

//google.charts.load('current');   // Don't need to specify chart libraries!
//google.charts.setOnLoadCallback(drawVisualization);

});

app.controller('configRTPSM', function ($scope, $state, $http, sharedbook, $filter) {
    var attuid;
    // to get all the possible columns
    var sourceFields = [];  // all the ueb source fields, [alertId, sourceName, ...]
    var displayFields = []; // all the ueb display fields, [ID, Source, ...]
    $http.get(webhost + "/getConfig").success(function (response) {
        attuid = response.attuid;
 //       showLog("asdf10 response=", response);
        if (response.error === 0) {
            displayFields = response.results.uebAlertField.displayFields;
            sourceFields = response.results.uebAlertField.sourceFields;
            //   		showLog("asdf10.1 length=", response.results.userConfig.length)
            var config1 = (response.results.userConfig) ?
                    response.results.userConfig.config : response.results.sysConfig.config;
   //         showLog("asdf11 config1=", config1);
            $scope.config = config1;
            var displayFields1 = []; // left side select

            var displayFields2 = []; // right side select
            for (i = 0; i < displayFields.length; i++) {
                displayFields1[i] = displayFields[i];
            }

            for (i = 0; i < config1.columnToShow.length; i++) {
                for (j = 0; j < sourceFields.length; j++) {
                    if (config1.columnToShow[i] == sourceFields[j]) {
                        displayFields2[i] = displayFields[j];
                        displayFields1[j] = null;
                        break;
                    }
                }
            }
            $scope.displayFields = [];
//    		for(i=0;i<displayFields1.length;i++) {
//    			if(displayFields1[i] != null) {
//    				$scope.displayFields.push(displayFields1[i]);
//    			}
//    		}
            displayFields1.forEach(function (val) {
                if (val != null)
                    $scope.displayFields.push(val);
            });
            $scope.selectedFields = displayFields2;
        } else {
            showLog("Error in getting config resource");
        }
    });

    // the following function is called when the moveRight button, >,  is clicked
    $scope.moveRight = function (event) {
        // to prevent adding parameters to URL
        event.preventDefault();

        if (!$scope.config.leftDispFields) {
            // nothing is selected on the left
            document.getElementById("saveInfo").innerHTML =
                    '<div class="alert alert-success alert-dismissable">' +
                    '<button type="button" class="close" ' +
                    'data-dismiss="alert" aria-hidden="true">' +
                    '&times;' +
                    '</button>' +
                    'Select column(s) from the left list before click the "Move To Right" button.' +
                    '</div>';
            return;
        }
//		var selects = document.getElementById("leftCols").options;
//		showLog("asdf43.1 selects=", selects);




        // move the selected item to the right
        var n = $scope.config.leftDispFields.length;
        for (i = 0; i < n; i++) {
            $scope.selectedFields.push($scope.config.leftDispFields[i]);
        }

        // remove the selected items from left
        // the left side array = $scope.displayFields minus $scope.config.leftDispFields
        // array
        $scope.displayFields = $scope.displayFields.filter(function (el) {
            return $scope.config.leftDispFields.indexOf(el) < 0;
        });

        $scope.config.leftDispFields = undefined;
    };


    // the following function is called when the moveLeft button, <,  is clicked
    $scope.moveLeft = function (event) {
        // to prevent adding parameters to URL
        event.preventDefault();
        if (!$scope.config.rightDispFields) {
            // nothing is selected on the left
            document.getElementById("saveInfo").innerHTML =
                    '<div class="alert alert-success alert-dismissable">' +
                    '<button type="button" class="close" ' +
                    'data-dismiss="alert" aria-hidden="true">' +
                    '&times;' +
                    '</button>' +
                    'Select column(s) from the right list before click the "Move To Left" button.' +
                    '</div>';

            return;
        }

        // move the selected item to the left
        var n = $scope.config.rightDispFields.length;
        for (i = 0; i < n; i++) {
            $scope.displayFields.push($scope.config.rightDispFields[i]);
        }

        // remove the selected items from right

        $scope.selectedFields = $scope.selectedFields.filter(function (el) {
            return $scope.config.rightDispFields.indexOf(el) < 0;
        });

        $scope.config.rightDispFields = undefined;
    };

    // the following function is called when the Save button is clicked
    $scope.saveConfig = function (event) {
        // to prevent adding parameters to URL
        event.preventDefault();


        // to save the config
        var config = $scope.config;
//		var selects = document.getElementById("multiselect_to").options;


        
        var sourceFieldsToSave = [];

        $scope.selectedFields.forEach(function (val) {
            //		var dispField = val;
            displayFields.forEach(function (val1, idx1) {
                if (val == val1) {
                    sourceFieldsToSave.push(sourceFields[idx1]);
                }
            });
        });
        var userConfig = {};
        userConfig["maxEventN"] = config.maxEventN;
        userConfig["pageEventN"] = config.pageEventN;
        userConfig["columnToShow"] = sourceFieldsToSave;
        

        $http.post(webhost + "/saveUserConfig", userConfig).success(function (res) {
            if (res.error == 0) {
                // to display the saved info
                document.getElementById("saveInfo").innerHTML =
                        '<div class="alert alert-success alert-dismissable">' +
                        '<button type="button" class="close" ' +
                        'data-dismiss="alert" aria-hidden="true">' +
                        '&times;' +
                        '</button>' +
                        'Your Configuration was saved.' +
                        '</div>';

            } else {
                showLog("error in saveUserConfig");
            }
        });



        // to display the saved info
        document.getElementById("saveInfo").innerHTML =
                '<div class="alert alert-success alert-dismissable">' +
                '<button type="button" class="close" ' +
                'data-dismiss="alert" aria-hidden="true">' +
                '&times;' +
                '</button>' +
                'Your Configuration was saved.' +
                '</div>';

    }; // end of saveConfig definition


});

app.controller('alertList', function ($scope, $state, $stateParams, $http, globalVars, sharedbook, $filter) {
    $scope.alertlist = [];
    $scope.pageSize = 20;
    $scope.currentPage = 1;
    
 //   showLog("asdf in alertList params=", $stateParams);

//	$scope.sortType= 'eventStartTimestamp';
    $scope.sortReverse = true;

    $scope.clickTableColName = function (colName) {
 //      showLog("asdf11 colName=", colName);
        $scope.sortType = colName;
        $scope.sortReverse = !$scope.sortReverse;
    };

    var sourceFields = [];  // all the ueb source fields, [alertId, sourceName, ...]
    var displayFields = []; // all the ueb display fields, [ID, Source, ...]	
    $http.get(webhost + "/getConfig").success(function (response) {
        if (response.error === 0) {
            attuid = response.attuid;
//	    	showLog("asdf10 response=", response);
            var config1 = (response.results.userConfig) ?
                    response.results.userConfig.config : response.results.sysConfig.config;
            displayFields = response.results.uebAlertField.displayFields;
            sourceFields = response.results.uebAlertField.sourceFields;
            $scope.sourceFields = sourceFields;
            UserConfig = config1; // send it to a global variale, so that other function can use

            $scope.pageSize = (config1) ? config1.pageEventN : 20;
            $scope.colNames = [];
            config1.columnToShow.forEach(function (val) {
                sourceFields.forEach(function (val1, idx1) {
                    if (val == val1) {
                        var tObj = {};
                        tObj["source"] = val;
                        tObj["disp"] = displayFields[idx1]
                        $scope.colNames.push(tObj);
                    }
                });

            });

 //           showLog("asdf colNames=", $scope.colNames);
            
            $http.get(webhost + "/alert").success(function (response2) {
                if (response2.error === 0) {
                    // response.Alerts comes from server.js app.get('/alert',...) func
                    $scope.alertlist = response2.Alerts; // response.Alerts contains the value of the variable Alerts
                    // when we visit http://localhost:8080/alert
                    $scope.items2 = $scope.alertlist;
                    $scope.$watch('searchAlert', function (val) {
                        $scope.alertlist = $filter('searchFor')($scope.items2, val);
                        if (globalVars.sortCol) {
                            $scope.sortReverse = false;
                            $scope.sortType = globalVars.sortColName;
                        }

                    });

                    if ($stateParams.sortGenTime) {
                    	// arrived here from list history of the alert
 //                   	showLog("asdf666 sort gen time");
                    	$scope.clickTableColName("alertGenerationTimestamp");
                    }
                } else {
                    $scope.alertlist = [];
                }
            });



        } else {
            showLog("Error in getting config resource");
        }

    });

//	$http.get(webhost+"/alert").success(function(response){
//		if(response.error === 0){
//			// response.Alerts comes from server.js app.get('/alert',...) func
//			$scope.alertlist = response.Alerts; // response.Alerts contains the value of the variable Alerts
//				// when we visit http://localhost:8080/alert
//			$scope.items2 = $scope.alertlist;
//			$scope.$watch('searchAlert', function(val){ 
//				$scope.alertlist = $filter('searchFor')($scope.items2, val);
//			});
//		}else{
//			$scope.alertlist = [];
//		}
//	});
    
 

});

// used in index.html
app.controller('indexController', function ($scope, $http, $state) {
    $http.get(webhost + "/getSearchResources").success(function (response) {

        $scope.attuid = response.attuid;
        var nameArray = response.userName.split(" ");
        var tmpStr = nameArray[0].toLowerCase();
        $scope.userName = tmpStr.slice(0, 1).toUpperCase() + tmpStr.slice(1);
    });
});


// used by search.html

app.controller('search-alerts', function ($scope, $http, $state, globalVars) {

//	globalVars.sortCol = true;
//	globalVars.sortColName = 'alertSeverity';
    $scope.parent = {endTime: ''};
    $scope.showSaveRuleDiv = false;

//	 $scope.endTime = '';
//	 $('#endTime').datepicker().on('changeDate', function (ev) {
//	        $scope.endTime= $('#endTime').val();
//	        $scope.$digest();
//	        $scope.$watch('endTime', function (newValue, oldValue) {
//	             $scope.endTime= newValue;
//	        });
//	    });

//	 showLog("asdf22 endTime", $scope.parent);

    // The following makes the <a> in the dropdown selection of search.html not go to #
    // The <a> in the dropdown can keep the menu hanging after a user click a checkbox

    var searchDropdownOptions = [];
    $('.dropdown-menu a').on('click', function (event) {

        var $target = $(event.currentTarget),
                val = $target.attr('data-value'),
                $inp = $target.find('input'),
                idx;

        if ((idx = searchDropdownOptions.indexOf(val)) > -1) {
            searchDropdownOptions.splice(idx, 1);
            setTimeout(function () {
                $inp.prop('checked', false)
            }, 0);
        } else {
            searchDropdownOptions.push(val);
            setTimeout(function () {
                $inp.prop('checked', true)
            }, 0);
        }

        $(event.target).blur();
        
        $scope.rule.actions=[];
        $scope.rule.severities=[];
        var actionArray = ["SET","CONT","CLEAR"];
        var severityArray=["Critical","Major","Minor"];
        
        angular.forEach(searchDropdownOptions, function(val) {
            if (actionArray.indexOf(val) > -1) {
                $scope.rule.actions.push(val);
            }
            if (severityArray.indexOf(val) > -1) {
                $scope.rule.severities.push(val);
                $scope.rule.severities.push(val.toUpperCase());
            }
        });
        
          return false;
    });
    
    



    var flatDftRule = {}; // used to remember the user default search rule in a flat object
    // it looks like:
    // { "sourceName" : [src1, src2,...],
    //    "alertType" : [t1, t2, ...]
    // ... ...
    // }

    flatDftRule["alertId"] = [];
    flatDftRule["sourceName"] = [];
    flatDftRule["alertType"] = [];
    flatDftRule["networkService"] = [];
    flatDftRule["elementType"] = [];  
    
    flatDftRule["alertAction"] = [];
    flatDftRule["alertSeverity"] = [];
    flatDftRule["activeStatus"] = [];
//    flatDftRule["eventStartTimestamp"] = [];

    // given a complex obj, this function make the embedded json object a flat object, save it in flatDftRule
    
    function iterate(obj) {
        for (var property in obj) {
//            showLog("asdf72 property=", property);
//            showLog("asdf73 obj[property]=",obj[property]);           
            if(property == "alertId") { 
            	if(obj[property].__regex) {           
            		flatDftRule[property] = obj[property].__regex;
            	} else {
            		flatDftRule[property]=obj[property];
            	}
            } else if (property == "eventStartTimestamp" && obj[property].__gte) {
                flatDftRule["startTime"]= obj[property].__gte;
            } else if (property == "eventStartTimestamp" && obj[property].__lte) {
                flatDftRule["endTime"]=obj[property].__lte;
            } 
            if (obj.hasOwnProperty(property)) {
                if (typeof obj[property] == "object") {
                    iterate(obj[property]);
                } else {
  //                  showLog("asdf74 property=", property);
  //                 showLog("asdf75 obj[property]=",obj[property]);
                    if (flatDftRule[property] && Array.isArray(flatDftRule[property]) ) {    
                        flatDftRule[property].push(obj[property]);
                    } else {
            //            flatDftRule[property] = obj[property];
                    }

                }
            }
        }
    };
    
//    showLog("asdf123 flatDftRule=", flatDftRule);

    // to get user info, available alert sources, types, etc
    $scope.sourceName = [];
    $scope.alertType = [];
    $scope.networkSets2 = [];
    $scope.elementTypes2 = [];
    $http.get(webhost + "/getSearchResources").success(function (response) {
//              	showLog("asdf124, response=", response);

        if (response.error === 0) {
            // response.user comes from server.js app.get('/UserInfo',...) func
            $scope.attuid = response.attuid;
            //	    $scope.rule.sources=$scope.AlertSources;
            $scope.alertSources = response.AlertSources;
            $scope.availableTypes = response.AlertTypes;
            $scope.networkSets = response.NetworkSets;
            $scope.elementTypes = response.ElementTypes;



            // now, networkSets is an array, each element has the same structure as 
            // it is in the db, i.e.
            // {"source":"XXX",networkSets:["s1","s2",...]}
            // we need to convert the structure of each element of the array  
            // to {"networkSet":"xxx","Selected":"0"}

            // the following works with static network set, each networkset is associated with a
            // alert source
//	    var networkSets2 = []; // each element is a networkSet string "xxx"
//	    for (i=0; i < $scope.networkSets.length; i++) {
//	    	var tSet = $scope.networkSets[i].networkSets;
//	    	for (j=0; j < tSet.length; j++) {
//	    		networkSets2.push(tSet[j]);
//	    	}
//	    }

//	    networkSets2 = networkSets2.sort();
//	    var networkSets3 = unique(networkSets2);
//	    for (i=0; i < networkSets3.length; i++) {
//	    	if ( networkSets3[i] != "") {
//	    		var tmpO = {};
//	    		tmpO["selected"] = 0;	
//	    		tmpO["networkSet"] = networkSets3[i];
//	    		$scope.networkSets2.push(tmpO);   
//	    	}
//	    }

            // the following works with a dynamic network set. A network set (networkService in 
            // UEB term), has not related to network source

            var networkSets2 = $scope.networkSets.sort(); // each element is a networkSet string "xxx

            for (i = 0; i < networkSets2.length; i++) {
                if (networkSets2[i] && networkSets2[i] != " " && networkSets2[i].length > 0) {
                    var tmpO = {};
                    tmpO["selected"] = 0;
                    tmpO["networkSet"] = networkSets2[i];
                    $scope.networkSets2.push(tmpO);
                }
            }


            var elementTypes2 = $scope.elementTypes.sort();

            for (i = 0; i < elementTypes2.length; i++) {
                if (elementTypes2[i] && elementTypes2[i].length > 0 && elementTypes2[i] != " ") {
                    var tmpO = {};
                    tmpO["selected"] = 0;
                    tmpO["elementType"] = elementTypes2[i];
                    $scope.elementTypes2.push(tmpO);
                }
            }

            // the following works when $scope.alertSources[i] is an object (static source list)
//	    var sourceArray = [];
//	    for (i=0; i < $scope.alertSources.length; i++) {
//	    	sourceArray.push($scope.alertSources[i].source);
//	    }
//	    var sortedArray3 =  sourceArray.sort();
//		var sortedArray4 = unique(sortedArray3);
//		for (i=0; i < sortedArray4.length; i++) {
//		    var tmpO = {};
//		    tmpO["selected"] = 0;
//		    tmpO["source"] =  sortedArray4[i];
//		    $scope.alertSources4.push(tmpO);    
//		}

            // the following works when $scope.alertSources[i] is a string (dynamice list)
            var sourceArray = $scope.alertSources;
            sortedArray = sourceArray.sort();
            for (i = 0; i < sortedArray.length; i++) {
                if (sortedArray[i] && sortedArray[i].length > 0 && sortedArray[i] != " ") {
                    var tmpO = {};
                    tmpO["selected"] = 0;
                    tmpO["source"] = sortedArray[i];
                    $scope.sourceName.push(tmpO);
                }
            }

//	 the following works when each type is associated with alert source	 

//	    var typeArray = [];
//	    for (i=0; i < $scope.alertTypes.length; i++) {
//	    	for (j=0;j < $scope.alertTypes[i].types.length; j++) {
//	    		
//	    		typeArray.push($scope.alertTypes[i].types[j]);
//	    	}
//	    }
//	    typeArray = typeArray.sort();
//	    typeArray = unique(typeArray);
//		for (i=0; i < typeArray.length; i++) {
//		    var tmpO = {};
//		    tmpO["selected"] = 0;
//		    tmpO["type"] =  typeArray[i];
//		    $scope.alertTypes4.push(tmpO);    
//		}

            // the following works when each type is a string, not associated with alert source
            var typeArray = $scope.availableTypes;
            typeArray = typeArray.sort();
            for (i = 0; i < typeArray.length; i++) {
                if (typeArray[i] && typeArray[i].length > 0 && typeArray[i] != " ") {
                    var tmpO = {};
                    tmpO["selected"] = 0;
                    tmpO["type"] = typeArray[i];
                    $scope.alertType.push(tmpO);
                }
            }

            // to use the defRule to set the current search page
            var dftRule = response.dftRule;
 //            showLog("asdf80 dftRule=", dftRule);
           iterate(dftRule);
//            showLog("asdf81 flatDftRule=", flatDftRule);
            var tmpSelectedSources = [];
            for (i = 0; i < flatDftRule["sourceName"].length; i++) {
                for (j = 0; j < $scope.sourceName.length; j++) {
                    if (flatDftRule.sourceName[i] == $scope.sourceName[j].source) {
                        $scope.sourceName[j].selected = 1;
                        tmpSelectedSources.push($scope.sourceName[j].source);
                        //	$scope.rule.selectedSources4=
 //                       showLog("asdf14", $scope.sourceName[j]);
                        break;
                    }
                }
            }
      
            var tmpSelectedTypes = [];
            for (i = 0; i < flatDftRule["alertType"].length; i++) {
                for (j = 0; j < $scope.alertType.length; j++) {
                    if (flatDftRule.alertType[i] == $scope.alertType[j].type) {
                        $scope.alertType[j].selected = 1;
                        tmpSelectedTypes.push($scope.alertType[j].type);
                         break;
                    }
                }
            }
 
            var tmpSelectedNetworkSets = [];

            for (i = 0; i < flatDftRule["networkService"].length; i++) {
                for (j = 0; j < $scope.networkSets2.length; j++) {
                    if (flatDftRule.networkService[i] == $scope.networkSets2[j].networkSet) {
                        $scope.networkSets2[j].selected = 1;
                        tmpSelectedNetworkSets.push($scope.networkSets2[j].networkSet);
                         break;
                    }
                }
            }
            
            var tmpSelectedElements = [];
            
             for (i = 0; i < flatDftRule["elementType"].length; i++) {
                for (j = 0; j < $scope.elementTypes2.length; j++) {
                    if (flatDftRule.elementType[i] == $scope.elementTypes2[j].elementType) {
                        $scope.elementTypes2[j].selected = 1;
                        tmpSelectedElements.push($scope.elementTypes2[j].elementType);
                         break;
                    }
                }
            }  
            
            // To remember used alertId
            $scope.rule.alertId = flatDftRule.alertId;
      //      showLog("asdf82 alertId = ", $scope.rule.alertId);
            $scope.rule.selectedSources4 = tmpSelectedSources; // this way to remember the selections work!
            $scope.rule.selectedTypes3=tmpSelectedTypes;
            $scope.rule.selectedNetworkSets = tmpSelectedNetworkSets;
            $scope.rule.selectedElementTypes = tmpSelectedElements;   
     
            // the following will impact the initial date/time
            var str="";
            if (flatDftRule.startTime) {
                str = flatDftRule.startTime;
                $scope.parent.startTime2 = str.substring(4,6)+'/'+
                        str.substring(6,8)+'/'+str.substring(0,4)+
                        ' '+str.substring(8,10)+":"+str.substring(10,12);              
            }
             if (flatDftRule.endTime) {
                str = flatDftRule.endTime; 
                $scope.parent.endTime2 = str.substring(4,6)+'/'+
                        str.substring(6,8)+'/'+str.substring(0,4)+
                        ' '+str.substring(8,10)+":"+str.substring(10,12);
            }
  //          $scope.parent.endTime2 = "s2";
            
            flatDftRule.alertAction.forEach(function (val) {
//                $scope.rule.actions.push(val);
                if(val == "SET") {
                    document.getElementById("actionSet").checked=true; 
                    searchDropdownOptions.push(val);
                } else if (val == "CONT") {
                    document.getElementById("actionCont").checked=true;                   
                    searchDropdownOptions.push(val);
                } else if (val == "CLEAR") {
                    document.getElementById("actionClear").checked=true; 
                    searchDropdownOptions.push(val);                    
                } 
            });
            
            flatDftRule.activeStatus.forEach(function (val) {
//              $scope.rule.actions.push(val);
              if(val == "Completed") {
                  document.getElementById("completedAlert").checked=true; 
                  $scope.rule.completedAlert = true;
              } 
              if (val == "Active") {
                  document.getElementById("activeAlert").checked=true; 
                  $scope.rule.activeAlert = true;
              } 
          });      
 
            flatDftRule.alertSeverity.forEach(function (val) {
                if(val == "Critical") {
                    document.getElementById("sevCritical").checked=true; 
                    searchDropdownOptions.push(val);
                } else if (val == "Major") {
                    document.getElementById("sevMajor").checked=true;                   
                    searchDropdownOptions.push(val);
                } else if (val == "Minor") {
                    document.getElementById("sevMinor").checked=true; 
                    searchDropdownOptions.push(val);                   
                } 
            });

            

            for (i = 0; i < flatDftRule["alertType"].length; i++) {
                for (j = 0; j < $scope.alertType.length; j++) {
                    if (flatDftRule.alertType[i] == $scope.alertType[j].type) {
                        $scope.alertType[j].selected = 1;
                        break;
                    }
                }
            }



        } else {
            $scope.user = [];
        }
    });



    // this function is called when a user clicked the list of the alert source
    $scope.updateSources = function () {
        $scope.availableTypes = [];
        $scope.availableTypes2 = [];
        $scope.availableTypes3 = [];

        var selectedSources = $scope.rule.selectedSources2;
        var selectedTypes = $scope.rule.selectedTypes2;
        var selectedTypes3 = $scope.rule.selectedTypes3;



        for (i = 0; i < selectedSources.length; i++) {
            var selSource = selectedSources[i].source;
            angular.forEach($scope.alertTypes, function (value) {
                if (value.source == selSource) {
                    for (j = 0; j < value.types.length; j++) {

                        $scope.availableTypes.push(value.types[j]);

                    }
                }

            });
        }
        var sortedArray = $scope.availableTypes.sort();
        $scope.availableTypes = unique(sortedArray);
        $scope.rule.selectedTypes2 = selectedTypes;

        var sortedArray2 = unique(sortedArray);

        for (i = 0; i < sortedArray2.length; i++) {
            var tmpO = {};
            tmpO["selected"] = 0;
            tmpO["type"] = sortedArray2[i];
            if (selectedTypes3) {
                for (j = 0; j < selectedTypes3.length; j++) {
                    if (sortedArray2[i] == selectedTypes3[j]) {
                        tmpO["selected"] = 1;
                    }
                }
            }
            $scope.availableTypes3.push(tmpO);


//	    $scope.availableTypes3[i].type = tmpO["type"];
//	    $scope.availableTypes3[i].selected = tmpO["selected"];

        }


        // to clear rule.selectedTypes3. a type should be removed if
        // it is not in the available type list

        var validSelectedTypes = [];
        if (selectedTypes3) {
            for (i = 0; i < selectedTypes3.length; i++) {
                for (j = 0; j < $scope.availableTypes3.length; j++) {
                    if (selectedTypes3[i] == $scope.availableTypes3[j].type) {
                        validSelectedTypes.push(selectedTypes3[i]);
                        break;
                    }
                }
            }
        }

        $scope.rule.selectedTypes3 = validSelectedTypes;

    }

    // This functio is called when you click "Save Rule..."
     $scope.saveRule = function (event) {
        event.preventDefault();
        $scope.showSaveRuleDiv = true;
    };  
 
    // This functio is called when you click "Cancel" to cancel save search rule
     $scope.cancelSaveRule = function (event) {
        event.preventDefault();
        $scope.showSaveRuleDiv = false;
    };
     
     // the following function is called when clicked "Reset" in search.html to reset all the search criteria to empty
    // or blank


    $scope.resetSearchRule = function (event) {
        event.preventDefault();
        document.getElementById("searchForm").reset();
        searchDropdownOptions = [];
 
        $scope.rule.alertId = "";
        $scope.rule.selectedSources4 = "";
        $scope.rule.selectedTypes3 = "";
        $scope.rule.selectedNetworkSets = "";
        $scope.rule.selectedElementTypes = "";
        $scope.rule.activeAlert = false;
        $scope.rule.completedAlert = false;
        
//        document.getElementById("actionSet").checked=false; 
//        document.getElementById("actionCont").checked=false; 
//        document.getElementById("actionClear").checked=false; 
//        document.getElementById("sevCritical").checked=false; 
//        document.getElementById("sevMajor").checked=false; 
//        document.getElementById("sevMinor").checked=false; 
//        searchDropdownOptions = [];
//        
    };

    // the following function is called when clicked "Generate Search Rule" in search.html
    $scope.makeSearchRule = function () {
    	$scope.rule.activeStatuses = [];
        if ($scope.rule.activeAlert) {
       	 $scope.rule.activeStatuses.push("Active");
        }
        if ($scope.rule.completedAlert) {
       	 $scope.rule.activeStatuses.push("Completed");
        }
//    	showLog("asdf11 rule", $scope.rule);
        var rule5 = formatRule($scope.rule);
//        showLog("asdf12 rule5", rule5);
        var str = JSON.stringify(rule5);

        $scope.rule.interactive = str;
    };

    // the following function is called when clicked Search button
    $scope.rule = {};

    $scope.setSearchRule = function (event) {
        event.preventDefault();

        // used for datetimepicker
        var startTime = document.getElementsByName("eventTimes")[0].value;
        var endTime = document.getElementsByName("eventTimes")[1].value;
//      	var myDate = new Date(startTime);
//      	console.log((myDate.getMonth() + 1) + "-" + myDate.getDate() + "-" + myDate.getFullYear());
//      	console.log(myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds() + 
//      			":" + myDate.getMilliseconds());
// 

        var st = convertTimeToString(startTime);
        var et = convertTimeToString(endTime);

        if (startTime)
            $scope.rule["startTime"] = st;
        if (endTime)
            $scope.rule["endTime"] = et;

//        if(flatDftRule["alertAction"].length>0) {
//            $scope.rule.actions = flatDftRule["alertAction"];
//        }
         var actionArray = ["SET","CONT","CLEAR"];
         var severityArray=["Critical","Major","Minor"];
         $scope.rule.actions=[];
         $scope.rule.severities=[];
         $scope.rule.activeStatuses = [];
         
         if ($scope.rule.activeAlert) {
        	 $scope.rule.activeStatuses.push("Active");
         }
         if ($scope.rule.completedAlert) {
        	 $scope.rule.activeStatuses.push("Completed");
         }
        
    
        angular.forEach(searchDropdownOptions, function(val) {
            if (actionArray.indexOf(val) > -1) {
                $scope.rule.actions.push(val);
            }
            if (severityArray.indexOf(val) > -1) {
                $scope.rule.severities.push(val);
                $scope.rule.severities.push(val.toUpperCase());
            }
        });
        
 //       showLog("asdf5 rule after click search", $scope.rule);

        var useRegExp = 1;
        var rule5 = formatRule($scope.rule, useRegExp);

 //       showLog("asdf6 rule after click search", rule5);
        
        var parameters = {useRegExp:1}

        $http.post(webhost + "/setDftSearchRule/"+'?'+$.param(parameters), rule5).success(function (res) {
            if (res.error == 0) {
                $state.go("home");
            } else {
                showLog("error in setDftSearchRule");
            }
        });

    };

    // the following function is called when clicked "Search with the Rule" button
    $scope.setInteractiveSearchRule = function () {
        var ruleStr = $scope.rule.interactive;
        showLog("asdf10 ruleStr", ruleStr);
        var rule = JSON.parse(ruleStr);
 
        showLog("asdf11 bf set dftRule, rule=", rule);
        $http.post(webhost + "/setDftSearchRule", rule).success(function (res) {
            if (res.error == 0) {
                $state.go("home");
            } else {

            }
        });
    };


});

app.controller('eventDetail', function ($scope, $location, $http, $state, $stateParams, globalVars) {
 //   showLog("asdf55 param=", $location.search('_id'));
//    showLog("asdf55 instanceID=", $stateParams);

    $scope.eventHistory = function (event) {
        event.preventDefault();
 //       showLog("asdf12 id=", $stateParams["eventID"]);

    }
//	globalVars.sortCol = true;
//	globalVars.sortColName = 'alertSeverity';

    var attuid;
    // to get all the possible columns
    var sourceFields = [];  // all the ueb source fields, [alertId, sourceName, ...]
    var displayFields = []; // all the ueb display fields, [ID, Source, ...]
    $scope.eventDetail = {};
    $http.get(webhost + "/getConfig").success(function (response) {
        attuid = response.attuid;
 //       showLog("asdf10 response=", response);
        if (response.error === 0) {
            displayFields = response.results.uebAlertField.displayFields;
            sourceFields = response.results.uebAlertField.sourceFields;
            $scope.dispFields = [];
            $scope.dispValues = [];
            displayFields.forEach(function (val) {
                if (val != null)
                    $scope.dispFields.push(val);
            });

  //          showLog("asdf11 param=", $stateParams["eventID"]);
            $http.get(webhost + "/getEventDetail/" + $stateParams["eventID"]).success(function (response2) {
                if (response2.error === 0) {
                    //  				$scope.eventDetail = response2.eventDetail;
                    // 				showLog("asdf11 eventDetail=", $scope.eventDetail);
 //                   showLog("asdf11 response2=", response2);

                	sourceFields.forEach(function (val) {
    //            		showLog("asdf 12 eventDetail-"+val, response2.eventDetail[val]);
                        if (response2.eventDetail[val] == "" || !response2.eventDetail[val]) {
                            $scope.dispValues.push("___");
                        } else {
                            $scope.dispValues.push(response2.eventDetail[val]);
                        }
                    });
                } else {
                    $scope.eventDetail = {};
                }
   //             showLog("asdf12 dispFields=", $scope.dispFields);
    //            showLog("asdf13 dispValuess=", $scope.dispValues);



            });
        } else {
            showLog("Error in getting config resource");
        }
    });
    
    // the following function is called when History button is pressed
    $scope.eventHistory = function(event) {
//        showLog("asdf665 dispValuess=", $scope.dispValues);

    	$scope.rule={};
        event.preventDefault();
        $scope.rule.alertId = $scope.dispValues[0];
 //       showLog("asdf665.1 alertId=", $scope.rule.alertId);
        
        var rule5 = formatRule($scope.rule);
 //       showLog("asdf666 rule after click search", rule5);
        var parameters = {useRegExp:0}
        var goHomeParam = {sortGenerationTime:1};
        
        $http.post(webhost + "/setDftSearchRule/"+'?'+$.param(parameters), rule5).success(function (res) {
            if (res.error == 0) {
                $state.go("home",  { 'sortGenTime': true, 'anotherKey': 'This is a test' });
            } else {
                showLog("error in setDftSearchRule");
            }
        });

    };

});

app.controller('edit-book', function ($scope, $http, $state, sharedbook) {
    $scope.bookdata = sharedbook.getProperty();
    $scope.updateBook = function () {
        var payload = {
            "id": $scope.bookdata._id,
            "bookname": $scope.bookdata.bookname,
            "authorname": $scope.bookdata.authorname,
            "price": $scope.bookdata.price
        }
        $http.put(webhost + "/book", payload).success(function (res) {
            if (res.error == 0) {
                $state.go("home");
            } else {

            }
        });
    };
    $scope.cancel = function () {
        $state.go("home");
    };
});

// this function is not finished yet. maybe it is not needed

/*app.controller('postAlert',function($scope,$http,$state){
 $scope.bookdata = {};
 $scope.addAlert = function(){
 var payload = {
 "bookname":$scope.bookdata.bookname,
 "authorname":$scope.bookdata.authorname,
 "price":$scope.bookdata.price
 }
 $http.post(webhost+"/book",payload).success(function(res){
 if(res.error == 0){
 $state.go("home");
 }else{
 
 }
 });
 };
 });*/


// app.controller('add-new-book',function($scope,$http,$state){
//         $scope.bookdata = {};
//         $scope.addBook = function(){
// 	    var payload = {
// 		"bookname":$scope.bookdata.bookname,
// 		"authorname":$scope.bookdata.authorname,
// 		"price":$scope.bookdata.price
// 	    }
// 	    $http.post(host+"/book",payload).success(function(res){
// 		    if(res.error == 0){
// 			$state.go("home");
// 		    }else{

// 		    }
//                 });
//         };
//     });

