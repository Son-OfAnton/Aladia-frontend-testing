<template>
  <Container
    class="flex flex-col items-center justify-center min-h-screen min-w-full bg-gray-900"
    data-test="container"
  >
    <div
      class="flex flex-col gap-y-2 bg-black text-white rounded-lg shadow-lg p-8 max-h-screen max-w-md"
      data-test="form-container"
    >
      <div class="flex items-center justify-center mb-6" data-test="logo-section">
        <Image size="md" src="/img/aladiaLogo.png" alt="Logo" data-test="logo" />
        <div class="ml-4">
          <Text size="md" weight="semibold" data-test="welcome-message">Welcome to Aladia,</Text>
          <Text class="text-gray-300" size="sm" weight="light" data-test="welcome-subtext">
            Create or access your account from here
          </Text>
        </div>
      </div>

      <Text size="sm" weight="normal" class="mb-2 text-center" data-test="email-prompt">
        Enter your email
      </Text>
      <TextInput v-model="form.email" id="email" placeholder="Email" data-test="email-input" />
      <Text :class="getErrorClass(errors.email)" class="text-red-500 text-sm h-1" data-test="email-error">
        {{ emailError }}
      </Text>

      <Button
        variant="primary"
        class="w-full mt-4 border border-white hover:border-2 hover:bg-neutral-900 bg-gradient-to-r from-zinc-500 via-stone-600 to-zinc-900 transition duration-300 ease-in-out"
        @click="handleLogin"
        data-test="login-button"
      >
        Enter
      </Button>

      <div class="flex gap-x-2 justify-center items-center my-4" data-test="separator-section">
        <Separator data-test="separator-left" />
        <Text size="sm" data-test="separator-text">Or</Text>
        <Separator data-test="separator-right" />
      </div>

      <div class="flex flex-col gap-y-2" data-test="social-buttons">
        <Button class="border border-white hover:bg-neutral-900" leading="mdi:google" data-test="google-button">
          Continue with Google
        </Button>
        <Button class="border border-white hover:bg-neutral-900" leading="mdi:facebook" data-test="facebook-button">
          Continue with Facebook
        </Button>
        <Button class="border border-white hover:bg-neutral-900" leading="mdi:apple" data-test="apple-button">
          Continue with Apple
        </Button>
      </div>

      <Text size="sm" class="text-center mt-4" data-test="terms-conditions">
        Terms & Conditions
      </Text>
    </div>
  </Container>
</template>


<script setup lang="ts">
import { computed, reactive, watch } from 'vue';
import { z } from 'zod';
import Container from '~/components/organisms/Container.vue';
import Image from '~/components/atoms/Image.vue';
import Text from '~/components/atoms/Text.vue';
import TextInput from '~/components/molecules/TextInput.vue';
import Button from '~/components/atoms/Button.vue';
import Separator from '~/components/atoms/Separator.vue';


function getErrorClass(error: string) {
  return error ? 'visible' : 'invisible';
}

const schema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
});

const form = reactive({
  email: '',
});

const errors = reactive({
  email: '',
});

const emailError = computed(() => errors.email);

watch(
  () => form.email,
  (newValue) => {
    const validationResult = schema.safeParse({ email: newValue });
    if (!validationResult.success) {
      errors.email = validationResult.error.errors[0].message;
    } else {
      errors.email = '';
    }
  }
);

import { useRouter } from 'nuxt/app';

const router = useRouter();

function handleLogin() {
  const validationResult = schema.safeParse(form);
  if (!validationResult.success) {
    errors.email = validationResult.error.errors[0].message;
    return;
  }
  router.push('/auth/signup');
}
</script>
