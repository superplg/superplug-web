<svelte:options
  customElement={{
    tag: "mv-elegant-hero-search",
    props: {
      text: { reflect: true },
    },
  }}
/>

<script lang="ts">
  import ElegantSearch from "./ElegantSearch.wc.svelte";

  let {
    height = "80px",
    titleText = "",
    titleImageUrl = "",
    searchtext = $bindable(),
    searchloadresults,
    searchItems,
  }: {
    height?: string,
    titleText: string,
    titleImageUrl: string,
    searchtext: string,
    searchloadresults?: (text: string) => string[],
    searchItems: (text: string) => void
  } = $props();
</script>

<div class="hero">
  <div class="hero_logo" style={`height: ${height};`}>
    {#if titleImageUrl}
      <img class="hero_image" height={`${height}`} alt="logo" src={titleImageUrl} />
    {/if}
    <div class="hero_logo_text">{titleText}</div>
  </div>

  <div class="hero_search">
    <ElegantSearch bind:searchtext {searchloadresults} {searchItems} />
  </div>
</div>

<style>
  .hero {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
  }

  .hero_logo {
    display: flex;
    margin-top: 150px;
    width: 100%;
    justify-content: center;
    align-items: center;
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 560;
    color: #333;
    font-size: 20px;
  }

  .hero_image {
    width: 50px;
    height: 50px;
  }

  .hero_logo_text {
    padding-left: 12px;
    padding-right: 12px;
  }

  .hero_search {
    width: 400px;
  }
</style>
