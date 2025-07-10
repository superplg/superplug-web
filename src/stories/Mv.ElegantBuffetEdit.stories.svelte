<script module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import ElegantBuffetEdit from "../lib/mountainview/ElegantBuffetEdit.wc.svelte";
  import { fn } from "@storybook/test";

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    title: "Stories/MountainView/ElegantBuffetEdit",
    component: ElegantBuffetEdit,
    tags: ["autodocs"],
    argTypes: {},
    args: {
      title: "Superplug",
      titleImageUrl: "/favicon.png",
      headerMenus: [
        {
          title: "Save"
        }
      ],
      items: [
        {
          label: "test 1",
          initialValue: "test",
          type: "input"
        },
        {
          label: "test 2",
          initialValue: "",
          type: "input"
        },
        {
          label: "test 3",
          type: "select",
          options: "test 1, test 2, test 3"
        },
        {
          label: "test 4",
          type: "multiselect",
          options: "test 1, test2, test 3"
        },
        {
          id: "screenshot",
          label: "test 5",
          type: "file"
        }
      ]
    },
  });
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Edit">

</Story>
