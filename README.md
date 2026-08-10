# movie-invitation

一个轻量、温柔的互动电影邀请 H5。打开信封后可以接受电影邀请，并继续回答电影散场后的第二个问题。

## 技术栈

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion

## 目录

```text
app/                    页面路由、全局样式与元信息
components/             信封、邀请卡、按钮和粒子动画
lib/motion.ts           共用动画参数
public/movie-cover.png  电影封面占位图
```

## 本地运行

需要 Node.js 20.9 或更高版本。

```bash
pnpm install
pnpm dev
```

打开 <http://localhost:3000>。发布前运行：

```bash
pnpm lint
pnpm build
```

## 替换电影封面

将真实海报保存为 `public/movie-cover.png`，直接覆盖占位文件即可。推荐使用 3:4 竖版图片。

## GitHub Pages 公网部署

```bash
git add .
git commit -m "feat: build interactive movie invitation"
git branch -M main
git remote add origin https://github.com/<你的用户名>/movie-invitation.git
git push -u origin main
```

仓库已包含 `.github/workflows/deploy-pages.yml`。在仓库的 **Settings → Pages** 中将 Source 设为 **GitHub Actions** 后，推送到 `main` 会自动发布：

```text
https://<你的 GitHub 用户名>.github.io/movie-invitation/
```

如需在本地检查与 GitHub Pages 完全一致的静态导出：

```bash
pnpm build:pages
```
