import { html } from "lit-html";

const defaultArgs = {
  aligned: "left",
  body: "This is the body text for the empty state.",
  maxLines: 3,
  heading: "This is the heading",
  imageSize: "default",
  subheading: "This is the subheading",
  showImage: false,
  showActions: false,
  theme: "inherit",
};

export default {
  title: "Web Components/Empty state",
  component: "ic-empty-state",
};

export const WithSubheadingAndBodyText = {
  render: () =>
    html`<ic-empty-state
      heading="Empty state title"
      subheading="Empty state subtitle"
      body="Body text for the empty state."
    ></ic-empty-state>`,

  name: "With subheading and body text",
};

export const WithActions = {
  render: () =>
    html`<ic-empty-state
      heading="Empty state title"
      subheading="Empty state subtitle"
      body="Body text for the empty state."
    >
      <ic-button slot="actions">Action</ic-button>
      <ic-link href="/" slot="actions">Standalone link</ic-link></ic-empty-state
    >`,

  name: "With actions",
};

export const WithImage = {
  render: () => html`<ic-empty-state
      heading="Empty state title"
      subheading="Empty state subtitle"
      body="Body text for the empty state."
    >
      <svg
        slot="image"
        height:326px;width:326px;"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 900"
      >
        <rect fill="#ff7700" width="1600" height="1600" y="-350" />
        <polygon fill="#cc0000" points="957 450 539 900 1396 900" />
        <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />
        <polygon fill="#c50022" points="-60 900 398 662 816 900" />
        <polygon fill="#a3001b" points="337 900 398 662 816 900" />
        <polygon fill="#be0044" points="1203 546 1552 900 876 900" />
        <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />
        <polygon fill="#b80066" points="641 695 886 900 367 900" />
        <polygon fill="#960052" points="587 900 641 695 886 900" />
        <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />
        <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />
        <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />
        <polygon fill="#880088" points="943 900 1210 900 971 687" /></svg
    ></ic-empty-state>`,

  name: "With image",
};

export const WithSmallImage = {
  render: () => html`<ic-empty-state
      heading="Empty state title"
      subheading="Empty state subtitle"
      body="Body text for empty state."
      image-size="small"
    >
      <svg
        slot="image"
        height:326px;width:326px;"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 900"
      >
        <rect fill="#ff7700" width="1600" height="1600" y="-350" />
        <polygon fill="#cc0000" points="957 450 539 900 1396 900" />
        <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />
        <polygon fill="#c50022" points="-60 900 398 662 816 900" />
        <polygon fill="#a3001b" points="337 900 398 662 816 900" />
        <polygon fill="#be0044" points="1203 546 1552 900 876 900" />
        <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />
        <polygon fill="#b80066" points="641 695 886 900 367 900" />
        <polygon fill="#960052" points="587 900 641 695 886 900" />
        <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />
        <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />
        <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />
        <polygon fill="#880088" points="943 900 1210 900 971 687" /></svg
    ></ic-empty-state>`,

  name: "With small image",
};

export const WithLargeImage = {
  render: () =>
    html`<ic-empty-state
      heading="Empty state title"
      subheading="Empty state subtitle"
      body="Body text for empty state."
      image-size="large"
    >
      <svg
        slot="image"
        style="height:326px;width:326px;"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 900"
      >
        <rect fill="#ff7700" width="1600" height="1600" y="-350" />
        <polygon fill="#cc0000" points="957 450 539 900 1396 900" />
        <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />
        <polygon fill="#c50022" points="-60 900 398 662 816 900" />
        <polygon fill="#a3001b" points="337 900 398 662 816 900" />
        <polygon fill="#be0044" points="1203 546 1552 900 876 900" />
        <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />
        <polygon fill="#b80066" points="641 695 886 900 367 900" />
        <polygon fill="#960052" points="587 900 641 695 886 900" />
        <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />
        <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />
        <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />
        <polygon fill="#880088" points="943 900 1210 900 971 687" /></svg
    ></ic-empty-state>`,

  name: "With large image",
};

export const WithIcon = {
  render: () =>
    html`<ic-empty-state
      heading="Empty state title"
      subheading="Empty state subtitle"
      body="Body text for the empty state."
    >
      <svg
        slot="image"
        aria-labelledby="warning-title"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="#D07932"
      >
        <title id="warning-title">Warning</title>
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
      </svg>
    </ic-empty-state>`,

  name: "With icon",
};

export const CentreAligned = {
  render: () =>
    html`<ic-empty-state
      heading="Empty state title"
      subheading="Empty state subtitle"
      body="Body text for empty state."
      aligned="center"
    >
      <svg
        slot="image"
        style="height:326px;width:326px;"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 900"
      >
        <rect fill="#ff7700" width="1600" height="1600" y="-350" />
        <polygon fill="#cc0000" points="957 450 539 900 1396 900" />
        <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />
        <polygon fill="#c50022" points="-60 900 398 662 816 900" />
        <polygon fill="#a3001b" points="337 900 398 662 816 900" />
        <polygon fill="#be0044" points="1203 546 1552 900 876 900" />
        <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />
        <polygon fill="#b80066" points="641 695 886 900 367 900" />
        <polygon fill="#960052" points="587 900 641 695 886 900" />
        <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />
        <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />
        <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />
        <polygon fill="#880088" points="943 900 1210 900 971 687" /></svg
      ><ic-button slot="actions">Action</ic-button>
      <ic-link href="/" slot="actions">Standalone link</ic-link></ic-empty-state
    >`,

  name: "Centre aligned",
};

export const RightAligned = {
  render: () =>
    html`<ic-empty-state
      heading="Empty state title"
      subheading="Empty state subtitle"
      body="Body text for empty state."
      aligned="right"
    >
      <svg
        slot="image"
        style="height:326px;width:326px;"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 900"
      >
        <rect fill="#ff7700" width="1600" height="1600" y="-350" />
        <polygon fill="#cc0000" points="957 450 539 900 1396 900" />
        <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />
        <polygon fill="#c50022" points="-60 900 398 662 816 900" />
        <polygon fill="#a3001b" points="337 900 398 662 816 900" />
        <polygon fill="#be0044" points="1203 546 1552 900 876 900" />
        <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />
        <polygon fill="#b80066" points="641 695 886 900 367 900" />
        <polygon fill="#960052" points="587 900 641 695 886 900" />
        <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />
        <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />
        <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />
        <polygon fill="#880088" points="943 900 1210 900 971 687" /></svg
      ><ic-button slot="actions">Action</ic-button>
      <ic-link href="/" slot="actions">Standalone link</ic-link></ic-empty-state
    >`,

  name: "Right aligned",
};

export const MaxLines = {
  render: () =>
    html`<ic-empty-state
      heading="Empty state title"
      subheading="Empty state subtitle"
      body="Body of text that is truncated to two lines. Click the 'See more' link to expand the text, then click 'See less' to truncate the text once more!
Dripper caramelization java saucer grounds galão, mocha, and robusta kopi-luwak, percolator, instant, qui saucer latte in brewed café au lait. Con panna, cup, cream, body americano affogato cup espresso, rich milk seasonal saucer grinder spoon that cultivar strong redeye frappuccino barista extraction redeye mazagran. Grounds, french press dripper organic and foam id saucer, crema, black rich dark, grounds breve coffee steamed caramelization percolator."
      max-lines="2"
    >
      <svg
        slot="image"
        style="height:326px;width:326px;"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 900"
      >
        <rect fill="#ff7700" width="1600" height="1600" y="-350" />
        <polygon fill="#cc0000" points="957 450 539 900 1396 900" />
        <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />
        <polygon fill="#c50022" points="-60 900 398 662 816 900" />
        <polygon fill="#a3001b" points="337 900 398 662 816 900" />
        <polygon fill="#be0044" points="1203 546 1552 900 876 900" />
        <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />
        <polygon fill="#b80066" points="641 695 886 900 367 900" />
        <polygon fill="#960052" points="587 900 641 695 886 900" />
        <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />
        <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />
        <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />
        <polygon fill="#880088" points="943 900 1210 900 971 687" /></svg
      ><ic-button slot="actions">Action</ic-button>
      <ic-link href="/" slot="actions">Standalone link</ic-link></ic-empty-state
    >`,

  name: "Max lines",
};

export const SlottedContent = {
  render: () =>
    html`<ic-empty-state>
      <ic-typography slot="heading" variant="h4">
        Empty state title
      </ic-typography>
      <ic-typography slot="subheading" variant="subtitle-small">
        Empty state subtitle
      </ic-typography>
      <ic-typography slot="body"> Body text for empty state. </ic-typography>
      <svg
        slot="image"
        style="height:326px;width:326px;"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 900"
      >
        <rect fill="#ff7700" width="1600" height="1600" y="-350" />
        <polygon fill="#cc0000" points="957 450 539 900 1396 900" />
        <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />
        <polygon fill="#c50022" points="-60 900 398 662 816 900" />
        <polygon fill="#a3001b" points="337 900 398 662 816 900" />
        <polygon fill="#be0044" points="1203 546 1552 900 876 900" />
        <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />
        <polygon fill="#b80066" points="641 695 886 900 367 900" />
        <polygon fill="#960052" points="587 900 641 695 886 900" />
        <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />
        <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />
        <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />
        <polygon fill="#880088" points="943 900 1210 900 971 687" /></svg
      ><ic-button slot="actions">Action</ic-button>
      <ic-link href="/" slot="actions">Standalone link</ic-link></ic-empty-state
    >`,

  name: "Slotted content",
};

export const WithinDiv = {
  render: () =>
    html`<div style="width:357px;border:1px solid black;background:#D3D3D3;">
      <ic-empty-state
        heading="Empty state title"
        subheading="Empty state subtitle"
        body="Body text for empty state."
      >
        <svg
          slot="image"
          style="height:326px;width:326px;"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1600 900"
        >
          <rect fill="#ff7700" width="1600" height="1600" y="-350" />
          <polygon fill="#cc0000" points="957 450 539 900 1396 900" />
          <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />
          <polygon fill="#c50022" points="-60 900 398 662 816 900" />
          <polygon fill="#a3001b" points="337 900 398 662 816 900" />
          <polygon fill="#be0044" points="1203 546 1552 900 876 900" />
          <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />
          <polygon fill="#b80066" points="641 695 886 900 367 900" />
          <polygon fill="#960052" points="587 900 641 695 886 900" />
          <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />
          <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />
          <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />
          <polygon fill="#880088" points="943 900 1210 900 971 687" /></svg
        ><ic-button slot="actions">Action</ic-button>
        <ic-link href="/" slot="actions"
          >Standalone link</ic-link
        ></ic-empty-state
      >
    </div>`,
};

export const Playground = {
  render: (args) =>
    html`<ic-empty-state
      heading=${args.heading}
      subheading=${args.subheading}
      body=${args.body}
      image-size=${args.imageSize}
      max-lines=${args.maxLines}
      aligned=${args.aligned}
      theme=${args.theme}
    >
      ${args.showImage &&
      html`
      <svg
        slot="image"
        height:326px;width:326px;"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 900"
      >
        <rect fill="#ff7700" width="1600" height="1600" y="-350" />
        <polygon fill="#cc0000" points="957 450 539 900 1396 900" />
        <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />
        <polygon fill="#c50022" points="-60 900 398 662 816 900" />
        <polygon fill="#a3001b" points="337 900 398 662 816 900" />
        <polygon fill="#be0044" points="1203 546 1552 900 876 900" />
        <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />
        <polygon fill="#b80066" points="641 695 886 900 367 900" />
        <polygon fill="#960052" points="587 900 641 695 886 900" />
        <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />
        <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />
        <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />
        <polygon fill="#880088" points="943 900 1210 900 971 687" />
      </svg>
          `}
      ${args.showActions &&
      html`
        <ic-button slot="actions">Action</ic-button>
        <ic-link href="/" slot="actions">Standalone link</ic-link>
      `}
    </ic-empty-state>`,

  args: defaultArgs,

  argTypes: {
    aligned: {
      options: ["left", "center", "right"],

      control: {
        type: "radio",
      },
    },

    imageSize: {
      options: ["medium", "small", "large"],

      control: {
        type: "radio",
      },
    },

    theme: {
      options: ["inherit", "light", "dark"],
      control: {
        type: "inline-radio",
      },
    },
  },

  name: "Playground",
};
