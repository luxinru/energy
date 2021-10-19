<template>
  <div class="screen-container">
    <header class="screen-header">
      <div>
        <img src="static/img/top.png" alt="" />
      </div>
      <span class="title">XXX能源管理—能耗分项</span>
      <div class="title-right">
        <span class="datetime">{{ now }}</span>
      </div>
    </header>

    <section class="search_bar">
      <LSelect label="能耗种类" placeholder="请选择能耗种类" :width="340"></LSelect>
      <LSelect label="对象选择" placeholder="请选择对象选择" :width="340" style="margin-left: 16px;"></LSelect>
      <LInput label="查询日期" placeholder="请选择查询日期" :width="340" style="margin-left: 16px;"></LInput>
      <LInput label="" placeholder="2021-10-08" :width="340" style="margin-left: 16px;"></LInput>
      <LInput label="" placeholder="2021-10-09" :width="340" style="margin-left: 16px;"></LInput>
      <LButton label="搜索" style="margin-left: 16px;"></LButton>
    </section>

    <section class="container">
      <div class="box">
        <div class="part">
          <el-scrollbar >
            <table>
              <tr>
                <th>项目</th>
                <th>数值</th>
                <th>单位</th>
              </tr>
              <tr v-for="(item, index) in tableData1" :key="index">
                <td>{{ item.project }}</td>
                <td>{{ item.number }}</td>
                <td>{{ item.unit }}</td>
              </tr>
            </table>
          </el-scrollbar>
        </div>
        <div class="part">
          <el-scrollbar >
            <table>
              <tr>
                <th>序号</th>
                <th>名称</th>
                <th>可租赁面积（平米）</th>
                <th>总用电量（度）</th>
                <th>单位面积用电量（度/平米）</th>
                <th>总用水量（吨）</th>
                <th>单位面积用水量（吨/平米）</th>
              </tr>
              <tr v-for="(item, index) in tableData2" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ item.value1 }}</td>
                <td>{{ item.value2 }}</td>
                <td>{{ item.value3 }}</td>
                <td>{{ item.value4 }}</td>
                <td>{{ item.value5 }}</td>
                <td>{{ item.value6 }}</td>
              </tr>
            </table>
          </el-scrollbar>
        </div>
      </div>
      <div class="box">
        <div class="part">
          <el-scrollbar>
            <table>
              <tr>
                <th>项目</th>
                <th>数值</th>
                <th>单位</th>
              </tr>
              <tr v-for="(item, index) in tableData1" :key="index">
                <td>{{ item.project }}</td>
                <td>{{ item.number }}</td>
                <td>{{ item.unit }}</td>
              </tr>
            </table>
          </el-scrollbar>
        </div>

        <div class="part">
          <el-scrollbar>
            <table>
              <tr>
                <th>序号</th>
                <th>名称</th>
                <th>可租赁面积（平米）</th>
                <th>总用电量（度）</th>
                <th>单位面积用电量（度/平米）</th>
                <th>总用水量（吨）</th>
                <th>单位面积用水量（吨/平米）</th>
              </tr>
              <tr v-for="(item, index) in tableData2" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ item.value1 }}</td>
                <td>{{ item.value2 }}</td>
                <td>{{ item.value3 }}</td>
                <td>{{ item.value4 }}</td>
                <td>{{ item.value5 }}</td>
                <td>{{ item.value6 }}</td>
              </tr>
            </table>
          </el-scrollbar>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import moment from 'moment'
import LInput from '../components/LInput.vue'
import LSelect from '../components/LSelect.vue'
import LButton from '../components/LButton.vue'

export default {
  components: {
    LInput,
    LSelect,
    LButton
  },
  data () {
    return {
      timer: null,
      now: moment().format('YYYY-MM-DD hh:mm:ss'),
      tableData1: [
        {
          project: '总占地面积',
          number: '54512.00',
          unit: '平米'
        },
        {
          project: '总占地面积',
          number: '54512.00',
          unit: '平米'
        },
        {
          project: '总占地面积',
          number: '54512.00',
          unit: '平米'
        },
        {
          project: '总占地面积',
          number: '54512.00',
          unit: '平米'
        },
        {
          project: '总占地面积',
          number: '54512.00',
          unit: '平米'
        },
        {
          project: '总占地面积',
          number: '54512.00',
          unit: '平米'
        },
        {
          project: '总占地面积',
          number: '54512.00',
          unit: '平米'
        }
      ],
      tableData2: [
        {
          value1: '1#楼',
          value2: '54512.00',
          value3: '15487',
          value4: '15487',
          value5: '15487',
          value6: '15487',
          value7: '15487'
        },
        {
          value1: '1#楼',
          value2: '54512.00',
          value3: '15487',
          value4: '15487',
          value5: '15487',
          value6: '15487',
          value7: '15487'
        },
        {
          value1: '1#楼',
          value2: '54512.00',
          value3: '15487',
          value4: '15487',
          value5: '15487',
          value6: '15487',
          value7: '15487'
        },
        {
          value1: '1#楼',
          value2: '54512.00',
          value3: '15487',
          value4: '15487',
          value5: '15487',
          value6: '15487',
          value7: '15487'
        },
        {
          value1: '1#楼',
          value2: '54512.00',
          value3: '15487',
          value4: '15487',
          value5: '15487',
          value6: '15487',
          value7: '15487'
        },
        {
          value1: '1#楼',
          value2: '54512.00',
          value3: '15487',
          value4: '15487',
          value5: '15487',
          value6: '15487',
          value7: '15487'
        },
        {
          value1: '1#楼',
          value2: '54512.00',
          value3: '15487',
          value4: '15487',
          value5: '15487',
          value6: '15487',
          value7: '15487'
        },
        {
          value1: '1#楼',
          value2: '54512.00',
          value3: '15487',
          value4: '15487',
          value5: '15487',
          value6: '15487',
          value7: '15487'
        }
      ]
    }
  },
  mounted () {
    this.timer = setInterval(() => {
      this.now = moment().format('YYYY-MM-DD hh:mm:ss')
    }, 1 * 1000)
  },
  beforeUnmount () {
    if (this.timer) {
      window.clearInterval(this.timer)
      this.timer = null
    }
  }
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

  .search_bar {
    width: 100%;
    height: 46px;
    display: flex;
    align-items: center;
  }
  .container {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
    box-sizing: border-box;
    overflow: hidden;

    .box {
      flex: 1;
      background: url('../assets/img/2 拷贝 4.png');
      background-size: 100% 100%;
      background-repeat: no-repeat;
      margin-top: 20px;
      display: flex;
      align-items: center;
      padding: 20px 15px;
      box-sizing: border-box;
      overflow: hidden;

      .part {
        height: 100%;
        display: flex;
        flex-direction: column;
        overflow: hidden;

        &:first-child {
          flex: 27;
        }

        &:last-child {
          flex: 73;
          margin-left: 20px;
        }

        table {
          height: 100%;
          display: flex;
          flex-direction: column;

          tr {
            flex: 1;
            min-height: 49px;
            display: flex;
            align-items: center;

            &:nth-child(even) {
              background: rgba(93, 113, 212, 0.05);
            }

            &:nth-child(odd) {
              background: rgba(93, 113, 212, 0.1);
            }

            th {
              flex: 1;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 15px;
              font-weight: 400;
              color: #6392D3;
            }

            td {
              flex: 1;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 15px;
              font-weight: 400;
              color: #FFFFFF;
            }
          }
        }
      }
    }
  }
}
</style>
