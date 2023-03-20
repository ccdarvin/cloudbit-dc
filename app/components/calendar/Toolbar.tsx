import { Button, Col, DatePicker, Row, Segmented, Space, Typography } from "antd"
import type { ToolbarProps } from "react-big-calendar"
import { Navigate } from "react-big-calendar"
import { NextIcon, PrevIcon, TodayIcon } from "../icons"


export default function Toolbar({ 
    label, 
    localizer, 
    onNavigate, 
    onView, 
    view, 
    views 
}: ToolbarProps
){
    const { messages } = localizer
    return <Row justify="space-between" align="middle">
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
}
