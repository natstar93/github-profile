describe('GitUserSearchController', function() {
  beforeEach(module('GitUserSearch'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('GitUserSearchController');
  }));

  it('initialises with an empty search result and term', function() {
    expect(ctrl.searchResult).toBeUndefined();
    expect(ctrl.searchTerm).toBeUndefined();
  });

	describe('when searching for a user', function() {
    afterEach(function() {
      httpBackend.verifyNoOutstandingExpectation();
      httpBackend.verifyNoOutstandingRequest();
    });

    var httpBackend;
    beforeEach(inject(function($httpBackend) {
      httpBackend = $httpBackend;
      httpBackend
        .expectGET("https://api.github.com/search/users?access_token=" + token + "&q=helo")
        .respond(
          { items: items }
        );
    }));

	  it('displays search results', function() {
	  	ctrl.searchTerm = 'helo';
      ctrl.doSearch();
      httpBackend.flush();
	    expect(ctrl.searchResult.items).toEqual(items);
	  });
	});
});
