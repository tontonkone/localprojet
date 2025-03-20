import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@radix-ui/react-dialog'
import { SearchIcon } from 'lucide-react'
import React from 'react'

export const SearchBox = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <SearchIcon size={26} cursor={"pointer"} />
      </DialogTrigger>
      <DialogContent>
        <DialogTitle></DialogTitle> {/* Ajout du titre */}
        <form action="">
          <input type="text" placeholder='Recherche Produits' className='bloc w-full bg-gray-300 rounded-lg px-6 py-2 m-4 outline-none' />
        </form>
      </DialogContent>
    </Dialog>
  )
}
