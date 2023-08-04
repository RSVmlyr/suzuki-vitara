import React from 'react';
import { useState, useEffect } from 'react';
import FormVote from '../../components/molecules/ForrmVote/ForrmVote';
import useGetPhotoInfo from '../../hooks/useGetPhotoInfo';
import { useNavigate, useParams } from 'react-router-dom';

import './Vote.scss';
import filterName from '../../helpers/clearNameVote';

const urlApi = import.meta.env.VITE_BACKEND_API_URL;
const urlResource = import.meta.env.VITE_BACKEND_RESOURCE_URL;

export const Vote = () => {
  const { id } = useParams();
  const { data, error, setError } = useGetPhotoInfo(
    `${urlApi}/photo/${id}`
  );
  // console.log(data);
  const [imageURL, setImageURL] = useState('');
  const [likesNumber, setlikesNumber] = useState('');
  const [competitorName, setCompetitorName] = useState('');
  const navigate = useNavigate();

  const likesData = (likes) => {
    let result = likes
    if(result > 999) {
      result = result.slice(0, result.length-3) + "k";
    }
    return result
  }

  useEffect(() => {
    if(error) {
      navigate('/404')
    }
    if (data && data.photo_url !== '' && data.photo_url !== null) {
      setImageURL(`${urlResource}/${data.photo_url}`);
    }
    if (data && data.like !== '' && data.like !== null) {
      setlikesNumber(likesData(data.like));
    }
    if (data && data.competitor_name !== '' && data.competitor_name !== null) {
      setCompetitorName(data.competitor_name);
    }
  }, [data]);

  return (
    <div className="vote">
      <div className="vote--container">
        <div className="vote--left">
          
          {imageURL && (
            <figure className="vote--image">
              <img
                className="vote--image__file"
                src={imageURL}
                loading="lazy"
                alt="Suzuki Vitara"
                title="Suzuki Vitara"
              />
            </figure>
          )}
        </div>
        <div className="vote--right">
          <div className="vote--count">
            <span className="vote--count__number">{likesNumber}</span>
            <span className="vote--count__name">{filterName(competitorName)}</span>
          </div>
          <FormVote />
        </div>
      </div>
    </div>
  );
};

export default Vote;
