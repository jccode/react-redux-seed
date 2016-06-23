import React, {Component} from 'react';
import {licai} from '../actions/index';
import { connect } from 'react-redux';


@connect()
class LicaiProducts extends Component {

    constructor (props) {
        super(props);
    }

    componentDidMount () {
        let { dispatch, licai: {pageNum = 0} } = this.props;
        dispatch(licai.fetch_products(pageNum));
    }

    render() {
        return (
            <div>
                Licai
            </div>
        )
    }
}

export default LicaiProducts;