import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  CAN_REDO_COMMAND,
  CAN_UNDO_COMMAND,
  REDO_COMMAND,
  UNDO_COMMAND,
  SELECTION_CHANGE_COMMAND,
  FORMAT_TEXT_COMMAND,
  FORMAT_ELEMENT_COMMAND,
  $getSelection,
  $isRangeSelection,
  $createParagraphNode,
  $getNodeByKey
} from "lexical";
import { $isLinkNode, TOGGLE_LINK_COMMAND } from "@lexical/link";
import {
  $isParentElementRTL,
  $wrapNodes,
  $isAtNodeEnd
} from "@lexical/selection";
import { $getNearestNodeOfType, mergeRegister } from "@lexical/utils";
import {
  INSERT_ORDERED_LIST_COMMAND,
  INSERT_UNORDERED_LIST_COMMAND,
  REMOVE_LIST_COMMAND,
  $isListNode,
  ListNode
} from "@lexical/list";
import { createPortal } from "react-dom";
import {
  $createHeadingNode,
  $createQuoteNode,
  $isHeadingNode
} from "@lexical/rich-text";
import {
  $createCodeNode,
  $isCodeNode,
  getDefaultCodeLanguage,
  getCodeLanguages
} from "@lexical/code";
import { Button, Divider, Dropdown, Space } from "antd";
import { BoldIcon, BulletedListIcon, H1Icon, H2Icon, ItalicIcon, LinkIcon, NumberedListIcon, ParagraphIcon, QuoteIcon, RedoIcon, StrikethroughIcon, UnderlineIcon, UndoIcon } from "~/components/icons";

const LowPriority = 1;

const supportedBlockTypes = new Set([
  "paragraph",
  "quote",
  "code",
  "h1",
  "h2",
  "ul",
  "ol"
]);

const blockTypeToBlockName: any = {
  code: {
    name: "Code Block"
  },
  h1: {
    name: "Large Heading",
    icon: <H1Icon />
  },
  h2: {
    name: "Medium Heading",
    icon: <H2Icon />
  },
  h3: {
    name: "Small Heading"
  },
  h4: {
    name: "Tiny Heading"
  },
  h5: {
    name: "Tiny Heading"
  },
  ol: {
    name: "Numbered List",
    icon: <NumberedListIcon />
  },
  paragraph: {
    name: "Paragraph",
    icon: <ParagraphIcon />
  },
  quote: {
    name: "Quote",
    icon: <QuoteIcon />
  },
  ul: {
    name: "Bulleted List",
    icon: <BulletedListIcon />
  }
}

function positionEditorElement(editor: any, rect: any) {
  if (rect === null) {
    editor.style.opacity = "0";
    editor.style.top = "-1000px";
    editor.style.left = "-1000px";
  } else {
    editor.style.opacity = "1";
    editor.style.top = `${rect.top + rect.height + window.pageYOffset + 10}px`;
    editor.style.left = `${
      rect.left + window.pageXOffset - editor.offsetWidth / 2 + rect.width / 2
    }px`;
  }
}

function getSelectedNode(selection: any) {
  const anchor = selection.anchor;
  const focus = selection.focus;
  const anchorNode = selection.anchor.getNode();
  const focusNode = selection.focus.getNode();
  if (anchorNode === focusNode) {
    return anchorNode;
  }
  const isBackward = selection.isBackward();
  if (isBackward) {
    return $isAtNodeEnd(focus) ? anchorNode : focusNode;
  } else {
    return $isAtNodeEnd(anchor) ? focusNode : anchorNode;
  }
}


export default function ToolbarPlugin() {
  const [editor]: any = useLexicalComposerContext();
  const toolbarRef = useRef(null);
  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);
  const [blockType, setBlockType] = useState("paragraph");
  const [selectedElementKey, setSelectedElementKey] = useState(null);
  const [showBlockOptionsDropDown, setShowBlockOptionsDropDown] = useState(
    false
  );
  const [isLink, setIsLink] = useState(false);
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isStrikethrough, setIsStrikethrough] = useState(false);

  const updateToolbar = useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      const anchorNode = selection.anchor.getNode();
      const element =
        anchorNode.getKey() === "root"
          ? anchorNode
          : anchorNode.getTopLevelElementOrThrow();
      const elementKey: any = element.getKey();
      const elementDOM = editor.getElementByKey(elementKey);
      if (elementDOM !== null) {
        setSelectedElementKey(elementKey);
        if ($isListNode(element)) {
          const parentList = $getNearestNodeOfType(anchorNode, ListNode);
          const type = parentList ? parentList.getTag() : element.getTag();
          setBlockType(type);
        } else {
          const type = $isHeadingNode(element)
            ? element.getTag()
            : element.getType();
          setBlockType(type);
        }
      }
      // Update text format
      setIsBold(selection.hasFormat("bold"));
      setIsItalic(selection.hasFormat("italic"));
      setIsUnderline(selection.hasFormat("underline"));
      setIsStrikethrough(selection.hasFormat("strikethrough"));

      // Update links
      const node = getSelectedNode(selection);
      const parent = node.getParent();
      if ($isLinkNode(parent) || $isLinkNode(node)) {
        setIsLink(true);
      } else {
        setIsLink(false);
      }
    }

  }, [editor]);

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }: any) => {
        editorState.read(() => {
          updateToolbar();
        });
      }),
      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        (_payload: any, newEditor: any) => {
          updateToolbar();
          return false;
        },
        LowPriority
      ),
      editor.registerCommand(
        CAN_UNDO_COMMAND,
        (payload: any) => {
          setCanUndo(payload);
          return false;
        },
        LowPriority
      ),
      editor.registerCommand(
        CAN_REDO_COMMAND,
        (payload: any) => {
          setCanRedo(payload);
          return false;
        },
        LowPriority
      )
    );
  }, [editor, updateToolbar]);

      // block options dropdown
      const formatParagraph = () => {
        if (blockType !== "paragraph") {
          editor.update(() => {
            const selection = $getSelection();
    
            if ($isRangeSelection(selection)) {
              $wrapNodes(selection, () => $createParagraphNode());
            }
          });
        }
        setShowBlockOptionsDropDown(false);
      };
  
      const formatLargeHeading = () => {
        if (blockType !== "h1") {
          editor.update(() => {
            const selection = $getSelection();
    
            if ($isRangeSelection(selection)) {
              $wrapNodes(selection, () => $createHeadingNode("h1"));
            }
          });
        }
        setShowBlockOptionsDropDown(false);
      };
    
      const formatSmallHeading = () => {
        if (blockType !== "h2") {
          editor.update(() => {
            const selection = $getSelection();
    
            if ($isRangeSelection(selection)) {
              $wrapNodes(selection, () => $createHeadingNode("h2"));
            }
          });
        }
        setShowBlockOptionsDropDown(false);
      };
    
      const formatBulletList = () => {
        if (blockType !== "ul") {
          editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND);
        } else {
          editor.dispatchCommand(REMOVE_LIST_COMMAND);
        }
        setShowBlockOptionsDropDown(false);
      };
    
      const formatNumberedList = () => {
        if (blockType !== "ol") {
          editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND);
        } else {
          editor.dispatchCommand(REMOVE_LIST_COMMAND);
        }
        setShowBlockOptionsDropDown(false);
      };
    
      const formatQuote = () => {
        if (blockType !== "quote") {
          editor.update(() => {
            const selection = $getSelection();
    
            if ($isRangeSelection(selection)) {
              $wrapNodes(selection, () => $createQuoteNode());
            }
          });
        }
        setShowBlockOptionsDropDown(false);
      };
    
      const formatCode = () => {
        if (blockType !== "code") {
          editor.update(() => {
            const selection = $getSelection();
    
            if ($isRangeSelection(selection)) {
              $wrapNodes(selection, () => $createCodeNode());
            }
          });
        }
        setShowBlockOptionsDropDown(false);
      }

  return (
    <div className="toolbar" ref={toolbarRef}
      style={{
        display: 'flex'
      }}
    >
      <Space.Compact>
        <Button
          disabled={!canUndo}
          type="text"
          onClick={() => {
            editor.dispatchCommand(UNDO_COMMAND);
          }}
          className="toolbar-item spaced"
          aria-label="Undo"
          icon={<UndoIcon />}
        />
        <Button
          disabled={!canRedo}
          type="text"
          onClick={() => {
            editor.dispatchCommand(REDO_COMMAND);
          }}
          className="toolbar-item"
          aria-label="Redo"
          icon={<RedoIcon />}
        />
      </Space.Compact>
      <Divider type="vertical" />
      {supportedBlockTypes.has(blockType) && (
        <>
          <Dropdown
            menu={{
              items: [
                {
                  key: "paragraph",
                  label: <Space> 
                    {blockTypeToBlockName["paragraph"].icon}
                    <span>{blockTypeToBlockName["paragraph"].name}</span>
                  </Space>,
                  onClick: formatParagraph
                },
                {
                  key: "h1",
                  label: <Space>
                    {blockTypeToBlockName["h1"].icon}
                    <span>{blockTypeToBlockName["h1"].name}</span>
                  </Space>
                },
                {
                  key: "h2",
                  label: <Space>
                    {blockTypeToBlockName["h2"].icon}
                    <span>{blockTypeToBlockName["h2"].name}</span>
                  </Space>
                },
                {
                  key: "ul",
                  label: <Space>
                    {blockTypeToBlockName["ul"].icon}
                    <span>{blockTypeToBlockName["ul"].name}</span>
                  </Space>
                },
                {
                  key: "ol",
                  label: <Space>
                    {blockTypeToBlockName["ol"].icon}
                    <span>{blockTypeToBlockName["ol"].name}</span>
                  </Space>
                },
                {
                  key: "quote",
                  label: <Space>
                    {blockTypeToBlockName["quote"].icon}
                    <span>{blockTypeToBlockName["quote"].name}</span>
                  </Space>
                },
              ]
            }}
          >
            <Button
              className="toolbar-item block-controls"
              onClick={() =>
                setShowBlockOptionsDropDown(!showBlockOptionsDropDown)
              }
              type="text"
              aria-label="Formatting Options"
              icon={blockTypeToBlockName[blockType as string].icon}
            >
              {blockTypeToBlockName[blockType as string].name} 
            </Button>
          </Dropdown>
          <Divider type="vertical" />
        </>
      )}
      <Space.Compact>
        <Button
          onClick={() => {
            editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold");
          }}
          className={"toolbar-item spaced " + (isBold ? "active" : "")}
          aria-label="Format Bold"
          type={isBold ? 'link' : 'text'}
          icon={<BoldIcon />}
        />
          <Button
            onClick={() => {
              editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic");
            }}
            className={"toolbar-item spaced " + (isItalic ? "active" : "")}
            aria-label="Format Italics"
            type={isItalic ? 'link' : 'text'}
            icon={<ItalicIcon />}
          />
          <Button
            onClick={() => {
              editor.dispatchCommand(FORMAT_TEXT_COMMAND, "underline");
            }}
            className={"toolbar-item spaced " + (isUnderline ? "active" : "")}
            aria-label="Format Underline"
            type={isUnderline ? 'link' : 'text'}
            icon={<UnderlineIcon />}
          />
          <Button
            onClick={() => {
              editor.dispatchCommand(FORMAT_TEXT_COMMAND, "strikethrough");
            }}
            className={
              "toolbar-item spaced " + (isStrikethrough ? "active" : "")
            }
            aria-label="Format Strikethrough"
            type={isStrikethrough ? 'link' : 'text'}
            icon={<StrikethroughIcon />}
          />
      </Space.Compact>
    </div>
  );
}
