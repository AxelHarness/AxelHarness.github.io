---
title: hexo next 添加 Aplayer
date: 2021-03-27 05:29:22
tags: [hexo, next, Aplayer]
categories: hexo
---
前言：本文转自[《Hexo next 主题中添加播放器 Aplayer》](https://blog.csdn.net/qq_35324057/article/details/104124723)
***

# 下载 Aplayer 源码
请点击： [Aplayer](https://github.com/DIYgod/APlayer)

# 复制 dist 文件夹
将解压后的文件夹中的 dist 文件夹复制到你的创建博客路径下： blog/themes/next/source
<!--more-->

# 新建 music.js
在路径： blog/themes/next/source/dist 下添加 music.js 文件并粘贴以下内容
```
const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
	  {
        name: '勇气',
        artist: '棉子',
        url: 'http://music.163.com/song/media/outer/url?id=1411358329.mp3',
        cover: '/images/5.jpg',
      },
      {
        name: "星星",
        artist: '张杰',
        url: 'http://music.163.com/song/media/outer/url?id=1399004693.mp3',
        cover: '/images/xingxing.jpg',
      }
    ]
});
```

# 修改文件 _layout.swig
在路径： blog/themes/next/layout 下找到 _layout.swig 文件，将下面代码粘贴到 <body itemscope>在body里面即可
```
<link rel="stylesheet" href="/dist/APlayer.min.css">
<div id="aplayer"></div>
<script type="text/javascript" src="/dist/APlayer.min.js"></script>
<script type="text/javascript" src="/dist/music.js"></script>
```

# 利用 Pjax 实现全局音乐播放
1. 打开路径 themes/next/layout 下找到 _layout.swig
2. 在 </head> 标签前面添加如下代码
```
 <head>   //粘贴到这里
    
  <!--pjax：防止跳转页面音乐暂停-->
  <script src="https://cdn.jsdelivr.net/npm/pjax@0.2.8/pjax.js"></script> 
</head> 
```
3. 在主题配置文件中找到 pjax，将其值设置为 true
```
# Easily enable fast Ajax navigation on your website.
# Dependencies: https://github.com/theme-next/theme-next-pjax
pjax: true
```

至此，大功告成!!!