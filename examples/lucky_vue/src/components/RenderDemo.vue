<template>
  <Table border :columns="columns7" :data="data6"></Table>
</template>
<script>
import { Table ,Button,Icon,Modal} from "iview";
import TableHeaderFilter from "./TableHeaderFilter.vue";
import Vue from "vue";
export default {
  components: {
    Table
  },
  data() {
    return {
      columns7: [
        {
          title: "Name",
          key: "name",
          render: (h, params) => {
            return h("div", [//使用render渲染一个div标签
              h(Icon, {//使用render渲染一个iview的组件
                props: {//传递参数
                  type: "person"
                }
              }),
              h("strong", params.row.name)
            ]);
          }
        },
        {
          title: "Age",
          key: "age"
        },
        {
          title: "Address",
          key: "address"
        },
        {
          title: "Action",
          key: "action",
          width: 150,
          align: "center",
          render: (h, params) => {
            return h("div", [//渲染一个div标签
              h(
                Button,//在div标签下渲染一个iview组件
                {
                  props: {//传递参数
                    type: "primary",
                    size: "small"
                  },
                  style: {//设置样式
                    marginRight: "5px"
                  },
                  on: {//监听$emit事件
                    click: () => {
                      this.show(params.index);
                    }
                  }
                },
                "View"
              ),
              h(
                Button,
                {
                  props: {
                    type: "error",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      this.remove(params.index);
                    }
                  }
                },
                "Delete"
              )
            ]);
          }
        }
      ],
      data6: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park"
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park"
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park"
        }
      ]
    };
  },
  methods: {
    show(index) {
      this.$Modal.info({
        title: "User Info",
        content: `Name：${this.data6[index].name}<br>Age：${
          this.data6[index].age
        }<br>Address：${this.data6[index].address}`
      });
    },
    remove(index) {
      this.data6.splice(index, 1);
    },
    //添加头部筛选
    renderHeaderFilter(){
      let allHeader =document.querySelectorAll(".ivu-table-header .ivu-table-cell");
console.log(allHeader);

      allHeader.forEach((element)=>{
        let createNew=document.createElement("div");
        createNew.classList.add("vue-header-filter");
        element.appendChild(createNew);
        new Vue({
          render(h){
            return h(TableHeaderFilter,{
              props:{}
            })
          }
        }).$mount(createNew);
      })
    }
  },


  mounted(){
      //modal注入
      Vue.prototype.$Modal=Modal;
      this.$nextTick(()=>{
        this.renderHeaderFilter();
      })
  }
  
};
</script>
