import { createStyles } from 'antd-style'


export const useStylesCalendar =  createStyles(({ token }) => ({
    calendar: {
        '.rbc-event': {
            backgroundColor: token.colorPrimaryText,
            borderColor: token.colorPrimaryBorder,
            color: token.colorWhite,
            '&.rbc-selected': {
                backgroundColor: token.colorPrimaryTextActive,
                borderColor: token.colorPrimaryBorderHover,
            },
            '&:hover': {
                backgroundColor: token.colorPrimaryTextHover,
                borderColor: token.colorPrimaryBorderHover,
            }
        },
        '.rbc-button-link': {
            color: token.colorTextLabel,
        },
        '.rbc-day-bg.rbc-off-range-bg': {
            backgroundColor: token.colorFill,
        },
        '.rbc-today': {
            backgroundColor: token.colorPrimaryBg,
        },
        '.rbc-day-bg + .rbc-day-bg': {
            borderLeft: `1px solid ${token.colorBorder}`,
        },
        '.rbc-month-row + .rbc-month-row': {
            borderTop: `1px solid ${token.colorBorder}`,
        },
        '.rbc-month-view, .rbc-time-view': {
            border: `1px solid ${token.colorBorder}`,
        },
        '.rbc-header + .rbc-header': {
            borderLeft: `1px solid ${token.colorBorder}`,
        },  
        '.rbc-header': {
            backgroundColor: token.colorPrimaryBg,
            color: token.colorPrimaryText,
            borderBottom: `2px solid ${token.colorBorder}`,
        },
        '.rbc-time-content': {
            borderTop: `2px solid ${token.colorBorder}`,
        },
        '.rbc-time-header-content': {
            borderLeft: `1px solid ${token.colorBorder}`,
        },
        '.rbc-time-header.rbc-overflowing': {
            borderRight: `1px solid ${token.colorBorder}`,
        },
        '.rbc-time-content > * + * > *': {
            borderLeft: `1px solid ${token.colorBorder}`,
        },
        '.rbc-timeslot-group': {
            borderBottom: `1px solid ${token.colorBorder}`,
        },
        '.rbc-day-slot .rbc-time-slot':{
            borderTop: `1px solid ${token.colorBorder}`,
        },
        '.rbc-current-time-indicator': {
            backgroundColor: token.colorPrimary,
            height: '1.5px',
        },
        '.rbc-agenda-empty': {
            color: token.colorTextLabel,
        },
    }
}))
