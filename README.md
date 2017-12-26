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

## 参数说明
### t-pagination

#### 参数
<table>
    <tbody>
    <th>
        <td>参数</td>
        <td>说明</td>
        <td>类型</td>
        <td>是否必选</td>
        <td>默认值</td>
    </th>
    </tbody>
    <thead>
      <tr>
        <th>total</th>
        <td>总条目数</td>
        <td>Number</td>
        <td>true</td>
        <td>----</td>
      </tr>
      <tr>
        <th>currentPage</th>
        <td>当前页数</td>
        <td>Number</td>
        <td>false</td>
        <td>1</td>
      </tr>
      <tr>
        <th>styleSize</th>
        <td>分页样式</td>
        <td>String</td>
        <td>false</td>
        <td>sm (sm, md, lg)三种样式</td>
      </tr>
      <tr>
        <th>pageNum</th>
        <td>每页显示条目数</td>
        <td>Number</td>
        <td>false</td>
        <td>20</td>
      </tr>
      <tr>
        <th>pageNums</th>
        <td>每页显示数选择设置</td>
        <td>Array</td>
        <td>false</td>
        <td>[20, 40, 60]</td>
      </tr>
    </thead>
</table>

#### 事件

<table>
    <tbody>
    <th>
        <td>参数</td>
        <td>说明</td>
        <td>类型</td>
        <td>回调参数</td>
    </th>
    </tbody>
    <thead>
      <tr>
        <th>setCurrentFn</th>
        <td>当前页改变时触发</td>
        <td>Function</td>
        <td>回调参数 当前页码</td>
      </tr>
      <tr>
        <th>setNumsFn</th>
        <td>每页显示设置改变触发</td>
        <td>Function</td>
        <td>回调参数 每页设置条数</td>
      </tr>
    </thead>
</table>
