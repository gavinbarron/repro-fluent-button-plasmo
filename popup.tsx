import { fluentButton } from "@fluentui/web-components";
import { provideFluentDesignSystem } from '@fluentui/web-components';

/**
 * Provides a design system to the fluent components
 */
const designSystem = provideFluentDesignSystem();
designSystem.register(fluentButton());

function IndexPopup() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16
      }}>
      {/* @ts-ignore ts(2339) */}
      <fluent-button
        appearance="neutral"
        class=" signed-out "
        aria-label="Sign In"
        current-value="">
        Sign In {/* @ts-ignore ts(2339) */}
      </fluent-button>
    </div>
  )
}

export default IndexPopup
