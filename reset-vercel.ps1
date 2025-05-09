# 切换到 frontend 子目录
cd frontend

# 删除 node_modules 和 package-lock.json
Write-Host "🧹 Cleaning node_modules and package-lock.json..."
Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json

# 重新安装依赖
Write-Host "📦 Reinstalling dependencies..."
npm install

# 添加 .gitignore（确保干净）
Write-Host "🛡 Ensuring .gitignore is present..."
@"
node_modules/
dist/
.vite/
"@ | Set-Content .gitignore

# 添加 .vercelignore（可选）
Write-Host "🛡 Writing .vercelignore..."
@"
node_modules
.vite
"@ | Set-Content .vercelignore

# Git add & commit
Write-Host "🔧 Staging changes..."
git add -A
git commit -m "fix: clean build environment for Vercel"

# 推送到远程仓库
Write-Host "🚀 Pushing to remote..."
git push

Write-Host "✅ Done. Now go to Vercel and redeploy (or delete and re-import the project)."
