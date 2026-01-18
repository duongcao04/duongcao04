export const EMAIL_TEMPLATES = [
    // --- HR & Onboarding ---
    {
        key: 'welcome',
        label: 'Welcome to the Team',
        subject: 'Welcome aboard! Here is your login info.',
        body: 'Hi {{name}},\n\nWe are thrilled to have you join us! Please find attached the employee handbook and your initial login credentials.\n\nBest regards,\nHR Team',
    },
    {
        key: 'interview_invitation',
        label: 'Interview Invitation',
        subject: 'Invitation to Interview - [Position Name]',
        body: 'Dear {{name}},\n\nWe reviewed your application and would like to invite you for an interview. Please let us know your availability for next week.\n\nBest,\nRecruitment Team',
    },
    {
        key: 'offer_letter',
        label: 'Job Offer',
        subject: 'Job Offer from [Company Name]',
        body: 'Dear {{name}},\n\nWe are pleased to offer you the position of [Role] at [Company Name]. Please find the offer letter attached.\n\nCongratulations!',
    },
    {
        key: 'performance_review',
        label: 'Performance Review',
        subject: 'Upcoming Performance Review',
        body: 'Hi {{name}},\n\nThis is a reminder that your performance review is scheduled for [Date]. Please complete your self-assessment form beforehand.',
    },

    // --- Project Management ---
    {
        key: 'task_update',
        label: 'Task Assignment',
        subject: 'New Task Assigned: [Task Name]',
        body: 'Hi {{name}},\n\nYou have been assigned to a new task. Please check the dashboard for details and estimated deadline.\n\nThanks,',
    },
    {
        key: 'project_kickoff',
        label: 'Project Kickoff',
        subject: 'Project Kickoff: [Project Name]',
        body: 'Hi {{name}},\n\nWe are starting a new project! The kickoff meeting is scheduled for [Date/Time]. Please review the attached brief.',
    },
    {
        key: 'deadline_reminder',
        label: 'Deadline Reminder',
        subject: 'Urgent: Deadline Approaching for [Task]',
        body: 'Hi {{name}},\n\nJust a quick reminder that the deadline for [Task] is coming up on [Date]. Please let us know if you need any assistance.',
    },
    {
        key: 'meeting_minutes',
        label: 'Meeting Minutes',
        subject: 'Minutes: [Meeting Name] - [Date]',
        body: 'Hi {{name}},\n\nHere are the key takeaways and action items from our meeting earlier today. Please review attached document.',
    },

    // --- Admin & General ---
    {
        key: 'warning',
        label: 'Policy Reminder',
        subject: 'Important: Policy Reminder',
        body: 'Dear {{name}},\n\nThis is a reminder regarding our company policy on [Topic]. Please ensure compliance moving forward.',
    },
    {
        key: 'system_maintenance',
        label: 'System Maintenance',
        subject: 'Notice: Scheduled System Maintenance',
        body: 'Hi {{name}},\n\nThe system will be undergoing maintenance on [Date] from [Start Time] to [End Time]. Please save your work.',
    },
    {
        key: 'holiday_notice',
        label: 'Holiday Closure',
        subject: 'Office Closure: [Holiday Name]',
        body: 'Hi {{name}},\n\nPlease be advised that the office will be closed on [Date] for [Holiday]. Normal operations will resume on [Return Date].\n\nEnjoy the break!',
    },
    {
        key: 'password_reset',
        label: 'Password Reset',
        subject: 'Action Required: Reset Your Password',
        body: 'Hi {{name}},\n\nWe received a request to reset your password. If this was you, please click the link below. If not, please contact IT support immediately.',
    },
]
