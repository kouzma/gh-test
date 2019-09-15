import React, {Component} from "react";

import '../../styles/PagerPane.css';

class PagerPane extends Component {
    constructor(props) {
        super(props);

        this.setPerPage = value => {
            this.props.pagerStore.setPerPage(value);
            this.props.reloadData();
        }
        this.loadByUrl = url => this.props.loadByUrl(url);
    }

    render() {
        const perPage = this.props.pagerStore.perPage;
        const perPageOptions = this.props.pagerStore.perPageOptions;

        const links = this.props.pagerStore.links;
        return (
            <div>
                <div className="pager">
                    <PagerBtn value="<<" onClick={this.props.loadByUrl} url={links.first} />
                    <PagerBtn value="<" onClick={this.props.loadByUrl} url={links.prev} />
                    <PagerBtn value=">" onClick={this.props.loadByUrl} url={links.next} />
                    <PagerBtn value=">>" onClick={this.props.loadByUrl} url={links.last} />
                </div>
                <div className="perPage">
                    <PerPageSelect value={perPage} options={perPageOptions} action={this.setPerPage}/>
                    items per page
                </div>
                <div className="clear"/>
            </div>
        );
    }
}

class PerPageSelect extends Component {
    render() {
        return <select value={this.props.value} onChange={this.onChange.bind(this)}>
            {this.props.options.map(option =>
                <option>
                    {option}
                </option>
            )}
        </select>
    }

    onChange(event) {
        this.props.action(event.target.value);
    }
}

class PagerBtn extends Component {
    render() {
        return <input
            type="button"
            value={this.props.value}
            disabled={this.props.url == null}
            className="pagerButton"
            onClick={() => this.props.onClick(this.props.url)}
        />
    }
}

export default PagerPane;