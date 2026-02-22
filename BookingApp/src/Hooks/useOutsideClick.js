import {useEffect} from "react";

export default function useOutsideClick(ref , cb) {
    useEffect(() => {

        function handleOutsideClick(e) {
            if (ref.current && !ref.current.contains(e.target) && !e.target.classList.contains('header__option')) {
                cb()
            }


        }

        document.addEventListener("click", handleOutsideClick)

    }, [ref , cb]);
}
