import React, {Component} from "react";

import '../../styles/FilterPane.css';
import {inject, observer} from "mobx-react";

@inject("filtersStore") @observer
class FilterPane extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="filters">
                {
                    this.props.filtersStore.filters.map(
                        filter => <Filter
                            key={filter.name}
                            config={filter}
                            value={this.props.filtersStore.values[filter.name]}
                            onChange={this.onChange.bind(this)} />
                    )
                }
                <button onClick={this.onClick.bind(this)}>Search</button>
            </div>
        );
    }

    onChange(event) {
        this.props.filtersStore.setFilterValue(event.target.name, event.target.value);
    }

    onClick() {
        this.props.reloadData();
    }
}

class Filter extends Component {
    render() {
        return (
            <span className="filter">
                {this.props.config.title}:
                <input
                    name={this.props.config.name}
                    value={this.props.value}
                    onChange={this.props.onChange}/>
            </span>
        );
    }
}

export default FilterPane;