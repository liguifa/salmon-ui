<template>
    <div v-if="isShow" :class="['sui-alert', theme]">
        <Icon :type="icon" v-if="showIcon" :class="['sui-alert-icon', iconTheme]" />
        {{text}}
        <Icon type="cancel" class="sui-alert-close" v-if="closable" @click="close" />
    </div>
</template>

<script>
import Icon from "./icon.component.vue";

export default {
    props: {
        closable: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: "warning"
        },
        text: {
            type: String
        },
        showIcon: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            isShow: true
        }
    },
    computed: {
        theme() {
            return `sui-alert-theme-${this.type}`;
        },
        icon() {
            return {
                success: "ok_circle",
                info: "info_circle",
                warning: "info_circle",
                error: "cancel_circle"
            }[this.type];
        },
        iconTheme() {
            return `sui-alert-icon-theme-${this.type}`;
        }
    },
    methods: {
        close() {
            if(this.closable) {
                this.$emit("onClose");
                this.isShow = false;
            }
        }
    },
    components: {
        Icon
    }
}
</script>

<style>
.sui-alert{
    height: 34px;
    width: 100%;
    padding: 8px 48px 8px 16px;
    border-radius: 4px;
    color: #515a6e;
    font-size: 12px;
    line-height: 16px;
    box-sizing: border-box;
    position: relative;
    margin: 5px 0px;
}

.sui-alert-theme-warning{
    background: #fff9e6;
    border: 1px solid #ffd77a;
}

.sui-alert-theme-info{
    border: 1px solid #abdcff;
    background-color: #f0faff;
}

.sui-alert-theme-success{
    border: 1px solid #8ce6b0;
    background-color: #edfff3;
}

.sui-alert-theme-error{
    border: 1px solid #ffb08f;
    background-color: #ffefe6;
}

.sui-alert-icon {
    font-weight: 400;
    line-height: 1;
    font-size: 14px;
}

.sui-alert-icon-theme-info{
    color: #2d8cf0;
}

.sui-alert-icon-theme-success{
    color: #19be6b;
}

.sui-alert-icon-theme-warning{
    color: #f90;
}

.sui-alert-icon-theme-error{
    color: #ed4014;
}

.sui-alert-close{
    font-style: normal;
    font-weight: 400;
    line-height: 1;
    font-size: 14px;
    color: #999;
    position: absolute;
    top: 9px;
    right: 10px;
    cursor: pointer;
}
</style>
