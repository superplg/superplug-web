<svelte:options customElement="mv-elegant-buffet-view" />

<script lang="ts">
  import ElegantHeader from "./ElegantHeader.wc.svelte";

  let {
    titleText = "",
    titleUrl = "/",
    titleImageUrl = "",
    headerMenus = [],
    items = [],
  }: {
    titleText: string;
    titleUrl: string;
    titleImageUrl: string;
    headerMenus: {
      title: string;
      titleUrl: string;
      titleColor: string;
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
    } else if (item.type == "img" && item.value) {
      result += `<${item.type} class="view_image" src="${item.value}"></${item.type}>`;
    } else if (item.type == "preview_iframe" && item.value) {
      let links = item.value.split(",");
      let previewLink = "";
      for (let link of links) {
        if (link.startsWith("https://youtu.be")) {
          let pieces = link.split("/");
          previewLink = "https://www.youtube.com/embed/" + pieces[pieces.length - 1];
          break;
        } else if (link.includes("/presentation/")) {
          if (link.includes("/edit"))
            previewLink = link.replace("/edit", "/embed");
          else
            previewLink = link + "/embed";

          break;
        }
      }
      if (previewLink)
        result += `<div style="margin: 24px 0px;">
          <iframe
            class="view_image"
            width="100%"
            height="374"
            src=${previewLink}
            title="Embedded content preview"
          ></iframe>
        </div>`;
    } else if (item.value) {
      result += `<${item.type}>${item.value}</${item.type}>`;
    }

    return result;
  }
</script>

<ElegantHeader {titleText} {titleUrl} {titleImageUrl} {headerMenus}></ElegantHeader>

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

  :global(.view_image) {
    margin: 8px 0px;
    width: 100%;
    border-radius: 24px;
    filter: drop-shadow(0 0 0.75rem gray);
  }
</style>
