import Link from "next/link"
import style from "./style.module.css"
import { House, User, Info } from "phosphor-react"
export default function Navbar() {
  return (
    <div className={style.navbar}>
      <div className={style.title}>
        <div className={style.image}>
          <img draggable={false} src="/ivread.png" alt="ivread" />
        </div>
        <span>iVREAD</span>
      </div>
      <ul className={style.links}>
        <li>
          <Link draggable={false} href="/">
            <span>Home</span>
            <House size={32} weight="fill" />
          </Link>
        </li>
        <li>
          <Link draggable={false} href="/about">
            <span>About</span>
            <Info size={32} weight="fill"/>
          </Link>
        </li>
        <li>
          <Link draggable={false} href="/login">
            <span>Login</span>
            <User size={32} weight="fill"/>
          </Link>
        </li>
      </ul>
    </div>
  )
}
