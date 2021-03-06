function SearchPageService ($http, GITHUB, SERVER, $cookies) {
	
	this.secondSearch = secondSearch;
	this.postItem     = postItem;

	function secondSearch (searchquery) {
		return $http.get(GITHUB.URL + `search/repositories?q=${searchquery}&per_page=100`)
	}

	function postItem (obj) {
		let token = $cookies.get('access_token')
		return $http({
			method: 'POST',
			url: SERVER.URL + 'post/repo',
			headers: {'Authorization': `Bearer ${token}`},
			data: obj
		});
		// postItem(obj)
		// uncomment above line and remove the return
	}
}

SearchPageService.$inject = ['$http', 'GITHUB', 'SERVER', '$cookies'];
export { SearchPageService }