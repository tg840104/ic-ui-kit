import { html } from "lit-html";

const defaultArgs = {
  aligned: "left",
  border: true,
  heading: "Latte recipe",
  ["reverse-order"]: false,
  size: "medium",
  sticky: false,
  ["sticky-desktop-only"]: false,
  subheading:
    "A Latte is a popular Italian coffee, made with espresso, steamed milk and a thin layer of foam.",
  theme: "inherit",
  ["--ic-page-header-text-primary"]: "",
  ["--ic-page-header-background"]: "",
  ["--ic-page-header-border"]: "",
  ["--ic-page-header-text-tertiary"]: "",
  ["--ic-page-header-placeholder-text-field"]: "",
};

export default {
  title: "Web Components/Page header",
  component: "ic-page-header",

  parameters: {
    layout: "fullscreen",
  },
};

export const Playground = {
  render: (args) =>
    html`<ic-page-header
        aligned=${args.aligned}
        border=${args.border}
        heading=${args.heading}
        reverse-order=${args["reverse-order"]}
        size=${args.size}
        sticky=${args.sticky}
        sticky-desktop-only=${args["sticky-desktop-only"]}
        subheading=${args.subheading}
        theme=${args.theme}
        style="
      ${args["--ic-page-header-text-primary"] !== ""
          ? `--ic-page-header-text-primary: ${args["--ic-page-header-text-primary"]};`
          : ""}
      ${args["--ic-page-header-background"] !== ""
          ? `--ic-page-header-background: ${args["--ic-page-header-background"]};`
          : ""}
      ${args["--ic-page-header-border"] !== ""
          ? `--ic-page-header-border: ${args["--ic-page-header-border"]};`
          : ""}
      ${args["--ic-page-header-text-tertiary"] !== ""
          ? `--ic-page-header-text-tertiary: ${args["--ic-page-header-text-tertiary"]};`
          : ""}
      ${args["--ic-page-header-placeholder-text-field"] !== ""
          ? `--ic-page-header-placeholder-text-field: ${args["--ic-page-header-placeholder-text-field"]};`
          : ""}"
      >
        <ic-breadcrumb-group slot="breadcrumbs">
          <ic-breadcrumb
            current="true"
            page-title="Drinks"
            href="#"
          ></ic-breadcrumb>
          <ic-breadcrumb page-title="Coffees" href="#"> </ic-breadcrumb>
          <ic-breadcrumb page-title="Latte" href="#"></ic-breadcrumb>
        </ic-breadcrumb-group>
        <ic-chip slot="heading-adornment" label="Beta" size="large"></ic-chip>
        <ic-button slot="actions" variant="primary"
          >Create coffee
          <svg
            slot="left-icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"
              fill="currentColor"
            />
          </svg>
        </ic-button>
        <ic-button slot="actions" variant="tertiary">Filter coffee</ic-button>
        <ic-stepper slot="stepper">
          <ic-step heading="Warm kettle" type="completed"></ic-step>
          <ic-step
            heading="Warm milk"
            subheading="Optional"
            type="completed"
          ></ic-step>
          <ic-step heading="Pour milk" type="current" current></ic-step>
        </ic-stepper>
      </ic-page-header>
      <ic-section-container aligned=${args.aligned}>
        <ic-typography
          >Example page content to test out the sticky prop.</ic-typography
        >
        <ic-typography
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor.</ic-typography
        >
        <ic-typography
          >Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper
          congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie,
          enim est eleifend mi, non fermentum diam nisl sit amet
          erat.</ic-typography
        >
        <ic-typography
          >Duis semper. Duis arcu massa, scelerisque vitae, consequat in,
          pretium a, enim. Pellentesque congue. Ut in risus volutpat libero
          pharetra tempor. Cras vestibulum bibendum augue.</ic-typography
        >
        <ic-typography
          >Praesent egestas leo in pede. Praesent blandit odio eu enim.
          Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia Curae;
          Aliquam nibh.</ic-typography
        >
        <ic-typography
          >Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing
          ante non diam sodales hendrerit.</ic-typography
        >
        <ic-typography
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor.</ic-typography
        >
        <ic-typography
          >Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper
          congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie,
          enim est eleifend mi, non fermentum diam nisl sit amet
          erat.</ic-typography
        >
        <ic-typography
          >Duis semper. Duis arcu massa, scelerisque vitae, consequat in,
          pretium a, enim. Pellentesque congue. Ut in risus volutpat libero
          pharetra tempor. Cras vestibulum bibendum augue.</ic-typography
        >
        <ic-typography
          >Praesent egestas leo in pede. Praesent blandit odio eu enim.
          Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia Curae;
          Aliquam nibh.</ic-typography
        >
        <ic-typography
          >Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing
          ante non diam sodales hendrerit.</ic-typography
        >
        <ic-typography
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor.</ic-typography
        >
        <ic-typography
          >Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper
          congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie,
          enim est eleifend mi, non fermentum diam nisl sit amet
          erat.</ic-typography
        >
        <ic-typography
          >Duis semper. Duis arcu massa, scelerisque vitae, consequat in,
          pretium a, enim. Pellentesque congue. Ut in risus volutpat libero
          pharetra tempor. Cras vestibulum bibendum augue.</ic-typography
        >
        <ic-typography
          >Praesent egestas leo in pede. Praesent blandit odio eu enim.
          Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia Curae;
          Aliquam nibh.</ic-typography
        >
        <ic-typography
          >Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing
          ante non diam sodales hendrerit.</ic-typography
        >
      </ic-section-container>`,

  args: defaultArgs,
  name: "Playground",

  parameters: {
    layout: "fullscreen",
  },

  argTypes: {
    aligned: {
      options: ["center", "full-width", "left"],

      control: {
        type: "inline-radio",
      },
    },

    size: {
      options: ["medium", "small"],

      control: {
        type: "inline-radio",
      },
    },

    theme: {
      options: ["inherit", "dark", "light"],

      control: {
        type: "radio",
      },
    },

    "--ic-page-header-text-primary": {
      control: {
        type: "color",
      },
    },

    "--ic-page-header-background": {
      control: {
        type: "color",
      },
    },

    "--ic-page-header-border": {
      control: {
        type: "color",
      },
    },

    "--ic-page-header-text-tertiary": {
      control: {
        type: "color",
      },
    },

    "--ic-page-header-placeholder-text-field": {
      control: {
        type: "color",
      },
    },
  },
};

export const HeadingWithAdornment = {
  render: () => html`
    <ic-page-header heading="Page header">
      <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
    </ic-page-header>
  `,

  name: "Heading with adornment",
};

export const LeftAligned = {
  render: () => html`
    <ic-page-header
      aligned="left"
      heading="Page header"
      subheading="This is a simple page header component and this is the text."
    >
      <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
    </ic-page-header>
  `,

  name: "Left aligned",
};

export const Small = {
  render: () => html`
    <ic-page-header
      aligned="left"
      heading="Page header"
      subheading="This is a simple page header component and this is the text."
      size="small"
    >
      <ic-status-tag
        slot="heading-adornment"
        label="Beta"
        size="small"
      ></ic-status-tag>
    </ic-page-header>
  `,

  name: "Small",
};

export const WithoutBorder = {
  render: () => html`
    <ic-page-header heading="Page header" border="false">
      <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
    </ic-page-header>
  `,

  name: "Without border",
};

export const CenterAligned = {
  render: () => html`
    <ic-page-header
      aligned="center"
      heading="Page header"
      subheading="This is a simple page header component and this is the text."
    >
      <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
    </ic-page-header>
  `,

  name: "Center aligned",
};

export const FullWidth = {
  render: () => html`
    <ic-page-header
      aligned="full-width"
      heading="Page header"
      subheading="This is a simple page header component and this is the text."
    >
      <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
    </ic-page-header>
  `,

  name: "Full width",
};

export const Sticky = {
  render: () => html`
    <ic-page-header
      sticky
      heading="Page header"
      subheading="This is a simple page header component and this is the text."
    >
      <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
    </ic-page-header>
  `,

  name: "Sticky",
};

export const StickyWithContentAndFooter = {
  render: () => html`
    <ic-top-navigation app-title="ApplicationName">
      <svg
        slot="app-icon"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"
        />
      </svg>
    </ic-top-navigation>
    <ic-page-header
      sticky
      heading="Page header"
      subheading="This is a simple page header component and this is the text."
    >
      <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
    </ic-page-header>
    <ic-section-container style="height:800px">
      This is an example of how the sticky variant of the page header would work
      with some content and the footer.
    </ic-section-container>
    <ic-footer
      description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, 
          please get in touch."
      caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
    >
      <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>
      <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>
      <ic-footer-link slot="link" href="/">Styles</ic-footer-link>
      <ic-footer-link slot="link" href="/">Components</ic-footer-link>
      <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>
      <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>
      <div
        slot="logo"
        style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;
          background-color:var(--ic-brand-color-primary);color:var(--ic-brand-text-color);"
      >
        Logo
      </div>
    </ic-footer>
  `,

  name: "Sticky with content and footer",
};

export const StickyForLargeAndExtraLargeBreakpointsOnly = {
  render: () => html`
    <ic-top-navigation app-title="ApplicationName">
      <svg
        slot="app-icon"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"
        />
      </svg>
    </ic-top-navigation>
    <ic-page-header
      sticky-desktop-only
      heading="Page header"
      subheading="This is a simple page header component and this is the text. This page header is only sticky for viewport widths of 992px and above."
    >
      <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
    </ic-page-header>
    <ic-section-container style="height:800px">
      This is an example of how the sticky-desktop-only variant of the page
      header would work with some content and the footer.
    </ic-section-container>
    <ic-footer
      description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, 
          please get in touch."
      caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
    >
      <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>
      <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>
      <ic-footer-link slot="link" href="/">Styles</ic-footer-link>
      <ic-footer-link slot="link" href="/">Components</ic-footer-link>
      <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>
      <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>
      <div
        slot="logo"
        style="width:100px;height:100px;display:flex;align-items:center;justify-content:center;
          background-color:var(--ic-brand-color-primary);color:var(--ic-brand-text-color);"
      >
        Logo
      </div>
    </ic-footer>
  `,

  name: "Sticky for large and extra-large breakpoints only",
};

export const WithBreadcrumbs = {
  render: () => html`
    <ic-page-header
      heading="Page header"
      subheading="This is a page header component with additional functionality and this is the text."
      reverse-order
    >
      <ic-breadcrumb-group slot="breadcrumbs">
        <ic-breadcrumb
          page-title="Breadcrumb 1"
          href="/breadcrumb-1"
        ></ic-breadcrumb>
        <ic-breadcrumb
          current="true"
          page-title="Breadcrumb 2"
          href="/breadcrumb-2"
        ></ic-breadcrumb>
      </ic-breadcrumb-group>
    </ic-page-header>
  `,

  name: "With breadcrumbs",
};

export const WithActions = {
  render: () => html`
    <ic-page-header
      heading="Page header"
      subheading="This is a page header component with additional functionality and this is the text."
      reverse-order
    >
      <ic-button slot="actions" variant="primary"
        >Create coffee
        <svg
          slot="left-icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"
            fill="currentColor"
          />
        </svg>
      </ic-button>
      <ic-button slot="actions" variant="tertiary">Filter coffee</ic-button>
    </ic-page-header>
  `,

  name: "With actions",
};

export const WithInput = {
  render: () => html`
    <ic-page-header
      heading="Page header"
      subheading="This is a page header component with additional functionality and this is the text."
    >
      <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
      <ic-text-field slot="input" placeholder="Enter your input" hide-label />
    </ic-page-header>
  `,

  name: "With input",
};

export const WithStepper = {
  render: () => html`
    <ic-page-header
      heading="Create a coffee"
      subheading="This is a page header component with additional functionality and this is the text."
    >
      <ic-stepper slot="stepper">
        <ic-step heading="Warm kettle" type="completed"></ic-step>
        <ic-step
          heading="Warm milk"
          subheading="Optional"
          type="completed"
        ></ic-step>
        <ic-step heading="Pour milk" type="current" current></ic-step>
      </ic-stepper>
    </ic-page-header>
  `,

  name: "With stepper",
};

export const WithTabs = {
  render: () => html`
    <ic-page-header
      heading="Coffee recipes"
      subheading="This is a page header component with additional functionality and this is the text."
    >
      <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
      <ic-navigation-item
        slot="tabs"
        label="All recipes"
        href="?path=/story/web-components-page-header--with-tabs"
        selected
        aria-label="This page shows all the recipes"
      ></ic-navigation-item>
      <ic-navigation-item
        slot="tabs"
        label="Favourites"
        href="?path=/story/web-components-page-header--with-tabs"
        aria-label="Show your favourite recipes"
      ></ic-navigation-item>
      <ic-navigation-item
        slot="tabs"
        label="Section Three"
        href="?path=/story/web-components-page-header--with-tabs"
      ></ic-navigation-item>
      <ic-navigation-item
        slot="tabs"
        label="Section Four"
        href="?path=/story/web-components-page-header--with-tabs"
      ></ic-navigation-item>
      <ic-navigation-item
        slot="tabs"
        label="Section Five"
        href="?path=/story/web-components-page-header--with-tabs"
        target="_blank"
      ></ic-navigation-item>
      <ic-navigation-item
        slot="tabs"
        label="Section Six"
        href="?path=/story/web-components-page-header--with-tabs"
      ></ic-navigation-item>
      <ic-navigation-item
        slot="tabs"
        label="Section Seven"
        href="?path=/story/web-components-page-header--with-tabs"
      ></ic-navigation-item>
      <ic-navigation-item
        slot="tabs"
        label="Section Eight"
        href="?path=/story/web-components-page-header--with-tabs"
      ></ic-navigation-item>
      <ic-navigation-item
        slot="tabs"
        label="Section Nine"
        href="?path=/story/web-components-page-header--with-tabs"
      ></ic-navigation-item>
      <ic-navigation-item
        slot="tabs"
        label="Section Ten"
        href="?path=/story/web-components-page-header--with-tabs"
      ></ic-navigation-item>
    </ic-page-header>
  `,

  name: "With tabs",
};

export const WithBreadcrumbsInputActionsAndTabs = {
  render: () => html`
    <ic-page-header
      heading="Coffee recipes"
      subheading="This is a page header component that has breadcrumbs, an input area, actions & tabs."
      reverse-order
    >
      <ic-breadcrumb-group slot="breadcrumbs">
        <ic-breadcrumb
          page-title="Breadcrumb 1"
          href="/breadcrumb-1"
        ></ic-breadcrumb>
        <ic-breadcrumb
          current="true"
          page-title="Breadcrumb 2"
          href="/breadcrumb-2"
        ></ic-breadcrumb>
      </ic-breadcrumb-group>
      <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
      <ic-button slot="actions" variant="primary"
        >Create coffee
        <svg
          slot="left-icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"
            fill="currentColor"
          />
        </svg>
      </ic-button>
      <ic-button slot="actions" variant="tertiary">Filter coffee</ic-button>
      <ic-navigation-item
        slot="tabs"
        label="All recipes"
        href="?path=/story/web-components-page-header--with-tabs"
        selected
      ></ic-navigation-item>
      <ic-navigation-item
        slot="tabs"
        label="Favourites"
        href="?path=/story/web-components-page-header--with-tabs"
      ></ic-navigation-item>
      <ic-text-field slot="input" placeholder="Enter your input" hide-label />
    </ic-page-header>
  `,

  name: "With breadcrumbs, input, actions and tabs",
};

export const WithBreadcrumbsInputActionsAndStepper = {
  render: () => html`
    <ic-page-header
      heading="Coffee recipes"
      subheading="This is a page header component that has breadcrumbs, an input area, actions & stepper."
      reverse-order
    >
      <ic-breadcrumb-group slot="breadcrumbs">
        <ic-breadcrumb
          page-title="Breadcrumb 1"
          href="/breadcrumb-1"
        ></ic-breadcrumb>
        <ic-breadcrumb
          current="true"
          page-title="Breadcrumb 2"
          href="/breadcrumb-2"
        ></ic-breadcrumb>
      </ic-breadcrumb-group>
      <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
      <ic-button slot="actions" variant="primary"
        >Create coffee
        <svg
          slot="left-icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"
            fill="currentColor"
          />
        </svg>
      </ic-button>
      <ic-button slot="actions" variant="tertiary">Filter coffee</ic-button>
      <ic-stepper slot="stepper">
        <ic-step heading="Warm kettle" type="completed"></ic-step>
        <ic-step
          heading="Warm milk"
          subheading="Optional"
          type="completed"
        ></ic-step>
        <ic-step heading="Pour milk" type="current" current></ic-step>
      </ic-stepper>
      <ic-text-field slot="input" placeholder="Enter your input" hide-label />
    </ic-page-header>
  `,

  name: "With breadcrumbs, input, actions and stepper",
};

export const ComponentOverrides = {
  render: () => html`
    <ic-page-header>
      <ic-typography slot="heading" variant="h4">
        <h2>heading</h2>
      </ic-typography>
      <ic-typography slot="subheading" variant="body">
        subheading
      </ic-typography>
    </ic-page-header>
  `,

  name: "Component overrides",
};

export const WithBreadcrumbsInputActionsAndStepperAndLongTitle = {
  render: () => html`
    <ic-page-header
      heading="Coffee recipes with a very very long title"
      subheading="This is a page header component that has breadcrumbs, an input area, actions & stepper."
      reverse-order
    >
      <ic-breadcrumb-group slot="breadcrumbs">
        <ic-breadcrumb
          page-title="Breadcrumb 1"
          href="/breadcrumb-1"
        ></ic-breadcrumb>
        <ic-breadcrumb
          current="true"
          page-title="Breadcrumb 2"
          href="/breadcrumb-2"
        ></ic-breadcrumb>
      </ic-breadcrumb-group>
      <ic-status-tag slot="heading-adornment" label="Beta"></ic-status-tag>
      <ic-button slot="actions" variant="primary"
        >Create coffee
        <svg
          slot="left-icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"
            fill="currentColor"
          />
        </svg>
      </ic-button>
      <ic-button slot="actions" variant="tertiary">Filter coffee</ic-button>
      <ic-stepper slot="stepper">
        <ic-step heading="Warm kettle" type="completed"></ic-step>
        <ic-step
          heading="Warm milk"
          subheading="Optional"
          type="completed"
        ></ic-step>
        <ic-step heading="Pour milk" type="current" current></ic-step>
      </ic-stepper>
      <ic-text-field slot="input" placeholder="Enter your input" hide-label />
    </ic-page-header>
  `,

  name: "With breadcrumbs, input, actions and stepper and long title",
};

export const DarkTheme = {
  render: () => html`
    <ic-page-header
      heading="Coffee recipes"
      subheading="This is a page header component that has breadcrumbs, an input area, actions & stepper."
      reverse-order="true"
      theme="dark"
    >
      <ic-breadcrumb-group slot="breadcrumbs">
        <ic-breadcrumb
          page-title="Breadcrumb 1"
          href="/breadcrumb-1"
        ></ic-breadcrumb>
        <ic-breadcrumb
          current="true"
          page-title="Breadcrumb 2"
          href="/breadcrumb-2"
        ></ic-breadcrumb>
      </ic-breadcrumb-group>
      <ic-chip slot="heading-adornment" label="Beta" size="large"></ic-chip>
      <ic-button slot="actions" variant="primary"
        >Create coffee
        <svg
          slot="left-icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"
            fill="currentColor"
          />
        </svg>
      </ic-button>
      <ic-button slot="actions" variant="tertiary">Filter coffee</ic-button>
      <ic-stepper slot="stepper">
        <ic-step heading="Warm kettle" type="completed"></ic-step>
        <ic-step
          heading="Warm milk"
          subheading="Optional"
          type="completed"
        ></ic-step>
        <ic-step heading="Pour milk" type="current" current></ic-step>
      </ic-stepper>
      <ic-text-field slot="input" placeholder="Enter your input" hide-label />
    </ic-page-header>
  `,

  name: "Dark theme",
};
