import _ from 'lodash';
import { useState, useEffect } from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videoSearch = _.debounce((term) => {
    YTSearch({ key: process.env.REACT_APP_YOUTUBE_API_KEY, term: term }, (videos) => {
      setVideos(videos);
      setSelectedVideo(videos[0]);
    });
  }, 300);

  useEffect(() => {
    videoSearch('funny cats videos');
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <SearchBar onTermChange={videoSearch} />
      <VideoDetail video={selectedVideo} />
      <VideoList
        onVideoSelect={(selectedVideo) => setSelectedVideo(selectedVideo)}
        videos={videos}
      />
    </>
  );
};

export default App;
