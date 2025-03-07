'use client'

import { Input, Textarea } from '@heroui/input'
import { SlotsToClasses } from '@heroui/react'
import { FormikProps, useFormik } from 'formik'
import { useTranslations } from 'next-intl'
import * as yup from 'yup'

import { customizeToast, updateToast } from '@/components/customize-toast'
import { Button } from '@/components/ui/button'

import { sendMail } from '@/lib/nodemailer'

const validationSchema = yup.object().shape({
    fname: yup.string().required('First name must be required'),
    lname: yup.string().required('Last name must be required'),
    email: yup
        .string()
        .required('Email must be required')
        .email('Email invalid'),
    message: yup
        .string()
        .required('Message must be required')
        .min(10, 'Not shorter than 10 characters!')
        .max(1000, 'No longer than 1000 characters!'),
})

export type ContactFormValue = yup.InferType<typeof validationSchema>

function ContactForm() {
    const t = useTranslations('home.getInTouch.form')

    const formik: FormikProps<ContactFormValue> = useFormik<ContactFormValue>({
        initialValues: {
            fname: '',
            lname: '',
            email: '',
            message: '',
        },
        validationSchema,
        onSubmit: async (values) => {
            try {
                const id = customizeToast({
                    isLoading: true,
                    autoClose: false,
                    title: 'Loading...',
                    color: 'warning',
                })
                const response = await sendMail({
                    email: values.email,
                    subject: `${values.fname + values.lname} | Contact from yangis.dev`,
                    text: values.message,
                })
                if (response) {
                    formik.resetForm()
                    updateToast(id, {
                        title: 'Send email sucessfully !',
                        color: 'success',
                        autoClose: 1000,
                    })
                }
            } catch (error) {
                customizeToast({
                    title: 'Something went wrong !',
                    description: `${error}`,
                    color: 'danger',
                })
            }
        },
    })

    const inputStyles: SlotsToClasses<
        | 'input'
        | 'base'
        | 'label'
        | 'description'
        | 'errorMessage'
        | 'mainWrapper'
        | 'inputWrapper'
        | 'innerWrapper'
        | 'clearButton'
        | 'helperWrapper'
    > = {
        inputWrapper: 'border border-border bg-wallground py-6',
        input: 'text-text-primary',
        label: 'font-medium top-4',
    }

    return (
        <form onSubmit={formik.handleSubmit} className="w-full">
            <div className="flex items-center justify-center gap-5">
                <Input
                    isRequired
                    id="fname"
                    name="fname"
                    label={t('fname')}
                    labelPlacement="outside"
                    placeholder={t('fname')}
                    value={formik.values.fname}
                    onChange={formik.handleChange}
                    errorMessage={formik.errors.fname}
                    classNames={inputStyles}
                    isInvalid={
                        Boolean(formik.errors.fname) &&
                        Boolean(formik.touched.fname)
                    }
                />
                <Input
                    isRequired
                    id="lname"
                    name="lname"
                    label={t('lname')}
                    labelPlacement="outside"
                    placeholder={t('lname')}
                    value={formik.values.lname}
                    classNames={inputStyles}
                    onChange={formik.handleChange}
                    errorMessage={formik.errors.lname}
                    isInvalid={
                        Boolean(formik.errors.lname) &&
                        Boolean(formik.touched.lname)
                    }
                />
            </div>
            <div className="mt-12 mb-7">
                <Input
                    isRequired
                    id="email"
                    name="email"
                    label={t('email')}
                    labelPlacement="outside"
                    placeholder="you@company.com"
                    value={formik.values.email}
                    classNames={inputStyles}
                    onChange={formik.handleChange}
                    errorMessage={formik.errors.email}
                    isInvalid={
                        Boolean(formik.errors.email) &&
                        Boolean(formik.touched.email)
                    }
                />
            </div>
            <Textarea
                isRequired
                disableAutosize
                label={t('message')}
                classNames={{
                    input: 'h-[100px] overflow-y-auto min-h-[100px]',
                    inputWrapper: 'border border-border bg-wallground py-3',
                    label: 'font-medium -top-2',
                }}
                labelPlacement="outside"
                placeholder="Leave me a message ..."
                id="message"
                name="message"
                value={formik.values.message}
                onChange={(e) => {
                    formik.setFieldValue('message', e.target.value)
                }}
                errorMessage={formik.errors.message}
                isInvalid={
                    Boolean(formik.errors.message) &&
                    Boolean(formik.touched.message)
                }
            />

            <div className="w-full mt-8">
                <Button
                    type="submit"
                    className="w-full text-base py-6 rounded-3xl text-white"
                >
                    {t('submit')}
                </Button>
            </div>
        </form>
    )
}

export default ContactForm
