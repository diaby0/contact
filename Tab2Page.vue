<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 2</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
     <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 2</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <ExploreContainer name="Tab 2 page" />

<!-- <div v-for="(user, index) in users"> -->
  
  
</div>




    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import { contact } from '@/domains/contact.interface';
import contactQuery from '@/query/contact.query'

export default defineComponent({
  name: 'Tab2Page',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  mounted(){
    this.getco();
  },
  data(){ 
    return{
    listContacts: [] as Array<contact>,
    contactInfo: {
      photo: "",
      nom: "",
      prenom: "",
      entre: "",
      tel: "",
      adresse: "",
      mail: "",
      note: ""
} as contact}},
method: {
  listContacts() {
  this.listContacts = contactQuery.getContacts();
        return
},

}
});

//LISTE DE CONTACT : créer au démarrage via mounted() dans le component

// FOR -> BOUCLE pour chaque entrées de la liste de contact

</script>
