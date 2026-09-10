
import { socialLinks } from "../../../../lib/constants"

const Topbar = () => {
  return (
    <div className="flex min-h-12 w-full items-center justify-between gap-x-3 bg-primary px-4 py-2 sm:px-6 lg:px-8">
        {/* Social links */}
        <div className="flex shrink-0 items-center gap-x-3 text-base transition-colors delay-150 *:cursor-pointer *:text-white *:hover:text-black sm:gap-x-4 sm:text-lg lg:gap-x-5 lg:text-xl">
            {socialLinks.map((link, name) => (
                <span key={name}>{link.icon}</span>
            ))}
        </div>
        {/* Phone */}
        <div className="min-w-0 text-right">
          <span className="font-roboto-Light text-xs uppercase text-white sm:text-sm lg:text-base">call: -12879434</span>
        </div>
    </div>
  )
}

export default Topbar