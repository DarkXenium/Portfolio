import Topbar from "./components/top/Topbar"
import Intro from "./components/intro/Intro"
import Work from "./components/work/Work"
import Profiles from "./components/profiles/Profiles"
import Contacts from "./components/contact/Contact"
import Menu from "./components/menu/Menu"
import Progress from "./components/progress/Progress"
import Landing from "./components/landing/Landing"
import Project from "./components/projects/Project"
import "./app.scss"
import { motion } from 'framer-motion'
import { useState } from "react"

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    
    <motion.div className="app"
     
      >
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <motion.div className="section"
           initial={{
            opacity: 0,
            scale:0.8 ,
            x:300,
            rotate: 40
            
          }}
          animate={{
            opacity: 1,
            scale:1,
            rotate: 0,
            x:0
            // y:0
          }}
          
          transition={{
            duration: 1.5
          }}
        >
          <Landing/>
          <Intro />
          <Project/>
          <Work />
          <Progress />
          <Profiles />
          <Contacts />
        </motion.div>
    </motion.div>
  );
}

export default App;
