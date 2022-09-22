<template>
  <div class="container shadow-lg border-radius-10 px-0 overflow-hidden d-flex align-items-start row mx-auto">
    <div class="col bg-vermelho-pouco-escuro pt-0 pb-3 px-0 overflow-y-scroll">
      <div class="col-3 d-xl-block d-xs-none d-sm-none float-left mr-20 mb-20 border-radius-10 overflow-hidden px-0 bg-grafite">
        <button class="btn col-12 border-radius-0 navigate border-bottom py-20 d-flex align-items-center pl-3 text-uppercase fs-14 fw-500 text-white" @click.prevent="InvestigacaoEmpresarial">
          <ion-icon class="fs-26 text-vermelho-escuro mr-2" style="margin-top: -5px;" name="bar-chart-outline" />
          Casos empresariais
        </button>
        <button class="btn col-12 border-radius-0 navigate border-bottom py-20 d-flex align-items-center pl-3 text-uppercase fs-14 fw-500 text-white" @click.prevent="InvestigacaoConjugal">
          <ion-icon class="fs-26 text-vermelho-escuro  mr-2" style="margin-top: -3px;" name="heart-dislike-outline" />
          Casos conjugais
        </button>
        <button class="btn col-12 border-radius-0 border-bottom navigate py-20 d-flex align-items-center pl-3 text-uppercase fs-14 fw-500 text-white" @click.prevent="InvestigacaoPolitica">
          <ion-icon class="fs-26 text-vermelho-escuro mr-2" style="margin-top: -3px;" name="cash-outline" />
          Casos políticos
        </button>
        <button class="btn col-12 border-radius-0 navigate border-bottom py-20 d-flex align-items-center pl-3 text-uppercase fs-14 fw-500 text-white" @click.prevent="ProvasAdvogados">
          <ion-icon class="fs-26 mr-2 text-vermelho-escuro" style="margin-top: -3px;" name="reader-outline" />
          Provas para advogados
        </button>
        <button class="btn col-12 border-radius-0 navigate border-bottom py-20 d-flex align-items-center pl-3 text-uppercase fs-14 fw-500 text-white" @click.prevent="PessoasDesaparecidas">
          <ion-icon class="fs-26 text-vermelho-escuro mr-2" style="margin-top: -3px;" name="compass-outline" />
          Pessoas desaparecidas
        </button>
        <button class="btn col-12 border-radius-0 navigate py-20 d-flex align-items-center pl-3 text-uppercase fs-14 fw-500 text-white" @click.prevent="CelularEspiao">
          <ion-icon class="fs-26 text-vermelho-escuro  mr-2" style="margin-top: -3px;" name="phone-portrait-outline" />
          Celular VIP
        </button>
        <button class="btn col-12 border-radius-0 py-20 bg-vermelho-pouco-escuro position-relative d-flex align-items-center pl-3 text-uppercase fs-14 fw-500 text-white" @click.prevent="CursoDetetive">
          <ion-icon class="fs-26 text-white mr-2" style="margin-top: -2px;" name="school-outline" />
          Curso de detective
          <div class="bolinha-shadow-top" />
          <div class="bolinha-shadow-bottom" />
        </button>
        <button class="btn col-12 border-radius-0 navigate py-20 d-flex align-items-center pl-3 text-uppercase fs-14 fw-500 text-white" @click.prevent="TodosOsServicos">
          <ion-icon class="fs-26 text-vermelho-escuro mr-2" style="margin-top: -2px;" name="grid-outline" />
          Todos os serviços
        </button>
      </div>
      <div class="px-3 pt-3">
        <div class="col-md-5 col-lg-4 shadow ml-md-3 mb-xs-50 mb-sm-50 mb-md-15 px-0 border-radius-10 overflow-hidden float-md-right">
          <ContactServicos
            :slot-img="require('../../../assets/img/img-curso.webp')"
            :slot-alt="'Curso de detective privado para todo o Brasil'"
          />
        </div>
        <h3 class="text-white text-xs-center mb-3 pt-20 fw-600 text-uppercase text-sm-center text-md-left">
          Curso de detective privado
        </h3>
        <p class="text-white text-xs-justify text-sm-justify text-md-left">
          Venha se especializar com quem é especialista no ramo de Investigação Particular.
          Realizando nosso Curso de Detetive Particular, você estará recebendo online um material
          de qualidade para estudar em suas horas vagas, sem sair de casa e tudo dentro do seu próprio ritmo.
        </p>
        <h4 class="text-white text-xs-center mb-3 pt-20 fw-600 text-uppercase text-sm-center text-md-left">
          Apostila didática completa
        </h4>
        <p class="text-white text-xs-justify text-sm-justify text-md-left">
          Nossa apostila foi baseada em conhecimento adquirido em mais de 25 anos de atuação no ramo da investigação privada.
          Preparamos para você um material simples e objetivo, para você tirar todas as suas dúvidas
          e saber como se tornar um detective privado de sucesso.
        </p>
        <h4 class="text-white text-xs-center mb-3 pt-20 fw-600 text-uppercase text-sm-center text-md-left">
          Certificado de conclusão
        </h4>
        <p class="text-white text-xs-justify text-sm-justify text-md-left">
          Após conclusão do curso, você receberá o certificado de Detetive
          Particular Profissional impresso e autenticado por nossa empresa.
        </p>
        <h4 class="text-white text-xs-center mb-3 pt-20 fw-600 text-uppercase text-sm-center text-md-left">
          Porta documentos e carteira de detective privado
        </h4>
        <p class="text-white text-xs-justify text-sm-justify text-md-left">
          Além do certificado, ao concluir o curso receberá também a Carteira
          e Porta Documentos de Detetive Particular Profissional.
        </p>
        <h4 class="text-white text-xs-center mb-3 pt-20 fw-600 text-uppercase text-sm-center text-md-left">
          Como adquirir nosso curso?
        </h4>
        <p class="text-white text-xs-justify text-sm-justify text-md-left">
          Iremos lhe oferecer o curso de duas formas:
        </p>
        <div class="d-flex mt-60 row mx-auto">
          <div class="borda-white col-lg shadow position-relative shadow px-3 py-4 border-radius-20">
            <div id="icon-curso" class="bg-vermelho">
              <ion-icon class="fs-55 text-white mr-2" name="book-outline" />
            </div>
            <h5 class="text-white mt-15">
              Versão impressa
            </h5>
            <p class="text-white mb-0 fs-sm-15">
              Enviaremos para sua casa o material didático, impresso em papel colchê 180grs,
              com acabamento de primeira linha e você terá em suas mãos a melhor apostila sobre Detetive Particular para estudar no
              seu tempo livre.
            </p>
            <div class="d-flex mt-20">
              <button class="btn btn-press-white" @click.prevent="$root.$emit('ShowModalWhatsApp')">
                <ion-icon class="fs-22 mr-2" style="margin-bottom: -7px;" name="book-outline" /> Comprar a partir de R$ 699,00
              </button>
            </div>
          </div>
          <div class="borda-white col-lg shadow mt-xs-60 mt-sm-60 mt-lg-0 ml-lg-3 position-relative shadow px-3 py-4 border-radius-20">
            <div id="icon-curso" class="bg-vermelho">
              <ion-icon class="fs-55 text-white mr-2" name="desktop-outline" />
            </div>
            <h5 class="text-white mt-15">
              Versão online
            </h5>
            <p class="text-white mb-0 fs-sm-15">
              Enviaremos esta versão para seu e-mail assim que o pagamento for concluído.
              Desta forma você terá em suas mãos o melhor conteúdo de investigação privada
              para estudar de acordo com sua disponibilidade.
            </p>
            <div class="d-flex mt-20">
              <button class="btn btn-press-white" @click.prevent="$root.$emit('ShowModalWhatsApp')">
                <ion-icon class="fs-22 mr-2" style="margin-bottom: -7px;" name="desktop-outline" /> Comprar a partir de R$ 599,00
              </button>
            </div>
          </div>
        </div>
        <div class="d-flex mt-3 row mx-auto">
          <div class="d-flex col-xl px-0 row mx-auto">
            <div class="col-md borda-white shadow border-radius-10 py-20">
              <div class="d-flex justify-content-center">
                <ion-icon class="fs-55 text-white mr-2" name="card-outline" />
              </div>
              <h6 class="text-center mt-10 mb-1 text-white text-uppercase fw-600">
                Investimento
              </h6>
              <p class="mb-0 text-white text-center fs-13">
                O valor mínimo de investimento no curso de Detetive Particular é de apenas R$ 499,00,
                e você recebe o material completo.
              </p>
            </div>
            <div class="col-md borda-white mt-xs-3 mt-sm-3 mt-md-0 shadow border-radius-10 ml-md-3 py-20">
              <div class="d-flex justify-content-center">
                <ion-icon class="fs-55 text-white mr-2" name="wallet-outline" />
              </div>
              <h6 class="text-center mt-10 mb-1 text-white text-uppercase fw-600">
                Pagamento
              </h6>
              <p class="mb-0 text-white text-center fs-13">
                Facilitamos seu pagamento através de cartões de crédito, boleto bancário,
                depósito, Pix, PagSeguro, PayPal e muito mais!
              </p>
            </div>
          </div>
          <div class="d-flex col-xl px-0 mt-xs-3 mt-sm-3 mt-xl-0 ml-xl-3 row mx-auto">
            <div class="col-md borda-white shadow border-radius-10 py-20">
              <div class="d-flex justify-content-center">
                <ion-icon class="fs-55 text-white mr-2" name="earth-outline" />
              </div>
              <h6 class="text-center mt-10 mb-1 text-white text-uppercase fw-600">
                Facilidade de estudo
              </h6>
              <p class="mb-0 text-white text-center fs-13">
                Estude nos seus horários sem sair de casa com nosso material online e impresso.
                Seja qual for sua necessidade iremos lhe atender
              </p>
            </div>
            <div class="col-md borda-white mt-xs-3 mt-sm-3 mt-md-0 shadow border-radius-10 ml-md-3 py-20">
              <div class="d-flex justify-content-center">
                <ion-icon class="fs-55 text-white mr-2" name="star-outline" />
              </div>
              <h6 class="text-center mt-10 mb-1 text-white text-uppercase fw-600">
                O melhor material
              </h6>
              <p class="mb-0 text-white text-center fs-13">
                Nosso material foi elaborado por detectives experientes com mais de 25 anos de experiência
                na área de investigação
              </p>
            </div>
          </div>
        </div>
        <h4 class="text-white text-xs-center mb-3 pt-20 mt-30 fw-600 text-uppercase text-sm-center text-md-left">
          A Agência Excellence Detetives
        </h4>
        <p class="text-white text-xs-justify text-sm-justify text-md-left">
          A Excellence Agência de Detetives Particulares é uma empresa que atua no mercado da investigação
          privada nos últimos 25 anos. Contamos com equipe altamente capacitada para trabalhar nas mais variadas
          áreas da investigação privada, utilizando métodos modernos para facilitar o andamento de cada caso.
          Como características levamos a discrição, eficiência, competência e atendimento individualizado para cada cliente.
        </p>
        <p class="text-white text-xs-justify text-sm-justify text-md-left">
          Os detectives profissionais trabalham com que há de mais moderno na tecnologia de investigação privada
          e faremos o possível para que cada caso seja elucidado de forma satisfatória para nossos clientes.
        </p>
        <p class="text-white text-xs-justify text-sm-justify text-md-left">
          Após anos nos dedicando na elucidação dos casos mais variados, decidimos colocar tudo que aprendemos neste material
          didático e compartilhar com você todo o nosso conhecimento, e assim surgiu nosso Curso de Detetive Particular.
          Em nossa apostila você irá encontrar tudo o que precisa saber para ser um grande profissional a área de investigação
          privado, e tudo isso com preço acessível e pagamento facilitado com o seu orçamento.
        </p>
        <h4 class="text-white text-xs-center mb-3 pt-20 fw-600 text-uppercase text-sm-center text-md-left">
          Perguntas Frequentes
        </h4>
        <div class="bg-cinza border-radius-20">
          <button v-b-toggle.collapse-1 class="btn text-left fw-500 d-flex align-items-center justify-content-between px-20 col-12">
            O curso também é presencial ou apenas na modalidade a distância?
            <i class="fa fa-sort-down fs-25" style="margin-top: -8px" />
          </button>
          <b-collapse id="collapse-1" class="px-20">
            <p class="mb-0 pt-2 pb-3">
              O nosso Curso de Detetive Particular é ministrado somente à distância e por meio de apostila,
              que é fornecida ao aluno. Neste curso o aluno terá a comodidade de aprender tudo sobre investigação
              sem sair de casa, usando suas horas livres e finais de semana, dentro do seu próprio ritmo e
              onde desejar. Além disso poderá contar com a ajuda de nossos profissionais se houver alguma
              dúvida no decorrer de seus estudos.
            </p>
          </b-collapse>
        </div>
        <div class="bg-cinza mt-3 border-radius-20">
          <button v-b-toggle.collapse-2 class="btn text-left fw-500 d-flex align-items-center justify-content-between px-20 col-12">
            Após a finalização do curso os alunos recebem indicações para trabalhos?
            <i class="fa fa-sort-down fs-25" style="margin-top: -8px" />
          </button>
          <b-collapse id="collapse-2" class="px-20">
            <p class="mb-0 pt-2 pb-3">
              Nossa própria Agência de Investigação tem carências de profissionais para atuação em todo o território nacional,
              sendo que os currículos dos alunos certificados ficam arquivados no banco de dados de nosso Setor de Recursos
              Humanos, para possíveis contratações.
            </p>
          </b-collapse>
        </div>
        <div class="bg-cinza mt-3 border-radius-20">
          <button v-b-toggle.collapse-3 class="btn text-left fw-500 d-flex align-items-center justify-content-between px-20 col-12">
            O que recebo quando finalizar o curso de detective?
            <i class="fa fa-sort-down fs-25" style="margin-top: -8px" />
          </button>
          <b-collapse id="collapse-3" class="px-20">
            <p class="mb-0 pt-2 pb-3">
              O Certificado de Conclusão é emitido havendo um acerto mínimo de 70% das questões da prova.
            </p>
          </b-collapse>
        </div>
        <div class="bg-cinza mt-3 border-radius-20">
          <button v-b-toggle.collapse-4 class="btn text-left fw-500 d-flex align-items-center justify-content-between px-20 col-12">
            Como o pagamento pode ser feito?
            <i class="fa fa-sort-down fs-25" style="margin-top: -8px" />
          </button>
          <b-collapse id="collapse-4" class="px-20">
            <p class="mb-0 pt-2 pb-3">
              Aceitamos os cartões de crédito, boleto bancário e também em depósito em conta
              corrente pessoa física com desconto, consulte-nos para mais informações.
            </p>
          </b-collapse>
        </div>
        <div class="bg-cinza mt-3 border-radius-20">
          <button v-b-toggle.collapse-5 class="btn text-left fw-500 d-flex align-items-center justify-content-between px-20 col-12">
            Quanto ganha um detective privado?
            <i class="fa fa-sort-down fs-25" style="margin-top: -8px" />
          </button>
          <b-collapse id="collapse-5" class="px-20">
            <p class="mb-0 pt-2 pb-3">
              Dependendo do seu fluxo de trabalho o detective pode alcançar remunerações de R$ 15.000 á R$ 20.000
            </p>
          </b-collapse>
        </div>
        <h4 id="inscricao-curso-" class="text-white text-xs-center mb-3 pt-20 mt-20 fw-600 text-uppercase text-sm-center text-md-left">
          Faça sua inscrição em nosso curso de detective
        </h4>
        <div class="bg-light shadow py-20 border-radius-20 px-3">
          <div v-show="ShowMsgSuccessFloat" class="col-12 mensagem-flutuante">
            <div class="col-12 px-0 d-flex justify-content-center">
              <div class="py-1 bg-success d-flex align-items-center shadow fw-500 justify-content-between text-white col-xl-6 rounded">
                Inscrição concluída com sucesso, em breve entraremos em contato com você.
                <button class="btn pr-0 d-flex justify-content-center align-items-center pt-0 pb-0" @click.prevent="CloseMsgSuccess">
                  <i class="fa fa-times text-white fs-20 fw-400" />
                </button>
              </div>
            </div>
          </div>
          <form autocomplete="off" @submit.prevent="submit">
            <div v-show="ShowMsgSuccess" class="rounded bg-success py-1 mb-3 px-2 text-white">
              Inscrição concluída com sucesso, em breve entraremos em contato
            </div>
            <div class="d-flex row mx-auto">
              <div class="form-group col-lg px-0">
                <input v-model="nome_curso" type="text" class="form-control col-12" placeholder="Nome" @focus="ShowMsgError = true">
                <div v-show="ShowMsgError" v-if="$v.nome_curso.$error" class="error text-left px-2">
                  Este campo é obrigatório, mínimo {{ $v.nome_curso.$params.minLength.min }} letras.
                </div>
              </div>
              <div class="form-group col-lg mx-lg-3 px-0">
                <input v-model="email_curso" type="text" class="form-control col-12" placeholder="E-mail" @focus="ShowMsgError = true">
                <div v-show="ShowMsgError" v-if="$v.email_curso.$error" class="error text-left px-2">
                  Este campo é obrigatório.
                </div>
              </div>
              <div class="form-group col-lg px-0">
                <input
                  v-model="telefone_curso"
                  v-mask="mask"
                  type="text"
                  class="form-control col-12"
                  placeholder="Telefone"
                  @focus="ShowMsgError = true"
                  @keypress="VerificaNumero()"
                  @keyup.backspace="VerificaNumeroDelete()"
                >
                <div v-show="ShowMsgError" v-if="$v.telefone_curso.$error" class="error text-left px-2">
                  Este campo é obrigatório.
                </div>
              </div>
            </div>
            <div class="d-flex row mx-auto">
              <div class="form-group col-lg px-0">
                <select v-model="tipo_curso" class="form-control col-12" @focus="ShowMsgError = true">
                  <option value="" disabled selected>
                    Modelo do curso...
                  </option>
                  <option value="Versão impressa">
                    Versão impressa
                  </option>
                  <option value="Versão online">
                    Versão online
                  </option>
                </select>
                <div v-show="ShowMsgError" v-if="$v.tipo_curso.$error" class="error text-left px-2">
                  Este campo é obrigatório.
                </div>
              </div>
              <div class="form-group col-lg ml-lg-3 px-0">
                <input v-model="mensagem_curso" type="text" class="form-control col-12" placeholder="Escreva uma mensagem" @focus="ShowMsgError = true">
                <div v-show="ShowMsgError" v-if="$v.mensagem_curso.$error" class="error text-left px-2">
                  Este campo é obrigatório.
                </div>
              </div>
            </div>
            <button type="submit" class="btn mt-10 btn-press-vermelho">
              <ion-icon class="fs-20 mr-1 text-white" style="margin-bottom: -5px;" name="paper-plane-outline" /> Inscrever-se
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from '../../../node_modules/vue'
import ContactServicos from '../../../components/parts/ContactServicos.vue'
import { required, minLength, email } from '../../../node_modules/vuelidate/lib/validators'
import { VueMaskDirective } from '../../../node_modules/v-mask'
import axios from '../../../node_modules/axios'
Vue.directive('mask', VueMaskDirective)
export default {
  components: { ContactServicos },
  layout: 'LayoutServicos',
  data () {
    return {
      nome_curso: '',
      email_curso: '',
      telefone_curso: '',
      tipo_curso: '',
      mensagem_curso: '',
      ShowMsgSuccess: false,
      ShowMsgSuccessFloat: false,
      ShowMsgError: true,
      mask: '(##) ####-####'
    }
  },
  validations: {
    nome_curso: {
      required,
      minLength: minLength(3)
    },
    email_curso: {
      email,
      required
    },
    telefone_curso: {
      required,
      minLength: minLength(14)
    },
    tipo_curso: {
      required
    },
    mensagem_curso: {
      required
    }
  },
  head: {
    title: 'Excellence - Curso de detective privado - A Excellence detectives oferece um curso completo de detective privado com certificado e credencial de detective privado'
  },
  mounted () {
    if (window.location.href === 'https://excellencedetectives.pt/servicos/curso-de-detective-privado/#servicos') {
      this.$smoothScroll({
        scrollTo: document.getElementById('servicos'),
        duration: 500,
        offset: -170
      })
    }
    if (window.location.href === 'https://excellencedetectives.pt/servicos/curso-de-detective-privado/#inscricao-curso-') {
      this.$smoothScroll({
        scrollTo: document.getElementById('inscricao-curso-'),
        duration: 500,
        offset: -170
      })
    }
  },
  methods: {
    submit () {
      this.$v.$touch()
      if (this.$v.$invalid === false) {
        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
        axios.post('https://excellencedetectives.pt/envio_curso.php', JSON.stringify({
          nome_curso: this.nome_curso,
          email_curso: this.email_curso,
          telefone_curso: this.telefone_curso,
          tipo_curso: this.tipo_curso,
          mensagem_curso: this.mensagem_curso
        }))
          .then(
            setTimeout(() => {
              this.ShowMsgSuccessFloat = true
              setTimeout(() => {
                this.ShowMsgSuccess = true
                this.ShowMsgSuccessFloat = false
              }, 4000)
              this.ShowMsgError = false
              this.nome_curso = ''
              this.email_curso = ''
              this.telefone_curso = ''
              this.tipo_curso = ''
              this.mensagem_curso = ''
            }, 300)
          )
      }
    },
    VerificaNumero () {
      if (this.telefone_curso.length === 14) {
        this.mask = '(##) # ####-####'
      }
      if (this.telefone_curso.length <= 13) {
        this.mask = '(##) ####-####'
      }
    },
    VerificaNumeroDelete () {
      if (this.telefone_curso.length <= 15) {
        this.mask = '(##) ####-####'
      }
    },
    ScrollTodosOsServicos () {
      this.$smoothScroll({
        scrollTo: document.getElementById('servicos'),
        duration: 500,
        offset: -215
      })
    },
    ScrollServicos () {
      this.$smoothScroll({
        scrollTo: document.getElementById('servicos'),
        duration: 500,
        offset: -170
      })
    },
    CloseMsgSuccess () {
      this.ShowMsgSuccess = true
      this.ShowMsgSuccessFloat = false
    },
    TodosOsServicos () {
      this.$router.push('/servicos/#servicos')
    },
    InvestigacaoEmpresarial () {
      this.$router.push('/servicos/investigacao-empresarial/#servicos')
    },
    InvestigacaoConjugal () {
      this.$router.push('/servicos/investigacao-conjugal/#servicos')
    },
    InvestigacaoPolitica () {
      this.$router.push('/servicos/investigacao-politica/#servicos')
    },
    ProvasAdvogados () {
      this.$router.push('/servicos/provas-para-advogados/#servicos')
    },
    PessoasDesaparecidas () {
      this.$router.push('/servicos/localizacao-de-pessoas-desaparecidas/#servicos')
    },
    CelularEspiao () {
      this.$router.push('/servicos/celular-VIP/#servicos')
    },
    CursoDetetive () {
      this.$router.push('/servicos/curso-de-detective-privado/#servicos')
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
  .borda-white{
    border: 3px solid var(--white);
  }
  .mensagem-flutuante{
    position: fixed;
    top: 250px;
    left: 0;
    z-index: 1080;
  }
  .error{
    color: #ffffff;
    font-size: 13px;
    margin-top: 10px;
    background-color: #ff4d4d;
    display: inline-block;
    border-radius: 10px;
  }
  #icon-curso{
    position: absolute;
    top: -40px;
    left: 40px;
    padding-left: 15px;
    padding-right: 5px;
  }
  .borda-servicos{
    border: 3px solid var(--vermelho_escuro);
  }
  .bolinha-shadow-bottom{
    position: absolute;
    bottom: -24px;
    right: -1px;
    width: 23px;
    height: 23px;
    border-radius: 80%;
    box-shadow: 10px -10px 0px var(--vermelho_pouco_escuro);
    z-index: 1;
  }
  .bolinha-shadow-top{
    position: absolute;
    top: -24px;
    right: -1px;
    width: 23px;
    height: 23px;
    border-radius: 80%;
    box-shadow: 10px 10px 0px var(--vermelho_pouco_escuro);
    z-index: 1;
  }
  button{
    letter-spacing: 0.3px;
  }
  button.navigate:hover{
    background-color: #ffffff10;
  }
  button.border-bottom{
    border-bottom-color: #ffffff29 !important;
  }
  .overflow-y-scroll{
    min-height: 600px !important;
  }
  #icon-services{
    position: absolute;
    top: -40px;
    left: 40px;
    padding-left: 15px;
    padding-right: 5px;
  }
</style>
