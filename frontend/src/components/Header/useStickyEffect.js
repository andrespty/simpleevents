import { useEffect, useState, useRef, useCallback } from "react"

function useStickyEffect() {
  const [isSticky, setSticky] = useState(false)
  const element = useRef(null)

    const toggleSticky = useCallback(({top, bottom}) => {
        if (window.scrollY > bottom){
            !isSticky && setSticky(true)
        }
        else{
            isSticky && setSticky(false)
        }
    },[isSticky])

    

    useEffect(() => {
        const debounce = (func, wait = 20, immediate = true) => {
            let timeOut
            return () => {
            let context = this,
                args = arguments
            const later = () => {
                timeOut = null
                if (!immediate) func.apply(context, args)
            }
            const callNow = immediate && !timeOut
            clearTimeout(timeOut)
            timeOut = setTimeout(later, wait)
            if (callNow) func.apply(context, args)
            }
        }
        const handle_scroll = () => {
            toggleSticky(element.current.getBoundingClientRect())
        }
        window.addEventListener('scroll', debounce(handle_scroll))
        return () => {
            window.removeEventListener('scroll', handle_scroll)
        }
    }, [toggleSticky])

  // This function handles the scroll performance issue
  

  return { isSticky, element }
}

export default useStickyEffect