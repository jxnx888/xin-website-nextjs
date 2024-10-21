/** @type {import('next').NextConfig} */
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // 获取当前文件名
const __dirname = path.dirname(__filename); // 获取当前目录名

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')], // 指向 styles 文件夹
    additionalData: `@import 'media';`,
  },
};

export default nextConfig;
