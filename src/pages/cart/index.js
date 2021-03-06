import React from 'react';
import { connect } from 'react-redux';
import { Checkbox, Flex, Button, WhiteSpace, Stepper } from 'antd-mobile';
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
    //所有总选
    getAllTotalMoney(e) {
        let checked = e.target.checked
        let newData = this.state.data.map(v => {
            let newItem = v.items.map(val => {
                return { ...val, select: checked }
            })
            return { ...v, select: checked, items: newItem }
        });
        this.setState({ data: newData })
        this.checkAll(newData)
    }
    //店铺全选
    getTotalMoney(e, i) {
        let checked = e.target.checked
        let newData = this.state.data.map((v, ind) => {
            if (ind === i) {
                let newItem = v.items.map(val => {
                    return { ...val, select: checked }
                })
                return { ...v, select: checked, items: newItem }
            } else {
                return v
            }
        });
        this.setState({ data: newData })
        this.checkAll(newData)
    }
    //商品选择
    getMoney(e, i, ind1) {
        let checked = e.target.checked
        let newData = this.state.data.map((v, ind) => {
            if (ind === i) { //被选商铺
                let flag = true; //只要有一个商品未被选中，店铺不能选中
                let newItem = v.items.map((val, index) => {
                    if (index === ind1) {//被选商品
                        if (checked === false) { flag = false }
                        return { ...val, select: checked }
                    } else {
                        if (val.select === false) { flag = false }
                        return val
                    }
                })
                return { ...v, select: flag, items: newItem }
            } else {
                return v
            }
        });
        this.setState({ data: newData })
        this.checkAll(newData)
    }
    //校验全选
    checkAll(data) {
        let flag = true;
        data.forEach((val, ind) => {
            if (val.select === false) {
                flag = false;
            }
        })
        this.setState({ allSelect: flag })
        this.getNumAndMon(data)
    }
    //计算总数及总价
    getNumAndMon(data) {
        let allNum = 0;
        let allMon = 0
        data.forEach((v, i) => {
            v.items.forEach((val, ind) => {
                if (val.select) { //如果当前店铺商品被选中
                    allNum += 1;
                    allMon += val.price * val.number;
                }
            })
        }); 
        this.setState({ totalMoney: allMon, totalNum: allNum })
    }
    //加减库存
    changeStock(i1, ind1, num) {
        let newData = this.state.data.map((v, i) => {
            if (i === i1) { //被选商铺
                let newItem = v.items.map((val, ind) => {
                    if (ind === ind1) {//被选商品
                        return { ...val, number: num }
                    } else {
                        return val
                    }
                })
                return { ...v, items: newItem }
            } else {
                return v
            }
        });
        this.setState({ data: newData })
        this.getNumAndMon(newData)
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
                                        <CheckboxItem checked={val.select} onChange={e => this.getMoney(e, i, ind)}>
                                            <Flex justify="between">
                                                <div>
                                                    <img style={{ height: "75px", width: "75px" }} src={val.img} alt="" />
                                                </div>
                                                <div>
                                                    <div className="wordExp">{val.title}</div>
                                                    <div style={{ height: "20px" }}></div>
                                                    <Flex justify="between">
                                                        <div style={{ color: 'red', marginLeft: "10px" }}>￥{val.price}.00</div>
                                                        <Stepper
                                                            style={{ width: '100px' }}
                                                            showNumber
                                                            max={val.stock}
                                                            min={1}
                                                            value={val.number}
                                                            onChange={(num) => { this.changeStock(i, ind, num) }}
                                                        />
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
                    <AgreeItem checked={this.state.allSelect} onChange={e => this.getAllTotalMoney(e)}>全选</AgreeItem>
                    <div>
                        {
                            this.state.totalNum > 0 && (
                                <div style={{ display: 'inline-block', verticalAlign: 'middle' }}>总计:
                                <span style={{ color: 'red', marginRight: '10px' }}>￥{this.state.totalMoney}.00</span>
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
