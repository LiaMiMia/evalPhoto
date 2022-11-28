import React from 'react';
import Image from "@frontity/components/image";
import connect from '@frontity/connect';
 

const GalleriePage = ({state})=>{
  const data = state.source.get(state.router.link)
  const page = state.source[data.type][data.id]
  const media = state.source.url+"/wp-json/wp/v2/media"

  return(
    <div>
      {/* {JSON.stringify(media)}
      {media.items.map((item)=>{

        return(
          <div key={item.id}>
            {item.categories}
            <Image src={item.source_url}/>
          </div>
        )
      })} */}
      
    </div>
    
  )
}

export default connect(GalleriePage)
