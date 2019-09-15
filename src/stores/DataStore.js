import {action, autorun, computed, observable} from 'mobx';

class DataStore {
    @observable data;
    @observable isLoading;
    @observable isError;

    constructor() {
        this.data = [];
        this.isLoading = false;
        this.isError = false;
    }

    @computed get status() {
        return this.isError ?
            "Data loading error" :
            this.isLoading ?
                "Loading..." :
                this.data.length + " items shown";
    }

    @action
    startLoading() {
        this.isLoading = true;
        this.isError = false;
        this.data = [];
    }

    @action
    onLoad(data) {
        this.data = data;
        this.isLoading = false;
    }

    @action
    onError() {
        this.isLoading = false;
        this.isError = true;
    }
}

export default DataStore ;