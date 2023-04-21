import Link from "next/link";
import style from "./style.module.css"
import { Roboto } from "next/font/google"

const roboto = Roboto({
  subsets: ["latin"],
  weight: "900"
})

export default function LoginForm() {
  return (
    <div className={`${style.form_wrapper} ${roboto.className}`}>
      <div className={style.greetings}>
        <div className={style.image}>
          <img draggable={false} src="/ivread.png" alt="ivread" />
        </div>
        <h1>Hello there, Welcome!</h1>
        <span>Sign In to Continue</span>
      </div>
      <form spellCheck={false} className={style.form}>
        <div className={style.input_wrapper}>
          <input placeholder=" " type="text" />
          <label>Email Address</label>
        </div>
        <div className={style.input_wrapper}>
          <input placeholder=" " type="password" />
          <label>Password</label>
        </div>
        <div className={style.forgot_password}>
          <Link href="#">forgot password?</Link>
        </div>
        <div className={style.signin}>
          <input type="button" value="sign in" />
        </div>
      </form>
    </div>
  )
}
