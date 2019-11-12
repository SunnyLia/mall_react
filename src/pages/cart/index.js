import React from 'react';
import { connect } from 'react-redux';
import { List, Checkbox, Flex } from 'antd-mobile';
import {getCartLists} from '../../redux/action';
import './index.css';
const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;
class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {allSelect: false}
    }
    componentDidMount() {
        this.props.getCartLists()
    }
    render() {
        return (
            <div className="cartList">
                <div className="cartBot">111111111111111111</div>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {cartLists: state.cart}
  }
const mapDispatchToProps = (dispatch, ownProps) => {
    return { 
        getCartLists: () => dispatch(getCartLists())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)
