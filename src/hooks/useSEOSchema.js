import { useEffect } from 'react'

export const useSEOSchema = () => {
  useEffect(() => {
    // Person Schema for homepage
    const personSchema = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Zihadul Islam',
      url: 'https://zihadulislam.me',
      image: 'https://zihadulislam.me/og-image.png',
      jobTitle: 'Full-Stack Developer',
      sameAs: [
        'https://www.linkedin.com/in/zihadulislam',
        'https://github.com/zihadulislam',
        'https://twitter.com/ZihadulIslam',
      ],
      description:
        'Full-stack developer specializing in scalable web applications, modern UI/UX design, and cloud solutions.',
      contact: {
        '@type': 'ContactPoint',
        url: 'https://zihadulislam.me',
        email: 'contact@zihadulislam.me',
      },
      knowsAbout: [
        'React',
        'Node.js',
        'JavaScript',
        'TypeScript',
        'Azure',
        'Web Development',
        'UI/UX Design',
        'Full-Stack Development',
      ],
    }

    // Organization Schema
    const organizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zihadul Islam - Portfolio',
      url: 'https://zihadulislam.me',
      image: 'https://zihadulislam.me/og-image.png',
      description:
        'Full-stack developer portfolio showcasing scalable applications and modern design.',
      sameAs: [
        'https://www.linkedin.com/in/zihadulislam',
        'https://github.com/zihadulislam',
        'https://twitter.com/ZihadulIslam',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'contact@zihadulislam.me',
      },
    }

    // Website Schema with breadcrumbs
    const websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Zihadul Islam Portfolio',
      url: 'https://zihadulislam.me',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://zihadulislam.me?q={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    }

    // Create script element for Person schema
    const personScript = document.createElement('script')
    personScript.type = 'application/ld+json'
    personScript.text = JSON.stringify(personSchema)
    document.head.appendChild(personScript)

    // Create script element for Organization schema
    const orgScript = document.createElement('script')
    orgScript.type = 'application/ld+json'
    orgScript.text = JSON.stringify(organizationSchema)
    document.head.appendChild(orgScript)

    // Create script element for Website schema
    const websiteScript = document.createElement('script')
    websiteScript.type = 'application/ld+json'
    websiteScript.text = JSON.stringify(websiteSchema)
    document.head.appendChild(websiteScript)

    // Cleanup function (optional - remove old scripts if component unmounts)
    return () => {
      personScript.remove()
      orgScript.remove()
      websiteScript.remove()
    }
  }, [])
}

/**
 * ProjectSchema - Generates schema for individual projects
 * Call this in ProjectDetails.jsx
 */
export const useProjectSchema = (project) => {
  useEffect(() => {
    if (!project) return

    const projectSchema = {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: project.title,
      description: project.description,
      image: project.webImage,
      creator: {
        '@type': 'Person',
        name: 'Zihadul Islam',
        url: 'https://zihadulislam.me',
      },
      applicationCategory: 'WebApplication',
      url: `https://zihadulislam.me/projects/${encodeURIComponent(project.title)}`,
      featureList: project.features?.slice(0, 5).join(', ') || '',
      datePublished: '2026-05-16',
      offers:
        project.demoLinks?.map((link) => ({
          '@type': 'Offer',
          url: link,
          priceCurrency: 'USD',
          price: '0',
        })) || [],
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(projectSchema)
    document.head.appendChild(script)

    return () => {
      script.remove()
    }
  }, [project])
}
