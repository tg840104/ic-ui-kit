import {
  Component,
  Element,
  Host,
  Method,
  Prop,
  Watch,
  h,
  Listen,
} from "@stencil/core";
import {
  IcBadgePositions,
  IcBadgeTypes,
  IcBadgeVariants,
} from "./ic-badge.types";
import {
  IcColorRGBA,
  IcSizes,
  IcThemeForeground,
  IcColor,
} from "../../utils/types";
import {
  convertToRGBA,
  getCssProperty,
  getThemeForegroundColor,
  hexToRgba,
  isPropDefined,
  onComponentRequiredPropUndefined,
  rgbaStrToObj,
} from "../../utils/helpers";

const NAVIGATION_BUTTON = "IC-NAVIGATION-BUTTON";
const TOP_NAVIGATION = "IC-TOP-NAVIGATION";

/**
 * @slot badge-icon - Icon will be rendered inside the badge if type is set to icon.
 */
@Component({
  tag: "ic-badge",
  styleUrl: "ic-badge.css",
  shadow: {
    delegatesFocus: true,
  },
})
export class Badge {
  private ariaLabel: string = null;
  private customColorRGBA: IcColorRGBA;
  private foregroundColour: IcThemeForeground;
  private parentAriaLabel: string;

  @Element() el: HTMLIcBadgeElement;

  /**
   * The accessible label of the badge component to provide context for screen reader users.
   */
  @Prop() accessibleLabel?: string;

  @Watch("accessibleLabel")
  accessibleLabelHandler(): void {
    this.setAccessibleLabel();
  }

  /**
   * The custom badge colour. This will only style the badge component if variant="custom".
   * Can be a hex value e.g. "#ff0000", RGB e.g. "rgb(255, 0, 0)", or RGBA e.g. "rgba(255, 0, 0, 1)".
   */
  @Prop() customColor?: IcColor = null;

  @Watch("customColor")
  customColorHandler(): void {
    this.variant === "custom" && this.setBadgeColour();
  }

  /**
   * The maximum number shown on the badge appended with a +.
   * This will only be displayed if type="text" and textLabel is not empty.
   */
  @Prop() maxNumber?: number;

  /**
   * The positioning of the badge in reference to the parent element.
   */
  @Prop({ mutable: true }) position?: IcBadgePositions = "far";

  /**
   * The size of the badge to be displayed.
   */
  @Prop() size?: IcSizes = "default";

  /**
   * The text displayed in the badge. This will only be displayed if type="text".
   */
  @Prop() textLabel?: string;

  /**
   * The type of badge to be displayed.
   */
  @Prop() type?: IcBadgeTypes = "text";

  /**
   * The variant of the badge to be displayed.
   */
  @Prop() variant?: IcBadgeVariants = "neutral";

  @Watch("variant")
  variantHandler(): void {
    this.getBadgeForeground();
  }

  /**
   * If `true`, the badge will be displayed.
   */
  @Prop({ mutable: true }) visible: boolean = true;

  @Watch("visible")
  visibleHandler(): void {
    this.setAccessibleLabel();
  }

  componentWillLoad(): void {
    this.variant === "custom" && this.setBadgeColour();

    this.getBadgeForeground();

    const ariaLabel = this.el.parentElement?.ariaLabel;
    if (ariaLabel) this.parentAriaLabel = ariaLabel;
    this.setAccessibleLabel();
  }

  componentDidLoad(): void {
    this.type === "text" &&
      onComponentRequiredPropUndefined(
        [{ prop: this.textLabel, propName: "text-label" }],
        "Badge"
      );
  }

  componentWillRender(): void {
    this.isInTopNav() && this.setPositionInTopNavigation();
  }

  @Listen("icNavigationMenuOpened", { target: "document" })
  navBarMenuOpenHandler(): void {
    this.isInTopNav() && (this.position = "inline");
  }

  @Listen("icNavigationMenuClosed", { target: "document" })
  navBarMenuCloseHandler(): void {
    this.isInTopNav() && (this.position = "near");
  }

  /**
   * @deprecated This method should not be used anymore. Use visible prop to set badge visibility.
   */
  @Method()
  async showBadge(): Promise<void> {
    this.visible = true;
  }

  /**
   * @deprecated This method should not be used anymore. Use visible prop to set badge visibility.
   */
  @Method()
  async hideBadge(): Promise<void> {
    this.visible = false;
  }

  private setBadgeColour = () => {
    const colorRGBA = convertToRGBA(this.customColor);

    if (colorRGBA) {
      this.customColorRGBA = colorRGBA;
      const { r, g, b, a } = colorRGBA;
      this.el.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`;
    }
  };

  private getBadgeRGB = () => {
    switch (this.variant) {
      case "custom":
        return this.customColorRGBA;
      case "error":
      case "success":
      case "warning":
      case "info": {
        return rgbaStrToObj(getCssProperty(`--ic-status-${this.variant}`));
      }
      case "neutral":
      case "light":
        return hexToRgba(
          getCssProperty(
            `--ic-architectural-${this.variant === "neutral" ? 500 : 40}`
          )
        );
    }
  };

  private getBadgeForeground = () => {
    const { r, g, b } = this.getBadgeRGB();
    this.foregroundColour = getThemeForegroundColor(
      (r * 299 + g * 587 + b * 114) / 1000
    );
  };

  private getTextLabel = () =>
    this.maxNumber && Number(this.textLabel) > this.maxNumber
      ? `${this.maxNumber}+`
      : this.textLabel;

  // Set aria-label on badge and / or parent element
  // Aria-describedby seems to not work, probably due to shadow DOM
  private setAccessibleLabel = () => {
    const parentEl = this.el.parentElement;
    const defaultAriaLabel = this.isAccessibleLabelDefined()
      ? this.accessibleLabel
      : this.textLabel || "with badge being displayed";

    if (parentEl) {
      const { tagName } = parentEl;
      if (
        tagName !== "IC-CARD" &&
        (tagName !== "IC-TAB" || (tagName === "IC-TAB" && this.parentAriaLabel))
      ) {
        const ariaLabelPrefix = this.parentAriaLabel
          ? `${this.parentAriaLabel} ,`
          : "";
        parentEl.ariaLabel = this.visible
          ? `${ariaLabelPrefix} ${defaultAriaLabel}`
          : undefined;
      } else {
        this.ariaLabel = `, ${defaultAriaLabel}`;
      }
    }
  };

  private setPositionInTopNavigation = () => {
    const parentTopNavEl = this.el.parentElement.parentElement;
    parentTopNavEl.classList.contains("mobile-mode")
      ? (this.position = "inline")
      : (this.position = "near");
  };

  private isInTopNav = (): boolean => {
    const parentEl = this.el.parentElement;
    const grandparentEl = parentEl.parentElement;
    return (
      parentEl.tagName === NAVIGATION_BUTTON &&
      grandparentEl.tagName === TOP_NAVIGATION
    );
  };

  private isAccessibleLabelDefined = () =>
    isPropDefined(this.accessibleLabel) && this.accessibleLabel !== null;

  render() {
    const {
      ariaLabel,
      el,
      foregroundColour,
      getTextLabel,
      position,
      size,
      textLabel,
      type,
      variant,
      visible,
    } = this;

    return (
      <Host
        class={{
          [`${position}`]: true,
          [`${size}`]: true,
          [`${variant}`]: true,
          [`${type}`]: true,
          [`foreground-${foregroundColour}`]: foregroundColour !== null,
          [`${visible ? "show" : "hide"}`]: true,
        }}
        id={el.id || null}
        aria-label={ariaLabel}
        role="status"
      >
        {type === "icon" && <slot name="badge-icon"></slot>}
        {type === "text" && textLabel && (
          <ic-typography variant={size === "small" ? "badge-small" : "badge"}>
            {getTextLabel()}
          </ic-typography>
        )}
        {type === "dot" && <span class="sr-only">badge</span>}
      </Host>
    );
  }
}
