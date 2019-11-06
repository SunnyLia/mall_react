import React from 'react';
import { TabBar } from 'antd-mobile';
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabBars: [
                {
                    icon: 'https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg',
                    selectedIcon: 'https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg',
                    title: 'Home',
                    key: 'home'
                },
                {
                    icon: 'https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg',
                    selectedIcon: 'https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg',
                    title: 'Find',
                    key: 'find'
                },
                {
                    icon: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg',
                    selectedIcon: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg',
                    title: 'Cart',
                    key: 'cart'
                },
                {
                    icon: 'https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg',
                    selectedIcon: 'https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg',
                    title: 'Mine',
                    key: 'mine'
                }
            ]
        };
    }

    calcPath (key){
        let pathName = this.props.history.location.pathname;
        
        if((pathName === "/" && key === "home") || (pathName.indexOf(key) !== -1)){
            return true
        }else{
            return false
        }
    }

    render() {
        return (
            <div style={{ position: 'fixed', height: '50px', width: '100%', bottom: 0 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    tabBarPosition="bottom">
                    {
                        this.state.tabBars.map(v => {
                            return (
                                <TabBar.Item
                                    title={v.title}
                                    key={v.key}
                                    icon={< div style={{ width: '22px', height: '22px', background: `url(${v.icon}) center center / 21px 21px no-repeat` }} />}
                                    selectedIcon={< div style={{ width: '22px', height: '22px', background: `url(${v.selectedIcon}) center center / 21px 21px no-repeat` }} />}
                                    selected={ this.calcPath (v.key) }
                                    onPress={() => {
                                        this.props.history.history.push(`/${v.key}`)
                                    }}
                                />
                            )
                        })
                    }
                </TabBar>
            </div>
        );
    }
}
export default Main;
