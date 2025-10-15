export type EmojiItem = {
  /**
   * A unique name of the emoji which will be stored as attribute
   */
  name: string;
  /**
   * The emoji unicode character
   */
  emoji?: string;
  /**
   * A list of unique shortcodes that are used by input rules to find the emoji
   */
  shortcodes: string[];
  /**
   * A list of tags that can help for searching emojis
   */
  tags?: string[];
  /**
   * A name that can help to group emojis
   */
  group?: string;
  /**
   * A list of unique emoticons
   */
  emoticons?: string[];
  /**
   * The unicode version the emoji was introduced
   */
  version?: number;

  // TODO: Don't store full URLs, store identifiers...
  // /**
  //  * A fallback image if the current system doesn't support the emoji or for custom emojis
  //  */
  // fallbackImage?: string;

  /**
   * Store some custom data
   */
  [key: string]: any;
};
