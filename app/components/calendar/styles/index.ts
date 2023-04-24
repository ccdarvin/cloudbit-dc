import { createStyles } from 'antd-style'


export const useStylesCalendar =  createStyles(({ token }) => ({
    calendar: {
        '.rbc-event': {
            backgroundColor: token.colorPrimaryBg,
            borderColor: token.colorPrimaryText,
            color: token.colorPrimaryText,
        }
    }
}))