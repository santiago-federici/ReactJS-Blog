import User from '../assets/user.jpg'
import Car from '../assets/car.jpg'

import { BiLike } from 'react-icons/bi'
import { AiFillLike } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { BsBookmark, BsFillBookmarkFill } from 'react-icons/bs'
import { HiArrowNarrowLeft } from 'react-icons/hi'

import { NavLink } from 'react-router-dom'
import { useState } from 'react'

export function ReadMore() {

    let [isBookmarked, setIsBookmarked] = useState(false)
    let [isLiked, setIsLike] = useState(false)
    let likes = 15
    let comments = 3


    return(
        <section className='readmore-card readmore-flow'>
        <NavLink to={'/articles'}><HiArrowNarrowLeft className='back-articles-arrow' /></NavLink>
            <img src={ Car } alt="" />
            <div className='readmore-card__info'>
                <div className='readmore-card__user'>
                    <img src={ User } alt="" />
                    <p>@userat</p>
                    <button className='follow-btn'>Follow</button>
                </div>
                <h2>An awesome Car!</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, dolore nam sequi quas iste totam ipsa nostrum fugit voluptas possimus placeat tempore reiciendis consequatur nesciunt deleniti expedita voluptatibus culpa natus ut quo libero quaerat quibusdam vero quam? Corrupti nisi modi quisquam? Laboriosam magnam nesciunt autem tempora quas pariatur necessitatibus perferendis.</p>
                <h3>Another title</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia perferendis soluta ipsa magni obcaecati nostrum possimus ipsam reiciendis facilis. Delectus, nam quod. Dolor dolorum, harum laudantium eius ex voluptatibus necessitatibus, ea, nihil reiciendis ad facilis amet voluptas illum mollitia. Perferendis!</p>
                <div className='interaction-icons-container'>
                    {
                        isLiked
                        ?
                        <AiFillLike className='aifilllike' onClick={() => {
                            setIsLike(false)
                        }} />
                        :
                        <BiLike className='bilike' onClick={() => {
                            setIsLike(true)
                        }} />
                    }
                    <p>{likes}</p>
                    <FaRegComment className='faregcomment' />
                    <p>{comments}</p>
                    {
                        isBookmarked
                        ?
                        <BsFillBookmarkFill className='bsfillbookmarkfill' onClick={() => {
                            setIsBookmarked(false)
                        }} />
                         :
                        <BsBookmark className='bsbookmark' onClick={() => {
                            setIsBookmarked(true)
                        }} />
                    }
                </div>
            </div>
        </section>
    )
}