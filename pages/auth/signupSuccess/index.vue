<template>
  <Container
    class="flex flex-col items-center justify-center min-h-screen min-w-full bg-gray-900"
    data-test="container"
  >
    <div
      class="flex flex-col items-center justify-around gap-y-4 bg-black text-white rounded-lg shadow-lg p-8 min-h-screen w-96"
      data-test="thank-you-container"
    >
      <div class="text-center" data-test="thank-you-text">
        <Text size="md" weight="semibold" data-test="user-name">John Doe</Text>
        <Text class="text-gray-300" size="sm" weight="light" data-test="thank-you-message">Thank you for joining Aladia</Text>
      </div>

      <Image size="md" src="/img/aladiaLogo.png" alt="Logo" data-test="logo" />

      <Button class="bg-gradient-to-r from-zinc-500 via-stone-600 to-zinc-900" data-test="enter-marketplace-button">
        Enter Marketplace
      </Button>

    </div>
  </Container>
</template>

<script setup lang="ts">
import Container from '~/components/organisms/Container.vue';
import Image from '~/components/atoms/Image.vue';
import Text from '~/components/atoms/Text.vue';
import Button from '~/components/atoms/Button.vue';
</script>