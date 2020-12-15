<template>
  <section>
    <div class="section">
      <div class="contato">
        <div class="container">
          <b-row>
            <b-col md="12">
              <div class="contato-logo">
                <img src="@/assets/imagens/logo_total.png" />
              </div>
            </b-col>
            <b-col md="12" class="col-12-contato-endereco">
              <div class="contato-endereco">
                <ul>
                  <li>
                    <ion-icon v-pre name="navigate-outline"></ion-icon>Rua
                    Coronel Genuino, 130 | Porto Alegre
                  </li>
                  <li>
                    <ion-icon v-pre name="call-outline"></ion-icon>Telefone:
                    (51) 0000 - 0000
                  </li>
                  <li>
                    <ion-icon v-pre name="mail-outline"></ion-icon
                    >cliqueestagios@cliqueestagios.com
                  </li>
                  <li>
                    <ion-icon v-pre name="time-outline"></ion-icon>09:00 às
                    18:00
                  </li>
                  <li>
                    <ion-icon v-pre name="calendar-outline"></ion-icon>Segunda a
                    Sexta-feira, sem fechar ao meio dia.
                  </li>
                </ul>
              </div>
            </b-col>
            <b-col md="6" class="col-6-contato-mapa">
              <div class="contato-mapa">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.054727617731!2d-51.22860358520155!3d-30.035287737810552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9519790153607eb9%3A0x8a962c7c2fe8574b!2sCentro%20Hist%C3%B3rico%2C%20Porto%20Alegre%20-%20RS%2C%2090450-190!5e0!3m2!1spt-BR!2sbr!4v1606340790611!5m2!1spt-BR!2sbr"
                  frameborder="0"
                  style="border: 0"
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                ></iframe>
              </div>
            </b-col>
            <b-col md="6" class="col-6-contato-endereco">
              <div class="contato-endereco">
                <ul>
                  <li>
                    <ion-icon v-pre name="navigate-outline"></ion-icon>Rua
                    Coronel Genuino, 130 | Porto Alegre
                  </li>
                  <li>
                    <ion-icon v-pre name="call-outline"></ion-icon>Telefone:
                    (51) 0000 - 0000
                  </li>
                  <li>
                    <ion-icon v-pre name="mail-outline"></ion-icon
                    >cliqueestagios@cliqueestagios.com
                  </li>
                  <li>
                    <ion-icon v-pre name="time-outline"></ion-icon>09:00 às
                    18:00
                  </li>
                  <li>
                    <ion-icon v-pre name="calendar-outline"></ion-icon>Segunda a
                    Sexta-feira, sem fechar ao meio dia.
                  </li>
                </ul>
              </div>
            </b-col>
            <b-col md="12">
              <div class="contato-rede-social">
                <nav>
                  <ul>
                    <li>
                      <a href="https://pt-br.facebook.com/"
                        ><ion-icon v-pre name="logo-facebook"></ion-icon
                      ></a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/"
                        ><ion-icon v-pre name="logo-instagram"></ion-icon
                      ></a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com"
                        ><ion-icon v-pre name="logo-linkedin"></ion-icon
                      ></a>
                    </li>
                    <li>
                      <a href="https://youtube.com"
                        ><ion-icon v-pre name="logo-youtube"></ion-icon
                      ></a>
                    </li>
                  </ul>
                </nav>
              </div>
            </b-col>
          </b-row>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contato",
};
</script>

<style></style>
