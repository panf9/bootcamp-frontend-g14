import './index.css'

export const App = () => {
  

  return (
    <>
      <section className='twitter'>
        <div className='twitter-container'>
          <img className='twitter_image' src="https://unavatar.io/github/TD-er" alt="Avatar de alguien" />
          <div className='twitter_info'>
            <span className='twitter_info_name'>Mi nombre</span>
            <span className='twitter_info_user'>mi usuario</span>
          </div>
        </div>
        <button className='twitter_button'>Seguir</button>
      </section>
    </>
  )
}