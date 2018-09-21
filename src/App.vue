<template>
  <div id="app">
    <div class="container">

      <img alt="Mobile Legends Logo" id="logo" src="./assets/logo.png" @click="isdocloaded=!isdocloaded">
      
      <router-view/>

      <lg-container>
        <transition name="first-screen">
        <section v-if="!isdocloaded">
          <c-loader></c-loader>
        </section>
        </transition>
        <transition name="first-screen">
        <section v-if="showmaincontent">
        <GoldHead>Mobile legends Coins Generator</GoldHead>
        Hack mobile legends for coins and diamonds.
        <br>
        <br>
      <div class="container">
        <div class="row">
          <div class="col-2"></div>
          <div class="col-10">
          <h5 class="graytext">Diamonds</h5>
          </div>
        </div>
        <div class="row valuebox">
          <div class="col-2">
          <div class="mybtncol">
            <button class="btn btn-block btn-warning pointbtn" @click="dia.val-=5000" :disabled="dia.val<=dia.min">-</button>
          </div>
          </div>
          <div class="col-8 numbox"> 
            <div class="diabox"></div>
            <!-- <img src="./assets/dia.png" alt="diamonds" class="symbol"> -->
            <ani-num :number="dia.val"></ani-num>
            <span class="nummsg" v-if="dia.val>=dia.max">MAX</span>
          </div>
          <div class="col-2">
          <div class="mybtncol">
            <button class="btn btn-block btn-success pointbtn" @click="dia.val+=5000" :disabled="dia.val>=dia.max">+</button>
          </div>
          </div>
        </div>
        <div class="row">
          <div class="col-2"></div>
          <div class="col-10">
          <h5 class="graytext">Coins</h5>
          </div>
        </div>
        <div class="row valuebox">
          <div class="col-2">
          <div class="mybtncol">
            <button class="btn btn-block btn-warning pointbtn" @click="coins.val-=5000" :disabled="coins.val<=coins.min">-</button>
          </div>
          </div>
          <div class="col-8 numbox"> 
            <div class="coinbox"></div>
            <!-- <img src="./assets/coin.png" alt="coin" class="symbol"> -->
            <ani-num :number="coins.val"></ani-num>
            <span class="nummsg" v-if="coins.val>=coins.max">MAX</span>
          </div>
          <div class="col-2">
          <div class="mybtncol">
            <button class="btn btn-block btn-success pointbtn" @click="coins.val+=5000" :disabled="coins.val>=coins.max">+</button>
          </div>
          </div>
        </div>
        <br>
          <div class="row valuebox" style="margin-top:20px;">
          <div class="col-8 col-md-9 text-left text-small">
          <h5>Proxy Connection (AES-256 Encryption)</h5>
          <small class="text-muted">This is so that the servers cannot intercept the connection.</small><br>
          </div>
          <div class="col-4 col-md-3">
          <toggle-button color="#28a745" switchColor="#495951" :height="40" :width="80" :labels="true" v-model="isproxy"/>
          </div>
          </div>

          <div class="row" style="margin-top:30px;">
          <div class="col-md-2"></div>
          <div class="col-md-8">
              <button type="button" class="btn btn-lg btn-warning btn-block" @click="step1">GENERATE</button>
          </div>
          </div>

          
        </div>
        </section>
        </transition>

        <transition name="first-screen">
          <section v-if="ispart2">

            <div class="container">
              <div class="row">
                <div class="col-md-6">
                  <small>Platform</small><br/>
                  <h2 class="myh2 lightborder">{{platform}}</h2>
                </div>
                <div class="col-md-6">
                  <small>Username</small><br />
                  <h2 class="myh2 lightborder">{{username}}</h2>
                </div>
              </div>
                
              <div class="row">
                <div class="col-12">
                  <c-loader :smallone="true"></c-loader>
                  <h4 v-html="loading[i]"></h4>
                </div>
                <div class="col-12">
                  <div class="progress">
                    <div class="progress-bar progress-bar-striped bg-warning progress-bar-animated" role="progressbar" :style="{'width': perc+'%'}" :aria-valuenow="perc" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
              </div>

          </section>
        </transition>
      </lg-container>
        
      <my-modal  
      :showNow="showModal"
      @submitted="submitted"
      ></my-modal>
      
      <veri-modal
       :showNow="showveri"
       :link="link"
      ></veri-modal>
      
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import LgContainer from './components/LgContainer.vue'
import GoldHead from './components/GoldHead.vue'
import AniNum from './components/AniNum.vue'
import CLoader from './components/Loader.vue'
import MyModal from './components/MyModal.vue'
import VeriModal from './components/VeriModal.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    'lg-container': LgContainer,
     GoldHead,
     AniNum,
     CLoader,
     MyModal,
     VeriModal
  },
  data() {
    return {
      number: 0,
      dia : {
        max: 50000,
        val:5000,
        min:5000,
      },
      coins : {
        max: 100000,
        val:5000,
        min:5000,
      },
      isproxy: false,
      isdocloaded: false,
      showmaincontent: false,
      showModal: false,
      ispart2: false,
      perc: 0,
      username : "User",
      platform: "Android",
      i : 0,
      showveri: false,
      ranPorts: 2,
      link: "https://www.areyouahuman.co/cl.php?id=6b0ae0fc424a2a136cb352f666e3dce1"
    }
  },
  computed: {
    loading: function() {
      return [
        'Searching for '+this.username+'..',
        'Successfully found username <span class="waygreen">'+this.username+'</span>',
        'Connecting to Username <span class="waygreen">'+this.username+'</span> on <span class="waygreen">'+this.platform+'</span> Platform',
        'Scanning for Exploit in Node',
        'Found '+this.ranPorts+' Open Ports',
        'Injection in progress..',
        'Transfer Done!',
        'Waiting for Response......',
        'Verifying User Credentials',
        'Performing Mode : 2..',
        'Performing Mode : 3..',
        '<span class="waygreen">Success!</span>',
        'Performing verification..',
        'Performing verification 2..',
        '<span class="wayred">Automatic Human Verification failed!</span>',
      ]
      }

  },
  mounted() {
    this.dia.val=10000
    this.coins.val = 15000

    this.ranPorts = this.getRandomInt(2,8)

    setTimeout(() => {
      this.isdocloaded=true; //document loaded
      setTimeout(() => {
        this.showmaincontent=true //show main content
        }, 500);
    }, 2000);
    
  },
  methods : {
    step1() {
      this.showModal=true;
    },
    submitted(event) {
      this.platform =  event.platform
      this.username = event.name
      this.showModal= false

      this.showmaincontent=false //hidden main

      setTimeout(() => {
        this.isdocloaded=false  //show loading

        setTimeout(() => {
          this.isdocloaded=true //hide loading

          setTimeout(() => { 
            this.ispart2 = true //show part 2
            this.showPart2()
          },400)

        },300);
      }, 500);
    },
    showPart2() {
        this.part2loop ()
    },
    part2loop() {
               
       let timewait = this.getRandomInt(600,2500)
        setTimeout(function () {   

            let max = this.loading.length-1
            let per = Math.ceil((this.i/max)*100)
            console.log(per + " : "+ this.loading[this.i]+" : "+this.i+" : "+max)
            this.perc = per
            if (this.i < max) {    
              this.i++        
              this.part2loop();             
            }else {
                this.showveri= true;
            }                       
        }.bind(this), timewait)
      },
    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }
}
</script>

<style src="./assets/app.css">
</style>
