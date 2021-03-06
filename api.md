#百度轻应用API参考文档#

----------
更新日期： 2013/12/12 17:53:10     

问题反馈： [clouda-support@baidu.com](mailto:clouda-support@baidu.com)


## 概述 ##

百度轻应用API是一套使用JavaScript语言提供的应用工具接口，方便快捷的实现轻应用开发。

百度轻应用API包括三类API：

- 本地设备能力类： **clouda.device**
- 云服务类：   **clouda.mbaas**
- 触摸事件与手势处理类：  **clouda.touch**

## 命名空间

百度轻应用API统一使用的命名空间为：

    clouda

## APP信息注册及服务开启设置

<font color="red">使用云服务类API，需要先到[开发者中心管理控制台](http://developer.baidu.com/console)创建应用，获取应用 API Key 及开启或设置相关服务，之后调用以下轻应用注册接口；否则，相关云服务类接口将无法被调用成功。</font>

### APP信息注册API ###
 
	clouda.lightapp(apikey)

### 服务开启及设置 ###

如需使用以下云服务的相关API，请点击[开发者中心管理控制台](http://developer.baidu.com/console)所创建的应用下的相关服务的管理控制台进行服务开启及设置相关操作（<font color="red">无需等待审核通过，即可使用</font>）：

- **人脸识别（FaceRecognition）**：申请开启服务，详见：[《人脸识别管理控制台》](http://developer.baidu.com/wiki/index.php?title=docs/cplat/media/face/console)
- **推送服务（Push）**： 无需申请开启服务，但需要通过管理控制台进行推送，详见：[《Push服务Android集成指南》](http://developer.baidu.com/wiki/index.php?title=docs/cplat/push/guide)
- **语音识别服务（VTT）**：申请开启服务，详见：[《语音技术管理控制台》](http://developer.baidu.com/wiki/index.php?title=docs/cplat/media/voice/console)

##部署JS API文件

在HTML页面中添加以下代码：

    <script type="text/javascript" src="http://bcscdn.baidu.com/bcs-cdn/clouda/api-latest.js"></script>

##系统通用的状态码信息
    clouda.STATUS.SUCCESS ： 成功(非0)
    clouda.STATUS.SYSTEM_FAILURE ： 系统错误
    clouda.STATUS.USER_CANCELED ： 用户取消操作

## 本地设备能力类API##
    clouda.device

本地设备能力类API目前支持以下功能：

- 加速感应器(Accelerometer)
- 电池（Battery）
- 指南针(Compass)
- 网络连接状态(Connection)
- 联系人(Contact)
- 设备信息（Device）
- 文件管理（FileSystem）
- 地理位置（Geolocation）
- 陀螺仪感应器（Gyroscope）
- 本地存储（LocalStorage）
- 本地媒体功能（Media）
- 消息通知(Notification)
- 二维码（QRCode）
- 截屏分享（Screen）

### Accelerometer ###

    clouda.device.accelerometer

**功能描述：**

加速感应器

**方法：**

- get(options)
- startListen(options)
- stopListen()

#### get ####
	get(options)

**功能描述：**

捕获设备x,y,z轴方向的加速度信息

**参数说明：**

- options： 为 object 类型，其中包含以下参数：

<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>返回</th>
            <th>描述</th>
        </tr>
        <tr>
			<td>onsuccess</td>
			<td>function(data){}</td>          
			<td>获取加速度信息成功，data是返回的Acceleration对象信息</td>  
		</tr>
		<tr>
			<td>onfail</td>
			<td>function(err){}</td>          
			<td>获取失败，返回错误码</td>  
		</tr>
        <tr>
			<td>frequency</td>
			<td>number</td>            
			<td>加速度信息获取频率设置，默认为10000，单位：毫秒</td>  
		</tr>
    <tbody>
</table>

**返回的Acceleration对象：**

特定时间点采集到的加速度信息。
<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
			<td>x</td>
			<td>number</td>          
			<td>x轴加速度数据，[0,1)之间</td>  
		</tr>
        <tr>
			<td>y</td>
			<td>number</td>            
			<td>y轴加速度数据，[0,1)之间</td>  
		</tr>
		<tr>
			<td>z</td>
			<td>number</td>          
			<td>z轴加速度数据，[0,1)之间</td>  
		</tr>
		<tr>
			<td>timestamp</td>
			<td>number</td>          
			<td>获取加速度数据时的时间戳，单位：毫秒</td>  
		</tr>
    <tbody>
</table>

#### startListen ####

    startListen(options)

**功能描述：**

监听设备x,y,z轴方向的加速度信息

**参数说明：**

同get(options)中的参数说明。


#### stopListen ####

    stopListen()

**功能描述：**

停止监听设备x,y,z轴方向的加速度信息


### Battery ###

    clouda.device.battery

**方法：**

- get(options)
- startListen(options)
- stopListen(options)

#### get ####
    get(options)

**功能描述：**

获取电池状态信息

**参数说明：**

- options ： 为 object 类型，其中包含以下参数：

<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
			<td>onsuccess</td>
			<td>function(data){}</td>  
			<td>获取电池状态信息成功，data是返回的BatteryStatus对象</td>  
		</tr>
        <tr>
			<td>onfail</td>
			<td>function(err){}</td>
			<td>获取失败，返回错误码</td>   
		</tr>
	</tbody>
</table>

**返回的BatteryStatus对象：**

<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
			<td>level</td>
			<td>float</td>          
			<td>电量百分比</td>  
		</tr>
        <tr>
			<td>isPlugged</td>
			<td>boolean</td>            
			<td>电池充电状态，默认false，未充电</td>  
		</tr>
    <tbody>
</table>

#### startListen ####
    startListen(options)

**功能描述：**

监听电池状态

**参数说明：**

- options 是一个object，同get(options)中的options说明。

#### stopListen ####
    stopListen(options)

**功能描述：**

清除电池状态信息

**参数说明：**

- options 是一个object，同get(options)中的options说明。

### Compass ###

    clouda.device.compass

**功能描述：**
指南针功能

**方法：**

- get(options)
- startListen(options)
- stopListen()

#### get ####
    get(options)

**功能描述：**

获取设备当前朝向信息

**参数说明：**

options ： 为 object 类型，其中包括以下参数：

<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
			<td>onsuccess</td>
			<td>function(data){}</td>
			<td>操作成功，data是返回的Compass对象</td>  
		</tr>
        <tr>
			<td>onfail</td>
			<td>function(err){}</td>
			<td>操作失败，获取方向信息失败，返回错误码</td>  
		</tr>
	</tbody>
</table>

**返回的Compass对象**

<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
			<td>magneticHeading</td>
			<td>number</td>          
			<td>指南针在某一时刻的朝向，范围[0-359.99]度</td>  
		</tr>
        <tr>
			<td>trueHeading</td>
			<td>number</td>            
			<td>指南针在某一时刻相对于北极的朝向，取值范围是[0-359.99]度；若为负值则表明该参数不确定</td>  
		</tr>
        <tr>
			<td>headingAccuracy</td>
			<td>number</td>            
			<td>实际度数和记录度数之间的偏差</td>  
		</tr>
        <tr>
			<td>timestamp</td>
			<td>number</td>            
			<td>指南针朝向信息的获取时间，精确到毫秒</td>  
		</tr>
    <tbody>
</table>

#### startListen ####
    startListen(options)

**功能描述：**

监听指南针信息

**参数说明：**

options是一个对象，其中包括以下参数：

<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
			<td>onsuccess</td>
			<td>function(data){}</td>          
			<td>操作成功，获取方向信息；同compass.get(options)中的参数说明。</td>  
		</tr>
        <tr>
			<td>onfail</td>
			<td>function(err){}</td>           
			<td>操作失败，获取方向信息失败，返回错误码</td>  
		</tr>
        <tr>
			<td>frequency</td>
			<td>number</td>          
			<td>获取方向信息频率设置，可选，单位毫秒，默认100 </td>  
		</tr>
	</tbody>
</table>

#### stopListen ####
    stopListen()

**功能描述：**

停止监听指南针信息

### Connection ###

     clouda.device.connection
    
网络连接

**方法：**

- get(options)
- startListen(options)
- stopListen()   

#### get ####

    get(options)

**功能描述：**

获取当前网络状态

**参数说明：**
<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
			<td>onsuccess</td>
			<td>function(data){}</td>           
			<td>操作成功，data是返回的ConnectionStatus</td>  
		</tr>
        <tr>
			<td>onfail</td>
			<td>function(err){}</td>          
			<td>操作失败，返回错误码</td>  
		</tr>
	</tbody>
</table>

**返回的ConnectionStatus对象**

网络连接状态类型：

	clouda.device.CONNECTION_STATUS.UNKNOWN // 未知状态
    clouda.device.CONNECTION_STATUS.NONE // 断开状态
    clouda.device.CONNECTION_STATUS.WIFI // WIFI连通状态
    clouda.device.CONNECTION_STATUS.CELL_2G // 移动数据2G连通状态
    clouda.device.CONNECTION_STATUS.CELL_3G // 移动数据3G连通状态
    clouda.device.CONNECTION_STATUS.CELL_4G // 移动数据4G连通状态
	clouda.device.CONNECTION_STATUS.CELL // 移动数据通连通状态
	clouda.device.CONNECTION_STATUS.ETHERNET // 以太网连通状态


#### startListen ####
    startListen(options)

**功能描述：**

监听网络连接状态

**参数说明：**

options：参数说明同clouda.device.connection.get(options)中的options说明。

#### stopListen ####
    stopListen()

**功能描述：**

停止监听网络连接状态


### Contact ###
    clouda.device.contact

联系人类。

**方法：**

- find(field, options)
- count(options)    
- getCursor(field, cursorOffset, length， options)    
- insert(data, options)
- update(id, data, options)
- remove(id, options)

#### find ####
    find(field, options)

**功能描述：**

查找并选择联系人

**参数说明：**

- field: 为array类型, 其中的元素是“Contact对象”中的“参数”字段组合。表示查找条件。
		
   举例：

   1.全选：可用`["*"]`

   2.自定义选择：
	["displayName", "phoneNumbers", "emails"]

- options: 为object，其中包括以下参数：

<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
			<td>onsuccess</td>
			<td>function(data){}</td>           
			<td>操作成功，data是返回的是“Contact对象”组成的数组</td>  
		</tr>
        <tr>
			<td>onfail</td>
			<td>function(err){}</td>          
			<td>操作失败，返回错误码</td>  
		</tr>
		<tr>
			<td>filter</td>
			<td>string</td>          
			<td>筛选条件，可选参数，默认为空</td>  
		</tr>
		<tr>
			<td>multiple</td>
			<td>boolean</td>          
			<td>是否返回多个返回联系人信息，默认：flase</td>  
		</tr>
    <tbody>
</table>

**Contact对象：**
<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
			<td>id</td>
			<td>string</td>           
			<td>联系人ID，全局唯一标识符，标识通讯录中的一个联系人</td>  
		</tr>
        <tr>
			<td>displayName</td>
			<td>string</td>           
			<td>姓名</td>  
		</tr>
        <tr>
			<td>nickname</td>
			<td>string</td>           
			<td>昵称</td>  
		</tr>
        <tr>
			<td>phoneNumbers</td>
			<td>array</td>           
			<td>电话（座机、手机等相同），详细说明参考“ContactField”对象</td>  
		</tr>
        <tr>
			<td>addresses</td>
			<td>array</td>           
			<td>联系地址，详细说明参考“ContactAddress”对象</td>  
		</tr>
        <tr>
			<td>emails</td>
			<td>array</td>           
			<td>电子邮件地址，详细说明参考“ContactField”对象</td>  
		</tr>
        <tr>
			<td>organizations</td>
			<td>array</td>           
			<td>组织，详细说明参考“ContactOrg”对象</td>  
		</tr>	
        <tr>
			<td>birthday</td>
			<td>string</td>           
			<td>生日</td>  
		</tr>
        <tr>
			<td>photos</td>
			<td>array</td>           
			<td>头像，详细说明参考“ContactField”对象</td>  
		</tr>
        <tr>
			<td>ims</td>
			<td>array</td>           
			<td>IM信息，详细说明参考“ContactField”对象</td>  
		</tr>
        <tr>
			<td>urls</td>
			<td>array</td>           
			<td>相关网页，如博客，详细说明参考“ContactField”对象</td>  
		</tr>
        <tr>
			<td>note</td>
			<td>string</td>           
			<td>备注</td>  
		</tr>
        <tr>
			<td>categories</td>
			<td>array</td>           
			<td>自定义类别，详细说明参考“ContactField”对象</td>  
		</tr>
	</tbody>
</table>

**ContactField对象：**
<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
			<td>type</td>
			<td>string</td>           
			<td>字段类型，如“住宅”、“单位”等</td>  
		</tr>
        <tr>
			<td>value</td>
			<td>string</td>           
			<td>字段值（电话号码或email）</td>  
		</tr>
        <tr>
			<td>pref</td>
			<td>boolean</td>           
			<td>用户是否设置为首选项，true：设置为首选项</td>  
		</tr>
	</tbody>
</table>

**ContactAddress对象：**
<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
			<td>type</td>
			<td>string</td>           
			<td>字段类型，如“住宅”、“单位”等</td>  
		</tr>
        <tr>
			<td>pref</td>
			<td>boolean</td>           
			<td>用户是否设置为首选项，true：设置为首选项</td>  
		</tr>
        <tr>
			<td>formatted</td>
			<td>string</td>           
			<td>完整地址显示格式</td>  
		</tr>
        <tr>
			<td>streeAddress</td>
			<td>string</td>           
			<td>完整街道地址</td>  
		</tr>
        <tr>
			<td>locality</td>
			<td>string</td>           
			<td>城市或地区</td>  
		</tr>
        <tr>
			<td>region</td>
			<td>string</td>           
			<td>省</td>  
		</tr>
        <tr>
			<td>country</td>
			<td>string</td>           
			<td>国家</td>  
		</tr>
        <tr>
			<td>postalCode</td>
			<td>string</td>           
			<td>邮编</td>  
		</tr>

	</tbody>
</table>

**ContactOrg对象：**
<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
			<td>type</td>
			<td>string</td>           
			<td>字段类型，如“住宅”、“单位”等</td>  
		</tr>
        <tr>
			<td>name</td>
			<td>string</td>           
			<td>组织名称</td>  
		</tr>
        <tr>
			<td>pref</td>
			<td>boolean</td>           
			<td>用户是否设置为首选项，true：设置为首选项</td>  
		</tr>
        <tr>
			<td>department</td>
			<td>string</td>           
			<td>部门</td>  
		</tr>
        <tr>
			<td>title</td>
			<td>string</td>           
			<td>职务</td>  
		</tr>
	</tbody>
</table>

#### count ####
    count(options)

**功能描述：**

获取通讯录中的条目总数。

**参数说明：**

options: 为object，参数说明同find(field, options)中的options说明。

#### getCursor ####
    getCursor(field, cursorOffset, length， options)

**功能描述：**

读取联系人信息

**参数说明：**

- field : 同 find(field, options)中的field说明
- cursorOffset：为 int 类型， 指定位移的联系人，表示从第几个开始
- length : 为 int 类型，设置查询个数
- options：
   参数说明同find(field, options)中的options说明。

#### insert ####
    insert(data, options)

**功能描述：**

新增一个联系人条目

**参数说明：**

- data： find(field, options)接口中返回的“Contact对象”中的data信息。
- options：参数说明同clouda.device.contact.find(field, options)中的options说明。

#### update ####
    update(id, data, options)

**功能描述：**

保存一个联系人条目

**参数说明：**

- id： find(field, options)接口中返回的Contact对象中的id信息。
- data： find(field, options)接口中返回的Contact对象中的data信息。
- options：参数说明同clouda.device.contact.find(field, options)中的options说明。

#### remove ####
    remove(id, options)

**功能描述：**

删除一个联系人条目

**参数说明：**

- id： find(field, options)接口中返回的Contact对象中的id信息。
- options：参数说明同find(field, options)中的options说明。

### Device ###

	clouda.device.device

设备信息

**方法：**

- getUuid(options)

#### getUuid ####
	getUuid(options)

**功能描述：**

获取设备的全球唯一标识符（UUID），UUID由设备生产商及特定设备平台或型号所决定

**参数说明：**

- options : 为 object 类型，其中包含以下参数：
<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
			<td>onsuccess</td>
			<td>function(data){}</td>           
			<td>操作成功，data返回的是一个string</td>  
		</tr>
        <tr>
			<td>onfail</td>
			<td>function(err){}</td>          
			<td>操作失败，返回错误码</td>  
		</tr>
	</tbody>
</table>

### FileSystem ###

    clouda.device.fs

文件管理

**方法：**

- post(path,target,options)
- download(url, name, options)
- abort()
- remove(path, options)
- empty()
- count(options)
- getInfo(path, options)  
- getInfoByOffset(offset, options) 

#### post ####
    post(path,target,options)

**功能描述：**

将本地文件以POST方式上传至指定URL

**参数说明：**

- path : 为 string 类型，本地文件的path(全路径，包含文件名)
- target : 为 string 类型，目标地址URL(仅HTTP/HTTPS)
- options : 为 object 类型，其中包含以下参数：
<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
			<td>onsuccess</td>
			<td>function(data){}</td>           
			<td>操作成功，返回的 data 是目标URL返回的结果</td>  
		</tr>
        <tr>
			<td>onfail</td>
			<td>function(err){}</td>          
			<td>操作失败，返回错误码</td>  
		</tr>
        <tr>
			<td>param</td>
			<td>object</td>           
			<td>伴随文件上传，传递的POST数据（可选）</td>  
		</tr>
        <tr>
			<td>onprogress</td>
			<td>function(data){}</td>           
			<td>上传进度，返回的 data 是 float 类型的数值</td>  
		</tr>
        <tr>
			<td>uploadKey</td>
			<td>string</td>           
			<td>上传表单中的key</td>  
		</tr>
	</tbody>
</table>

#### download ####
    download(url, name, options)

**功能描述：**

将指定URL的文件下载到本地

**参数说明：**

- url : 要下载文件的URL, string类型
- name : 下载后的文件名，string类型
- options :
<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
			<td>onsuccess</td>
			<td>function(data){}</td>           
			<td>操作成功，data是文件下载到本地存储的本地路径</td>  
		</tr>
        <tr>
			<td>onfail</td>
			<td>function(err){}</td>          
			<td>操作失败，返回错误码</td>  
		</tr>
        <tr>
			<td>onprogress</td>
			<td>function(data){}</td>           
			<td>下载进度，返回的 data 是 float 类型的数值</td>  
		</tr>
	</tbody>
</table>

#### abort ####
    abort()

**功能描述：**

取消上传或下载

#### remove ####
    remove(path, options)

**功能描述：**

删除本地文件，仅支持移除当前API KEY所属应用的文件

**参数说明：**

- path : 本地文件的path(全路径，包含文件名), string 类型
- options :  为 object 类型，其中包含以下参数：
<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
			<td>onsuccess</td>
			<td>function(data){}</td>           
			<td>操作成功，返回clouda.STATUS.SUCCESS</td>  
		</tr>
        <tr>
			<td>onfail</td>
			<td>function(err){}</td>          
			<td>操作失败，返回错误码</td>  
		</tr>
	</tbody>
</table>

#### empty ####
    empty()

**功能描述：**

清空当前API KEY所属应用的所有本地文件

**参数说明：**

- options : 为 object 类型，其中包含以下参数：

<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
			<td>onsuccess</td>
			<td>function(data){}</td>           
			<td>操作成功，返回SUCCESS状态码</td>  
		</tr>
        <tr>
			<td>onfail</td>
			<td>function(err){}</td>          
			<td>操作失败，返回错误码</td>  
		</tr>
	</tbody>
</table>

#### count ####
    count(options)

**功能描述：**

获取当前API KEY所属应用的所有本地文件数量

**参数说明：**

- options : 为 object 类型，其中包含以下参数：
<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
			<td>onsuccess</td>
			<td>function(data){}</td>           
			<td>操作成功，返回总数量</td>  
		</tr>
        <tr>
			<td>onfail</td>
			<td>function(err){}</td>          
			<td>操作失败，返回错误码</td>  
		</tr>
	</tbody>
</table>

#### getInfo ####

	 getInfo(path, options) 或 getInfoByOffset(offset, options)

**功能描述：**

通过path或从零起始的offset获取本地文件信息

**参数说明：**

- path : 为 string 类型，本地文件的path(全路径，包含文件名)
- offset ： 为 int 类型，从零起始，获取第一个匹配元素的偏移坐标
- options : 为 object 类型，其中包含以下参数：
<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
			<td>onsuccess</td>
			<td>function(data){}</td>           
			<td>操作成功，返回 File 对象</td>  
		</tr>
        <tr>
			<td>onfail</td>
			<td>function(err){}</td>          
			<td>操作失败，返回错误码</td>  
		</tr>
	</tbody>
</table>

**返回的 File 对象**

<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
			<td>name</td>
			<td>string</td>          
			<td>文件名，不含路径信息</td>  
		</tr>
        <tr>
			<td>fullPath</td>
			<td>string</td>            
			<td>文件本地全路径（含文件名）</td>  
		</tr>
        <tr>
			<td>type</td>
			<td>string</td>            
			<td>文件的MIME类型</td>  
		</tr>
        <tr>
			<td>lastModified</td>
			<td>date</td>            
			<td>文件最后修改时间</td>  
		</tr>
        <tr>
			<td>size</td>
			<td>number</td>            
			<td>文件大小，单位：字节(bytes)</td>  
		</tr>
	</tbody>
</table>


### Geolocation ###
	clouda.device.geolocation

地理位置

**方法：**

- get(options)
- startListen(options)
- stopListen()

#### get ####
    get(options)

**功能描述：**

获取当前地理位置信息。

**参数说明：**

- options是一个object，其中包括以下参数：

<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
<tbody>
    <tr>
        <th>参数</th>
        <th>类型</th>
        <th>描述</th>
    </tr>
    <tr>
		<td>onsuccess</td>
		<td>function(data){}</td>          
		<td>获取地理信息成功</td>  
	</tr>
    <tr>
		<td>onfail</td>
		<td>function(err){}</td>            
		<td>获取地理信息失败，返回错误码</td>  
	</tr>
    <tr>
		<td>method</td>
		<td>number</td>          
		<td>定位的方式，可选择以下类型：<br>
		- clouda.device.LOCATION_METHOD.BASE_STATION : 基站<br>
		- clouda.device.LOCATION_METHOD.GPS : GPS(默认)
		</td>  
	</tr>
    <tr>
		<td>timeout</td>
		<td>number</td>          
		<td>接口超时最大时间，单位毫秒，超时后会执行onfail</td>  
	</tr>
    <tr>
		<td>maximumAge</td>
		<td>number</td>          
		<td>获取某个缓存地理位置信息的最大时间段，单位：毫秒，超出则进行重新获取</td>  
	</tr>
</tbody>
</table>

#### startListen ####
    startListen(options)

**功能描述：**

监听地理位置信息。

启动对有大幅变化的地理位置进行监听。调用后立即触发一次回调，报告当前位置，后续只在地理位置发生变动时方通知。

**参数说明：**

除significant以外，options其他字段同get(options)中的相关说明

- significant : 是否仅在位置发生大幅变化时进行回调，boolean类型，默认false(相当于省电模式)。<font color="red">目前大幅变化阈值设置为20米，不支持自定义配置。</font>

#### stopListen ####
    stopListen()

**功能描述：**

停止监听地理位置信息。

### Gyroscope ###
    clouda.device.gyro

陀螺仪感应器

**方法：**

- get(options)
- startListen(options)
- stopListen()

#### get ####
get(options)

**功能描述：**

捕获设备x,y,z轴方向的转动角度信息

**参数说明：**

- options ： 为 object 类型，其中包含以下参数：

<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>返回</th>
            <th>描述</th>
        </tr>
        <tr>
			<td>onsuccess</td>
			<td>function(data){}</td>          
			<td>获取陀螺仪转动角度信息成功，data是返回的Gyroscope对象信息</td>  
		</tr>
		<tr>
			<td>onfail</td>
			<td>function(err){}</td>          
			<td>获取失败，返回错误码</td>  
		</tr>
        <tr>
			<td>frequency</td>
			<td>number</td>            
			<td>陀螺仪转动角度信息获取频率设置，默认为10000，单位：毫秒</td>  
		</tr>
    <tbody>
</table>

**返回的Gyroscope对象：**

特定时间点采集到的陀螺仪转动角度信息。
<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
			<td>alpha</td>
			<td>number</td>          
			<td>x轴方向转动角度数据，[0,1)之间</td>  
		</tr>
        <tr>
			<td>beta</td>
			<td>number</td>            
			<td>beta轴方向转动角度数据，[0,1)之间</td>  
		</tr>
		<tr>
			<td>gamma</td>
			<td>number</td>          
			<td>gamma轴方向转动角度数据，[0,1)之间</td>  
		</tr>
		<tr>
			<td>timestamp</td>
			<td>number</td>          
			<td>获取陀螺仪转动角度数据数据时的时间戳，单位：毫秒</td>  
		</tr>
    <tbody>
</table>

#### startListen ####

    startListen(options)

**功能描述：**

监听设备x,y,z轴方向转动角度信息

**参数说明：**

同get(options)中的参数说明。

#### stopListen ####

    stopListen()

**功能描述：**

停止监听设备x,y,z轴方向转动角度信息

### LocalStorage ###
    clouda.device.localStorage

本地存储

**方法：**

- set(key,value, options)
- get(key,options)
- remove(key,options)
- count(options)
- empty()

#### set ####
    set(key, value, options)

**功能描述：**

保存数据到本地

**参数说明：**

- options(可选)：为object类型，其中包含以下参数：
<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
			<td>onsuccess</td>
			<td>function(data){}</td>           
			<td>操作成功，返回的data为SUCCESS状态码</td>  
		</tr>
        <tr>
			<td>onfail</td>
			<td>function(err){}</td>          
			<td>操作失败，返回错误码</td>  
		</tr>
	</tbody>
</table>

#### get ####
    get(key,options)

**功能描述：**

读取本地指定key的数据

**参数说明：**

options：为object类型，其中包含以下参数：
<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
			<td>onsuccess</td>
			<td>function(value){}</td>           
			<td>操作成功，返回数据</td>  
		</tr>
        <tr>
			<td>onfail</td>
			<td>function(err){}</td>          
			<td>操作失败，返回错误码</td>  
		</tr>
	</tbody>
</table>

#### remove ####
    remove(key,options)

**功能描述：**

删除本地指定key的数据

**参数说明：**

同set(key, value, options)中的 key 和 options 参数说明

#### count ####
    count(options)

**功能描述：**

获取本地数据项的个数

**参数说明：**

options：是一个object类型，其中包含以下参数：
<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
			<td>onsuccess</td>
			<td>function(data){}</td>           
			<td>操作成功，返回总数</td>  
		</tr>
        <tr>
			<td>onfail</td>
			<td>function(err){}</td>          
			<td>操作失败，返回错误码</td>  
		</tr>
	</tbody>
</table>

#### empty ####
    empty()

**功能描述：**

清空本地所有数据

### Media ###
	clouda.device.media

本地媒体功能

**方法：**

- captureMedia(options)
- operateMedia(link, operator, options)    

#### CaptureMedia ####
    captureMedia(options)

**功能描述：**

调取本地录音、照相、视频功能；拍摄、录制、拍照及读取本地图片文件。

**参数说明：**

options ：为 object 类型，其中包含以下参数：

<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
   <tbody>
    <tr>
        <th>参数</th>
        <th>类型</th>
        <th>描述</th>
    </tr>
    <tr>
		<td>onsuccess</td>
		<td>function(data){}</td>          
		<td>操作成功，返回 MediaFile 对象或其组成的数组，如[MediaFile, MediaFile]</td>  
	</tr>
    <tr>
		<td>onfail</td>
		<td>function(err){}</td>          
		<td>操作失败，返回错误码</td>  
	</tr>
    <tr>
		<td>mediaType</td>
		<td>string</td>          
		<td> 媒体类型，其值如下： <br>
		 - clouda.device.MEDIA_TYPE.IMAGE(默认) <br>
		 - clouda.device.MEDIA_TYPE.AUDIO  <br>  
		 - clouda.device.MEDIA_TYPE.VIDEO</td>  
	</tr>
	<tr>
		<td>source</td>
		<td>string</td>
		<td>仅在mediaType为IMAGE或VIDEO时可设置：<br>
		- clouda.device.MEDIA_SOURCE.CAMERA<br>
		- clouda.device.MEDIA_SOURCE.ALBUM 
		</td>  
	</tr>
    <tr>
		<td>limit</td>
		<td>number</td>
		<td>媒体文件个数限制，仅当source为ALBUM时可用，默认为1</td>  
	</tr>
    <tr>
		<td>duration</td>
		<td>number</td>      
		<td>录音或拍摄最大时长，单位为秒。仅AUDIO和VIDEO可用，默认为0，即不限时长</td>  
	</tr>
    <tr>
		<td>format</td>
		<td>string</td>
		<td>返回数据格式，参数如下：<br>
		- clouda.device.MEDIA_FORMAT.FILE：  MediaFile对象 (默认) <br>
		- clouda.device.MEDIA_FORMAT.BASE64：仅适用于image，即Base64编码字符串
		</td>  
	</tr>
    <tr>
		<td>details</td>
		<td>boolean</td>
		<td>是否返回文件的所有属性信息，默认：false，返回的 MediaFile 对象只显示5个基本信息
		</td>  
	</tr>
<tbody>
</table>

**返回的MediaFile对象**

<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
			<td>name</td>
			<td>string</td>          
			<td>文件名，不含路径信息</td>  
		</tr>
        <tr>
			<td>fullPath</td>
			<td>string</td>            
			<td>文件本地全路径（含文件名）</td>  
		</tr>
        <tr>
			<td>type</td>
			<td>string</td>            
			<td>文件的MIME类型</td>  
		</tr>
        <tr>
			<td>lastModified</td>
			<td>date</td>            
			<td>文件最后修改时间</td>  
		</tr>
        <tr>
			<td>size</td>
			<td>number</td>            
			<td>文件大小，单位：字节(bytes)</td>  
		</tr>
        <tr>
			<td>height</td>
			<td>number</td>            
			<td>图像或视频高度，音频文件时该值为0，单位：像素, 仅在options.details为true时返回</td>  
		</tr>
        <tr>
			<td>width</td>
			<td>number</td>            
			<td>图像或视频宽度，音频文件时该值为0，单位：像素，仅在options.details为true时返回</td>  
		</tr>
        <tr>
			<td>duration</td>
			<td>number</td>            
			<td>视频或音频文件时长，图像文件时该值为0，单位：秒，仅在options.details为true时返回</td>  
		</tr>
    <tbody>
</table>


#### operateMedia ####
    operateMedia(link, operator, options)

**功能描述：**

录制和回放指定路径的音频文件

**参数说明：**

- link : 为 string 类型，本地音频文件路径或 Web 音频文件的 URI
- operator ： 为 string 类型，所支持的对音频文件的具体操作类型如下：
   <table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
   <tbody>
    <tr>
        <th>方法</th>
        <th>描述</th>
    </tr>
    <tr>
		<td>getCurrentPosition</td>      
		<td>返回音频文件的当前播放位置，操作成功的返回值为 int 类型的当前秒数（s）；操作失败，则返错误码
		</td>  
	</tr>
    <tr>
		<td>getDuration</td>         
		<td>返回音频文件的总时长，操作成功的返回值为 int 类型的总时长（单位：秒数）；操作失败，则返错误码</td>  
	</tr>
    <tr>
		<td>play</td>
		<td>开始或继续播放音频文件，操作成功返回SUCCESS状态码；操作失败，则返错误码</td>           
	</tr>
    <tr>
		<td>pause</td>
		<td>暂停播放音频文件，操作成功返回SUCCESS状态码；操作失败，则返错误码</td>          
	</tr>
    <tr>
		<td>release</td>
		<td>释放底层操作系统的音频资源，操作成功返回SUCCESS状态码；操作失败，则返错误码</td>          
	</tr>
    <tr>
		<td>seekTo</td>
		<td>移动音频文件的播放位置。此操作类型下，options中需包含以下三个参数：<br>
		- time: int 类型，设置音频文件重放位置，单位：毫秒  <br>
		- onsuccess:  操作成功返回SUCCESS状态码   <br>
		- onfail: 操作失败，则返错误码</td>          
	</tr>
    <tr>
		<td>setVolume</td>
		<td>设置播放音量，此操作类型下，options中需包含以下三个参数：<br>
		- volume: float 类型，设置音频文件播放音量，取值范围为[0.0, 1.0]  <br>
		- onsuccess:  操作成功返回SUCCESS状态码  <br>
		- onfail: 操作失败，则返错误码</td>           
	</tr>
    <tr>
		<td>startRecord</td>
		<td>开始录制音频文件，操作成功返回SUCCESS状态码；操作失败，则返错误码</td>            
	</tr>
    <tr>
		<td>stopRecord</td>
		<td>停止录制音频文件，操作成功返回SUCCESS状态码；操作失败，则返错误码</td>          
	</tr>
    <tr>
		<td>stop</td>
		<td>停止播放音频文件，操作成功返回SUCCESS状态码；操作失败，则返错误码</td>          
	</tr> 
	</tr>
	</tbody>
</table> 

- options : 为 object 类型，其中包含以下参数：

<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
   <tbody>
    <tr>
        <th>参数</th>
        <th>类型</th>
        <th>描述</th>
    </tr>
    <tr>
		<td>onsuccess</td>
		<td>function(data){}</td>          
		<td>操作成功，data返回信息，详见 operate 参数说明</td>  
	</tr>
    <tr>
		<td>onfail</td>
		<td>function(err){}</td>          
		<td>操作失败，返回错误码</td>  
	</tr>
    <tr>
		<td>onstatus</td>
		<td>function(data){}</td>          
		<td>可选，当音频文件状态发生变化的时候调用的回调函数，其返回值如下：<br>
		- clouda.device.MEDIA_STATUS.NONE = 0;<br>
		- clouda.device.MEDIA_STATUS.STARTING = 1;<br>
		- clouda.device.MEDIA_STATUS.RUNNING = 2;<br>
		- clouda.device.MEDIA_STATUS.PAUSED = 3;<br>
		- clouda.device.MEDIA_STATUS.STOPPED = 4;
	</td>  
	</tr>
<tbody>
</table>

### Notification ###
    
    clouda.device.notification

本地设备通知，可设置通知、震动或蜂鸣声提示。

**方法：**

- alert(msg, options)
- confirm(msg, options)
- beep(time)
- vibrate(time)
- prompt(msg, options)
- startLoad(title, msg, options)
- stopLoad(options)
- progress(title, msg, options)
- startProgress(title, msg, options)
- updateProgress(value)
- stopProgress()

#### alert ####
    alert(msg, options)

**功能描述：**

显示一个定制的警告或对话框

**参数说明：**

- msg : 为 string 类型，对话框信息
- options：为object类型，其中包括以下参数：
<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
			<td>onsuccess</td>
			<td>function(){}</td>           
			<td>用户点击“OK”按钮</td>  
		</tr>
        <tr>
			<td>onfail</td>
			<td>function(err){}</td>          
			<td>操作失败，返回错误码</td>  
		</tr>
        <tr>
			<td>title</td>
			<td>string</td>          
			<td>对话框标题，可选项，默认为：Alert</td>  
		</tr>
        <tr>
			<td>buttonName</td>
			<td>string</td>          
			<td>按钮名称，可选项，默认为：OK</td>  
		</tr>
	</tbody>
</table>

#### confirm ####
    confirm(msg, options)

**功能描述：**

显示一个可定制的确认对话框

**参数说明：**

- msg : 为 string 类型，对话框信息
- options ：为一个object，其中包括以下参数：
<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
			<td>onsuccess</td>
			<td>function(){}</td>           
			<td>用户点击“OK”按钮 </td>  
		</tr>
        <tr>
			<td>onfail</td>
			<td>function(err){}</td>          
			<td>操作失败或用户点击“Cancel”，返回错误码</td>  
		</tr>
        <tr>
			<td>title</td>
			<td>string</td>          
			<td>对话框标题，可选项，默认为：Confirm</td>  
		</tr>
        <tr>
			<td>buttonLabels</td>
			<td>array</td>          
			<td>自定义按钮标签名，可选项，默认为：[OK，Cancel]</td>  
		</tr>
	</tbody>
</table>

#### beep ####
    beep(time)

**功能描述：**

设备将发出蜂鸣声，且可设定持续时长

**参数说明：**

- time : 为 int 类型， 蜂鸣的持续时间，单位：毫秒

#### vibrate ####
    vibrate(time)

**功能描述：**

使设备震动，且可设置指定的震动时长。

**参数说明：**

- time ： 为 int 类型， 设备震动时长，单位： 毫秒

#### prompt ####
    prompt(msg, options)

**功能描述：**

弹出一个定制化对话框

**参数说明：**

- msg : 为 string 类型，对话框信息
- options :为一个object，其中包括以下参数：
<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
			<td>onsuccess</td>
			<td>function(){}</td>           
			<td>用户点击“确定”按钮 </td>  
		</tr>
        <tr>
			<td>onfail</td>
			<td>function(err){}</td>          
			<td>操作失败或用户点击取消，返回错误码</td>  
		</tr>
        <tr>
			<td>title</td>
			<td>string</td>          
			<td>对话框标题，可选项，默认为：OK</td>  
		</tr>
        <tr>
			<td>buttonLabels</td>
			<td>array</td>          
			<td>自定义按钮标签名，可选项，默认为：[OK，Cancel]</td>  
		</tr>
		<tr>
			<td>defaultText</td>
			<td>string</td>          
			<td>输入框默认文字， 默认为空</td> 
	</tbody>
</table>

#### startLoad ####
	startLoad(title, msg, options)

**功能描述：**

启动加载界面

**参数说明：**

- title : 为 string 类型， 对话框标题，可选项，默认为：OK
- msg : 为 string 类型，对话框信息
- options ：为 object 类型，其中包含以下参数：

<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
   <tbody>
    <tr>
        <th>参数</th>
        <th>类型</th>
        <th>描述</th>
    </tr>
    <tr>
		<td>onsuccess</td>
		<td>function(data){}</td>          
		<td>操作成功，返回 MediaFile 对象</td>  
	</tr>
    <tr>
		<td>onfail</td>
		<td>function(err){}</td>          
		<td>操作失败，返回错误码</td>  
	</tr>
	</tbody>
</table>

#### stopLoad ####
	stopLoad(options)

**功能描述：**

停止加载界面

**参数说明：**

- options ：为 object 类型，其中包含以下参数：

<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
   <tbody>
    <tr>
        <th>参数</th>
        <th>类型</th>
        <th>描述</th>
    </tr>
    <tr>
		<td>onsuccess</td>
		<td>function(data){}</td>          
		<td>操作成功，返回 MediaFile 对象</td>  
	</tr>
    <tr>
		<td>onfail</td>
		<td>function(err){}</td>          
		<td>操作失败，返回错误码</td>  
	</tr>
	</tbody>
</table>

#### progress ####
	progress(title, msg, options)

**功能描述：**

显示进度条

**参数说明：**

- title : 为 string 类型， 对话框标题，可选项，默认为：OK
- msg : 为 string 类型，对话框信息
- options ：为 object 类型，其中包含以下参数：

<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
   <tbody>
    <tr>
        <th>参数</th>
        <th>类型</th>
        <th>描述</th>
    </tr>
    <tr>
		<td>onsuccess</td>
		<td>function(data){}</td>          
		<td>操作成功，返回 MediaFile 对象</td>  
	</tr>
    <tr>
		<td>onfail</td>
		<td>function(err){}</td>          
		<td>操作失败，返回错误码</td>  
	</tr>
	</tbody>
</table>

#### startProgress #### 
	startProgress(title, msg, options)

**功能描述：**

开始进度显示

**参数说明：**

- title : 为 string 类型， 对话框标题，可选项，默认为：OK
- msg : 为 string 类型，对话框信息
- options ：为 object 类型，其中包含以下参数：

<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
   <tbody>
    <tr>
        <th>参数</th>
        <th>类型</th>
        <th>描述</th>
    </tr>
    <tr>
		<td>onsuccess</td>
		<td>function(data){}</td>          
		<td>操作成功，返回 MediaFile 对象</td>  
	</tr>
    <tr>
		<td>onfail</td>
		<td>function(err){}</td>          
		<td>操作失败，返回错误码</td>  
	</tr>
	</tbody>
</table>

#### updateProgress #### 
	updateProgress(value)

**功能描述：**

更新进度显示

**参数说明：**

- value : 为 int 类型，取值范围为[0,100]，进度数值

#### stopProgress #### 
	stopProgress()

**功能描述：**

关闭进度显示


### QRCode ###
     clouda.device.qr

二维码、条形码类

**方法：**

- startCapture(options)
- generate(content,options)

#### startCapture ####

    startCapture(options)

**功能描述：**

启动二维码或条形码扫描与识别

**扫描对象类型：**

- clouda.device.QR_TYPE.QRCODE  ：二维码
- clouda.device.QR_TYPE.BARCODE  ： 条形码

**参数说明：**

<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
			<td>onsuccess</td>
			<td>function(data){}</td>            
			<td>扫描成功，返回二维码内容字符串</td>  
		</tr>
        <tr>
			<td>onfail</td>
			<td>function(err){}</td>          
			<td>二维码扫描失败，返回错误码</td>  
		</tr>
        <tr>
			<td>type</td>
			<td>number</td>          
			<td>扫描对象类型</td>  
		</tr>
    <tbody>
</table>

#### generate ####

    generate(content,options)

**功能描述：**

生成二维码或条形码

**参数说明：**

- content：string，二维码内容
- options：为object类型，其中包含以下参数：
<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
			<td>onsuccess</td>
			<td>function(data){}</td>            
			<td>二维码生成成功，返回base64编码的字符串</td>  
		</tr>
        <tr>
			<td>onfail</td>
			<td>function(err){}</td>          
			<td>二维码生成失败</td>  
		</tr>
        <tr>
			<td>mono</td>
			<td>boolean</td>           
			<td>是否生成黑白二维码，默认：true, 即默认生成黑白二维码</td>  
		</tr>
        <tr>
			<td>animate</td>
			<td>boolean</td>           
			<td>是否生成彩色动画二维码，默认：false</td>  
		</tr>
        <tr>
			<td>backgroundUrl</td>
			<td>string</td>           
			<td>二维码背景文件的URL路径，可选</td>  
		</tr>
    <tbody>
</table>

### Screen ###
	clouda.device.screen

截屏分享

**方法：**

- captureScreen(options)
- shareImage(data, options)
- shareScreen(options)

#### captureScreen ####
	capture(options)

**功能描述：**

获取截屏

**参数说明：**

- options：为 object 类型，其中包括以下参数：

<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
			<td>onsuccess</td>
			<td>function(data){}</td>            
			<td>获取成功，返回的 data 为一个base64 string 的 jpeg 文件流</td>  
		</tr>
        <tr>
			<td>onfail</td>
			<td>function(err){}</td>          
			<td>操作失败，返回错误码信息</td>  
		</tr>
    </tbody>
</table>


#### shareImage ####
	shareImage(data, options)

**功能描述：**

分享图片

**参数说明：**

- data : 为 base64 的 string 类型，captureScreen接口中返回的data信息
- options：为 object 类型，其中包括以下参数：

<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
			<td>onsuccess</td>
			<td>function(data){}</td>            
			<td>分享成功，返回SUCCESS状态码</td>  
		</tr>
        <tr>
			<td>onfail</td>
			<td>function(err){}</td>          
			<td>操作失败，返回错误码信息</td>  
		</tr>
    </tbody>
</table>

#### shareScreen ####
	shareScreen(options)

**功能描述：**

获取并分享截屏

**参数说明：**

- options：为 object 类型，其中包括以下参数：
- 
<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
			<td>onsuccess</td>
			<td>function(data){}</td>            
			<td>分享成功，返回SUCCESS状态码</td>  
		</tr>
        <tr>
			<td>onfail</td>
			<td>function(err){}</td>          
			<td>操作失败，返回错误码信息</td>  
		</tr>
    </tbody>
</table>

## 云服务类API ##

云服务类API目前支持以下功能：

- 人脸识别（FaceRecognition）
- 播放器（MediaPlayer）
- 推送服务（Push） 
- 文本语音服务（TTS）
- 语音识别服务（VTT）

### FaceRecognition ###
    clouda.mbaas.face

人脸识别

**方法：**

- register(uid, options)
- verify(uid, options)
- checkBlink(uid, options)
- authorizeDevice(uid, options)
- listDevice(uid, options)

#### register ####
	register(uid, options)

**功能描述：**

注册人脸识别服务，启动摄像功能获取人脸信息，并与UID建立绑定关系

**参数说明：**

- uid： 为 string 类型（32个字符以内），开发者为其人脸识别服务的用户所赋予的唯一识别标识
- options：为 object 类型，其中包括以下参数：

<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
			<td>onsuccess</td>
			<td>function(data){}</td>            
			<td>注册成功，返回SUCCESS状态码</td>  
		</tr>
        <tr>
			<td>onfail</td>
			<td>function(err){}</td>          
			<td>操作失败，返回错误码信息</td>  
		</tr>
    </tbody>
</table>

#### verify ####
	verify(uid, options)

**功能描述：**

启动摄像功能获取人脸信息，并与register接口中已注册的人脸信息进行验证

**参数说明：**

- uid： 为 string 类型（32个字符以内），开发者为其人脸识别服务的用户所赋予的唯一识别标识
- options：为object类型，其中包括以下参数：

<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
			<td>onsuccess</td>
			<td>function(data){}</td>            
			<td>验证成功，返回SUCCESS状态码</td>  
		</tr>
        <tr>
			<td>onfail</td>
			<td>function(err){}</td>          
			<td>操作失败，返回错误码信息</td>  
		</tr>
    </tbody>
</table>

#### checkBlink ####
	checkBlink(uid, options)

**功能描述：**

检查眨眼情况，用于活体检测或者通过眼睛活动状态进行远程控制操作

**参数说明：**

- uid： 为 string 类型（32个字符以内），开发者为其人脸识别服务的用户所赋予的唯一识别标识
- options：为object类型，其中包括以下参数：

<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
			<td>onsuccess</td>
			<td>function(data){}</td>            
			<td>操作成功，返回SUCCESS状态码，存在眨眼情况</td>  
		</tr>
        <tr>
			<td>onfail</td>
			<td>function(err){}</td>          
			<td>操作失败，返回系统错误码信息</td>  
		</tr>
    </tbody>
</table>

#### authorizeDevice ####
	authorizeDevice(uid, options)

**功能描述：**

绑定设备，认证该用户可使用人脸识别服务的具体采集设备

**参数说明：**

- uid ： 为 string 类型（32个字符以内），开发者为其人脸识别服务的用户所赋予的唯一识别标识
- options：为object类型，其中包括以下参数：

<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
			<td>onsuccess</td>
			<td>function(data){}</td>            
			<td>绑定成功，返回SUCCESS状态码</td>  
		</tr>
        <tr>
			<td>onfail</td>
			<td>function(err){}</td>          
			<td>绑定失败，返回错误码信息</td>  
		</tr>
    </tbody>
</table>

#### listDevice ####
	listDevice(uid, options)

**功能描述：**

查看该用户使用人脸服务所认证的设备列表信息

**参数说明：**

- uid ： 为 string 类型（32个字符以内），开发者为其人脸识别服务的用户所赋予的唯一识别标识
- options：为object类型，其中包括以下参数：

<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
			<td>onsuccess</td>
			<td>function(data){}</td>            
			<td>获取成功，data返回string类型Device UUID信息（uuid）列表</td>  
		</tr>
        <tr>
			<td>onfail</td>
			<td>function(err){}</td>          
			<td>获取失败，返回错误码信息</td>  
		</tr>
    </tbody>
</table>

### MediaPlayer ###
	clouda.mbaas.mediaplayer

播放器

**方法：**

- play(link, options)

#### play ####
	play(link, options)

**功能描述：**

播放媒体文件

**参数说明：**

- link ： 为string类型，所要播放的媒体文件链接（本地媒体文件路径或 Web URL均可）
- options：为object类型，其中包括以下参数：

<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
			<td>onsuccess</td>
			<td>function(data){}</td>            
			<td>播放成功，返回SUCCESS状态码</td>  
		</tr>
        <tr>
			<td>onfail</td>
			<td>function(err){}</td>          
			<td>操作失败，返回错误码信息</td>  
		</tr>
    </tbody>
</table>

### Push ###

    clouda.mbaas.push

推送服务

**方法：**

- register(options)
- unregister(options)
- checkStatus(options)
- onreceive(options) 
- setTag(tags, options)  
- removeTag(tags, options)
- listTag(options)
- pushMsg(options)

#### register ####
    register(options)

**功能描述：**

注册设备

**参数说明：**

options：为object类型，其中包括以下参数：

<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
			<td>onsuccess</td>
			<td>function(data){}</td>            
			<td>注册成功，返回PushInfo对象</td>  
		</tr>
        <tr>
			<td>onfail</td>
			<td>function(err){}</td>          
			<td>注册失败，返回错误码信息</td>  
		</tr>
    </tbody>
</table>

**返回的PushInfo对象：**
<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
			<td>uid</td>
			<td>string</td>            
			<td>用户ID信息</td>  
		</tr>
        <tr>
			<td>channelID</td>
			<td>string</td>          
			<td>channel ID信息</td>  
		</tr>
        <tr>
			<td>appID</td>
			<td>string</td>          
			<td>应用ID信息</td>  
		</tr>
    </tbody>
</table>

#### unregister ####

    unregister(options)

**功能描述：**

解绑设备

**参数说明：**

- options：为object类型，其中包括以下参数：

<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
			<td>onsuccess</td>
			<td>function(data){}</td>            
			<td>解绑成功，返回SUCCESS状态码</td>  
		</tr>
        <tr>
			<td>onfail</td>
			<td>function(err){}</td>          
			<td>操作失败，返回错误码信息</td>  
		</tr>
    </tbody>
</table>

#### checkStatus ####

    checkStatus(options)

**功能描述：**

检查设备绑定状态

**参数说明：**

options：为object类型，其中包括以下参数：

<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
			<td>onsuccess</td>
			<td>function(data){}</td>            
			<td>注册成功，返回的data为boolean类型</td>  
		</tr>
        <tr>
			<td>onfail</td>
			<td>function(err){}</td>          
			<td>注册失败，返回错误码信息</td>  
		</tr>
    </tbody>
</table>

#### onreceive ####

    onreceive(options)

**功能描述：**

接收到推送消息时的事件 

**参数说明：**

options：为object类型，其中包括以下参数：

<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
			<td>onsuccess</td>
			<td>function(data){}</td>            
			<td>接收成功，返回的data为string类型</td>  
		</tr>
    </tbody>
</table>

#### setTag ####
    setTag(tags, options)

**功能描述：**

设置一个或多个广播组标签

**参数说明：**

- tags： 广播组标签，为array类型，由广播组标签字符串组成
- options：为object类型，其中包括以下参数：

<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
			<td>onsuccess</td>
			<td>function(data){}</td>            
			<td>设置成功，返回的data为SUCCESS状态码</td>  
		</tr>
        <tr>
			<td>onfail</td>
			<td>function(err){}</td>          
			<td>设置失败，返回错误码信息</td>  
		</tr>
    </tbody>
</table>

#### removeTag ####

    removeTag(tags, options)

**功能描述：**

删除一个或多个广播组标签

**参数说明：**

- tags： 广播组标签，为array类型，由广播组标签字符串组成
- options：为object类型，其中包括以下参数：

<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
			<td>onsuccess</td>
			<td>function(data){}</td>            
			<td>删除成功，返回SUCCESS状态码</td>  
		</tr>
        <tr>
			<td>onfail</td>
			<td>function(err){}</td>          
			<td>删除失败，返回错误码信息</td>  
		</tr>
    </tbody>
</table>

#### listTag ####

    listTag(options)

**功能描述：**

获取所有标签

**参数说明：**

- options：为object类型，其中包括以下参数：

<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
			<td>onsuccess</td>
			<td>function(data){}</td>            
			<td>获取成功，返回的data为array类型，由广播组标签string类型组成</td>  
		</tr>
        <tr>
			<td>onfail</td>
			<td>function(err){}</td>          
			<td>获取失败，返回错误码信息</td>  
		</tr>
    </tbody>
</table>

#### pushMsg ####
	pushMsg()

**功能描述：**

推送消息

**参数说明：**

- options：为object类型，其中包括以下参数：

<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
			<td>onsuccess</td>
			<td>function(data){}</td>            
			<td>推送成功，返回 SUCCESS 状态码</td>  
		</tr>
        <tr>
			<td>onfail</td>
			<td>function(err){}</td>          
			<td>推送失败，返回错误码信息</td>  
		</tr>
        <tr>
			<td>title</td>
			<td>string</td>          
			<td>推送消息的标题</td>  
		</tr>
        <tr>
			<td>uid</td>
			<td>string</td>          
			<td>用户ID信息</td>  
		</tr>
        <tr>
			<td>channelId</td>
			<td>string</td>          
			<td>Channel ID信息</td>  
		</tr>
        <tr>
			<td>description</td>
			<td>string</td>          
			<td>推送消息的内容</td>  
		</tr>
    </tbody>
</table>

### TTS ###
    clouda.mbaas.tts

文本发音类

**方法：**

- say(word, options)

#### say ####
    say(word, options)

**功能描述：**

启动文本语音功能

**参数说明：**

- word： string类型，文本信息
- options： object类型，其中包括以下参数：

<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
			<td>onsuccess</td>
			<td>function(data){}</td>            
			<td>操作成功，返回SUCCESS状态码</td>  
		</tr>
        <tr>
			<td>onfail</td>
			<td>function(data){}</td>            
			<td>操作失败，返回错误码信息</td>  
		</tr>
        <tr>
			<td>type</td>
			<td>number</td>            
			<td>朗读文本的语音类型：<br>
			- clouda.mbaas.tts.TYPE_DICT_US ： 美式英语发音<br>
			- clouda.mbaas.tts.TYPE_DICT_UK ： 英式英语发音<br>
			- clouda.mbaas.tts.TYPE_DICT_ZH ： 中文发音<br>
		</td>  
		</tr>
	</tbody>
</table>

### VTT ###

    clouda.mbaas.vtt

语音识别服务

**方法：**

- startCapture(options)
- stopCapture(options)
- speakFinish(options)

#### startCapture ####
    startCapture(options)

**功能描述：**

启动语音识别

**参数说明：**

<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
			<td>onsuccess</td>
			<td>function(data){}</td>            
			<td>识别成功，返回语音文字字符串</td>  
		</tr>
        <tr>
			<td>onfail</td>
			<td>function(err){}</td>          
			<td>识别失败<br>
			- clouda.mbaas.VTT_STATUS.FAILED ：语音识别失败
			</td>  
		</tr>
        <tr>
			<td>voicePower</td>
			<td>boolean</td>            
			<td>是否启用计算声音强度，默认：false，不启用</td>  
		</tr>
        <tr>
			<td>speechMode</td>
			<td>int</td>            
			<td>设置识别模式，可选，其参数如下：<br>
			- clouda.mbaas.VTT_SPEECHMODE.SEARCH ：搜索模式 （默认）<br>
			- clouda.mbaas.VTT_SPEECHMODE.INPUT  ：文本输入模式
		</td>  
		</tr>
    </tbody>
</table>

#### stopCapture ####
    stopCapture(options)

**功能描述：**

终止语音识别

**参数说明：**

<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
			<td>onsuccess</td>
			<td>function(data){}</td>            
			<td>操作成功，返回SUCCESS状态码</td>  
		</tr>
        <tr>
			<td>onfail</td>
			<td>function(err){}</td>          
			<td>操作失败，返回错误码
			</td>  
		</tr>
	</tbody>
</table>

#### speakFinish ####
	speakFinish(options)

**功能描述：**

语音输入完成，开始识别

**参数说明：**

<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
			<td>onsuccess</td>
			<td>function(data){}</td>            
			<td>操作成功，返回SUCCESS状态码</td>  
		</tr>
        <tr>
			<td>onfail</td>
			<td>function(err){}</td>          
			<td>操作失败，返回错误码
			</td>  
		</tr>
	</tbody>
</table>

## 手势事件处理类API ##
    clouda.touch

手势事件处理类API目前支持以下功能：

- 事件代理
- 事件绑定
- 解除事件代理
- 解除事件绑定
- 触发事件

### 事件代理

    touch.on( delegateElement, types, selector, callback );

**功能描述：** 

 事件代理方法。

**参数描述：**
<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
			<th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
           <td>delegateElement</td>
           <td>element或string</td>
           <td>事件代理元素或选择器</td>
        </tr>
        <tr>
           <td>types</td>
           <td>string</td>
           <td>手势事件的类型, 可接受多个事件以空格分开；支持原生事件的透传。目前支持的具体事件类型，详见<a href="#001">《手势事件类型》</a>。</td>
        </tr>
        <tr>
           <td>selector</td>
           <td>string</td>
           <td>代理子元素选择器,</td>
        </tr>
        <tr>
           <td>callback</td>
           <td>function</td>
           <td>事件处理函数，如需了解手势库支持的新属性，详见<a href="#002">《事件对象》</a></td>
        </tr>
</tbody>
</table>

<a id='001'>**手势事件类型**</a>

支持的手势事件类型：

<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>分类</th>
            <th>参数</th>
            <th>描述</th>
        </tr>
        <tr>
            <td rowspan="5">缩放</td>
            <td>pinchstart</td>
            <td>缩放手势起点</td>
        </tr>
        <tr>
            <td>pinchend</td>
            <td>缩放手势终点</td>
        </tr>
        <tr>
            <td>pinch</td>
            <td>缩放手势</td>
        </tr>
        <tr>
            <td>pinchin</td>
            <td>收缩</td>
        </tr>
        <tr>
            <td>pinchout</td>
            <td>放大</td>
        </tr>
		<tr>
            <td rowspan="3">旋转</td>
            <td>rotateleft</td>
            <td>向左旋转</td>
        </tr>
        <tr>
            <td>rotateright</td>
            <td>向右旋转</td>
        </tr>
        <tr>
            <td>rotate</td>
            <td>旋转</td>
        </tr>
		<tr>
            <td rowspan="8">滑动</td>
            <td>swipestart</td>
            <td>滑动手势起点</td>
        </tr>
        <tr>
            <td>swiping</td>
            <td>滑动中</td>
        </tr>
        <tr>
            <td>swipeend</td>
            <td>滑动手势终点</td>
        </tr>
        <tr>
            <td>swipeleft</td>
            <td>向左滑动</td>
        </tr>
        <tr>
            <td>swiperight</td>
            <td>向右滑动</td>
        </tr>
        <tr>
            <td>swipeup</td>
            <td>向上滑动</td>
        </tr>
        <tr>
            <td>swipedown</td>
            <td>向下滑动</td>
        </tr>
        <tr>
            <td>swipe</td>
            <td>滑动</td>
        </tr>
		<tr>
            <td>拖动</td>
            <td>drag</td>
            <td>拖动屏幕</td>
        </tr>
		<tr>
            <td>长按</td>
            <td>hold</td>
            <td>长按屏幕</td>
        </tr>
		<tr>
            <td rowspan="2">敲击</td>
            <td>tap</td>
            <td>单击屏幕</td>
        </tr>
        <tr>
            <td>doubletap</td>
            <td>双击屏幕</td>
        </tr>

</table>

<a id='002'>**事件对象**</a>

事件处理函数的第一个参数为事件对象，除了原生属性之外，百度手势库还提供了部分新属性。

以下为手势新增的属性：

<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>属性</th>
            <th>描述</th>
        </tr>
        <tr>
           <td>originEvent</td>
           <td>触发某事件的原生对象</td>
        </tr>
		<tr>
           <td>type</td>
           <td>事件的名称</td>
        </tr>
		<tr>
           <td>rotation </td>
           <td>旋转角度</td>
        </tr>
		<tr>
           <td>scale</td>
           <td>缩放比例</td>
        </tr>
		<tr>
           <td>direction</td>
           <td>操作的方向属性</td>
        </tr>
		<tr>
           <td>fingersCount</td>
           <td>操作的手势数量</td>
        </tr>
		<tr>
           <td>position</td>
           <td>相关位置信息, 不同的操作产生不同的位置信息</td>
        </tr>
		<tr>
           <td>distance </td>
           <td>swipe类两点之间的位移</td>
        </tr>
		<tr>
           <td>distanceX</td>
           <td>swipe类事件x方向的位移</td>
        </tr>
		<tr>
           <td>distanceY</td>
           <td>swipe类事件y方向的位移</td>
        </tr>
		<tr>
           <td>angle</td>
           <td>swipe类事件触发时偏移角度</td>
        </tr>
		<tr>
           <td>duration</td>
           <td>touchstart 与 touchend之间的时间戳</td>
        </tr>
		<tr>
           <td>factor</td>
           <td>swipe事件加速度因子</td>
        </tr>
		<tr>
           <td>swipe事件加速度因子</td>
           <td>启动单指旋转方法，在某个元素的touchstart触发时调用</td>
        </tr>
    </tbody>
</table>

### 事件绑定

    touch.on( element, types, callback );

**功能描述：** 

事件绑定方法，根据参数区分事件绑定和事件代理。

**参数描述：**
<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
           <td>element</td>
           <td>element或string</td>
           <td>事件绑定元素或选择器</td>
        </tr>
        <tr>
           <td>types</td>
           <td>string</td>
           <td>事件的类型, 可接受多个事件以空格分开，支持原生事件的透传。具体参数说明，同“事件代理”方法中的“types”参数说明。</td>
        </tr>
        <tr>
           <td>callback</td>
           <td>function</td>
           <td>事件处理函数，具体参数说明，同“事件代理”方法中的“callback”参数说明。
        </td>
        </tr>
</tbody>
</table>

### 解除事件代理

    touch.off( delegateElement, types, selector, callback )

**功能描述：** 

解除某元素上的事件代理。

**参数描述：**
<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
           <td>delegateElement</td>
           <td>element或string</td>
           <td>元素对象或选择器</td>
        </tr>
        <tr>
           <td>types</td>
           <td>string</td>
           <td>事件的类型，具体参数说明，同“事件代理”方法中的“types”参数说明。</td>
        </tr>
        <tr>
           <td>selector</td>
           <td>string</td>
           <td>代理子元素选择器</td>
        </tr>
        <tr>
           <td>callback</td>
           <td>function</td>
           <td>事件处理函数, 移除函数与绑定函数必须为同一引用。具体参数说明，同“事件代理”方法中的“callback”参数说明。</td>
        </tr>
</tbody>
</table>

### 解除事件绑定

    touch.off( element, types, callback )

**功能描述：** 

解除某元素上的事件绑定，根据参数区分事件绑定和事件代理。

**参数描述：**
<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
           <td>element</td>
           <td>element或string</td>
           <td>元素对象、选择器</td>
        </tr>
        <tr>
           <td>types</td>
           <td>string</td>
           <td>事件的类型，具体参数说明，同“事件代理”方法中的“types”参数说明。</td>
        </tr>
        <tr>
           <td>callback</td>
           <td>function</td>
           <td>事件处理函数, 移除函数与绑定函数必须为同一引用;具体参数说明，同“事件代理”方法中的“callback”参数说明。</td>
        </tr>
</tbody>
</table>

### 触发事件
    touch.trigger(element, type);

**功能描述：** 

触发某个元素上的某事件。

**参数描述：**
<table style="border-style: solid; border-width: 0pt;" border="1" cellspacing="0" cellpadding="5px">
    <tbody>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th>描述</th>
        </tr>
        <tr>
           <td>element</td>
           <td>element或string</td>
           <td>元素对象或选择器</td>
        </tr>
        <tr>
           <td>type</td>
           <td>string</td>
           <td>事件的类型，具体参数说明，同“事件代理”方法中的“types”参数说明。</td>
        </tr>
</tbody>
</table>
