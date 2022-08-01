import { useEffect, useState } from "react"

const useScroll = () => {
    const [showhide, setshowhide] = useState(false)
    useEffect(() => {
        const ChangeCarousel = () => {
            if (window.scrollY > 60) {
                setshowhide(true)
            }
            else{
                setshowhide(false)
            }
            
        }
        window.addEventListener('scroll', ChangeCarousel)
        return () => {
            window.removeEventListener('scroll',ChangeCarousel )
        }
    }, [showhide])
    return { showhide }
}
export {useScroll}