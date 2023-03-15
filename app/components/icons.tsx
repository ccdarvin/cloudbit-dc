import Icon from '@ant-design/icons'
import { 
    BsClipboard2Plus, 
    BsPersonVcard, 
    BsPlusSquare, 
    BsTrash,
    BsEye,
    BsPencilSquare,
    BsGearWide, 
    BsPerson,
    BsThreeDotsVertical
} from "react-icons/bs"

export const CreateIcon = () => {
    return <Icon component={BsPlusSquare} />
}

export const EditIcon = () => {
    return <Icon component={BsPencilSquare} />
}

export const ShowIcon = () => {
    return <Icon component={BsEye} />
}

export const DeleteIcon = () => {
    return <Icon component={BsTrash} />
}

export const PatientIcon = () => {
    return <Icon component={BsPersonVcard} />
}

export const TreatmentIcon = () => {
    return <Icon component={BsClipboard2Plus} />
}

export const SettingsIcon = () => {
    return <Icon component={BsGearWide} />
}

export const UserIcon = () => {
    return <Icon component={BsPerson} />
}

export const MoreIcon = () => {
    return <Icon component={BsThreeDotsVertical} />
}
