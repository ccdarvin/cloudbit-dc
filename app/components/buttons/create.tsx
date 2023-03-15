import React from "react";
import {
  useNavigation,
  useTranslate,
  useCan,
  useResource,
  useRouterContext,
  useRouterType,
  useLink,
} from "@refinedev/core";
import { PlusSquareOutlined } from "@ant-design/icons";
import { Button } from "antd";
import type { CreateButtonProps } from "@refinedev/antd";
import { CreateIcon } from "../icons";

/**
 * <CreateButton> uses Ant Design's {@link https://ant.design/components/button/ `<Button> component`}.
 * It uses the {@link https://refine.dev/docs/core/hooks/navigation/useNavigation#create `create`} method from {@link https://refine.dev/docs/core/hooks/navigation/useNavigation `useNavigation`} under the hood.
 * It can be useful to redirect the app to the create page route of resource}.
 *
 * @see {@link https://refine.dev/docs/ui-frameworks/antd/components/buttons/create-button} for more details.
 */
export const CreateButton: React.FC<CreateButtonProps> = ({
  resource: resourceNameFromProps,
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
  const routerType = useRouterType();
  const Link = useLink();
  const { Link: LegacyLink } = useRouterContext();

  const ActiveLink = routerType === "legacy" ? LegacyLink : Link;

  const { createUrl: generateCreateUrl } = useNavigation();

  const { resource } = useResource(
    resourceNameFromProps
  );

  const { data } = useCan({
    resource: resource?.name,
    action: "create",
    queryOptions: {
      enabled: accessControlEnabled,
    },
    params: {
      resource,
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

  const createUrl = resource ? generateCreateUrl(resource, meta) : "";

  if (accessControlEnabled && hideIfUnauthorized && !data?.can) {
    return null;
  }

  return (
    <ActiveLink
      to={createUrl}
      replace={false}
      onClick={(e: React.PointerEvent<HTMLButtonElement>) => {
        if (data?.can === false) {
          e.preventDefault();
          return;
        }
        if (onClick) {
          e.preventDefault();
          onClick(e);
        }
      }}
    >
      <Button
        icon={<CreateIcon />}
        disabled={data?.can === false}
        title={createButtonDisabledTitle()}
        {...rest}
      >
        {!hideText && (children ?? translate("buttons.create", "Create"))}
      </Button>
    </ActiveLink>
  );
};
