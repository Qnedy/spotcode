import React, { useEffect, useState } from 'react';
import Album from '../Album';
import styled from 'styled-components';
import { Columns, Heading} from 'react-bulma-components';
import AlbumsService from '../../services/albums';

const DivVSpaced = styled.div`
  margin-top: 50px;
`;

const Discovery = () => {
  const [recentAlbums, setRecentAlbums] = useState([]);
  const [recommendedAlbums, setRecommendedAlbums] = useState([]);

  async function fetchAlbums(){
    const response = await AlbumsService.index();
    console.log(response.data);
    setRecentAlbums(response.data['recent_albums']);
    setRecommendedAlbums(response.data['recommend_album']);
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  const recent_albums_components = recentAlbums.map((album, key) => 
    <Columns.Column desktop={{ size: 3 }} mobile={{ size: 6 }} key={key}>
      <Album artist_name={album.artist_name} title={album.title} cover_url={album.cpver_url} id={album.id}/>
    </Columns.Column>
  );

  const recommended_albums_components = recommendedAlbums.map((album, key) =>
    <Columns.Column desktop={{ size: 3 }} mobile={{ size: 6 }} key={key}>
      <Album artist_name={album.artist_name} title={album.title} cover_url={album.cpver_url} id={album.id}/>
    </Columns.Column>
  );

  return (
    <>
      {recentAlbums.length > 0 &&
        <div>
          <Heading className='has-text-white' size={4}>
            Tocadas recentemente
          </Heading>
          <Columns className='is-mobile'>
            {recent_albums_components}
          </Columns>
        </div>
      }
 
      {recommendedAlbums.length > 0 &&
        <DivVSpaced>
            <Heading className='has-text-white' size={4}>
                Recomendadas
            </Heading>
            <Columns className='is-mobile'>
              {recommended_albums_components}
            </Columns>
        </DivVSpaced>
      }
    </>
  );
}
export default Discovery;