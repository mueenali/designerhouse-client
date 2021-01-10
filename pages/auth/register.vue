<template>
  <section class="authentication">
    <div class="auth-body">
      <h1 class="text-uppercase fw-500 mb-4 text-center font-22">Register</h1>
      <form class="auth-form" @submit.prevent="submit">
        <alert-success :form="form">We have sent you an email to activate your account.</alert-success>

        <div class="form-group">
          <base-input
            v-model.trim="form.name"
            :form="form"
            field="name"
            placeholder="Name"
          > </base-input>
        </div>

        <div class="form-group">
          <base-input
            v-model.trim="form.username"
            :form="form"
            field="username"
            placeholder="username"
          > </base-input>
        </div>

        <div class="form-group">
          <base-input
            v-model.trim="form.email"
            :form="form"
            field="email"
            inputType="email"
            placeholder="Email"
          > </base-input>
        </div>
        <div class="form-group">
        <base-input
          v-model.trim="form.password"
          :form="form"
          field="password"
          inputType="password"
          placeholder="Password"
        > </base-input>
        </div>
        <div class="form-group">
          <base-input
            v-model.trim="form.password_confirmation"
            :form="form"
            field="password_confirmation"
            inputType="password"
            placeholder="Confirm password"
          > </base-input>
        </div>

        <base-button
          :loading="form.busy"
          classes="primary-bg-color font-16 fw-500 text-uppercase">
          Register
        </base-button>

        <p class="font-14 fw-400 text-center mt-4">
          Already have an account?
          <nuxt-link class="color-blue" :to="{name:'login'}">Login</nuxt-link>
        </p>
      </form>
    </div>
  </section>
</template>

<script>
  export default {
    middleware: ['guest'],
    data(){
      return {
        form: this.$vform({
          username: '',
          name: '',
          email: '',
          password: '',
          password_confirmation: ''
        })
      }
    },
    methods: {
      async submit (){
        try{
          const response = await this.form.post('/register');
          this.form.reset();
          console.log(response);
        }catch (error) {
          console.log(error);
        }
      }
    }
  }
</script>

<style scoped>

</style>
