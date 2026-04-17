
export interface Album {
  title: string;
  year?: string;
  link?: string;
  embedId?: string;
}

export interface Socials {
  instagram?: string;
  twitter?: string;
  spotify?: string;
  bandcamp?: string;
  youtube?: string;
}

export interface Artist {
  id: string;
  name: string;
  genre: string;
  bio: string;
  imageUrl: string;
  discography: Album[];
  socials: Socials;
}

export enum Page {
  Home = 'home',
  Artists = 'artists',
  Merch = 'merch',
  Contact = 'contact',
  Downloads = 'downloads',
  Privacy = 'privacy'
}