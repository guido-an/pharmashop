import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import Link from 'next/link'

const service = axios.create({
  baseURL: process.env.APP_API,
  withCredentials: true
})

const Private = () => {
  const [proceed, setProceed] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Create an scoped async function in the hook
    async function checkIfAdmin () {
      try {
        const res = await service.get('/admin/get-admin')
        if (res.data.admin) {
          setProceed(true)
        } else {
          router.push('/')
        }
      } catch (e) {
        console.log(e)
      }
    }
    // Execute the created function directly
    checkIfAdmin()
  }, [])

  if (!proceed) {
    return <p />
  }

  return (
    <div className='container'>
      <Link href='/admin/utenti' as="/admin/utenti">
        <p className='link-btn'> Lista utenti</p>
      </Link>
      <Link href='/admin/image-upload' as="/admin/image-upload">
        <p className='link-btn'> Image Upload</p>
      </Link>
      <style jsx>{`
        .body{
          justify-content: center;
        }
        .container {
          display: flex;
          justify-content: center;
          margin: 0 5v;
        }
        .titles{
          width: 245px;
          text-align: center;
          font-size: 20px;
          color: rgb(140, 43, 47);
        }
        .container {
          position: relative;
          top: 10px
        }
        .link-btn{
          border: 1px solid rgb(140, 43, 47);
          color: rgb(140, 43, 47);
          font-weight: 600;
          font-size: 12px;
          padding: 10px 25px;
          height: 40px;
          border-radius: 4px;
          letter-spacing: 0.8px;
          box-shadow: rgba(0, 0, 0, 0.3) 0px 4px 10px 0px;
          width: 200px;
          transition: all 0.3s ease 0s;
          margin-right: 20px;
        }
  ` }
      </style>

    </div>

  )
}

export default Private
