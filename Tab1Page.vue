<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons stat="start">
          <ion-back-button/>
          </ion-buttons>
        <ion-title>Ajout</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">tab 1</ion-title>
        </ion-toolbar>
      </ion-header>
      


          <!-- code  -->
      <ExploreContainer name="Tab 1 page" />

      <div>

        <form>
          <div>
          

</div>
        <p> Ajout de contact</p>
<ion-input type="file" v-model="contactForm.photo" placeholder="photo" />
<input type="texte" v-model="contactForm.nom" placeholder="nom" />
<input type="texte" v-model="contactForm.prenom" placeholder="prenom" />
<input type="texte" v-model="contactForm.entre" placeholder="Entreprise" />
<input type="number" v-model="contactForm.tel" placeholder="N° de Telephone" />
<input type="texte" v-model="contactForm.adresse" placeholder="Adresse" />
<input type="texte" v-model="contactForm.mail" placeholder="Mail" />
<textarea type="texte" v-model="contactForm.note" placeholder="Note" />
  <ion-button @click="creatContact">Creer contact</ion-button>
  </form>
      </div>

    </ion-content>
  </ion-page>
</template>




<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage,
IonHeader,
IonToolbar,
IonTitle,
IonContent,
IonInput,
IonButtons} from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import { contact } from '@/Domains/contact.interface';
import commands  from '@/commands/contact.commands'
export default  defineComponent({
  name: 'Tab1Page',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, },
   data() {
    return{
      contactForm: {

     photo: "",
      nom: "",
      prenom: "",
      entre: "",
      tel: "",
      adresse: "",
      mail: "",
      note: ""
     } as contact
    }
  },

  methods: {
    creatContact() {
        const contact: contact = this.contactForm;
        return commands.creatContact(contact);
    }
  }

});
  
</script>
