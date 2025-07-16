<svelte:options customElement="mv-elegant-cardpage" />

<script lang="ts">
  import ElegantCard from "./ElegantCard.wc.svelte";

  let { 
    items = $bindable([]) 
  }: {
    items: {
      title: string,
      dateTime: string,
      imageUrl: string,
      authorName: string,
      authorUrl: string,
      authorImageUrl: string,
      description: string,
      link: string,
      hidden: boolean,
      categories: {
        name: string,
        imageUrl: string,
        symbol: string
      }[],
      types: {
        name: string,
        imageUrl: string,
        symbol: string
      }[]
    }[]
  } = $props();

  if (typeof items == "string") {
    items = JSON.parse(items);
  }
</script>

<div class="menu_frame">
  {#each items as item}
    {#if !item.hidden}
      <ElegantCard {item} />
    {/if}
  {/each}
</div>

<style>
  .menu_frame {
    max-width: 2000px;
    margin: 0px auto;
    display: flex;
    /* justify-content: center; */
    flex-wrap: wrap;
  }
</style>
