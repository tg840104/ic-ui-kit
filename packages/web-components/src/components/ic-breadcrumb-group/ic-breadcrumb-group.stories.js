import { html } from "lit-html";

const defaultArgs = {
  appearance: "default",
  backBreadcrumbOnly: false,
  collapsed: false,
  current: false,
  href: "/",
  pageTitle: "Home",
  iconSlot: true,
};

export default {
  title: "Web Components/Breadcrumb",
  component: "ic-breadcrumb-group",
};

export const Default = {
  render: () => html`
    <ic-breadcrumb-group>
      <ic-breadcrumb
        page-title="Breadcrumb 1"
        href="/breadcrumb-1"
      ></ic-breadcrumb>
    </ic-breadcrumb-group>
    <ic-breadcrumb-group>
      <ic-breadcrumb
        current="true"
        page-title="Breadcrumb 1"
        href="/breadcrumb-1"
      ></ic-breadcrumb>
    </ic-breadcrumb-group>
    <ic-breadcrumb-group>
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
    <ic-breadcrumb-group>
      <ic-breadcrumb
        page-title="Breadcrumb 1"
        href="/breadcrumb-1"
      ></ic-breadcrumb>
      <ic-breadcrumb
        page-title="Breadcrumb 2"
        href="/breadcrumb-2"
      ></ic-breadcrumb>
      <ic-breadcrumb
        current="true"
        page-title="Breadcrumb 3"
        href="/breadcrumb-3"
      ></ic-breadcrumb>
    </ic-breadcrumb-group>
  `,

  name: "Default",
};

export const SlottedLinks = {
  render: () => html`
    <ic-breadcrumb-group>
      <ic-breadcrumb page-title="breadcrumb-1">
        <ic-link>
          <a slot="router-item" href="/breadcrumb-1"> Breadcrumb 1 </a>
        </ic-link>
      </ic-breadcrumb>
    </ic-breadcrumb-group>
    <ic-breadcrumb-group>
      <ic-breadcrumb current="page" page-title="breadcrumb 1">
        Breadcrumb 1
      </ic-breadcrumb>
    </ic-breadcrumb-group>
    <ic-breadcrumb-group>
      <ic-breadcrumb page-title="breadcrumb-1">
        <ic-link
          ><a slot="router-item" href="/breadcrumb-1">Breadcrumb 1</a></ic-link
        >
      </ic-breadcrumb>
      <ic-breadcrumb current="page" page-title="breadcrumb 2">
        Breadcrumb 2
      </ic-breadcrumb>
    </ic-breadcrumb-group>
    <ic-breadcrumb-group>
      <ic-breadcrumb page-title="breadcrumb 1">
        <ic-link
          ><a slot="router-item" href="/breadcrumb-1">Breadcrumb 1</a></ic-link
        >
      </ic-breadcrumb>
      <ic-breadcrumb page-title="breadcrumb 2">
        <ic-link
          ><a slot="router-item" href="/breadcrumb-2">Breadcrumb 2</a></ic-link
        >
      </ic-breadcrumb>
      <ic-breadcrumb current="page" page-title="breadcrumb 3">
        Breadcrumb 3
      </ic-breadcrumb>
    </ic-breadcrumb-group>
  `,

  name: "Slotted links",
};

export const Back = {
  render: () => html`
    <ic-breadcrumb-group back-breadcrumb-only="true">
      <ic-breadcrumb
        page-title="Breadcrumb 1"
        href="/breadcrumb-1"
      ></ic-breadcrumb>
    </ic-breadcrumb-group>
    <ic-breadcrumb-group back-breadcrumb-only="true">
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
    <ic-breadcrumb-group back-breadcrumb-only="true">
      <ic-breadcrumb
        page-title="Breadcrumb 1"
        href="/breadcrumb-1"
      ></ic-breadcrumb>
      <ic-breadcrumb
        page-title="Breadcrumb 2"
        href="/breadcrumb-2"
      ></ic-breadcrumb>
      <ic-breadcrumb
        current="true"
        page-title="Breadcrumb 3"
        href="/breadcrumb-3"
      ></ic-breadcrumb>
    </ic-breadcrumb-group>
  `,

  name: "Back",
};

export const Appearance = {
  render: () =>
    html`<ic-breadcrumb-group>
        <ic-breadcrumb page-title="Breadcrumb 1" href="/breadcrumb-1">
          <svg
            slot="icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
              fill="currentColor"
            ></path>
          </svg>
        </ic-breadcrumb>
        <ic-breadcrumb page-title="Breadcrumb 2" current="true" href="/">
          <svg
            slot="icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
              fill="currentColor"
            ></path>
          </svg>
        </ic-breadcrumb>
      </ic-breadcrumb-group>
      <ic-breadcrumb-group back-breadcrumb-only="true">
        <ic-breadcrumb
          page-title="Breadcrumb 1"
          href="/breadcrumb-1"
        ></ic-breadcrumb>
        <ic-breadcrumb
          current="true"
          page-title="Breadcrumb 2"
          href="/breadcrumb-2"
        ></ic-breadcrumb> </ic-breadcrumb-group
      ><ic-breadcrumb-group appearance="dark">
        <ic-breadcrumb page-title="Breadcrumb 1" href="/breadcrumb-1">
          <svg
            slot="icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
              fill="currentColor"
            ></path>
          </svg>
        </ic-breadcrumb>
        <ic-breadcrumb page-title="Breadcrumb 2" current="true" href="/">
          <svg
            slot="icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
              fill="currentColor"
            ></path>
          </svg>
        </ic-breadcrumb>
      </ic-breadcrumb-group>
      <ic-breadcrumb-group appearance="dark" back-breadcrumb-only="true">
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
      <div style="background-color: black; width: fit-content;">
        <ic-breadcrumb-group appearance="light">
          <ic-breadcrumb page-title="Breadcrumb 1" href="/breadcrumb-1">
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              ></path>
            </svg>
          </ic-breadcrumb>
          <ic-breadcrumb page-title="Breadcrumb 2" current="true" href="/">
            <svg
              slot="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                fill="currentColor"
              ></path>
            </svg>
          </ic-breadcrumb>
        </ic-breadcrumb-group>
      </div>
      <div style="background-color: black; width: fit-content;">
        <ic-breadcrumb-group appearance="light" back-breadcrumb-only="true">
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
      </div>`,

  name: "Appearance",
};

export const Icon = {
  render: () => html`
    <ic-breadcrumb-group>
      <ic-breadcrumb
        page-title="Breadcrumb 1"
        href="/breadcrumb-1"
        current="true"
      >
        <svg
          slot="icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
            fill="currentColor"
          ></path>
        </svg>
      </ic-breadcrumb>
    </ic-breadcrumb-group>
    <ic-breadcrumb-group>
      <ic-breadcrumb page-title="Breadcrumb 1" href="/breadcrumb-1">
        <svg
          slot="icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
            fill="currentColor"
          ></path>
        </svg>
      </ic-breadcrumb>
      <ic-breadcrumb page-title="Breadcrumb 2" href="/breadcrumb-2">
        <svg
          slot="icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
            fill="currentColor"
          ></path>
        </svg>
      </ic-breadcrumb>
    </ic-breadcrumb-group>
    <ic-breadcrumb-group>
      <ic-breadcrumb page-title="Breadcrumb 1" href="/breadcrumb-1">
        <svg
          slot="icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
            fill="currentColor"
          ></path>
        </svg>
      </ic-breadcrumb>
      <ic-breadcrumb page-title="Breadcrumb 2" current="true" href="/">
        <svg
          slot="icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
            fill="currentColor"
          ></path>
        </svg>
      </ic-breadcrumb>
    </ic-breadcrumb-group>
  `,

  name: "Icon",
};

export const Collapsed = {
  render: () => html`
    <ic-breadcrumb-group collapsed="true">
      <ic-breadcrumb
        page-title="Breadcrumb 1"
        href="/breadcrumb-1"
      ></ic-breadcrumb>
    </ic-breadcrumb-group>
    <ic-breadcrumb-group collapsed="true">
      <ic-breadcrumb
        page-title="Breadcrumb 1"
        href="/breadcrumb-1"
      ></ic-breadcrumb>
      <ic-breadcrumb
        current="page"
        page-title="Breadcrumb 2"
        href="/breadcrumb-2"
      ></ic-breadcrumb>
    </ic-breadcrumb-group>
    <ic-breadcrumb-group collapsed="true">
      <ic-breadcrumb
        page-title="Breadcrumb 1"
        href="/breadcrumb-1"
      ></ic-breadcrumb>
      <ic-breadcrumb
        page-title="Breadcrumb 2"
        href="/breadcrumb-2"
      ></ic-breadcrumb>
      <ic-breadcrumb
        current="page"
        page-title="Breadcrumb 3"
        href="/breadcrumb-3"
      ></ic-breadcrumb>
    </ic-breadcrumb-group>
  `,

  name: "Collapsed",
};

export const SlottedLinksCollapsed = {
  render: () => html`
    <ic-breadcrumb-group collapsed="true">
      <ic-breadcrumb page-title="breadcrumb 1">
        <ic-link
          ><a slot="router-item" href="/breadcrumb-1">Breadcrumb 1</a></ic-link
        >
      </ic-breadcrumb>
      <ic-breadcrumb page-title="breadcrumb 2">
        <ic-link
          ><a slot="router-item" href="/breadcrumb-2">Breadcrumb 2</a></ic-link
        >
      </ic-breadcrumb>
      <ic-breadcrumb current="page" page-title="breadcrumb 3">
        <ic-link
          ><a slot="router-item" href="/breadcrumb-3">Breadcrumb 3</a></ic-link
        >
      </ic-breadcrumb>
    </ic-breadcrumb-group>
  `,

  name: "Slotted links collapsed",
};

export const Playground = {
  render: (args) =>
    html`<div
      style="background-color: ${args.appearance == "light"
        ? "black"
        : null}; width: fit-content;"
    >
      <ic-breadcrumb-group
        appearance=${args.appearance}
        back-breadcrumb-only=${args.backBreadcrumbOnly}
        collapsed=${args.collapsed}
      >
        <ic-breadcrumb
          current=${args.current}
          page-title=${args.pageTitle}
          href=${args.href}
        >
          <svg
            slot=${args.iconSlot}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
              fill="currentColor"
            ></path>
          </svg>
        </ic-breadcrumb>
        <ic-breadcrumb
          page-title="Breadcrumb 2"
          href="/breadcrumb-2"
        ></ic-breadcrumb>
        <ic-breadcrumb
          page-title="Breadcrumb 3"
          href="/breadcrumb-3"
        ></ic-breadcrumb>
      </ic-breadcrumb-group>
    </div>`,

  args: defaultArgs,

  argTypes: {
    appearance: {
      options: ["default", "dark", "light"],

      control: {
        type: "radio",
      },
    },

    iconSlot: {
      mapping: {
        true: "icon",
        false: "",
      },
    },
  },

  name: "Playground",
};
