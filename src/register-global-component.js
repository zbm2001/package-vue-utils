import Vue from 'vue'
import {upperFirst, camelCase} from '@zbm1/pkg-utils/string'

/**
 * 注册全局组件
 * @param directory // 其组件目录的相对路径
 * @param useSubdirectories // 是否查询其子目录
 * @param regExp // 匹配基础组件文件名的正则表达式
 */
export default function registerGlobalComponents (directory = './components', useSubdirectories = true, regExp = /\.vue$/) {
  const requireComponent = require.context(
    // 其组件目录的相对路径
    directory,
    // 是否查询其子目录
    useSubdirectories,
    // 匹配基础组件文件名的正则表达式
    regExp
  )

  requireComponent.keys().forEach(fileName => {
    // 获取组件配置
    const componentConfig = requireComponent(fileName)

    // 获取组件的 PascalCase 命名
    const componentName = upperFirst(
      camelCase(
        // 获取和目录深度无关的文件名
        fileName
          .split('/')
          .pop()
          .replace(/\.\w+$/, '')
      )
    )

    // 全局注册组件
    Vue.component(
      componentName,
      // 如果这个组件选项是通过 `export default` 导出的，
      // 那么就会优先使用 `.default`，
      // 否则回退到使用模块的根。
      componentConfig.default || componentConfig
    )
  })
}
