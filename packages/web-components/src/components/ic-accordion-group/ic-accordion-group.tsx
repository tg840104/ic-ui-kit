import {
  Component,
  Element,
  h,
  Host,
  Listen,
  Prop,
  State,
  Method,
  Watch,
} from "@stencil/core";
import { IcSizes, IcThemeMode } from "../../utils/types";
import { isSlotUsed } from "../../utils/helpers";

let accordionGroupIds = 0;

/**
 * @slot label - Content is placed as the accordion group title.
 */
@Component({
  tag: "ic-accordion-group",
  styleUrl: "ic-accordion-group.css",
  shadow: true,
})
export class AccordionGroup {
  private accordionGroupId = `ic-accordion-group-${accordionGroupIds++}`;
  private allButtonEl?: HTMLIcButtonElement;

  @Element() el: HTMLIcAccordionGroupElement;

  @State() accordions: HTMLIcAccordionElement[];

  @State() areAllAccordionsOpen: boolean;

  /**
   * The accessible button label to provide more context to the 'See all/Hide all' button for screen reader users.
   */
  @Prop() accessibleButtonLabel?: string = "accordions";

  /**
   * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
   */
  @Prop() theme?: IcThemeMode = "inherit";
  @Watch("theme")
  watchThemeHandler(): void {
    this.accordions.forEach((acc) => {
      acc.theme = this.theme;
    });
  }

  /**
   * If `true`, the accordion will load in an expanded state.
   */
  @Prop({ mutable: true }) expanded?: boolean = false;
  @Watch("expanded")
  watchExpandedHandler() {
    this.handleExpanded();
  }

  /**
   * The header for the accordion group.
   */
  @Prop() label?: string = "";

  /**
   * If `true`, only one accordion will open at a time.
   */
  @Prop() singleExpansion?: boolean = false;

  /**
   * The size of the accordion.
   */
  @Prop() size?: IcSizes = "medium";

  componentDidLoad(): void {
    const accordionDirectChildren = (this.el as HTMLElement).children;
    this.accordions = Array.from(accordionDirectChildren).filter(
      (child) => child.tagName === "IC-ACCORDION"
    ) as HTMLIcAccordionElement[];
    this.linkAccordions();
    this.accordions.forEach((acc) => {
      acc.theme = this.theme;
    });
    this.accordions.forEach((acc) => {
      acc.size = this.size;
    });
    if (this.expanded) {
      this.accordions.forEach((acc) => {
        acc.expanded = true;
      });
      this.setExpandedToAreAllAccordionsOpen();
    } else {
      this.setExpandedToAreAllAccordionsOpen();
      this.expanded = this.areAllAccordionsOpen;
    }
  }

  @Listen("accordionClicked")
  handleAccordionClicked(event: CustomEvent): void {
    if (!this.singleExpansion) {
      // 'See all' should be visible until all accordions are open, then 'Hide all' should be visible
      this.setExpandedToAreAllAccordionsOpen();
    } else {
      this.accordions.forEach((acc) => {
        if (acc.expanded && event.detail.id !== acc.id) {
          acc.expanded = false;
        }
      });
    }
  }

  /**
   * Sets the focus on first focusable element in the accordion group. If the "See/Hide all" button is present, it will be focused.
   * Otherwise, the first accordion will be focused.
   */
  @Method()
  async setFocus(): Promise<void> {
    const focusEl = this.singleExpansion
      ? this.accordions[0]
      : this.allButtonEl;
    focusEl?.setFocus();
  }

  private handleExpanded = () => {
    if (this.areAllAccordionsOpen) {
      this.expanded = false;
      this.accordions.forEach((acc) => {
        acc.expanded = this.expanded;
      });
    } else {
      this.expanded = true;
      this.accordions.forEach((acc) => {
        acc.expanded = this.expanded;
      });
    }
    this.setExpandedToAreAllAccordionsOpen();
  };

  private linkAccordions = () => {
    this.accordions.forEach((accordion) => {
      accordion.setAttribute("context-id", this.accordionGroupId);
    });
  };

  private setExpandedToAreAllAccordionsOpen = () => {
    this.areAllAccordionsOpen = this.accordions.every(
      (accordion) => !!accordion.expanded
    );
  };

  private accordionOpenBtnText = () => {
    return !this.areAllAccordionsOpen ? "See all" : "Hide all";
  };

  render() {
    const { size, label, singleExpansion, accessibleButtonLabel, theme } = this;
    return (
      <Host
        context-id={this.accordionGroupId}
        class={{
          [`ic-accordion-group-${size}`]: true,
          ["ic-accordion-group"]: true,
          [`ic-theme-${theme}`]: theme !== "inherit",
        }}
      >
        <div class="label-container">
          <ic-typography variant="h4">
            <h3>
              {isSlotUsed(this.el, "label") ? <slot name="label" /> : label}
            </h3>
          </ic-typography>
          {!singleExpansion && (
            <ic-button
              ref={(el) => (this.allButtonEl = el)}
              onClick={this.handleExpanded}
              variant="tertiary"
              aria-label={`${this.accordionOpenBtnText()} ${accessibleButtonLabel}`}
            >
              {this.accordionOpenBtnText()}
            </ic-button>
          )}
        </div>
        <slot></slot>
      </Host>
    );
  }
}
