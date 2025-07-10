<svelte:options customElement="mv-elegant-card" />

<script lang="ts">
  let {
    item = {
      dateTime: "",
      categories: [],
      imageUrl: "",
      title: "",
      authorImageUrl: "",
      authorName: "",
      authorUrl: "",
      description: "",
      link: "",
      types: []
    }
  } = $props();
</script>

<div class="card_frame">

  <div class="top_left_label">
    <span>{item.dateTime}</span>
    <div class="top_right_icons">
      {#each item.categories as cat}
        {#if cat.imageUrl}
          <img src={cat.imageUrl} alt="category icon" title={cat.name}/>
        {:else if cat.symbol}
          <span class="card_symbol" title={cat.name}>{cat.symbol}</span>
        {/if}
      {/each}
    </div>
  </div>

  {#if item.imageUrl}
    <img class="header_image" src={item.imageUrl} alt="header preview" />
  {/if}

  <a href={item.link} class="title">{item.title}</a>

  <a class="author" href={item.authorUrl} target="_blank">
    {#if item.authorImageUrl}
    <img src={item.authorImageUrl} alt="profile"/>
    {/if}
    {item.authorName}
  </a>
  <div class="footer">
    <div class="description">{item.description}</div>
    <div class="link">
      <a href={item.link} target="_blank">Open asset ↗</a>
      <div class="type_box">
        {#each item.types as type}
          {#if type.imageUrl}
            <img src={type.imageUrl} alt="category icon" title={type.name}/>
          {:else if type.symbol}
            <span class="card_symbol" title={type.name}>{type.symbol}</span>
          {/if}
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  .card_frame {
    display: flex;
    flex-wrap: wrap;
    width: 288px;
    height: 428px;
    border: 1px solid var(--gm3-sys-color-surface-variant, #e1e3e1);
    border-radius: 12px;
    margin: 16px 16px 32px 16px;
   
  }
  
  .top_left_label {
    display: flex;
    
    padding: 12px 18px;
    color: #444746;
    width: 100%;
    height: 28px;
  }

  .top_left_label span {
    white-space: nowrap;
  }

  .top_right_icons {
    display: flex;
    justify-content: right;
    width: 100%;
  }

  .top_right_icons img {
    object-fit: cover;
    width: 24px;
    height: 24px;
    margin-left: 4px;
  }

  .header_image {
    width: calc(100% - 18px);
    margin: 0px 18px;
    object-fit: cover;
    height: 144px;
    border-radius: 7px;
  }

  .title {
    padding: 12px 18px 4px;
    height: 48px;
    color: #1f1f1f;
    font-weight: 600;
    font-size: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.5rem;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .title:hover {
    color: #7c7c7c;
  }

  .author {
    display: flex;
    align-items: start;
    padding: 0px 18px 4px;
    height: 20px;
    color: #444746;
    font-size: .875rem;
    font-weight: 400;
    line-height: 1.25rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .author img {
    border-radius: 50%;
    object-fit: cover;
    width: 18px;
    height: 18px;
    margin-right: 8px;
  }

  .author:hover {
    color: #757a79;
  }

  .card_symbol {
    padding-left: 6px;
  }

  .card_symbol:hover {
    cursor:default;
  }

  .footer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 134px;
    padding-top: 9px;
    padding-bottom: 3px;
    width: 100%;
  }

  .description {
    padding: 3px 18px;
    height: 54px;
    width: calc(100% - 36px);
    overflow: hidden;
    color: #444746;
    font-size: .875rem;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 1.25rem;
    outline: none;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  .link {
    display: flex;
    width: calc(100% - 36px);
    overflow: hidden;
    padding: 0px 16px;
    padding-bottom: 14px;
  }

  .link a {
    color: #0b57d0;
    font-weight: 600;
    font-size: .975rem;
    letter-spacing: 0;
    line-height: 1.25rem;
    white-space: nowrap;
  }

  .link a:hover {
    color: #82aae9;
  }

  .type_box {
    display: flex;
    justify-content: right;
    flex-wrap: wrap;
    width: 100%;
  }

  .type_box img {
    object-fit: cover;
    width: 24px;
    height: 24px;
    margin-left: 4px;
  }
</style>