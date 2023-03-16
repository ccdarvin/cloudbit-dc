import React from "react";
import {
  useCan,
  useNavigation,
  useTranslate,
  useResource,
} from "@refinedev/core";
import { EyeOutlined } from "@ant-design/icons";
import { Button, Tooltip } from "antd";
import type { ShowButtonProps } from "@refinedev/antd";
import { Link } from "@remix-run/react";

/**
 * `<ShowButton>` uses Ant Design's {@link https://ant.design/components/button/ `<Button>`} component.
 * It uses the {@link https://refine.dev/docs/core/hooks/navigation/useNavigation#show `show`} method from {@link https://refine.dev/docs/core/hooks/navigation/useNavigation `useNavigation`} under the hood.
 * It can be useful when redirecting the app to the show page with the record id route of resource.
 *
 * @see {@link https://refine.dev/docs/ui-frameworks/antd/components/buttons/show-button} for more details.
 */
export const ShowLink: React.FC<ShowButtonProps> = ({
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
  const { showUrl: generateShowUrl } = useNavigation();

  const translate = useTranslate();

  const { id, resource } = useResource(
    resourceNameFromProps
  );

  const { data } = useCan({
    resource: resource?.name,
    action: "show",
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

  const showUrl =
    resource && (recordItemId || id)
      ? generateShowUrl(resource, recordItemId! ?? id!, meta)
      : "";

  if (accessControlEnabled && hideIfUnauthorized && !data?.can) {
    return null;
  }


  return <Tooltip title={createButtonDisabledTitle()}>
    {data?.can && <Link to={showUrl}>{children ?? translate("buttons.show", "Show")}</Link>}
    {!data?.can && (children ?? translate("buttons.show", "Show"))}
  </Tooltip>
}

