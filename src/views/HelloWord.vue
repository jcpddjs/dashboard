<template>
  <el-row>
    <el-button type="primary">主要按钮</el-button>
    <div>用户名：{{ user.userName }}</div>
    <div>姓名：{{ user.realName }}</div>
    
  </el-row>
</template>
<script>
// @ is an alias to /src
import axios from "axios";
export default {
  name: "HellWord",
  data() {
    return {
      user: {},
    };
  },
  created() {
    axios
      .post(
        "/api/user/info",
        {},
        {
          headers: {
            token: "666666",
          },
        }
      )
      .then((res) => {
        if (res.data.code === 0) {
          this.user = res.data.data;
        }
      });
  },
};
</script>