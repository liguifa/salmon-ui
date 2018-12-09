<template>
  <div id="app" ref="app">
	<Menu title="Salmon UI" logo="./assets/logo.png">
		<MenuItem title="首页" url="#/" />
		<MenuItem title="组件" url="#/component/install" />
		<MenuItem title="源码" url="https://github.com/liguifa/salmon-ui" />
	</Menu>
    <div class="sui-body">
      	<router-view />
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            isLoading:false
        }
    }
}
</script>


<style>
html,body,#app {
  width:100%;
  height: 100%;
  padding: 0px;
  margin: 0px;
  overflow: hidden;
  background: #F7F7F7;
  background-size: cover;
  background-repeat: no-repeat;
}

.sui-body{
  height: calc(100% - 50px);
  width: 100%;
  position: absolute;
  top:50px;
}

::-webkit-scrollbar {
    width: 14px;
    height: 14px;
}

::-webkit-scrollbar-track {
    border: 5px solid transparent;
    box-shadow: 0px 0px 0px 5px rgba(0, 0, 0, 0.2) inset;
}

::-webkit-scrollbar-thumb {
    box-shadow: 0px 0px 0px 5px rgba(0, 0, 0, 0.2) inset;
    border: 5px solid transparent;
    border-radius: 20px;
}

.code{
    display: block;
    margin: 12px 0;
    padding: 12px 20px;
    background: #292b36;
    border: none;
    border-radius: 8px;
    color: #ffffff;
    overflow: auto;
    font-family: "Source Code Pro";
    font-size: 16px;
    white-space: pre;
    color: #ffffff !important;
    line-height: 25px;
    overflow:auto;
    width: calc(100% - 40px);
    text-overflow: ellipsis;
}
</style>
