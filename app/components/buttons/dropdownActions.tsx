
import React from "react";
import {
  useCan,
  useNavigation,
  useTranslate,
  useResource,
  useRouterContext,
  useRouterType,
  useLink,
} from "@refinedev/core"
import { Button, Dropdown, Space } from "antd"
import type { EditButtonProps, ShowButtonProps, DeleteButtonProps } from "@refinedev/antd"
import { DeleteIcon, EditIcon, MoreIcon } from "../icons";
import { DeleteButton } from "./delete";

/**
 * `<EditButton>` uses Ant Design's {@link https://ant.design/components/button/ `<Button>`} component.
 * It uses the {@link https://refine.dev/docs/core/hooks/navigation/useNavigation#edit `edit`} method from {@link https://refine.dev/docs/core/hooks/navigation/useNavigation `useNavigation`} under the hood.
 * It can be useful when redirecting the app to the edit page with the record id route of resource}.
 *
 * @see {@link https://refine.dev/docs/ui-frameworks/antd/components/buttons/edit-button} for more details.
 */
export const DropdownActions: React.FC<EditButtonProps| ShowButtonProps |DeleteButtonProps> = ({
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

    const routerType = useRouterType();
    const Link = useLink();
    const { Link: LegacyLink } = useRouterContext();

    // const ActiveLink = routerType === "legacy" ? LegacyLink : Link;

    const { editUrl: generateEditUrl } = useNavigation();

    const { id, resource } = useResource(
        resourceNameFromProps 
    );

    const editQuery = useCan({
        resource: resource?.name,
        action: "edit",
        params: { id: recordItemId ?? id, resource },
        queryOptions: {
        enabled: accessControlEnabled,
        },
    });

    const createButtonDisabledTitle = (data: any) => {
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


    const [confirmDelete, setConfirmDelete] = React.useState(false)

    return <>
         {!confirmDelete && <Dropdown 
            menu={{
                items: [
                    {
                        key: "show",
                        label: "Show",
                    },
                    {
                        key: "edit",
                        label: <Link to={editUrl}>
                            <Space>
                                <EditIcon />
                                {!hideText && translate("buttons.edit", "Editar")}
                            </Space>
                        </Link>,
                        title: createButtonDisabledTitle(editQuery.data),
                        disabled: editQuery.data?.can === false,
                    },
                    {
                        key: "delete",
                        label: <Space>
                            <DeleteIcon />
                            {!hideText && translate("buttons.delete", "Eliminar")}
                        </Space>,
                        title: createButtonDisabledTitle(editQuery.data),
                        disabled: editQuery.data?.can === false,
                        onClick: () => setConfirmDelete(true),
                        danger: true,
                    }
                ]
            }}
        >
            <Button type="link" icon={<MoreIcon />} />
        </Dropdown>}
        {confirmDelete && <DeleteButton
            hideText
            type="link"
            recordItemId={recordItemId} 
            onCancel={() => setConfirmDelete(false)} />}
    </>

    //if (accessControlEnabled && hideIfUnauthorized && !data?.can) {
    //    return null;
    //}

  //return (
  //  <ActiveLink
  //    to={editUrl}
  //    replace={false}
  //    onClick={(e: React.PointerEvent<HTMLButtonElement>) => {
  //      if (data?.can === false) {
  //        e.preventDefault();
  //        return;
  //      }
  //      if (onClick) {
  //        e.preventDefault();
  //        onClick(e);
  //      }
  //    }}
  //  >
  //    <Button
  //      icon={<EditOutlined />}
  //      disabled={data?.can === false}
  //      title={createButtonDisabledTitle()}
  //      {...rest}
  //    >
  //      {!hideText && (children ?? translate("buttons.edit", "Edit"))}
  //    </Button>
  //  </ActiveLink>
  //);
};
