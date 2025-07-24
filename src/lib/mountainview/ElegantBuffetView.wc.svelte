<svelte:options customElement="mv-elegant-buffet-view" />

<script lang="ts">
  import ElegantHeader from "./ElegantHeader.wc.svelte";

  let {
    title = "",
    titleUrl = "/",
    titleImageUrl = "",
    headerMenus = [],
    items = [],
  }: {
    title: string;
    titleUrl: string;
    titleImageUrl: string;
    headerMenus: {
      title: string;
      titleUrl: string;
      imageUrl: string;
      imageShape: string;
      items: {
        title: string;
        url: string;
      }[];
    }[];
    items: {
      id: string;
      label: string;
      labelType: string;
      value: string;
      link: string;
      type: string;
    }[];
  } = $props();

  if (typeof(items) == "string") {
    items = JSON.parse(items);
  }

  function getHtml(item: {
      id: string;
      label: string;
      labelType: string;
      value: string;
      link: string;
      type: string;
    }) {
    let result = "";

    if (item.labelType) {
      result += `<${item.labelType}>${item.label}</${item.labelType}>`;
    }

    if (item.type == "link_blank") {
      result += `<a href="${item.link}" target="_blank">${item.value}</a>`;
    } else if (item.type == "ul_link_blank") {
      let links = item.value.split(",");
      result += "<ul>";
      for (let link of links) {
        result += `<li><a href="${link}" target="_blank">${link}</a></li>`;
      }
      result += "</ul>";
    } else if (item.type == "ul") {
      let links = item.value.split(",");
      result += "<ul>";
      for (let link of links) {
        result += `<li>${link}</li>`;
      }
      result += "</ul>";
    } else if (item.type == "img") {
      result += `<${item.type} src="${item.value}"></${item.type}>`;
    } else {
      result += `<${item.type}>${item.value}</${item.type}>`;
    }

    return result;
  }
</script>

<ElegantHeader {title} {titleUrl} {titleImageUrl} {headerMenus}></ElegantHeader>

<div class="view_frame">
  {#each items as item}
    {@html getHtml(item)}
  {/each}
</div>

<style>
  .view_frame {
    margin: auto;
    padding: 24px 12px;
    max-width: 700px;
  }
</style>
