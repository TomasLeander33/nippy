import type { Meta, StoryObj } from "@storybook/react"
import { NavigationHeaderPublic } from "./NavigationHeaderPublic"

const meta: Meta<typeof NavigationHeaderPublic> = {
  title: "Layout/NavigationHeaderPublic",
  component: NavigationHeaderPublic
};
export default meta;

export const Default: StoryObj = {
    args: {
      variant: {}
    }
}

export const WithCustomRightContent: StoryObj = {
  args: {
    variant: "freelancer"
  },
};