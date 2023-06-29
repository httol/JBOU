import { useRouter } from "next/router"

export default function Wechat() {
  const router = useRouter()
  const { code } = router.query;
  return <>
    {code}
  </>
}