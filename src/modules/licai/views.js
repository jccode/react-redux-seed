import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetch_products } from './actions';
import styles from './styles.scss';


const mapStateToProps = (state) => {
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
        const {isPending, productList:{list = [],}} = this.props;
        const loading = isPending? <div className={styles.loading}>Loading...</div> : "";
        return (
            <div>
                Licai
                {loading}
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
