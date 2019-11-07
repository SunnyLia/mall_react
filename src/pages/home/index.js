import React, { Fragment } from 'react';
import { Flex, WingBlank, WhiteSpace, Carousel } from 'antd-mobile';
import "./index.css"
const PlaceHolder = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder`} {...restProps}>Block</div>
);
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: [
                {title:"通勤出街显美小包"},
                {title:"DW粉底液1W1"},
                {title:"秋冬男士气质穿搭"},
                {title:"气质连衣裙"},
            ]
        }
    }
    render() {
        return (
            <div className="homePage">
                <WhiteSpace />
                <WingBlank size="md">
                    <Flex justify="between">
                        <img src="assets/logo.png" style={{ width: '35px' }} alt="" />
                        <Flex justify="between" align="center" className="searchBar">
                                <img src="assets/search.png" style={{ width: '20px' }} alt="" />
                                <Carousel className="my-carousel"
                                    vertical
                                    dots={false}
                                    dragging={false}
                                    swiping={false}
                                    autoplay
                                    infinite
                                >
                                    {
                                        this.state.searchValue.map((v)=>{
                                            return (
                                                <div className="v-item" key={v.title}>{v.title}</div>
                                            )
                                        })
                                    }
                                </Carousel>
                            <img src="assets/photo.png" style={{ width: '20px' }} alt="" />
                        </Flex>
                        <img src="assets/redPacket.png" className="redShake" alt="" />
                    </Flex>
                    <div></div>
                </WingBlank>
            </div>
        )
    }
}
export default Home;
