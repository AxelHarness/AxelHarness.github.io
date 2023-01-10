---
title: 解决hexo多端同步
date: 2021-03-26 17:14:57
tags: [hexo, 同步, github] 
categories: hexo
---
前言：该篇转载自[《如何解决github+Hexo的博客多终端同步问题》by monkey_lzl](https://blog.csdn.net/Monkey_LZL/article/details/60870891?utm_medium=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.control&dist_request_id=&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.control)
***
# 终端1上的操作
目标：push本地文件夹Hexo中的必要文件到yourname.github.io的分支上
内容：利用github+hexo搭建博客时，新建一个Hexo文件夹，进行相关的配置，该部分主要是将这些配置文件托管到github项目的分支上，其中托管部分是用来进行多端同步的文件。
<br/>
```
git init    //初始化本地仓库
git add .    //或者 git add source 将必要的文件依次添加
git commit -m "Blog Source Hexo"
git branch hexo    //新建hexo分支
git checkout hexo    //切换到hexo分支
git remote add origin git@github.com:yourname/yourname.github.io.git    //将本地与github项目对接
git push origin hexo    //push到github项目的hexo分支上
```
结果：github项目中会多出一个hexo分支，这个分支便是用来多端同步的关键部分
<!--more-->

# 终端2上的操作
目标：完成clone和push更新
内容：在终端2上只需将github的hexo分支clone下来并进行初次的配置
<br/>
```
git clone -b hexo git@github.com:yourname/yourname.github.io.git    //将github中的hexo分支clone到本地
cd yourname.github.io    //切换到刚刚clone的文件夹内
npm install    //切换到文件夹后进行安装必要的组件，无需ini
hexo new post "xxxx"    //新建一个.md文件，进行编辑完成博客
git add .    //git add source
git commit -m "xx"
git push origin hexo    //更新分支
hexo g -d
```

# 不同终端以后的进行的操作
内容：先进入自己相应的文件夹
<br/>
```
git pull origin hexo    //先pull完成本地与远端的融合
hexo new post "new blog name"
git add .    //git add source
git commit -m "xx"
git push origin hexo
hexo g -d

对于需要合并时可以输入以下两条命令
git reset --hard
git pull origin hexo
```