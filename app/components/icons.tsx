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
    BsArrowClockwise,
    BsTextParagraph,
    BsTypeH1,
    BsTypeH2,
    BsListUl,
    BsListOl,
    BsBlockquoteRight,
    BsChatSquareQuote,
    BsQuote,
    BsTypeBold,
    BsTypeItalic,
    BsTypeUnderline,
    BsTypeStrikethrough,
    BsLink,
    BsFileEarmarkCheck,
    BsStopwatch,
    BsCalendar3Event,
    BsWatch,
    BsFileEarmarkText
} from "react-icons/bs"
import { AiOutlineFileDone } from "react-icons/ai"
import { CiStickyNote } from "react-icons/ci"

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

export const UserIcon = (props: any) => {
    return <Icon {...props} component={BsPerson} />
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

export const ParagraphIcon = () => {
    return <Icon component={BsTextParagraph} />
}

export const H1Icon = () => {
    return <Icon component={BsTypeH1} />
}

export const H2Icon = () => {
    return <Icon component={BsTypeH2} />
}

export const BulletedListIcon = () => {
    return <Icon component={BsListUl} />
}

export const NumberedListIcon = () => {
    return <Icon component={BsListOl} />
}

export const QuoteIcon = () => {
    return <Icon component={BsQuote} />
}

export const BoldIcon = () => {
    return <Icon component={BsTypeBold} />
}  

export const ItalicIcon = () => {
    return <Icon component={BsTypeItalic} />
}

export const UnderlineIcon = () => {
    return <Icon component={BsTypeUnderline} />
}

export const StrikethroughIcon = () => {
    return <Icon component={BsTypeStrikethrough} />
}

export const LinkIcon = () => {
    return <Icon component={BsLink} />
}

/************************************
 *  events icons
 ************************************/

export const AppointmentIcon = () => {
    return <Icon component={BsCalendar3Event} />
}


export const TaskIcon = () => {
    return <Icon component={BsFileEarmarkCheck} />
}

export const ReminderIcon = () => {
    return <Icon component={BsWatch} />
}

export const NoteIcon = () => {
    return <Icon component={BsFileEarmarkText} />
}

