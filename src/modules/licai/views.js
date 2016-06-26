import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetch_products } from './actions';
import styles from './styles.scss';


const mapStateToProps = (state) => {
    console.log(state);

    return state.licai;
};

@connect(mapStateToProps)
class LicaiProducts extends Component {

    constructor (props) {
        super(props);
    }

    componentDidMount () {
        const { dispatch, productList: {pageNum = -1} } = this.props;
        dispatch(fetch_products(pageNum+1));
    }

    render() {
        console.log(this.props);

        const {productList:{list = [],}} = this.props;
        return (
            <div>
                Licai
                <ul>
                    {list.map((product) =>
                        <li className={styles.item} key={product.productNo}>{product.productName}</li>
                    )}
                </ul>
            </div>
        )
    }
}

// export default LicaiProducts;
exports['default'] = { LicaiProducts };
module.exports = exports['default'];
