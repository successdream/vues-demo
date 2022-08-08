<template>
  <div class="videoBox">
    <video
      ref="videoPlayerDom"
      :class="['video-js', 'vjs-fluid', 'vjs-big-play-centered']"
    ></video>

    <el-button type="primary" @click="handleClick">重载视频</el-button>
  </div>
</template>

<script setup>
import { defineProps, toRefs, ref, onMounted, onBeforeUnmount } from "vue";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "videojs-flash";
const props = defineProps(["options"]);
const { options } = toRefs(props);
const player = ref();
const videoPlayerDom = ref();
// 可以让播放按钮居中
// vjs-big-play-centered
const handleClick = () => {
  videoPlayerDom.value.pause();
  videoPlayerDom.value.setAttribute("src", "http://vjs.zencdn.net/v/oceans.mp4");
  videoPlayerDom.value.load();
  videoPlayerDom.value.play();
};

onMounted(() => {
  //   console.log(options.value, "video-zn", videoPlayerDom.value);
  player.value = videojs(videoPlayerDom.value, options.value, () => {
    // console.log("onPlayerReady", this);
    player.value.on("play", function () {
      console.log("开始/恢复播放");
    });

    player.value.on("pause", function () {
      console.log("暂停播放");
    });

    player.value.on("ended", function () {
      console.log("结束播放");
    });
    //
    player.value.on("timeupdate", function () {
      console.log("播放中...");
      console.log(player.value.currentTime(), "更新");
      if (
        player.value.duration() != 0 &&
        player.value.currentTime() === player.value.duration()
      ) {
        console.log("我是播放中的播放结束");
      }
    });
  });
  onBeforeUnmount(() => {
    player.value.dispose();
  });
});
//     { src: "http://vjs.zencdn.net/v/oceans.mp4" },
//     // { src: "http://vjs.zencdn.net/v/oceans.webm" },
//     // { src: "http://vjs.zencdn.net/v/oceans.ogv" },
//     // {
//     //   src:'blob:https://www.mgtv.com/dbd5b628-167c-4222-9f0e-ba290aad3d5f'
//     // },
//   ],
</script>

<style lang='less' scoped>
// 此设置可以把暂停的播放按钮居中
:deep(.vjs-paused .vjs-big-play-button, .vjs-paused.vjs-has-started
    .vjs-big-play-button) {
  display: block;
}
</style>