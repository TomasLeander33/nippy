import type { Meta, StoryObj } from "@storybook/react"
import { Logo } from "./Logo"

const meta: Meta<typeof Logo> = {
  title: "Layout/Logo",
  component: Logo
};
export default meta;

export const Default: StoryObj = {
    args: {
      colorClass: "text-blue-600 dark:text-blue-400",
      sizeClass: "h-[1px] w-[1px]",
      hoverEffect: false,
      onClick: () => alert("Logo clicked"),
      className: ""
    }
}
export const LargeRedLogo: StoryObj = {
  args: {
    colorClass: "text-red-600 dark:text-red-400",
    sizeClass: "h-1 w-1",
    hoverEffect: true,
    onClick: () => alert("Large Red Logo clicked"),
    className: ""
  }
}