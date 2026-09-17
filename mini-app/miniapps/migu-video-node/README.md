# 咪咕直播源 Node 小程序

本目录将 `/Users/leospring/Downloads/migu_video-main` 适配为 flutter_ant_video 的 Node 服务型小程序。

## 安装与使用

1. 在小程序中心导入本目录，或导入打包后的 zip。
2. 在小程序详情页启动 Node 服务；使用 `miniapp://com.leospring.migu_video.node/m3u` 获取 M3U。
3. TXT 与 EPG 地址分别为 `/txt`、`/playback.xml`，频道地址由列表自动生成。
4. 如需局域网使用，在宿主的小程序详情页开启“局域网共享”。不要手工填写 worker 的临时端口。

## 配置

编辑 `server/index.config.js` 后重新打包安装。配置项与原项目环境变量一致，但不需要设置 `mport` 和 `mhost`：端口由宿主分配，列表地址根据请求 Host 自动生成。

默认不填账号和 Token。原项目说明登录存在封号风险，使用账号模式前请自行评估。

## 适配点

- CommonJS `start(config)` / `stop()` 宿主生命周期；
- `DEV_HTTP_PORT` 动态端口与 `catServerFactory`；
- 无鉴权的 `/check` 就绪探针；
- 业务数据路径从宿主 cwd 改为包内 `server/source`；
- 保留原项目的 M3U、TXT、EPG、频道 302 取流和定时更新逻辑。

业务源码来源：`develop202/migu_video`。请遵守原项目 README 中的学习用途、版权及地域限制说明。
