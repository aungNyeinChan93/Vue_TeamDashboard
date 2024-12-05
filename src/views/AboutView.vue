<template>
    <div>
      <h1>Counter Test</h1>
        {{counter.count}}
      <button @click="counter.increment()">Increment</button>
    </div>
</template>

<script setup>
import {useCounter} from "@/store/useCounter";

const counter = useCounter();
</script>
