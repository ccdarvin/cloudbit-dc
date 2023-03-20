import { Button, Col, Row, Segmented, Space, Tooltip, Typography } from 'antd'
import type { Components } from 'react-big-calendar'
import dayjs from 'dayjs'
import { NextIcon, PrevIcon, TodayIcon } from '../icons'
import { Navigate } from "react-big-calendar"

export const CalendarComponents: Components = {
    toolbar({ label, localizer, onNavigate, onView, view, views }){
        const { messages } = localizer
        return <Row justify="space-between" align="middle" style={{paddingBottom: '1rem'}}>
            <Col>
                <Space.Compact>
                    <Button icon={<TodayIcon />} onClick={() => onNavigate(Navigate.TODAY)} title={messages.today}/>
                    <Button icon={<PrevIcon />} onClick={() => onNavigate(Navigate.PREVIOUS)}  title={messages.next}/>
                    <Button icon={<NextIcon />} onClick={() => onNavigate(Navigate.NEXT)} title={messages.previous}/>
                </Space.Compact>
    
            </Col>
            <Col>
                <Typography.Text>{label}</Typography.Text>
            </Col>
            <Col>
                <Segmented
                    value={view}
                    onChange={(value: any) => onView(value)}
                    options={(views as []).map((view) => ({
                        value: view,
                        label: view,
                    }))}
                />
            </Col>
        </Row>
    },
    month: {
        header ({ label, date }) {
            return <Tooltip title={dayjs(date).format('dddd')}>
                <Typography.Title level={5}>{label}</Typography.Title>
            </Tooltip>
        },
        dateHeader ({ label, date, ...props }) {
            return <Tooltip title={dayjs(date).format('dddd, LL')}>
                <Button type='text'
                    onClick={props.onDrillDown}
                >
                    {label}
                </Button>
            </Tooltip> 
        }
    },
}

export default CalendarComponents
