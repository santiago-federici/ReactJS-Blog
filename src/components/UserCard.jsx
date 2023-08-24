import { useState } from 'react'
import './Usercard.css'

export function UserCard ({ userImg, userName, userAt, initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  const btnText = isFollowing ? 'Following' : 'Follow'
  const btnClassName = isFollowing ? 'follow-btn is-following-btn' : 'follow-btn'

  return (
        <div className='user-card'>
                <div className='user-card-info'>
                    <img src={ userImg } alt="" />
                    <div>
                        <p className='user-card-name'>{ userName }</p>
                        <p className='user-card-at'>@{ userAt }</p>
                    </div>
                </div>

                <button className={ btnClassName } onClick={ () => setIsFollowing(!isFollowing) }>
                    <p className='follow-btn-text'>{ btnText }</p>
                    <p className='stop-following-btn'>Stop following</p>
                </button>
        </div>
  )
}
