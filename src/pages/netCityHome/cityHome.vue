<template>
    <div class="cityBigBox">
        <div class="navBigBox">
            <div class="headBoxSheet">
                <van-search
                        v-model="value"
                        shape="round"
                        show-action
                        placeholder="请输入搜索关键词"
                        @search="onSearch"
                        style="width: 100%;height: 100%;"
                >
                    <div slot="action" @click="onSearch">
                        <img style="width: 70%;height: 70%;" src="../../assets/cityHome/shuaxin.png" alt="">
                    </div>
                </van-search>
            </div>
            <div class="zhuceBox">
                <div class="zhuceBox_font">
                    <span style="color: #0F0E0C">首次注册用户专享一次<span style="color: #F20924">VIP</span>会员体验优惠</span>
                </div>
                <div class="zhuceBox_btn">立即注册</div>
            </div>
            <div class="cityTitleBox">
                <div class="cityTitleBox_left">
                    <img style="width: 47%;height: 100%" src="../../assets/cityHome/leftOne.png" alt="">
                    <img style="width: 44%;height: 57%" src="../../assets/cityHome/leftTwo.png" alt="">
                </div>
                <div class="cityTitleBox_line"></div>
                <div class="cityTitleBox_font">
                    <span class="cityTitleBox_fontOne">全媒体宣发</span>
                    <div class="cityTitleBox_fontTwo">
                        <span>整合营销</span>
                        <span>会议活动</span>
                        <span>项目全案</span>
                        <span>顾问智库</span>
                    </div>
                </div>
                <div class="cityTitleBox_right">
                    <img style="width: 43%;height: 43%" src="../../assets/cityHome/sousuo.png" alt="">
                </div>
            </div>
            <div class="lunboBox">
                <div class="lunboBigBox">
                    <div class="lunboBigBox_slice">
                        <div class="sliceBox" @click="dianji('quan')">
                            <div class="sliceBox_top">
                                <img v-if="fontCol === '#EF0C17'? true : false" style="width: 63%;height: 70%;" src="../../assets/cityHome/360Pic.png" alt="">
                            </div>
                            <div :style="{color:fontCol}" class="sliceBox_bot">全面</div>
                        </div>
                        <div class="sliceBox">
                            <div class="sliceBox_top"></div>
                            <div class="sliceBox_bot">·</div>
                        </div>
                        <div class="sliceBox" @click="dianji('sheng')">
                            <div class="sliceBox_top">
                                <img v-if="fontColtwo === '#EF0C17'? true : false" style="width: 63%;height: 70%;" src="../../assets/cityHome/360Pic.png" alt="">
                            </div>
                            <div :style="{color:fontColtwo}" class="sliceBox_bot">省心</div>
                        </div>
                        <div class="sliceBox">
                            <div class="sliceBox_top"></div>
                            <div class="sliceBox_bot">·</div>
                        </div>
                        <div class="sliceBox" @click="dianji('qian')">
                            <div class="sliceBox_top">
                                <img v-if="fontColthr === '#EF0C17'? true : false" style="width: 63%;height: 70%;" src="../../assets/cityHome/360Pic.png" alt="">
                            </div>
                            <div :style="{color:fontColthr}" class="sliceBox_bot">省钱</div>
                        </div>
                    </div>
                    <div class="lunboBigBox_swiper">
                        <van-swipe class="my-swipe" :show-indicators="false" :autoplay="3000" indicator-color="white" ref="swiper" @change="onChange">
                            <van-swipe-item v-for="(item,index) in swiperAll" :key="index">
                                <div class="swiperBox">
                                    <img style="width: 100%;height: 100%" :src=item.imgs alt="">
                                </div>
                            </van-swipe-item>
                        </van-swipe>
                    </div>
                </div>
            </div>
            <div class="libaoBox">
                <img style="width: 100%;height: 100%" src="../../assets/cityHome/libao.png" alt="">
            </div>
            <div class="kuaisuBox">
                <div class="kuaisuBox_top">
                    <div class="kuaisuBoxtop_left">快速入口</div>
                    <div class="kuaisuBoxtop_right">在线客服 ></div>
                </div>
                <div class="kuaisuBox_bot">
                    <div class="kuaisuBoxbot_Box" v-for="(item,index) in kuaisuBox"  :key="index">
                        <div class="suBoxbot_Boxtop">
                            <img style="width: 63%;height: 72%" :src=item.img alt="">
                        </div>
                        <div class="suBoxbot_Boxbot">{{item.text}}</div>
                    </div>
                </div>
            </div>
            <div class="kuaisuBoxtwo">
                <div class="kuaisuBox_top">
                    <div class="kuaisuBoxtop_left">媒体采购<div class="kuaisuBoxtop_nav">全方位媒体资源优选</div></div>
                    <div class="kuaisuBoxtop_right">我要发稿 ></div>
                </div>
                <div class="kuaisuBox_bottwo">
                    <div class="suBox_bottwo" v-for="(item,index) in meiticai"  :key="index">
                        <div class="suBox_bottwoBox">
                            <div class="bottwoBox_navTop">{{item.title}}</div>
                            <div class="bottwoBox_navBox">{{item.nav}}</div>
                            <div class="bottwoBox_navBot">
                                <img style="width: 88%;height: 100%" :src=item.img alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="kuaisuBoxthr">
                <div class="kuaisuBox_top">
                    <div class="kuaisuBoxtop_left">文案撰写<div class="kuaisuBoxtop_nav">多年央视从业编辑</div></div>
                    <div class="kuaisuBoxtop_right">我要代写 ></div>
                </div>
                <div class="kuaisuBox_botthr">
                    <div class="suBox_botthrleft">
                        <div class="botthrleftNav">
                            <div class="botthrleftNav_title">品牌文化</div>
                            <div class="botthrleftNav_nav">
                                <span>立足长远宣传价值</span>
                                <span>有效提升品牌形象</span>
                            </div>
                            <div class="botthrleftNav_foot">
                                <img style="width: 100%;height: 75%" src="../../assets/topImgThr/pinpai.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="suBox_botthrright">
                        <div class="botthrrightBox">
                            <div class="botthrrightBox_left">
                                <span style="font-size: 0.3rem;font-weight: bold;margin-bottom: 0.05rem">新闻通稿</span>
                                <span style="font-size: 0.22rem;font-weight: 500;color: #006699;margin-top: 0.05rem">专业、高效、逻辑清晰 </span>
                            </div>
                            <div class="botthrrightBox_right">
                                <img style="width: 60%;height: 60%" src="../../assets/topImgThr/xinwen.png" alt="">
                            </div>
                        </div>
                        <div class="botthrrightBox">
                            <div class="botthrrightBox_left">
                                <span style="font-size: 0.3rem;font-weight: bold;margin-bottom: 0.05rem">软文撰写</span>
                                <span style="font-size: 0.22rem;font-weight: 500;color: #006699;margin-top: 0.05rem">好文采成就好事业</span>
                            </div>
                            <div class="botthrrightBox_right">
                                <img style="width: 60%;height: 60%" src="../../assets/topImgThr/ruanwen.png" alt="">
                            </div>
                        </div>
                        <!--<div></div>-->
                    </div>
                </div>
            </div>
            <div class="kefuBox">
                <div class="kefuBoxTop">
                    <div class="kefuBoxTopleft">
                        <div class="kefuBoxTopleft_img">
                            <img style="width: 94%;height: 100%;border-radius: 50%" src="../../assets/kefu/touxiang.png" alt="">
                        </div>
                        <div class="kefuBoxTopleft_font">
                            <span style="font-size: 0.3rem;font-weight: bold;color: #F10606; text-shadow: 0px 0px 7px #ffffff;">在线</span>
                        </div>
                    </div>
                    <div class="kefuBoxTopnav">
                        <div class="kefuBoxTopnav_head">客服经理：蒋松林</div>
                        <div class="kefuBoxTopnav_nav">立即咨询</div>
                        <div class="kefuBoxTopnav_foot">
                            <div class="kefuBoxTopnav_footimg">
                                <img style="width: 55%;height: 55%" src="../../assets/kefu/dianhua.png" alt="">
                            </div>
                            <div class="kefuBoxTopnav_footfont">400-838-5198</div>
                        </div>
                    </div>
                    <div class="kefuBoxTopright">
                        <div class="kefuBoxTopleft_font">
                            <span style="font-size: 0.18rem;color: #ffffff">关注官方公众号</span>
                        </div>
                        <div class="kefuBoxTopleft_img">
                            <img style="width: 90%;height: 90%;" src="../../assets/kefu/erweima.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="kefuBoxBot">
                    <div class="kefuBoxname">
                        <input v-model="name" class="inputBoxyanz" type="text" maxlength="6" placeholder="请输入姓名" @input="nameDianji" />
                    </div>
                    <div class="kefuBoxname">
                        <input v-model="phoneNum" class="inputBox" onkeyup="value=value.replace(/[^\d]/g,'')" type="text" maxlength="11" placeholder="请输入手机号" @input="phoneNumber" />
                    </div>
                    <div class="kefuBoxBtn">免费获取专属客服支持</div>
                </div>
            </div>
            <div class="kuaisuBoxfor">
                <div class="kuaisuBox_top">
                    <div class="kuaisuBoxtop_left">优选服务<div class="kuaisuBoxtop_nav">不可或缺的投放渠道</div></div>
                    <!--<div class="kuaisuBoxtop_right">我要发稿 ></div>-->
                </div>
                <div class="kuaisuBox_botfor">
                    <div class="suBox_botfortop">
                        <div class="suBox_botfortopBox" v-for="(item,index) in youxuan"  :key="index">
                            <div class="botfortopBox_nav">
                                <div class="botfortopBox_navtitle">{{item.title}}</div>
                                <div class="botfortopBox_navBox">{{item.nav}}</div>
                                <div class="botfortopBox_navFoot">
                                    <img :style={width:item.width,height:item.height} :src=item.img alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="suBox_botforbot">
                        <div class="suBox_botfortopBox">
                            <div class="botfortopBox_nav">
                                <div class="botfortopBox_navtitle">危机公关</div>
                                <div class="botfortopBox_navBox">效果就是力量</div>
                                <div class="botfortopBox_navFoot">
                                    <img style="width: 60%;height: 90%" src="../../assets/topImgFor/gongguan.png" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="suBox_botforbotBox">
                            <div class="botforbotBox">
                                <div class="botforbotBox_left">
                                    <div class="botfortopBox_navtitle">量身订制</div>
                                    <div class="botfortopBox_navBox">目标—执行</div>
                                    <div class="botfortopBox_navFoot">
                                        <img style="width: 45%;height: 90%" src="../../assets/topImgFor/xiaoguoOne.png" alt="">
                                    </div>
                                </div>
                                <div class="botforbotBox_right">
                                    <img style="width: 100%;height: 80%" src="../../assets/topImgFor/xiaoguoTwo.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="kuaisuBoxFiv">
                <div class="kuaisuBox_top">
                    <div class="kuaisuBoxtop_left">媒体套餐</div>
                </div>
                <div class="kuaisuBox_botFiv">
                    <div class="suBox_botFivBox" v-for="(item,index) in meiti"  :key="index">
                        <div class="botFivBoxImg">
                            <img style="width: 70%;height: 70%" :src=item.img alt="">
                        </div>
                        <div class="botFivBoxFont">{{item.title}}</div>
                    </div>
                </div>
            </div>
            <div class="kuaisuBoxSix">
                <div class="kuaisuBox_top">
                    <div class="kuaisuBoxtop_left">媒体套餐</div>
                </div>
                <div class="kuaisuBox_botSix">
                    <van-tabs v-model="activeTwo">
                        <van-tab title="舆情监测">
                            <div class="suBox_botSixBox">
                                <div class="suBox_botSixBoxtop">
                                    <div class="botSixBoxtopBox">新闻监测</div>
                                    <div class="botSixBoxtopBox">正面监测</div>
                                    <div class="botSixBoxtopBox">负面监测</div>
                                </div>
                                <div class="suBox_botSixBoxtop">
                                    <div class="botSixBoxtopBox">行业监测</div>
                                    <div class="botSixBoxtopBox">竞品监测</div>
                                    <div class="botSixBoxtopBox">数据监测</div>
                                </div>
                            </div>
                        </van-tab>
                        <van-tab title="品牌公关">
                            <div class="suBox_botSixBox">
                                <div class="suBox_botSixBoxtop">
                                    <div class="botSixBoxtopBox">媒体采购</div>
                                    <div class="botSixBoxtopBox">全案策划</div>
                                    <div class="botSixBoxtopBox">软文发布</div>
                                </div>
                                <div class="suBox_botSixBoxtop">
                                    <div class="botSixBoxtopBox">公告通知</div>
                                    <div class="botSixBoxtopBox">活动路演</div>
                                    <div class="botSixBoxtopBox">会议组织</div>
                                </div>
                            </div>
                        </van-tab>
                        <van-tab title="营销推广">
                            <div class="suBox_botSixBox">
                                <div class="suBox_botSixBoxtop">
                                    <div class="botSixBoxtopBox">广告投放</div>
                                    <div class="botSixBoxtopBox">整合营销</div>
                                    <div class="botSixBoxtopBox">订制服务</div>
                                </div>
                                <div class="suBox_botSixBoxtop">
                                </div>
                            </div>
                        </van-tab>
                        <van-tab title="技术加盟">
                            <div class="suBox_botSixBox">
                                <div class="suBox_botSixBoxtop">
                                    <div class="botSixBoxtopBox">发稿代理</div>
                                    <div class="botSixBoxtopBox">网站开发</div>
                                    <div style="background-color: #E6E6E6" class="botSixBoxtopBox"></div>
                                </div>
                                <div class="suBox_botSixBoxtop">
                                </div>
                            </div>
                        </van-tab>
                    </van-tabs>
                </div>
            </div>
            <div class="kuaisuBoxSev">
                <div class="kuaisuBoxSev_name">
                    <input v-model="name" class="inputBoxyanztwo" type="text" maxlength="6" placeholder="请输入姓名" @input="nameDianji" />
                </div>
                <div class="kuaisuBoxSev_name">
                    <input v-model="phoneNum" class="inputBoxtwo" onkeyup="value=value.replace(/[^\d]/g,'')" type="text" maxlength="11" placeholder="请输入手机号" @input="phoneNumber" />
                </div>
                <div class="kuaisuBoxSev_btn">
                    立即测算
                </div>
            </div>
            <div class="footerSheet">
                <div class="footerSheet_img">
                    <div class="footerSheet_imgbox">
                        <img style="width: 80%;height: 66%" src="../../assets/footer/footer-1.jpg" alt="">
                    </div>
                    <div class="footerSheet_imgbox">
                        <img style="width: 80%;height: 66%" src="../../assets/footer/footer-2.png" alt="">
                    </div>
                </div>
                <div class="footerSheet_font">版权所有:中创国安信用管理股份有限公司</div>
                <div class="footerSheet_font">Copyright©2001-2007 BFA All Rights Reserv</div>
                <div class="footerSheet_font">ICP备案号：琼ICP备19004493号-1  </div>
                <div class="footerSheet_kong"></div>
            </div>
            <div class="footerTabertwo"></div>
        </div>
        <div class="footerTaber"  v-show="hideshow" >
            <van-tabbar style="height:1rem;" v-model="active" :fixed="false" :placeholder="true">
                <van-tabbar-item icon="home-o" v-for="(item,index) in tabbars"
                                 :key="index"
                                 @click="tab(index,item.name)">
                    <span :class="currIndex == index ? active:''">{{item.title}}</span>
                    <template slot="icon" slot-scope="props">
                        <img :src="props.active ? item.active : item.normal">
                    </template>
                </van-tabbar-item>
            </van-tabbar>
        </div>
    </div>
</template>

<script>
    export default {
        name: "cityHome",
        data() {
            return {
                docmHeight: document.documentElement.clientHeight,  //默认屏幕高度
                showHeight: document.documentElement.clientHeight,   //实时屏幕高度
                hideshow:true,  //显示或者隐藏footer
                activeTwo: 0,
                value:'',
                fontCol:'#EF0C17',
                fontColtwo:'#006699',
                fontColthr:'#006699',
                currIndex: 0,
                current: 0,
                active: 0,
                phoneNum:'',
                name:'',
                indexSwiper:0,
                meiti:[
                    {
                        title:'权重央媒',
                        img:require('../../assets/topImgFiv/qz.png')
                    },
                    {
                        title:'门户网站',
                        img:require('../../assets/topImgFiv/mh.png')
                    },
                    {
                        title:'国际',
                        img:require('../../assets/topImgFiv/gj.png')
                    },
                    {
                        title:'财经商业',
                        img:require('../../assets/topImgFiv/cj.png')
                    },
                    {
                        title:'汽车',
                        img:require('../../assets/topImgFiv/qc.png')
                    },
                    {
                        title:'家居房产',
                        img:require('../../assets/topImgFiv/jj.png')
                    },
                    {
                        title:'女性时尚',
                        img:require('../../assets/topImgFiv/nx.png')
                    },
                    {
                        title:'旅游',
                        img:require('../../assets/topImgFiv/ly.png')
                    },
                    {
                        title:'健康',
                        img:require('../../assets/topImgFiv/jk.png')
                    },
                    {
                        title:'教育',
                        img:require('../../assets/topImgFiv/jy.png')
                    },
                    {
                        title:'IT科技',
                        img:require('../../assets/topImgFiv/it.png')
                    },
                    {
                        title:'超级霸屏',
                        img:require('../../assets/topImgFiv/bp.png')
                    },
                    {
                        title:'母婴亲子',
                        img:require('../../assets/topImgFiv/my.png')
                    },
                    {
                        title:'微商',
                        img:require('../../assets/topImgFiv/ws.png')
                    },
                    {
                        title:'加盟',
                        img:require('../../assets/topImgFiv/jm.png')
                    },
                    {
                        title:'娱乐',
                        img:require('../../assets/topImgFiv/yl.png')
                    },
                    {
                        title:'农业',
                        img:require('../../assets/topImgFiv/ny.png')
                    },
                    {
                        title:'游戏',
                        img:require('../../assets/topImgFiv/yx.png')
                    },
                    {
                        title:'体育',
                        img:require('../../assets/topImgFiv/ty.png')
                    },
                    {
                        title:'公益慈善',
                        img:require('../../assets/topImgFiv/cs.png')
                    }

                ],
                youxuan:[
                    {
                        title:'百科创建',
                        nav:'企业   品牌   人物',
                        img:require('../../assets/topImgFor/baidu.png'),
                        width:"80%",
                        height: "90%"
                    },
                    {
                        title:'明星邀约',
                        nav:'广告   代言   出席',
                        img:require('../../assets/topImgFor/mingxing.png'),
                        width:"65%",
                        height: "90%"
                    },
                    {
                        title:'获客引流',
                        nav:'精准引流推广方案',
                        img:require('../../assets/topImgFor/yinliu.png'),
                        width:"75%",
                        height: "90%"
                    }
                ],
                meiticai:[
                    {
                        title:'网站媒体',
                        nav:'10万+真实资源覆盖式信息传播 迅速为您打通媒体推广渠道',
                        img:require('../../assets/topImgTwo/wangluo.png')
                    },
                    {
                        title:'视频广播',
                        nav:'央视、CCTV、全国各地方电视台 主流网络视频媒体',
                        img:require('../../assets/topImgTwo/shipin.png')
                    },
                    {
                        title:'报刊杂志',
                        nav:'报纸、杂志、学术期刊 评职称、发论文',
                        img:require('../../assets/topImgTwo/baokan.png')
                    },
                    {
                        title:'新媒体',
                        nav:'微信推广、问答营销、小红书推广、 信息流推广、信用百科',
                        img:require('../../assets/topImgTwo/xinmei.png')
                    }
                ],
                kuaisuBox:[
                    {
                        img:require('../../assets/topImg/fagao.png'),
                        text:'媒体发稿'
                    },
                    {
                        img:require('../../assets/topImg/meiti.png'),
                        text:'媒体邀约'
                    },
                    {
                        img:require('../../assets/topImg/zhuanlan.png'),
                        text:'专栏专题'
                    },
                    {
                        img:require('../../assets/topImg/weixin.png'),
                        text:'微信营销'
                    },
                    {
                        img:require('../../assets/topImg/weibo.png'),
                        text:'博客论坛'
                    },
                    {
                        img:require('../../assets/topImg/daili.png'),
                        text:'代理系统'
                    },
                    {
                        img:require('../../assets/topImg/koubei.png'),
                        text:'口碑营销'
                    },
                    {
                        img:require('../../assets/topImg/wanghong.png'),
                        text:'网红直播'
                    },
                    {
                        img:require('../../assets/topImg/jiance.png'),
                        text:'舆情监测'
                    }
                ],
                swiperAll:[
                    {
                        imgs:require('../../assets/cityHome/quanmian.png'),
                        id:0
                    },
                    {
                        imgs:require('../../assets/cityHome/shengxin.png'),
                        id:1
                    },
                    {
                        imgs:require('../../assets/cityHome/shengqian.png'),
                        id:2
                    }
                ],
                tabbars: [
                    {
                        name: "CityHome",
                        title: "首页",
                        normal: require("../../assets/cityHome/home.png"),
                        active: require("../../assets/cityHome/homeClick.png")
                    },
                    {
                        name: "",
                        title: "分类",
                        normal: require("../../assets/cityHome/fenlei.png"),
                        active: require("../../assets/cityHome/fenleiClick.png")
                    },
                    {
                        name: "",
                        title: "购物车",
                        normal: require("../../assets/cityHome/shop.png"),
                        active: require("../../assets/cityHome/shopClick.png")
                    },
                    {
                        name: "",
                        title: "客服",
                        normal: require("../../assets/cityHome/kefu.png"),
                        active: require("../../assets/cityHome/kefuClick.png")
                    },
                    {
                        name: "",
                        title: "我的",
                        normal: require("../../assets/cityHome/my.png"),
                        active: require("../../assets/cityHome/myClick.png")
                    }
                ]
            }
        },
        created() {
            let that = this
            const u = navigator.userAgent;
            if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) { //安卓手机
                window.addEventListener('resize', function () {
                    // Document 对象的activeElement 属性返回文档中当前获得焦点的元素。
                    if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
                        console.log('安卓点击了')
                        console.log('显影',that.hideshow)
                        that.hideshow = !that.hideshow
                        // if( that.hideshow === false){
                        //     that.hideshow = true
                        // }
                        // window.setTimeout(function() {
                        //     document.activeElement.scrollIntoView(true);
                        // }, 50);
                    }
                })
            }
        },
        mounted(){
            console.log('123123',this.docmHeight)
            window.onresize = ()=>{
                console.log(999999)
                return(()=>{
                    console.log(789789)
                    this.showHeight = document.body.clientHeight;
                })()
            }
        },
        watch:{
            showHeight:function() {
                if(this.docmHeight > this.showHeight){
                    this.hideshow=false
                    console.log(456456)
                }else{
                    this.hideshow=true
                    console.log(123123)
                }
            }
        },
        methods:{
            onChange(index) {
                // console.log('indexindex',index)
                this.indexSwiper = index
                // console.log('this.indexSwiper',this.indexSwiper)
                if(index === 0){
                    this.fontCol='#EF0C17'
                    this.fontColtwo='#006699'
                    this.fontColthr='#006699'
                }else if(index === 1){
                    this.fontCol='#006699'
                    this.fontColtwo='#EF0C17'
                    this.fontColthr='#006699'
                }else if(index === 2){
                    this.fontCol='#006699'
                    this.fontColtwo='#006699'
                    this.fontColthr='#EF0C17'
                }
            },
            dianji(index){
                if(index === 'quan'){
                    this.$refs.swiper.swipeTo(0);
                }else if(index === 'sheng'){
                    this.$refs.swiper.swipeTo(1);
                }else if(index === 'qian'){
                    this.$refs.swiper.swipeTo(2);
                }
            },
            tab(index, val) {
                this.currIndex = index;
                // this.$router.push(val);
            },
            onSearch(){
                console.log('搜索')
            },
            phoneNumber(event){
                // console.log('出发event',event.target.value)
                this.phoneNum = event.target.value
            },
            nameDianji(event){
                // console.log('出发event',event.target.value)
                this.name = event.target.value
            }
        }

    }
</script>
<style src="../../style/netCityHome/cityHome.css" scoped></style>
<style>
    .van-tabs{
        width: 100% !important;
    }
    .van-field__left-icon{
        width: 20px !important;
        height: 100% !important;
    }
    .van-search__action{
        width: 10% !important;
        height: 100% !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
    }
    .my-swipe .van-swipe-item {
        /*width: 100% !important;*/
        height: 100% !important;
        color: #fff;
        font-size: 20px;
        line-height: 150px;
        text-align: center;
        /*background-color: #39a9ed;*/
    }
    .van-swipe{
        height:100% !important;
    }
    .van-search--show-action{
        width: 100% !important;
        height: 100% !important;
    }
    .van-search{
        background-color: #ffffff !important;
    }
    .van-dropdown-menu{
        height: 10px !important;
    }
    .van-search__action{
        font-size: 12px !important;
    }
    .van-tabbar{
        z-index: -1 !important;
    }

</style>
