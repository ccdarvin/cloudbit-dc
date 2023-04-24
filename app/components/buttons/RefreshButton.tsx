import React from "react";
import {
  useOne,
  useTranslate,
  useResource,
  pickNotDeprecated,
} from "@refinedev/core";
import { RedoOutlined } from "@ant-design/icons";
import { Button } from "antd";
import type { RefreshButtonProps } from "@refinedev/antd";

/**
 * `<RefreshButton>` uses Ant Design's {@link https://ant.design/components/button/ `<Button>`} component
 * to update the data shown on the page via the {@link https://refine.dev/docs/core/hooks/data/useOne `useOne`} method provided by your dataProvider.
 *
 * @see {@link https://refine.dev/docs/ui-frameworks/antd/components/buttons/refresh-button} for more details.
 */
export default function RefreshButton({
  resource: resourceNameFromProps,
  recordItemId,
  hideText = false,
  meta,
  metaData,
  dataProviderName,
  children,
  onClick,
  ...rest
}: RefreshButtonProps) {
  const translate = useTranslate();

  const { resource, id } = useResource(
    resourceNameFromProps
  );

  const { refetch, isFetching } = useOne({
    resource: resource?.name,
    id: recordItemId ?? id,
    queryOptions: {
      enabled: false,
    },
    meta: pickNotDeprecated(meta, metaData),
    metaData: pickNotDeprecated(meta, metaData),
    liveMode: "off",
    dataProviderName,
  });

  return (
    <Button
      // TODO: fix any type
      onClick={(e) => (onClick ? onClick(e as any) : refetch())}
      icon={<RedoOutlined spin={isFetching} />}
      {...rest}
    >
      {!hideText && (children ?? translate("buttons.refresh", "Refresh"))}
    </Button>
  );
};
