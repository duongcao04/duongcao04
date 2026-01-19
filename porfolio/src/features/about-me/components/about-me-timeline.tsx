import Timeline from '@mui/lab/Timeline'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import Typography from '@mui/material/Typography'
import { useLocale } from 'next-intl'
import Link from 'next/link'

import { TIMELINE } from './constants/timeline'

function AboutMeTimeline() {
    const locale = useLocale()
    const timeLine = (locale === 'en' ? TIMELINE.english : TIMELINE.vietnamese)
        .slice()
        .reverse()

    return (
        <Timeline position="alternate">
            {timeLine.map((item, index) => {
                const isOdd = index % 2 === 0

                return (
                    <TimelineItem key={index}>
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            align="right"
                            variant="body2"
                        >
                            {item.times}
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot
                                color="primary"
                                variant={isOdd ? 'filled' : 'outlined'}
                            >
                                <item.icon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '30px', px: 2 }}>
                            <Typography variant="h6" component="span">
                                <p className="text-base font-bold">
                                    {item.title}
                                </p>
                            </Typography>
                            <div>
                                <Typography component={'p'}>
                                    {item.address.pre && (
                                        <span>{item.address.pre + ' '}</span>
                                    )}
                                    <Link
                                        href={item.address.href}
                                        target="_blank"
                                        className="text-primary font-medium"
                                    >
                                        {item.address.label}
                                    </Link>
                                </Typography>
                                {item.major && (
                                    <Typography component={'p'}>
                                        <span>{item.major.pre + ' '}</span>
                                        <Link
                                            href={item.major.href}
                                            target="_blank"
                                            className="text-primary font-medium"
                                        >
                                            {item.major.label}
                                        </Link>
                                    </Typography>
                                )}
                            </div>
                        </TimelineContent>
                    </TimelineItem>
                )
            })}
        </Timeline>
    )
}

export default AboutMeTimeline
