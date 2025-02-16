import { User } from "./user"

export interface RecentSearch {
    query: string
    data: User | null
} 

export interface StoredRecentSearch {
    list: RecentSearch[]
}