import {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
  JSX,
  Ref,
  forwardRef,
} from "react";
import { twMerge } from "tailwind-merge";
import { BasicProps, TextualProps } from "../types/props";

type PolymorphicRef<E extends ElementType> = ComponentPropsWithRef<E>["ref"];

type TextProps<E extends ElementType = "p"> = BasicProps &
  TextualProps & {
    as?: E;
  } & ComponentPropsWithoutRef<E>;

type TextComponent = <E extends ElementType = "p">(
  props: TextProps<E> & { ref?: PolymorphicRef<E> },
) => JSX.Element;

function TextImpl<E extends ElementType = "p">(
  {
    as,
    children,
    className,
    italic,
    bold,
    underline,
    nowrap,
    ...rest
  }: TextProps<E>,
  ref: PolymorphicRef<E>,
) {
  const Tag = (as ?? "p") as ElementType;
  return (
    <Tag
      ref={ref}
      {...rest}
      className={twMerge(
        "leading-4 text-sm",
        italic && "italic",
        bold && "font-bold",
        underline && "underline",
        nowrap && "whitespace-nowrap",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

const TextBase = forwardRef(
  TextImpl as (
    props: TextProps<ElementType>,
    ref: Ref<HTMLElement>,
  ) => JSX.Element,
) as TextComponent;

function Small({
  children,
  className,
  italic,
  bold,
  underline,
  nowrap,
  ...rest
}: BasicProps & TextualProps & ComponentPropsWithoutRef<"p">) {
  return (
    <p
      {...rest}
      className={twMerge(
        "leading-4 text-xs",
        italic && "italic",
        bold && "font-bold",
        underline && "underline",
        nowrap && "whitespace-nowrap",
        className,
      )}
    >
      {children}
    </p>
  );
}

export const Text = Object.assign(TextBase, { Small });
export default Text;
