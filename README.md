# vue-t-component

> VUE自定义组件，方便工作使用
> Demo: localhost:8080
<ul>
  <li>分页： t-pagination</li>
  <li>通知： t-message</li>
  <li>模态框： t-modal</li>
  <li>MessageBox对话框： t-msgbox </li>
  <li>页面加载: t-pageloading</li>
  <li>局部加载： t-loading</li>
  <li>暂无数据： t-nodata</li>
</ul>

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

运行Demo localhost:8080
```

## 使用方式

`
全部引入
import tComponents from '@/packages/index';
Vue.use(tComponents);

或单个引入

import { Pagenation } from '@/packages/index';
Vue.use(Pagenation);
`

## 参数说明
### t-pagination

##### 参数
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

##### 事件

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

### t-message

##### 参数
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
        <th>msg</th>
        <td>通知文字</td>
        <td>string | html</td>
        <td>true</td>
        <td>无默认值，可支持HTML</td>
      </tr>
      <tr>
        <th>isIcon</th>
        <td>是否显示图标</td>
        <td>Boolean</td>
        <td>false</td>
        <td>false (true | false)</td>
      </tr>
      <tr>
        <th>icon</th>
        <td>图标样式</td>
        <td>String</td>
        <td>false</td>
        <td>'iconfont icon-point'</td>
      </tr>
      <tr>
        <th>duration</th>
        <td>持续时长</td>
        <td>Number</td>
        <td>false</td>
        <td>2000</td>
      </tr>
    </tbody>
</table>

##### 事件

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
        <th>onClose</th>
        <td>通知关闭后回调</td>
        <td>Function</td>
        <td>-----</td>
      </tr>
    </tbody>
</table>

### t-msgbox
##### 参数

###### 只有msg为必填参数 ，如果没有其他后续操作，简单使用方式，可以this.$msgbox('清楚该提示了吗');

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
        <th>title</th>
        <td>标题</td>
        <td>string</td>
        <td>false</td>
        <td>'提示'</td>
      </tr>
      <tr>
        <th>msg</th>
        <td>内容（必填项）</td>
        <td>string | html</td>
        <td>true</td>
        <td>isHtml为true才能传入html标签，否则将按照text处理</td>
      </tr>
      <tr>
        <th>showCloseBtn</th>
        <td>是否显示关闭按钮</td>
        <td>Boolean</td>
        <td>false</td>
        <td>true</td>
      </tr>
      <tr>
        <th>showConfirmBtn</th>
        <td>是否显示确定按钮</td>
        <td>Boolean</td>
        <td>false</td>
        <td>true</td>
      </tr>
      <tr>
        <th>showCancelBtn</th>
        <td>是否显示取消按钮</td>
        <td>Boolean</td>
        <td>false</td>
        <td>true</td>
      </tr>
      <tr>
        <th>ConfirmBtnText</th>
        <td>确定按钮文字</td>
        <td>String</td>
        <td>false</td>
        <td>取消</td>
      </tr>
      <tr>
        <th>cancelBtnText</th>
        <td>取消按钮文字</td>
        <td>String</td>
        <td>false</td>
        <td>确定</td>
      </tr>
      <tr>
        <th>closeOnBackdrop</th>
        <td>点击遮罩是否关闭</td>
        <td>Boolean</td>
        <td>false</td>
        <td>false</td>
      </tr>
      <tr>
        <th>isHtml</th>
        <td>是否为html标签</td>
        <td>Boolean</td>
        <td>false</td>
        <td>false</td>
      </tr>
      <tr>
        <th>isTitle</th>
        <td>是否有标题</td>
        <td>Boolean</td>
        <td>false</td>
        <td>true</td>
      </tr>
    </tbody>
</table>

##### 事件

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
        <th>onConfirm</th>
        <td>确定后回调函数</td>
        <td>Function</td>
        <td>-----</td>
      </tr>
      <tr>
        <th>onCancel：</th>
        <td>关闭后回调函数</td>
        <td>Function</td>
        <td>-----</td>
      </tr>
    </tbody>
</table>

### t-data
##### 参数
> 支持通过slot写入其他自定义内容，例如：

```
  <t-nodata msg="自定义无数据内容" icon="glyphicon glyphicon-floppy-remove" iconSize="50px" color="black">
  这是我想放入的其他内容
  </t-nodata>
```
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
        <th>msg</th>
        <td>无数据时的提示内容</td>
        <td>string</td>
        <td>false</td>
        <td>'暂未有相关数据'</td>
      </tr>
      <tr>
        <th>icon</th>
        <td>显示图标</td>
        <td>string</td>
        <td>false</td>
        <td>'iconfont icon-weifabushangpin'</td>
      </tr>
      <tr>
        <th>iconSize</th>
        <td>图标尺寸</td>
        <td>string</td>
        <td>false</td>
        <td>'160px'</td>
      </tr>
      <tr>
        <th>fontSize</th>
        <td>文字尺寸</td>
        <td>string</td>
        <td>false</td>
        <td>'24px'</td>
      </tr>
      <tr>
        <th>color</th>
        <td>控件显示颜色</td>
        <td>string</td>
        <td>false</td>
        <td>'#DDD'</td>
      </tr>
    </tbody>
</table>

### t-pageloading 页面加载
> 两种使用方式：

```
  <!-- 直接调用 -->
  this.$pageloading.open();
    setTimeout(() => {
    this.$pageloading.close();
  }, 2000);

  <!-- 赋值调用 -->
  let loading = this.$pageloading.open();
  setTimeout(() => {
    loading.close();
  }, 500);
```
