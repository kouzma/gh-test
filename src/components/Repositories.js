import React, {Component} from "react";

import DataTable from "./grid/DataTable.js";
import DataStore from "../stores/DataStore";

class Repositories extends Component {
    render() {
        return (<DataTable
            entityName="repositories"
            dataStore={new DataStore()}
            colConfig={[
                {
                    name: "name",
                    title: "Name"
                }, {
                    name: "description",
                    title: "Description"
                }, {
                    name: "stargazers_count",
                    title: "Stars"
                }, {
                    name: "forks_count",
                    title: "Forks"
                }
            ]}
            filtersConfig={[
                {
                    name: "name",
                    default: "",
                    title: "Name",
                    template:"$in:name"
                },
                {
                    name: "stargazers_count",
                    default: 0,
                    title: "Min stars",
                    template:"stars:>$"
                },
                {
                    name: "forks_count",
                    default: 0,
                    title: "Min forks",
                    template:"forks:>$"
                }
            ]}
        />);
    }
}
export default Repositories;
