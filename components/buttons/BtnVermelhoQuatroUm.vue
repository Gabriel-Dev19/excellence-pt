<template>
  <div>
    <a href="tel:4140637970" class="btn btn-press-numero d-flex justify-content-center fs-24 align-items-center">
      <ion-icon class="mr-2 rotate-telefone fs-24" name="call-outline" /> (41) 4063-7970
    </a>
  </div>
</template>

<style scoped>
.btn-press-numero{
    background-color: var(--vermelho_escuro);
    border-radius: 0 !important;
    color: var(--white);
    padding-top: 9px;
    padding-bottom: 9px;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 17px;
    font-weight: 500;
    letter-spacing: 0.3px;
    transition: all .2s;
    -o-transition: all .2s;
    -moz-transition: all .2s;
    -webkit-transition: all .2s;
    box-shadow: 4px 4px 0px #8f8f8fa4;
    transform: translateX(0px) translateY(0px);
    -o-transform: translateX(0px) translateY(0px);
    -moz-transform: translateX(0px) translateY(0px);
    -webkit-transform: translateX(0px) translateY(0px);
}
.btn-press-numero:hover{
    color: var(--white);
    box-shadow: 0px 0px 0px #8f8f8fa4;
    transform: translateX(4px) translateY(3px);
    -o-transform: translateX(4px) translateY(3px);
    -moz-transform: translateX(4px) translateY(3px);
    -webkit-transform: translateX(4px) translateY(3px);
}
</style>
