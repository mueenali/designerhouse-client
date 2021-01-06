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
          <input
            type="email"
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
            class="form-control form-control-lg font-14 fw-300"
            name="password"
            v-model.trim = "form.password"
            :class="{ 'is-invalid': form.errors.has('password') }"
            placeholder="Password"/>
          <has-error :form="form" field="password"> </has-error>
        </div>
        <div class="mt-4 mb-4 clearfix">

        </div>
        <div class="text-right">
          <button type="submit" :disabled="form.busy" class="btn btn-primary primary-bg-color font-16 fw-500 text-uppercase"
          >
           <span v-if="form.busy">
              <i class="fas fa-spinner fa-spin"> </i>
           </span>
            Login
          </button>
        </div>
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
          const response = await this.$auth.loginWith('local', {
            data: this.form
          });
          console.log(response);

        }catch (err) {
          this.form.errors.set(err.response.data.errors);
          console.log(err.response.data.errors);
        }
      }
    }
  }
</script>

<style scoped>

</style>
