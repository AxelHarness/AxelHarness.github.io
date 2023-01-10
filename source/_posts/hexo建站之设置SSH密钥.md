---
title: hexo建站之设置SSH密钥
date: 2021-03-27 05:02:11
tags: [hexo, ssh密钥, github]
categories: hexo
---
前言：本文转自[《Github博客hexo建站之设置SSH密钥》by 暴走的山交](https://blog.csdn.net/qq_43649223/article/details/106081223)

PS 建议使用Github时使用SSH连接，SSH keys是一种鉴定信任电脑的方式，同时不需要输入密码（我为啥还要一直输入。。。）
***

# 检查SSH keys
1. 检查电脑中是否存在 SSH keys，打开 git bash 输入：
```
$ ls -al ~/.ssh
# 该指令会列出.ssh目录中的文件
```
<!--more-->
2. 检查目录中是肉存在 id_rsa.pub 或者 id_dsa.pub，如果没有便创建新的 SSH keys，有的话则跳过创建步骤。

# 创建新的 SSH key
1. 为了创建新的 SSH key，复制下面代码，填上对应的E-mail。同时在弹出提示"Enter a file in which to save the key"，紧急南下回车键(Enter)继续。
```
$ ssh-keygen -t rsa -C "youremail@example.com"
# 创建一个 ssh key，用准备好的e-mail作为标签
Generating public/private rsa key pair.
Enter file in which to save the key (/c/Users/you/.ssh/id_rsa): [Press enter]
```
2. 输入密码
```
Enter passphrase (empty for no passphrase): [Type a passphrase]
Enter same passphrase again: [Type passphrase again]
```
3. 看到类似如下提示：
```
Your identification has been saved in /c/Users/you/.ssh/id_rsa.
Your public key has been saved in /c/Users/you/.ssh/id_rsa.pub.
The key fingerprint is:
01:0f:f4:3b:ca:85:d6:17:a1:7d:f0:68:9d:f0:a2:db your_email@example.com
```
4. 在 ssh-代理上添加上你的新的密钥
```
# start the ssh-agent in the background
$ eval "$(ssh-agent -s)"
# Agent pid 59566
$ ssh-add ~/.ssh/id_rsa
```

# 在github账户上添加上 SSH key
1. 用任意编辑器，打开 ~/.ssh/id_rsa.pub 文件，手动把文件中的内容复制到粘贴板。
2. 将内容粘贴到 github 里的 ssh key 设置中

# 测试
1. 为了确保正常工作，打开 git bash 输入
```
$ ssh -T git@github.com
# Attempts to ssh to github
```
2. 忽略出现的警告
3. 看到如下内容，大功告成
```
Hi username! You've successfully authenticated, but GitHub does not
provide shell access.
```