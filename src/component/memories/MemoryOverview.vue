<template>
    <ion-img :src="image" :alt="title"></ion-img>
    <h2 class="ion-text-center">{{ title }}</h2>
    <p class="ion-text-center">{{ description }}</p>
  </template>
  
  <script>
  import { IonImg } from '@ionic/vue';
  
  export default {
    props: ['title', 'image', 'description'],
    components: {
      IonImg
    }
  }
  </script>
  <style scoped>
  ion-img {
  width: 100%;
  height: 700px;
  object-fit: cover;
  margin-bottom: 1rem;
  }
  h2 {
  font-size: 1.5rem; 
  font-weight: bold;
  }
  P {
  font-size: 1rem;
   line-height: 1.5;
  }
