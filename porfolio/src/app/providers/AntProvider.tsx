'use client'

import React from 'react'

import { AntdRegistry } from '@ant-design/nextjs-registry'
import { ConfigProvider } from 'antd'
import { ThemeProvider } from 'antd-style'

export default function AntdProvider({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <AntdRegistry>
            <ThemeProvider>
                <ConfigProvider
                    theme={{
                        components: {
                            Table: {
                                headerBg: 'var(--color-background2)',
                            },
                            Tabs: {
                                horizontalMargin: '0',
                            },
                            Select: {
                                selectorBg: 'var(--color-background)',
                                optionSelectedColor: 'var(--color-primary)',
                                activeBorderColor: 'var(--color-primary)',
                                hoverBorderColor: 'var(--color-primary)',
                                borderRadius: 12,
                                controlPaddingHorizontal: 20,
                                controlHeight: 38,
                            },
                            DatePicker: {
                                colorBgContainer: 'var(--color-background)',
                                activeBorderColor: 'var(--color-primary)',
                                hoverBorderColor: 'var(--color-primary)',
                                borderRadiusLG: 12,
                            },
                        },
                    }}
                    drawer={{
                        classNames: {
                            wrapper: '!p-2.5 !shadow-none',
                            content: 'rounded-lg shadow-lg',
                            body: '!py-3 !px-5',
                        },
                        styles: {
                            header: {
                                paddingInline: 16,
                                paddingBlock: 12,
                            },
                        },
                    }}
                    modal={{
                        classNames: {
                            content: 'shadow-lg',
                        },
                        style: {
                            top: 80,
                        },
                        styles: {
                            mask: {
                                background: '#000000c0',
                            },
                            content: {
                                borderRadius: '24px',
                            },
                        },
                    }}
                    select={{
                        style: {
                            MozOutlineRadius: 10,
                        },
                        styles: {
                            root: {
                                borderStartStartRadius: 10,
                                backgroundColor:
                                    'var(--color-background) !important',
                            },
                        },
                        classNames: {
                            root: '!rounded-2xl !bg-background',
                        },
                    }}
                    avatar={{
                        style: {},
                    }}
                >
                    <>
                        {/*
                         * Table styles
                         */}
                        <style jsx global>{`
                            :where(
                                    .css-dev-only-do-not-override-1qhywnf
                                ).ant-table-wrapper {
                                height: 100% !important;
                            }
                            :where(
                                    .css-dev-only-do-not-override-1qhywnf
                                ).ant-spin-nested-loading {
                                height: 100% !important;
                            }
                            :where(
                                    .css-dev-only-do-not-override-1qhywnf
                                ).ant-spin-nested-loading
                                .ant-spin-container {
                                height: 100% !important;
                            }
                            :where(
                                    .css-dev-only-do-not-override-1qhywnf
                                ).ant-table-wrapper
                                .ant-table {
                                height: 100% !important;
                            }

                            .ant-table-container {
                                height: 100% !important;
                                padding: 14px !important;
                            }
                            :where(
                                    .css-dev-only-do-not-override-175gf9i
                                ).ant-table-wrapper
                                .ant-table {
                                border-radius: 14px !important;
                            }

                            :where(
                                    .css-dev-only-do-not-override-175gf9i
                                ).ant-table-wrapper
                                .ant-table
                                .ant-table-title,
                            :where(
                                    .css-dev-only-do-not-override-1qhywnf
                                ).ant-table-wrapper
                                .ant-table
                                .ant-table-title,
                            :where(
                                    .css-dev-only-do-not-override-1qhywnf
                                ).ant-table-wrapper
                                .ant-table
                                .ant-table-header {
                                color: var(--color-foreground) !important;
                                border-radius: 14px !important;
                                box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
                            }
                            .ant-table-wrapper .ant-table-column-title {
                                display: -webkit-box;
                                -webkit-line-clamp: 1; /* số dòng muốn giới hạn */
                                -webkit-box-orient: vertical;
                                overflow: hidden;
                            }
                            .ant-table-body {
                                color: var(--color-foreground) !important;
                                background: var(--color-background) !important;
                                height: calc(100% - 53px) !important;
                                margin-right: -8px !important;
                                margin-bottom: -8px !important;

                                margin-top: 12px !important;
                                overflow: auto !important;
                                scrollbar-width: thin !important;
                                scrollbar-color: var(--color-text-text3)
                                    transparent !important;
                                scrollbar-gutter: stable !important;
                            }
                        `}</style>
                        {children}
                    </>
                </ConfigProvider>
            </ThemeProvider>
        </AntdRegistry>
    )
}
