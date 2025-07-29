# 图书管理系统 - 前端

基于React + TypeScript + Ant Design构建的现代化前端应用，为图书管理系统提供友好的用户界面。

## 🚀 技术栈

- **框架**: React 18.3.1
- **语言**: TypeScript 5.2.2
- **UI组件库**: Ant Design 5.19.2
- **路由**: React Router 6.25.0
- **HTTP客户端**: Axios 1.7.2
- **构建工具**: Vite 5.3.4

## 🛠️ 快速开始

### 安装依赖
```bash
npm install
# 或使用 pnpm
pnpm install
```

### 开发模式
```bash
npm run dev
```
访问 http://localhost:5173

### 构建生产版本
```bash
npm run build
```

### 可用命令
- `npm run dev` - 启动开发服务器
- `npm run build` - 构建生产版本
- `npm run preview` - 预览构建结果
- `npm run lint` - 代码检查

## 🎯 功能特性

### 用户功能
- ✅ 用户注册与登录
- ✅ 会话管理

### 图书功能
- ✅ 图书列表展示
- ✅ 图书搜索
- ✅ 添加/编辑/删除图书
- ✅ 封面上传与预览

## 📁 项目结构

```
src/
├── pages/               # 页面组件
│   ├── Login/          # 登录页面
│   ├── Register/       # 注册页面
│   └── BookManage/     # 图书管理页面
├── interfaces/         # API接口封装
├── main.tsx           # 应用入口
└── index.css          # 全局样式
```

## 🔌 API配置

确保后端服务已启动，默认地址：http://localhost:3000

## 🚨 注意事项

- 后端服务端口：3000
- 前端开发端口：5173
- 图片路径：http://localhost:3000/{upload_path}