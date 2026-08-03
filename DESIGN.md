# DESIGN.md - Jiangxi Xuanpin New Materials Co., Ltd.

## 品牌与视觉方向

### 气质与意象
专业、可信赖的全球化工材料供应商。视觉语言如精密仪器展厅——干净、有序、精确。红色品牌色如印章般点缀在纯白画布上，传递力量与承诺。整体感觉：国际化工业品牌的沉稳与自信。

### 视觉策略
- 大图留白，文字为主力视觉载体
- 几何色块与红色线条作为辅助图形元素
- 产品图片采用统一白底/浅灰底风格
- 图标风格：线性、单色、2px 描边

## Design Tokens

### 色彩
- 品牌红 (Brand): #C8102E — CTA、关键强调、导航高亮
- 品牌红深 (Brand Dark): #A00D24 — 按钮 hover、深色强调
- 品牌红浅 (Brand Light): #FDE8EB — 浅底色、标签背景
- 白色 (White): #FFFFFF — 主背景
- 浅灰 (Light Gray): #F5F5F5 — 交替区块背景
- 深灰 (Dark): #333333 — 正文、标题
- 中灰 (Mid Gray): #666666 — 次要文字
- 浅中灰 (Border): #E5E5E5 — 边框、分割线

### 字体
- 字体族: Inter (Google Fonts), system-ui fallback
- Hero 标题: 48-56px / 700 / tracking-tight
- Section 标题: 32-36px / 600
- 副标题: 20-24px / 500
- 正文: 16px / 400 / line-height 1.6
- 小字: 14px / 400
- 字重: 400(Regular), 500(Medium), 600(Semibold), 700(Bold)

### 间距
- Section padding: py-20 (80px) desktop, py-12 (48px) mobile
- Content max-width: max-w-7xl (1280px)
- Card padding: p-6 to p-8
- Grid gap: gap-6 to gap-8

### 圆角
- 按钮/输入框: rounded-md (6px)
- 卡片: rounded-lg (8px)
- 图片: rounded-lg (8px)
- 标签: rounded-full

### 阴影
- 卡片默认: shadow-sm
- 卡片 hover: shadow-md + translateY(-4px)
- 导航栏滚动后: shadow-sm

## 动效与交互
- 过渡时长: 200ms-300ms, ease-out
- 卡片 hover: translateY(-4px) + shadow 增强
- 按钮 hover: 背景色加深, scale(1.02)
- 导航栏: 滚动后添加白色背景 + 阴影
- 页面元素: 无复杂动画，保持克制

## 设计禁忌
- 不使用蓝紫色渐变（科技产品套路）
- 不使用过度装饰或拟物化效果
- 不使用大于 8px 的圆角
- 不使用彩色阴影
- 不使用 emoji 作为图标
- 不使用卡通/手绘风格插图
