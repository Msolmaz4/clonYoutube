import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import axios  from 'axios'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
//type yazarak sondki uyantity rahatca degistebioliry 
const Home = ({type}) => {

const [videos ,setVideos]= useState([])

 useEffect(()=>{

  const fetchVideos =async()=>{
    const res = await axios.get(`/videos/${type}`)
    setVideos(res.data)
    //console.log(res.data)
  }
  fetchVideos()
 },[type])

  return (
    <Container>
      {
        videos.map((video)=>(
          <Card
           key={video._id} 
           video={video} />
        ))
      }
    </Container>
  );
};

export default Home;
