# vue-t-component

> VUE自定义组件，方便工作使用
demo: localhost:8080

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

```

== 参数说明
-- t-pagination

参数               说明                类型	        是否必选  	      默认值
total             总条目数             Number       true             ----
currentPage       当前页数             Number       false            1
styleSize         分页样式             String       false            sm (sm, md, lg)三种样式
pageNum           每页显示条目数        Number       false            20
pageNums          每页显示数选择设置     Array        false            [20, 40, 60]

事件
setCurrentFn      当前页改变时触发      Function      -----           回调参数 当前页码
setNumsFn         每页显示设置改变触发   Function      -----           回调参数 每页设置条数
