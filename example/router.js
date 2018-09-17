import Vue from "vue";
import Router from "vue-router";
import Home from "./view/home.vue";
import Component from "./view/component.vue";
import Menu from "./view/menu.vue";
import Button from "./view/button.vue";
import Timeline from "./view/timeline.vue";

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/component',
            name: 'component',
            component: Component,
            children: [
                {
                  path: 'button',
                  name: 'button',
                  component: Button
                },
                {
                    path: 'menu',
                    name: "menu",
                    component: Menu
                },
                {
                    path: 'timeline',
                    name: 'timeline',
                    component: Timeline
                }
            ]
        }
    ]
})

export default router;