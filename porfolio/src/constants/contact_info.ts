import { FiPhoneCall } from 'react-icons/fi'
import { IconType } from 'react-icons/lib'
import { LuSend } from 'react-icons/lu'
import { PiMessengerLogoBold, PiSkypeLogoBold } from 'react-icons/pi'

type ContactInfo = {
    viTitle: string
    enTitle: string
    viDescription: string
    enDescription: string
    method: {
        icon: IconType
        enLabel: string
        viLabel: string
        href: string
    }[]
}
export const CONTACT_INFOS: ContactInfo[] = [
    {
        viTitle: 'Gọi cho tôi',
        enTitle: 'Call me',
        viDescription: 'Có mặt từ 8:00 sáng đến 5:00 chiều.',
        enDescription: 'Available from 8:00am to 5:00pm.',
        method: [
            {
                icon: FiPhoneCall,
                viLabel: '(+84) 862 248 332',
                enLabel: '(+84) 862 248 332',
                href: '(+84) 862 248 332',
            },
        ],
    },
    {
        enTitle: 'Chat with me',
        viTitle: 'Trò chuyện với tôi',
        enDescription: 'Send me a message on social media.',
        viDescription: 'Gửi tin nhắn cho tôi trên mạng xã hội.',
        method: [
            {
                icon: PiSkypeLogoBold,
                enLabel: 'Start a live chat.',
                viLabel: 'Bắt đầu trò chuyện trực tiếp.',
                href: '(+84) 862 248 332',
            },
            {
                icon: LuSend,
                viLabel: 'Gửi cho tôi một email.',
                enLabel: 'Shoot me an email.',
                href: 'mailto:contact@yangis.dev',
            },
            {
                icon: PiMessengerLogoBold,
                enLabel: 'Message me on Messenger.',
                viLabel: 'Nhắn tin cho tôi trên Messenger.',
                href: 'https://www.facebook.com/duongcaodev',
            },
        ],
    },
]
