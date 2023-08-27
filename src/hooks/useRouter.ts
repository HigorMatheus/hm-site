import {
  usePathname,
  // useParams,
  // useSearchParams,
  useRouter,
} from 'next/navigation'

export const useAppRouter = () => {
  const pathname = usePathname()
  // const params = useParams();
  // const searchParams = useSearchParams();
  const { push, back } = useRouter()
  return {
    pathname,
    push,
    back,
  }
}
