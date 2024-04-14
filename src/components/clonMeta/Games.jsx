import roblox from './public/games_1.webp'
import asgard from './public/games_2.webp'
import peacock from './public/games_3.webp'
import supernatural from './public/games_4.webp'
import meta_quest from './public/games_5.webp'

const Games = () => {
  return (
    <section>
      <div className="max-w-[1540px] mx-auto w-full px-8 flex flex-col items-center mb-32">
        <h3 className="text-5xl text-center mb-10 w-[730px]">
          Explore games and experiences on Meta Quest
        </h3>
        <a href="#"
          className='text-xs py-3 px-7 mb-12 border-2 border-gray-300 rounded-full text-blue-500 hover:text-blue-400 font-semibold'
        >
          Browse apps & games
        </a>
        
        <div className='border border-gray-300 divide-x w-full flex'>
          <div className='w-1/5 p-4'>
            <img src={roblox} alt="game_roblox" 
              className='w-ful object-cover mb-4'
            />
            <p className='mb-6 text-2xl'>
              {/* Roblox */}
            </p>
          </div>

          <div className='w-1/5 p-4'>
            <img src={asgard} alt="game_roblox" 
              className='w-ful object-cover mb-4'
            />
            <p className='mb-6 text-2xl'>
              {/* Asgard's Wrath 2 */}
            </p>
          </div>

          <div className='w-1/5 p-4'>
            <img src={peacock} alt="game_roblox" 
              className='w-ful object-cover mb-4'
            />
            <p className='mb-6 text-2xl'>
              {/* Peacock */}
            </p>
          </div>

          <div className='w-1/5 p-4'>
            <img src={supernatural} alt="game_roblox" 
              className='w-ful object-cover mb-4'
            />
            <p className='mb-6 text-2xl'>
              {/* Supernatural */}
            </p>
          </div>

          <div className='w-1/5 p-4'>
            <img src={meta_quest} alt="game_roblox" 
              className='w-ful object-cover mb-4'
            />
            <p className='mb-6 text-2xl'>
              {/* Meta Quest + */}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Games