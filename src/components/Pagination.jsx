import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {

   const {page, handlePageChange, totalPages} = useContext(AppContext); 

  return ( 
    <div className='w-full flex justify-center items-center border-2 fixed bottom-0 bg-white dark:bg-gray-900 dark:border-none'>
      <div className='flex justify-between w-11/12 max-w-[670px] py-2'>
      <div className='flex gap-x-2'> 
        
        { page > 1 &&
            (<button 
            className='rounded-md border-2 px-4 py-1 dark:bd-white dark:text-white'
            onClick={() => handlePageChange(page-1)}>
                Previous
            </button>)
        }

        { page < totalPages && 
                (<button 
                className='rounded-md border-2 px-4 py-1 dark:bd-white dark:text-white'
                onClick={() =>handlePageChange(page+1) }>
                Next
            </button>)
        }

      </div>
       

        <p className='font-bold text-sm dark:text-white'>
            Page {page} of {totalPages}
        </p>
      </div>
    </div>
  )
}

export default Pagination
