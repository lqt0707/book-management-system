# 图书管理系统

一个基于Nest.js + React的全栈图书管理系统，提供图书的增删改查、封面管理等功能。

## 🚀 项目特色

- 📚 完整的图书CRUD操作
- 🖼️ 支持图书封面上传和管理
- 🔍 图书搜索功能
- 👤 用户注册与登录系统
- 🎨 美观的响应式界面
- ⚡ 前后端分离架构

## 🏗️ 技术栈

### 后端 (Nest.js)
- **框架**: Nest.js 10.0.0
- **语言**: TypeScript 5.1.3
- **数据库**: JSON文件存储
- **文件上传**: Multer
- **验证**: class-validator
- **跨域**: CORS支持
- **HTTP客户端**: Axios
- **数据存储**: 内存数据存储 (JSON文件)

### 前端 (React)
- **框架**: React 18 + TypeScript
- **UI组件库**: Ant Design
- **路由**: React Router
- **HTTP客户端**: Axios
- **构建工具**: Vite

## 📁 项目结构

```
book-management-system/
├── book-management-system-backend/     # 后端项目
│   ├── src/
│   │   ├── book/                      # 图书模块
│   │   ├── user/                      # 用户模块
│   │   ├── common/                    # 公共模块
│   │   └── main.ts                    # 入口文件
│   ├── books.json                     # 图书数据
│   ├── users.json                     # 用户数据
│   └── uploads/                       # 上传文件
└── book-management-system-frontend/   # 前端项目
    ├── src/
    │   ├── pages/                     # 页面组件
    │   ├── interfaces/                # API接口
    │   └── main.tsx                   # 入口文件
    └── package.json
```

## 🛠️ 快速开始

### 环境要求
- Node.js ≥ 16.0.0
- npm 或 pnpm

### 安装依赖

#### 后端
```bash
cd book-management-system-backend
npm install
```

#### 前端
```bash
cd book-management-system-frontend
npm install
# 或使用 pnpm
pnpm install
```

### 启动服务

#### 启动后端 (端口: 3000)
```bash
cd book-management-system-backend
npm run start:dev
```

#### 启动前端 (端口: 5173)
```bash
cd book-management-system-frontend
npm run dev
```

### 构建生产版本

#### 后端构建
```bash
cd book-management-system-backend
npm run build
```

#### 前端构建
```bash
cd book-management-system-frontend
npm run build
```

## 📖 API文档

### 图书相关接口

#### 获取图书列表
```http
GET /book/list?name={搜索关键词}
```

#### 创建图书
```http
POST /book/create
Content-Type: application/json

{
  "name": "图书名称",
  "author": "作者",
  "description": "描述",
  "cover": "封面路径"
}
```

#### 更新图书
```http
PUT /book/update
Content-Type: application/json

{
  "id": 1,
  "name": "图书名称",
  "author": "作者",
  "description": "描述",
  "cover": "封面路径"
}
```

#### 删除图书
```http
DELETE /book/delete/{id}
```

#### 上传封面
```http
POST /book/upload
Content-Type: multipart/form-data

file: 图片文件
```

### 用户相关接口

#### 用户注册
```http
POST /user/register
Content-Type: application/json

{
  "username": "用户名",
  "password": "密码"
}
```

#### 用户登录
```http
POST /user/login
Content-Type: application/json

{
  "username": "用户名",
  "password": "密码"
}
```

## 🎯 功能演示

### 图书管理
- ✅ 添加新图书（含封面上传）
- ✅ 编辑现有图书信息
- ✅ 删除图书
- ✅ 搜索图书
- ✅ 查看图书列表

### 用户系统
- ✅ 用户注册
- ✅ 用户登录
- ✅ 会话管理

## 📸 界面预览

### 图书列表页面
展示所有图书，支持搜索、添加、编辑、删除操作。

### 添加/编辑图书
表单包含：图书名称、作者、描述、封面上传。

### 用户登录/注册
简洁的用户认证界面。

## 🚨 注意事项

1. **数据存储**: 当前使用JSON文件存储数据，适合开发环境
2. **文件上传**: 上传的图片保存在`uploads/`目录
3. **跨域配置**: 已配置CORS支持前后端分离开发
4. **端口配置**: 后端默认端口3000，前端默认端口5173

## 🔧 开发建议

### 代码规范
- 使用TypeScript进行类型检查
- 遵循ESLint代码规范
- 使用Prettier格式化代码

### 功能扩展
- [ ] 添加图书分类功能
- [ ] 实现借阅管理
- [ ] 添加评论系统
- [ ] 支持批量导入/导出
- [ ] 集成数据库存储

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 💡 技术支持

如有问题或建议，欢迎提交Issue或联系维护者。

---

**开发团队**: 图书管理系统开发组
**最后更新**: 2025年7月