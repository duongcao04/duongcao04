import * as React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'
import { Button } from '../ui/button'

export default function FooterNavigate() {
    return (
        <>
            <Button className="rounded-r-none size-[51px] shadow-none">
                <FaArrowLeft size={24} />
            </Button>
            <Button className="rounded-l-none size-[51px] shadow-none">
                <FaArrowRight size={24} />
            </Button>
        </>
    )
}
