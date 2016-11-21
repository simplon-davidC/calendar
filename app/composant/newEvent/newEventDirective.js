app.directive("postNewEvent", function () {
    return {
        restrict: "A",
        replace: false,
        templateUrl: "/app/composant/newEvent/newEvent.html",
        scope: true,
        link: function (scope, elem, attrs) {
            scope.formOpened = false;
        }
    }
})

    .directive("postNewEventBtn", function () {
        return {
            restrict: "E",
            replace: true,
            templateUrl: "/app/composant/newEvent/ajout/bouton.html",
            scope: false,
            link: function (scope, elem, attrs) {
                elem.bind("click", function () {
                    scope.$apply(function () {
                        scope.formOpened = !scope.formOpened;
                    })
                })
            }
        }
    })

    .directive("postNewEventForm", ["$http", function ($http) {
        return {
            restrict: "E",
            replace: true,
            templateUrl: "/app/composant/newEvent/ajout/form.html",
            scope: false,
            link: function (scope, elem, attrs) {
                scope.formData = {};
                scope.submit = function () {
                    console.log(scope.formData);
                    $http({
                        method: "POST",
                        url: "../server/actions/post.php",
                        data: scope.formData
                    }).then(function (results) {
                        if (results.data.status == 200) elem.append("<div id='message'>Vous avez ajoutez votre événements avec Succès !</div>")
                    })
                }
            }
        }
    }])

    .directive("closeFormBtn", function () {
        return {
            restrict: "A",
            replace: false,
            template: "X",
            scope: false,
            link: function (scope, elem, attrs) {
                elem.bind('click', function () {
                    scope.$apply(function () {
                        scope.formData = {};
                        scope.formOpened = !scope.formOpened;
                    })
                })
            }
        }
    })
