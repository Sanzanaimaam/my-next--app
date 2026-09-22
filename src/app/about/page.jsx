import Image from 'next/image';
import React from 'react';

export const metadata = {
  title: 'about',
  description: '...',
}

const AboutPage = () => {
    return (
        <div>
            <h2>About Us</h2>
            <Image
                src="/Gemini_Generated_Image_rkkgbdrkkgbdrkkg.png"
                width={300}
                height={300}
                alt="About Us"
            ></Image>
            <Image 
            src ="https://images.unsplash.com/photo-1779896411973-f16f1db9f3ae" width={300}
                height={300}  alt="About Us">

            </Image>
        </div>
    );
};

export default AboutPage;