import { Button, Col, Row, Segmented, Space, Tooltip, Typography } from 'antd'
import dayjs from 'dayjs'
import { NextIcon, PrevIcon, TodayIcon } from '../icons'
import { Navigate } from "react-big-calendar"
import { useSearchParams } from '@remix-run/react'

export const CalendarComponents = {
    toolbar({ label, localizer, onNavigate, onView, view, views }: any){
        const { messages } = localizer
        const [ searchParams, setSearchParams ] = useSearchParams()
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
                    onChange={(value: any) => {
                        onView(value)
                        searchParams.set('view', value)
                        setSearchParams(searchParams)
                    }}
                    options={(views as []).map((view) => ({
                        value: view,
                        label: view,
                    }))}
                />
            </Col>
        </Row>
    },
    month: {
        header ({ label, date }: any) {
            return <Tooltip title={dayjs(date).format('dddd')}>
                <Typography.Title level={5}>{label}</Typography.Title>
            </Tooltip>
        },
        dateHeader ({ label, date, onDrillDown }: any) {
            return <Tooltip title={dayjs(date).format('dddd, LL')}>
                <Button type='text'
                    onClick={onDrillDown}
                >
                    {label}
                </Button>
            </Tooltip> 
        }
    },
}

export default CalendarComponents
