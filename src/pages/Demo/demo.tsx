import { useInView } from "react-intersection-observer";
import slideImg1 from "../../assets/swiperImg/slideImage1.jpg";
import Video from "../../assets/dummy.mp4";
import "./demo.css";

const Demo = () => {
  const [refLeft, inViewLeft] = useInView({ triggerOnce: true });
  const [refRight, inViewRight] = useInView({ triggerOnce: true });

  return (
    <div>
      <img
        src={slideImg1}
        //   width={100}
        //   height={80}
        //   className="d-inline-block align-top mobHeadImg"
        alt="kglogo"
      />
      
      <h2>Animate On Scroll</h2>
      <div className="view">
      <video autoPlay loop muted style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* <video width={320} height={240} controls>
            <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
        </video> */}
        <h1 className="thirdHead">Capturing Moments, Crafting Memories,</h1>
        <h1 className="thirdHead">Welcome to KG Photography.</h1>
        <h1 className="thirdHead">Capturing Moments, Crafting Memories,</h1>
        <h1 className="thirdHead">Welcome to KG Photography.</h1>
        <h1 className="thirdHead">Capturing Moments, Crafting Memories,</h1>
        <h1 className="thirdHead">Welcome to KG Photography.</h1>
        <h1 className="thirdHead">Capturing Moments, Crafting Memories,</h1>
        <h1 className="thirdHead">Welcome to KG Photography.</h1>
        <h1 className="thirdHead">Capturing Moments, Crafting Memories,</h1>
        <h1 className="thirdHead">Welcome to KG Photography.</h1>
        <h1 className="thirdHead">Capturing Moments, Crafting Memories,</h1>
        <h1 className="thirdHead">Welcome to KG Photography.</h1>
        <h1 className="thirdHead">Capturing Moments, Crafting Memories,</h1>
        <h1 className="thirdHead">Welcome to KG Photography.</h1>
        <h1 className="thirdHead">Capturing Moments, Crafting Memories,</h1>
        <h1 className="thirdHead">Welcome to KG Photography.</h1>
        <h1 className="thirdHead">Capturing Moments, Crafting Memories,</h1>
        <h1 className="thirdHead">Welcome to KG Photography.</h1>
        <h1 className="thirdHead">Capturing Moments, Crafting Memories,</h1>
        <h1 className="thirdHead">Welcome to KG Photography.</h1>
        <h1 className="thirdHead">Capturing Moments, Crafting Memories,</h1>
        <h1 className="thirdHead">Welcome to KG Photography.</h1>
        <h1 className="thirdHead">Capturing Moments, Crafting Memories,</h1>
        <h1 className="thirdHead">Welcome to KG Photography.</h1>
        <h1 className="thirdHead">Capturing Moments, Crafting Memories,</h1>
        <h1 className="thirdHead">Welcome to KG Photography.</h1>
        <h1 className="thirdHead">Capturing Moments, Crafting Memories,</h1>
        <h1 className="thirdHead">Welcome to KG Photography.</h1>
        <h1 className="thirdHead">Capturing Moments, Crafting Memories,</h1>
        <h1 className="thirdHead">Welcome to KG Photography.</h1>
        <h1 className="thirdHead">Capturing Moments, Crafting Memories,</h1>
        <h1 className="thirdHead">Welcome to KG Photography.</h1>
        <h1 className="thirdHead">Capturing Moments, Crafting Memories,</h1>
        <h1 className="thirdHead">Welcome to KG Photography.</h1>
        <h1 className="thirdHead">Capturing Moments, Crafting Memories,</h1>
        <h1 className="thirdHead">Welcome to KG Photography.</h1>
        <h1 className="thirdHead">Capturing Moments, Crafting Memories,</h1>
        <h1 className="thirdHead">Welcome to KG Photography.</h1>
        <h1 className="thirdHead">Capturing Moments, Crafting Memories,</h1>
        <h1 className="thirdHead">Welcome to KG Photography.</h1>
        {/* <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div> */}
      </div>
    </div>
  );
};

export default Demo;
