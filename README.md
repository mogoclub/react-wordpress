# React WordPress

由WordPress提供json(安装插件[JSON API](https://wordpress.org/plugins/json-api/)),React做前端视图,这意味着你可以继续使用WordPress强大的CMS管理系统.

不需要修改WordPress就可以使用使用.

 [WordPress 后台演示](http://react.wordpress.femirror.com/)
 
  账号 guest 密码 guest (会定时清理数据库和媒体库)
 
 [React 前台演示](http://rw.femirror.com/)
 
## 特性

1 使用WordPress做内容管理,React重写前端.

2 使用dva构建React项目,dva内置React全家桶.

3 使用少部分antd组件,为后期更迭. 

## 使用说明

首页的幻灯片是读取 `有特色图` `页面` 的数据

导航会依照 `有文章` 的 `分类` 自动生成

## 调试

`$ npm install`

`$ npm start`

如果显示缺失dll.js 文件请执行

`$ npm run build:dll` 

## 构建

`$ npm run build`

## 部署

### Nginx

#### 跨域问题

我是使用nginx做API代理,配置如下

```
  location /api/ {
    	proxy_pass http://react.wordpress.femirror.com/;
	}
```

http://react.wordpress.femirror.com/ 替换成你的WordPress的地址即可

#### 路由问题

在正式环境下刷新可能会出现路由重定向问题,配置以下内容即可

```
  location / {
   		try_files $uri /index.html;
	}
```


