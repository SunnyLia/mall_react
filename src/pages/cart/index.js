import React from 'react';
import { connect } from 'react-redux';
import { List, Checkbox, Flex, Button, WhiteSpace } from 'antd-mobile';
import { getCartLists } from '../../redux/action';
import './index.css';
const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;
class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = { allSelect: false, totalMoney: 0, totalNum: 0 }
    }
    componentDidMount() {
        this.props.getCartLists()
    }
    render() {
        return (
            <div className="cartList" style={{ paddingBottom: "90px" }}>
                {
                    this.props.cartLists && this.props.cartLists.map((v, i) => (
                        <div key={i}>
                            <CheckboxItem checked={v.select}>{v.title}</CheckboxItem>
                            {
                                v.items.map((val, ind) => (
                                    <div key={i + "" + ind}>
                                        <CheckboxItem checked={val.select}>
                                            <Flex justify="between">
                                                <div>
                                                    <img style={{ height: "75px", width: "75px" }} src={val.img} />
                                                </div>
                                                <div>
                                                    <div className="wordExp">{val.title}</div>
                                                    <div style={{ height: "20px" }}></div>
                                                    <Flex justify="between">
                                                        <div style={{ color: 'red', marginLeft: "10px" }}>￥{val.price}</div>
                                                        <div className="numCut"><span>-</span>{val.number}<span>+</span></div>
                                                    </Flex>
                                                </div>
                                            </Flex>
                                        </CheckboxItem>
                                    </div>
                                ))
                            }

                            <WhiteSpace size="md" />
                        </div>
                    ))
                }

                <Flex justify="between" className="cartBot">
                    <AgreeItem data-seed="logId" onChange={e => console.log('checkbox', e)}>全选</AgreeItem>
                    <div>
                        {
                            this.state.totalNum > 0 && (
                                <div style={{ display: 'inline-block', verticalAlign: 'middle' }}>总计:
                                <span style={{ color: 'red', marginRight: '10px' }}>￥{this.state.totalMoney}</span>
                                </div>
                            )
                        }
                        <Button type="primary" size="small" style={{ marginRight: "10px", display: 'inline-block', verticalAlign: 'middle' }}>
                            {
                                this.state.totalNum > 0 ? `结算(${this.state.totalNum})` : "结算"
                            }
                        </Button>
                    </div>
                </Flex>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return { cartLists: state.cart }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getCartLists: () => dispatch(getCartLists())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)
