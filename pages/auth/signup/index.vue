<template>
  <Container
    class="flex flex-col items-center justify-center min-h-screen min-w-full bg-gray-900"
    data-test="container"
  >
    <div
      class="relative flex flex-col justify-center items-center space-y-4 bg-black text-white rounded-lg shadow-lg px-8 max-h-screen max-w-md"
      data-test="form-container"
    >
      <Button
        variant="link"
        class="absolute top-3 no-underline hover:underline text-white w-1/2"
        @click="router.back()"
        data-test="back-to-login-button"
      >
        &lt Back to login
      </Button>

      <div class="flex gap-x-8 items-center justify-between" data-test="logo-section">
        <Image size="sm" src="/img/aladiaLogo.png" alt="Logo" data-test="logo" />
        <div>
          <Text size="md" weight="semibold" data-test="greeting-message">Nice to meet you</Text>
          <Text class="text-gray-300" size="sm" weight="light" data-test="greeting-subtext">
            Upload a profile picture and complete your presentation
          </Text>
        </div>
      </div>

      <div class="flex flex-col space-y-2" data-test="terms-section">
        <div class="flex space-x-1">
          <CheckboxInput id="terms" size="sm" v-model="form.termsAccepted" data-test="terms-checkbox" />
          <Text size="sm" data-test="terms-text">
            I accept <a href="#" class="underline font-semibold">Terms & Conditions</a> and <a href="#" class="underline font-semibold">Privacy Policy</a>
          </Text>
        </div>
        <Text
          :class="getErrorClass(errors.termsAccepted)"
          class="text-red-500 text-sm h-1"
          data-test="terms-error"
        >
          {{ errors.termsAccepted }}
        </Text>
      </div>

      <Text size="sm" data-test="enter-details-text">Enter your details</Text>

      <div class="flex flex-col gap-y-4 w-full" data-test="form-fields">
        <div>
          <TextInput
            size="sm"
            v-model="form.name"
            id="name"
            placeholder="Name"
            leading="mdi:account"
            data-test="name-input"
          />
          <Text
            :class="getErrorClass(errors.name)"
            class="text-red-500 text-sm h-1"
            data-test="name-error"
          >
            {{ errors.name }}
          </Text>
        </div>

        <div>
          <TextInput
            size="sm"
            v-model="form.surname"
            id="surname"
            placeholder="Surname"
            leading="fa-solid fa-user"
            data-test="surname-input"
          />
          <Text
            :class="getErrorClass(errors.surname)"
            class="text-red-500 text-sm h-1"
            data-test="surname-error"
          >
            {{ errors.surname }}
          </Text>
        </div>

        <div>
          <TextInput
            size="sm"
            v-model="form.email"
            id="email"
            placeholder="Email Address"
            leading="fa-solid fa-envelope"
            data-test="email-input"
          />
          <Text
            :class="getErrorClass(errors.email)"
            class="text-red-500 text-sm h-1"
            data-test="email-error"
          >
            {{ errors.email }}
          </Text>
        </div>

        <div>
          <TextInput
            size="sm"
            v-model="form.password"
            id="password"
            placeholder="Password"
            leading="fa-solid fa-lock"
            type="password"
            data-test="password-input"
          />
          <Text
            :class="getErrorClass(errors.password)"
            class="text-red-500 text-sm h-1"
            data-test="password-error"
          >
            {{ passwordError }}
          </Text>
        </div>

        <div>
          <TextInput
            size="sm"
            v-model="form.confirmPassword"
            id="confirmPassword"
            placeholder="Confirm Password"
            leading="fa-solid fa-lock"
            type="password"
            data-test="confirm-password-input"
          />
          <Text
            :class="getErrorClass(errors.confirmPassword)"
            class="text-red-500 text-sm h-1"
            data-test="confirm-password-error"
          >
            {{ passwordMatchError }}
          </Text>
        </div>
      </div>

      <Button
        @click="submitForm"
        variant="primary"
        class="w-full mt-4 border border-white hover:border-2 hover:bg-neutral-900 bg-gradient-to-r from-zinc-500 via-stone-600 to-zinc-900 transition duration-300 ease-in-out"
        data-test="submit-button"
      >
        Enter
      </Button>

      <Text size="sm" class="text-center mt-2" data-test="terms-and-conditions-text">
        Terms & Conditions
      </Text>
    </div>
  </Container>
</template>


<script setup lang="ts">
import { reactive, computed, watch } from 'vue';
import { z } from 'zod';
import Container from '~/components/organisms/Container.vue';
import Image from '~/components/atoms/Image.vue';
import Text from '~/components/atoms/Text.vue';
import TextInput from '~/components/molecules/TextInput.vue';
import Button from '~/components/atoms/Button.vue';
import CheckboxInput from '~/components/atoms/CheckboxInput.vue';
import { useRouter } from 'nuxt/app';

const router = useRouter();

function getErrorClass(error: string) {
  return error ? 'visible' : 'invisible';
}

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  surname: z.string().min(1, 'Surname is required'),
  email: z.string().email('Invalid email address'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/\d/, 'Password must contain at least one digit')
    .regex(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character'),
  confirmPassword: z.string().min(1, 'Confirm Password is required'),
  termsAccepted: z.boolean().refine(val => val === true, 'You must accept the terms and conditions'),
});

const form = reactive({
  name: '',
  surname: '',
  email: '',
  password: '',
  confirmPassword: '',
  termsAccepted: false,
});

const errors = reactive({
  name: '',
  surname: '',
  email: '',
  password: '',
  confirmPassword: '',
  termsAccepted: ''
});

const passwordError = computed(() => {
  return errors.password;
});

const passwordMatchError = computed(() => {
  return form.confirmPassword && form.password !== form.confirmPassword
    ? 'Passwords do not match.'
    : '';
});

watch(() => form.name, (newValue) => {
  errors.name = schema.shape.name.safeParse(newValue).success ? '' : 'Name is required';
});

watch(() => form.surname, (newValue) => {
  errors.surname = schema.shape.surname.safeParse(newValue).success ? '' : 'Surname is required';
});

watch(() => form.email, (newValue) => {
  errors.email = schema.shape.email.safeParse(newValue).success ? '' : 'Invalid email address';
});

watch(() => form.password, (newValue) => {
  const passwordValidation = schema.shape.password.safeParse(newValue);
  errors.password = passwordValidation.success ? '' : passwordValidation.error?.errors[0]?.message || '';
});

watch(() => form.confirmPassword, (newValue) => {
  errors.confirmPassword = newValue && newValue !== form.password
    ? 'Passwords do not match.'
    : '';
});

watch(() => form.termsAccepted, (newValue) => {
  errors.termsAccepted = newValue ? '' : 'You must accept the terms and conditions';
});

function submitForm() {
  const result = schema.safeParse(form);

  if (!result.success) {
    result.error.errors.forEach(error => {
      const field = error.path[0] as keyof typeof errors;
      errors[field] = error.message;
    });
    return;
  }

  (Object.keys(errors) as Array<keyof typeof errors>).forEach((key) => (errors[key] = ''));
  router.push('/auth/otp');
}
</script>
