import Gallery from '@/app/components/galleryPage/Gallery'
import GalleryIntro from '@/app/components/galleryPage/GalleryIntro'
import React from 'react'

const GalleryPage = () => {
  return (
    <>
      <GalleryIntro/>
      <Gallery/>
    </>
  )
}

export default GalleryPage


// Our gallery page displays our gallery intro component and the actual gallery.
