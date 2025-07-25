<svelte:options customElement="mv-elegant-buffet-edit" />

<script lang="ts">
  import ElegantHeader from "./ElegantHeader.wc.svelte";
  import IngInput from "../ingolstadt/IngInput.wc.svelte";
  import IngSelect from "../ingolstadt/IngSelect.wc.svelte";
  import IngMultiSelect from "../ingolstadt/IngMultiSelect.wc.svelte";

  let {
    formId = "",
    titleText = "",
    titleUrl = "/",
    titleImageUrl = "",
    headerMenus = [],
    items = [],
  }: {
    formId?: string;
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
      value: string;
      type: string;
      options: string;
    }[];
  } = $props();

  let formElement: HTMLFormElement;

  if (!formId) formId = titleText;

  if (typeof(items) == "string") {
    items = JSON.parse(items);
  }
  
  function onChange(id: string, value: string) {

    const formData = new FormData(formElement);
    for (let item of items) {
      if (item.type != "file")
        formData.set(item.id, item.value);
    }

    document.dispatchEvent(
      new CustomEvent("FormChangeEvent", {
        detail: {
          id: formId,
          items: items,
          formData: formData
        },
      }),
    );
  }

  function onFileChange() {
    onChange("", "");
  }

</script>

<ElegantHeader {titleText} {titleUrl} {titleImageUrl} {headerMenus}></ElegantHeader>

<form id={formId} bind:this={formElement} class="edit_frame">
  {#each items as item}
    {#if item.type == "input" || item.type == "textarea"}
      <IngInput label={item.label} bind:input={item.value} type={item.type} inputChanged={onChange}/>
    {:else if item.type == "select"}
      <IngSelect
        label={item.label}
        items={item.options}
        bind:value={item.value}
        inputChanged={onChange}
      />
    {:else if item.type == "multiselect"}
      <IngMultiSelect label={item.label} items={item.options} bind:value={item.value} inputChanged={onChange}/>
    {:else if item.type == "file"}
      <div style="margin-bottom: 6px;">
        <label for={item.id}>{item.label}</label>
      </div>

      <input
        class="file_button"
        type="file"
        id={item.id}
        name={item.id}
        accept="image/png, image/jpeg"
        onchange={onFileChange}
      />
      <div class="file_name">
        {item.value}
      </div>
      {#if item.value && (item.value.endsWith("png") || item.value.endsWith("jpg"))}
        <!-- svelte-ignore a11y_missing_attribute -->
        <img src={item.value} class="image_preview" />
      {/if}
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

  .file_name {
    margin-top: 10px;
    margin-bottom: 12px;
    font-size: 14px;
  }

  .image_preview {
    width: 244px;
    margin-bottom: 14px;
  }
</style>
