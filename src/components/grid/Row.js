import React, {Component} from "react";

import '../../styles/Row.css';

class Row extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr className={this.props.isEven ? "even" : "odd"}>
                {this.props.colConfig.map(column =>
                    <td>
                        {this.props.obj[column.name]}
                    </td>
                )}
            </tr>
        );
    }
}

export default Row;