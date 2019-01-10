<template>
    <div class="sui-input">
        <input :type="type" class="sui-input-text" v-model="val" :placeholder="placeholder" />
    </div>
</template>

<script>
export default {
    props:{
        type:{
            validator: value => ["text","password","email"].includes(value),
            default:"text"
        },
        placeholder:{
            type:String,
            default:""
        },
        value:{
            type:String
        }
    },
    watch:{
        val(){
            this.$emit("input", this.val);
        }
    },
    data(){
        return {
            val:null
        }
    }
}
</script>

<style>
    .sui-input{
        width:100%;
        height:100%;
    }

    .sui-input-text{
        display: inline-block;
    width: 100%;
    height: 22px;
    line-height: 1.5;
    padding: 4px 7px;
    font-size: 12px;
    border: 1px solid #dcdee2;
    border-radius: 4px;
    color: #515a6e;
    background-color: #fff;
    background-image: none;
    position: relative;
    cursor: text;
    transition: border .2s ease-in-out,background .2s ease-in-out,box-shadow .2s ease-in-out;
    }

    .sui-input-text:focus{
        outline: #2d8cf0 1px solid;
    }
</style>
