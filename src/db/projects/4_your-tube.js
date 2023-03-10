import { images } from "../images";

const yourTube = {
  name: "Your-Tube",
  tools: ["Node.js", "React", "PostgreSQL", "FFmpeg"],
  description: (
    <div className="description">
      Your-Tube is an alternative YouTube front-end that removes all external
      distractions to create a minimalist interface to help users focus on
      studies or work. It obtains data search and video data from the Invidious
      API.
    </div>
  ),
  features: (
    <>
      <div className="working--intro--elements">
        <h3>The website includes the following features:</h3>
        <ul id="small-margin">
          <li>
            Audio-only mode: Allows users to listen to videos. (Helps to reduce
            bandwidth when listening to music compilations)
          </li>
          <li>Video Downloads: Download videos to watch later</li>
          <li>
            Toggle between Multiple Players: Invidious player allows audio-only
            mode and ad-free streaming. YouTube player allows faster loading and
            plays live-streams.
          </li>
          <li>
            Automatic switching between instances: If an Invidious instance is
            down, the app will automatically switch to a working one.
          </li>
          <li>
            Playlists: Players can create custom playlists to add and delete
            videos. Videos accessed from playlists have autoplay enabled as well
            as their own interface allowing easy access to other videos. You
            will never need to alt-tab back to the browser.
          </li>
          <li>
            Zero distractions: Clean interface with no unneeded tab elements. We
            aim to keep you on our site as little as possible.
          </li>
        </ul>
      </div>
    </>
  ),
  challenges: [
    <div className="working--challenges--carousel--item">
      <div>
        <h3>Audio-only mode</h3>
        <hr className="working--challenges--carousel--item--line" />
        <ul className="working--challenges--carousel--item--text">
          <li>
            This was also very tricky to implement. At one point, I was even
            advised to give up on it and focus on something else.
          </li>
          <li>
            I was trying to use the Invidious API to get the video. This was
            difficult, because a lot of requests made would be blocked by the
            browser's Cross Origin Resource Sharing policy.
          </li>
          <li>
            After viewing the open-source code from similar applications (as
            well as having an e-mail chat with one of the developers of the
            API), I was able to get the correct query string that would properly
            send an audio and video back.{" "}
          </li>
          <li>
            From there, I had to find how to use the audio-only player from the
            video-js library I was using as a video player. It was a bit tricky,
            but I was able to get it working.
          </li>
        </ul>
      </div>
      <img
        className="working--challenges--carousel--item--image"
        src={images.yourTube_videoPageAudioMode}
        alt="project"
      />
    </div>,
    <div className="working--challenges--carousel--item">
      <div>
        <h3>Video Downloads</h3>
        <hr className="working--challenges--carousel--item--line" />
        <ul className="working--challenges--carousel--item--text">
          <li>
            This was tough. First, I had to make it so clicking the 'download'
            button would use Axios to make a 'get' request to the server using
            the provided video id.
          </li>
          <li>
            On the server end, I had to install the ytdl and ffmpeg modules. I
            used ytdl, I had to get the audio and video streams separately (as
            it does not support combined hi-res downloads). From there, I used
            ffmpeg to re-encode the two together and send it back to the client.
          </li>
          <li>
            The video would then be automatically deleted from the server.
          </li>
        </ul>
      </div>
      <img
        className="working--challenges--carousel--item--image"
        src={images.yourTube_videoPageDownloads}
        alt="project"
      />
    </div>,

    <div className="working--challenges--carousel--item">
      <div>
        <h3>Switch between Invidious Instances</h3>
        <hr className="working--challenges--carousel--item--line" />
        <ul className="working--challenges--carousel--item--text">
          <li>
            Sometimes, a video would play on one Instance, but would not play on
            another. I had initially chosen a specific instance, which could
            reliably play most videos. However, I decided to try and safeguard
            the app as much as possible.
          </li>
          <li>
            I created a list of several available instances. I found this list
            from the open-source code of the LibRedirect Firefox extension.
          </li>
          <li>
            I then wrote a recursive function that would cycle through the list
            to find the first working instance, and run said instance.
          </li>
        </ul>
      </div>
      <img
        className="working--challenges--carousel--item--image"
        src={images.yourTube_videoPageInvidiousVideo}
        alt="project"
      />
    </div>,
  ],
  lessons_learnt: (
    <>
      <h3>What I Learnt</h3>
      <ul>
        <li>
          We had to work with several APIs and libraries. YouTube, Invidious, video-js, ytdl, ffmpeg, Axios. Working on this project has made me a lot more comfortable working with external API's and libraries,
        </li>
      </ul>
    </>
  ),
  images: [
    images.yourTube_addToNewPlaylist,
    images.yourTube_homePage,
    images.yourTube_playlistSidebar,
    images.yourTube_searchResults,
    images.yourTube_videoPageAudioMode,
    images.yourTube_videoPageDownloads,
    images.yourTube_videoPageInvidiousVideo,
    images.yourTube_videoPageInvidiousVideoBottom,
    images.yourTube_videoPagePlaylistView,
    images.yourTube_videoPageYoutube,
  ],
  githubLink: "https://github.com/open-meadow/your-tube",
};

export default yourTube;
