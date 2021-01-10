<template>
  <section class="authentication">
    <div class="auth-body">
      <h1 class="text-uppercase fw-500 mb-4 text-center font-22">
        Login
      </h1>
      <form class="auth-form" @submit.prevent="submit">
        <alert-error v-if="form.errors.has('verification')" :form="form">
          {{form.errors.get('verification')}}
          <nuxt-link :to="{name:'verification.resend'}"> Resend verification email</nuxt-link>
        </alert-error>
        <div class="form-group">
          <base-input
            :form="form"
            field="email"
            inputType="email"
            v-model.trim="form.email"
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

        <div class="mt-4 mb-4 clearfix">
          <nuxt-link class="forgot-pass color-blue font-14 fw-400" :to="{name:'password.email'}">
            Forgot password?
          </nuxt-link>
        </div>

        <base-button
          :loading="form.busy"
          classes="primary-bg-color font-16 fw-500 text-uppercase">
          Login
        </base-button>

        <p class="font-14 fw-400 text-center mt-4">
          Don't have an account yet?
          <nuxt-link class="color-blue" :to="{name:'register'}">Create an account</nuxt-link>
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
          email: '',
          password: ''
        })
      }
    },

    methods: {
      async submit() {
        try{
          this.form.busy = true;
          await this.$auth.loginWith('local', {
            data: this.form
          });
          this.form.busy = false;
        }catch (err) {
          this.form.busy = false;
          this.form.errors.set(err.response.data.errors);
          console.log(err.response.data.errors);
        }
      }
    }
  }
</script>

<style scoped>

</style>
