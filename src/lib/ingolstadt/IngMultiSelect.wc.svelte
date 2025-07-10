<svelte:options customElement="ing-multi-select" />

<script lang="ts">
  let {
    label = "",
    icon = "",
    placeholder = "",
    items = "",
    input = $bindable(""),
    selectStyle=""
  }: {
    label: string,
    icon?: string,
    placeholder?: string,
    items: string,
    input?: string,
    selectStyle?: string
  } = $props();

  let realItems: string[] = items.split(",");

  const inputChanged = (e: any) => {
    if (e && e.target) {
      let inputValue = "";
      inputValue = e.target.checked;

      //console.log(e.target.id);
      console.log(e.target.id);
      console.log(inputValue);

      // set inner value for web components
      //$host().innerText = inputValue;

      // dispatch document event for easy client reading
      document.dispatchEvent(
        new CustomEvent("SelectChangedEvent", {
          detail: {
            id: "hh",
            input: inputValue,
          },
        }),
      );

      // dispatch local element event, maybe also useful
      // $host().dispatchEvent(new CustomEvent("inputchanged", {detail: {
      //   input: inputValue
      // }}));
    }
  };
</script>

<div style={selectStyle} class="input_frame">
  {#if label}
    <div class="input_label">
      {label}
    </div>
  {/if}
  <div class="input_box">
    {#if icon}
      <span class="input_icon">
        <img width="16px" src={icon} alt="" />
      </span>
    {/if}

    <fieldset class="input_field">
      <!-- <legend style="padding-top: 12px;">{label}</legend> -->
      {#each realItems as option}
        <div>
          <input type="checkbox" id={option} name={option} oninput={(e) => {inputChanged(e)}} />
          <label for={option}>{option}</label>
        </div>
      {/each}
    </fieldset>
  </div>
</div>

<style>
  .input_frame {
    padding-right: 24px;
    margin-bottom: 14px;
    width: 280px;
    user-select: none;
  }

  .input_box {
    display: flex;
    color: #4a5073;
    background-color: #fff;
    border: 0.0625rem solid #d1d7e0;
    border-radius: 0.5rem;
    user-select: none;
    margin-top: 6px;
  }

  .input_icon {
    width: 32px;
    position: relative;
    top: 12px;
    left: 9px;
  }

  .input_field {
    box-shadow: none;
    width: 280px;
    color: #66799e;
    background-color: #fff;
    background-clip: padding-box;
    appearance: none;
    border: transparent;
    font-size: 16px;
    border-style: none;
    border-radius: 0.5rem;
    margin-left: 4px;
    margin-right: 8px;
  }

  .input_field:focus {
    outline: none;
  }
</style>
