<template>
    <div class="sui-confirm" @click.stop="isShow = true">
        <div v-if="isShow" class="sui-confirm-window">
            <div class="sui-confirm-window-title">{{title}}</div>
            <div class="sui-confirm-window-text">
                {{text}}
            </div>
            <div class="sui-confirm-window-tool">
                <Button text="确认" @on-click="ok" stop-propagation />
                <Button type="primary" text="取消" @on-click="cancel"  stop-propagation />
            </div>
        </div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: "提示"
        },
        text: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            isShow: false
        }
    },
    methods: {
        ok() {
            this.$emit("ok");
            this.isShow = false;
        },
        cancel(e) {
            this.$emit("cancel");
            this.isShow = false;
        }
    }
}
</script>

<style>
.sui-confirm{
    position: relative;
}

.sui-confirm-window{
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
    width: 300px;
    position: absolute;
    left: 0px;
    top: -160px;
}

.sui-confirm-window-title{
    background: #fff;
    color: #535e66;
    border: none;
    padding: 0 20px 0 20px;
    height: 39px;
    line-height: 39px;
    border-bottom: 1px solid #eef0f1;
    font-size: 14px;
    overflow: hidden;
    width: 100%;
    box-sizing: border-box;
    margin: 0px !important;
    box-sizing: border-box;
}

.sui-confirm-window-text{
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

.sui-confirm-window-tool{
    height: 50px;
    width: 100%;
    border-top: 1px solid #eef0f1;
    margin: 0px !important;
    text-align: right;
    padding: 0 10px;
    box-sizing: border-box;
}
</style>
