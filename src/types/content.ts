// Content type definitions
export interface SiteContent {
  name: string
  tagline: string
  description: string
  contact: {
    phone: string
    email: string
    address: string
  }
  founder: {
    name: string
    title: string
    bio: string
    photo: string
  }
  whyChooseUs: {
    title: string
    points: string[]
  }
}

export interface Service {
  id: string
  title: string
  description: string
}

export interface NewsItem {
  id: string
  title: string
  date: string
  excerpt: string
  link: string
}

export interface Testimonial {
  id: string
  name: string
  title: string
  content: string
  rating: number
}
