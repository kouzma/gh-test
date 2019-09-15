import {observable, action, computed} from "mobx";

class FiltersStore {
    @observable values = {};

    constructor(filters) {
        this.filters = filters;
        this.setDefaults();
    }

    @action
    setFilterValue(name, value) {
        this.values[name] = value;
    }

    @computed get query() {
        let query = "";
        this.filters.forEach(
            filter => {
                if (this.values[filter.name] != filter.default)
                    query += filter.template.replace("$" , this.values[filter.name]) + " ";
            }
        );
        return query.length > 0 ? query : null;
    }

    setDefaults() {
        this.filters.forEach(
            filter => this.values[filter.name] = filter.default
        );
    }
}

export default FiltersStore ;