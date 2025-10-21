// Info for pagination
export interface InfoProps {
  count: number
  pages: number
  next: number | null
  prev: number | null
}

// A single episode
export interface EpisodeProps {
  id: number
  name: string
  air_date: string
  episode: string
}

// The response shape from the query
export interface EpisodesData {
  episodes: {
    info: InfoProps
    results: EpisodeProps[]
  }
}

// Props used by your EpisodeCard component
export type EpisodeCardProps = Pick<EpisodeProps, 'id' | 'name' | 'air_date' | 'episode'>
