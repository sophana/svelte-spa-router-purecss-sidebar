
<Sidebar>
  <span slot="sidebar">
    <MenuItem href="/"    > Home </MenuItem>
    <MenuItem href="/page"> Example Page </MenuItem>
    <MenuItem href="/toto" eclass="menu-item-divided"> Dummy menu </MenuItem>
  </span>
  <span slot="content">
    <Router {routes}/>
  </span>
</Sidebar>

<script>
  import Router from 'svelte-spa-router'
  //import {link, push, pop, replace, location, querystring} from 'svelte-spa-router'
  //import active from 'svelte-spa-router/active'
  import Sidebar from './Sidebar.svelte'
  import MenuItem from './MenuItem.svelte'

  import Home from './Home.svelte'
  import Page from './Page.svelte'
  import NotFound from './NotFound.svelte'

  // routes
  const routes = {
    '/': Home,
    '/page' : Page,
    '*': NotFound,
  };

</script>

<style>
/* Style for "active" links; need to mark this :global because the router adds the class directly */
:global(.pure-menu-link.active) {
    font-weight: bold;
    color: #fff !important;
}


</style>
