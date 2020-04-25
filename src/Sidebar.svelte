<div id="layout" class:active={menuActive}>
    <!-- Menu toggle -->
    <div id="menuLink" class="menu-link" on:click={() => menuActive=!menuActive} class:active={menuActive}>
        <!-- Hamburger icon -->
        <span></span>
    </div>

    <div id="menu" class:active={menuActive}>
      <div class="pure-menu">
	<slot name="sidebar-top">
          <div class="pure-menu-heading">
	    <div class="sidebar-heading">
	      Welcome!
	    </div>
	  </div>
	</slot>
        <ul class="pure-menu-list">
	  <slot name="sidebar">
	  </slot>
        </ul>
      </div>
    </div>

    <div id="main">
      <slot name="content">
      </slot>
    </div>
</div>

<script>
  let menuActive=false;
</script>
