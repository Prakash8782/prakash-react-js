import './header.css';
function Header(){
   return(
       <header>
           <div className='container'>
               <div className='wrapper'>
                   <div className='logo'>
                       <h1>SWIGGY</h1>
                   </div>
                   <div className='nav-bar'>
                       <a href='' className='nav-items'>Search</a>
                       <a href='' className='nav-items'>Offer%</a>
                       <a href='' className='nav-items'>Help</a>
                       <a href='' className='nav-items'>Sigin</a>
                       <a href='' className='nav-items'>Cart</a>
                   </div>
               </div>
           </div>
       </header>
   )
}
export default Header;