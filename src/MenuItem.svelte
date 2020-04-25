
<script>
  export let href;
  export let eclass;
  import {link} from 'svelte-spa-router'
  import active from 'svelte-spa-router/active'

</script>

<li class="pure-menu-item">
  <a href={href} class="pure-menu-link {eclass}" use:link use:active>
    <slot>
    </slot>
  </a>
</li>
