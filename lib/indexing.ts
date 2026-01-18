import { GoogleAuth } from 'google-auth-library'

const INDEXING_API_ENDPOINT = 'https://indexing.googleapis.com/v3/urlNotifications:publish'

export interface IndexingResult {
    url: string
    success: boolean
    error?: string
}

/**
 * Submit URLs to Google Indexing API
 * @param urls - Array of URLs to submit
 * @returns Array of results with success status for each URL
 */
export async function submitUrlsToGoogle(urls: string[]): Promise<IndexingResult[]> {
    try {
        // Initialize Google Auth with service account credentials
        const serviceAccountJson = process.env.GOOGLE_SERVICE_ACCOUNT_JSON

        if (!serviceAccountJson) {
            throw new Error('GOOGLE_SERVICE_ACCOUNT_JSON environment variable not set')
        }

        const credentials = JSON.parse(serviceAccountJson)

        const auth = new GoogleAuth({
            credentials,
            scopes: ['https://www.googleapis.com/auth/indexing'],
        })

        const client = await auth.getClient()
        const accessToken = await client.getAccessToken()

        if (!accessToken.token) {
            throw new Error('Failed to obtain access token')
        }

        // Submit each URL to Google Indexing API
        const results: IndexingResult[] = []

        for (const url of urls) {
            try {
                const response = await fetch(INDEXING_API_ENDPOINT, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${accessToken.token}`,
                    },
                    body: JSON.stringify({
                        url,
                        type: 'URL_UPDATED',
                    }),
                })

                if (!response.ok) {
                    const errorText = await response.text()
                    throw new Error(`HTTP ${response.status}: ${errorText}`)
                }

                results.push({
                    url,
                    success: true,
                })

                console.log(`✅ Indexed: ${url}`)
            } catch (error) {
                const errorMessage = error instanceof Error ? error.message : 'Unknown error'
                results.push({
                    url,
                    success: false,
                    error: errorMessage,
                })

                console.error(`❌ Failed to index ${url}:`, errorMessage)
            }
        }

        return results
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error'
        console.error('Google Indexing API error:', errorMessage)
        throw error
    }
}

/**
 * Submit a single URL to Google Indexing API
 * @param url - URL to submit
 * @returns Success status
 */
export async function submitUrlToGoogle(url: string): Promise<boolean> {
    const results = await submitUrlsToGoogle([url])
    return results[0]?.success || false
}
