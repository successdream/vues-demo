



const  autoGetFiles = () => {
    const asyncFiles = require.context('./addRoutes', true, /\.js$/)
    let permissionModules = []
    asyncFiles.keys().forEach((key) => {
    //   if (key === './index.ts') return
      permissionModules = permissionModules.concat(asyncFiles(key).default)
    })
    console.log(permissionModules)
    return permissionModules;
}

export default  autoGetFiles;