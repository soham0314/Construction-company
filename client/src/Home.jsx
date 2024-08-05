import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PlaceIcon from '@mui/icons-material/Place';
import { BarChart } from '@mui/x-charts/BarChart';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './Home.css';
import bridgeImg from './bridge2.jpg';
import consImg from './consImg.jpg';
import roadImg from './road.jpg';
import img10 from './man.png'
import img20 from './man2.png'


function Home() {
  const [projects, setProjects] = useState(null);
  useEffect(() => {
    axios
      .get('http://localhost:3000/projects')
      .then((res) => {
        setProjects(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(projects);
  const data = [
    {
      id: 1,
      name: 'Anish Parkhi',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus vel rem nemo quos nihil ratione debitis blanditiis? Tempora maxime quibusdam accusamus voluptatem molestias. Ratione culpa ullam laboriosam incidunt. Facere, nisi.',
      position: 'Founder and CEO',
      img: img10,
    },
    {
      id: 2,
      name: 'Abhishek Tekale',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus vel rem nemo quos nihil ratione debitis blanditiis? Tempora maxime quibusdam accusamus voluptatem molestias. Ratione culpa ullam laboriosam incidunt. Facere, nisi.',
      position: 'Managing Director',
      img: img20,
    },
  ];
  return (
    <div>
      <div className="navbar">
        <div className="navLogo">
          <img className="logoImg" src={consImg} />
        </div>
        <div className="navItemsContainer">
          <ul className="navLinks">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#statistics">Statistics</a>
            </li>
            <li>
              <a href="#aboutUs">About Us</a>
            </li>
            <li>
              <a href="#ourTeam">Our Team</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mainContainer">
        <div className="subContainer">
          <div className="tagLine">
            We Are Here To Make Your Dream Come True
          </div>
          <div className="btnContainer">
            <button className="btn1">All Services</button>
            <button className="btn2">Contact Us</button>
          </div>
        </div>
        <div className="sideImage">
          <img className="bridgeImage" src={bridgeImg} />
        </div>
      </div>

      <div className="middleContainer">
        <ul className="middleList">
          <li>
            <div>2.5K+</div>
            <div>Projects Completed</div>
          </li>
          <li>
            <div>15+</div>
            <div>Years of experience</div>
          </li>
          <li>
            <div>1K+</div>
            <div>Active Clients</div>
          </li>
          <li>
            <div>100+</div>
            <div>Team Members</div>
          </li>
        </ul>
      </div>

      <div id="projects" style={{ marginTop: '5rem' }}>
        <div className="projectsTitle">Projects</div>
        <div className="hr"></div>
        <div className="cardContainerWrapper">
          {projects?.map((item, index) => {
            return (
              <div key={index} className="cardContainer">
                <div className="roundImg">
                  <img className="projectImageBig" src={item.image} />
                </div>
                <div style={{ padding: '0.4rem' }}>
                  <div className="projectTitle">{item.name}</div>
                  <div className="projectInfo">{item.description}</div>
                  <div style={{ padding: '0.2rem' }}>
                    <div style={{ fontSize: '1.3rem' }}>₹{item.cost}</div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      textAlign: 'center',
                      justifyContent: 'center',
                      padding: '0.3rem',
                    }}
                  >
                    <PlaceIcon />
                    <div style={{ fontSize: '1.2rem' }}>{item.city}</div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      textAlign: 'center',
                      justifyContent: 'center',
                      padding: '0.4rem',
                    }}
                  >
                    <CalendarMonthIcon sx={{ marginRight: '0.4rem' }} />
                    <div>{item.duration}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div id="statistics" className="statsDiv">
        <div className="aboutUsHeadline">Statistics</div>
        <div className="hr"></div>
        <div className="aboutUsMainDiv">
          <div>
            <BarChart
              xAxis={[
                {
                  scaleType: 'band',
                  data: [
                    'New Projects',
                    'Completed Projects',
                    'Ongoing Projects',
                  ],
                },
              ]}
              series={[{ data: [40, 72, 21] }]}
              width={420}
              height={400}
            />
            <div>Project Overview</div>
          </div>
          <div>
            <BarChart
              xAxis={[
                {
                  label: '* values given in crore',
                  scaleType: 'band',
                  data: ['Expenditure', 'Total Revenue', 'Net Profit'],
                },
              ]}
              series={[{ data: [110, 140, 50] }]}
              width={420}
              height={400}
            />
            <div>Finance Overview</div>
          </div>
        </div>
      </div>

      <div id="aboutUs" className="aboutUs">
        <div className="aboutUsHeadline">About Us</div>
        <div className="hr"></div>
        <div className="aboutUsMainDiv">
          <div className="ImageContainerAboutUs">
            <img className="aboutUsImage" src={roadImg} />
          </div>
          <div className="aboutUsMoreInfo">
            <div className="aboutUsSubHead">
              We Believe That If It Can Be Imagined, It Can Be Created.
            </div>
            <div style={{ fontSize: '1rem' }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, fuga
              ut? Perspiciatis, incidunt dicta? Mollitia a perferendis facere
              quisquam esse officia eius dolor, autem doloribus minima dolorum
              optio dicta excepturi.
            </div>
            <button className="learnMoreButton">Learn More</button>
          </div>
        </div>
      </div>

      <div id="ourTeam" className="teamDiv">
        <div className="aboutUsHeadline">Our Team</div>
        <div className="hr"></div>
        <div className="teamMainDiv">
          {data.map((item, index) => {
            console.log(data);
            return (
              <div key={index} className="teamMemberCard">
                <img
                  style={{ width: '30%', objectFit: 'cover' }}
                  className="profileImg"
                  src={item.img}
                />
                <div className="teamMemberName">{item.name}</div>
                <div className="teamMemberPosition">{item.position}</div>
                <div className="teamMemberDesc">{item.desc}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
