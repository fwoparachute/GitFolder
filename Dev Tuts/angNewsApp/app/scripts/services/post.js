'use strict'

app.factory('Post', [

    function($resource) {
        return $resource('https://angnewsappng.firebaseio.com/posts/:id.json')
    }
]);