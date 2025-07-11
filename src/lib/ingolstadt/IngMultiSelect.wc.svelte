<svelte:options customElement="ing-multi-select" />

<script lang="ts">
  let {
    label = "",
    icon = "",
    placeholder = "",
    items = "",
    value = $bindable(""),
    selectStyle = "",
  }: {
    label: string;
    icon?: string;
    placeholder?: string;
    items: string;
    value?: string;
    selectStyle?: string;
  } = $props();

  let realItems: string[] = items.split(",").map((item) => item.trim());
  let realValues: string[] = [];
  if (value) realValues = value.split(",").map((item) => item.trim());
  let realChecked: { [key: string]: boolean } = {};

  for (let option of realItems) {
    if (realValues.includes(option)) {
      realChecked[option] = true;
    } else {
      realChecked[option] = false;
    }
  }

  console.log(realItems);
  console.log(realValues);
  console.log(realChecked);

  const inputChanged = (e: any) => {
    if (e && e.target) {
      let inputName = e.target.id;
      let inputValue = e.target.checked;

      //console.log(e.target.id);
      console.log(inputName);
      console.log(inputValue);

      if (inputValue && !realValues.includes(inputName)) {
        realValues.push(inputName);
      } else if (!inputValue && realValues.includes(inputName)) {
        let index = realValues.indexOf(inputName);
        realValues.splice(index, 1);
      }

      inputValue = realValues.join(",");
      console.log(realValues);
      console.log(realChecked);

      // set inner value for web components
      //$host().innerText = inputValue;

      // dispatch document event for easy client reading
      document.dispatchEvent(
        new CustomEvent("SelectChangedEvent", {
          detail: {
            id: label,
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
          <input
            type="checkbox"
            id={option}
            name={option}
            onchange={(e) => {
              inputChanged(e);
            }}
            bind:checked={realChecked[option]}
          />
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
