githubUserSearch.controller('GitUserSearchController', ['Search', function(Search) {

  //  var searchResource = $resource('https://api.github.com/search/users');

    var self = this;

	self.doSearch = function() {
      Search.query(self.searchTerm)
        .then(function(response) {
          self.searchResult = response.data;
        })
    };

}]);
