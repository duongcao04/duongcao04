import * as React from 'react'
import { Button } from '../../ui/button'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'

export default function Footer() {
    return (
        <footer>
            <Button>
                <FaArrowLeft />
            </Button>
            <Button>
                <FaArrowRight />
            </Button>
        </footer>
    )
}
