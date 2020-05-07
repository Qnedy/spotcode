import React, { useState, useEffect } from 'react';
import { Heading, Columns, Image } from 'react-bulma-components';
import styled from 'styled-components';

import AlbumServices from '../../services/albums';
import { useParams } from 'react-router-dom';

import Musics from '../Musics';

const DivVSpaced = styled.div`
 margin-top: 20px;
 margin-bottom: 20px;
`

const Albums = () => {
  let { id } = useParams();
  const [album, setAlbum] = useState([]);

  async function fetchAlbum(){
    const response = await AlbumServices.show(id);
    setAlbum(response.data);
  }

  useEffect(() => {
    fetchAlbum();
  }, [])

 return (
   <>
     <Columns className='is-vcentered is-mobile is-centered'>
       <Columns.Column desktop={{size: 3}} className='has-text-centered'>
         <Image src={album.cover_url} />
         <DivVSpaced>
            <Heading size={5} className='has-text-white'>{album.title}</Heading>
            <Heading size={6} subtitle className='has-text-white'>{album.artist_name}</Heading>
         </DivVSpaced>
       </Columns.Column>
     </Columns>
     <Musics songs={album.songs || []} />
   </>
);
}
export default Albums;