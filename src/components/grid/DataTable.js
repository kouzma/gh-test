import React, {Component} from "react";
import {inject, observer} from "mobx-react/dist/mobx-react";

import '../../styles/DataTable.css';

import Table from "./Table.js";
import PagerPane from "./PagerPane.js";
import FilterPane from "./FilterPane.js";
import DataLoader from "../../services/DataLoader";
import FiltersStore from "../../stores/FiltersStore";
import PagerStore from "../../stores/PagerStore";

@inject("dataStore") @observer
class DataTable extends Component {

    constructor(props) {
        super(props);
        this.dataStore = this.props.dataStore;
        this.pagerStore = new PagerStore();
        this.filtersStore = new FiltersStore(this.props.filtersConfig);

        this.dataLoader = new DataLoader(this.props.entityName, this.dataStore, this.pagerStore, this.filtersStore);

        this.reloadData = () => this.dataLoader.reloadData();
        this.loadByUrl = url => this.dataLoader.loadByUrl(url);
    }

    render() {
        return (
            <div className="dataTablePane">
                <div className="dataTable">
                    <FilterPane filtersStore={this.filtersStore} reloadData={this.reloadData} />
                    <PagerPane pagerStore={this.pagerStore} loadByUrl={this.loadByUrl} reloadData={this.reloadData} />
                    <Table colConfig={this.props.colConfig} data={this.dataStore.data} />
                    <StatusPane status={this.dataStore.status}/>
                </div>
                <Loading isLoading={this.dataStore.isLoading} />
            </div>
        );
    }

    componentDidMount() {
        this.reloadData();
    }
}

class StatusPane extends Component {
    render() {
        return (
            <div className="statusPane">
                <div className="dataStatus">
                    {this.props.status}
                </div>
                <div className="clear"/>
            </div>
        );
    }
}

class Loading extends Component {
    render() {
        return (
            <div
                className="loadingDiv"
                hidden={!this.props.isLoading}
            />
            );
    }
}
export default DataTable;