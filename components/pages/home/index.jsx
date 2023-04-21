import Navbar from "@/components/ui/navbar"
import style from "./style.module.css"
import { Roboto } from "next/font/google"

const roboto = Roboto({
  subsets: ['latin'],
  weight: "900"
})

export default function Home() {
  return (
    <div className={`${style.home} ${roboto.className}`}>
      <Navbar />
      <div className={style.title}>
        <div className={style.titlename}>
          <p>Interactive Virtual Reality for Early Amblyopia Detection</p>
        </div>
        <div className={style.image}>
          <img draggable={false} src="/ivread.png" alt="ivread" />
        </div>
      </div>
    </div>
  )
}
