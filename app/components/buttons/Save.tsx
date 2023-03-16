import React from "react"
import { useTranslate } from "@refinedev/core"
import { Button } from "antd"
import type { SaveButtonProps } from "@refinedev/antd"
import { SaveIcon } from "../icons";

/**
 * `<SaveButton>` uses Ant Design's {@link https://ant.design/components/button/ `<Button>`} component.
 * It uses it for presantation purposes only. Some of the hooks that refine has adds features to this button.
 *
 * @see {@link https://refine.dev/docs/ui-frameworks/antd/components/buttons/save-button} for more details.
 */
export const SaveButton: React.FC<SaveButtonProps> = ({
  hideText = false,
  children,
  ...rest
}) => {
  const translate = useTranslate();

  return (
    <Button type="primary" icon={<SaveIcon />} {...rest}>
      {!hideText && (children ?? translate("buttons.save", "Save"))}
    </Button>
  );
};
