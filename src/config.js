export default {
  appName: 'v3', // 应用名称配置，用于区分storage储存时的上下文，同时防止本地token冲突
  needPagePermission: false, // 是否开启页面权限验证
  specPagePermission: ['/login'],
  needApiPermission: false // 是否开启接口权限验证
}
