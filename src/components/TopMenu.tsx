import Image from "next/image"
import TopMenuItem from "./TopMenuItem"
import Link from "next/link"

export default function TopMenu() {
  return (
    <div className="bg-white py-2 shadow-md flex items-center justify-between">
      <div className="ml-auto flex items-center space-x-4">
        <TopMenuItem title='booking' pageRef='/booking' />
        <Link href="/" passHref>
          <Image
            src='/img/logo.png'
            alt="vsclogo"
            width={150}
            height={50}
          />
        </Link>
      </div>
    </div>

  )
}
