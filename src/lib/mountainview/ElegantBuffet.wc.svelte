<svelte:options customElement="mv-elegant-buffet" />

<script lang="ts">
  import ElegantHeader from "./ElegantHeader.wc.svelte";
  import ElegantHeroSearch from './ElegantHeroSearch.wc.svelte';
  import ElegantPageCard from "./ElegantPageCard.wc.svelte";
  import ElegantFilterCategories from "./ElegantFilterCategories.wc.svelte";
  import ElegantFilterTypes from "./ElegantFilterTypes.wc.svelte";
  import ElegantTable from "./ElegantTable.wc.svelte";

  let {
    titleText="",
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
    sortTypes="Date descending, Date ascending, Title ascending, Title descending",
    sortSelected = $bindable(""),
    items = $bindable([])
  }:
  {
    titleText: string,
    titleUrl: string,
    titleImageUrl: string,
    headerMenus: {
      title: string,
      titleUrl: string,
      titleColor: string,
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

  let view = $state("CARD");
  let tableHeaders:{name: string, displayName: string, searchable: boolean}[] = $state([
    { name: "dateTime", displayName: "Date", searchable: false},
    { name: "authorName", displayName: "Author", searchable: true},
    { name: "title", displayName: "Title", searchable: true},
    { name: "categoriesText", displayName: "Categories", searchable: false},
    { name: "typesText", displayName: "Tags", searchable: false}]);

  let sortHeaders: {[key: string]: string} = $state({});

  let searchText = "";
  let categorySelections: {[key: string]: boolean} = {};
  let anyCategoriesSelected: boolean = false;
  let typeSelections: {[key: string]: boolean} = {};
  let anyTypesSelected: boolean = false;

  function searchSubmit(text: string) {
    searchText = text;
    if (searchsubmit) {
      searchsubmit(text);
    } else {
      setVisibleItems();
    }
  }

  function onSortSelect(sortType: string) {
    if (sortType == "Date descending") {
      sortHeader("dateTime", "DESC");
    } else if (sortType == "Date ascending") {
      sortHeader("dateTime", "ASC");
    } else if (sortType == "Title ascending") {
      sortHeader("title", "ASC");
    } else if (sortType == "Title descending") {
      sortHeader("title", "DESC");
    }
  }

  function sortHeader(headerName: string, direction: string = "") {
    if (direction != "") sortHeaders[headerName] = direction;

    if (sortHeaders[headerName] == "ASC") {
      items.sort((a, b) => {
        let aObj: any = a;
        let bObj: any = b;
        return aObj[headerName] < bObj[headerName] ? -1 : 1
      });
    } else {
      items.sort((a, b) => {
        let aObj: any = a;
        let bObj: any = b;
        return aObj[headerName] > bObj[headerName] ? -1 : 1
      });
    }   
  }

  function categorySelect(selected: {[key: string]: boolean}) {
    categorySelections = selected;
    anyCategoriesSelected = false;
    for (const [key, value] of Object.entries(categorySelections)) {
      if (value) {
        anyCategoriesSelected = true;
        break;
      }
    }
    if (categoryselect) {
      categoryselect(selected);
    } else {
      setVisibleItems();
    }
  }

  function typeSelect(selected: {[key: string]: boolean}) {
    typeSelections = selected;
    anyTypesSelected = false;
    for (const [key, value] of Object.entries(typeSelections)) {
      if (value) {
        anyTypesSelected = true;
        break;
      }
    }
    if (onTypeSelect) {
      onTypeSelect(selected)
    } else {
      setVisibleItems();
    }
  }

  function setVisibleItems() {
    for (let item of items) {
      let itemHidden = false;
      // check search
      if (searchText != "" && item.description && item.title && item.authorName &&
          (!item.title.toLowerCase().includes(searchText.toLowerCase()) &&
          !item.description.toLowerCase().includes(searchText.toLowerCase()) &&
          !item.authorName.toLowerCase().includes(searchText.toLowerCase()))) {
        itemHidden = true;
      } else if (searchText != "" && item.description == "")
        itemHidden = true;
      
      // check categories if item still hidden
      if (!itemHidden && ((!item.categories || item.categories.length === 0) && anyCategoriesSelected))
        itemHidden = true;
      else if (!itemHidden && item.categories) {
        for(let key of Object.keys(categorySelections)) {
          const cat = item.categories.find(category => category.name === key);
          if (categorySelections[key] && !cat) {
            itemHidden = true;
            break;
          }
        }
      }
      // check types, if item is still hidden
      if (!itemHidden && ((!item.types || item.types.length === 0) && anyTypesSelected))
        itemHidden = true;
      else if (!itemHidden && item.types) {
        for(let key of Object.keys(typeSelections)) {
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

<ElegantHeader {titleText} {titleUrl} {titleImageUrl} {headerMenus}></ElegantHeader>

<ElegantHeroSearch
  {titleText}
  {titleImageUrl}
  bind:searchtext
  {searchloadresults}
  searchItems={searchSubmit}
/>

<ElegantFilterCategories {categories} categoryselect={categorySelect} />

<ElegantFilterTypes
  {types}
  {sortTypes}
  {sortSelected}
  onTypeSelect={typeSelect}
  {onSortSelect}
  bind:view
/>

{#if view === "CARD"}
  <ElegantPageCard bind:items={items} />
{:else}
  <ElegantTable
    {tableHeaders}
    bind:items={items}
    linkprefix=""
    linkcolumnname="link"
    tableRowClick={undefined}
    searchItems={searchSubmit}
  />
{/if}

<style>
</style>
