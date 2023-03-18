import React from "react";
import { Tooltip, Typography } from "antd";
import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
import type { DateFieldProps } from "@refinedev/antd";

dayjs.extend(LocalizedFormat);

const defaultLocale = dayjs.locale();

/**
 * This field is used to display dates. It uses {@link https://day.js.org/docs/en/display/format `Day.js`} to display date format.
 *
 * @see {@link https://refine.dev/docs/ui-frameworks/antd/components/fields/date} for more details.
 */
export default function DateField({
  value,
  locales,
  format: dateFormat = "L",
  ...rest
}: DateFieldProps) {

    return <Tooltip title={dayjs(value).locale(locales || defaultLocale).format("LLLL")}>
        <Typography.Text {...rest}>
            {dayjs(value)
            .locale(locales || defaultLocale)
            .format(dateFormat)}
        </Typography.Text>
    </Tooltip>
};
