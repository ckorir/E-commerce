import React from 'react'
import '../../css/DescriptionBox.css'

export default function DescriptionBox() {
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-nav'>
            <div className='descriptionbox-nav-box'>Description</div>
            <div className='descriptionbox-nav-box fade'>Reviews (420)</div>
        </div>

        <div className='descriptionbox-description'>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper porttitor volutpat. Sed vestibulum convallis sapien vitae dapibus. Nam sodales sit amet ex eget maximus. Vivamus lacinia convallis elit, et accumsan erat molestie vel.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper porttitor volutpat. Sed vestibulum convallis sapien vitae dapibus. Nam sodales sit amet ex eget maximus. Vivamus lacinia convallis elit, et accumsan erat molestie vel.
            </p>
        </div>
    </div>
  )
}
