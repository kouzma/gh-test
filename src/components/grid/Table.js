import React, {Component} from "react";

import '../../styles/Table.css';
import Row from "./Row.js";

class Table extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        {this.props.colConfig.map(column =>
                            <td>
                                {column.title}
                            </td>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {this.props.data.map(
                        (obj, index) =>
                            <Row colConfig={this.props.colConfig} key={index} obj = {obj} isEven = {index % 2} />
                    )}
                </tbody>
            </table>
        );
    }
}

export default Table;