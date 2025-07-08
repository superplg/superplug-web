<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import ElegantHeader from '$lib/mountainview/ElegantHeader.wc.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    title: 'Stories/MountainView/ElegantHeader',
    component: ElegantHeader,
    tags: ['autodocs'],
    argTypes: {},
    args: {
      title: "Superplug",
      titleImageUrl: "/favicon.png",
      headerMenus: [
        {
          title: "Log in"
        }
      ]
    }
  });

</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Header"></Story>

<style>

</style>