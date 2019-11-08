import React ,{Fragment} from 'react';
import { Flex, WingBlank, WhiteSpace, Carousel, Tabs ,Grid ,NoticeBar} from 'antd-mobile';
import "./index.css"

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: [
                { 
                    title: "通勤出街显美小包",
                    img:"http://img.alicdn.com/tfs/TB1RZVRkYr1gK0jSZR0XXbP8XXa-1500-530.jpg_760x760Q90s50.jpg_.webp"    
                },
                { 
                    title: "DW粉底液1W1" ,
                    img:"//img.alicdn.com/tfs/TB1MtMnlQP2gK0jSZPxXXacQpXa-1500-530.jpg_760x760Q90s50.jpg_.webp"
                },
                { 
                    title: "秋冬男士气质穿搭" ,
                    img: "//img.alicdn.com/tfs/TB1WxT2loH1gK0jSZSyXXXtlpXa-1500-530.jpg_760x760Q90s50.jpg_.webp"
                },
                { 
                    title: "气质连衣裙" ,
                    img:"//img.alicdn.com/tfs/TB13JTBlkY2gK0jSZFgXXc5OFXa-1500-530.jpg_760x760Q90s50.jpg_.webp"
                },
                { 
                    title: "秋冬男士气质穿搭" ,
                    img: "//img.alicdn.com/tfs/TB1WxT2loH1gK0jSZSyXXXtlpXa-1500-530.jpg_760x760Q90s50.jpg_.webp"
                },
                { 
                    title: "气质连衣裙" ,
                    img:"//img.alicdn.com/tfs/TB13JTBlkY2gK0jSZFgXXc5OFXa-1500-530.jpg_760x760Q90s50.jpg_.webp"
                }
            ],
            tabs: [
                { 
                    text: '首页' ,
                    icon:"//m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png"
                },
                {
                    text: '美妆' ,
                    icon:"//m.360buyimg.com/mobilecms/s120x120_jfs/t1/39401/17/2391/5859/5cc06fcfE2ad40668/28cda0a571b4a576.png"
                },
                { 
                    text: '百货' ,
                    icon:"//m.360buyimg.com/mobilecms/s120x120_jfs/t1/17169/3/4127/4611/5c2f35cfEd87b0dd5/65c0cdc1362635fc.png"
                },
                { 
                    text: '女装' ,
                    icon:"//m.360buyimg.com/mobilecms/s120x120_jfs/t17725/156/1767366877/17404/f45d418b/5ad87bf0N66c5db7c.png"
                },
                { 
                    text: '食品' ,
                    icon:"//m.360buyimg.com/mobilecms/s120x120_jfs/t16990/157/2001547525/17770/a7b93378/5ae01befN2494769f.png"
                },
                { 
                    text: '生鲜' ,
                    icon:"//m.360buyimg.com/mobilecms/s120x120_jfs/t18454/342/2607665324/6406/273daced/5b03b74eN3541598d.png"
                },
                { 
                    text: '家装' ,
                    icon:"//m.360buyimg.com/mobilecms/s120x120_jfs/t22228/270/207441984/11564/88140ab7/5b03fae3N67f78fe3.png"
                },
                { 
                    text: '母婴' ,
                    icon:"//m.360buyimg.com/mobilecms/s120x120_jfs/t1/7068/29/8987/5605/5c120da2Ecae1cc3a/016033c7ef3e0c6c.png"
                },
                { 
                    text: '保健' ,
                    icon:"//m.360buyimg.com/mobilecms/s120x120_jfs/t16828/63/2653634926/5662/d18f6fa1/5b03b779N5c0b196f.png"
                },
                { 
                    text: '鞋靴' ,
                    icon:"//m.360buyimg.com/mobilecms/s120x120_jfs/t1/22262/9/1470/4527/5c120cd0E5d3c6c66/4792ec307a853e9f.png"
                },
                { 
                    text: '手机' ,
                    icon:"//m.360buyimg.com/mobilecms/s120x120_jfs/t1/14555/23/1446/4195/5c120e71E947f3ca1/cdbad904f61e1fb7.png"
                },
                { 
                    text: '箱包' ,
                    icon:"//m.360buyimg.com/mobilecms/s120x120_jfs/t1/19745/21/1415/4886/5c120cbbEe58af0bf/4d19bf58d42fc9c4.png"
                },
                { 
                    text: '男装' ,
                    icon:"//m.360buyimg.com/mobilecms/s120x120_jfs/t1/25651/12/1391/4836/5c120c34Eb93a70fa/3a1735f6a79d0721.png"
                },
                { 
                    text: '饰品' ,
                    icon:"//m.360buyimg.com/mobilecms/s120x120_jfs/t1/14996/29/2195/11094/5c1afdb7Ee54cf069/d6ab6a0f64fee068.png"
                },
                { 
                    text: '洗护' ,
                    icon:"//m.360buyimg.com/mobilecms/s120x120_jfs/t1/27748/22/1419/4913/5c120d0eEa52ea62f/3c2b78a40edc97b2.png"
                },
                { 
                    text: '电器' ,
                    icon:"//m.360buyimg.com/mobilecms/s120x120_jfs/t1/19699/10/1440/6755/5c120ca6Eaa521f62/f9d57f39e55c7321.png"
                },
            ],
            imgHeight: 176,
            lists:[
                {
                    title:"每日秒杀",
                    prods:[
                        {
                            text:'平板电脑',
                            icon:'//m.360buyimg.com/n1/s150x150_jfs/t1/65000/23/14266/146571/5dbc0854E3c952de7/cce8829ec944181a.jpg!q70.jpg.dpg'
                        },
                        {
                            text:'平板电脑',
                            icon:'//m.360buyimg.com/n1/s150x150_jfs/t17677/311/1731306712/38153/32cc1d8d/5ad40f09Ncd7d80d6.png!q70.jpg.dpg'
                        },
                        {
                            text:'平板电脑',
                            icon:'//m.360buyimg.com/n1/s150x150_jfs/t29566/227/1464891645/10350/a5b133e2/5ce20cdcNd9cdd972.jpg!q70.jpg.dpg'
                        },
                        {
                            text:'平板电脑',
                            icon:'//m.360buyimg.com/mobilecms/s150x150_jfs/t1/56939/39/1210/59272/5cefa52dE2f70588a/3174a20e743edd49.png!q70.jpg.dpg'
                        }
                    ]
                },
                {
                    title:"精选会场",
                    prods:[
                        {
                            text:'美妆爆品',
                            icon:'//m.360buyimg.com/mobilecms/s150x150_jfs/t1/50174/30/1230/9784/5cef98bfE318f8d24/4720dc4079dd568b.jpg!q70.jpg.dpg'
                        },
                        {
                            text:'美妆爆品',
                            icon:'//m.360buyimg.com/mobilecms/s150x150_jfs/t1/34938/26/11155/70774/5cefa0c6E5a90edb2/47b686712510d44e.png!q70.jpg.dpg'
                        },
                        {
                            text:'美妆爆品',
                            icon:'//m.360buyimg.com/mobilecms/s150x150_jfs/t1/38988/36/7707/54292/5cefa2b0E1cce5cfa/64e76ed6c67568bf.png!q70.jpg.dpg'
                        },
                        {
                            text:'美妆爆品',
                            icon:'//m.360buyimg.com/mobilecms/s150x150_jfs/t1/71612/30/758/62076/5cefa5a6E2494c8c2/13aac3e0bb1b4e55.png!q70.jpg.dpg'
                        }
                        
                    ]
                },
                {
                    title:"精选会场",
                    prods:[
                        {
                            text:'平板电脑',
                            icon:'//m.360buyimg.com/n1/s150x150_jfs/t29566/227/1464891645/10350/a5b133e2/5ce20cdcNd9cdd972.jpg!q70.jpg.dpg'
                        },
                        {
                            text:'平板电脑',
                            icon:'//m.360buyimg.com/mobilecms/s150x150_jfs/t1/56939/39/1210/59272/5cefa52dE2f70588a/3174a20e743edd49.png!q70.jpg.dpg'
                        },
                        {
                            text:'美妆爆品',
                            icon:'//m.360buyimg.com/mobilecms/s150x150_jfs/t1/38988/36/7707/54292/5cefa2b0E1cce5cfa/64e76ed6c67568bf.png!q70.jpg.dpg'
                        },
                        {
                            text:'美妆爆品',
                            icon:'//m.360buyimg.com/mobilecms/s150x150_jfs/t1/71612/30/758/62076/5cefa5a6E2494c8c2/13aac3e0bb1b4e55.png!q70.jpg.dpg'
                        }
                    ]
                },
                {
                    title:"精选会场",
                    prods:[
                        {
                            text:'美妆爆品',
                            icon:'//m.360buyimg.com/mobilecms/s150x150_jfs/t1/38988/36/7707/54292/5cefa2b0E1cce5cfa/64e76ed6c67568bf.png!q70.jpg.dpg'
                        },
                        {
                            text:'美妆爆品',
                            icon:'//m.360buyimg.com/mobilecms/s150x150_jfs/t1/71612/30/758/62076/5cefa5a6E2494c8c2/13aac3e0bb1b4e55.png!q70.jpg.dpg'
                        },
                        {
                            text:'美妆爆品',
                            icon:'//m.360buyimg.com/mobilecms/s150x150_jfs/t1/38988/36/7707/54292/5cefa2b0E1cce5cfa/64e76ed6c67568bf.png!q70.jpg.dpg'
                        },
                        {
                            text:'美妆爆品',
                            icon:'//m.360buyimg.com/mobilecms/s150x150_jfs/t1/71612/30/758/62076/5cefa5a6E2494c8c2/13aac3e0bb1b4e55.png!q70.jpg.dpg'
                        }
                    ]
                }
            ]
        }
    }
    componentDidMount() {
        // var to = new Date('2019, 11, 12, 00, 00, 00'); //月份是从0开始的
        var to = new Date('2019/11/12 00:00:00');
 
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
        const data1 = Array.from(new Array(this.state.tabs.length)).map((v,i) => ({
            title:this.state.tabs[i].text ,
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
                <Tabs tabs={data1} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={6} />}>
                    {this.renderContent}
                </Tabs>
                {/* 轮播图 */}
                <Carousel
                    autoplay={true}
                    infinite
                >
                    {this.state.searchValue.map(val => (
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
                    <Grid data={this.state.tabs} isCarousel columnNum = "5" dotStyle={dotStyles} hasLine="false"/>
                </WingBlank>
                <WhiteSpace size="lg"/>
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
                    {this.state.lists.map((val,index) => (
                        <Flex key={index}
                        style={{
                            position: 'relative',
                            top: this.state.slideIndex === index ? -10 : 0,
                            height: this.state.imgHeight
                        }}>
                            <Flex.Item>
                                <img
                                    src={val.prods[0].icon}
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
                                    src={val.prods[1].icon}
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
                <Flex wrap="wrap" style={{width:'100%'}}>
                    {
                        this.state.lists.map((val,i)=>(
                            <div style={{width:'50%'}} key={i}>
                                <div style={{fontWeight:'bold',padding: '8px 7px 4px'}}>{val.title}
                                {
                                    i==0 && (
                                        <span className="secKill">00:00:00</span>
                                    )
                                }
                                </div>
                                <Flex>
                                    <div style={{width:'50%',padding: '5px'}}>
                                        <img src={val.prods[0].icon} alt="" style={{width:'100%'}} />
                                    </div>
                                    <div style={{width:'50%',padding: '5px'}}>
                                        <img src={val.prods[1].icon} alt="" style={{width:'100%'}} />    
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
                            this.state.searchValue.map((v) => {
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
                    this.state.lists.map((val,i)=>(
                        i<2 && (
                        <Fragment key={i}>
                            <div style={{textAlign:'center',fontWeight:'bold',marginTop:'10px'}}>{val.title}</div>
                            <Grid data={val.prods} hasLine={false} square={false} className="not-square-grid" />
                        </Fragment>
                        )
                    ))
                }
                
                </WingBlank>
            </div>
        )
    }
}
export default Home;
const dotStyles={

}
