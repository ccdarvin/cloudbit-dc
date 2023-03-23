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
    BsThreeDotsVertical,
    BsSave,
    BsXSquare,
    BsChevronRight,
    BsChevronLeft,
    BsCircle,
    BsCalendar3,
    BsFillMoonStarsFill,
    BsSun,
    BsArrowCounterclockwise,
    BsArrowClockwise
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

export const SaveIcon = () => {
    return <Icon component={BsSave} />
}

export const DeleteIcon = () => {
    return <Icon component={BsTrash} />
}

export const CloseIcon = () => {
    return <Icon component={BsXSquare} />
}


export const CalendarIcon = () => {
    return <Icon component={BsCalendar3} />
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


/***************************
 * CALENDAR ICONS
 ***************************/

export const PrevIcon = () => {
    return <Icon component={BsChevronLeft} />
}

export const NextIcon = () => {
    return <Icon component={BsChevronRight} />
}

export const TodayIcon = () => {
    return <Icon component={BsCircle} />
}

/***********************************
 *  MODE SWITCHER ICONS
 */

export const LightIcon = () => {
    return <Icon component={BsFillMoonStarsFill} />
}

export const DarkIcon = () => {
    return <Icon component={BsSun} />
}


/************************************
 * editor icons
 */

export const UndoIcon = () => {
    return <Icon component={BsArrowCounterclockwise} />
}

export const RedoIcon = () => {
    return <Icon component={BsArrowClockwise} />
}