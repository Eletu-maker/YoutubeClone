import React from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
const PlayVideo = () => {
  return (
    <div className='play-video'>
      <video  src={video1} controls autoPlay muted></video>
      <h3>Best YouTube Channel To Learn Web Development</h3>
      <div className="play-video-info">
        <p>1525 Views &bull; 2 days ago</p>
        <div>
          <span><img src={like} alt=""/> 125</span>
          <span><img src={dislike} alt=""/> 1</span>
          <span><img src={share} alt=""/> share</span>
          <span><img src={save} alt=""/> save</span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={jack} alt=""/>
        <div>
          <p>
            jack acc
          </p>
          <span>1M Subscribe</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>Channel that makes learning Easy</p>
        <p>Subscribe to my Channel</p>
        <hr />
        <h4>12 comment</h4>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>Jack Nick <span>1 day ago</span></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iure ab laboriosam sunt aperiam similique magni nobis porro libero maiores ducimus nisi, amet quaerat molestias consequatur obcaecati harum eos exercitationem.</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>200</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>Jack Nick <span>1 day ago</span></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iure ab laboriosam sunt aperiam similique magni nobis porro libero maiores ducimus nisi, amet quaerat molestias consequatur obcaecati harum eos exercitationem.</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>200</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>Jack Nick <span>1 day ago</span></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iure ab laboriosam sunt aperiam similique magni nobis porro libero maiores ducimus nisi, amet quaerat molestias consequatur obcaecati harum eos exercitationem.</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>200</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>Jack Nick <span>1 day ago</span></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iure ab laboriosam sunt aperiam similique magni nobis porro libero maiores ducimus nisi, amet quaerat molestias consequatur obcaecati harum eos exercitationem.</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>200</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default PlayVideo
