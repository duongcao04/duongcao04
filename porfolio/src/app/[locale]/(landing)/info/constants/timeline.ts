import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew'
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople'
import HailIcon from '@mui/icons-material/Hail'
import SportsHandballIcon from '@mui/icons-material/SportsHandball'
import { SvgIconTypeMap } from '@mui/material'
import { OverridableComponent } from '@mui/material/OverridableComponent'

type Timeline = {
    title: string
    address: { pre?: string; label: string; href: string }
    times: string
    icon: OverridableComponent<SvgIconTypeMap<object, 'svg'>> & {
        muiName: string
    }
    major?: { pre: string; label: string; href: string }
}
const VIETNAMESE_TIMELINE: Timeline[] = [
    {
        title: 'Học sinh',
        address: { label: 'Trường TH Tây Xuân', href: '#' },
        icon: HailIcon,
        times: '2010 - 2015',
    },
    {
        title: 'Học sinh',
        address: { label: 'Trường THCS Bùi Thị Xuân', href: '#' },
        icon: EmojiPeopleIcon,
        times: '2015 - 2019',
    },
    {
        title: 'Học sinh',
        address: { label: 'Trường THPT Quang Trung', href: '#' },
        icon: AccessibilityNewIcon,
        times: '2019 - 2022',
    },
    {
        title: 'Sinh viên',
        address: {
            label: 'Trường Đại học Giao thông vận tải TP. HCM',
            href: '#',
        },
        major: {
            pre: 'Ngành học: ',
            label: 'Công nghệ thông tin',
            href: '#',
        },
        icon: SportsHandballIcon,
        times: '2022 - Hiện tại',
    },
]
const ENGLISH_TIMELINE: Timeline[] = [
    {
        title: 'Student',
        address: { label: 'Tay Xuan Primary School', href: '#' },
        icon: HailIcon,
        times: '2010 - 2015',
    },
    {
        title: 'Student',
        address: { label: 'Bui Thi Xuan Secondary School', href: '#' },
        icon: EmojiPeopleIcon,
        times: '2015 - 2019',
    },
    {
        title: 'Student',
        address: { label: 'Quang Trung High School', href: '#' },
        icon: AccessibilityNewIcon,
        times: '2019 - 2022',
    },
    {
        title: 'Student',
        address: {
            label: 'University of Transport Ho Chi Minh City',
            href: '#',
        },
        major: {
            pre: 'Major: ',
            label: 'Information Technology',
            href: '#',
        },
        icon: SportsHandballIcon,
        times: '2022 - Now',
    },
]

export const TIMELINE = {
    vietnamese: VIETNAMESE_TIMELINE,
    english: ENGLISH_TIMELINE,
}
