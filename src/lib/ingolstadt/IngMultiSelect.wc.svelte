<svelte:options customElement="ing-multi-select" />

<script lang="ts">
  let {
    inputId = "",
    label = "",
    icon = "",
    placeholder = "",
    items = "",
    value = $bindable(""),
    selectStyle = "",
    inputChanged = undefined
  }: {
    inputId?: string;
    label: string;
    icon?: string;
    placeholder?: string;
    items: string;
    value?: string;
    selectStyle?: string;
    inputChanged?: (id: string, value: string) => void;
  } = $props();

  if (inputId == "") inputId = label;

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

  const localInputChanged = (e: any) => {
    if (e && e.target) {
      let inputName = e.target.id;
      let inputValue = e.target.checked;

      if (inputValue && !realValues.includes(inputName)) {
        realValues.push(inputName);
      } else if (!inputValue && realValues.includes(inputName)) {
        let index = realValues.indexOf(inputName);
        realValues.splice(index, 1);
      }

      value = realValues.join(",");

      if (inputChanged) inputChanged(inputId, value);

      // dispatch document event for easy client reading
      document.dispatchEvent(
        new CustomEvent("SelectChangedEvent", {
          detail: {
            id: inputId,
            input: value,
          },
        }),
      );
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
              localInputChanged(e);
            }}
            bind:checked={realChecked[option]}
            form=""
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
