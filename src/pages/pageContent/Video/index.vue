<template>
  <div class="videoBigBox">
    <!-- <VideoCom :options="options"></VideoCom> -->
      <el-button type="primary">Primary</el-button>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import VideoCom from "./VideoCom.vue";

const options = reactive({
  autoplay: false,
  width: "100%", // 播放器显示的宽度
  height: "100%", // 播放器显示的高度
  loop: false,
  muted: true,
  notSupportedMessage: "暂时无法播放", // 播放路径有问题的时候
  fluid: false, // 相当于height: 100%; width: 100%
  poster: require("./img/mock.jpg"), // 海报
  playbackRates: [0.5, 1, 1.5, 2], // 播放速度
  plugins: [],
  preload: true, // viedeo 元素初始化之后，立刻加载视频资源
  techOrder: ["html5", "flash"],
  aspectRatio: "4:3", // 视频比例（16：9, 9:16, 4:3, 1:1）;
  audioOnlyMode: false, // 只剩控制栏，不显示视频, false: 显示视频
  audioPosterMode: false, // 一直显示海报
  autoSetup: true,
  userActions: {
    click: true, // 单击视频本身的开关
  },
  nativeTextTracks: true,
  // children: {
  //   controlBar: {
  //     fullscreenToggle: false,
  //   },
  // },
  // children: ["bigPlayButton", "controlBar"],
  controlBar: {
    remainingTimeDisplay: {
      // 剩余的时间是否显示符号， true 显示 -  false: 不显示 -
      displayNegative: false,
    },
  },
  controls: true, // 是否显示声音，进度条等控件
  sources: [
    { src: 'http://vjs.zencdn.net/v/oceans.mp4'}
    // { src: '/api/hls/cctv6hd.m3u8'}
    // { src: 'rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mov'}


    // {
    //   src: 'http://nclive.grtn.cn/gdws/sd/live.m3u8'
    // }
    
    // { src: "rtmp://202.69.69.180:443/webcast/bshdlive-mobile" },
    // { src: "http://vjs.zencdn.net/v/oceans.webm" },
    // { src: "http://vjs.zencdn.net/v/oceans.ogv" },
    // {
    //   src:'blob:https://www.mgtv.com/dbd5b628-167c-4222-9f0e-ba290aad3d5f'
    // },
  ],
});
</script>

<style lang='less' scoped>
.videoBigBox {
  width: 500px;
  height: 250px;
  .currentVideoBox {
    .vjs-no-js {
    }
  }
}
</style>