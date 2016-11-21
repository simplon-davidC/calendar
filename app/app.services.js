app.service("appli", ["$http", function ($http) {
    var api = this;
    const URL = "https://www.googleapis.com/calendar/v3/calendars/simplon.co_7sc0sp073u3svukpopmhob9fmg%40group.calendar.google.com/events?key=AIzaSyADm7UvQFnHmkfo_sei1oZoLvx_X-_mhFI";

    api.get = function () {
        return $http({
            method: "GET",
            url: URL
        });
    }
}])