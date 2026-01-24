import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/om-oss')({ component: OmOssPage })

function OmOssPage() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--burgundy)', marginBottom: '1rem' }}>
        Om oss
      </h1>
      <p style={{ color: 'var(--text-soft)', fontSize: '1.1rem' }}>
        Innhold kommer snart...
      </p>
    </div>
  )
}
