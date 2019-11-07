import React from 'react';
import { Flex, WingBlank, WhiteSpace, Carousel, Tabs } from 'antd-mobile';
import "./index.css"

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: [
                { title: "通勤出街显美小包" },
                { title: "DW粉底液1W1" },
                { title: "秋冬男士气质穿搭" },
                { title: "气质连衣裙" },
            ],
            tabs: [
                { title: '首页' },
                { title: '美妆' },
                { title: '百货' },
                { title: '女装' },
                { title: '食品' },
                { title: '生鲜' },
                { title: '家装' },
                { title: '母婴' },
                { title: '保健' },
                { title: '鞋靴' },
                { title: '手机' },
                { title: '箱包' },
                { title: '男装' },
                { title: '饰品' },
                { title: '洗护' },
                { title: '电器' },
            ],
            carousels:['1', '2', '3'],
            imgHeight: 176
        }
    }
    render() {
        return (
            <div className="homePage">
                <WhiteSpace />
                <WingBlank size="md">
                    {/* 头部 */}
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
                                    this.state.searchValue.map((v) => {
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
                </WingBlank>
                {/* Tabs选择 */}
                <Tabs tabs={this.state.tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={6} />}>
                    {this.renderContent}
                </Tabs>
                {/* 轮播图 */}
                <Carousel
                    autoplay={true}
                    infinite
                >
                    {this.state.carousels.map(val => (
                        <a
                            key={val}
                            href="http://www.alipay.com"
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            <img
                                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </a>
                    ))}
                </Carousel>
                <div></div>

            </div>
        )
    }
}
export default Home;
