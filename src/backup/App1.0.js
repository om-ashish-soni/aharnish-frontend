import './App.css';
import { useState } from 'react'
import { Container } from 'react-bootstrap'
function App() {

  const [isKnowMore, setIsKnowMore] = useState(false)
  const [isAbout, setIsAbout] = useState(true)
  const [isExperience, setIsExperience] = useState(false)
  const [isSkills, setIsSkills] = useState(false)
  const [isProjects, setIsProjects] = useState(false)
  const [isEducation, setIsEducation] = useState(false)
  const [isAchievements, setIsAchievements] = useState(false)
  const [isContact, setIsContact] = useState(false)
  const [isLogin, setIsLogin] = useState(false)
  const hooks = [setIsAbout, setIsExperience, setIsSkills, setIsProjects, setIsEducation, setIsAchievements, setIsContact, setIsLogin]
  const switchToKnowMore = (e) => {
    e.preventDefault()
    setIsKnowMore(true)
  }
  const switchTo = (activeFilter) => {
    hooks.map(setFilter => {
      setFilter(false)
    })
    activeFilter(true)
  }

  return (
    <div className="App">
      {isKnowMore ?
        <>

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

          {
            isAbout ?
              <>
                <h2>HI 👋, I'm Om Ashish Soni.
                  Competitive Programmer & Software
                </h2>
                <p>
                  I am SDE Intern at Simulas.
                  <br />
                  Currently pursuing (3rd year) B.Tech Computer Engineering from Dharmsinh Desai University.
                  <br />
                  I have a good practise of Data-structure & Algorithms, C/ C++, and Python (basic).
                  <br />
                  Also, I have a knowledge of web development, created projects based on the MERN Stack, Javascript.
                  <br />
                  I am also having experince in making backend applications with Node and Express
                  <br />
                  In my free time, I like problem-solving (DSA) and math problems
                  <br />
                  I like simplicity very much and I try to keep things simple
                  <br />
                </p>
              </>
              :
              <>
              </>
          }
          {
            isExperience ?
              <>
                <h1>SDE Intern @ Simulas</h1>
                <h2>period  : May 2022 - July 2022</h2>
                <h3>mode : virtual (work from home) </h3>
                <p>
                  <li>Developed and integrated Backend api modules using nodejs and express</li>
                  <li>Working on mongodb cloud , Cron Jobs , aggregation and Send-Grid Api</li>
                </p>
              </> :
              <>
              </>
          }
          {
            isSkills ?
              <>
                <h2>Skill type : Core skills</h2>
                <li>Problem solving , Competitive coding , Object Oriented Programming , Database Management</li>

                <h2>Skill type : Programming Languages</h2>
                <li>C , C++ , Python </li>

                <h2>Skill type : Software Development</h2>
                <li>MERN Stack ( Mongodb, Express , React , Nodejs) , Firebase, React-Native</li>

                <h2>Skill type : Database </h2>
                <li>MySQL , Mongodb , SQLite</li>

                <h2>Skill type : Tools</h2>
                <li>Git , Github , VS Code , Sublime txt </li>

              </>
              :
              <>
              </>
          }
          {
            isProjects ?
              <>
                <h2>Project Name : Amazon clone web app</h2>
                <li>techs : MERN Stack , Mongodb , React , Nodejs</li>
                <p>
                  desc:

                  <li>User can buy the product.</li>

                  <li>Or also add to cart via clicking a button</li>

                  <li>We can search a product by product name or product category.</li>

                  <li> We are also having a function of selling a product via entering product image and the product details</li>

                  <li>User can also put an order contains all items in cart , by visiting cart.</li>

                  <li>All above functionalities is provided by web app</li>
                </p>

                <h2>Project Name : Youtube clone web app</h2>
                <li>techs : MERN Stack , Mongodb , React , Nodejs</li>
                <p>
                  desc:

                  <li>Feed consists of the video list

                    Each video in feed contains a minimized view of video

                    Channel name, title of video and likes.

                    Video view can be maximized or minimized</li>


                  <li>All above functionalities is provided by web app</li>
                </p>


                <h2>Project Name : Instagram clone web app</h2>
                <li>techs : MERN Stack , Mongodb , React , Nodejs</li>
                <p>
                  desc:

                  <li>In feed user will see the posts of his/her followers

                    We can upload the post

                    Post consists of media either photo or video

                    And description if any

                    Post will be displayed with user name

                    We can search other users on the app.

                    Apart from this, users can see the profiles of other users</li>


                  <li>All above functionalities is provided by web app</li>
                </p>

              </>
              :
              <>
              </>
          }

          {
            isEducation ?
              <>
                <h2>Institute : Dharmsinh Desai University</h2>
                <li>
                  <li>Study : BTech In Computer Engineering (2020 - 2024)</li>
                  <li>Marks : 9.20 / 10</li>
                  <li>location : Nadiad , Gujarat</li>

                </li>

                <h2>Institute : Shree R.G. Pandya High School</h2>
                <li>
                  <li>Study : 12Th Science HSC (2019-2020)</li>
                  <li>Marks : 91.33% (Maths , Physics , Chemistry)</li>
                  <li>location : Dabhoi ,Dt. Vadodara, Gujarat.</li>
                </li>

                <h2>Institute : Shree M.H. Dayaram Sharda Mandir</h2>
                <li>
                  <li>Study : 10Th SSC (2017-2018)</li>
                  <li>Marks : 95.17%</li>
                  <li>location : Dabhoi ,Dt. Vadodara, Gujarat.</li>
                </li>


              </>
              :
              <>
              </>
          }
          {
            isAchievements ?
              <>
                <h2>section : timeline</h2>
                <table>
                  <tr>
                    <th>Year</th><th>desc</th>
                  </tr>
                  <tr>
                    <td>2022</td>
                    <td> 5-star (2075) CodeChef highest rating </td>
                  </tr>
                  <tr>
                    <td>2022</td>
                    <td> Specialist (1418) Codeforces highest rating </td>
                  </tr>
                  <tr>
                    <td>2022</td>
                    <td>Google Code jam to IO , India Rank 197 and Global Rank 477</td>
                  </tr>
                  <tr>
                    <td>2022</td>
                    <td> Specialist (1418) Codeforces highest rating </td>
                  </tr>
                  <tr>
                    <td>2022</td>
                    <td>49th Rank in Codechef May LONG One DIV-2</td>
                  </tr>
                  <tr>
                    <td>2022</td>
                    <td>36th Rank in Codechef Starters 34 DIV-1</td>
                  </tr>
                  <tr>
                    <td>2022</td>
                    <td>48th Rank in Codechef March LONG Two DIV-1 </td>
                  </tr>
                  <tr>
                    <td>2022</td>
                    <td>Participated in kickstart 2022 </td>
                  </tr>
                  <tr>
                    <td>2021</td>
                    <td>Problem solving Basic certified on Hackerrank</td>
                  </tr>
                  <tr>
                    <td>2021</td>
                    <td>Participated in kickstart 2021 </td>
                  </tr>
                  <tr>
                    <td>2022</td>
                    <td>Solved more than 1000 problems on various coding platforms </td>
                  </tr>
                  <tr>
                    <td>2022</td>
                    <td>Solved more than 300 problems of DSA on leetcode.com </td>
                  </tr>
                </table>

                <h2>Section : coding profiles </h2>

                <div class="coding-profile bold">
                  <i class="fa fa-terminal"></i> Coding Profiles
                </div>
                <div class="mt-3">
                  <div class="coding-site">
                    {/* <img class="site-icon" src="./assets/icons/codechef.svg"/> */}
                    CodeChef
                  </div>
                  <div class="coding-link">
                    <a href="https://www.codechef.com/users/om_ashish_soni" target="_blank">
                      https://www.codechef.com/users/om_ashish_soni
                    </a>
                  </div>
                </div>
                <div class="mt-3">
                  <div class="coding-site">
                    {/* <img class="site-icon" src="./assets/icons/codeforces.svg" /> */}
                    Codeforces
                  </div>
                  <div class="coding-link">
                    <a href="https://codeforces.com/profile/om_ashish_soni" target="_blank">
                      https://codeforces.com/profile/om_ashish_soni
                    </a>
                  </div>
                </div>
                <div class="mt-3">
                  <div class="coding-site">
                    {/* <img class="site-icon" src="./assets/icons/leetcode.svg" /> */}
                    Leetcode
                  </div>
                  <div class="coding-link">
                    <a href="https://leetcode.com/Om_Ashish_Soni/" target="_blank">
                      https://leetcode.com/Om_Ashish_Soni/
                    </a>
                  </div>
                </div>
                <div class="mt-3">
                  <div class="coding-site">
                    {/* <img class="site-icon" src="./assets/icons/hackerrank.svg" /> */}
                    HackerRank
                  </div>
                  <div class="coding-link">
                    <a href="https://www.hackerrank.com/om_ashish_soni?hr_r=1" target="_blank">
                      https://www.hackerrank.com/om_ashish_soni
                    </a>
                  </div>
                </div>

                <div class="mt-3">
                  <div class="coding-site">StopStalk</div>
                  <div class="coding-link">
                    <a href="https://www.stopstalk.com/user/profile/om_ashish_soni" target="_blank">
                      https://www.stopstalk.com/user/profile/om_ashish_soni
                    </a>
                  </div>
                </div>

                <div class="mt-3">
                  <div class="coding-site">C-LIST</div>
                  <div class="coding-link">
                    <a href="https://clist.by/coder/om_ashish_soni/" target="_blank">
                      https://clist.by/coder/om_ashish_soni/
                    </a>
                  </div>
                </div>

                <hr />

              </>
              :
              <>
              </>
          }
          {
            isContact ?
              <>

                <div class="bold mobile">
                  <div class="contact-header">
                    <i class="fa fa-address-card contact-icon"></i> Contact
                  </div>
                  <hr />
                </div>

                <div>
                  <div class="contact-site">
                    <i class="fa fa-envelope"></i>
                    Email
                  </div>
                  <div class="contact-link">
                    <a href="mailto:oms279400@gmail.com" target="_blank">
                      oms279400@gmail.com
                    </a>
                  </div>
                </div>

                <div class="mt-3">
                  <div class="contact-site">
                    <i class="fa fa-github"></i>
                    Github
                  </div>
                  <div class="contact-link">
                    <a href="https://github.com/om-ashish-soni" target="_blank">
                      https://github.com/om-ashish-soni
                    </a>
                  </div>
                </div>

                <div class="mt-3">
                  <div class="contact-site">
                    <i class="fa fa-linkedin"></i>
                    Linkedin
                  </div>
                  <div class="contact-link">
                    <a href="https://www.linkedin.com/in/om-ashish-soni/" target="_blank">
                      https://www.linkedin.com/in/om-ashish-soni/
                    </a>
                  </div>
                </div>

                <div class="mt-3">
                  <div class="contact-site">
                    <i class="fa fa-instagram"></i>
                    Instagram
                  </div>
                  <div class="contact-link">
                    <a href="https://www.instagram.com/omsoni2783/" target="_blank">
                      https://www.instagram.com/omsoni2783/
                    </a>
                  </div>
                </div>
                <hr />

              </>
              :
              <>
              </>
          }
          {
            isLogin?
            <>
              <h1>this is login component</h1>
            </>
            :
            <>
            </>
          }
        </> :
        <>
          <Container>
            <div >
              <div>
                <div >Hi 👋, I'm <span>Om Ashish Soni</span></div>
                <div > Competitive Programmer & Software Developer 😀</div>
                <div><button onClick={switchToKnowMore}>know more</button></div>
              </div>
            </div>
          </Container>
        </>

      }
    </div>
  );
}

export default App;
