<script module lang="ts">
  import './style.css';
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import ElegantBuffet from '$lib/mountainview/ElegantBuffet.wc.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    titleText: 'Stories/MountainView/ElegantBuffet',
    component: ElegantBuffet,
    tags: ['autodocs'],
    argTypes: {},
    args: {}
  });

  const menus = $state([
  {
    title: "User menu",
    imageUrl: "/profile.jpg",
    imageShape: "round",
    items: [
      {
        title: "Log out",
        url: "https://google.com"
      },
      {
        title: "Account",
        url: "https://google.com"
      }
    ]
  },  {
    title: "Site menu",
    imageUrl: "/site.svg",
    items: [
      {
        title: "Log out",
        url: "https://google.com"
      },
      {
        title: "Account",
        url: "https://google.com"
      }
    ]
  }]);

  const items = $state([
    {
      dateTime: "2 days ago",
      categories: [
        {
          name: "Kubernetes",
          url: "/kubernetes.png"
        }
      ],
      imageUrl: "/dino.jpg",
      title: "A New Frontier of Security: Creating Safe and Secure AI Models",
      authorImageUrl: "/profile.jpg",
      authorName: "Chaim Gartenberg",
      authorUrl: "https://google.com",
      description: "Solve a prehistoric Google mystery and learn the secret origins of our oldest-and largest-Googler: Stan the T.rex.and learn the secret origins of our oldest-and largest-Googler: Stan the T.rex.and learn the secret origins of our oldest-and largest-Googler: Stan the T.rex.",
      link: "https://google.com",
      types: [
        {
          name: "Docs",
          url: "/kubernetes.png"
        }
      ]
    },
    {
      dateTime: "2 days ago",
      categories: [
        {
          name: "Kubernetes",
          url: "/kubernetes.png"
        }
      ],
      imageUrl: "/dino.jpg",
      title: "A New Frontier of Security: Creating Safe and Secure AI Models",
      authorImageUrl: "/profile.jpg",
      authorName: "Chaim Gartenberg",
      authorUrl: "https://google.com",
      description: "Solve a prehistoric Google mystery and learn the secret origins of our oldest-and largest-Googler: Stan the T.rex.and learn the secret origins of our oldest-and largest-Googler: Stan the T.rex.and learn the secret origins of our oldest-and largest-Googler: Stan the T.rex.",
      link: "https://google.com",
      types: [
        {
          name: "Docs",
          url: "/kubernetes.png"
        }
      ]
    }]);

  const categories = $state([
    {name: "Apigee X", symbol: "X"}, 
    {name: "OPDK", symbol: "O"},
    {name: "Kubernetes", symbol: "K"},
    {name: "Hybrid", symbol: "H"} 
  ]);

  const types = $state([
    {name: "Docs", symbol: "🕮"},
    {name: "Tools", symbol: "🖰"},
    {name: "Recordings", symbol: "🖭"}
  ]);

  const sorts = $state(["Latest", "Most claps", "Most comments"]);

  let search = $state("");

  function onSearch(input: string) {
    console.log("Input: " + input);

    let results: string[] = [];

    for (let i=0; i<input.length; i++) {
      results.push("Test " + i);
    }

    return results;
  }

  function onCategorySelect(categoryState: {[key: string]: boolean}) {
    console.log("Category select: " + JSON.stringify(categoryState));
  }

  function onTypeSelect(typeState: {[key: string]: boolean}) {
    console.log("Type select: " + JSON.stringify(typeState));
  }

  function onSortSelect(sort: string) {
    console.log("Sort select: " + sort);
  }
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Primary" args={{ titleText: "CommonSky", titleImageUrl: '/favicon.png', menus: menus, search: search, items: items, categories: categories, types: types, sorts: sorts, onSortSelect: onSortSelect}}>
</Story>

<style>

</style>