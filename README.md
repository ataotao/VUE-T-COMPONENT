# vue-t-component

> VUE自定义组件，方便工作使用
> Demo: localhost:8080

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

运行Demo localhost:8080
```

## 参数说明
### t-pagination

#### 参数
<table>
    <thead>
    <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>是否必选</th>
        <th>默认值</th>
    </tr>
    </thead>
    <tbody>
      <tr>
        <th>total</th>
        <td>总条目数</td>
        <td>Number</td>
        <td>true</td>
        <td>----</td>
      </tr>
      <tr>
        <th>mode</th>
        <td>分页控件模式</td>
        <td>String</td>
        <td>false</td>
        <td>full(full, mini)</td>
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
    </tbody>
</table>

#### 事件

<table>
    <thead>
    <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>回调参数</th>
    </tr>
    </thead>
    <tbody>
      <tr>
        <th>setCurrentFn</th>
        <td>当前页改变时触发</td>
        <td>Function</td>
        <td>回调参数 当前页码</td>
      </tr>
      <tr>
        <th>setNumsFn</th>
        <td>每页显示设置改变触发(mode为full时为必填项)</td>
        <td>Function</td>
        <td>回调参数 每页设置条数</td>
      </tr>
    </tbody>
</table>
