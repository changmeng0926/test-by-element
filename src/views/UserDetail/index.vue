<template>
  <div class="user-detail">
    <el-form ref="form" :rules="rules" :model="form" label-width="80px" class="detail-form">
      <el-form-item label="头像" ref="uploadElement" prop="imageUrl">
        <el-input v-model="form.imageUrl" v-if="false"></el-input>
        <el-upload
          class="avatar-uploader"
          ref="upload"
          :show-file-list="false"
          action="/index/upload"
          :before-upload="beforeUpload"
          :on-change="handleChange"
          :auto-upload="false"
          :data="form"
        >
          <img v-if="form.imageUrl" :src="form.imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>

      <el-form-item label="名称" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>

      <el-form-item label="公司" prop="company">
        <el-input v-model="form.company"></el-input>
      </el-form-item>

      <el-form-item label="职位" prop="duty">
        <el-input v-model="form.duty"></el-input>
      </el-form-item>

      <el-form-item label="介绍" prop="recommend">
        <el-input :rows="2" type="textarea" v-model="form.recommend"></el-input>
      </el-form-item>

      <el-form-item class="form-btn">
        <el-button size="small" type="primary" @click="onSubmit('form')">确定</el-button>
        <el-button size="small" @click="cancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'UserDetail',
  components: {},
  props: {},
  data () {
    return {
      form: {
        imageUrl: '',
        name: '',
        company: '',
        duty: '',
        recommend: '',
      },
      rules: {
        name: [
          { required: true, message: '请输入名称', trigger: 'blur' },
        ],
        imageUrl: [
          { required: true, message: '请上传图片', trigger: 'blur' },
        ],
      }
    }
  },
  watch: {},
  computed: {},
  mounted () { },
  methods: {
    onSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    cancel () { },
    beforeUpload (file) {
      return true;
    },
    handleChange (file, fileList) {
      this.form.imageUrl = URL.createObjectURL(file.raw);
    },
  },
}
</script>

<style lang='less' scoped>
.user-detail {
  display: flex;
  justify-content: center;
  overflow-y: scroll;
  padding-top: 40px;
}
.detail-form {
  width: 60%;
  margin: 0 auto;
}
.form-btn {
  padding-bottom: 40px;
  /deep/.el-form-item__content {
    display: flex;
    justify-content: space-between;
  }
}
input[type="file"] {
  display: none;
}

/deep/.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>