import { useSession } from "next-auth/react"
import Link from 'next/link';

export default function MePage() {
  const { data } = useSession()

  return (
    <div className="center mt">

      <div className="flex">
        <h3>Session</h3>

        <div>
        <Link href='/api/auth/signout'>
          <a className='link'>
            Signout
          </a>
        </Link>
      </div>

      </div>
     
      <div className="code">
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>

    </div>
  )
}