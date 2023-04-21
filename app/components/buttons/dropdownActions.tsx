
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
import { DeleteIcon, EditIcon, MoreIcon, ShowIcon } from "../icons";
import { DeleteButton } from "./Delete";
import { Link, useSearchParams } from "@remix-run/react";

/**
 * `<EditButton>` uses Ant Design's {@link https://ant.design/components/button/ `<Button>`} component.
 * It uses the {@link https://refine.dev/docs/core/hooks/navigation/useNavigation#edit `edit`} method from {@link https://refine.dev/docs/core/hooks/navigation/useNavigation `useNavigation`} under the hood.
 * It can be useful when redirecting the app to the edit page with the record id route of resource}.
 *
 * @see {@link https://refine.dev/docs/ui-frameworks/antd/components/buttons/edit-button} for more details.
 */

type DropdownActionsProps = {
    editItem?: {
        // string or function
        url?: string | ((record?: any) => string) ,
        hideText?: boolean,
        show?: boolean
    },
    deleteItem?: {
        url?: string | ((record?: any) => string),
        hideText?: boolean,
        show?: boolean
    },
    showItem?: {
        url?: string | ((record?: any) => string),
        hideText?: boolean,
        show?: boolean
    }
}

export const DropdownActions: React.FC<EditButtonProps & ShowButtonProps & DeleteButtonProps & DropdownActionsProps > = ({
  resource: resourceNameFromProps,
  recordItemId,
  hideText = false,
  editItem,
  deleteItem,
  showItem,
  accessControl,
  meta,
  children,
  ...rest
}) => {
    const accessControlEnabled = accessControl?.enabled ?? true
    const translate = useTranslate()

    // const ActiveLink = routerType === "legacy" ? LegacyLink : Link;

    const { editUrl: generateEditUrl, showUrl: generateShowUrl } = useNavigation()

    const { id, resource } = useResource(
        resourceNameFromProps 
    );

    const { data: editData } = useCan({
        resource: resource?.name,
        action: "edit",
        params: { id: recordItemId ?? id, resource },
        queryOptions: {
        enabled: accessControlEnabled,
        },
    });
    const { data: showData} = useCan({
        resource: resource?.name,
        action: "show",
        params: { id: recordItemId ?? id, resource },
        queryOptions: {
          enabled: accessControlEnabled,
        },
    });
    const { data: deleteData } = useCan({
        resource: resource?.name,
        action: "delete",
        params: { id: recordItemId ?? id, resource },
        queryOptions: {
          enabled: accessControlEnabled,
        },
      });

    const showUrl = (typeof showItem?.url === 'function'? showItem?.url(): showItem?.url ) ||
      (resource && (recordItemId || id)
        ? generateShowUrl(resource, recordItemId! ?? id!, meta)
        : "")

    const createButtonDisabledTitle = (data: any) => {
        if (data?.can) return "";
        else if (data?.reason) return data.reason;
        else
        return translate(
            "buttons.notAccessTitle",
            "You don't have permission to access"
        );
    };

    let editUrl = (typeof editItem?.url === 'function'? editItem.url(): editItem?.url ) ||
        (resource && (recordItemId ?? id)
        ? generateEditUrl(resource, recordItemId! ?? id!, meta)
        : "")

    const [confirmDelete, setConfirmDelete] = React.useState(false)

    return <>
         {!confirmDelete && <Dropdown 
            menu={{
                items: [
                    {
                        key: "show",
                        label: <Link to={showUrl}>
                            <Space>
                                <ShowIcon />
                                {!hideText && translate("buttons.show", "Ver")}
                            </Space>
                        </Link>,
                        title: createButtonDisabledTitle(showData),
                        disabled: showData?.can === false,
                    },
                    {
                        key: "edit",
                        label: <Link to={editUrl}>
                            <Space>
                                <EditIcon />
                                {!hideText && translate("buttons.edit", "Editar")}
                            </Space>
                        </Link>,
                        title: createButtonDisabledTitle(editData),
                        disabled: editData?.can === false,
                    },
                    {
                        key: "delete",
                        label: <Space>
                            <DeleteIcon />
                            {!hideText && translate("buttons.delete", "Eliminar")}
                        </Space>,
                        title: createButtonDisabledTitle(deleteData),
                        disabled: deleteData?.can === false,
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
};
