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
          </>
        
      )}
    </>
  )
}

export default AuthLayout