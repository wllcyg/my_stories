<template>
    <div>
        我是测试组件
        {{username}}
        <button @click="setUsername('赵六')">
            更换名字
        </button>
                <button @click="getUsername">
            获取名字
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent,reactive, ref, toRefs } from 'vue'

interface User{
    username:string;
    age:number | string;
    setUsername(username:string):void;
    getUsername():string;
}

export default defineComponent({
    setup() {
        //ref 与 reactive 写法一致
        //实现接口的第一种写法
        let user:User = reactive({
            username:'张三',
            age:12,
            //定义方法
            setUsername(username:string){
                this.username = username
            },
            getUsername(){
                console.log(this.username,'=====');
                return this.username
            }
        
        })
        // 实现接口的第二种写法,在reactive传入接口约束
        let user1 = reactive<User>({
            username:'张三',
            age:12,
            //定义方法
            setUsername(username:string){
                this.username = username
            },
            getUsername(){
                console.log(this.username,'=====');
                return this.username
            }
        })
        // 第三种实现方式 使用as断言来判定
        let user2 = reactive({
            username:'张三',
            age:12,
            //定义方法
            setUsername(username:string){
                this.username = username
            },
            getUsername(){
                console.log(this.username,'=====');
                return this.username
            }
        }) as User;
        // ref的写法 
        let cont = ref<number>(20);
        return {
            ...toRefs(user)
        }
    },
})
</script>
<style lang="scss">
    
</style>
