<template>
    <div class="sui-input">
        <input :type="type" class="sui-input-text" v-model="value" :placeholder="placeholder" />
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
        }
    },
    data(){
        return {
            value:null
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
        height: 34px;
        border:1px solid #e5e6e7;
        padding: 6px 12px;
        box-sizing: border-box;
        color:#676a6c;
    }

    .sui-input-text:focus{
        outline: #1ab394 1px solid;
    }
</style>
