<p align="center"><a href="https://liguifa.github.io/salmon-ui/#/" target="_blank" rel="noopener noreferrer"><img width="100" src="https://raw.githubusercontent.com/liguifa/salmon-ui/master/example/assets/logo.png" alt="Salmon UI"></a></p>

<h2 align="center">Salmon UI</h2>

<p align="center">基于VUE的简单的前端组件库</p>

<h2>快速入门</h2>

<h4>使用之前</h4>

<p>万丈高楼平地起，高效的开发，离不开基础知识的掌握。在开始使用 Salmon UI 之前，我们假设你已经掌握Vue、WebPacES2015等知识，并对前端工程化有一定了解，如果你对这些知识了解不深，我们建议你先学习一下，如果你了解这些知识，你可续下面的步骤。</p>
<div style="background: #f7f7f7;color: #525252;padding:15px;border-left:2px solid red">官方指南假已了解关于 HTML、CSS 和 JavaScript 的中级知识。如果你刚开始学习前端开发，将组件作为你的第一步可能不是最好的主意掌握好基础知识再来吧！但这不是必需的，只是一个建议。</div>

<h4>安装</h4>

<p>推荐使用 npm 来安装，享受生态圈和工具带来的便利，更好地和 webpack 配合使用，当然，我也推荐使用 ES2015。</p>
<p style="background: #292b36;color: #fff;padding:15px;">npm install salmon-ui --save</p>
<p>如果您使用了 NPM 安装，并使用 webpack 作为构建工具，请继续阅读下面步骤。</p>

<h4>Hello World</h4>

<p>一般在 webpack 入口页面中如下使用<p>
<p style="background: #292b36;color: #fff;padding:15px;">
	import Salmon from "Salmon-ui"　<br />
	import Vue from "Vue"<br />
	<br />
	Vue.use(Salmon)<br />
	<br />
	new Vue({<br />
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;el: '#app',<br />
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;render: h => h(App)<br />
	});<br />
</p>