import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className='bg-main-gradient text-white'>
      <div className='section-container text-center'>
        <h2 className='text-7xl md:text-9xl text-gradient font-bold'>404</h2>
        <h3 className='text-4xl mt-5 mb-20 text-gray-300/80 font-medium'>This Page is not Found</h3>
        <Link to='/Sassland' className='main-btn'>Return To Home Page</Link>
      </div>
    </div>
  )
}

export default NotFoundPage
