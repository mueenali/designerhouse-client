<template>
  <section class="authentication">
    <div class="auth-body">
      <h1 class="text-uppercase fw-500 mb-4 text-center font-22">
        Reset Password
      </h1>
      <form class="auth-form" @submit.prevent="submit">
        <alert-success :form="form">{{status}}
          <nuxt-link :to="{name: 'login'}">, Go to login page</nuxt-link>
        </alert-success>
        <div class="form-group">
          <input
            type="email"
            readonly
            v-model.trim="form.email"
            class="form-control form-control-lg font-14 fw-300"
            name="email"
            :class="{ 'is-invalid': form.errors.has('email') }"
            placeholder="Email"/>
          <has-error :form="form" field="email"> </has-error>
        </div>

        <div class="form-group">
          <input
            type="password"
            v-model.trim="form.password"
            class="form-control form-control-lg font-14 fw-300"
            name="password"
            :class="{ 'is-invalid': form.errors.has('password') }"
            placeholder="New password"/>
          <has-error :form="form" field="password"> </has-error>
        </div>

        <div class="form-group">
          <input
            type="password"
            v-model.trim="form.password_confirmation"
            class="form-control form-control-lg font-14 fw-300"
            name="password_confirmation"
            placeholder="Confirm Password"/>
          <has-error :form="form" field="password_confirmation"> </has-error>
        </div>
        <div class="text-right">
          <button type="submit" :disabled="form.busy" class="btn btn-primary primary-bg-color font-16 fw-500 text-uppercase"
          >
           <span v-if="form.busy">
              <i class="fas fa-spinner fa-spin"> </i>
           </span>
           Reset password
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
  export default {
    data(){
      return{
        status: '',
        form:this.$vform({
          email: '',
          password: '',
          password_confirmation: '',
          token: ''
        })
      }
    },
    created() {
      this.form.email = this.$route.query.email;
      this.form.token = this.$route.params.token;
    },
    methods: {
      async submit() {
        try{
          const response = await this.form.post('/resetPassword');
          this.status = response.data.status;
          this.form.reset();
        }catch (err) {
          console.log(err);
        }
      }
    }
  }
</script>

<style scoped>

</style>
