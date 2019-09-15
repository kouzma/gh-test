import React, {Component} from "react";
import DataTable from "./grid/DataTable.js";
import DataStore from "../stores/DataStore";

class Users extends Component {
    render() {
        return (<DataTable
            entityName="users"
            dataStore={new DataStore()}
            colConfig={[
                {
                    name: "login",
                    title: "Login"
                }
            ]}
            filtersConfig={[
                {
                    name: "login",
                    default: "",
                    title: "Login",
                    template:"$in:login"
                }
            ]}
        />);
    }

}
export default Users;
