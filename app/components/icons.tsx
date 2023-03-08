import Icon from '@ant-design/icons'
import { BsClipboard2Plus, BsPersonVcard, BsPlusLg } from "react-icons/bs"


export const CreateIcon = () => {
    return <Icon component={BsPlusLg} />
}

export const PatientIcon = () => {
    return <Icon component={BsPersonVcard} />
}

export const TreatmentIcon = () => {
    return <Icon component={BsClipboard2Plus} />
}