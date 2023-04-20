<template>
    <div class="foot">
        <pre>Copyright &copy; {{current}} by The Wrestling Express
            All Rights Reserved
        </pre>
        <a href="https://github.com/TheJeffRicardo?tab=repositories"><i class="bi bi-github text-dark"></i></a>
        <a href="https://www.linkedin.com/messaging/thread/new/"><i class="bi bi-linkedin text-dark"></i></a>
        <a href="https://discord.com/channels/@me"><i class="bi bi-discord text-dark"></i></a>
    </div>
</template>
<script>
export default {
    name: 'footer-',
    data(){
        return {
            current : new Date().getFullYear()
        }
    }
}
</script>
<style scoped>
pre {
    text-align: center;
    font-size: 15px;
    overflow-y: hidden;
}
</style>