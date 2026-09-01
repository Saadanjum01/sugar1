/**
 * The brand name set the way the logo sets it: all lowercase, "first colony"
 * in regular weight and "vision" bold. Use for standalone brand marks (chat
 * header, footer credit); leave the name as normal sentence-case text when it
 * appears inside running prose.
 *
 * color defaults to the brand teal -- pass a Tailwind text class (e.g.
 * "text-white") when placing it on a dark background.
 */
export default function Wordmark({ className = '', color = 'text-[#0D5D62]' }) {
  return (
    <span className={`font-display lowercase tracking-[-0.01em] ${color} ${className}`}>
      first colony <span className="font-bold">vision</span>
    </span>
  )
}
