<template>
  <div>
    <a href="tel:+351913342032" class="btn btn-press-vermelho d-flex justify-content-center align-items-center">
      <ion-icon class="mr-2 rotate-telefone fs-22" name="call-outline" /> {{ nameBtn }}
    </a>
  </div>
</template>
<script>
export default {
  props: {
    nameBtn: {
      type: String,
      required: false,
      default: 'Nos faça uma ligação'
    }
  }
}
</script>
