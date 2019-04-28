
#### 获取个人信息的接口

https://api.github.com/users/mrgaogang


#### 最近的Events

https://api.github.com/users/MrGaoGang/events?page=1&per_page=20


#### 获取个人的resp（资料）

https://api.github.com/users/mrgaogang/repos?sort=updated&direction=desc?page=1&per_page=20


参数  | 类型 | 介绍
---|--- | ---
type | string |  all, owner, member 中的一个 ，默认: owner
sort | string |  created, updated, pushed, full_name.中的一个 默认: full_name
direction |	string |	asc 还是 desc. 默认: 当使用full_name的时候默认asc 其他desc

#### 获取某个resp根目录下的内容：

https://api.github.com/repos/mrgaogang/lucky_docs/contents


#### 获取某个资料库的README文件

https://api.github.com/repos/mrgaogang/lucky_vue/readme


#### 搜索resp
搜索语言为javascript的，resp包含lucky_vue的，

https://api.github.com/search/repositories?q=lucky_vue+language:javascript&sort=stars&order=desc

[官方地址](https://developer.github.com/v3/search/#search-repositories)



