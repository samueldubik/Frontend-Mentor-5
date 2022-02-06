<template>
  <article class="bg-light-gray-blue h-screen w-screen">
        <main class=" shadow-xl font-Manrope bg-white w-11/12 max-w-md  lg:h-1/3 lg:flex mt-0.5 lg:max-w-4xl rounded-2xl center">
        <img class="lg:rounded-none lg:rounded-l-2xl lg:h-full lg:w-auto rounded-t-2xl w-full"  src="../src/assets/drawers.jpg" alt="">
        <section> 
          <h1 class="mt-4 mx-10 font-bold text-left text-lg text-dark-gray-blue xl:text-2xl lg:mt-8">
            Shift the overall look and feel by adding these wonderful touches to furniture in your home
          </h1>
          <p class=" text-left mt-2 mx-10 text-sm font-medium text-dark-desaturated-blue xl:text-base lg:mt-4">
            Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I've got some 
            simple tips to help you make any room feel complete.
          </p>
          
           <div class="flex px-5 py-5 rounded-b-2xl">
            <img class="rounded-full mr-5 h-10 w-10 -mt-1" src="../src/assets/avatar-michelle.jpg" alt="">
            <div class="-mt-1 mr-10">
              <h1 class="text-sm text-dark-desaturated-blue">Michelle Appleton</h1>
              <p class="text-sm text-gray-blue">28 Jun 2020</p>
              </div>
            <div @click="isVisible = !isVisible" class="h-8 w-8 absolute right-16 bg-light-gray-blue rounded-full cursor-pointer mt-1 z-20">
              <img class="center relative" src="../src/assets/icon-share.svg" alt="">
              </div>

                <div :class="{ visible: isVisible, invisible: !isVisible }" class=" py-3 absolute flex -mt-2 h-16 w-full right-0 rounded-b-xl bg-dark-gray-blue lg:w-1/3 lg:top-28 lg:-right-16 lg:justify-center">
            <h1 class=" text-lg cursor-pointer font-bold text-dark-desaturated-blue mx-5 z-10 lg:text-2xl">SHARE</h1>
            <img class="h-8 mr-4 z-10 cursor-pointer" src="../src/assets/icon-facebook.svg" alt="">
            <img class="h-8 mr-3 z-10 cursor-pointer" src="../src/assets/icon-twitter.svg" alt="">
            <img class="h-8 z-10 cursor-pointer" src="../src/assets/icon-pinterest.svg" alt="">
            <div class="lg:h-10 lg:w-10 lg:absolute flip lg:top-8 lg:bg-dark-gray-blue lg:z-0"></div>
          </div>

          </div>
        </section>
        </main>
  </article> 
</template>

<script>
import './assets/tailwind.css'

export default {
  name: 'App',
  components: {

  },

  data () {
    return {
      isVisible: false
    }
  }
  
}
</script>


