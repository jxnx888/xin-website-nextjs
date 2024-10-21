export const formatHrefWithAnchor = (link: string, anchor?: string) => (anchor && anchor.startsWith('#') ? `${link}${anchor}` : link);
