'use client'

import React, { useEffect, useState } from 'react'

import { Textarea } from '@heroui/input'
import { FormikProps } from 'formik'

import { ContactFormValue } from '../forms/contact-form'

function ContactMessageField({
    form: formik,
}: {
    form: FormikProps<ContactFormValue>
}) {
    const [count, setCount] = useState<number>(0)

    return (
        <div className="relative group">
            <Textarea
                isRequired
                disableAutosize
                label="Message"
                classNames={{
                    input: 'h-[100px] overflow-y-auto min-h-[100px]',
                }}
                id="message"
                name="message"
                value={formik.values.message}
                onChange={(e) => {
                    formik.setFieldValue('message', e.target.value)
                    setCount(e.target.value.length)
                }}
                errorMessage={formik.errors.message}
                isInvalid={
                    Boolean(formik.errors.message) &&
                    Boolean(formik.touched.message)
                }
            />
            <div className="absolute right-5 top-3 text-xs font-semibold opacity-70">
                {count} / 1000
            </div>
        </div>
    )
}

export default ContactMessageField
