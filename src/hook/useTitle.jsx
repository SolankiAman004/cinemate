import { useEffect } from "react";
export  const useTitle = (title) => {
useEffect(() =>{
      document.title =`Search Result for ${title} / Cinemate`;
});
  return null
}

