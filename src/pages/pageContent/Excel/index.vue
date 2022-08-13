<template>
  <div class="excelBox">
    <div class="leftExcel"></div>
    <div class="rightExcel"></div>
    <div class="bottomExcel">
      <el-upload
        class="upload-demo"
        style="float: right"
        action
        accept=".xlsx, .xls"
        :auto-upload="false"
        :show-file-list="false"
        :on-change="handleUpload"
      >
        <el-button size="small" type="primary">上传</el-button>
      </el-upload>
    </div>
  </div>
</template>

<script setup>
import * as XLSX from "xlsx";
// 导入excel
const handleUpload = (e) => {
  const file = e.raw;
  // 判断是否有文件信息
  if (!file) return;
  const fr = new FileReader();
  const fileName = file.name;
  fr.readAsArrayBuffer(file);
  fr.addEventListener("loadend", (e) => {
    const buf = e.target.result;
    const wb = XLSX.read(buf);
    const ws = wb.Sheets[wb.SheetNames[0]];
    const output = document.querySelector(".leftExcel");
    output.innerHTML = XLSX.utils.sheet_to_html(ws);
  });
};
</script>

<style lang='less' scoped>
.excelBox {
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 50px;
  // align-content: center;
  .leftExcel {
    overflow: auto;
  }
  .rightExcel {
    // background-color: green;
  }
  .bottomExcel {
  }
}
</style>