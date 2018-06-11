<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view />
    </transition>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
        transitionName: 'slide-right',
        routerPool: {
          '/':'/'
        }
        // date: new Date()
    }
  },
  mounted () {
    console.log('%c app mounted', 'color:red')
  },
  created () {
    console.log(this.$route)
    //this.$route.meta.time = this.date.getTime();
    console.log('%c app created', 'color:red')
  },
  watch: {
    '$route' (to, from) {
      console.log(to)
      const path = to.path
      if (this.routerPool[path]) {
        this.transitionName = 'slide-left'
        this.routerPool[from.path] = null

      } else {
        this.transitionName = 'slide-right'
        this.routerPool[path] = path
      }
      console.log(this.routerPool)
      
       
    }
  }
}
</script>

<style lang='scss'>
@import './style/commom/commom.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}
.fade-enter-active, .fade-leave-active {
  transition: .5s;
}
.fade-enter, .fade-leave-to {
  transform: translateX(-100%);
}
.slide-right-enter-active, .slide-right-leave-active, .slide-left-enter-active, .slide-left-leave-active {
  position: absolute;
  top: 0px;
  width: 100%;
   transition: .3s;
}
.slide-right-enter {
  position: absolute;
  top: 0px;
  width: 100%;
  transform: translateX(100%);
  opacity: 0;
}
.slide-right-leave-to {
  position: absolute;
  top: 0px;
  width: 100%;
  transform: translateX(-100%);
  opacity: 0;
}
.slide-left-enter {
  position: absolute;
  top: 0px;
  width: 100%;
  transform: translateX(-100%);
  opacity: 0;
}
.slide-left-leave-to {
  position: absolute;
  top: 0px;
  width: 100%;
  transform: translateX(100%);
  opacity: 0;
}
</style>


