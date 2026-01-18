import fs from "fs"
import path from "path"
import matter from "gray-matter"

type Metadata = {
    title: string
    publishedAt: string
    summary: string
    author?: string
    image?: string
}

function getMDXFiles(dir: string) {
    return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx")
}

function readMDXFile(filePath: string) {
    const rawContent = fs.readFileSync(filePath, "utf-8")
    return matter(rawContent)
}

function getMDXData(dir: string) {
    const mdxFiles = getMDXFiles(dir)
    return mdxFiles.map((file) => {
        const { data, content } = readMDXFile(path.join(dir, file))
        const slug = path.basename(file, path.extname(file))

        return {
            metadata: data as Metadata,
            slug,
            content,
        }
    })
}

export function getBlogPosts() {
    const allPosts = getMDXData(path.join(process.cwd(), "content"))
    const today = new Date().toISOString().split('T')[0] // YYYY-MM-DD format

    // Filter: only include posts where publishedAt <= today
    // Sort: newest first (reverse chronological order)
    return allPosts
        .filter(post => post.metadata.publishedAt <= today)
        .sort((a, b) => b.metadata.publishedAt.localeCompare(a.metadata.publishedAt))
}

