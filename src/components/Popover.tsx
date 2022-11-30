import { ButtonHTMLAttributes } from "react";
import { Popover as HeadlessPopover } from "@headlessui/react";

import type { ButtonDefaultProps } from "src/@types/IDefaultProps";

interface GroupProps extends ButtonHTMLAttributes<HTMLDivElement> {}
interface PanelProps extends ButtonHTMLAttributes<HTMLDivElement> {}
interface ButtonProps extends ButtonDefaultProps {}

const Button = (props: ButtonProps) => <HeadlessPopover.Button {...props} />;

const Panel = (props: PanelProps) => <HeadlessPopover.Panel {...props} />;

const Group = (props: GroupProps) => <HeadlessPopover {...props} />;

export const Popover = { Group, Panel, Button };
