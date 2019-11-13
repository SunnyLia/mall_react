import React from 'react';
import { connect } from 'react-redux';
import { Flex, WingBlank, WhiteSpace, Carousel, Tabs ,Grid ,NoticeBar} from 'antd-mobile';
import "./index.css"
import {getHomeItems,getHomeLists,getHomeTabs,getCarousel} from '../../redux/action';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {imgHeight: 176 ,slideIndex:0}
    }
    componentDidMount() {
        this.props.getHomeItems()
        this.props.getHomeLists()
        this.props.getHomeTabs()
        this.props.getCarousel()
        this.timeInterval()

    }
    timeInterval() {
        // var to = new Date('2019, 11, 12, 00, 00, 00'); //月份是从0开始的
        var d = (new Date()).getDate()+1;
        var to = new Date(`2019/11/${d} 00:00:00`);
 
        function antitime() {
            var now = new Date();
            var deltaTime = to - now; 
            if (deltaTime <= 0) {
                clearInterval(this.timer);
                return;
            }
            
            var h = Math.floor(deltaTime / 3600000); 
            var m = Math.floor(deltaTime / 60000 % 60); 
            var s = Math.floor(deltaTime / 1000 % 60);
                
            var timeStr = "" + (h<10?"0"+h:h)+":" + (m<10?"0"+m:m)+":" + (s<10?"0"+s:s);
            document.getElementsByClassName("secKill")[0].innerHTML=timeStr
        }
        this.timer = setInterval(antitime, 1000);
    }
    componentWillUnmount() {
        this.timer && clearInterval(this.timer);
    }
    render() {
        const data1 = Array.from(new Array(this.props.homeTabs.length)).map((v,i) => ({
            title:this.props.homeTabs[i].text ,
        }));
        
        return (
            <div className="homePage" style={{marginBottom:'50px'}}>
                <WhiteSpace />
                {/* 头部 */}
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
                                autoplay = {true}
                                infinite
                            >
                                {
                                    this.props.carousel && this.props.carousel.map((v) => {
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
                <Tabs tabs={data1} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={6} />}>
                    {this.renderContent}
                </Tabs>
                {/* 轮播图 */}
                <Carousel
                    autoplay={true}
                    infinite
                >
                    {this.props.carousel && this.props.carousel.map(val => (
                        <a
                            key={val}
                            href="http://www.alipay.com"
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            <img
                                src={val.img}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </a>
                    ))}
                </Carousel>
                {/* 宫格 */}
                <WingBlank size="md">
                    {
                        this.props.homeTabs && <Grid data={this.props.homeTabs} isCarousel columnNum = "5" hasLine="false" className="homeTabs"/>
                    }
                </WingBlank>
                <WhiteSpace size="sm"/>
                <div style={{paddingTop: '12px',overflow: 'hidden'}}>
                    <Carousel className="space-carousel"
                    frameOverflow="visible"
                    cellSpacing={10}
                    slideWidth={0.6}
                    autoplay={false}
                    dots={false}
                    infinite
                    afterChange={index => this.setState({ slideIndex: index })}
                    >
                    {this.props.carousel && this.props.carousel.slice(0,this.props.carousel.length/2).map((val,index) => (
                        <Flex key={index}
                        style={{
                            position: 'relative',
                            top: this.state.slideIndex === index ? -10 : 0,
                            height: this.state.imgHeight
                        }}>
                            <Flex.Item>
                                <img
                                    src={this.props.carousel[2*index].img1}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            </Flex.Item>
                            <Flex.Item>
                                <img
                                    src={this.props.carousel[2*index+1].img1}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            </Flex.Item>
                        </Flex>
                    ))}
                    </Carousel>
                </div>
                <WhiteSpace size="lg"/>
                <WingBlank size="md">
                <Flex wrap="wrap" style={{width:'100%',background: '#fff',borderRadius: '8px'}}>
                    {
                        this.props.homeItems && this.props.homeItems.map((val,i)=>(
                            <div style={{width:'50%'}} key={i}>
                                <div style={{fontWeight:'bold',padding: '8px 7px 4px'}}>{val.title}
                                {
                                    i===0 && (
                                        <span className="secKill">00:00:00</span>
                                    )
                                }
                                </div>
                                <Flex>
                                    <div style={{width:'50%',padding: '5px'}}>
                                        <img src={val.items[0].img1} alt="" style={{width:'100%'}} />
                                    </div>
                                    <div style={{width:'50%',padding: '5px'}}>
                                        <img src={val.items[1].img1} alt="" style={{width:'100%'}} />    
                                    </div>
                                </Flex>
                            </div> 
                        ))
                    }
                    
                    <NoticeBar mode="link" action={<span>去看看</span>} style={{width:'100%'}}>
                        <Carousel className="my-carousel"
                        vertical
                        dots={false}
                        dragging={false}
                        swiping={false}
                        autoplay
                        infinite
                        >
                        {
                            this.props.carousel && this.props.carousel.map((v) => {
                                return (
                                    <div className="v-item" key={v.title}>{v.title}</div>
                                )
                            })
                        }
                        </Carousel>

                    </NoticeBar>  

                </Flex>
                </WingBlank>
                <WhiteSpace size="lg"/>
                <WingBlank size="md">
                {
                    this.props.homeItems && this.props.homeItems.map((val,i)=>(
                        <div key={i} style={{paddingTop: '10px',borderRadius: '5px',marginBottom: '8px',background:`${val.background}`}}>
                            <div style={{textAlign:'center',fontWeight:'bold'}}>{val.title}</div>
                            <Grid data={val.items} hasLine={false} square={false} className="not-square-grid" />
                        </div>
                    ))
                }
                
                </WingBlank>
                <WhiteSpace size="lg"/>
                <WingBlank size="md">
                <Flex wrap="wrap" style={{width:'100%'}}>
                    {
                        this.props.homeLists && this.props.homeLists.map((val,ind)=>(
                                <div key={ind} className="listItem">
                                    <a href="http://www.alipay.com">
                                    <img src={val.img} style={{width:'100%'}} alt=""/>
                                    <WingBlank size="md">
                                        <div className="textWords">
                                            <img style={{height: '14px',paddingRight:'6px'}} src="//img11.360buyimg.com/jdphoto/s48x28_jfs/t18820/32/891260489/1085/d4b6cf2c/5aadf9dbN7043e607.png" alt=""/>
                                            {val.title}
                                        </div>
                                        <div className="manjian">
                                            {val.fullRed}
                                        </div>
                                        <div className="price">
                                            ¥{val.price}.00
                                            <span>{val.number}人付款</span>
                                        </div>
                                    </WingBlank>
                                    </a>
                                </div>
                            ))
                    }
                    </Flex>
                </WingBlank>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return { 
        homeItems: state.todos.homeItems ,
        homeLists: state.todos.homeLists ,
        homeTabs: state.todos.homeTabs ,
        carousel: state.todos.carousel ,
    }
  }
const mapDispatchToProps = (dispatch, ownProps) => {
    return { 
        getHomeItems: () => dispatch(getHomeItems()),
        getHomeLists: () => dispatch(getHomeLists()),
        getHomeTabs: () => dispatch(getHomeTabs()),
        getCarousel: () => dispatch(getCarousel())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)