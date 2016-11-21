app.directive("list", ["$window", "appli", function($window, API){
    return {
        restrict: 'A',
        replace: false,
        scope: {},
        templateUrl: "/app/composant/liste/liste.html",
        link: function(scope, elem, attrs){
            API.get().then(function(results){
                scope.data = results.data;
            });

            scope.openLink = function(href){
                $window.open(href);
            }
        }
    }
}]);