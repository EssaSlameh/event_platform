import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href='/'>
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={128}
            height={38}
          />
        </Link>
        <p>
          Contact Us
          123 Event Street, Suite 456
          Event City, EC 78910
          Phone: (123) 456-7890
          Email: support@eventify.com
        </p>
        <p>2023 Evently. All Rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer