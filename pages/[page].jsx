import { useRouter } from "next/router"

export default function Page() {
  const router = useRouter()
  const { page } = router.query
  return (
    <h1>{page} page</h1>
  )
}
