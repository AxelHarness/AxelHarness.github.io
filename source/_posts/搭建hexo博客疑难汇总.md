---
title: 搭建hexo博客疑难汇总
date: 2023-01-12 13:49:07
tags:
    - hexo
categories: 
    - hexo
---
前言，在博客搭建的过程中，我遇到了许多问题，也许并没有什么都是一帆风顺。因此，我打算把自己遇到的所有问题都列在这里，并尽力搜寻解决办法，持续更新。

<!--more-->

## 实现hexo博客多端同步

### 终端1上的操作

#### 法一

· 在任意盘目录下，右键点击 Git bash here, 输入

```
$ git clone -b hexo git@github.com:xxx/xxx.github.io.git
```

· 该盘下会出现一个名为xxx.github.io的文件夹，删除文件夹里除了.git的其他所有文件

· 把Blog文件夹内的所有文件全部复制到xxx.github.io/下

· 打开(创建).gitignore的文件，里面的内容如下
```
.DS_Store
Thumbs.db
db.json
*.log
node_modules/
public/
.deploy*/
```

· 创建一个叫hexo的分支，并切换到该分支
```
$ git checkout -b hexo
```

· 添加所有文件到缓存区
```
$ git add .
OR
$ git add --all
```

· 提交到本地
```
$ git commit -m "添加描述信息"
```

· 推送hexo分支的文件到github仓库
```
$ git push --set-upstream oringin hexo
```

· 至此，操作完成

#### 法二

```
$ git init    //初始化本地仓库
$ git add .    //或者 git add source 将必要的文件依次添加
$ git commit -m "Blog Source Hexo"
$ git branch hexo    //新建hexo分支
$ git checkout hexo    //切换到hexo分支
$ git remote add origin git@github.com:yourname/yourname.github.io.git    //将本地与github项目对接
$ git push origin hexo    //push到github项目的hexo分支上
```

### 终端2上的操作

· 安装Git

· 设置Git全局邮箱和用户名
```
$ git config --global user.name "AxelHarness"
$ git config --global user.email "zhuhr1218@gmail.com"
```

· 设置ssh key

· 安装node.js

· 安装hexo

· 无需再进行初始化，在任意目录文件夹下，执行
```
$ git clone -b hexo git@github.com:yourname/yourname.github.io.git
$ cd yourname.github.io
$ npm install
$ npm install hexo-deployer-git --save
```

· 正常开始使用
```
$ hexo new post "xxxx"    //新建一个.md文件，进行编辑完成博客
$ git add .    //git add source
$ git commit -m "xx"
$ git push origin hexo    //更新分支
$ hexo g -d
```

### 进入不同终端的统一操作

```
$ git pull origin hexo    //先pull完成本地与远端的融合
$ hexo new post "new blog name"
$ git add .    //git add source
$ git commit -m "xx"
$ git push origin hexo
$ hexo g -d
```

## 同一设备下使用多个Github账号发布多个hexo博客

· 对于后来的账号，生成相应的ssh key，并将其添加到Github账户中
```
# Generate new ssh keys
$ cd ~/.ssh

# You should see there is already a ssh key, id_rsa.pub
$ ssh-keygen -t rsa -C "yourSecondEmail@email.com"

# Give your second ssh key another name: e.g., id_rsa_second
Generating public/private rsa key pair.
Enter file in which to save the key (c/Users/zhuyi/.ssh/id_rsa):
$ id_rsa_second
```

· 将后来生成的ssh key添加到代理
```
$ ssh-add ~/.ssh/id_rsa_second
```

· 在~/.ssh找到config文件，如果没有就自己添加一个，在config文件里添加
```
# Default Github User (yourFirstEmail@mail.com)
Host github.com
HostName github.com
User git
IdentityFile ~/.ssh/id_rsa

# Second Github User (yourSecondEmail@mail.com)
Host git2   
HostName github.com
User git
IdentityFile ~/.ssh/id_rsa_second
# git2 is the alternative name of your second Github account, you can use it when you clone or update your project. Details can be found later.
```

· 前往你的第二个hexo博客地址，修改_config.yml配置

```
deploy:
  type: git
  repo: git2:xxx/xxx.github.io.git
  branch: master
```

· 添加完尝试执行hexo g 、 hexo d即可

转载自 [在同一台电脑使用多个github账号发布多个hexo博客](https://www.jianshu.com/p/6aac57ab7a96)

## Windows环境下解决 github push failed (remote: Permission to userA/XXXX.git denied to userB.)

· 进入Control Panel

· Click User Accounts

· Click Manage Windows Credentials

· Delete Github Account

## 采用图床在markdown格式下插入图片

· 在VScode的扩展插件中安装PicGo

· 按下CTRL + ,进行PicGo插件的配置，使之与Github中的文档仓库关联

![迁移hexo到新电脑 - 简书 - Google Chrome 1_13_2023 12_53_57 AM](https://raw.githubusercontent.com/AxelHarness/Images/main/images/%E8%BF%81%E7%A7%BBhexo%E5%88%B0%E6%96%B0%E7%94%B5%E8%84%91%20-%20%E7%AE%80%E4%B9%A6%20-%20Google%20Chrome%201_13_2023%2012_53_57%20AM.png)

· 选择要使用的图片，右键复制到剪切板

· 在Markdown文件中需要插入图片的地方，按下CTRL + ALT + U完成粘贴