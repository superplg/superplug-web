<svelte:options customElement="ing-button" />

<script>
  const {
    buttonTitle = "",
    type = "primary",
    size = "medium",
    onClick = undefined,
  } = $props();

  function onButtonClick(e) {
    if (onClick) {
      onClick(e);
    }
    
    if (buttonTitle) {
      document.dispatchEvent(
        new CustomEvent(buttonTitle, {
          detail: {},
        }),
      );
    }
  }
</script>

<button
  type="button"
  class={"button button--" + size + " button--" + type}
  onclick={onButtonClick}
>
  {#if buttonTitle}
    {buttonTitle}
  {:else}
    <slot />
  {/if}
</button>

<style>
  .button {
    display: inline-block;
    cursor: pointer;
    border: 0;
    margin-left: 14px;
    border-radius: 3em;
    font-weight: 700;
    line-height: 1;
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  .button--primary {
    background-color: #1ea7fd;
    color: white;
  }
  .button--secondary {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
    background-color: transparent;
    color: #333;
  }
  .button--small {
    padding: 10px 16px;
    font-size: 12px;
  }
  .button--medium {
    padding: 11px 20px;
    font-size: 14px;
  }
  .button--large {
    padding: 12px 24px;
    font-size: 16px;
  }
</style>
