# PrO Project Page

英文科研主页，顶部完整 demo，包含方法、结果、应用与论文 PDF。纯静态 HTML / CSS / JavaScript，无安装、构建或后端依赖。

## 本地预览

直接打开 `index.html` 即可查看。推荐在本目录运行：

```bash
python3 -m http.server 8000
```

浏览器访问 `http://localhost:8000/`。默认静音播放；若浏览器阻止自动播放，点击视频原生播放按钮。视频的音量、进度和全屏使用浏览器原生控件。系统开启“减少动态效果”或浏览器开启流量节省时，不自动播放。

## 部署到指定 GitHub Pages

目标仓库：<https://github.com/loversinsnow/Pro_Project_Page>

1. 将本目录的**内容**上传到仓库 `main` 分支根目录。根目录应直接包含 `index.html`、`style.css`、`script.js`、`.nojekyll` 和 `assets/`，不要额外套一层 `Pro_Project_Page/`。
2. 打开仓库 **Settings → Pages → Build and deployment**。
3. Source 选择 **Deploy from a branch**，Branch 选择 **main**，目录选择 **/(root)**，保存。
4. 等待 GitHub Pages 部署完成，访问：<https://loversinsnow.github.io/Pro_Project_Page/>。

也可从本目录使用 Git 上传（仓库当前为空）：

```bash
git init -b main
git add .
git commit -m "Add PrO research project page"
git remote add origin https://github.com/loversinsnow/Pro_Project_Page.git
git push -u origin main
```

这些命令由你在具有仓库写权限的终端执行。本次交付没有推送仓库，也没有启用远程 Pages。网站使用相对资源路径，支持项目子目录部署；不需要 Git LFS。

## 文件与维护

- `index.html`：标题、作者、机构、正文、实验数据和论文入口。
- `style.css`：响应式布局、紫色主题与减少动画适配。
- `script.js`：结果标签、键盘导航、图示放大与视频章节定位。
- `assets/video/PrO-demo.mp4`：完整视频，流复制调整为 fast-start，不重新编码。
- `assets/paper/PrO.pdf`：用户提供的 camera-ready PDF 原文件副本。
- `assets/images/`、`assets/logos/`：本地素材，无外站字体、脚本或图像依赖。

暂无 arXiv、Code、Poster 下载或 BibTeX。将来增加公开链接时直接编辑 HTML。更换 demo 后，如章节时间变化，同步更新 `data-time` 属性；替换论文只需覆盖 `assets/paper/PrO.pdf`。

所有结果来自用户论文。页面中的百分比差异明确写为 percentage points。网页论文已替换为用户提供的 camera-ready PDF，按原文件逐字节复制，未编辑其作者、正文或元信息。原始 ZIP / PPTX / MP4 未修改。

## 验证范围

已完成本地资源与锚点检查、JavaScript 语法与交互逻辑测试、原始文件 SHA-256 校验、camera-ready PDF 文件头与复制一致性检查及视频编码检查。

当前环境无法启动可用的浏览器渲染会话，因此未提供网页截图，也未声称完成桌面/手机真机布局、原生视频播放或 GitHub Pages HTTP 验收。部署后建议检查 390 px 手机和 1440 px 桌面宽度、视频声音/全屏、Paper 下载、结果标签和图示放大。详细记录见交付包外的 `Pro_Project_Page_checks/VALIDATION.md`。

## 当前机构显示

网页作者机构与页脚仅显示清华大学交叉信息研究院，已移除上海期智研究院标识与机构编号。按用户要求，下载的 camera-ready PDF 保持原文件不变，PDF 内作者机构不受本次网页修改影响。
