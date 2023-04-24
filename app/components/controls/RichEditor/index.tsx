import customTheme from "./theme";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import {OnChangePlugin} from '@lexical/react/LexicalOnChangePlugin';
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import ToolbarPlugin from "./plugins/ToolbarPlugin";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import { ListItemNode, ListNode } from "@lexical/list";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import { TRANSFORMERS } from "@lexical/markdown";
import { $generateHtmlFromNodes } from '@lexical/html';
import { $rootTextContent } from '@lexical/text';
import ListMaxIndentLevelPlugin from "./plugins/ListMaxIndentLevelPlugin";
import AutoLinkPlugin from "./plugins/AutoLinkPlugin";
import { Typography } from "antd";
import { $getRoot, $getSelection } from "lexical";

function Placeholder({
  children,
}: {
  children?: React.ReactNode;
}) {
  return <Typography.Text 
    type="secondary"
    style={{
      position: "absolute",
      top: 0,
      padding: "0.5rem",
      overflow: "hidden",
      textOverflow: "ellipsis",
      userSelect: "none",
      pointerEvents: "none",
    }}
  >
    {children||"Start typing here..."}
  </Typography.Text>
}

const editorConfig: any = {
  // The editor theme
  theme: customTheme,
  // Handling of errors during update
  onError(error: any) {
    throw error;
  },
  // Any custom nodes go here
  nodes: [
    HeadingNode,
    ListNode,
    ListItemNode,
    QuoteNode,
    CodeNode,
    CodeHighlightNode,
    TableNode,
    TableCellNode,
    TableRowNode,
    AutoLinkNode,
    LinkNode
  ]
};

type valueProps ={
  json: string;
  text: string;
  html: string;
}

export default function RichEditor({
    value,
    onChange,
}: {
    value?: valueProps;
    onChange?: (value: valueProps) => void;
}) {
  return (
    <LexicalComposer initialConfig={{
      ...editorConfig,
      editorState: value?.json
    }}>
      <div>
        <ToolbarPlugin />
        <div style={{
          position: "relative",
        }}>
          <RichTextPlugin
            contentEditable={<ContentEditable style={{
              padding: "0.5rem",
              userSelect: "text",
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
              outline: 0,
              tabSize:1
            }} />}
            placeholder={<Placeholder />}
            ErrorBoundary={LexicalErrorBoundary}
          />
          <OnChangePlugin onChange={(editorState: any, editor: any) => {
            editorState.read(() => {
              // Read the contents of the EditorState here.
              const root = $getRoot()
              const selection = $getSelection()
              const json = JSON.stringify(editorState) 
              const text = $rootTextContent()
              const html = $generateHtmlFromNodes(editor, null)
              onChange?.({
                json,
                text,
                html
              })
            });
            //onChange?.()
          }} />
          <HistoryPlugin />
          <ListPlugin />
          <LinkPlugin />
          <AutoLinkPlugin />
          <ListMaxIndentLevelPlugin maxDepth={7} />
          <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
        </div>
      </div>
    </LexicalComposer>
  );
}
