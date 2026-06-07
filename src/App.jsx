import { useEffect, useState } from 'react'
import { ArrowUpRight, Ellipsis, X as XIcon } from 'lucide-react'
import './App.css'

const assets = {
  portrait:
    './Image1.png',
  starA:
    'https://framerusercontent.com/images/lIIjRX5gxRdY7UWw5wqIXicPOA.png?scale-down-to=512&width=2550&height=2550',
  starB:
    'https://framerusercontent.com/images/OLDYsHB9RMavvQrkVRNy08ZXYE.png?scale-down-to=512&width=2550&height=2550',
  projects: [
    'https://framerusercontent.com/images/VNXQLcPHw9VbVzy6BDpZ8pUsaU.png?scale-down-to=1024&width=1160&height=800',
    'https://framerusercontent.com/images/WgEHVRrQs62rgxlzrnXJJ8rr4.png?scale-down-to=1024&width=1160&height=800',
    'https://framerusercontent.com/images/I3azeVtkvdKBGl9TX38tUdXEb0.png?scale-down-to=1024&width=1160&height=800',
    'https://framerusercontent.com/images/e3DxUGJWqt7CIVVQIA0VZoy09FQ.png?scale-down-to=1024&width=1160&height=800',
  ],
  avatars: [
    '/indian_testimonial_2.png',
    '/indian_testimonial_2.png',
    '/indian_testimonial_2.png',
    'https://framerusercontent.com/images/HH8KrojyxZx6X20z1r13CSwiiWE.jpg?scale-down-to=512&width=3648&height=3648',
  ],
  thoughts: [
    'https://framerusercontent.com/images/lxtBXj3G7Bloek83WxPY1ZUuw0Q.png?scale-down-to=512&width=640&height=360',
    'https://framerusercontent.com/images/ic9k42rYytbJtnRUJXdcNxCHSc.png?scale-down-to=512&width=640&height=359',
  ],
}

const menuLinks = [
  ['About Me', '#about'],
  ['Services', '#services'],
  ['Projects', '#works'],
  ['Contact', '#contact'],
]

const services = [
  {
    name: 'Android Development',
    tags: ['Java / Kotlin', 'TensorFlow Lite', 'Play Store Launch'],
  },
  {
    name: 'AI & ML Engineering',
    tags: ['Python', 'Computer Vision', 'Model Integration'],
  },
  {
    name: 'Backend Development',
    tags: ['Node.js', 'Firebase', 'REST APIs'],
  },
  {
    name: 'Web Development',
    tags: ['React', 'JavaScript', 'Responsive UI'],
  },
]

const projects = [
  ['Damas', 'Agency template'],
  ['Najm', 'SaaS template'],
  ['Kavi', 'AI template'],
  ['Sham', 'Studio template'],
]

const testimonials = [
  {
    quote:
      "Farhan completely changed how I approach building sites online. The templates are not just beautiful, they're actually structured in a way that makes scaling so much easier.",
    name: 'Rahul Sharma',
    role: 'Marketing Director',
  },
  {
    quote:
      "I've tried dozens of templates, but Farhan stands out. Everything feels intentional, from the layout to the smallest interactions.",
    name: 'Amit Patel',
    role: 'Indie Maker',
  },
  {
    quote:
      'Farhan saved me weeks of work. I was able to launch my landing page in a day, and it still looks fully custom.',
    name: 'Vikram Singh',
    role: 'Startup Founder',
  },
  {
    quote:
      'The quality is insane. Clean structure, smooth animations, and super easy to customize. It feels like a premium product from start to finish.',
    name: 'Omar H.',
    role: 'Frontend Developer',
  },
]

const thoughts = [
  {
    date: 'May 5, 2025',
    title: 'Building Trust Through Clear Design',
    description:
      'How thoughtful visual choices create a stronger sense of reliability for modern brands.',
  },
  {
    date: 'Jun 16, 2025',
    title: 'The Role of Art Direction in Branding',
    description:
      'Why visual direction helps brands create emotion and a distinct point of view.',
  },
]

const socialLinks = [
  ['X', 'https://x.com/', 'X'],
  ['Instagram', 'https://www.instagram.com/', 'IG'],
  ['LinkedIn', 'https://www.linkedin.com/', 'in'],
  ['YouTube', 'https://www.youtube.com/', 'YT'],
]

const footerLinks = [
  ['Home', '#home'],
  ['About Me', '#about'],
  ['Services', '#services'],
  ['Works', '#works'],
  ['Contact', '#contact'],
]

const manifestoText =
  'From idea to launch. Clean, scalable digital products built to move fast, stay simple, and perform in real-world use, driven by clarity, structured systems, and intentional design.'

function clamp(value, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value))
}

function useRevealMotion() {
  useEffect(() => {
    const revealItems = document.querySelectorAll('[data-reveal]')

    if (!('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -12% 0px',
      },
    )

    revealItems.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])
}

function useScrollEffects() {
  useEffect(() => {
    const glowSections = [...document.querySelectorAll('[data-scroll-glow]')]
    const redFrames = [...document.querySelectorAll('[data-scroll-red]')]

    if (!glowSections.length && !redFrames.length) {
      return undefined
    }

    let ticking = false

    function update() {
      const viewport = window.innerHeight || 1

      glowSections.forEach((section) => {
        const words = [...section.querySelectorAll('.glow-word')]
        const rect = section.getBoundingClientRect()
        const progress = clamp((viewport * 0.68 - rect.top) / (rect.height + viewport * 0.2))

        section.style.setProperty('--glow-progress', progress.toFixed(3))

        words.forEach((word, index) => {
          const threshold = words.length > 1 ? index / (words.length - 1) : 0
          const amount = clamp((progress - threshold + 0.12) / 0.2)

          word.style.opacity = (0.18 + amount * 0.82).toFixed(3)
          word.style.filter = `blur(${((1 - amount) * 5).toFixed(2)}px)`
          word.style.color = amount > 0.74 ? '#111111' : '#d4d0ca'
        })
      })

      redFrames.forEach((frame) => {
        const rect = frame.getBoundingClientRect()
        const progress = clamp((viewport * 0.82 - rect.top) / (viewport * 0.56))

        frame.style.setProperty('--red-opacity', (0.52 + progress * 0.48).toFixed(3))
        frame.style.setProperty('--red-blur', `${((1 - progress) * 6).toFixed(2)}px`)
        frame.style.setProperty('--red-y', `${((1 - progress) * 42).toFixed(2)}px`)
        frame.style.setProperty('--red-rotate', `${(-5 + progress * 2.6).toFixed(2)}deg`)
        frame.style.setProperty('--red-scale', (0.93 + progress * 0.07).toFixed(3))
      })

      ticking = false
    }

    function requestUpdate() {
      if (!ticking) {
        ticking = true
        window.requestAnimationFrame(update)
      }
    }

    update()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)

    return () => {
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
    }
  }, [])
}

function Preloader() {
  return (
    <div className="preloader-stage" aria-hidden="true">
      <p>
        <span>Software</span>
        <span>Engineer</span>
      </p>
    </div>
  )
}

function RollingText({ label }) {
  return (
    <span className="rolling-text" aria-hidden="true">
      <span>{label}</span>
      <span>{label}</span>
    </span>
  )
}

function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav
      className={`site-nav ${isOpen ? 'is-open' : ''}`}
      aria-label="Primary navigation"
    >
      <a
        href="#home"
        className="brand rolling-link"
        aria-label="Farhan home"
        onClick={() => setIsOpen(false)}
      >
        <RollingText label="Farhan" />
      </a>
      <button
        className="menu-button"
        type="button"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        {isOpen ? <XIcon size={22} strokeWidth={3} /> : <Ellipsis size={26} strokeWidth={3} />}
      </button>
      <div className="nav-links" aria-hidden={!isOpen}>
        {menuLinks.map(([label, href], index) => (
          <a
            className="nav-pill rolling-link"
            href={href}
            key={label}
            style={{ '--delay': `${120 + index * 70}ms` }}
            aria-label={label}
            onClick={() => setIsOpen(false)}
          >
            <RollingText label={label} />
          </a>
        ))}
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section id="home" className="hero-section section-shell" aria-label="Software Engineer">
      <img className="hero-star hero-star-left" src={assets.starA} alt="" />
      <img className="hero-star hero-star-right" src={assets.starB} alt="" />
      <h1 className="hero-copy">
        <span>Software</span>
        <span>Engineer</span>
      </h1>
      <img
        className="hero-portrait"
        src={assets.portrait}
        width="400"
        height="536"
        alt="Portrait of Farhan"
      />
      <p className="hero-year">&copy;2026</p>
      <p className="hero-since">/CREATING SINCE 2020</p>
    </section>
  )
}

function Intro() {
  return (
    <section id="about" className="intro-section section-shell" data-reveal>
      <h2>Hey!</h2>
      <p className="intro-lead">
        I&apos;m Farhan, a developer based in India, currently working as a freelancer and building innovative digital solutions, software products, and modern technology experiences for clients worldwide.
      </p>
      <span className="intro-image-frame" data-scroll-red>
        <img
          className="intro-image"
          src={assets.portrait}
          width="400"
          height="536"
          alt="Portrait of Farhan with red lighting"
        />
      </span>
      <div className="intro-body">
        <p>
          I&apos;m a software engineer and creator with a strong focus on
          building modern, scalable, and conversion-driven web experiences.
        </p>
        <p>
          Over the past year, I've built and shipped multiple production apps, Website and Software used by real users — helping them communicate, work, and launch faster.
        </p>
        <a href="#contact" className="text-link rolling-link" aria-label="Get Started">
          <RollingText label="Get Started" />
          <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  )
}

function Manifesto() {
  const words = manifestoText.split(' ')

  return (
    <section className="manifesto-section section-shell" data-reveal data-scroll-glow>
      <p className="manifesto-glow">
        {words.map((word, index) => (
          <span className="glow-word" key={`${word}-${index}`}>
            {word}
          </span>
        ))}
      </p>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="services-section section-shell" data-reveal>
      <h2>Services</h2>
      <div className="service-list">
        {services.map((service, index) => (
          <article
            className="service-row"
            key={service.name}
            data-reveal
            style={{ '--delay': `${index * 70}ms` }}
          >
            <h3>{service.name}</h3>
            <p>
              {service.tags.map((tag, tagIndex) => (
                <span key={tag}>
                  {tag}
                  {tagIndex < service.tags.length - 1 && <b aria-hidden="true">/</b>}
                </span>
              ))}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="works" className="projects-section section-shell" data-reveal>
      <div className="section-heading-row">
        <h2>
          Featured
          <br />
          Projects
        </h2>
        <a href="#works" className="text-link rolling-link" aria-label="View All Work">
          <RollingText label="View All Work" />
          <ArrowUpRight size={18} />
        </a>
      </div>
      <div className="project-grid">
        {projects.map(([name, type], index) => (
          <a
            className="project-card"
            href="#works"
            key={name}
            data-reveal
            style={{ '--delay': `${index * 80}ms` }}
          >
            <span className="project-image">
              <img src={assets.projects[index]} alt={`${name} project preview`} />
            </span>
            <h3>{name}</h3>
            <p>{type}</p>
          </a>
        ))}
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="testimonials-section section-shell" data-reveal>
      <h2>Testimonials</h2>
      <div className="testimonial-grid">
        {testimonials.map((testimonial, index) => (
          <article
            className="testimonial-card"
            key={testimonial.name}
            data-reveal
            style={{ '--delay': `${index * 120}ms` }}
          >
            <p>{testimonial.quote}</p>
            <div>
              <img
                src={assets.avatars[index]}
                width="50"
                height="50"
                alt={`${testimonial.name} portrait`}
              />
              <span>
                <strong>{testimonial.name}</strong>
                <small>{testimonial.role}</small>
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Thoughts() {
  return (
    <section className="thoughts-section section-shell" data-reveal>
      <h2>Thoughts</h2>
      <div className="thought-grid">
        {thoughts.map((thought, index) => (
          <article
            className="thought-card image-card"
            style={{
              '--image': `url(${assets.thoughts[index]})`,
              '--delay': `${index * 90}ms`,
            }}
            key={thought.title}
            data-reveal
          >
            <span>{thought.date}</span>
            <h3>{thought.title}</h3>
            <p>{thought.description}</p>
          </article>
        ))}
        <article className="thought-card blog-card" data-reveal style={{ '--delay': '180ms' }}>
          <h3>
            See how we shape brands with clarity and craft&mdash; explore our
            blog
          </h3>
          <a href="#works" className="text-link invert rolling-link" aria-label="View All Work">
            <RollingText label="View All Work" />
            <ArrowUpRight size={18} />
          </a>
        </article>
      </div>
    </section>
  )
}

function Contact() {
  function handleSubmit(event) {
    event.preventDefault()
    event.currentTarget.reset()
  }

  return (
    <section id="contact" className="contact-section section-shell" data-reveal>
      <div className="contact-copy">
        <h2>Let&apos;s talk.</h2>
        <p>
          Have a project or need help? Fill out the form, and we&apos;ll get
          back to you soon.
        </p>
        <div className="social-links" aria-label="Social links">
          {socialLinks.map(([label, href, mark]) => (
            <a href={href} target="_blank" rel="noreferrer" aria-label={label} key={label}>
              <span>{mark}</span>
            </a>
          ))}
        </div>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" name="name" placeholder="Enter your name" required />
        </label>
        <label>
          Email
          <input type="email" name="email" placeholder="Enter your email" required />
        </label>
        <label>
          Your Project
          <textarea name="project" placeholder="Tell us about your project" rows="5" required />
        </label>
        <button type="submit" className="rolling-link" aria-label="Submit">
          <RollingText label="Submit" />
        </button>
      </form>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <h2>
            Scaling
            <br />
            Start-ups
            <br />
            for Growth.
          </h2>
        </div>
        <nav aria-label="Footer navigation">
          <h3>/Quick links</h3>
          <div className="footer-links">
            {footerLinks.map(([label, href]) => (
              <a className="rolling-link" href={href} key={label} aria-label={label}>
                <RollingText label={label} />
              </a>
            ))}
          </div>
        </nav>
        <div>
          <h3>/Contact</h3>
          <a href="mailto:Farhan@Farhan.io">Farhan@Farhan.io</a>
        </div>
        <p className="footer-mark">FARHAN</p>
      </div>
    </footer>
  )
}

function App() {
  useRevealMotion()
  useScrollEffects()

  return (
    <>
      <Preloader />
      <NavBar />
      <main>
        <Hero />
        <Intro />
        <Manifesto />
        <Services />
        <Projects />
        <Testimonials />
        <Thoughts />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
