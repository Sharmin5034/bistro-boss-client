import SectionTitle from "../../Components/SectionTitle/SectionTitle"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Testimonials =()=>{
    const [reviews, setReviews] =useState([])
    useEffect(()=>{
        fetch('reviews.json')
        .then(res => res.json())
        .then(review=> {
            console.log(review)
            setReviews(review)})
    },[])
    return(
<section className="my-20">
<SectionTitle subHeading={'What Our Clients Say'} heading={'testimonials'}/>
<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
       {
        reviews.map(review =><SwiperSlide key={review._id}>
            <div className="m-24 flex flex-col items-center">
            <Rating
      style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly
    />
    <i className="fa-solid fa-quote-left"></i>
                <p className="my-6">{review.details}</p>
                <h3 className="text-2xl text-orange-400">{review.name}</h3>
            </div>
        </SwiperSlide>)

       }
      </Swiper>
</section>
    )
}
export default Testimonials