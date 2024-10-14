<template>
  <Container
    class="flex flex-col items-center justify-center min-h-screen min-w-full bg-gray-900"
    data-test="container"
  >
    <div
      class="flex flex-col justify-center items-center gap-y-4 bg-black text-white rounded-lg shadow-lg p-8 max-h-screen max-w-md"
      data-test="otp-form-container"
    >
      <Image
        size="sm"
        src="/img/aladiaLogo.png"
        alt="Logo"
        data-test="logo"
      />
      <div class="flex flex-col gap-y-2 text-center" data-test="otp-info">
        <Text size="md" weight="semibold" data-test="user-name">John Doe</Text>
        <Text class="text-gray-300" size="sm" weight="light" data-test="thank-you-message">Thank you for joining Aladia</Text>
        <Text class="text-gray-300" size="sm" data-test="otp-instructions">
          Please enter below the 6-digit code we sent you through your registration email
        </Text>
      </div>

      <div class="flex gap-x-6" data-test="otp-inputs">
        <template v-for="i in 6" :key="i">
          <TextInput
            v-model="otp[i - 1]"
            ref="otpInput"
            :id="'otp' + i"
            size="lg"
            class="text-center w-20"
            maxlength="1"
            @input="onOtpInput(i - 1)"
            @keydown.backspace="onBackspace(i - 1, $event)"
            :data-test="'otp-' + i"
          />
        </template>
      </div>
      
      <Text v-if="errorMessage" class="text-red-500" data-test="error-message">{{ errorMessage }}</Text>

      <Button class="text-gray-300 no-underline text-sm" variant="link" data-test="resend-link">You didn't receive any email?</Button>
      <Button class="bg-gradient-to-r from-zinc-500 via-stone-600 to-zinc-900" @click="submitOtp" data-test="submit-button">Enter</Button>

    </div>
  </Container>
</template>


<script setup lang="ts">
import { reactive, ref, nextTick } from 'vue';
import Container from '~/components/organisms/Container.vue';
import Image from '~/components/atoms/Image.vue';
import Text from '~/components/atoms/Text.vue';
import TextInput from '~/components/molecules/TextInput.vue';
import Button from '~/components/atoms/Button.vue';
import { useRouter } from 'nuxt/app';

const router = useRouter();
const otp = reactive(Array(6).fill(''));
const errorMessage = ref('');
const correctOtp = '123456';

function onOtpInput(index: number) {
  if (otp[index].length === 1 && index < 5) {
    focusNextField(index + 1);
  }
}

function onBackspace(index: number, event: KeyboardEvent) {
  if (event.key === 'Backspace' && otp[index] === '' && index > 0) {
    focusNextField(index - 1);
  }
}

function focusNextField(index: number) {
  nextTick(() => {
    const nextField = (document.getElementById(`otp${index + 1}`) as HTMLElement);
    if (nextField) {
      nextField.focus();
    }
  });
}

function submitOtp() {
  const isOtpComplete = otp.every((digit) => digit !== '');

  if (!isOtpComplete) {
    errorMessage.value = 'Please fill all 6 digits of the OTP.';
    return;
  }

  if (otp.join('') !== correctOtp) {
    errorMessage.value = 'Invalid OTP. Please try again.';
    return;
  }

  router.push('/auth/signupSuccess');

}
</script>
