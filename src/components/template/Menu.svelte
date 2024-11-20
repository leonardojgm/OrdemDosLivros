<script>
    export let titulo = "Navegação";
</script>

<div class="flex flex-col gap-3">
    <span class="text-sm font-bold text-zinc-500">{titulo}</span>
    <ul class="flex flex-col">
        <slot></slot>
    </ul>
</div>