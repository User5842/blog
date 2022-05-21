/**
 * Represents a single Post.
 */
export interface IPost {
  /**
   * The date the Post was published.
   */
  readonly date: string;

  /**
   * The Post content.
   */
  readonly post: string;
}
