---
title: Valaxy——新一代博客框架
date: 2025-03-23
updated: 2025-03-23
categories: Valaxy
tags:
  - valaxy
top: 1
---
> 江源速报:我把Hexo改为了Valaxy(因为实在太好用了啊啊啊啊啊啊啊啊啊啊)

沸画不多说直接进入正题
# 安装必要功能
## 安装git
windows用户可通过winget安装:
```powershell
winget install --id Git.Git -e --source winget
```
也可通过安装包安装:[点我下载安装包](https://github.com/git-for-windows/git/releases/download/v2.49.0.windows.1/Git-2.49.0-64-bit.exe)
linux可通过sudo apt安装:
```Terminal
$ sudo apt install git-all
```
## 安装node.js
### Windows
可使用fnm安装:
```powershell
# Download and install fnm:
winget install Schniz.fnm

# Download and install Node.js:
fnm install 23

# Verify the Node.js version:
node -v # Should print "v23.10.0".

# Verify npm version:
npm -v # Should print "10.9.2".
```
也可使用安装包安装:[点我获取windows .msi安装包](https://nodejs.org/dist/v23.10.0/node-v23.10.0-x64.msi)
### MacOS & Linux
也能使用fnm安装:
```Terminal
# Download and install fnm:
curl -o- https://fnm.vercel.app/install | bash

# Download and install Node.js:
fnm install 23

# Verify the Node.js version:
node -v # Should print "v23.10.0".

# Verify npm version:
npm -v # Should print "10.9.2".
```
也能使用安装包安装:[点我获取macos .pkg安装包](https://nodejs.org/dist/v23.10.0/node-v23.10.0.pkg) [点我获取linux .tar.xz离线包](https://nodejs.org/dist/v23.10.0/node-v23.10.0-linux-x64.tar.xz)
## 安装cnpm和pnpm
相对于安装前几个功能的方式简单了一些(因为有了npm)
### 安装cnpm
使用npm安装:
```powershell
npm install -g cnpm --registry=https://registry.npmmirror.com
```
以后遇到只有npm才能干的事就能把npm改成cnpm了
### 安装pnpm
使用powershell:
```powershell
Invoke-WebRequest https://get.pnpm.io/install.ps1 -UseBasicParsing | Invoke-Expression
```
使用Corepack:
```powershell
cnpm install --global corepack@latest
corepack enable pnpm
```
# 安装与配置并且部署Valaxy
## 安装
可以使用npm安装:
```powershell
npm init valaxy
```
也可使用pnpm安装:
```powershell
pnpm create valaxy
```
## 配置
懒得写了直接放原网页把
<iframe src="https://valaxy.site/guide/config"></iframe>
## 部署
也懒得写了直接看吧
<iframe src="https://valaxy.site/guide/deploy"></iframe>
