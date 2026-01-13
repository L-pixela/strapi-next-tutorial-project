import { RichTextNode } from "@/domains/article";

export function extractPlainText(nodes: RichTextNode[] = []): string {
  return nodes
    .map(node =>
      node.children?.map(child => child.text ?? "").join("") ?? ""
    )
    .join("\n");
}
