import React from 'react';

// 1. Import your images from the assets folder
// Make sure the file names match what is in your folder
import ceoImg from '../../../assets/ceo.jpg';
import AdityaK from '../../../assets/AdityaK.jpeg';
import nullImg from '../../../assets/null.png';
import productImg from '../../../assets/Vaibhav.jpeg';
import AdityaJha from '../../../assets/AdityaJ.jpeg';
import dakshImg from '../../../assets/Daksh.png';

// 2. Create a data array to manage content easily
const teamMembers = [
  { name: 'Mohit Yadav', role: 'GTM', college: "Ex-Spinny", img: ceoImg },
  { name: 'Sahil Kumar', role: 'AI Engineer', college: "IIT Madras", img: nullImg },
  {name: 'Milind Maula', role: 'Full Stack Engineer', college: "IIT Madras", img: nullImg },
  { name: 'Vaibhav Awasthi', role: 'Full Stack Engineer', college: "IIT Madras", img: nullImg },
  { name: 'Daksh Verma', role: 'AI Engineer', college: "IIT Madras", img: dakshImg },
  { name: 'Aditya Kaushik', role: 'Designer', college:"DTU", img: AdityaK },
  { name: 'Aditya Jha', role: 'Designer', college:"DU", img: AdityaJha },
  

];

export default function Team() {
  return (
    <section className="team" id="team">
        <span className="section-pill">Team</span>
        <h2>Meet our team</h2>

        <div className="team-row">
          <div className="arrow">‹</div>

          {/* 3. Map through the data to render cards dynamically */}
          {teamMembers.map((member, index) => (
            <div className="member" key={index}>
              <div className="avatar">
                <img src={member.img} alt={member.name} />
              </div>
              <h4>{member.name}</h4>
              <span>{member.role} | </span>
              <span>{member.college}</span>  
            </div>
          ))}

          <div className="arrow">›</div>
        </div>
      </section>
  );
};