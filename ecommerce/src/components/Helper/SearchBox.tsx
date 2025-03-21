import { SearchIcon } from 'lucide-react'
import React from 'react'
import { Dialog, DialogContent } from '../ui/dialog'
import { DialogTitle, DialogTrigger } from '@radix-ui/react-dialog'

const SearchBox = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <SearchIcon size={26} cursor={"pointer"} />
      </DialogTrigger>
      <DialogContent>
        <DialogTitle></DialogTitle>
        <form action="">
          <input type="text" placeholder='Recherche Produits' className='bloc w-full bg-gray-300 rounded-lg px-6 py-2 m-4 outline-none' />
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default SearchBox