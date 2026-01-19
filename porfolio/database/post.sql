INSERT INTO authors (id, name, role, avatar_url, bio)
VALUES ('auth_01', 'Duong', 'Founder & Lead Developer', 'https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-1/555080906_1499544144414414_7130411806364502655_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e99d92&_nc_ohc=bGe4XOSy74wQ7kNvwEVLjag&_nc_oc=AdnXeNnWKpUpXM9su_a32r-xvRYIggVxr4xwR_w63VADP0OhQmVaQpiy_i3uzDnk3dM&_nc_zt=24&_nc_ht=scontent.fsgn5-10.fna&_nc_gid=7cMK7PsIfAqUhprVO-Mx0A&oh=00_AfprHQg9oor5UIq7TAjk5qSb2riDLBddU9KmpwED75lZrg&oe=697453A9', 'Full-stack developer passionate about performance and clean code.') ON CONFLICT (id) DO NOTHING;
-- 2. SEED TAGS (Fix: Added gen_random_uuid())
INSERT INTO tags (id, code, display_name, hex_color)
VALUES
    (gen_random_uuid(), 'nextjs',      'Next.js',      '#000000'),
    (gen_random_uuid(), 'cloudflare',  'Cloudflare',   '#f38020'),
    (gen_random_uuid(), 'seo',         'SEO',          '#5e35b1'),
    (gen_random_uuid(), 'performance', 'Performance',  '#d81b60'),
    (gen_random_uuid(), 'docker',      'Docker',       '#0db7ed'),
    (gen_random_uuid(), 'devops',      'DevOps',       '#007acc'),
    (gen_random_uuid(), 'tutorial',    'Tutorial',     '#4caf50'),
    (gen_random_uuid(), 'webdev',      'Web Development', '#2196f3')
ON CONFLICT (code) DO NOTHING;

-- 3. SEED POSTS (Fix: Added gen_random_uuid())
INSERT INTO posts (
    id, slug, title, excerpt, content, thumbnail_url,
    published_at, is_published, reading_time, featured, author_id, updated_at
) VALUES
(
    gen_random_uuid(),
    'introducing-cadsquad',
    'Introducing Cadsquad – Building Digital Momentum',
    'A small team in Ho Chi Minh City creating ultra-fast, secure websites that drive real business growth.',
    '<h2>The Vision</h2><p>In Saigon’s vibrant streets, Cadsquad was born from one belief: every business deserves a digital home that loads instantly, ranks high, and converts visitors into clients.</p><h3>Our Stack</h3><ul><li>Next.js for speed</li><li>Cloudflare for security</li><li>Strategic SEO for visibility</li></ul><p>Momentum you can measure.</p>',
    'https://cadsquad.vn/thumbs/intro.jpg',
    '2026-01-01 09:00:00+07', true, '4 min', true, 'auth_01', NOW()
),
(
    gen_random_uuid(),
    'how-docker-works-2026',
    'How Docker Works: Clear Explanation for Developers in 2026',
    'Containers package your app + everything it needs — portable, lightweight, and identical everywhere.',
    '<h2>Core Flow</h2><p>Docker CLI → dockerd → containerd → runc → Linux kernel (namespaces + cgroups + overlayfs).</p><p>No hypervisor = near-native speed.</p><h3>Modern Best Practices</h3><p>Use multi-stage builds and distroless base images for production.</p>',
    'https://cadsquad.vn/thumbs/docker.jpg',
    '2026-01-20 10:00:00+07', true, '7 min', true, 'auth_01', NOW()
),
(
    gen_random_uuid(),
    'cloudflare-2026-every-site-needs-it',
    'Cloudflare in 2026: Why Every Serious Website Needs It',
    'DDoS shield, global CDN, WAF, bot protection — free tier beats most paid solutions.',
    '<h2>Why we use it</h2><p>For BlobOff.cloud we used Cloudflare to prove “impenetrable” — site speed became a trust signal.</p><ul><li>300+ PoPs</li><li>Polish image optimization</li><li>Zero Trust ready</li></ul>',
    'https://cadsquad.vn/thumbs/cloudflare.jpg',
    '2026-02-05 09:30:00+07', true, '5 min', true, 'auth_01', NOW()
),
(
    gen_random_uuid(),
    'core-web-vitals-2026-what-changed',
    'Core Web Vitals 2026: What Actually Changed',
    'INP replaced FID. Speed and interactivity still rule rankings.',
    '<h2>New Thresholds</h2><p>Good thresholds: LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1</p><h3>Tactics</h3><p>Next.js Image, font subsetting, server actions, and skeleton loaders.</p>',
    'https://cadsquad.vn/thumbs/vitals.jpg',
    '2026-02-10 14:00:00+07', true, '6 min', false, 'auth_01', NOW()
),
(
    gen_random_uuid(),
    'nextjs-app-router-best-practices-2026',
    'Next.js App Router Best Practices in 2026',
    'Server Components, Streaming, Parallel Routes — how we build production apps.',
    '<h2>Architecture</h2><p>Use Route Groups, Suspense, and server actions by default. Utilize the Metadata API for perfect OG images dynamically.</p>',
    'https://cadsquad.vn/thumbs/app-router.jpg',
    '2026-02-15 10:45:00+07', true, '7 min', true, 'auth_01', NOW()
),
(
    gen_random_uuid(),
    'building-minimal-docker-images-2026',
    'Building Minimal Docker Images in 2026',
    'Distroless, slim, alpine — smaller = faster, safer, cheaper.',
    '<h2>Multi-stage Example</h2><pre><code>FROM node:20-alpine AS builder \nFROM gcr.io/distroless/static-debian12</code></pre><p>Result: ~80MB vs 800MB naive image.</p>',
    'https://cadsquad.vn/thumbs/minimal-docker.jpg',
    '2026-02-20 11:00:00+07', true, '5 min', false, 'auth_01', NOW()
),
(
    gen_random_uuid(),
    'seo-technical-websites-2026',
    'SEO for Technical Websites in 2026',
    'Topical clusters, schema, E-E-A-T — how we rank niche B2B terms.',
    '<h2>Strategy</h2><p>Pillar + clusters + Product/FAQ schema = rich results + higher CTR.</p><p>Worked for “immersion cooled battery” → page 1 in weeks.</p>',
    'https://cadsquad.vn/thumbs/seo-technical.jpg',
    '2026-02-25 13:30:00+07', true, '8 min', true, 'auth_01', NOW()
),
(
    gen_random_uuid(),
    'free-website-audit-2026',
    'Free Website Performance + SEO Audit (2026 Edition)',
    'Core Web Vitals, security headers, SEO gaps — 6-page report, no strings.',
    '<h2>Get yours</h2><p>Limited to 10/month. Reply “AUDIT” + URL to ch.duong@cadsquad.vn</p>',
    'https://cadsquad.vn/thumbs/audit.jpg',
    '2026-03-01 09:00:00+07', true, '3 min', true, 'auth_01', NOW()
),
(
    gen_random_uuid(),
    'why-nextjs-over-wordpress-2026',
    'Next.js vs WordPress in 2026 – Honest Comparison',
    'Speed, SEO, security, scalability — when to choose what.',
    '<h2>Comparison</h2><p>Factor: <strong>Speed</strong> | Next.js: ★★★★★ | WordPress: ★★☆☆☆</p><p>Factor: <strong>SEO Control</strong> | Next.js: ★★★★★ | WordPress: ★★★★☆</p>',
    'https://cadsquad.vn/thumbs/comparison.jpg',
    '2026-03-05 11:15:00+07', true, '6 min', false, 'auth_01', NOW()
),
(
    gen_random_uuid(),
    'web-trends-2026-what-were-betting-on',
    'Web Development Trends We’re Betting On in 2026',
    'Edge functions, AI-assisted code, motion UI, privacy-first design.',
    '<h2>The Future</h2><p>Less client JS, more server actions, WebGPU demos, and container-native deploys.</p>',
    'https://cadsquad.vn/thumbs/trends-2026.jpg',
    '2026-03-10 10:00:00+07', true, '5 min', false, 'auth_01', NOW()
)
ON CONFLICT (slug) DO NOTHING;


-- 4. LINK TAGS TO POSTS (Prisma Implicit Junction Table)
-- We use subqueries here so we don't need to know the random UUIDs generated above.
INSERT INTO "_PostToTag" ("A", "B")
SELECT p.id, t.id FROM posts p, tags t
WHERE 
    (p.slug = 'introducing-cadsquad' AND t.code IN ('nextjs', 'cloudflare', 'webdev')) OR
    (p.slug = 'how-docker-works-2026' AND t.code IN ('docker', 'devops', 'tutorial')) OR
    (p.slug = 'cloudflare-2026-every-site-needs-it' AND t.code IN ('cloudflare', 'seo', 'performance')) OR
    (p.slug = 'core-web-vitals-2026-what-changed' AND t.code IN ('seo', 'performance', 'webdev')) OR
    (p.slug = 'nextjs-app-router-best-practices-2026' AND t.code IN ('nextjs', 'tutorial', 'webdev')) OR
    (p.slug = 'building-minimal-docker-images-2026' AND t.code IN ('docker', 'devops', 'performance')) OR
    (p.slug = 'seo-technical-websites-2026' AND t.code IN ('seo', 'webdev')) OR
    (p.slug = 'why-nextjs-over-wordpress-2026' AND t.code IN ('nextjs', 'seo', 'webdev')) OR
    (p.slug = 'web-trends-2026-what-were-betting-on' AND t.code IN ('webdev', 'nextjs'))
ON CONFLICT DO NOTHING;