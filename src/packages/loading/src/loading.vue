<template>
    <div class="t-loading" :style="{'background-color': background, 'color': color}">
        <div class="t-loading-box">
            <div class="spinner">
              <div class="spinner-container container1">
                <div class="circle1" :style="{'background-color': color}"></div>
                <div class="circle2" :style="{'background-color': color}"></div>
                <div class="circle3" :style="{'background-color': color}"></div>
                <div class="circle4" :style="{'background-color': color}"></div>
              </div>
              <div class="spinner-container container2">
                <div class="circle1" :style="{'background-color': color}"></div>
                <div class="circle2" :style="{'background-color': color}"></div>
                <div class="circle3" :style="{'background-color': color}"></div>
                <div class="circle4" :style="{'background-color': color}"></div>
              </div>
              <div class="spinner-container container3">
                <div class="circle1" :style="{'background-color': color}"></div>
                <div class="circle2" :style="{'background-color': color}"></div>
                <div class="circle3" :style="{'background-color': color}"></div>
                <div class="circle4" :style="{'background-color': color}"></div>
              </div>
            </div>
            <div class="text f24 double-flash f100">{{text}}</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 't-loading'
};
</script>

<style scoped>

.spinner {
  margin: 0 auto;
  width: 20px;
  height: 20px;
  position: relative;
}

.container1 > div, .container2 > div, .container3 > div {
  width: 6px;
  height: 6px;

  border-radius: 100%;
  position: absolute;
  -webkit-animation: bouncedelay 1.2s infinite ease-in-out;
  animation: bouncedelay 1.2s infinite ease-in-out;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.spinner .spinner-container {
  position: absolute;
  width: 100%;
  height: 100%;
}

.container2 {
  -webkit-transform: rotateZ(45deg);
  transform: rotateZ(45deg);
}

.container3 {
  -webkit-transform: rotateZ(90deg);
  transform: rotateZ(90deg);
}

.circle1 { top: 0; left: 0; }
.circle2 { top: 0; right: 0; }
.circle3 { right: 0; bottom: 0; }
.circle4 { left: 0; bottom: 0; }

.container2 .circle1 {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}

.container3 .circle1 {
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
}

.container1 .circle2 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}

.container2 .circle2 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}

.container3 .circle2 {
  -webkit-animation-delay: -0.7s;
  animation-delay: -0.7s;
}

.container1 .circle3 {
  -webkit-animation-delay: -0.6s;
  animation-delay: -0.6s;
}

.container2 .circle3 {
  -webkit-animation-delay: -0.5s;
  animation-delay: -0.5s;
}

.container3 .circle3 {
  -webkit-animation-delay: -0.4s;
  animation-delay: -0.4s;
}

.container1 .circle4 {
  -webkit-animation-delay: -0.3s;
  animation-delay: -0.3s;
}

.container2 .circle4 {
  -webkit-animation-delay: -0.2s;
  animation-delay: -0.2s;
}

.container3 .circle4 {
  -webkit-animation-delay: -0.1s;
  animation-delay: -0.1s;
}

@-webkit-keyframes bouncedelay {
  0%, 80%, 100% { -webkit-transform: scale(0.0) }
  40% { -webkit-transform: scale(1.0) }
}

@keyframes bouncedelay {
  0%, 80%, 100% {
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  } 40% {
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
  }
}

.t-loading {
    z-index: 9000;
    left:0;
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    display: -webkit-flex;
}
.t-loading .f100{
  font-size: 12px;
}
.t-loading .text{
  margin-top: 12px;
}

.t-loading p {
    text-align: center;
}

.double-flash {
    animation: double-flash 3s ease infinite;
}

@keyframes double-flash {
    0% {
        opacity: 1
    }
    12.5% {
        opacity: 0
    }
    25% {
        opacity: 1
    }
    37.5% {
        opacity: 0
    }
    50% {
        opacity: 1
    }
    100% {
        opacity: 1
    }
}
</style>
