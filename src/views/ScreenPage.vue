<template>
  <div class="screen-container">
    <header class="screen-header">
      <div>
        <img src="static/img/top.png" alt="" />
      </div>
      <!-- <span class="logo">
        <img src="static/img/logo1.png" alt="" />
      </span> -->
      <span class="title">XXX能源管理—驾驶舱</span>
      <div class="title-right">
        <span class="datetime">{{ now }}</span>
      </div>
    </header>
    <div class="screen-body">
      <section class="screen-left">
        <div id="left-top">
          <div class="box-tit">
            <span>实时报警</span>
          </div>
          <div class="box-con">
            <div class="con">
              <Eone></Eone>
            </div>
          </div>
        </div>
        <div id="left-center">
          <div class="box-tit">
            <span>本日耗能 </span>
          </div>
          <div class="box-con">
            <div class="con">
              <div class="hn_list_tree">
                <ul>
                  <li>
                    <span class="list-l">总耗能</span>
                    <span class="list-c">
                      <img src="../../public/static/img/icon_hn.png" alt="" />
                    </span>
                    <div class="list-r">
                      <p class="num-t">
                        <span
                          ><count-to
                            :startVal="100"
                            :endVal="totalEnergy"
                            :duration="3000"
                          ></count-to
                        ></span>
                        kgce
                      </p>
                      <p class="num-b">
                        <span
                          >同比 <small>25 <b>↑</b></small></span
                        >
                        <span
                          >环比 <small>25 <b>↓</b></small></span
                        >
                      </p>
                    </div>
                  </li>
                  <li>
                    <span class="list-l">水 </span>
                    <span class="list-c">
                      <img src="../../public/static/img/icon_shui.png" alt="" />
                    </span>
                    <div class="list-r">
                      <p class="num-t">
                        <count-to
                          :startVal="100"
                          :endVal="electricity"
                          :duration="3000"
                        ></count-to>
                        kgce
                      </p>
                      <p class="num-b">
                        <span
                          >同比 <small>25 <b>↑</b></small></span
                        >
                        <span
                          >环比 <small>25 <b>↓</b></small></span
                        >
                      </p>
                    </div>
                  </li>
                  <li>
                    <span class="list-l">电 </span>
                    <span class="list-c">
                      <img src="../../public/static/img/icon_dian.png" alt="" />
                    </span>
                    <div class="list-r">
                      <p class="num-t">
                        <span
                          ><count-to
                            :startVal="100"
                            :endVal="water"
                            :duration="3000"
                          ></count-to
                        ></span>
                        kgce
                      </p>
                      <p class="num-b">
                        <span
                          >同比 <small>25 <b>↑</b></small></span
                        >
                        <span
                          >环比 <small>25 <b>↓</b></small></span
                        >
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id="left-bottom">
          <div class="box-tit">
            <span>近24小时KPI指标</span>
          </div>
          <div class="box-con">
            <div class="con">
              <Etwo ref="Etwo"></Etwo>
            </div>
          </div>
        </div>
      </section>
      <section class="screen-middle">
        <div id="middle-top">
          <div class="map-allter">
            <div class="map-allter-t">
              <span>
                <img src="../../public/static/img/icon1.png" alt="" />
                风险预警
              </span>
              <span> 能耗消耗过高 </span>
            </div>
            <div class="map-allter-b">
              <span>
                <img src="../../public/static/img/dian.png" alt="" />
              </span>
            </div>
          </div>
        </div>
        <div id="middle-bottom">
          <div class="box-tit">
            <span>实时能耗</span>

            <div class="tab">
              <span
                class="btn"
                v-for="(item, index) in filterData.navTab"
                :key="index"
                :class="{ active: currentSort == index }"
                @click="active(index)"
              >
                {{ item }}
              </span>
            </div>
          </div>
          <div class="box-con">
            <div class="con">
              <div class="sshn-box">
                <dline :isRefresh="isRefresh" style="z-index: 5" />
                <div class="bjt"></div>
              </div>
              <div class="sshn_list_tree">
                <div class="list-t">单位：kwh</div>
                <ul>
                  <li>
                    <span class="list-c">
                      <img src="../../public/static/img/icon_y.png" alt="" />
                    </span>
                    <div class="list-r">
                      <p class="num-t">
                        <count-to
                          :startVal="100"
                          :endVal="1568.08"
                          :duration="3000"
                        ></count-to>
                        kwh
                      </p>
                      <p class="num-b">
                        <span
                          >同比 <small>25 <b>↑</b></small></span
                        >
                        <span
                          >环比 <small>25 <b>↓</b></small></span
                        >
                      </p>
                    </div>
                  </li>
                  <li>
                    <span class="list-c">
                      <img src="../../public/static/img/icon_m.png" alt="" />
                    </span>
                    <div class="list-r">
                      <p class="num-t">
                        <span
                          ><count-to
                            :startVal="100"
                            :endVal="1568.08"
                            :duration="3000"
                          ></count-to
                        ></span>
                        kwh
                      </p>
                      <p class="num-b">
                        <span
                          >同比 <small>25 <b>↑</b></small></span
                        >
                        <span
                          >环比 <small>25 <b>↓</b></small></span
                        >
                      </p>
                    </div>
                  </li>
                  <li>
                    <span class="list-c">
                      <img src="../../public/static/img/icon_d.png" alt="" />
                    </span>
                    <div class="list-r">
                      <p class="num-t">
                        <span
                          ><count-to
                            :startVal="100"
                            :endVal="1568.08"
                            :duration="3000"
                          ></count-to
                        ></span>
                        kwh
                      </p>
                      <p class="num-b">
                        <span
                          >同比 <small>25 <b>↑</b></small></span
                        >
                        <span
                          >环比 <small>25 <b>↓</b></small></span
                        >
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- 右边部分 -->
      <section class="screen-right">
        <div id="right-top">
          <div class="box-tit">
            <span>气像参数</span>
          </div>
          <div class="box-con">
            <div class="con">
              <div class="qx_list_tree">
                <ul>
                  <li>
                    <span class="list-l">北京市</span>

                    <div class="list-r">
                      <p class="time">
                        <span>{{ now }}</span>
                      </p>
                    </div>
                  </li>
                  <li>
                    <span class="list-l">
                      <img src="../../public/static/img/icon_tq.png" alt="" />
                    </span>
                    <span class="list-r"> 22℃ </span>
                  </li>
                  <li>
                    <span class="list-c"
                      >今晚晴，明天晴，比昨天热一些（20℃），空气不错</span
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id="right-center">
          <div class="box-tit">
            <span>本日耗能分项</span>
          </div>
          <div class="box-con">
            <div class="con">
              <Ethree ref="Ethree"></Ethree>
              <Dprs ref="Dprs"></Dprs>
              <!--<div class="box-con-l">

              </div>
              <div class="box-con-r">

              </div> -->
            </div>
          </div>
        </div>
        <div id="right-bottom">
          <div class="box-tit">
            <span>本日耗能排名</span>
          </div>
          <div class="box-con">
            <div class="con">
              <Efour ref="Efour"></Efour>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Dprs from '@/components/Dprs.vue'
import Ethree from '@/components/Ethree.vue'
import Efour from '@/components/Efour.vue'
import Eone from '@/components/Eone.vue'
import Etwo from '@/components/Etwo.vue'
import dline from '@/components/dline.vue'

import moment from "moment";

export default {
  components: {
    dline,
    Dprs,
    Ethree,
    Efour,
    Eone,
    Etwo,
    // Seller
  },
  data() {
    return {
      filterData: {
        navTab: ['电', '水'],
      },
      currentSort: 0,
      totalEnergy: 1568, // 总能耗
      electricity: 2000, // 电
      water: 1000, // 水
      isRefresh: Date.now(),
      timer: null,
      now: moment().format('YYYY-MM-DD hh:mm:ss'),
    }
  },
  mounted () {
    this.timer = setInterval(() => {
      this.now = moment().format('YYYY-MM-DD hh:mm:ss')
    }, 1 * 1000)
  },
  beforeDestroy () {
    if (this.timer) {
      window.clearInterval(this.timer)
      this.timer = null
    }
  },
  methods: {
    active(index) {
      this.currentSort = index
      this.isRefresh = Date.now()
    },
  },
}
</script>
<style lang="less" scoped>
.screen-container {
  width: 100%;
  height: 100%;
  padding: 0 20px;
  background: url('../../public/static/img/bj.jpg') no-repeat;
  // background: url("../../public/static/img/first.png") no-repeat;
  background-size: 100% 100%;
  color: #fff;
  box-sizing: border-box;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
}
.screen-header {
  width: 100%;
  height: 100px;
  font-size: 20px;
  position: relative;
  > div {
    height: inherit;
    display: flex;
    align-items: center;
    padding-bottom: 10px;
    box-sizing: border-box;
    img {
      width: 100%;
    }
  }
  .title {
    position: absolute;
    left: 50.6%;
    top: 44%;
    font-size: 33px;
    transform: translate(-50%, -50%);
  }
  .title-right {
    display: flex;
    align-items: center;
    position: absolute;
    right: 76px;
    top: 72%;
    transform: translateY(-80%);
  }
  .qiehuan {
    width: 28px;
    height: 21px;
    cursor: pointer;
  }
  .datetime {
    font-size: 17px;
    color: #00b9f6;
  }
  .logo {
    position: absolute;
    left: 0px;
    top: 50%;
    transform: translateY(-80%);
    img {
      height: 35px;
      width: 128px;
    }
  }
}
.screen-body {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .screen-left {
    height: 100%;
    width: 22.6%;
    #left-top {
      height: 24%;
      min-height: 258px;
      margin-bottom: 10px;
      position: relative;
    }
    #left-center {
      height: 35%;
      min-height: 377px;
      position: relative;
      .box-con {
        height: 322px;
        .con {
          height: 306px;
          background: rgba(31, 48, 77, 0.2);
        }
      }
    }
    #left-bottom {
      height: 29%;
      min-height: 323px;
      position: relative;
      z-index: 5;
      .box-con {
        height: 269px;
        .con {
          height: 253px;
          background: rgba(31, 48, 77, 0.2);
        }
      }
    }
  }
  .screen-middle {
    height: 100%;
    width: 56.4%;
    margin-left: 0.6%;
    margin-right: 0.6%;
    #middle-top {
      width: 100%;
      height: 630px;
      position: relative;
      background: url(../../public/static/img/map.png) no-repeat;
      background-size: 100% 100%;
      position: relative;
      .map-allter {
        position: absolute;
        right: 119px;
        width: 193px;
        height: 103px;
        top: 133px;
        .map-allter-t {
          width: 193px;
          height: 103px;
          background: url(../../public/static/img/tip_box.png) no-repeat;
          background-size: 100% 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          span {
            height: 40px;
            line-height: 40px;
            display: flex;
            align-items: center;
            img {
              margin-right: 6px;
            }
          }
        }
        .map-allter-b {
          width: 193px;
          height: 103px;
          text-align: center;
          padding-top: 15px;
        }
      }
    }
    #middle-bottom {
      width: 100%;
      height: 41.6%;
      position: relative;
      top: 15px;
      left: 0px;
      display: flex;
      flex-direction: column;
      .box-con {
        height: 269px;
        background: url('../../public/static/img/box_center.png') no-repeat;
        background-size: 100% 100%;
        .con {
          height: 253px;
          background: rgba(31, 48, 77, 0.2);
          display: flex;
          justify-content: space-between;
          align-items: center;
          .sshn-box {
            width: 72%;
            height: inherit;
            position: relative;
            z-index: 666;
            .bjt {
              position: absolute;
              width: 90%;
              height: 100%;
              overflow: hidden;
              display: flex;
              align-items: center;
              background: url('../../public/static/img/bjt.png');
              background-size: 100% 100%;
              top: 15px;
              left: 8%;
              z-index: 1;
            }
          }

          .sshn_list_tree {
            width: 28%;
            height: inherit;
            .list-t {
              font-size: 14px;
              color: #567db6;
              height: 26px;
              display: flex;
              justify-content: flex-end;
              padding-right: 20px;
              align-items: flex-end;
            }
          }
        }
      }
    }
  }
  .screen-right {
    height: 100%;
    width: 22.6%;
    #right-top {
      height: 24%;
      min-height: 258px;
      margin-bottom: 10px;
      position: relative;
    }
    #right-center {
      height: 35%;
      min-height: 377px;
      position: relative;
      .box-con {
        height: 322px;
        .con {
          height: 306px;
          background: rgba(31, 48, 77, 0.2);
        }
      }
    }
    #right-bottom {
      height: 309px;
      position: relative;
      display: flex;
      flex-direction: column;
      .box-con {
        flex: 1;
        position: relative;
        .con {
          height: 253px;
          background: rgba(31, 48, 77, 0.2);
          background-image: url('../assets/img/圆盘.png');
          background-size: 1600px 1000px;
          background-position: -1225px -755px;
          background-repeat: no-repeat;
        }
      }
    }
  }
  .box-tit {
    height: 40px;
    line-height: 29px;
    width: 100%;
    font-size: 14px;
    color: #b8f9ff;
    padding-left: 39px;
    background: url('../../public/static/img/box-top.png') no-repeat;
    box-sizing: border-box;
    display: flex;
    .tab {
      width: 100px;
      margin-left: 10px;

      .btn {
        background: #1d2a4f;
        color: #00beff;
        width: 34px;
        display: inline-block;
        height: 20px;
        border-radius: 3px;
        line-height: 20px;
        text-align: center;
        cursor: pointer;
      }
      .active {
        background: #567db6 !important;
        color: #fff !important;
      }
    }
  }
  .box-con {
    height: 211px;
    width: 100%;
    padding: 6px 0 6px 10px;
    box-sizing: border-box;
    background: url('../../public/static/img/box-bot.png') no-repeat;
    background-size: 100% 100%;
    .con {
      height: 197px;
      background: rgba(31, 48, 77, 0.2);
      display: flex;
      justify-content: space-between;
      .box-con-l {
        width: 50%;
      }
      .box-con-r {
        width: 50%;
      }
    }
    .hn_list_tree {
      width: 100%;
      height: inherit;
      ul {
        padding: 20px;
        height: inherit;
        li {
          height: 33.333%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .list-l {
            width: 17%;
            text-align: right;
            display: inline-block;
            color: #567db6;
            font-size: 16px;
          }
          // .list-c {
          // }
          .list-r {
            width: 52%;
            height: 64px;
            display: flex;
            flex-direction: column;
            .num-t {
              color: #b3b3b3;
              font-size: 12px;
              height: 40px;
              span {
                color: #567db6;
                font-size: 25px;
              }
            }
            .num-b {
              color: #b3b3b3;
              font-size: 12px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              span {
                color: #b3b3b3;
                font-size: 12px;
                width: 50%;

                &:first-child small {
                  margin-left: 10px;
                  color: #00fbfc;
                }
                &:last-child small {
                  margin-left: 10px;
                  color: #ff4040;
                }
              }
            }
          }
        }
      }
    }

    .sshn_list_tree {
      width: 28%;
      height: inherit;
      ul {
        height: inherit;
        li {
          height: 64px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 97%;
          background: rgba(31, 48, 77, 0.2);
          &:nth-child(2) {
            margin: 10px 0;
          }
          .list-c {
            padding-left: 21px;
            padding-top: 8px;
          }
          .list-r {
            width: 68%;
            height: 64px;
            display: flex;
            flex-direction: column;
            .num-t {
              color: #b3b3b3;
              font-size: 12px;
              span {
                color: #567db6;
                font-size: 22px;
                display: inline-block;
                line-height: 40px;
              }
            }
            .num-b {
              color: #b3b3b3;
              font-size: 12px;
              display: flex;
              align-items: center;
              span {
                color: #b3b3b3;
                font-size: 12px;
                width: 43%;

                &:first-child small {
                  color: #00fbfc;
                }
                &:last-child small {
                  color: #ff4040;
                }
              }
            }
          }
        }
      }
    }

    .qx_list_tree {
      width: 100%;
      height: inherit;
      ul {
        padding: 20px;
        height: inherit;
        li {
          &:first-child {
            height: 25px;
            .list-l {
              width: 23.5%;
              text-align: right;
              display: inline-block;
              color: #567db6;
              font-size: 16px;
            }
            .list-r {
              width: 45%;
              color: #567db6;
              font-size: 14px;
            }
          }
          &:last-child {
            height: 25px;
            font-size: 14px;
            color: #567db6;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          height: 71.333%;
          display: flex;
          justify-content: space-between;
          align-items: center;

          .list-l {
            text-align: right;
            display: inline-block;
            color: #567db6;
            font-size: 16px;
            width: 45%;
            padding-right: 19px;
          }
          .list-r {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            width: 53%;
            font-size: 49px;
            font-weight: 600;
            color: #567db6;
          }
        }
      }
    }
  }
}

.resize {
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
}
</style>
