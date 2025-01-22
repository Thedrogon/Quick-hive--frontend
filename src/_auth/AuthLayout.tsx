import { Outlet , Navigate } from 'react-router-dom';

const AuthLayout = () => {

 const isAuthenticated=false;
  return (
    <>
      {isAuthenticated ? (
        <Navigate to='/'/>
        ):(
          <>
          <section className='flex-1 flex flex-col items-center justify-center py-10'>

            <Outlet/>
          </section>
          <img src='/assets/images/side-img.svg' alt='side image' className='hidden md:block h-screen w-1/2 object-cover bg-no-repeat '/>
          </>
        
      )}
    </>
  )
}

export default AuthLayout