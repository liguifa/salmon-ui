<template>
    <div v-if="value" class="sui-drawer">
        <div v-if="mask" class="sui-drawer-model" @click="cancel(1)"></div>
        <div class="sui-drawer-main" :style="{width: width+'px'}">
            <div v-if="showHeader" class="sui-drawer-title">
                {{title}}
                <Icon v-if="closable" type="cancel" class="sui-drawer-title-close" @on-click="cancel(2)" />
            </div>
            <div class="sui-drawer-text">
                <slot></slot>
            </div>
            <div v-if="showFooter" class="sui-drawer-tool">
                <Button v-if="closable" :text="okText" @on-click="ok" />
                <Button type="primary" :text="cancelText" @on-click="cancel(3)" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ""
        },
        okText: {
            type: String,
            default: "确定"
        },
        cancelText: {
            type: String,
            default: "取消"
        },
        value: {
            type: Boolean,
            default: false
        },
        width: {
            type: Number,
            default: 400
        },
        mask: {
            type: Boolean,
            default: true
        },
        showHeader: {
            type: Boolean,
            default: true
        },
        showFooter: {
            type: Boolean,
            default: true
        },
        closable: {
            type: Boolean,
            default: true
        },
        maskClosable: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        ok() {
            if(this.closable) {
                this.$emit("input", false);
            }
            this.$emit("ok");
        },
        cancel(closeType) {
            if(this.closable && ((closeType == 1 && this.maskClosable) || closeType != 1)) {
                this.$emit("input", false);
            }
            this.$emit("cancel");
        }
    }
}
</script>

<style>
.sui-drawer{
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 9999;
}

.sui-drawer-model{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
    background-color: rgba(55,55,55,.6);
}

.sui-drawer-main{
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
    position: fixed;
    right: 0px;
    top: 0px;
    height: 100%;
    width: 400px;
    z-index: 999;
}

.sui-drawer-title{
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
    vertical-align: middle;
}

.sui-drawer-text{
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

.sui-drawer-tool{
    height: 40px;
    width: 100%;
    border-top: 1px solid #eef0f1;
    margin: 0px !important;
    text-align: right;
    padding: 0 20px;
    box-sizing: border-box;
}

.sui-drawer-title-close{
    float: right;
    font-size: 20px;
    color: #999;
    font-weight: 400;
    vertical-align: middle;
    margin-top: 20px;
}
</style>
