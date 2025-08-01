<svelte:options customElement="mv-elegant-landing" />

<script lang="ts">
  import ElegantHeader from "./ElegantHeader.wc.svelte";
  import IngButton from "../ingolstadt/IngButton.wc.svelte";

  let {
    titleText = "",
    titleUrl = "/",
    titleImageUrl = "",
    headerMenus = [],
    hero = {
      heroTitle: "Let's achieve more with our data & AI assets",
      heroDescription: "Apigee Marketplace is a specialized online hub designed to connect data providers and consumers within various industrial sectors. Its focus is on facilitating the exchange of highly valuable industrial datasets, empowering businesses to optimize operations, accelerate innovation, and gain a competitive edge.",
      heroButton1: "Sign in",
      heroButton2: "Register"
    },
    sections = [
      {
        sectionTitle: "Our mission is data & AI collaboration at scale",
        sectionDescription: "Apigee Marketplace is a specialized online hub designed to connect data providers and consumers within and across industries. Its focus is on facilitating the exchange of highly valuable industrial datasets, empowering businesses to optimize operations, accelerate innovation, and gain a competitive edge.",
        sectionImageUrl: "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }, {
        sectionTitle: "Transparent & simple pricing for first, second and third-party data",
        sectionDescription: "Our data marketplace puts simplicity at the forefront. Pricing structures are clear and concise, with no hidden fees or complicated calculations. You'll find tiered subscription options based on your needs, or the ability to pay-as-you-go for individual datasets.",
        sectionImageUrl: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }, {
        sectionTitle: "Verified & curated data from a network of high-quality partners",
        sectionDescription: "Data Marketplace is a specialized online hub designed to connect data providers and consumers within various industrial sectors. Its focus is on facilitating the exchange of highly valuable industrial datasets, empowering businesses to optimize operations, accelerate innovation, and gain a competitive edge.",
        sectionImageUrl: "https://images.unsplash.com/photo-1540646794357-6cbbd6f3501e?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }, {
        sectionTitle: "Security & privacy built-in",
        sectionDescription: "Apigee Marketplace prioritizes security by providing a multi-layered approach to protect customer data and infrastructure. Built-in safeguards, like encryption and access control, are foundational to the platform. The global network, equipped with custom-designed hardware and a hardened operating system, ensures high availability and resilience against attacks.",
        sectionImageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }
    ],
  }: {
    titleText: string;
    titleUrl: string;
    titleImageUrl: string;
    headerMenus: {
      title: string;
      titleUrl: string;
      titleColor: string;
      imageUrl: string;
      imageShape: string;
      items: {
        title: string;
        url: string;
      }[];
    }[];
    hero: {
      heroTitle: string;
      heroDescription: string;
      heroButton1: string;
      heroButton2: string
    }
    sections: {
      sectionTitle: string;
      sectionImageUrl: string;
      sectionDescription: string
    }[];
  } = $props();

  if (typeof hero == "string") {
    hero = JSON.parse(hero);
  }
  if (typeof sections == "string") {
    sections = JSON.parse(sections);
  }
</script>

<ElegantHeader {titleText} {titleUrl} {titleImageUrl} {headerMenus}
></ElegantHeader>

<div class="background_left">
  <svg
    class="g-h-swoop-image"
    role="presentation"
    width="289"
    height="208"
    viewBox="0 0 315 222"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ><g clip-path="url(#clip0_228_2286)"
      ><path
        d="M312.433 -0.753784C312.912 1.10786 313.214 3.26622 313.397 5.75039C315.766 43.4191 313.397 80.2612 297.105 114.978C266.832 180.101 212.21 210.124 143.637 218.95C94.2485 225.333 46.4444 217.558 0.000188589 201.267C-0.27401 201.17 -0.548162 201.074 -0.822266 200.977"
        stroke="#4285F4"
        stroke-width="2"
        stroke-linejoin="round"
      ></path></g
    ></svg
  >
</div>
<div class="background_right">
  <svg
    class="g-h-swoop-image"
    role="presentation"
    width="192"
    height="618"
    viewBox="0 0 192 618"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ><path
      d="M33.2884 -0.999986C11.8162 21.3558 1.00001 48.7302 1.00001 77.9528C1.00003 229.64 178.083 265.688 178.083 415.406C178.083 477.349 135.321 488.804 135.321 550.137C135.321 583.574 163.684 611.749 193 617"
      stroke="#FBBC04"
      stroke-width="2"
      stroke-linejoin="round"
    ></path></svg
  >
</div>

<div class="landing_main_panel">
  <div id="overview" class="landing_heading">
    {hero.heroTitle}
  </div>
  <div class="landing_content">
    <div>{hero.heroDescription}</div>
  </div>
  <div class="landing_heading_small">
    <span>
      {#if hero.heroButton1}
        <IngButton buttonTitle={hero.heroButton1} type="primary"></IngButton>
      {/if}
      {#if hero.heroButton2}
        <IngButton buttonTitle={hero.heroButton2} type="secondary"></IngButton>
      {/if}
    </span>
  </div>

  {#each sections as section, i}
    <div class={(i & 1) ? "landing_content_gray" : "landing_content_white"}>
      <div class="landing_sub_heading">
        {section.sectionTitle}
      </div>
      <div class="landing_content_divided">
        {#if !(i & 1)}
          <div class="landing_content_half">
            <img
              class="landing_content_half_image"
              alt={"image for section " + i}
              src={section.sectionImageUrl}
            />
          </div>
          <div id="mission" class="landing_content_half_text">{section.sectionDescription}</div>
        {:else}
          <div id="mission" class="landing_content_half_text">{section.sectionDescription}</div>
          <div class="landing_content_half">
            <img
              class="landing_content_half_image"
              alt={"image for section " + i}
              src={section.sectionImageUrl}
            />
          </div>
        {/if}
      </div>
    </div>
  {/each}

  <div class="footer"></div>
</div>

<style>
  .background_left {
    position: absolute;
    /* top: 72px; */
  }

  .background_right {
    position: absolute;
    /* top: 72px; */
    right: 0px;
  }

  .landing_main_panel {
    background: var(--primary-background-color);
    left: 0px;
    width: 100%;
    bottom: 0px;
    padding-top: 104px;
    text-align: center;
  }

  .landing_heading {
    margin: auto;
    margin-top: 75px;
    width: 60vw;
    font-size: 72px;
    font-style: normal;
  }

  .landing_content_divided {
    width: 60vw;
    margin: auto;
    display: flex;
  }

  .landing_content {
    margin: auto;
    margin-top: 46px;
    color: #555;
    line-height: 24px;
    width: 60vw;
  }

  .landing_content_half {
    margin: auto;
    margin-top: 46px;
    color: #555;
    line-height: 24px;
    width: 50%;
    text-align: center;
  }

  .landing_content_half_image {
    width: 80%;
    border-radius: 45px;
  }

  .landing_content_half_text {
    margin: auto;
    margin-top: 98px;
    color: #555;
    line-height: 24px;
    width: 50%;
    text-align: left;
  }

  .landing_heading_small {
    margin: auto;
    margin-top: 35px;
    width: 60vw;
  }

  .landing_content_gray {
    background-color: rgb(248, 249, 250);
    margin-top: 74px;
    min-height: 400px;
    /* margin-bottom: 400px; */
    padding-bottom: 110px;
  }

  .landing_content_white {
    background-color: rgb(255, 255, 255);
    /* margin-top: 74px; */
    min-height: 400px;
    /* margin-bottom: 400px; */
    /* padding-bottom: 110px; */
  }

  .landing_sub_heading {
    margin: auto;
    padding-top: 124px;
    width: 50vw;
    font-size: 48px;
    font-style: normal;
    padding-bottom: 22px;
  }

  .footer {
    height: 200px;
    width: 100%;
  }
</style>
