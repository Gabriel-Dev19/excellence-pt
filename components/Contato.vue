<template>
  <div id="contato" class="py-90 bg-dark">
    <div class="container">
      <div class="d-flex row border-radius-15 shadow-lg overflow-hidden mx-auto">
        <div class="col-lg-7 col-xl-8 d-flex align-items-center bg-light px-lg-25 py-30">
          <div class="col-12 px-0">
            <div class="d-flex align-items-center">
              <h4 class="mb-0 fw-700">
                Envie sua mensagem
              </h4>
              <ion-icon class="fs-30 ml-10 text-vermelho" name="mail-unread-outline" />
            </div>
            <div v-show="ShowMsgSuccessFloat" class="col-12 mensagem-flutuante">
              <div class="col-12 px-0 d-flex justify-content-center">
                <div class="py-1 bg-success d-flex align-items-center shadow fw-500 justify-content-between text-white col-xl-6 rounded">
                  Mensagem enviada com sucesso, em breve entraremos em contato com você.
                  <button class="btn pr-0 d-flex justify-content-center align-items-center pt-0 pb-0" @click.prevent="CloseMsgSuccess">
                    <i class="fa fa-times text-white fs-20 fw-400" />
                  </button>
                </div>
              </div>
            </div>
            <form autocomplete="off" class="mt-20" @submit.prevent="submit">
              <div v-show="ShowMsgSuccess" class="rounded bg-success py-1 mb-3 px-2 text-white">
                Mensagem enviada com sucesso, em breve entraremos em contato
              </div>
              <div class="d-flex row mx-auto">
                <div class="form-group col-lg px-0">
                  <input v-model="nome" type="text" class="form-control mb-2" placeholder="Nome...">
                  <div v-show="ShowMsgError" v-if="$v.nome.$error" class="error text-left px-2">
                    Este campo é obrigatório, mínimo {{ $v.nome.$params.minLength.min }} letras.
                  </div>
                </div>
                <div class="form-group col-lg ml-lg-3 px-0">
                  <input v-model="email" type="text" class="form-control mb-2" placeholder="E-mail...">
                  <div v-show="ShowMsgError" v-if="$v.email.$error" class="error text-left px-2">
                    Preencha com um e-mail válido
                  </div>
                </div>
              </div>
              <div class="d-flex row mx-auto">
                <div class="form-group col-lg px-0">
                  <input
                    id="numero_telefone"
                    v-model="telefone"
                    v-mask="mask"
                    type="text"
                    class="form-control mb-2"
                    placeholder="Telefone..."
                    @focus="ShowMsgError = true"
                    @keypress="VerificaNumero()"
                    @keyup.backspace="VerificaNumeroDelete()"
                  >
                  <div v-show="ShowMsgError" v-if="$v.telefone.$error" class="error text-left px-2">
                    Coloque um telefone válido
                  </div>
                </div>
                <div class="form-group col-lg ml-lg-3 px-0">
                  <select v-model="tipo_servico" class="form-control mb-2">
                    <option value="">
                      Tipo de serviço...
                    </option>
                    <option value="Investigação conjugal">
                      Investigação conjugal
                    </option>
                    <option value="Investigação empresarial">
                      Investigação empresarial
                    </option>
                    <option value="Investigação política">
                      Investigação política
                    </option>
                    <option value="Provas para advogados">
                      Provas para advogados
                    </option>
                    <option value="Pessoas desaparecidas">
                      Pessoas desaparecidas
                    </option>
                    <option value="Celular VIP">
                      Celular VIP
                    </option>
                    <option value="Curso de detective privado">
                      Curso de detective privado
                    </option>
                  </select>
                  <div v-show="ShowMsgError" v-if="$v.tipo_servico.$error" class="error text-left px-2">
                    Selecione o serviço que deseja
                  </div>
                </div>
              </div>
              <div class="d-flex row mx-auto">
                <div class="form-group col-lg px-0">
                  <input v-model="cidade" type="text" class="form-control mb-2" placeholder="Cidade...">
                  <div v-show="ShowMsgError" v-if="$v.cidade.$error" class="error text-left px-2">
                    Preencha com sua cidade
                  </div>
                </div>
                <div class="form-group col-lg ml-lg-3 px-0">
                  <input v-model="estado" type="text" class="form-control mb-2" placeholder="Estado...">
                  <div v-show="ShowMsgError" v-if="$v.estado.$error" class="error text-left px-2">
                    Preencha com seu estado
                  </div>
                </div>
              </div>
              <div class="d-flex row mx-auto">
                <div class="form-group col-lg px-0">
                  <input v-model="data_contato" type="text" class="form-control mb-2" placeholder="Data para contato...">
                  <div v-show="ShowMsgError" v-if="$v.data_contato.$error" class="error text-left px-2">
                    Coloque uma data para retorno
                  </div>
                </div>
                <div class="form-group col-lg ml-lg-3 px-0">
                  <input v-model="horario" type="text" class="form-control mb-2" placeholder="Horário para contato...">
                  <div v-show="ShowMsgError" v-if="$v.horario.$error" class="error text-left px-2">
                    Coloque um horário para retorno
                  </div>
                </div>
              </div>
              <div class="form-group">
                <input v-model="mensagem" type="text" class="form-control mb-2" placeholder="Explique seu caso...">
                <div v-show="ShowMsgError" v-if="$v.mensagem.$error" class="error text-left px-2">
                  Digite uma mensagem
                </div>
              </div>
              <div class="form-group mt-4 row mx-auto d-flex">
                <div class="custom-control custom-radio">
                  <input id="pessoa_fisica" v-model="tipo_pessoa" type="radio" value="Pessoa física" class="custom-control-input cursor-pointer">
                  <label class="custom-control-label cursor-pointer fs-17" for="pessoa_fisica">Pessoa física</label>
                </div>
                <div class="custom-control ml-3 custom-radio">
                  <input id="pessoa_juridica" v-model="tipo_pessoa" type="radio" value="Pessoa jurídica" class="custom-control-input cursor-pointer">
                  <label class="custom-control-label cursor-pointer fs-17" for="pessoa_juridica">Pessoa jurídica</label>
                </div>
                <div class="col-12 mt-2 px-0">
                  <div v-show="ShowMsgError" v-if="$v.tipo_pessoa.$error" class="error text-left px-2">
                    Selecione o tipo de pessoa
                  </div>
                </div>
              </div>
              <button type="submit" class="btn btn-press-vermelho mt-4 d-flex align-items-center">
                <ion-icon class="fs-20 mr-2" name="send-outline" /> Enviar
              </button>
            </form>
          </div>
        </div>
        <div class="col-lg-5 col-xl-4 d-flex align-items-center bg-vermelho-pouco-escuro px-lg-30 py-30">
          <div class="col-12 px-0">
            <h4 class="text-white text-xs-center text-sm-center text-lg-center fw-600">
              Informações de contato
            </h4>
            <div class="mt-30 d-flex justify-content-xs-center justify-content-sm-center justify-content-lg-center row mx-auto">
              <a href="tel:+351913342032" class="d-flex row no-underline col-sm-12 col-md-12 justify-content-xs-center justify-content-sm-center justify-content-lg-center col-lg-12 pb-10 px-0 align-items-center mx-0">
                <ion-icon class="mr-1 text-white fs-25 rotate-telefone" name="call-outline" />
                <div class="text-white">
                  <div class="fs-16 text-center fw-600">Entre em Contacto</div>
                  <div class="fs-14 text-center fw-500">+351 913 342 032</div>
                </div>
              </a>
              <div class="mt-35 d-flex flex-column">
                <a href="https://www.facebook.com/Excellence-Detetives-1046988452361673" class="d-flex align-items-center fs-16 fw-600 text-white" target="_blank" rel="nopenner noreferrer">
                  <ion-icon class="text-white fs-27 pr-2" name="logo-facebook" /> Facebook
                </a>
                <a href="https://www.instagram.com/excellencedetetives/" class="d-flex align-items-center mt-3 fs-16 fw-600 text-white" target="_blank" rel="nopenner noreferrer">
                  <ion-icon class="text-white fs-27 pr-2" name="logo-instagram" /> Instagram
                </a>
                <a href="https://br.pinterest.com/excellencedetetives/_saved/" class="d-flex align-items-center mt-3 fs-16 fw-600 text-white" target="_blank" rel="nopenner noreferrer">
                  <ion-icon class="text-white fs-27 pr-2" name="logo-pinterest" /> Pinterest
                </a>
                <a href="https://www.youtube.com/channel/UCj1qP7tCKe9lCSZZApw835A" class="d-flex align-items-center mt-3 fs-16 fw-600 text-white" target="_blank" rel="nopenner noreferrer">
                  <ion-icon class="text-white fs-27 pr-2" name="logo-youtube" /> Youtube
                </a>
                <a href="https://twitter.com/Excellencedet" class="d-flex align-items-center mt-3 fs-16 fw-600 text-white" target="_blank" rel="nopenner noreferrer">
                  <ion-icon class="text-white fs-27 pr-2" name="logo-twitter" /> Twitter
                </a>
              </div>
              <div class="mt-35 d-flex justify-content-xs-center justify-content-sm-center justify-content-lg-center col-sm-10 px-0">
                <span class="d-flex text-white fs-14 align-items-center">
                  <ion-icon class="fs-xs-30 fs-sm-30 fs-md-30 fs-lg-38 mr-2 text-white" style="margin-top: -2px;" name="location-outline" />
                  Estados de SC, PR, RS, SP, RJ, MS, GO, DF e MG
                </span>
              </div>
              <a href="mailto:contacto@exellencedetectives.pt" target="_blank" rel="noppener noreferrer" class="d-flex justify-content-xs-center justify-content-sm-center justify-content-lg-center fs-14 text-white no-underline row no-underline mt-35 col-12 px-0 align-items-center mx-0">
                <ion-icon class="mr-10 text-white fs-25" style="margin-top: -1px;" name="mail-outline" />
                contacto@exellencedetectives.pt
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from '../node_modules/vue'
import axios from '../node_modules/axios'
import { required, minLength, email } from '../node_modules/vuelidate/lib/validators'
import { VueMaskDirective } from '../node_modules/v-mask'
Vue.directive('mask', VueMaskDirective)
export default {
  data () {
    return {
      nome: '',
      email: '',
      telefone: '',
      cidade: '',
      estado: '',
      tipo_servico: '',
      horario: '',
      data_contato: '',
      mensagem: '',
      tipo_pessoa: '',
      ShowMsgSuccess: false,
      ShowMsgSuccessFloat: false,
      ShowMsgError: true,
      mask: '(##) #####-####'
    }
  },
  validations: {
    nome: {
      required,
      minLength: minLength(3)
    },
    email: {
      email,
      required
    },
    telefone: {
      required,
      minLength: minLength(14)
    },
    cidade: {
      required
    },
    estado: {
      required
    },
    tipo_servico: {
      required
    },
    horario: {
      required
    },
    data_contato: {
      required
    },
    mensagem: {
      required
    },
    tipo_pessoa: {
      required
    }
  },
  methods: {
    CloseMsgSuccess () {
      this.ShowMsgSuccess = true
      this.ShowMsgSuccessFloat = false
    },
    submit () {
      this.$v.$touch()
      if (this.$v.$invalid === false) {
        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
        axios.post('https://excellencedetectives.pt/envio.php', JSON.stringify({
          nome: this.nome,
          email: this.email,
          telefone: this.telefone,
          cidade: this.cidade,
          estado: this.estado,
          tipo_servico: this.tipo_servico,
          horario: this.horario,
          data_contato: this.data_contato,
          mensagem: this.mensagem,
          tipo_pessoa: this.tipo_pessoa
        }))
          .then(
            setTimeout(() => {
              this.ShowMsgSuccessFloat = true
              setTimeout(() => {
                this.ShowMsgSuccess = true
                this.ShowMsgSuccessFloat = false
              }, 4000)
              this.ShowMsgError = false
              this.nome = ''
              this.email = ''
              this.telefone = ''
              this.cidade = ''
              this.estado = ''
              this.tipo_servico = ''
              this.horario = ''
              this.data_contato = ''
              this.mensagem = ''
              this.tipo_pessoa = ''
            }, 300)
          )
      }
    },
    VerificaNumero () {
      if (window.innerWidth > 992) {
        if (this.telefone.length === 14) {
          this.mask = '(##) # ####-####'
        }
        if (this.telefone.length <= 13) {
          this.mask = '(##) ####-####'
        }
      }
    },
    VerificaNumeroDelete () {
      if (window.innerWidth > 992) {
        if (this.telefone.length <= 15) {
          this.mask = '(##) ####-####'
        }
      }
    }
  }
}
</script>
<style scoped>
  input, select{
    border-radius: 0 !important;
    border-left: none;
    border-top: none;
    border-right: none;
    background: none;
    padding-bottom: 1px;
    border-bottom: 1px solid #6d6d6ddb;
  }
  input:focus, select:focus{
    border-bottom: 2px solid var(--vermelho_pouco_escuro);
    box-shadow: none;
    background: none;
  }
  select{
    padding-left: 8px;
  }
  .mensagem-flutuante{
    position: fixed;
    top: 150px;
    left: 0;
    z-index: 1080;
  }
  .error{
      color: #ffffff;
      font-size: 13px;
      margin-top: 3px;
      background-color: #ff4d4d;
      display: inline-block;
      border-radius: 10px;
  }
</style>
