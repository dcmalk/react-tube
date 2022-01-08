import VideoListItem from './VideoListItem';

const VideoList = ({ videos, onVideoSelect }) => {
  const videoItems = videos.map((video) => {
    return <VideoListItem onVideoSelect={onVideoSelect} key={video.etag} video={video} />;
  });

  return <ul className="list-group col-md-4 ">{videoItems}</ul>;
};

export default VideoList;
