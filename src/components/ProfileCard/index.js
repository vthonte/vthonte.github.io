import React from 'react';
import './styles.css';
import variables from '../../variables';
//import LinkTree from '../LinkTree';
import '../../neostyle.css';


const profilepic = require('../../images/profile.jpeg');

export default function ProfileCard({ icon, name, backgroundColor, link }) {
  return (
  <div class="neo_card_container">
      <link rel="stylesheet" href="style.css" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"
      integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    	<div class="card">
        <div class="card-header">
          <div class="avatar">
            <div class="user-online-indicator"></div>
            <img
              src={profilepic}
              alt="user-image"
              className="neo_glass2"
            />
          </div>
          <div className="neo_glass2 neo_padding">
          <div class="profile-name"><h1>Vishwesh Thonte</h1></div>
          <div class="profile-role">Software Developer</div>
          </div>
        </div>

        <div class="card-footer">
          <div class="social-buttons">
            <button>
              <a class="fab fa-github" href={variables.githublink}></a>
            </button>

            <button>
              <a class="fab fa-linkedin" href={variables.linkedinlink}></a>
            </button>
              {/*<button>
              <a class="fab fa-instagram" href={variables.instalink}></a>
            </button>*/}
          </div>
         
        </div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.1.1/gsap.min.js"></script>
	</div>
	</div>
  );
}
