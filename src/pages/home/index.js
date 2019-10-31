import React from 'react';
import {TabBar} from 'antd-mobile';
import Cart from '../cart';
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'Home'
        };
    }
    renderContent(pageText) {
        return <Cart />
    }
    render() {

        return (
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
                tabBarPosition="bottom">
                <TabBar.Item
                    title="Home"
                    key="Home"
                    icon={< div style = {{ width: '22px', height: '22px', background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center / 21px 21px no-repeat' }}/>}
                    selectedIcon={< div style = {{ width: '22px', height: '22px', background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center / 21px 21px no-repeat' }}/>}
                    selected={this.state.selectedTab === 'Home'}
                    onPress={() => {
                    this.setState({selectedTab: 'Home'});
                }}>
                    {this.renderContent('Home')}
                </TabBar.Item>
                <TabBar.Item
                    icon={< div style = {{ width: '22px', height: '22px', background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center / 21px 21px no-repeat' }}/>}
                    selectedIcon={< div style = {{ width: '22px', height: '22px', background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center / 21px 21px no-repeat' }}/>}
                    title="Find"
                    key="Find"
                    selected={this.state.selectedTab === 'Find'}
                    onPress={() => {
                    this.setState({selectedTab: 'Find'});
                }}>
                    {this.renderContent('Find')}
                </TabBar.Item>
                <TabBar.Item
                    icon={< div style = {{ width: '22px', height: '22px', background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center / 21px 21px no-repeat' }}/>}
                    selectedIcon={< div style = {{ width: '22px', height: '22px', background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center / 21px 21px no-repeat' }}/>}
                    title="Cart"
                    key="Cart"
                    selected={this.state.selectedTab === 'Cart'}
                    onPress={() => {
                    this.setState({selectedTab: 'Cart'});
                }}>
                    {this.renderContent('Cart')}
                </TabBar.Item>
                <TabBar.Item
                    icon={{
                    uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg'
                }}
                    selectedIcon={{
                    uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg'
                }}
                    title="Mine"
                    key="Mine"
                    selected={this.state.selectedTab === 'Mine'}
                    onPress={() => {
                    this.setState({selectedTab: 'Mine'});
                }}>
                    {this.renderContent('Mine')}
                </TabBar.Item>
            </TabBar>

        );
    }
}
export default Home;
