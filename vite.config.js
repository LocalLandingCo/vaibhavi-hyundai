import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path logic (important for GitHub Pages):
//  - VITE_BASE set (e.g. "/" for a custom domain)  -> use it as-is
//  - otherwise, build  -> "/<repo-name>/"  (the github.io project URL)
//  - otherwise, dev    -> "/"
// In GitHub Actions, GITHUB_REPOSITORY ("owner/repo") is provided automatically.
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'vaibhavi-hyundai-phaltan'

function resolveBase(command) {
  const fromEnv = process.env.VITE_BASE
  if (fromEnv) {
    let b = fromEnv
    if (!b.startsWith('/')) b = '/' + b
    if (!b.endsWith('/')) b += '/'
    return b
  }
  return command === 'build' ? `/${repoName}/` : '/'
}

export default defineConfig(({ command }) => ({
  base: resolveBase(command),
  plugins: [react()],
}))
