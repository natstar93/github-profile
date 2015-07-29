githubUserSearch.controller('GitUserSearchController', ['Search', function(Search) {
//	var searchResource = $resource('https://api.github.com/search/users');
  var self = this;

  // self.doSearch = function() {
  //   self.searchResult = searchResource.get({ q: self.searchTerm, access_token: token }
  // )};

  self.doSearch = function() {
    if (self.searchTerm && self.searchTerm != '') {  
    Search.query(self.searchTerm)
      .then(function(response) {
        self.searchResult = response.data;
      })
    };
  };

}]);