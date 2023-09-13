import eggImgMobile from "../assets/images/mobile/image-transform.jpg";
import eggImgDesktop from "../assets/images/desktop/image-transform.jpg";
import glassImgMobile from "../assets/images/mobile/image-stand-out.jpg";
import glassImgDesktop from "../assets/images/desktop/image-stand-out.jpg";
import graphicDesingDesktop from "../assets/images/desktop/image-graphic-design.jpg"
import graphicDesingMobile from "../assets/images/mobile/image-graphic-design.jpg"
import photographyDesktop from "../assets/images/desktop/image-photography.jpg"
import photographyMobile from "../assets/images/mobile/image-photography.jpg"

import { Image } from "./Image";
import { Text } from "./Text";
import { ImageText } from "./ImageText";


export const About = () => {
  return (
    <section>
      <div className="tablet:grid tablet:grid-cols-2">

        <Image
          order="order-2"
          imgMobile={eggImgMobile}
          imgDesktop={eggImgDesktop}
        />

        <Text
          order="order-1"
          title='Proud dishwasher'
          text="My beginnings, putting on a chef's jacket for the first time was a great honor that I always remember. A stage that taught me many things."
          color='bg-Yellow'
        />

        <Image
          order="order-3"
          imgMobile={glassImgMobile}
          imgDesktop={glassImgDesktop}
        />

        <Text
          order="order-4"
          title='Leadership and human quality.'
          text="From the first time I had to lead a kitchen, I understood the importance of people's human quality. Techniques are learned, but a proactive attitude is a gift."
          color='bg-Soft-red'
        />

        <ImageText
          id='none'
          imgMobile={graphicDesingMobile}
          imgDesktop={graphicDesingDesktop}
          title='Always learning'
          text="The world is evolving faster and faster and it is very important to be updated day by day with new technologies, new good practices and new opportunities."
        />

        <ImageText
          id='foodiesitelab'
          imgMobile={photographyMobile}
          imgDesktop={photographyDesktop}
          title='FOODIE SITE LAB'
          text='I am currently developing a desktop and mobile application that will help gastronomic establishments manage their numbers, staff, recipes, meet talents, etc.'
        />
      </div>
    </section>
  );
};
