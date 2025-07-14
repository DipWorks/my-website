import { Element } from "hast";
import { Html } from "mdast";
import { Raw, State } from "mdast-util-to-hast";

export function html(state: State, node: Html): Element | Raw | undefined {
  if (state.options.allowDangerousHtml) {
    // check if it is a react component name pattern, then return undefined
    const component_name = node.value.match(/<([A-Z][^\/\s>]+)/)?.[1];
    if (component_name) return;

    const result: Raw = { type: "raw", value: node.value };
    state.patch(node, result);
    return state.applyData(node, result);
  }

  return undefined;
}
