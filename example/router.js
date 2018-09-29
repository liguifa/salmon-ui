import Vue from "vue";
import Router from "vue-router";
import Salmon from "../src/index";
import Home from "./view/home.vue";
import Component from "./view/component.vue";
import Install from "./view/install.vue";
import Menu from "./view/menu.vue";
import Button from "./view/button.vue";
import Timeline from "./view/timeline.vue";
import Icon from "./view/icon.vue";
import Input from "./view/input.vue";
import Radio from "./view/radio.vue";
import Checkbox from "./view/checkbox.vue";
import Switch from "./view/switch.vue";
import Table from "./view/table.vue";
import Video from "./view/video.vue";
import Select from "./view/select.vue";
import Rate from "./view/rate.vue";
import Color from "./view/color.vue";
import Page from "./view/page.vue";

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
                    path: 'install',
                    name: 'install',
                    component: Install
                },
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
                },
                {
                    path: 'icon',
                    name: 'icon',
                    component: Icon
                },
                {
                    path: 'input',
                    name: 'input',
                    component: Input
                },
                {
                    path: 'radio',
                    name: 'radio',
                    component: Radio
                },
                {
                    path: 'checkbox',
                    name: 'checkbox',
                    component: Checkbox
                },
                {
                    path: 'switch',
                    name: 'switch',
                    component: Switch
                },
                {
                    path: 'table',
                    name: 'table',
                    component: Table
                },
                {
                    path: 'video',
                    name: 'video',
                    component: Video
                },
                {
                    path: 'select',
                    name: 'select',
                    component: Select
                },
                {
                    path: 'rate',
                    name: 'rate',
                    component: Rate
                },
                {
                    path: 'color',
                    name: 'color',
                    component: Color
                },
                {
                    path: 'page',
                    name: 'page',
                    component: Page
                }
            ]
        }
    ]
})

router.beforeEach((to, from, next) => {
    Salmon.LoadBar.start();
    next();
});

router.afterEach(route => {
    Salmon.LoadBar.finish();
});

export default router;