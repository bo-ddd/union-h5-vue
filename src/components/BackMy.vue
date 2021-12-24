 <template>
  <div>
    <van-nav-bar
      :title="title"
      left-text="返回"
      left-arrow
      @click-left="back"
    >
    </van-nav-bar>
  </div>
</template>
 
 <script>
export default {
  data() {
    return {
        title:'账户设置'
    };
  },
  methods: {
    back() {
      this.$router.push({
        name: "My",
      });
    },
  },
};
</script>
 
 <style >
</style>