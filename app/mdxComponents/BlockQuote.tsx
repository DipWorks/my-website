import { Blockquote, BlockquoteProps } from "@radix-ui/themes";

export default function BlockQuote(props: BlockquoteProps) {
  const { children, ...rest } = props;

  return <Blockquote {...rest}>{children}</Blockquote>;
}
