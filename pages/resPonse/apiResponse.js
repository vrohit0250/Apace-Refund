import React from "react"
import Link from "next/link"

const Apiresponse = ({ posts }) => {
  return (
    <React.Fragment>
      
   {posts.refunds.map((course) =>{
    
    return (

      <div>
        <h2>{course.id}</h2>
        <p>{course.refundNumber}</p>
        
      </div>
      
    );
  
   })}
    </React.Fragment>
  )
}
export async function getServerSideProps(context) {
    // fetch the blog posts from the mock API
    const res = await fetch('http://localhost:8000/apiRes');
    const posts = await res.json();
    console.log('posts',posts)
  
    return {
      props: { posts } // props will be passed to the page
    };
  }
export default Apiresponse