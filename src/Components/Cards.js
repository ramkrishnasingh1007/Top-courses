import React, { useState } from 'react'
import Card from './Card';

//const Cards = (courses) => {
const Cards = (props) => {
    let courses = props.courses;
    let category=props.category;
    const[likedCourses, setLikedCourses] = useState([]);
   // console.log("printing data");
    //console.log(courses);
    
    // returns you a list of all courses received from the api response
    function getCourses() {
        if(category ==="All"){
        let allCourses=[];
        Object.values(courses).forEach(array => {
            array.forEach(courseData => {
                allCourses.push(courseData);

            })
        })
        return allCourses;
   }
   else{
    //main sirf specific category ka array pass karunga
    return courses[category];
   }
}

  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
    {
        getCourses().map( (course) => (
       <Card key={course.id} 
       course={course} 
       likedCourses={likedCourses} 
       setLikedCourses={setLikedCourses}/>
))
}
    </div>
  )
}


export default Cards
