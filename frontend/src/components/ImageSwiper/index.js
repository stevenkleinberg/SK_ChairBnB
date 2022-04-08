import './imageSlider.scss'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Thumbs} from 'swiper'
const ImageSwiper = ({images}) =>{

    return(
        <>
            <Swiper
                loop={true}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation,Thumbs]}
                grabCursor={true}

                className='chair-images-swiper'
            >
            { images.map((chairImage, index) =>(
                <SwiperSlide key={index}>
                    <img src={chairImage.url} alt="chair" />
                </SwiperSlide>
            ))}
            </Swiper>
            <Swiper

                loop={true}
                spaceBetween={10}
                slidesPerView={3}
                modules={[Navigation, Thumbs]}
                className='chair-images-swiper-thumbs'
            >
            { images.map((chairImage, index) =>(
                <SwiperSlide key={index}>
                    <div className='chair-images-swiper-thumbs-wrapper'>
                    <img src={chairImage.url} alt="chair" />
                    </div>
                </SwiperSlide>
            ))}
            </Swiper>
        </>
    )
}
 export default ImageSwiper;
