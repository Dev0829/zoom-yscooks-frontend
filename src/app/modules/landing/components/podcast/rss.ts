export interface NewsRss {
    rss: IRssObject;
  }

export interface IRssObject {
    $: any;
    channel: Array<IRssChannel>;
  }

export interface IRssChannel {
    title: Array<string>;
    description: Array<string>;
    link: Array<string>;
    image: Array<IRssImage>;
    generator: Array<string>;
    lastBuildDate: Date;
    'atom:link': Array<string>;
    author: Array<string>;
    language: Array<string>;
    item: Array<IRssItem>;
  }

export interface IRssImage {
    link: Array<string>;
    title: Array<string>;
    url: Array<string>;
  }

export interface IRssItem {
    category: Array<string>;
    description: Array<string>;
    guid: any;
    link: Array<string>;
    pubDate: Date;
    title: Array<string>;
    'itunes:image': Array<string>;
    enclosure: Array<string>;
  }
