<template>
    <div class="sui-window" v-if="value">
        <div class="sui-window-model"></div>
        <div class="sui-window-main" :style="{height: heightType, width: widthType}">
            <div class="sui-window-title">{{title}}</div>
            <div class="sui-window-text">
                <slot></slot>
            </div>
            <div class="sui-window-tool">
                <Button :text="okText" @on-click="ok" />
                <Button type="primary" :text="cancelText" @on-click="cancel" />
            </div>
        </div>
    </div>
</template>

<script>
import Button from "./Button.component.vue";

export default {
    props: {
        value: {
            type: Boolean,
            required: true
        },
        height: {
            type: Number,
            default: 300
        },
        width: {
            type: Number,
            default: 570
        },
        title: {
            type: String,
            default: "信息"
        },
        okText: {
            type: String,
            default: "确定"
        },
        cancelText: {
            type: String,
            default: "取消"
        }
    },
    computed: {
        heightType() {
            if(this.height <= 100) {
                return `${this.height}%`;
            }
            return `${this.height}px`;
        },
        widthType() {
            if(this.width <= 100) {
                return `${this.width}%`;
            }
            return `${this.width}px`;
        }
    },
    components: {
        Button
    },
    methods: {
        ok() {
            this.value = false;
            this.$emit("onOk")
            this.$emit("input", this.value);
        },
        cancel() {
            this.value = false;
            this.$emit("input", this.value);
            this.$emit("onCancel")
        }
    }
}
</script>

<style>
.sui-window{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
}

.sui-window-model{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
    background-color: rgba(55,55,55,.6);
}

.sui-window-main{
    background: #ffffff;
    color: #535e66;
    border: none;
    line-height: 59px;
    border-bottom: 1px solid #eef0f1;
    font-size: 14px;
    overflow: hidden;
    border-radius: 2px 2px 0 0;
    box-shadow: 1px 1px 50px rgba(0,0,0,.3);
    box-sizing: border-box;
    z-index: 999;
}

.sui-window-title{
    background: #fff;
    color: #535e66;
    border: none;
    padding: 0 20px 0 20px;
    height: 59px;
    line-height: 59px;
    border-bottom: 1px solid #eef0f1;
    font-size: 14px;
    overflow: hidden;
    width: 100%;
    box-sizing: border-box;
    margin: 0px !important;
}

.sui-window-text{
    line-height: 24px;
    word-break: break-all;
    overflow: auto;
    font-size: 14px;
    width: 100%;
    background: #ffffff;
    padding: 20px;
    height: calc(100% - 110px);
    box-sizing: border-box;
    margin: 0px !important;
}

.sui-window-tool{
    height: 40px;
    width: 100%;
    border-top: 1px solid #eef0f1;
    margin: 0px !important;
    text-align: right;
    padding: 0 20px;
    box-sizing: border-box;
}
</style>
