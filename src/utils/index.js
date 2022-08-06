/*  basic function  */
import globalConfig from '@/config'

// 获取文档宽度
export const getDocumentWidth = () => {
    return document.documentElement.clientWidth || document.body.clientWidth
}

// 获取文档高度
export const getDocumentHeight = () => {
    return document.documentElement.clientHeight || document.body.clientHeight
}

// localStorage封装
export const setLocalStorage = (key, data) => {
    let storage = window.localStorage
    let newKey = globalConfig.appName + '_' + key
    let myData = data
    if (typeof myData === 'object' || typeof myData === 'function') {
        storage.setItem(newKey, JSON.stringify(myData))
    } else {
        storage.setItem(newKey, myData)
    }
    return myData
}

export const getLocalStorage = (key) => {
    let storage = window.localStorage
    let newKey = globalConfig.appName + '_' + key
    return storage.getItem(newKey)
}

// sessionStorage封装
export const setSessionStorage = (key, data) => {
    let storage = window.sessionStorage
    let newKey = globalConfig.appName + key
    let myData = data
    if (typeof myData === 'object' || typeof myData === 'function') {
        storage.setItem(newKey, JSON.stringify(myData))
    } else {
        storage.setItem(newKey, myData)
    }
    return myData
}

export const getSessionStorage = (key) => {
    let storage = window.sessionStorage
    let newKey = globalConfig.appName + key
    return storage.getItem(newKey)
}

// 计算当前时间的时间差
export const timeConvert = (timeValue) => {
    let date1 = timeValue // 开始时间
    let date2 = new Date() // 结束时间
    let date3 = date2.getTime() - new Date(date1).getTime() // 时间差的毫秒数
    // 计算出相差天数
    let days = Math.floor(date3 / (24 * 3600 * 1000))
    // 计算出小时数
    let leave1 = date3 % (24 * 3600 * 1000) // 计算天数后剩余的毫秒数
    let hours = Math.floor(leave1 / (3600 * 1000))
    // 计算相差分钟数
    let leave2 = leave1 % (3600 * 1000) // 计算小时数后剩余的毫秒数
    let minutes = Math.floor(leave2 / (60 * 1000))
    // 计算相差秒数
    let leave3 = leave2 % (60 * 1000) // 计算分钟数后剩余的毫秒数
    let seconds = Math.round(leave3 / 1000)
    let showTime = ''
    if (days >= 0) {
        showTime = days + '天 ' + hours + '小时' + minutes + '分'
    } else if (days < 0 || hours < 0 || minutes < 0 || seconds < 0) {
        showTime = '-'
    }
    return showTime
}

// 个位数转化为'0x'形式
export const singleAddZero = (num) => {
    return (num < 10) ? ('0' + num) : num
}

// date转化为string(yyyy-MM-dd hh-mm-ss)
export const dateToString = (newDate) => {
    let tDate = newDate
    if (!tDate) {
        tDate = new Date()
    }
    let yyyy = tDate.getFullYear()

    let MM = this.singleAddZero(tDate.getMonth() + 1)

    let dd = this.singleAddZero(tDate.getDate())

    let hh = this.singleAddZero(tDate.getHours())

    let mm = this.singleAddZero(tDate.getMinutes())

    let ss = this.singleAddZero(tDate.getSeconds())
    return yyyy + '-' + MM + '-' + dd + ' ' + hh + ':' + mm + ':' + ss
}

// 生成随机字符串
export const randomString = (len) => {
    len = len || 32
    const $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789'
    const maxPos = $chars.length
    let pwd = ''
    for (let i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos))
    }
    return pwd
}

// echarts字体转化
export const transFontSizeECharts = (size) => {
    return size / 100 * document.documentElement.style.fontSize.slice(0, -2)
}
// 随机整数，如果传入num参数则生成一个num为length的数组
export const mathRandom = (min, max, num) => {
    num = num || 1
    let tempArr = []
    for (let i = 0; i < num; i++) {
        tempArr.push(Math.floor(Math.random() * (max - min + 1) + min))
    }
    return tempArr
}
// 全局formatter方法
export const constFormatter = (constant, val) => {
    let res = ''
    constant.forEach(item => {
        if (item.value === val) {
            res = item.label
        }
    })
    return res
}
// 获取用户信息
export const getUserInfo = () => {
    return this.getLocalStorage('userInfo') ? JSON.parse(this.getLocalStorage('userInfo')) : {}
}
// 获取接口权限
export const getUserApiPermission = () => {
    return this.getUserInfo()['authApiPermissions'] || []
}
// 获取页面权限
export const getUserPagePermission = () => {
    const tempList = this.getUserInfo()['authPagePermissions'] || []
    return tempList.concat(globalConfig.specPagePermission)
}

// 通过name 向 data 中添加数组 addData
export const addDataByName = ({
    data,
    name,
    addData
}) => {
    return data.map((item) => {
        if (item.name && item.name === name) {
            if (item.children && item.children instanceof Array) {
                item.children = [...item.children, ...addData]
            } else {
                item.children = addData
            }
            return item
        } else {
            if (item.children) {
                item.children = addDataByName({
                    name,
                    data: item.children,
                    addData
                })
            }
            return item;
        }
    })

}