import React from 'react';
import { connect } from 'react-redux';
import { Checkbox, Flex, Button, WhiteSpace } from 'antd-mobile';
import { getCartLists } from '../../redux/action';
import './index.css';
const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;
class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = { allSelect: false, totalMoney: 0, totalNum: 0, data: [] }
    }
    componentDidMount() {
        this.props.getCartLists(() => {
            this.setState({ data: this.props.cartLists })
        })
    }
    //所有店铺全选
    getAllTotalMoney(e) {
        let list = this.state.data;
        let checked = e.target.checked
        let newData = list.map(v => {
            let newItem = v.items.map(val => {
                return { ...val, select: checked }
            })
            return { ...v, select: checked, items: newItem }
        });
        this.setState({ data: newData })
    }
    //店铺全选
    getTotalMoney(e, i) {
        let list = this.state.data;
        let checked = e.target.checked
        let newData = list.map((v, ind) => {
            if (ind == i) {
                let newItem = v.items.map(val => {
                    return { ...val, select: checked }
                })
                return { ...v, select: checked, items: newItem }
            } else {
                return v
            }
        });
        this.setState({ data: newData })
    }
    //校验全选
    checkAll() {
        let flag = true;
        let list = this.state.data;
        list.map((val, ind) => {
            if(val.select == false){
                flag = false;
            }
        })
        this.setState({ allSelect: flag })
    }
    render() {
        return (
            <div className="cartList" style={{ paddingBottom: "90px" }}>
                {
                    this.state.data && this.state.data.map((v, i) => (
                        <div key={i}>
                            <CheckboxItem checked={v.select} onChange={e => this.getTotalMoney(e, i)}>{v.title}</CheckboxItem>
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
                    <AgreeItem onChange={e => this.getAllTotalMoney(e)}>全选</AgreeItem>
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
        getCartLists: (id) => dispatch(getCartLists(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)
