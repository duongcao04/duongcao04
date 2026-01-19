-- ============================================================
-- 1. SEED ALL CATEGORIES
-- ============================================================
INSERT INTO "categories" ("id", "code", "display_name", "description", "hex_color") VALUES
-- Original Categories
('9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d', 'system-arch', 'System Architecture', 'Scalable backend infrastructure, microservices, and DevOps workflows using NestJS and Docker.', '#06b6d4'),
('1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed', 'full-stack', 'Full Stack Ecosystems', 'End-to-end applications seamlessly integrating complex business logic with intuitive interfaces.', '#a855f7'),
('6c84fb90-12c4-11e1-840d-7b25c5ee775a', 'frontend-ux', 'Frontend Engineering', 'High-performance client-side applications built with React, Vite, and advanced animation libraries.', '#f472b6'),
('110ec58a-a0f2-4ac4-8393-c866d813b8d1', 'enterprise', 'Enterprise Solutions', 'Robust ERPs and management platforms designed to optimize organizational workflows.', '#10b981'),
('a12c85b9-e160-4c28-910a-7b320d7f1d43', 'security', 'Security & Privacy', 'Privacy-focused tools, encryption standards, and secure data handling protocols.', '#f43f5e'),
('f47ac10b-58cc-4372-a567-0e02b2c3d479', 'mobile-desktop', 'Cross-Platform Apps', 'Native-feeling applications for mobile and desktop using Tauri, PWA, and modern web tech.', '#f59e0b'),
('c2d3a90f-31a8-4c99-90b1-4c56e2f1e1a5', 'ai-data', 'AI & Data Science', 'Machine learning models, data visualization, and predictive analytics for intelligent systems.', '#3b82f6'),
('d91a6e5b-7890-4123-b678-9c0d1e2f3a4b', 'devops-cloud', 'DevOps & Infrastructure', 'CI/CD pipelines, container orchestration, and Linux server administration.', '#6366f1'),
('e82b7f6c-8901-4234-c789-0d1e2f3a4b5c', 'biodiversity-tech', 'Environmental Tech', 'Technology solutions focused on biodiversity monitoring and sustainable development.', '#84cc16'),
('f93c8g7d-9012-5345-d890-1e2f3a4b5c6d', 'ecommerce', 'E-Commerce', 'Scalable online stores, payment gateway integrations, and inventory management systems.', '#ec4899'),
-- New Categories (with specific IDs to avoid collision)
('22222222-2222-2222-2222-222222222222', 'landing-page', 'Landing Page', 'High-conversion marketing sites and portfolios.', '#F59E0B'),
('33333333-3333-3333-3333-333333333333', 'cloud-sec', 'Cloud Security', 'Secure infrastructure, encryption, and data sovereignty.', '#EF4444'),
('44444444-4444-4444-4444-444444444444', 'green-tech', 'Green Tech', 'Sustainable energy and eco-friendly technology solutions.', '#10B981'),
('55555555-5555-5555-5555-555555555555', 'r-and-d', 'R&D', 'Research and Development labs and innovation hubs.', '#8B5CF6')
ON CONFLICT ("code") DO NOTHING;

-- ============================================================
-- 2. SEED ALL TAGS
-- ============================================================
INSERT INTO "tags" ("id", "code", "display_name", "hex_color") VALUES
-- Languages & Core
('a1b2c3d4-e5f6-4074-9b2d-123456789abc', 'typescript', 'TypeScript', '#3178C6'),
('b2c3d4e5-f6a7-4185-ac3e-234567890bcd', 'nodejs', 'Node.js', '#339933'),
-- Backend & Database
('c3d4e5f6-a7b8-4296-bd4f-345678901cde', 'nestjs', 'NestJS', '#E0234E'),
('d4e5f6a7-b8c9-4307-ce5a-456789012def', 'postgresql', 'PostgreSQL', '#336791'),
('e5f6a7b8-c9d0-4418-df6b-567890123ef0', 'prisma', 'Prisma ORM', '#2D3748'),
('f6a7b8c9-d0e1-4529-e07c-678901234f01', 'redis', 'Redis', '#DC382D'),
-- Frontend & UI
('07b8c9d0-e1f2-4630-f18d-789012345012', 'react', 'React', '#61DAFB'),
('18c9d0e1-f2a3-4741-029e-890123456123', 'nextjs', 'Next.js', '#000000'),
('29d0e1f2-a3b4-4852-13af-901234567234', 'tailwind', 'Tailwind CSS', '#06B6D4'),
('3ae1f2a3-b4c5-4963-24b0-012345678345', 'framer-motion', 'Framer Motion', '#E902B5'),
('4bf2a3b4-c5d6-4a74-35c1-123456789456', 'tanstack', 'TanStack Query', '#FF4154'),
-- Infrastructure & DevOps
('5c03b4c5-d6e7-4b85-46d2-234567890567', 'docker', 'Docker', '#2496ED'),
('6d14c5d6-e7f8-4c96-57e3-345678901678', 'linux', 'Linux', '#FCC624'),
('7e25d6e7-f8a9-4da7-68f4-456789012789', 'nginx', 'Nginx', '#009639'),
('8f36e7f8-a9b0-4eb8-7905-567890123890', 'ci-cd', 'CI/CD Pipelines', '#4A90E2'),
-- Specialized & Tools
('9047f8a9-b0c1-4fc9-8a16-678901234901', 'tauri', 'Tauri', '#FFC131'),
('a158a9b0-c1d2-40da-9b27-789012345012', 'cybersecurity', 'Cybersecurity', '#EF4444'),
('b269b0c1-d2e3-41eb-ac38-890123456123', 'websocket', 'WebSockets', '#9333EA'),
('c37ac1d2-e3f4-42fc-bd49-901234567234', 'azure-ad', 'Azure AD', '#0078D4'),
-- Cloud & Deployment
('d48be1c2-f3a4-4b5c-9d6e-1234567890ab', 'vercel', 'Vercel', '#000000'),
('e59cf2d3-04b5-4c6d-ae7f-2345678901bc', 'cloudflare', 'Cloudflare', '#F38020'),
('f6ad03e4-15c6-4d7e-bf80-3456789012cd', 'firebase', 'Firebase', '#FFCA28'),
('07be14f5-26d7-4e8f-c091-4567890123de', 'ably', 'Ably', '#FF5416'),
-- Build Tools
('18cf2506-37e8-4f90-d1a2-5678901234ef', 'vite', 'Vite', '#646CFF'),
('29d03617-48f9-40a1-e2b3-6789012345f0', 'jest', 'Jest', '#C21325'),
('3ae14728-590a-41b2-f3c4-789012345601', 'git', 'Git', '#F05032'),
-- Design
('4bf25839-6a1b-42c3-04d5-890123456712', 'ant-design', 'Ant Design', '#1890FF'),
('5c03694a-7b2c-43d4-15e6-901234567823', 'figma', 'Figma', '#A259FF'),
('6d147a5b-8c3d-44e5-26f7-012345678934', 'shadcn-ui', 'shadcn/ui', '#000000'),
-- AI
('7e258b6c-9d4e-45f6-3708-123456789045', 'python', 'Python', '#3776AB'),
('8f369c7d-0e5f-4607-4819-234567890156', 'machine-learning', 'Machine Learning', '#F7931E'),
('9047ad8e-1f60-4718-592a-345678901267', 'tensorflow', 'TensorFlow', '#FF6F00'),
-- Concepts
('a158be9f-2071-4829-6a3b-456789012378', 'pwa', 'PWA', '#5A0FC8'),
('b269cf00-3182-493a-7b4c-567890123489', 'seo', 'SEO Optimization', '#8BC34A'),
('c37ad011-4293-4a4b-8c5d-678901234590', 'i18n', 'i18n (Internationalization)', '#4C51BF'),
('d48be122-53a4-4b5c-9d6e-789012345601', 'offline-first', 'Offline First', '#607D8B'),
-- New Tags (Using generated IDs to avoid collision with existing data)
('22222222-2222-2222-2222-222222222222', 'seo-tag', 'SEO', '#8BC34A'),
('33333333-3333-3333-3333-333333333333', 'green-energy', 'Green Energy', '#4CAF50'),
('44444444-4444-4444-4444-444444444444', 'quantum-safe', 'Quantum Safe', '#673AB7'),
('55555555-5555-5555-5555-555555555555', 'energy-storage', 'Energy Storage', '#FFEB3B'),
('66666666-6666-6666-6666-666666666666', 'open-source', 'Open Source', '#333333'),
('77777777-7777-7777-7777-777777777777', 'immersion-cooling', 'Immersion Cooling', '#03A9F4'),
('88888888-8888-8888-8888-888888888888', 'smart-grid', 'Smart Grid', '#009688'),
('99999999-9999-9999-9999-999999999999', 'rnd-tag', 'R&D', '#9C27B0'),
('aaaa1111-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'engineering', 'Engineering', '#607D8B'),
('bbbb2222-bbbb-bbbb-bbbb-bbbbbbbbbbbb', 'sustainable-tech', 'Sustainable Tech', '#8BC34A'),
('cccc3333-cccc-cccc-cccc-cccccccccccc', 'battery-innovation', 'Battery Innovation', '#FFC107')
ON CONFLICT ("code") DO NOTHING;

-- ============================================================
-- 3. SEED PROJECTS
-- ============================================================

-- 1. CSD Governance System
INSERT INTO "projects" (
    "id", "slug", "title", "role", "started_at", "ended_at", "client", "platform", "services", "description", "long_description", "challenge", "solution", "features", "thumbnail_url", "content", "updated_at"
) VALUES (
    '11111111-1111-1111-1111-111111111111',
    'csd-governance',
    'CSD Governance System',
    'Lead Developer',
    '2026-07-25',
    '2026-01-19',
    'Internal Tool',
    'Web & Desktop (Tauri)',
    ARRAY['Full Stack Dev', 'UI/UX Design'],
    'A comprehensive ERP solution designed to streamline HR management, centralized brand asset distribution, and automate internal workflows.',
    'The <strong>CSD Governance System</strong> was born out of a need to unify fragmented internal processes. <br/><br/> Previously, HR data, brand assets, and project files were scattered across different drives and spreadsheets. This system centralizes everything into a single, <em>role-based dashboard</em>.',
    'The main challenge was handling complex permission levels (<strong>RBAC</strong>) while ensuring the interface remained simple for non-technical staff. <br/> Additionally, real-time synchronization for the asset library was critical.',
    'We utilized <strong>NestJS</strong> for a robust backend architecture and <strong>TanStack Query</strong> on the frontend to manage server state efficiently.',
    'Role-Based Access Control (RBAC)
Real-time Notification System
Automated Payroll Calculation
Centralized Brand Asset Library',
    'https://res.cloudinary.com/dqx1guyc0/image/upload/v1768814466/Yangisdev/Projects/StaffCadsquad_exgcfc.png',
    '<div><h1>Project Showcase: Cadsquad Staff Platform</h1></div>', -- Simplified for brevity in this script
    NOW()
) ON CONFLICT ("slug") DO UPDATE SET "updated_at" = NOW();

-- 2. Cadsquad.vn Official
INSERT INTO "projects" ("id", "slug", "title", "description", "thumbnail_url", "deploy_url", "content", "updated_at") VALUES (
    '22222222-2222-2222-2222-222222222222',
    'cadsquad.vn',
    'Cadsquad.vn Official',
    'Service landing page for mechanical design and 3D digitization. Optimized for SEO, multi-language support, and high performance.',
    'https://res.cloudinary.com/dqx1guyc0/image/upload/v1768813487/Yangisdev/Projects/Cadsquad_ekxdr9.jpg',
    'https://www.cadsquad.vn',
    '',
    NOW()
) ON CONFLICT ("slug") DO NOTHING;

-- 3. BlobOff Cloud
INSERT INTO "projects" ("id", "slug", "title", "description", "thumbnail_url", "deploy_url", "content", "updated_at") VALUES (
    '33333333-3333-3333-3333-333333333333',
    'bloboff-cloud',
    'BlobOff Cloud',
    'A quantum-resistant personal data vault that remains offline by default ("Deep Sleep" architecture). Features on-demand activation via an independent control channel.',
    'https://res.cloudinary.com/dqx1guyc0/image/upload/v1768814302/Yangisdev/Projects/BlobOff_bigw3e.png',
    'https://bloboff.cloud/',
    '',
    NOW()
) ON CONFLICT ("slug") DO NOTHING;

-- 4. LoopXcell Energy
INSERT INTO "projects" ("id", "slug", "title", "description", "thumbnail_url", "deploy_url", "content", "updated_at") VALUES (
    '44444444-4444-4444-4444-444444444444',
    'loopxcell-energy',
    'LoopXcell Energy',
    'Sovereign energy storage system powered by open-source CerebroXmesh. Features immersion cooling for 100% fire safety and silent operation.',
    'https://res.cloudinary.com/dqx1guyc0/image/upload/v1768814345/Yangisdev/Projects/LoopXcell_yg2tkz.png',
    'https://loopxcell.energy/',
    '',
    NOW()
) ON CONFLICT ("slug") DO NOTHING;

-- 5. Amoovo Lab
INSERT INTO "projects" ("id", "slug", "title", "description", "thumbnail_url", "deploy_url", "content", "updated_at") VALUES (
    '55555555-5555-5555-5555-555555555555',
    'amoovo-lab',
    'Amoovo Lab',
    'An advanced R&D lab in Belgium focused on sustainable energy solutions and immersion cooling technologies. The parent hub behind LoopXcell.',
    'https://res.cloudinary.com/dqx1guyc0/image/upload/v1768814401/Yangisdev/Projects/Amoovo_ttbg3q.png',
    'https://www.amoovo.com/',
    '',
    NOW()
) ON CONFLICT ("slug") DO NOTHING;

-- ============================================================
-- 4. LINK PROJECTS TO CATEGORIES (Dynamic Lookups)
-- ============================================================
-- We match Project Slug -> Category Code to ensure correct IDs even if they exist already.

INSERT INTO "project_categories" ("project_id", "category_id")
SELECT p.id, c.id FROM "projects" p, "categories" c WHERE p.slug = 'csd-governance' AND c.code = 'system-arch'
UNION ALL
SELECT p.id, c.id FROM "projects" p, "categories" c WHERE p.slug = 'cadsquad.vn' AND c.code = 'landing-page'
UNION ALL
SELECT p.id, c.id FROM "projects" p, "categories" c WHERE p.slug = 'bloboff-cloud' AND c.code = 'cloud-sec'
UNION ALL
SELECT p.id, c.id FROM "projects" p, "categories" c WHERE p.slug = 'loopxcell-energy' AND c.code = 'green-tech'
UNION ALL
SELECT p.id, c.id FROM "projects" p, "categories" c WHERE p.slug = 'amoovo-lab' AND c.code = 'r-and-d'
ON CONFLICT ("project_id", "category_id") DO NOTHING;

-- ============================================================
-- 5. LINK PROJECTS TO TAGS (Dynamic Lookups)
-- ============================================================
-- We match Project Slug -> Tag Code to ensure correct IDs.

INSERT INTO "project_tags" ("project_id", "tag_id")
-- CSD Governance
SELECT p.id, t.id FROM "projects" p, "tags" t WHERE p.slug = 'csd-governance' AND t.code IN ('nextjs', 'nestjs', 'docker', 'tanstack', 'prisma', 'postgresql')
UNION ALL
-- Cadsquad.vn
SELECT p.id, t.id FROM "projects" p, "tags" t WHERE p.slug = 'cadsquad.vn' AND t.code IN ('nextjs', 'tailwind', 'framer-motion', 'seo', 'seo-tag') -- Look for both potentially
UNION ALL
-- BlobOff Cloud
SELECT p.id, t.id FROM "projects" p, "tags" t WHERE p.slug = 'bloboff-cloud' AND t.code IN ('cybersecurity', 'green-energy', 'quantum-safe', 'offline-first')
UNION ALL
-- LoopXcell Energy
SELECT p.id, t.id FROM "projects" p, "tags" t WHERE p.slug = 'loopxcell-energy' AND t.code IN ('energy-storage', 'open-source', 'immersion-cooling', 'smart-grid')
UNION ALL
-- Amoovo Lab
SELECT p.id, t.id FROM "projects" p, "tags" t WHERE p.slug = 'amoovo-lab' AND t.code IN ('rnd-tag', 'engineering', 'sustainable-tech', 'battery-innovation')
ON CONFLICT ("project_id", "tag_id") DO NOTHING;