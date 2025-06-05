import {navList} from '@/constant/index.ts';
import {apple,bag,search} from '@/constant/images';

const Navbar = () => {
  return (
    <header className="w-full sm:px-10 px-5 py-5 flex items-center box-border">
      <div>
       <img src={apple} alt="apple" /> 
      </div>

      <nav className='flex-1 screen-max-width max-sm:hidden flex justify-center'>
        {
          navList.map((item,index) => (
            <a href={item.link} key={index} className="text-sm text-[#818589] font-medium mx-4 hover:text-[#fff]">{item.name}</a>
          ))
        }
      </nav>

      <div className='flex items-center max-sm:justify-end max-sm:flex-1 gap-6'>
        <img src={search} alt="search" width={14} height={18} />
        <img src={bag} alt="bag" width={14} height={18} /> 
      </div>
    </header>
  )
}

export default Navbar;