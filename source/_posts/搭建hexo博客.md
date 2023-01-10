---
title: 搭建Hexo博客
tags: [hexo]
categories: 教程
---
# 1. 安装Node.js
· URL: www.nodejs.org

# 2. 安装hexo
· 以管理员身份运行Git Bash

· 切换到淘宝镜像源
```
$ npm install -g cnpm --registry=https://registry.npm.taobao.org
```
· 安装hexo
```
$ cnpm install -g hexo-cli
```
<!--more-->
# 3. 使用hexo搭建博客
· 创建一个目录
```
$ mkdir Blog
```
· 用hexo命令初始化一个博客
```
$ hexo init
```
· 安装deployer部署插件
```
npm install --save hexo-deployer-git
```
· 配置_config.yml文件
```
deploy:
  type: git
  repo: https://github.com/AxelHarness/AxelHarness.github.io.git
  branch: master
```


# 4. 关于SSH
## 检查电脑上是否有SSH KEY
· 使用命令检查电脑上有没有.ssh文件夹
```
~/.ssh 
OR
~/.ssh ls
```
## 创建SSH KEY
· Open Git Bash<br/>
· Generating a new SSH key and adding it to the ssh-agent
```
$ ssh-keygen -t ed25519 -C "your_email@example.com"

OR

$ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```
· Adding your SSH key to the ssh-agent<br/>
1) Ensure the ssh-agent is running
```
# start the ssh-agent in the background
$ eval "$(ssh-agent -s)"
> Agent pid 59566
```
2) Add your SSH private key to the ssh-agent
```
$ ssh-add ~/.ssh/id_ed25519
```
3) Add the SSH key to your account on GitHub<br/>

· Adding a new SSH key to your account
1) Copy the SSH public key to your clipboard
```
$ clip < ~/.ssh/id_ed25519.pub
  # Copies the contents of the id_ed25519.pub file to your clipboard
```