<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button @click="dismissModal">
            <ion-icon slot="icon-only" :icon="arrowBackOutline"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-card id="background">
        <ion-card class="center">
          <p>Informe seu email abaixo para receber o código!</p>
          <ion-item lines="none">
            <ion-input v-model="email" type="email" placeholder="Email:" required></ion-input>
          </ion-item>
          <ion-button expand="block" @click="sendCode">Receber código</ion-button>
        </ion-card>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonHeader, IonToolbar, IonButton, IonButtons, IonIcon, IonInput, IonItem, IonCard, IonPage, IonContent, toastController } from '@ionic/vue';
import { arrowBackOutline } from 'ionicons/icons';
import { useRouter } from 'vue-router';
import axios from 'axios';

export default defineComponent({
  name: 'forgotPassword',
  components: {
    IonHeader,
    IonToolbar,
    IonButton,
    IonIcon,
    IonButtons,
    IonInput,
    IonItem,
    IonCard,
    IonPage,
    IonContent
  },
  setup() {
    const router = useRouter();
    return {
      email: '',
      arrowBackOutline: arrowBackOutline
    };
  },
  methods: {
    dismissModal() {
      this.$router.push('/login');
    },
    async presentToast(message: string) {
      const toast = await toastController.create({
        message: message,
        duration: 1500
      });
      toast.present();
    },
    async sendCode() {
      if (!this.email) {
        this.presentToast('Informe um email!');
        return;
      }
      
      const padrao = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!padrao.test(this.email)) {
        this.presentToast('E-mail inválido!');
        return;
      }

      try {
        const response = await axios.post('http://10.0.2.2:3000/send-code', {
          email: this.email,
        });
        localStorage.setItem('resetEmail', this.email);
        this.presentToast('Email enviado!');
        this.$router.push('/resetPassword');
      } catch (error) {
        console.error(error);
        this.presentToast('Erro ao enviar email!');
      }
    }
  }
});
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Kufam);

p {
  font-family: "Kufam";
  color: #034F67;
  font-size: medium;
}

#background {
  height: 95%;
  background-color: #E5F0F7;
}

.center {
  margin: auto;
  text-align: center;
  height: 100%;
  background-color: #ffffff;
  padding: 10px;
}

ion-button {
  --background-activated: #bf9dda;
  --background: #C6ADD9;
  --color: black;
  margin-top: 30px; 
}

ion-content {
  --background: #E5F0F7 !important;
  --color: black;
}

ion-item {
  --background: #E3D1F1 !important;
  --color: black;
}

ion-toolbar {
  --background: #BEDDF0 !important;
  --color: black;
}
</style>
