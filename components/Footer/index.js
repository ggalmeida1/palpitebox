import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className='bg-gray-700 p-4'>
            <div className='container mx-auto text-center font-bold text-white'>
                Projeto desenvolvido por: {' '}
                <a className='hover:underline' href=''>Gabriel Almeida</a> / {' '}
                <a className='hover:underline' href='https://www.linkedin.com/in/ggalmeida/'>LinkedIn </a> / {' '}
                <a className='hover:underline' href='https://github.com/ggalmeida1'> Github </a> {' '}
                <div className='mt-2'>
                    <img className='inline p-4' src='/logo_semana_fsm.png' />
                    <img className='inline p-4' src='/logo_devpleno.png' />
                </div>
            </div>
        </div>
    )
}

export default Footer
