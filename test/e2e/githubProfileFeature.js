describe('Github Profile finder', function() {

  var searchBox = element(by.model('searchCtrl.searchTerm'))

  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Github user search');
  });

  it('finds profiles', function() {
    searchBox.sendKeys('spike');
    var profiles = element.all(by.repeater('user in searchCtrl.searchResult.items'));
    expect(profiles.last().getText()).toEqual('spikesagal');
  });

  it('counts profiles', function() {
    searchBox.sendKeys('natstar93');
    var profiles = element.all(by.repeater('user in searchCtrl.searchResult.items'));
    expect(profiles.count()).toEqual(1);
  });

  it('contains profile links', function() {
    searchBox.sendKeys('natstar93');
    var profiles = element.all(by.repeater('user in searchCtrl.searchResult.items'));
    expect(profiles.count()).toEqual(1);
  });
});