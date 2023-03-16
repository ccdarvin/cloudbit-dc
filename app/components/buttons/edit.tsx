import React from "react";
import {
  useCan,
  useNavigation,
  useTranslate,
  useResource,
  useRouterContext,
  useRouterType,
  useLink,
} from "@refinedev/core";
import { EditOutlined } from "@ant-design/icons";
import { Button } from "antd";
import type { EditButtonProps } from "@refinedev/antd";
import { Link } from "@remix-run/react";

/**
 * `<EditButton>` uses Ant Design's {@link https://ant.design/components/button/ `<Button>`} component.
 * It uses the {@link https://refine.dev/docs/core/hooks/navigation/useNavigation#edit `edit`} method from {@link https://refine.dev/docs/core/hooks/navigation/useNavigation `useNavigation`} under the hood.
 * It can be useful when redirecting the app to the edit page with the record id route of resource}.
 *
 * @see {@link https://refine.dev/docs/ui-frameworks/antd/components/buttons/edit-button} for more details.
 */
export const EditButton: React.FC<EditButtonProps> = ({
  resource: resourceNameFromProps,
  recordItemId,
  hideText = false,
  accessControl,
  meta,
  children,
  onClick,
  ...rest
}) => {
  const accessControlEnabled = accessControl?.enabled ?? true;
  const hideIfUnauthorized = accessControl?.hideIfUnauthorized ?? false;
  const translate = useTranslate();

  const { editUrl: generateEditUrl } = useNavigation();

  const { id, resource } = useResource(
    resourceNameFromProps 
  );

  const { data } = useCan({
    resource: resource?.name,
    action: "edit",
    params: { id: recordItemId ?? id, resource },
    queryOptions: {
      enabled: accessControlEnabled,
    },
  });

  const createButtonDisabledTitle = () => {
    if (data?.can) return "";
    else if (data?.reason) return data.reason;
    else
      return translate(
        "buttons.notAccessTitle",
        "You don't have permission to access"
      );
  };

  const editUrl =
    resource && (recordItemId ?? id)
      ? generateEditUrl(resource, recordItemId! ?? id!, meta)
      : "";

  if (accessControlEnabled && hideIfUnauthorized && !data?.can) {
    return null;
  }

  return (
    <Link to={editUrl}>
      <Button
        icon={<EditOutlined />}
        disabled={data?.can === false}
        title={createButtonDisabledTitle()}
        {...rest}
      >
        {!hideText && (children ?? translate("buttons.edit", "Edit"))}
      </Button>
    </Link>
  );
};
