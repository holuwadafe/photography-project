import React from 'react'
import MyForm from '../component/layout/MyForm'
import { useState } from 'react'

import blog1 from '../assets/images/blog1.jpg'
import blog2 from '../assets/images/blog2.jpg'
import blog3 from '../assets/images/blog3.jpg'
import MyBlog from '../component/MyBlog'


function Blog() {




  return (
    <>
      <div>
        <div className='items-center text-center p-20 bg-[#fcfefe]'>
          <p>Welcome to my humble corner of the internet! I am thrilled to embark on this new blogging adventure, <br />
            where words find their rhythm and ideas come alive. Here, I'll explore a world of thoughts, reflections, and <br />
            where words find their rhythm and ideas come alive. Here, I'll explore a world of thoughts, reflections, and <br />
            ignite passion, and invite meaningful conversations. So, grab a cup of your favorite brew, settle in, and let's <br />
            embark on this journey of discovery and connection. Welcome, dear readers, to a place where words dance <br />
            and imagination soars.</p>
        </div>
      </div>
      <div>
        <MyBlog backImg={blog1} date="July 22, 2023" title="CHIKA AND ECHE" subTitle="WEDDING AND LOVE STORIES"/>
        <MyBlog backImg={blog2} date="July 2, 2023" title="Lessons from smoking" subTitle="MUSINGS"/>
        <MyBlog backImg={blog3} date="JUNE 1, 2023" title="Here we go again" subTitle="PHOTOGRAPHY AND CREATIVITY"/>
      </div>

    </>
  )
}


export default Blog