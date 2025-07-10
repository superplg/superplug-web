<svelte:options customElement="mv-elegant-buffet-edit" />

<script lang="ts">
  import ElegantHeader from "./ElegantHeader.wc.svelte";
  import IngInput from "../ingolstadt/IngInput.wc.svelte";
  import IngSelect from "../ingolstadt/IngSelect.wc.svelte";
  import IngMultiSelect from "../ingolstadt/IngMultiSelect.wc.svelte";

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
      value: string;
      type: string;
      options: string;
    }[];
  } = $props();

  if (typeof(items) == "string") {
    items = JSON.parse(items);
  }
  
</script>

<ElegantHeader {title} {titleUrl} {titleImageUrl} {headerMenus}></ElegantHeader>

<form class="edit_frame">
  {#each items as item}
    {#if item.type == "input"}
      <IngInput label={item.label} input={item.value} />
    {:else if item.type == "select"}
      <IngSelect
        label={item.label}
        items={item.options}
        input={item.value}
      />
    {:else if item.type == "multiselect"}
      <IngMultiSelect label={item.label} items={item.options} />
    {:else if item.type == "file"}
      <div style="margin-bottom: 6px;">
        <label for={item.id}>{item.label}</label>
      </div>

      <input
        class="file_button"
        type="file"
        id={item.id}
        name={item.label}
        accept="image/png, image/jpeg"
      />
    {/if}
  {/each}
</form>

<style>
  .edit_frame {
    margin: auto;
    padding: 24px 12px;
    max-width: 700px;
  }

  .file_button::file-selector-button {
    border: 0px;
    background-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
    padding: 6px;
    border-radius: 6px;
  }
</style>
