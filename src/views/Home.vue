<template>
    <div class="home" @click="toAbout">
        <div class="home_header">
            <div class="header">
                <div class="header_user">
                    <img src="../images/user.png" alt="">
                    <div>小橙子</div>
                </div>
            </div>
            <div class="header">

            </div>
        </div>
    </div>
</template>


<style lang="less">
    .home {
        display: flex;
        flex-direction:column;
        align-items:center;
        justify-content: flex-start;
        background-color: aqua;
        height: 100%;
        font-size: 16px;
        .home_header{
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 540px;
            background:url("../images/header.png") no-repeat center;
            .header{
                flex:1;
                width: 100%;
                .header_user{
                    width: 100%;
                    height: 90px;
                    margin-top: 30px;
                    font-size: 14px;
                    color: #fff;
                    text-align: center;
                    img{
                        width:70px;
                        height: 70px;
                        border-radius: 50%;
                    }
                    div{
                        width: 100%;
                        height: 25px;
                    };
                }
            }
        }
    }
</style>

<script>
    export default {
        name: 'home',
        methods: {
            toAbout: function () {
                this.$router.push('/about')
            }
        }

    }
</script>
