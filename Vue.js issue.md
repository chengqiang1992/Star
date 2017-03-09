# Vue.js issue

---

## 第一步  初始化
一个简单的 Vue.js 项目脚手架.
> * 全局安装 vue-cli： npm install --global vue-cli
> * 创建一个基于 webpack 模板的新项目： vue init webpack my-project
> * 安装依赖，走你： cd my-project   npm install  npm run dev

PS： 由于我已经安装了 vue-cli，所以第一步省略。直接创建一个基于 webpack 模板的新项目。

## 第二步  安装开源插件或工具

```
npm install (with no args, in package dir)
npm install [<@scope>/]<name>
npm install [<@scope>/]<name>@<tag>
npm install [<@scope>/]<name>@<version>
npm install [<@scope>/]<name>@<version range>
npm install <tarball file>
npm install <tarball url>
npm install <folder>

alias: npm i
common options: [-S|--save|-D|--save-dev|-O|--save-optional] [-E|--save-exact] [--dry-run]
```

> * 全局安装： npm install xxx -g；
> * 本地安装： npm install xxx。 无 -g，本地配置文件 package.json 不写入相应信息；
> * dependencies 字段指定了项目运行所依赖的模块： npm install express --save。本地配置文件 package.json 对应 dependencies 写入相应信息；
> * devDependencies 指定项目开发所需要的模块： npm install express --save-dev。本地配置文件 package.json 对应 devDependencies 写入相应信息；