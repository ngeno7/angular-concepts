export interface Post {
    id: number,
    title: string,
    body: string,
    userId: number,
    tags: string[],
    reactions: number
}

export interface PostResponse {
    limit : number,
    posts : Post[],
    skip: number,
    total: number
}
