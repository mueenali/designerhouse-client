<template>
  <section class="authentication">
    <div class="auth-body">
      <h1 class="text-uppercase fw-500 mb-4 text-center font-22">
        Resend Verification email
      </h1>
      <form class="auth-form" @submit.prevent="submit">
        <alert-error v-if="form.errors.has('message')" :form="form">
          {{form.errors.get('message')}}
        </alert-error>
        <alert-success :form="form">Verification link has been resent to your email</alert-success>
        <div class="form-group">
          <base-input
            v-model.trim="form.email"
            :form="form"
            field="email"
            inputType="email"
            placeholder="Email"
          > </base-input>
        </div>
        <div class="text-right">
          <base-button
            :loading="form.busy"
            classes="primary-bg-color font-16 fw-500 text-uppercase">
            Resend
          </base-button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
  export default {
    middleware: ['guest'],
    data(){
       return{
         form:this.$vform({
           email: ''
         })
       }
    },
    methods: {
      async submit() {
        try{
          await this.form.post('/verification/resend');
          this.form.reset();
        }catch (err) {
          console.log('error');
        }
      }
    }
  }
</script>

<style scoped>

</style>
