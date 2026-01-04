// sw.js - 基础服务工作线程
self.addEventListener('install', (e) => {
  console.log('Service Worker: 已安装');
});

self.addEventListener('fetch', (e) => {
  // 暂时直接透传请求
  e.respondWith(fetch(e.request));
});