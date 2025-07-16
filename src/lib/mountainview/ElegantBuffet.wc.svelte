<svelte:options customElement="mv-elegant-buffet" />

<script lang="ts">
  import ElegantHeader from "./ElegantHeader.wc.svelte";
  import ElegantHeroSearch from './ElegantHeroSearch.wc.svelte';
  import ElegantPageCard from "./ElegantPageCard.wc.svelte";
  import ElegantFilterCategories from "./ElegantFilterCategories.wc.svelte";
  import ElegantFilterTypes from "./ElegantFilterTypes.wc.svelte";
  import ElegantTable from "./ElegantTable.wc.svelte";

  let {
    title="",
    titleUrl="/",
    titleImageUrl="",
    headerMenus=[],
    searchtext="",
    searchloadresults,
    searchsubmit,
    categories=[],
    categoryselect,
    types=[],
    onTypeSelect,
    sortTypes="",
    onSortSelect,
    sortSelected = $bindable(""),
    items
  }:
  {
    title: string,
    titleUrl: string,
    titleImageUrl: string,
    headerMenus: {
      title: string,
      titleUrl: string
      imageUrl: string,
      imageShape: string,
      items: {
        title: string,
        url: string
      }[]
    }[],
    searchtext?: string,
    searchloadresults?: (text: string) => string[],
    searchsubmit: (text: string) => void,
    categories: {
      name: string,
      symbol: string
    }[],
    categoryselect: (categoryState: {[key: string]: boolean}) => void,
    types: {
      name: string,
      symbol: string
    }[],
    onTypeSelect: (typeState: {[key: string]: boolean}) => void,
    sortTypes: string,
    sortSelected: string,
    onSortSelect: (sort: string) => void,
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

  let view = $state("CARD");
  let tableHeaders:{name: string, displayName: string, searchable: boolean}[] = $state([
    { name: "dateTime", displayName: "Date", searchable: false},
    { name: "authorName", displayName: "Author", searchable: true},
    { name: "title", displayName: "Title", searchable: true}]);

  let searchText = "";
  let categorySelections: {[key: string]: boolean} = {};
  let typeSelections: {[key: string]: boolean} = {};

  function searchSubmit(text: string) {
    searchText = text;
    if (searchsubmit) {
      searchsubmit(text);
    } else {
      setVisibleItems();
    }
  }

  function categorySelect(selected: {[key: string]: boolean}) {
    categorySelections = selected;

    if (categoryselect) {
      categoryselect(selected);
    } else {
      setVisibleItems();
    }
  }

  function typeSelect(selected: {[key: string]: boolean}) {
    typeSelections = selected;
    console.log(typeSelections);
    if (onTypeSelect) {
      onTypeSelect(selected)
    } else {
      setVisibleItems();
    }
  }

  function setVisibleItems() {
    console.log("Setting visible items");
    for (let item of items) {
      let itemHidden = false;
      // check search
      if (searchText != "" &&
          (!item.title.toLowerCase().includes(searchText.toLowerCase()) ||
          !item.description.toLowerCase().includes(searchText.toLowerCase()) ||
          !item.authorName.toLowerCase().includes(searchText.toLowerCase()))) {
        itemHidden = true;
      }
      // check categories if item still hidden
      if (!itemHidden) {
        for(let key of Object.keys(categorySelections)) {
          const cat = item.categories.find(category => category.name === key);
          if (categorySelections[key] && !cat) {
            itemHidden = true;
            break;
          }
        }
      }
      // check types, if item is still hidden
      if (!itemHidden) {
        for(let key of Object.keys(typeSelections)) {
          console.log(key + JSON.stringify(item.types));
          const t = item.types.find(type => type.name === key);
          if (typeSelections[key] && !t) {
            itemHidden = true;
            break;
          }
        }
      }
      item.hidden = itemHidden;
    }
  }
</script>

<ElegantHeader {title} {titleUrl} {titleImageUrl} {headerMenus}></ElegantHeader>

<ElegantHeroSearch {title} {titleImageUrl} bind:searchtext {searchloadresults} searchsubmit={searchSubmit} />

<ElegantFilterCategories {categories} categoryselect={categorySelect} />

<ElegantFilterTypes {types} {sortTypes} {sortSelected} onTypeSelect={typeSelect} {onSortSelect} bind:view />

{#if view === "CARD"}
  <ElegantPageCard {items}/>
{:else}
  <ElegantTable {tableHeaders} tableRows={items} linkprefix="" linkcolumnname="link" tableRowClick={undefined} />
{/if}

<style>

</style>