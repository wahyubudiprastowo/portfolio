import type { NextConfig } from "next";

// ============================================================
// Konfigurasi ganda:
// - Default (sandbox/Vercel): standalone output, tanpa basePath.
// - GitHub Pages: jalankan build dengan env PAGES_BUILD=1 dan
//   PAGES_BASE_PATH (contoh: /nama-repo). Hasil export ada di folder "out".
//   Detail langkah: lihat PANDUAN-UPLOAD.md dan .github/workflows/deploy-pages.yml
// ============================================================

const pagesBuild = process.env.PAGES_BUILD === "1";
const basePath = process.env.PAGES_BASE_PATH?.trim() || "";

const nextConfig: NextConfig = {
  output: pagesBuild ? "export" : "standalone",
  ...(basePath && pagesBuild ? { basePath, assetPrefix: `${basePath}/` } : {}),
  images: { unoptimized: true },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
