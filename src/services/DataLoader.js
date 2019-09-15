import axios from "axios";

const API_URL = "https://api.github.com/";

class DataLoader {

  constructor(entityName, dataStore, pagerStore, filtersStore) {
    this.loadAllDataUrl = API_URL + entityName;
    this.searchUrl = API_URL + "search/" + entityName;
    this.dataStore = dataStore;
    this.pagerStore = pagerStore;
    this.filtersStore = filtersStore;
  }

  loadByUrl(url) {
    this.loadData(url, null)
  }

  reloadData() {
    this.loadData(null, this.filtersStore.query);
  }

  loadData(url, query) {
    this.dataStore.startLoading();

    axios
        .get(this.createUrl(url, query))
        .then(response => {
          this.onDataLoad(
              response.data.items ? response.data.items : response.data,
              response.headers.link);
        })
        .catch(
            (e) => {
              console.log(e);
              this.dataStore.onError();
            });
  }

  createUrl(url, query) {
    return url ?                            // if we used the link
        url :
        query ?                             // if we used filters
            this.createSearchUrl(query) :
            this.createAllDataUrl();
  }

  createSearchUrl(query) {
      return this.searchUrl +
        "?q=" + query +
        "&page=1&per_page=" + this.pagerStore.perPage;
  }

  createAllDataUrl() {
    return this.loadAllDataUrl +
        "?since=1&per_page=" + this.pagerStore.perPage;
  }

  onDataLoad(data, linksStr) {
    this.pagerStore.setLinks(linksStr);
    this.dataStore.onLoad(data);
  }
}

export default DataLoader ;