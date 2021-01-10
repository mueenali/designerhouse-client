<template>
  <section class="authentication">
    <div class="auth-body">
      <h1 class="text-uppercase fw-500 mb-4 text-center font-22">
        Forget Password
      </h1>
      <form class="auth-form" @submit.prevent="submit">
        <alert-success :form="form">{{status}}</alert-success>
        <div class="form-group">
          <input
            type="email"
            v-model.trim="form.email"
            class="form-control form-control-lg font-14 fw-300"
            name="email"
            :class="{ 'is-invalid': form.errors.has('email') }"
            placeholder="Email"/>
          <has-error :form="form" field="email"> </has-error>
        </div>

        <base-button
          :loading="form.busy"
          :classes="'primary-bg-color font-16 fw-500 text-uppercase'">
          Send reset link
        </base-button>

        <p class="font-14 fw-400 text-center mt-4">
          <nuxt-link class="color-blue" :to="{name:'login'}">Back to login page</nuxt-link>
        </p>
      </form>
    </div>
  </section>
</template>

<script>
  export default {
    middleware: ['guest'],
    data(){
      return{
        status: '',
        form:this.$vform({
          email: ''
        })
      }
    },
    methods: {
      async submit() {
        try{
          const response = await this.form.post('/forgetPassword');
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
