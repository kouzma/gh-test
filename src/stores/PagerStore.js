import parseLinks from '../utils/LinksParser'

const DEFAULT_PER_PAGE = 10;

class PagerStore {
    perPage;
    links = {};
    perPageOptions = [5, 10, 20, 50, 100];

    constructor() {
        this.setPerPage(DEFAULT_PER_PAGE);
    }

    setPerPage(newPerPage) {
        this.perPage = newPerPage;
    }

    setLinks(linksStr) {
        this.links = parseLinks(linksStr);

        if (this.links.first) {
            this.links.first = this.links.first.replace("{?since}", "?page=1&per_page=" + this.perPage);
        }
    }
}

export default PagerStore ;