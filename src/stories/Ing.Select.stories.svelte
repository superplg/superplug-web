<script module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import IngSelect from "../lib/ingolstadt/IngSelect.wc.svelte";
  import { fn } from "@storybook/test";

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    title: "Stories/ingolstadt/IngSelect",
    component: IngSelect,
    tags: ["autodocs"],
    argTypes: {},
    args: {
      onClick: fn(),
    },
  });

  let input = $state("Option 1");
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Simple options">
  <div>Radio value: {input}</div>

  <IngSelect
    label="Test"
    items="Option 1,Option 2,Option 3"
    bind:input={input}
  />
</Story>

<style>
  div {
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
</style>
