export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-[#e5e7eb] bg-white">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <p className="text-[#9ca3af] text-sm">
          © 2026 이나은. Built with React + Vite + Tailwind CSS.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/NAPP4287"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#9ca3af] hover:text-[#FA2256] transition-colors text-sm"
          >
            GitHub
          </a>
          <a
            href="https://www.notion.so/s-ce038d21a206441e827e48dd4e3668bd?source=copy_link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#9ca3af] hover:text-[#FA2256] transition-colors text-sm"
          >
            개발 일지
          </a>
          <a
            href="mailto:nanni4287@gmail.com"
            className="text-[#9ca3af] hover:text-[#FA2256] transition-colors text-sm"
          >
            nanni4287@gmail.com
          </a>
        </div>
      </div>
    </footer>
  )
}
