// portfolio.ts

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  githubLink?: string;
  websiteLink?: string;
  css:string;
}

const portfolio: Project[] = [
  {
    id: 'project0',
    title: '2023 Bell Hackathon Project',
    description: 'Privacy & Cyber Attack: The Terms and Conditions Defender (TCD) is a privacy protection Chrome extension that employs React and Vite for the front end, with a Flask backend utilizing the OpenAI API. It is designed to shield users from potential data exposure in the event of a company being targeted by hackers.',
    imageUrl: 'legalAI.png',
    githubLink: 'https://github.com/junseo-yang/BellGeekfest2023',
    websiteLink: 'https://project1.example.com',
    css:''
  },
  {
    id: 'project1',
    title: 'Motion Tracking for Avatar',
    description: 'Aimed at revolutionizing the desktop experience of the metaverse, uses THREE.js and advanced motion tracking technology MediaPipe from Google. The end goal was to provide a highly immersive learning experience for desktop users. I implemented a system for bone interpolation that could process webcam feeds in real time, translating users\' physical movements into the digital world. ',
    imageUrl: 'motiontracking.png',
    githubLink: 'https://github.com/j1yang/face-detection',
    websiteLink: 'https://project1.example.com',
    css:'flex-row-reverse'
  },
  {
    id: 'project2',
    title: 'Arm Inverse Kinematic',
    description: 'In this innovative project, I utilized Inverse Kinematics (IK) and THREE.js to create authentic arm movements for VR avatars, delivering an immersive user experience in the webxr class. Leveraging JavaScript, I facilitated real-time calculations for intricate avatar control. By applying Euler & quaternion mathematics, I managed complex rotations, demonstrating my prowess in 3D programming.',
    imageUrl: 'vrik1.png',
    githubLink: 'https://github.com/j1yang/vr-ik',
    websiteLink: 'https://project1.example.com',
    css:''
  },
  {
    id: 'project3',
    title: 'Travel Journey with globe',
    description: 'Interactive globe with THREE.js. Users could traverse the globe, I leveraged the versatility of React to build a user-friendly front end, GSAP animations were used to enhance the UI/UX, providing visually pleasing transitions and interactive elements. The application was written in TypeScript and utilized Vite as the build tool, showcasing my proficiency in modern JavaScript frameworks and tools.',
    imageUrl: 'threetravel.png',
    githubLink: '',
    websiteLink: 'https://project1.example.com',
    css:'flex-row-reverse'
  },
  
  {
    id: 'project4',
    title: '3D Rock Paper Scissors Simulator',
    description: 'I transformed the classic Rock Paper Scissors game into an engaging 3D experience. Inspired by its 2D counterpart, the game was built using THREE.js and JavaScript, demonstrating my ability to adapt traditional gaming concepts into modern, immersive formats. This added an additional layer of depth and effectively transcended the flat.',
    imageUrl: 'rps.png',
    githubLink: 'https://github.com/j1yang/three-rock-paper-scissors',
    websiteLink: 'https://project1.example.com',
    css:''
  },
  // Add more projects as needed
];

export default portfolio;
