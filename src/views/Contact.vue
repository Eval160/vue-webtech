<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup';

const sendForm = () => {
  console.log("coucou le form");
}

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().required().email(),
  message: yup.string().required().min(15)
})

// const validateName = (value) => {
//   if (!value) {
//     return "Name is required"
//   }

//   return true
// }

// const validateEmail = (value) => {
//   if (!value) {
//     return "Email is required"
//   }

//   const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i
//   if (!regex.test(value)) {
//     return "Email must be valid"
//   }

//   return true
// }

</script>

<template>
  <div class="container">
    <h1>Contact</h1>
    <Form @submit="sendForm" :validation-schema="schema">
      <div class="form-control">
        <label for="name">Votre nom</label>
        <Field type="text"
               id="name"
               name="name"
               />
        <ErrorMessage name="name" class="text-red"></ErrorMessage>
      </div>

      <div class="form-control">
        <label for="email">Votre email</label>
        <Field type="text"
               id="email"
               name="email"/>
        <ErrorMessage name="email" class="text-red"></ErrorMessage>
      </div>

      <div class="form-control">
        <label for="message">Votre message</label>
        <Field as="textarea"
               id="message"
               rows="10"
               name="message"/>
        <ErrorMessage name="message" class="text-red"></ErrorMessage>

      </div>
      <input type="submit">
    </Form>
  </div>
</template>

<style scoped>
.container {
  width: 500px;
  margin: 0 auto;
}
.form-control {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

input, textarea {
  padding: 0.5rem;
  border-radius: 3px;
}

.text-red {
  color: red;
}
</style>
