import { ButtonDemo } from '@/components/shared/buttons/primaryB'
import PrimaryHeader from '@/components/shared/primaryHeader'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <PrimaryHeader/>
    <ButtonDemo/>
    <div className="flex min-h-screen flex-col justify-between p-8">
        <h1>This is the home page</h1>
    </div>
    </>
  )
}
