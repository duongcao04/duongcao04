import type { CrawlParams } from '@mendable/firecrawl-js'
import FirecrawlApp from '@mendable/firecrawl-js'

export class App {
    constructor(
        private readonly app = new FirecrawlApp({
            apiKey: String(process.env.FIRECRAWL_API_KEY),
        })
    ) {}

    async scrapeUrl(url: string, options?: CrawlParams) {
        const result = await this.app.scrapeUrl(url, options)
        return result
    }
}
