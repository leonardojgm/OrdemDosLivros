<script>
  import { IconBooks, IconBrandFacebook, IconBrandInstagram, IconBrandYoutube, IconFriends, IconHome, IconRss, IconUser, IconUsers } from "@tabler/icons-svelte";
    import autores from "../../constants/autores";
    import Menu from "./Menu.svelte";
    import MenuItem from "./MenuItem.svelte";
</script>

<aside class="flex flex-col self-start border border-zinc-800 p-5 rounded-md gap-10 w-72">
    <Menu titulo="Navegação">
        <MenuItem texto="Início" href="/">
            <IconHome size={20} />
        </MenuItem>
        <MenuItem texto="Personagens" href="/">
            <IconFriends size={20} />
        </MenuItem>
        <MenuItem texto="Autores" href="/autores">
            <IconUsers size={20} />
        </MenuItem>
        <MenuItem texto="Séries" href="/">
            <IconBooks size={20} />
        </MenuItem>
    </Menu>
    <Menu titulo="Principais Autores">
        {#each autores as autor}
            <MenuItem texto="{autor.nome}" href="/autores/{autor.id}">
                <IconUser size={20} />
            </MenuItem>
        {/each}
    </Menu>
    <Menu titulo="Outras Categorias">
        <MenuItem texto="Últimas Notícias" href="/">
            <IconRss size={20} />
        </MenuItem>
        <MenuItem texto="Séries Populares" href="/">
            <IconBooks size={20} />
        </MenuItem>
        <MenuItem texto="Facebook" href="/">
            <IconBrandFacebook size={20} />
        </MenuItem>
        <MenuItem texto="Instagram" href="/">
            <IconBrandInstagram size={20} />
        </MenuItem>
        <MenuItem texto="Youtube" href="/">
            <IconBrandYoutube size={20} />
        </MenuItem>
    </Menu>
</aside>