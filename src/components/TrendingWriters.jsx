import User from '../assets/user.jpg'
import { UserCard } from './UserCard'

export function TrendingWriters () {
  const users =
    [
      {
        userImg: User,
        userName: 'Santi Federici',
        userAt: 'santi-federici',
        initialIsFollowing: false
      },
      {
        userImg: User,
        userName: 'Mati Navio',
        userAt: 'matiasNavio',
        initialIsFollowing: true
      },
      {
        userImg: User,
        userName: 'Exe Carrizo',
        userAt: 'eseba',
        initialIsFollowing: true
      },
      {
        userImg: User,
        userName: 'Matias Mondello',
        userAt: 'mondeYoMatias',
        initialIsFollowing: false
      },
      {
        userImg: User,
        userName: 'Giuliano Blenguini',
        userAt: 'CarriDrogaNafta',
        initialIsFollowing: false
      }
    ]

  return (
        <div className='trending-writers'>
            <h2>Trending Writers</h2>

            {
                users.map(({ userImg, userName, userAt, initialIsFollowing }) => (

                    <UserCard
                    key={userName}
                    userImg={userImg}
                    userName={userName}
                    userAt={userAt}
                    initialIsFollowing={initialIsFollowing} />
                ))
            }

        </div>
  )
}
