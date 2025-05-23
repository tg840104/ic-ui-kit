import { html } from "lit-html";

const defaultArgs = {
  dismissible: false,
  heading: "Heading",
  message: "Message",
  titleAbove: false,
  variant: "neutral",
  showAction: false,
  showDefaultIcon: true,
  showSlottedIcon: false,
  theme: "inherit",
};

export default {
  title: "Web Components/Alert",
  component: "ic-alert",
};

export const Variants = {
  render: () =>
    html`<ic-alert
        heading="Neutral"
        message="This alert is for displaying miscellaneous messages"
      ></ic-alert>
      <ic-alert
        variant="info"
        heading="Info"
        message="This alert is for displaying information"
      ></ic-alert>
      <ic-alert
        variant="error"
        heading="Error"
        message="This alert is for displaying errors"
      ></ic-alert>
      <ic-alert
        variant="warning"
        heading="Warning"
        message="This alert is for displaying warnings"
      ></ic-alert>
      <ic-alert
        variant="success"
        heading="Success"
        message="This alert is for displaying success messages. It has a very long message with lots of text which goes over multiple
        lines so the alert should expand as well to make sure it doesn't overflow"
      ></ic-alert>`,

  name: "Variants",
};

export const MessageOnly = {
  render: () =>
    html`<ic-alert
      message="This alert is for displaying miscellaneous messages"
    ></ic-alert>`,

  name: "Message only",
};

export const Dismissible = {
  render: () =>
    html`<ic-alert
      heading="Neutral"
      message="This alert is for displaying miscellaneous messages"
      dismissible="true"
    ></ic-alert>`,

  name: "Dismissible",
};

export const WithAction = {
  render: () =>
    html`<ic-alert
      heading="Neutral"
      message="This alert is for displaying miscellaneous messages"
      ><ic-button slot="action" variant="secondary" monochrome="true"
        >Button</ic-button
      ></ic-alert
    >`,

  name: "With action",
};

export const DismissibleWithAction = {
  render: () =>
    html`<ic-alert
      heading="Neutral"
      message="This alert is for displaying miscellaneous messages"
      dismissible="true"
      ><ic-button slot="action" variant="secondary" monochrome="true"
        >Button</ic-button
      ></ic-alert
    >`,

  name: "Dismissible with action",
};

export const TitleAbove = {
  render: () =>
    html`<ic-alert
      heading="Neutral"
      message="This alert is for displaying miscellaneous messages"
      title-above="true"
    ></ic-alert>`,

  name: "Title above",
};

export const ResponsiveTitle = {
  render: () =>
    html`<ic-alert
        heading="This title is very long so should force the alert to add 'title-above'"
        message="This alert does not have 'title-above' added as a prop but it is forced to add it due to the length of the title"
      ></ic-alert>
      <ic-alert
        variant="success"
        heading="Shorter title"
        message="Neither of these has 'title-above' set to true"
      ></ic-alert>`,

  name: "Responsive title",
};

export const CustomMessage = {
  render: () =>
    html`<ic-alert heading="This alert uses a custom message slot">
      <ic-typography slot="message">
        This is some text and
        <ic-link href="/" inline>this is an inline link</ic-link> within the
        text.
      </ic-typography>
    </ic-alert>`,

  name: "Custom message",
};

export const CustomMessageAndTitleAbove = {
  render: () => html`<ic-alert
    heading="Want to know more about our coffee?"
    title-above="true"
  >
    <ic-typography slot="message">
      Go to our <ic-link href="/">coffee page</ic-link> to learn more.
    </ic-typography>
  </ic-alert>`,

  name: "Custom message and title above",
};

export const Announced = {
  render: () => html`
    <ic-alert
      id="alert"
      heading="Neutral"
      message="This alert is for displaying miscellaneous messages"
      announced="false"
    ></ic-alert>
    <br />
    <br />
    <ic-button variant="primary" size="small" onClick="onClick()" id="btn"
      >Toggle announced prop</ic-button
    >
    <script>
      const alert = document.getElementById("alert");
      const btn = document.getElementById("btn");
      btn.addEventListener("click", onClick);
      function onClick(e) {
        e.preventDefault();
        alert.announced
          ? (alert.announced = "false")
          : (alert.announced = "true");
      }
    </script>
  `,

  name: "Announced",
};

export const SlottedIcon = {
  render: () => html`
    <ic-alert
      id="alert"
      heading="Neutral"
      message="This alert contains a slotted icon"
      show-default-icon="false"
    >
      <svg
        slot="neutral-icon"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
        />
      </svg>
    </ic-alert>
  `,

  name: "Slotted icon",
};

export const NoIcon = {
  render: () => html`
    <ic-alert
      id="alert"
      heading="Neutral"
      message="This alert has no icon"
      show-default-icon="false"
    ></ic-alert>
  `,

  name: "No icon",
};

export const Playground = {
  render: (args) =>
    html`<ic-alert
      dismissible=${args.dismissible}
      variant=${args.variant}
      heading=${args.heading}
      message=${args.message}
      title-above=${args.titleAbove}
      show-default-icon=${args.showDefaultIcon}
      theme=${args.theme}
    >
      ${args.showAction &&
      html`<ic-button slot="action" variant="secondary" monochrome="true"
        >Button</ic-button
      >`}
      ${args.showSlottedIcon &&
      html`<svg
        slot="neutral-icon"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
        />
      </svg>`}
    </ic-alert>`,

  args: defaultArgs,

  argTypes: {
    variant: {
      options: ["neutral", "info", "warning", "error", "success"],

      control: {
        type: "select",
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
