import siteContent from '../../content/site.json'
import services from '../../content/services.json'
import news from '../../content/news.json'
import testimonials from '../../content/testimonials.json'
import { SiteContent, Service, NewsItem, Testimonial } from '../types/content'

export const getSiteContent = (): SiteContent => siteContent as SiteContent
export const getServices = (): Service[] => services as Service[]
export const getNews = (): NewsItem[] => news as NewsItem[]
export const getTestimonials = (): Testimonial[] => testimonials as Testimonial[]
