import React from 'react'
import qrCodeImg from '../assets/img/image-qr-code.png'

const QRCode = () => {
  return (
    <div className='w-[300px] p-6 rounded-3xl bg-white'>
        <img className='mb-6 rounded-2xl ' src={qrCodeImg} alt="qr code" />

        <div className='font-custom text-center'>
            <h2 className='mb-4 text-dark-blue text-xl font-bold'> Improve your front-end skills by building projects </h2>

            <p className='text-grayish-blue'> Scan the QR code to vist Frontend Mentor and take your coding skills to the next level </p>
        </div>
    </div>
  )
}

export default QRCode