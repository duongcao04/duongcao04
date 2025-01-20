'use client'

import { Input } from '@heroui/input'
import { FormikProps, useFormik } from 'formik'
import { useTranslations } from 'next-intl'
import * as yup from 'yup'

import { customizeToast, updateToast } from '@/components/customize-toast'
import { Button } from '@/components/ui/button'

import { sendMail } from '@/lib/nodemailer'

import ContactMessageField from '../form-fields/contact-message-field'

const validationSchema = yup.object().shape({
    name: yup.string().required('Name must be required'),
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
            name: '',
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
                    subject: `${values.name} | Contact from yangis.dev`,
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

    return (
        <form onSubmit={formik.handleSubmit} className="w-full space-y-5">
            <div className="flex items-center justify-center gap-5">
                <Input
                    isRequired
                    id="name"
                    name="name"
                    label={t('name')}
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    errorMessage={formik.errors.name}
                    isInvalid={
                        Boolean(formik.errors.name) &&
                        Boolean(formik.touched.name)
                    }
                />
                <Input
                    isRequired
                    id="email"
                    name="email"
                    label={t('email')}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    errorMessage={formik.errors.email}
                    isInvalid={
                        Boolean(formik.errors.email) &&
                        Boolean(formik.touched.email)
                    }
                />
            </div>
            <ContactMessageField form={formik} />

            <Button size={'lg'} type="submit">
                {t('submit')}
            </Button>
        </form>
    )
}

export default ContactForm
