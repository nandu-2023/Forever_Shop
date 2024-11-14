import React from 'react'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
    <div className="my-10 flex flex-col md:flex-row gap-16">
      <img className="w-full md:max-w-[450px]" src={assets.about_img} />
      <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione fugiat modi omnis saepe voluptatem magni cum error nulla! Delectus deleniti voluptatibus velit iusto maiores ratione ut! Eveniet consequuntur dolorum autem.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit asperiores facere blanditiis totam beatae numquam culpa, cum aliquid ex molestias tenetur ab necessitatibus assumenda omnis sapiente placeat optio et fugiat!</p>
      <b className='text-gray-800' >Our Mission</b>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit asperiores facere blanditiis totam beatae numquam culpa, cum aliquid ex molestias tenetur ab necessitatibus assumenda omnis sapiente placeat optio et fugiat!</p>

      </div>
    </div>
    <div className="text-xl py-4 ">
    <Title text1={'WHY'} text2={'CHOOSE US'}/>

    </div>
    <div className="flex flex-col md:flex-row text-sm mb-20">
      <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
      <b className='text-gray-800' >Quality Assurance:</b>
      <p className='text-gray-600' >Lorem ipsum dolor sit amet, consectetur adipisicing elit.ditiis totam beatae numquam culpa, cum aliquid ex molestias tenetur ab necessitatibus assumenda omnis sapiente placeat optio et fugiat!</p>
      </div>
      <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
      <b className='text-gray-800' >Convenience:</b>
      <p className='text-gray-600' >Lorem ipsug elit. Fugit asperiores facere blanditiis totam beatae numquam culpa, cum aliquid ex molestias tenetur ab necessitatibus assumenda omnis sapiente placeat optio et fugiat!</p>
      </div>
      <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
      <b className='text-gray-800' >Exceptional Customer Service:</b>
      <p className='text-gray-600' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit asperiores facere blanditiis totam beatae numquam culpa, cum aliquid ex molestias tenetur ab necessitatibus assumenda omnis sapiente placeat optio et fugiat!</p>
      </div>
    </div>
    <NewsletterBox />
    </div>
  )
}

export default About