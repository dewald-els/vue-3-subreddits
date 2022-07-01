<template>
    <header class="app-header">
        <select @change="onSubRedditChange" class="subreddit-select">
            <option value="javascript">JavaScript</option>
            <option value="vue">Vue</option>
            <option value="reactjs">React</option>
            <option value="angular">Angular</option>
            <option value="programmerhumor">ProgrammerHumor</option>
            <option value="csharp">C#</option>
            <option value="dotnet">.NET</option>
            <option value="java">Java</option>
        </select>
    </header>

    <SubReddit :subreddit="subreddit" />
</template>

<script>
import SubReddit from "./components/SubReddit.vue";

export default {
    name: "App",
    components: {
        SubReddit,
    },
    methods: {
        onSubRedditChange(e) {
            this.subreddit = e.target.value;
        },
    },
    data() {
        return {
            subreddit: "javascript",
        };
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    padding-top: 2em;
}
.app-header {
    position: fixed;
    top: 0;
    background: white;
    padding: 1em;
    width: 100%;
    left: 0;
    border-bottom: 1px solid #ccc;
}
</style>
