---
title: 搭建Hexo博客完整攻略
date: 2023-01-10 22:55:04
tags: [hexo, 攻略]
categories: hexo
---
## 前言

2023年伊始，我打算重新开一个博客，用来记录往后的学习过程与感悟，冲冲冲！

<!--more-->

## Windows下搭建hexo博客

- 安装 [Git](https://git-scm.com/downloads)

- 安装 [Node.js](https://nodejs.org/en/)

- 安装 Hexo

```
# 切换成淘宝镜像源
$ npm install -g cnpm --registry=https://registry.npm.taobao.org

# 安装hexo
$ cnpm install -g hexo-cli
```

- 搭建博客

```
# 打开一个目录，创建Blog文件夹
$ mkdir

# 初始化一个博客
$ hexo init

# 安装部署插件
$ npm install --save hexo-deployer-git

# 配置_conifg.yml文件
deploy:
  type: git
  repo: https://github.com/AxelHarness/AxelHarness.github.io.git
  branch: master
```

- 创建SSH KEY

```
# 检查电脑上是否有ssh key
$ ~/.ssh 
OR
$ ~/.ssh ls

# Generating a new SSH key and adding it to the ssh-agent
$ ssh-keygen -t ed25519 -C "your_email@example.com"
OR
$ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

- Adding your SSH key to the ssh-agent

```
# Ensure the ssh-agent is running and start the ssh-agent in the background
$ eval "$(ssh-agent -s)"
> Agent pid 59566

# Add your SSH private key to the ssh-agent
$ ssh-add ~/.ssh/id_ed25519

# Copy the SSH public key to your clipboard
$ clip < ~/.ssh/id_ed25519.pub
```

- Add the SSH key to your account on GitHub\

## 结语

至此，基本完成，过程中所遇到的问题，还请移步另一篇博客[《搭建hexo博客疑难汇总》](https://axelharness.github.io/2023/01/12/%E6%90%AD%E5%BB%BAhexo%E5%8D%9A%E5%AE%A2%E7%96%91%E9%9A%BE%E6%B1%87%E6%80%BB/#Windows%E7%8E%AF%E5%A2%83%E4%B8%8B%E8%A7%A3%E5%86%B3-github-push-failed-remote-Permission-to-userA-x2F-XXXX-git-denied-to-userB)。
