import React from 'react'
import { useState } from 'react'
import Login from '../Components/Login'
import About from '../Components/About'
import Experience from '../Components/Experience'
import Skills from '../Components/Skills'
import Projects from '../Components/Projects'
import Education from '../Components/Education'
import Achievements from '../Components/Achievements'
import Contact from '../Components/Contact'
export default function KnowMore() {

    const [isAbout, setIsAbout] = useState(true)
    const [isExperience, setIsExperience] = useState(false)
    const [isSkills, setIsSkills] = useState(false)
    const [isProjects, setIsProjects] = useState(false)
    const [isEducation, setIsEducation] = useState(false)
    const [isAchievements, setIsAchievements] = useState(false)
    const [isContact, setIsContact] = useState(false)
    const [isLogin, setIsLogin] = useState(false)
    const hooks = [setIsAbout, setIsExperience, setIsSkills, setIsProjects, setIsEducation, setIsAchievements, setIsContact, setIsLogin]
    const switchTo = (activeFilter) => {
        hooks.map(setFilter => setFilter(false))
        activeFilter(true)
    }
    return (
        <div>
            <div class="navbar">
                <a class={isAbout ? "active" : null} onClick={() => switchTo(setIsAbout)}><i class="fa fa-fw fa-home"></i> Home</a>
                <a class={isExperience ? "active" : null} onClick={() => switchTo(setIsExperience)}><i class="fa fa-fw fa-briefcase"></i> Work experince</a>
                <a class={isSkills ? "active" : null} onClick={() => switchTo(setIsSkills)}><i class="fa fa-fw fa-code"></i> Skills </a>
                <a class={isProjects ? "active" : null} onClick={() => switchTo(setIsProjects)}><i class="fa fa-fw fa-tasks"></i> Projects </a>
                <a class={isEducation ? "active" : null} onClick={() => switchTo(setIsEducation)}><i class="fa fa-fw fa-graduation-cap"></i> Education </a>
                <a class={isAchievements ? "active" : null} onClick={() => switchTo(setIsAchievements)}><i class="fa fa-fw fa-trophy"></i> Achievements </a>
                <a class={isContact ? "active" : null} onClick={() => switchTo(setIsContact)}><i class="fa fa-fw fa-envelope"></i> Contact</a>
                <a class={isLogin ? "active" : null} onClick={() => switchTo(setIsLogin)}><i class="fa fa-fw fa-user"></i> Login</a>
            </div>

            <div>
                {isAbout ? <About /> : null}
                {isExperience ? <Experience /> : null}
                {isSkills ? <Skills /> : null}
                {isProjects ? <Projects /> : null}
                {isEducation ? <Education /> : null}
                {isAchievements ? <Achievements /> : null}
                {isContact ? <Contact /> : null}
                {isLogin ? <Login /> : null}
            </div>
        </div>
    )
}
