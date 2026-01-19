export const PROJECTS = [
    {
        slug: 'csd-governance',
        title: 'CSD Governance System',
        category: 'Systems',
        role: 'Lead Developer',
        startedAt: '2026/07/25',
        endedAt: '2026/01/19',
        client: 'Internal Tool',
        platform: 'Web & Desktop (Tauri)',
        services: 'Full Stack Dev, UI/UX Design',
        description:
            'A comprehensive ERP solution designed to streamline HR management, centralized brand asset distribution, and automate internal workflows.',
        longDescription: `
      The <strong>CSD Governance System</strong> was born out of a need to unify fragmented internal processes. 
      <br/><br/>
      Previously, HR data, brand assets, and project files were scattered across different drives and spreadsheets. 
      This system centralizes everything into a single, <em>role-based dashboard</em>.
    `,
        challenge: `
      The main challenge was handling complex permission levels (<strong>RBAC</strong>) while ensuring the interface remained simple for non-technical staff. 
      <br/>
      Additionally, real-time synchronization for the asset library was critical.
    `,
        solution:
            'We utilized <strong>NestJS</strong> for a robust backend architecture and <strong>TanStack Query</strong> on the frontend to manage server state efficiently.',
        content: `
        <div>
  <h1>Project Showcase: Cadsquad Staff Platform</h1>

  <section>
    <h2>1. The Problem: Scaling Pains in a Growing Enterprise</h2>
    <p>
      As Cadsquad expanded, our internal operations became increasingly fragmented. Key business processes were scattered across spreadsheets, disparate communication channels, and legacy tools. This lack of a unified system led to several critical challenges:
    </p>
    <ul>
      <li>
        <strong>Operational Inefficiency:</strong> Tracking project progress, managing job assignments, and monitoring staff availability was manual and time-consuming.
      </li>
      <li>
        <strong>Information Silos:</strong> Critical data was isolated in different departments, making cross-functional collaboration difficult and hindering informed decision-making.
      </li>
      <li>
        <strong>Disconnected Workforce:</strong> With teams working across various locations, maintaining a cohesive company culture and ensuring timely communication was a significant hurdle.
      </li>
      <li>
        <strong>Security and Access Control:</strong> Managing user permissions and safeguarding sensitive company data across multiple ad-hoc systems was complex and insecure.
      </li>
    </ul>
    <p>
      We needed a centralized, secure, and scalable solution to bring our people, projects, and processes together.
    </p>
  </section>

  <hr />

  <section>
    <h2>2. The Solution: A Unified Digital Headquarters</h2>
    <p>
      The <strong>Cadsquad Staff Platform</strong> is an all-in-one enterprise solution built from the ground up to address these challenges. It serves as the digital nerve center for the entire organization, providing a single source of truth and a comprehensive suite of tools to streamline every aspect of our operations.
    </p>
    <p>
      The platform empowers our team to manage projects, finances, and administrative tasks efficiently in a secure, collaborative, and accessible environment. It transforms our business logic into a cohesive digital experience, automating workflows and providing real-time visibility into the health of the organization.
    </p>

    <h3>How it is Applied in Practice:</h3>
    <ul>
      <li>
        <strong>Project Managers</strong> use the platform to create jobs, assign tasks, and track project milestones from initiation to completion.
      </li>
      <li>
        <strong>Team Members</strong> access their daily "Workbench" to view their schedules, collaborate with colleagues in "Communities," and receive real-time notifications about important updates.
      </li>
      <li>
        <strong>HR and Admin</strong> manage the official Staff Directory, onboard new hires, and oversee department structures.
      </li>
      <li>
        <strong>Leadership</strong> utilizes the Analysis and Financial modules to gain strategic insights into performance, resource allocation, and overall business metrics.
      </li>
      <li>
        <strong>All Staff</strong> can access the platform via a web browser or a dedicated cross-platform desktop application, ensuring seamless productivity whether in the office or remote.
      </li>
    </ul>
  </section>

  <hr />

  <section>
    <h2>3. Core Business Logic &amp; Features</h2>
    <p>
      The platform is built around a modular architecture that mirrors our core business functions:
    </p>
    <ul>
      <li>
        <strong>🚀 Operational Excellence:</strong>
        <ul>
          <li>
            <strong>Job &amp; Project Management:</strong> End-to-end lifecycle management for all client and internal projects.
          </li>
          <li>
            <strong>Workbench &amp; Analysis:</strong> Personalized dashboards for daily tasks and powerful analytics for performance evaluation.
          </li>
        </ul>
      </li>
      <li>
        <strong>👥 Workforce Management:</strong>
        <ul>
          <li>
            <strong>Staff Directory &amp; Profiles:</strong> A detailed and searchable directory of all personnel.
          </li>
          <li>
            <strong>Scheduling &amp; Availability:</strong> Tools to manage work schedules and optimize resource allocation.
          </li>
          <li>
            <strong>Department &amp; Role Management:</strong> Flexible and hierarchical structures for teams and user permissions.
          </li>
        </ul>
      </li>
      <li>
        <strong>💬 Communication &amp; Collaboration:</strong>
        <ul>
          <li>
            <strong>Communities:</strong> Dedicated spaces for team-based discussions, file sharing, and knowledge management.
          </li>
          <li>
            <strong>Real-Time Notifications:</strong> An integrated system powered by Ably and Firebase Push Notifications to keep everyone informed.
          </li>
        </ul>
      </li>
      <li>
        <strong>🛡️ Security &amp; Access:</strong>
        <ul>
          <li>
            <strong>Centralized Authentication:</strong> Secure sign-on using company credentials, integrated with Microsoft Azure AD.
          </li>
          <li>
            <strong>Role-Based Access Control (RBAC):</strong> Granular permissions managed through a dedicated <code>role-permissions</code> module, ensuring users only access data relevant to their role.
          </li>
        </ul>
      </li>
    </ul>
  </section>

  <hr />

  <section>
    <h2>4. Technology Stack &amp; Architecture: Engineered for Excellence</h2>
    <p>
      Our choice of technology is a direct reflection of our commitment to quality, performance, and security. We chose a modern, decoupled architecture to build a future-proof platform that is both powerful and a pleasure to use. This approach allows our teams to innovate rapidly while ensuring the system remains stable and scalable.
    </p>

    <h3>The Engine Room: Our Backend Architecture</h3>
    <p>
      The backend is the robust engine that powers the entire platform. Its design prioritizes reliability, speed, and security to manage our core business logic.
    </p>
    <ul>
      <li>
        <strong>Framework &amp; Language:</strong> We use <strong>NestJS</strong>, a cutting-edge framework for <strong>Node.js</strong> written in <strong>TypeScript</strong>.
        <ul>
          <li>
            <strong>Business Purpose:</strong> NestJS’s modular and organized structure allows us to build complex, interdependent features (like linking financials to projects) with high reliability and speed. This means we can deliver new capabilities to our users faster and with fewer bugs.
          </li>
        </ul>
      </li>
      <li>
        <strong>Database &amp; Data Access:</strong> The platform is built on <strong>PostgreSQL</strong>, a world-class relational database, and we interact with it using the <strong>Prisma ORM</strong>.
        <ul>
          <li>
            <strong>Business Purpose:</strong> This combination guarantees the highest level of <strong>data integrity and consistency</strong>. PostgreSQL ensures our critical business data is stored securely and reliably. Prisma provides a type-safe layer that eliminates entire classes of data-related errors, ensuring the information users see is always accurate.
          </li>
        </ul>
      </li>
      <li>
        <strong>Real-Time Collaboration &amp; Notifications:</strong> We use <strong>Ably</strong> and native <strong>WebSockets</strong>.
        <ul>
          <li>
            <strong>Business Purpose:</strong> These technologies are the heart of our collaborative features. They push updates instantly, ensuring that when a team member posts a comment or a project status changes, everyone else sees it immediately. This creates a <strong>dynamic, live environment</strong> that boosts teamwork and eliminates information delays.
          </li>
        </ul>
      </li>
      <li>
        <strong>Security &amp; Authentication:</strong> User access is managed via <strong>Passport.js</strong> with a direct integration to <strong>Microsoft Azure AD</strong>.
        <ul>
          <li>
            <strong>Business Purpose:</strong> We provide <strong>enterprise-grade security out of the box</strong>. By leveraging your existing corporate identities, we offer a seamless and highly secure Single Sign-On (SSO) experience. This simplifies user management and ensures that only authorized personnel can access sensitive company data.
          </li>
        </ul>
      </li>
    </ul>

    <h3>The User Experience: Our Frontend Architecture</h3>
    <p>
      The frontend is crafted to be intuitive, responsive, and powerful, delivering a user experience that feels less like a website and more like a high-performance desktop application.
    </p>
    <ul>
      <li>
        <strong>Core Framework:</strong> We use <strong>React</strong> (powered by <strong>Vite</strong>), the industry standard for building dynamic user interfaces.
        <ul>
          <li>
            <strong>Business Purpose:</strong> This choice enables us to create a <strong>highly interactive and fast user interface</strong>. Components update instantly, data is handled efficiently, and the overall experience is smooth and fluid, which increases user productivity and satisfaction.
          </li>
        </ul>
      </li>
      <li>
        <strong>Application &amp; Data Flow:</strong> We leverage the <strong>TanStack</strong> suite (including Router and Query).
        <ul>
          <li>
            <strong>Business Purpose:</strong> This powerful toolset is key to creating a <strong>desktop-class web experience</strong>. It makes navigation instant and predictable, and it intelligently caches data to make the application feel incredibly fast. Users spend less time waiting for pages to load and more time getting work done.
          </li>
        </ul>
      </li>
      <li>
        <strong>UI &amp; Design:</strong> Our platform uses a hybrid strategy of <strong>Ant Design</strong> and <strong>Tailwind CSS</strong>.
        <ul>
          <li>
            <strong>Business Purpose:</strong> This gives us the best of both worlds: <strong>robust functionality and polished design</strong>. Ant Design provides a rich library of pre-built components for complex features like data tables and forms, while Tailwind CSS gives us the creative freedom to ensure every pixel is perfectly aligned with our brand, resulting in a beautiful and intuitive interface.
          </li>
        </ul>
      </li>
      <li>
        <strong>Cross-Platform Desktop App:</strong> We use <strong>Tauri</strong> to deliver a native desktop experience.
        <ul>
          <li>
            <strong>Business Purpose:</strong> We meet users where they work. Tauri allows us to package our web application into a <strong>lightweight, secure, and fast native app</strong> for Windows, macOS, and Linux. Users get the benefit of a dedicated app with OS notifications and better performance, without us having to maintain separate codebases.
          </li>
        </ul>
      </li>
    </ul>

    <h3>The Foundation: Our Infrastructure</h3>
    <p>
      Our infrastructure is built on principles of reliability, consistency, and scalability, ensuring the platform is always available when you need it.
    </p>
    <ul>
      <li>
        <strong>Containerization &amp; Deployment:</strong> The entire system is containerized with <strong>Docker</strong> and managed with <strong>Docker Compose</strong>.
        <ul>
          <li>
            <strong>Business Purpose:</strong> This guarantees <strong>consistency and unmatched reliability</strong>. Our application runs in a self-contained, isolated environment, which eliminates the "it works on my machine" problem. This means deployments are smooth, and the platform runs identically and predictably for every user, every time.
          </li>
        </ul>
      </li>
    </ul>
    <p>
      This robust architecture ensures the Cadsquad Staff Platform is not only powerful and feature-rich but also reliable, secure, and ready to scale with the future growth of our company.
    </p>
  </section>

  <hr />

  <section>
    <h2>5. Why Choose Cadsquad Staff? The Business Logic Advantage</h2>
    <p>
      While many off-the-shelf software solutions can solve individual problems, the Cadsquad Staff Platform delivers its core value through a deep, holistic understanding of our specific business. It's not just a collection of features; it's a strategic asset built on in-depth expertise. Here’s why it stands apart:
    </p>

    <h3>A. Built by Us, for Us: Tailor-Made Business Logic</h3>
    <p>
      The platform is not a generic project management tool forced to fit our workflow. It was designed with the DNA of an engineering and consulting firm from day one.
    </p>
    <ul>
      <li>
        <strong>Job-Centric Architecture:</strong> The entire system revolves around the concept of a "Job," which perfectly mirrors our business model. A Job is the central entity that connects clients, projects, staff, schedules, and financials. This provides a 360-degree view that generic, task-based software can never replicate.
      </li>
      <li>
        <strong>Industry-Specific Modules:</strong> Features like the <strong>Project Center</strong>, <strong>Workbench</strong>, and <strong>Staff Directory</strong> are imbued with logic that understands our needs, from tracking project milestones to managing employee skills and availability for specific engineering disciplines.
      </li>
    </ul>

    <h3>B. Deep Integration: A Single Source of Truth</h3>
    <p>
      The platform’s primary strength is its ability to break down information silos by seamlessly integrating disparate business functions.
    </p>
    <ul>
      <li>
        <strong>Connected Data Model:</strong> When a project manager updates a job's status, the change is instantly reflected in financial projections, team schedules, and executive dashboards. There is no need for manual data entry or reconciliation between different systems.
      </li>
      <li>
        <strong>Cross-Functional Workflows:</strong> The <strong>Workbench</strong> is a prime example of this integration. It provides each employee with a personalized view of their world, aggregating assigned tasks, upcoming deadlines, and relevant communications from across the platform into a single, actionable interface.
      </li>
    </ul>

    <h3>C. Intelligent Resource Management</h3>
    <p>
      We don't just track our people; we optimize their deployment. The platform moves beyond a simple staff list into the realm of strategic resource allocation.
    </p>
    <ul>
      <li>
        <strong>Skill &amp; Availability Matching:</strong> By combining the <strong>Staff Directory</strong> (with detailed profiles on skills and expertise) with real-time <strong>Schedules</strong> and <strong>Availability</strong> data, managers can quickly assemble the perfect team for any given project.
      </li>
      <li>
        <strong>Proactive Planning:</strong> The system allows for forward-looking resource planning, helping us identify potential bottlenecks or skill gaps before they impact project delivery.
      </li>
    </ul>

    <h3>D. From Data to Decisions: Actionable Insights</h3>
    <p>
      By centralizing all operational data, the platform transforms raw information into a strategic asset.
    </p>
    <ul>
      <li>
        <strong>Real-Time Analytics:</strong> The <strong>Analysis</strong> module is not just for historical reporting. It provides live dashboards on project profitability, resource utilization, and team performance, empowering leadership to make timely, data-driven decisions.
      </li>
      <li>
        <strong>Holistic Performance View:</strong> We can instantly assess the health of any project, department, or the entire business, backed by a single, undisputed source of data. This eliminates guesswork and enables us to focus on what truly matters.
      </li>
    </ul>
    <p>
      In essence, the Cadsquad Staff Platform is more than just software. It is the embodiment of our business processes, refined and encoded into a system that drives efficiency, fosters collaboration, and provides the intelligence we need to lead our industry.
    </p>
  </section>

  <hr />

  <section>
    <h2>6. Future Development: Innovating for Tomorrow</h2>
    <p>
      The Cadsquad Staff Platform is a living, breathing ecosystem that will evolve alongside our business. Our vision extends far beyond its current capabilities. We are committed to continuous innovation and are actively working on the next generation of features that will provide even greater value.
    </p>
    <ul>
      <li>
        <strong>AI-Powered Predictive Analytics:</strong> We are exploring the integration of Artificial Intelligence and Machine Learning to move from reactive analysis to proactive insights. Imagine a system that can predict potential project delays, suggest optimal resource allocations based on performance data, and identify new opportunities for operational improvement automatically.
      </li>
      <li>
        <strong>Enhanced Mobile-First Functionality:</strong> As our workforce becomes more dynamic, we are committed to delivering a comprehensive, native mobile experience. This will empower team members with full access to their workbench, scheduling, and collaboration tools, no matter where they are.
      </li>
      <li>
        <strong>Seamless Third-Party Integrations:</strong> To further centralize our operations, our roadmap includes building robust integrations with leading accounting software, industry-standard calendar applications, and other critical enterprise tools. This will make the platform the undisputed single hub for all business activities.
      </li>
    </ul>
  </section>

  <hr />

  <section>
    <h2>7. Our Commitment to Excellence</h2>
    <p>
      Our platform is a product of our philosophy. We believe that world-class software is built on a foundation of trust, collaboration, and an unwavering commitment to quality.
    </p>
    <ul>
      <li>
        <strong>A User-Centric Philosophy:</strong> Our roadmap is not built in a vacuum; it is co-created with our users. We have established direct feedback channels and actively engage with our team to understand their challenges and ideas. Every new feature is a direct response to a real-world need.
      </li>
      <li>
        <strong>Agile and Iterative Improvement:</strong> We follow an agile development methodology, which allows us to deliver value incrementally and consistently. The platform is not static; it is constantly improving through regular updates, performance tuning, and feature enhancements. This ensures the tool you use tomorrow is better than the one you use today.
      </li>
      <li>
        <strong>Uncompromising Security and Reliability:</strong> In a world of evolving threats, security is not a feature; it is a prerequisite for everything we build. We are dedicated to maintaining the highest standards of data protection through regular security audits, proactive patching, and a resilient infrastructure designed for maximum uptime.
      </li>
    </ul>
  </section>

  <hr />

  <section>
    <h2>8. Conclusion: Your Foundation for Growth</h2>
    <p>
      In a competitive landscape, efficiency, intelligence, and cohesion are no longer optional—they are the bedrock of success. The fragmentation of tools, data, and communication is a hidden tax on an organization's potential.
    </p>
    <p>
      The <strong>Cadsquad Staff Platform</strong> is the definitive answer to this challenge. It is more than just a software suite; it is a foundational business asset that replaces chaos with clarity and silos with synergy. By providing a unified, intelligent, and secure digital environment, it empowers our teams to do their best work, fosters a culture of collaboration, and provides the leadership with the insights needed to navigate the future with confidence.
    </p>
    <p>
      Choosing the Cadsquad Staff Platform is an investment in a more efficient, connected, and intelligent future for our entire organization. It is our engine for growth and our partner in success.
    </p>
  </section>

  <hr />

  <section>
    <h3>Have an Idea or Need Support?</h3>
    <p>
      The Cadsquad Staff Platform is built for you, and your feedback is what fuels its evolution. If you have an idea for a new feature, a suggestion for improvement, or require support, please do not hesitate to reach out.
    </p>
    <p>
      <strong>Contact the development team at:</strong> <a href="mailto:ch.duong@cadsquad.vn">ch.duong@cadsquad.vn</a>
    </p>
    <p>
      Your insights are essential as we continue to build the future of work at Cadsquad together.
    </p>
  </section>
</div>`,
        features: [
            'Role-Based Access Control (RBAC)',
            'Real-time Notification System',
            'Automated Payroll Calculation',
            'Centralized Brand Asset Library',
        ],
        image: 'https://res.cloudinary.com/dqx1guyc0/image/upload/v1768814466/Yangisdev/Projects/StaffCadsquad_exgcfc.png',
        tags: [
            'Next.js',
            'NestJS',
            'Docker',
            'TanStack',
            'Prisma',
            'PostgreSQL',
        ],
        links: {
            demo: '#',
            repo: '#',
        },
    },
]
