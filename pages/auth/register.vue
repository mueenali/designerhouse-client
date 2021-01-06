<template>
  <section class="authentication">
    <div class="auth-body">
      <h1 class="text-uppercase fw-500 mb-4 text-center font-22">Register</h1>
      <form class="auth-form" @submit.prevent="submit">
        <alert-success :form="form">We have sent you an email to activate your account.</alert-success>
        <div class="form-group">
          <input
            type="text"
            v-model.trim="form.name"
            class="form-control form-control-lg font-14 fw-300"
            name="name"
            placeholder="Full Name"
            :class="{ 'is-invalid': form.errors.has('name') }"
          />
          <has-error :form="form" field="name"> </has-error>
        </div>
        <div class="form-group">
            <input
              type="text"
              v-model.trim ="form.username"
              class="form-control form-control-lg font-14 fw-300"
              name="username"
              :class="{ 'is-invalid': form.errors.has('username') }"
              placeholder="Username"/>
          <has-error :form="form" field="username"> </has-error>
        </div>
        <div class="form-group">
          <input
            type="email"
            v-model.trim = "form.email"
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
            placeholder="Password"/>
          <has-error :form="form" field="password"> </has-error>
        </div>
        <div class="form-group">
          <input
            type="password"
            v-model.trim="form.password_confirmation"
            class="form-control form-control-lg font-14 fw-300"
            name="password_confirmation"
            :class="{ 'is-invalid': form.errors.has('password_confirmation') }"
            placeholder="Confirm Password"/>
          <has-error :form="form" field="password_confirmation"> </has-error>
        </div>

        <div class="text-right">
         <button type="submit" :disabled="form.busy" class="btn btn-primary primary-bg-color font-16 fw-500 text-uppercase"
         >
           <span v-if="form.busy">
              <i class="fas fa-spinner fa-spin"> </i>
           </span>
           Register
         </button>
        </div>
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
