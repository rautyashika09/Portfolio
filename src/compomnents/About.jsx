import {motion, optimizedAppearDataAttribute} from "framer-motion";
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl">About
            <span className="text-neutral-500"> Me</span>
        </h2>
        <div className="flex flex-wrap">
            <motion.div 
            whileInView={{ opacity: 1,x:0}}
            initial={{ opacity: 0, x: -100}}
            transition={{ duration:0.5}}
            className="w-full h-1/3 lg:w-1/3 lg:p-8">
             <div className="flex items-center justify-center">
                <img className="rounded-2xl" src="../src/assets/about.jpg" alt="" />
             </div>
            </motion.div>
            <motion.div
             whileInView={{ opacity: 1,x:0}}
             initial={{ opacity: 0, x: 100}}
             transition={{ duration:0.5}}
            className="w-full lg:w-1/2 px-2">
              <div className="flex justify-center lg:justify-start">
                <p className="my-7 mx-4 max-w-2xl py-7">Hey there!! I’m a Frontend Developer with a couple of months of hands-on experience in building modern, responsive, and user-friendly web applications. I specialize in React, HTML5, CSS3, and JavaScript, focusing on creating clean and interactive UI designs.

I also have basic knowledge of WordPress, allowing me to customize and optimize websites efficiently. Passionate about learning and growing in the web development space, I’m always exploring new technologies to enhance user experiences. Excited to take on new challenges and build amazing digital solutions.</p>
              </div>
             </motion.div>
        </div>
    </div>
  )
}

export default About;