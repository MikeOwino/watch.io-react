import "./styles.css";
import { Helmet } from "react-helmet";

export default function App() {
  return (
    <>
      <video
        id="my-video"
        className="video-js"
        controls
        preload="auto"
        poster="https://res.cloudinary.com/weknow-creators/image/upload/c_scale,w_1280/v1647843623/wallhaven-83g6zy_i52wko.png"
        data-setup
        loop
      >
        <source
          src="https://imdb-video.media-imdb.com/vi1739046681/1434659607842-pgv4ql-1568068960213.mp4?Expires=1648376622&Signature=sVmRo20u66DjjZg0AiYpjbpDXwbLH8osK~-Teig0EInI~45qMMfMmKgvul7imn8XStmcZrHC3DnyXydNp9wT2sN~tlW1pA96ysPkF1kVV5XBVql4sgaB3WwisOLeGfno4tA-pra~lcaB7z9bUpk734rMI3tCXeTqNu37ma9Nl8ANVJFzpLWqfyCL7LeXmWqWxUl-b~j5CjWdkpHjjdpwWJM5Oiqe0ozHLOArtji3ZDykWUboM7KuYbjcdSjv2PFtDiH4wWdL4E~~Sd~NIsI1ON8ajO73HNguEm73atWTx2f1kpqBbMnyRlhn7-N8371WTOF-Z-~jUwzKgSRJT1Lnaw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
          type="video/mp4"
        />
      </video>
      <Helmet>
        <script
          src="https://vjs.zencdn.net/5.4.6/video.js"
          type="text/javascript"
        />
      </Helmet>
    </>
  );
}
