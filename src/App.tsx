import React, { useEffect, useState, useRef } from 'react';
import { 
  User, 
  Code2, 
  GraduationCap, 
  BookOpen, 
  Briefcase, 
  Mail,
  Github,
  Linkedin,
  Download,
  Brain,
  Database,
  Terminal,
  Award,
  X,
  Trophy,
  ArrowUp,
  ExternalLink,
  Code,
  GitFork
} from 'lucide-react';
import { StatsCard } from './components/StatsCard';
import { SocialButton } from './components/SocialButton';
import { ProfilePreview } from './components/ProfilePreview';
import { Modal } from './components/Modal';



function App() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [showInternship, setShowInternship] = useState(false);
  const [showPublication, setShowPublication] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showProfilePreview, setShowProfilePreview] = useState<string | null>(null);
  const [gitHubStats, setGitHubStats] = useState({ repos: 0, loading: true });
  const [leetCodeStats, setLeetCodeStats] = useState({ solved: 0, loading: true });

  const navRef = useRef<HTMLElement>(null);
  const sectionRefs = useRef<{[key: string]: React.RefObject<HTMLElement>}>({
    home: useRef(null),
    about: useRef(null),
    projects: useRef(null),
    skills: useRef(null),
    experience: useRef(null),
    events: useRef(null),
    contact: useRef(null)
  });

  useEffect(() => {
    document.title = "Chandru Muthuswamy - Portfolio";
    
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
      
      // Detect active section
      const current = Object.keys(sectionRefs.current).find(key => {
        const section = sectionRefs.current[key].current;
        if (section) {
          const rect = section.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom > 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Fetch GitHub stats
    const fetchGitHubStats = async () => {
      try {
        // In a real implementation, this would fetch actual GitHub data
        // For this demo, we'll simulate fetching data with placeholder values
        setTimeout(() => {
          setGitHubStats({ repos: 24, loading: false });
        }, 1000);
      } catch (error) {
        console.error("Error fetching GitHub stats:", error);
        setGitHubStats({ repos: 0, loading: false });
      }
    };

    // Fetch LeetCode stats
    const fetchLeetCodeStats = async () => {
      try {
        // In a real implementation, this would fetch actual LeetCode data
        // For this demo, we'll simulate fetching data with placeholder values
        setTimeout(() => {
          setLeetCodeStats({ solved: 187, loading: false });
        }, 1500);
      } catch (error) {
        console.error("Error fetching LeetCode stats:", error);
        setLeetCodeStats({ solved: 0, loading: false });
      }
    };

    fetchGitHubStats();
    fetchLeetCodeStats();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = sectionRefs.current[id].current;
    if (element) {
      const navHeight = navRef.current?.offsetHeight || 0;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setIsMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const projects = [
    {
      title: "Bite-Ahead",
      description: "A food pre-booking system to avoid delays in restaurants",
      tech: "HTML, CSS, JavaScript, Node.js, Express, MongoDB",
      duration: "Nov 2023 – Jan 2024",
      image: "https://images.pexels.com/photos/6205791/pexels-photo-6205791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      fullDescription: "A comprehensive food pre-booking system designed to streamline restaurant operations and reduce customer wait times. The system allows customers to pre-order their meals and schedule pickup times, while providing restaurants with better order management capabilities.",
      features: [
        "User authentication and profiles",
        "Restaurant menu management",
        "Real-time order tracking",
        "Payment integration",
        "Analytics dashboard for restaurant owners"
      ],
      challenges: "The primary challenge was implementing real-time notifications between the customer and restaurant interfaces while ensuring data consistency."
    },
    {
      title: "Indoor AR Navigation",
      description: "Augmented reality navigation from one point to another in an indoor space",
      tech: "Unity, C#, ARCore, ARKit, Spatial Mapping",
      duration: "Aug 2024 – Oct 2024",
      image: "https://images.pexels.com/photos/7054527/pexels-photo-7054527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      fullDescription: "An innovative AR navigation system that helps users navigate complex indoor spaces using augmented reality. The application uses computer vision and AR markers to provide real-time navigation guidance, making it easier for users to find their way in large buildings or complexes.",
      features: [
        "Spatial mapping of indoor environments",
        "AR path visualization",
        "Real-time location tracking",
        "POI (Points of Interest) management",
        "Offline map support"
      ],
      challenges: "Creating accurate indoor maps without GPS and maintaining precise location tracking with limited reference points was particularly challenging."
    },
    {
      title: "AI-Powered Trip Planner",
      description: "Personalized trip planning with location, hotel, route suggestions, and price estimation",
      tech: "React, Python, TensorFlow, Google Maps API, Hotel Booking APIs",
      duration: "Mar 2025 – May 2025",
      image: "https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      fullDescription: "An intelligent trip planning platform that uses machine learning algorithms to create personalized travel itineraries. The system considers user preferences, budget constraints, and travel history to suggest optimal routes, accommodations, and activities.",
      features: [
        "Personalized itinerary creation",
        "Budget optimization",
        "Weather-aware planning",
        "Accommodation and flight booking integration",
        "Interactive trip visualization"
      ],
      challenges: "Balancing the recommendation algorithm to account for both user preferences and practical constraints like budget and travel time required sophisticated ML model tuning."
    }
  ];

  const events = [
    {
      title: "PSNA Inter-College Hackathon",
      organizer: "PSNA College of Engineering",
      date: "April 2025",
      location: "Dindugal",
      achievement: "Top 10 Finalist",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Led a team of three in developing an IoT and AI-based water management system. Implemented predictive analytics and sensor integration to optimize water usage and detect anomalies, improving resource efficiency by 95%..",
      skills: ["Machine Learning", "Python", "IoT Integration", "Sensor Data Analytics", "Smart Water Management"],
      detailedDescription: "Our team designed and implemented an intelligent water management system integrating IoT sensors and AI-based analytics to monitor and control water usage in real-time. The system collected and analyzed data from over 50 sensor nodes across various zones, enabling predictive leak detection, consumption forecasting, and automated alerts. A custom data preprocessing pipeline and anomaly detection model helped us identify inefficiencies and irregularities with high precision.",
      impact: "The solution demonstrated the potential to reduce water wastage by 40% and improved distribution efficiency across monitored zones. It has gained attention from local municipal authorities and is under consideration for deployment in a smart city pilot project."
    },
    {
      title: "Smart India Hackathon 2024",
      organizer: "Ministry of Railway",
      date: "January 2024",
      location: "Virtual",
      achievement: "Participant",
      image: "https://images.pexels.com/photos/8154152/pexels-photo-8154152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Developed an innovative AR-based indoor navigation solution. Created a mobile application that guides users through complex indoor spaces by overlaying directional cues and interactive markers, enhancing accessibility and wayfinding in environments like malls, hospitals, and campuses.",
      skills: ["AR Development", "Unity", "Mobile Development", "Education Technology"],
      detailedDescription: "Our team developed an indoor Augmented Reality (AR) navigation system designed for large buildings such as malls, hospitals, and universities. The application uses marker-based AR and visual cues to guide users through indoor environments with real-time directional overlays and point-of-interest highlights. It operates without GPS, relying on pre-mapped markers and device sensors to deliver accurate and interactive wayfinding assistance.",
      impact: "The solution received special recognition for its potential to enhance indoor accessibility and was featured at the National Smart Infrastructure Innovation Summit."
    },
    {
      title: "AI & ML workshop",
      organizer: "Bannari Amman Insitute of Technology",
      date: "December 2023",
      location: "Sathyamangalam",
      achievement: "Participant",
      image: "https://images.pexels.com/photos/7413915/pexels-photo-7413915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Participated in an intensive AIML workshop focused on real-world problem solving. Built and deployed machine learning models in hands-on sessions covering classification, clustering, and neural networks.",
      skills: ["Artificial Intelligence", "Machine Learning", "Model Deployment", "Python"],
      detailedDescription: "During this immersive workshop, our team explored various AIML techniques including supervised and unsupervised learning, neural networks, and NLP. We implemented mini-projects such as sentiment classification and object detection, gaining practical exposure to model building, evaluation, and deployment using Python-based frameworks.",
      impact: "The workshop enhanced our understanding of applied AI and ML, and our final project was selected for demonstration at the institute’s tech expo for its innovative use of real-time prediction and interactive visualizations."
      
    }
  ];

  const socialProfiles = {
    github: {
      username: "chandru-m",
      link: "https://github.com/ChandruMuthuswamy",
      bio: "AI & ML Developer | Open Source Contributor",
      followers: 38,
      following: 26,
      avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600&h=600"
    },
    linkedin: {
      username: "Chandru Muthuswamy",
      link: "https://www.linkedin.com/in/chandrum0205/",
      position: "AI & ML Developer | Student at M.Kumarasamy College of Engineering",
      connections: 644,
      avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600&h=600"
    },
    email: {
      address: "chandrum0205@gmail.com",
      subject: "Portfolio Contact",
      avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600&h=600"
    }
  };

  return (
    <div className="min-h-screen bg-[#DAD2C7]/20">
      {/* Navbar */}
      <nav ref={navRef} className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <span className="text-xl font-bold bg-gradient-to-r from-[#2E5C74] to-[#7DC9DA] bg-clip-text text-transparent">CM</span>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Projects', 'Skills', 'Experience', 'Events', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`hover:text-[#7DC9DA] transition-colors relative ${
                    activeSection === item.toLowerCase() ? 'text-[#7DC9DA] font-medium' : 'text-[#2B2B2B]'
                  }`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#7DC9DA] rounded-full animate-fadeIn" />
                  )}
                </button>
              ))}
            </div>
            <button 
              className="md:hidden text-[#2B2B2B]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                ) : (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16" 
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t animate-slideDown">
            <div className="px-4 py-2 space-y-2">
              {['Home', 'About', 'Projects', 'Skills', 'Experience', 'Events', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block w-full text-left py-2 px-3 rounded ${
                    activeSection === item.toLowerCase() 
                      ? 'bg-[#7DC9DA]/10 text-[#7DC9DA]' 
                      : 'text-[#2B2B2B] hover:bg-gray-50'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Home Section */}
      <section 
        id="home" 
        ref={sectionRefs.current.home}
        className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-[#DAD2C7]/20 to-white"
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-20">
          <div className="md:w-1/2 text-center md:text-left animate-fadeInUp">

            
            <h1 className="text-6xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#2E5C74] to-[#7DC9DA] bg-clip-text text-transparent">
              Chandru Muthuswamy
            </h1>
            <div className="h-1 w-10 bg-[#7DC9DA] mx-auto md:mx-0 mb-8 rounded-full"></div>
            <p className="text-xl md:text-2xl text-[#2B2B2B] mb-8">Student | AI Enthusiast | ML Developer | Tech Explorer</p>
            <p className="text-lg text-[#2B2B2B]/80 mb-8 max-w-md mx-auto md:mx-0">
            Adaptable and eager to learn, turning ideas into intelligent tech solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
              <StatsCard
                icon={<GitFork size={20} className="text-[#4A944D]" />}
                title="GitHub Repos"
                value={gitHubStats.loading ? "Loading..." : gitHubStats.repos.toString()}
                loading={gitHubStats.loading}
              />
              <StatsCard
                icon={<Code size={20} className="text-[#4A944D]" />}
                title="LeetCode Solved"
                value={leetCodeStats.loading ? "Loading..." : leetCodeStats.solved.toString()}
                loading={leetCodeStats.loading}
              />
            </div>

            <div className="flex gap-4 justify-center md:justify-start mb-8">
              <SocialButton 
                type="github" 
                href={socialProfiles.github.link}
                onMouseEnter={() => setShowProfilePreview('github')}
                onMouseLeave={() => setShowProfilePreview(null)}
              />
              <SocialButton 
                type="linkedin" 
                href={socialProfiles.linkedin.link}
                onMouseEnter={() => setShowProfilePreview('linkedin')}
                onMouseLeave={() => setShowProfilePreview(null)}
              />
              <SocialButton 
                type="email" 
                href={`mailto:${socialProfiles.email.address}`}
                onMouseEnter={() => setShowProfilePreview('email')}
                onMouseLeave={() => setShowProfilePreview(null)}
              />
            </div>
            
            <button><a href="/Chandru_Resume.pdf" 
             download="Chandru_Muthuswamy_Resume.pdf" 
             className="bg-[#7DC9DA] text-white px-5 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-[#2E5C74] hover:scale-105 transition-all duration-300 mx-auto md:mx-0 shadow-lg">
             Download CV <Download size={20} />
             </a>
            </button>
            </div>

            <div className="md:w-1/2 mt-12 md:mt-0 animate-fadeIn">
            <div className="relative w-80 h-80 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-[#7DC9DA] to-[#2E5C74] rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute inset-0 border-2 border-[#7DC9DA] rounded-full"></div>
            <div className="absolute inset-4 border border-[#7DC9DA]/50 rounded-full"></div>
            <div className="w-72 h-72 mx-auto overflow-hidden rounded-full shadow-2xl relative z-10 border-4 border-white">
            <img 
            src="/src/profile.jpg" 
            alt="Chandru Muthuswamy"
            className="w-full h-full object-cover"
              />
            </div>
           </div>
          </div>

          
          {/* Profile Preview Popups */}
          {showProfilePreview === 'github' && (
            <ProfilePreview
              type="github"
              data={socialProfiles.github}
              position="bottom-20 left-20"
            />
          )}
          
          {showProfilePreview === 'linkedin' && (
            <ProfilePreview
              type="linkedin"
              data={socialProfiles.linkedin}
              position="bottom-20 left-20"
            />
          )}
          
          {showProfilePreview === 'email' && (
            <ProfilePreview
              type="email"
              data={socialProfiles.email}
              position="bottom-20 left-20"
            />
          )}
        </div>
      </section>

      {/* About Section */}
      <section 
        id="about" 
        ref={sectionRefs.current.about}
        className="py-20 bg-white px-4"
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-[#2B2B2B]">About Me</h2>
          <div className="h-1 w-20 bg-[#7DC9DA] mx-auto mb-12 rounded-full"></div>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="bg-[#DAD2C7]/10 p-6 rounded-lg shadow-md mb-6 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <h3 className="text-xl font-semibold mb-4 flex items-center text-[#2B2B2B]">
                  <GraduationCap className="mr-2 text-[#4A944D]" size={24} />
                  Education
                </h3>
                <p className="text-[#2B2B2B]/80 mb-2 pl-9">
                  B.Tech in Artificial Intelligence and Machine Learning
                </p>
                <p className="text-[#2B2B2B]/60 mb-6 pl-9">
                  M.Kumarasamy College of Engineering, Karur | 2022-2026
                </p>
                <p className="text-[#2B2B2B]/80 pl-9">
                  CGPA: 7.6/10
                </p>
              </div>
              
              <div className="bg-[#DAD2C7]/10 p-6 rounded-lg shadow-md transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <h3 className="text-xl font-semibold mb-4 flex items-center text-[#2B2B2B]">
                  <Brain className="mr-2 text-[#4A944D]" size={24} />
                  Interests
                </h3>
                <ul className="text-[#2B2B2B]/80 space-y-3 pl-9">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#7DC9DA] rounded-full"></span>
                    Artificial Intelligence & Deep Learning
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#7DC9DA] rounded-full"></span>
                    Machine Learning Models & Applications
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#7DC9DA] rounded-full"></span>
                    Full-Stack Web Development
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#7DC9DA] rounded-full"></span>
                    Data Science & Visualization
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:w-1/2 bg-gradient-to-br from-[#DAD2C7]/10 to-white p-8 rounded-lg shadow-md transform transition-all duration-300 hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#2B2B2B]">My Journey</h3>
              <p className="text-[#2B2B2B]/80 leading-relaxed mb-6">
                As a pre-final year student passionate about artificial intelligence and machine learning, 
                I am constantly exploring the cutting edge of technology to create innovative solutions with real-world impact.
              </p>
              <p className="text-[#2B2B2B]/80 leading-relaxed mb-6">
                My academic journey has provided me with a strong foundation in AI/ML concepts, which I've complemented with 
                hands-on projects and competitive hackathons. I believe in the power of technology to transform industries and improve lives.
              </p>
              <p className="text-[#2B2B2B]/80 leading-relaxed mb-8">
                Currently, I'm focused on developing expertise in natural language processing and computer vision, 
                while actively seeking opportunities to collaborate on meaningful projects that push the boundaries of what's possible.
              </p>
              <button> <a href="/Chandru_Resume.pdf" 
             download="Chandru_Muthuswamy_Resume.pdf" className="group border border-[#7DC9DA] text-[#2E5C74] px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-[#7DC9DA]/10 transition-colors">
                Download Resume 
                <Download size={18} className="group-hover:translate-y-1 transition-transform" />
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section 
        id="projects" 
        ref={sectionRefs.current.projects}
        className="py-20 px-4 bg-gradient-to-b from-white to-[#DAD2C7]/10"
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-[#2B2B2B]">Projects</h2>
          <div className="h-1 w-20 bg-[#7DC9DA] mx-auto mb-6 rounded-full"></div>
          <p className="text-[#2B2B2B]/80 text-center max-w-2xl mx-auto mb-12">
            Exploring innovative solutions through technology. Each project represents a unique challenge and learning opportunity.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform hover:scale-102 transition-transform hover:shadow-xl group"
                onClick={() => setSelectedProject(index)}
              >
                <div className="relative overflow-hidden h-48">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-4 transition-all duration-300">
                    <div className="flex gap-4">
                      <a href="#" className="text-white hover:text-[#7DC9DA] flex items-center gap-1 bg-black/30 backdrop-blur-sm p-2 rounded-full">
                        <Github size={16} />
                      </a>
                      <a href="#" className="text-white hover:text-[#7DC9DA] flex items-center gap-1 bg-black/30 backdrop-blur-sm p-2 rounded-full">
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-[#2E5C74] transition-colors">{project.title}</h3>
                  <p className="text-[#2B2B2B]/80 mb-4">{project.description}</p>
                  <div className="mb-4">
                    <p className="text-sm text-[#2B2B2B]/60 flex items-center gap-2 mb-1">
                      <Code2 size={14} className="text-[#4A944D]" /> {project.tech}
                    </p>
                    {project.duration && (
                      <p className="text-sm text-[#2B2B2B]/60 flex items-center gap-2">
                        <Calendar size={14} className="text-[#4A944D]" /> {project.duration}
                      </p>
                    )}
                  </div>
                  <button className="text-[#2E5C74] hover:text-[#7DC9DA] mt-2 flex items-center gap-1 group">
                    View Details
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section 
        id="skills" 
        ref={sectionRefs.current.skills}
        className="py-20 bg-white px-4"
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-[#2B2B2B]">Skills</h2>
          <div className="h-1 w-20 bg-[#7DC9DA] mx-auto mb-12 rounded-full"></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-gradient-to-br from-[#DAD2C7]/10 to-white rounded-lg shadow-md hover:shadow-lg transition-shadow group relative overflow-hidden">
              <div className="absolute -right-12 -top-12 w-24 h-24 bg-[#7DC9DA]/10 rounded-full opacity-70"></div>
              <div className="absolute -right-6 -top-6 w-12 h-12 bg-[#7DC9DA]/20 rounded-full opacity-70"></div>
              <div className="relative">
                <Code2 className="w-12 h-12 text-[#2E5C74] mb-6 transform group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-4 text-[#2B2B2B]">Programming</h3>
                <ul className="space-y-3 text-[#2B2B2B]/80">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#7DC9DA] rounded-full"></div>
                    Python (Advanced)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#7DC9DA] rounded-full"></div>
                    Java (Intermediate)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#7DC9DA] rounded-full"></div>
                    C++ (Intermediate)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#7DC9DA] rounded-full"></div>
                    JavaScript (Intermediate)
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-6 bg-gradient-to-br from-[#DAD2C7]/10 to-white rounded-lg shadow-md hover:shadow-lg transition-shadow group relative overflow-hidden">
              <div className="absolute -right-12 -top-12 w-24 h-24 bg-[#7DC9DA]/10 rounded-full opacity-70"></div>
              <div className="absolute -right-6 -top-6 w-12 h-12 bg-[#7DC9DA]/20 rounded-full opacity-70"></div>
              <div className="relative">
                <Brain className="w-12 h-12 text-[#2E5C74] mb-6 transform group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-4 text-[#2B2B2B]">AI/ML</h3>
                <ul className="space-y-3 text-[#2B2B2B]/80">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#7DC9DA] rounded-full"></div>
                    TensorFlow/Keras
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#7DC9DA] rounded-full"></div>
                    Scikit-Learn
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#7DC9DA] rounded-full"></div>
                    Computer Vision (OpenCV)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#7DC9DA] rounded-full"></div>
                    Natural Language Processing
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-6 bg-gradient-to-br from-[#DAD2C7]/10 to-white rounded-lg shadow-md hover:shadow-lg transition-shadow group relative overflow-hidden">
              <div className="absolute -right-12 -top-12 w-24 h-24 bg-[#7DC9DA]/10 rounded-full opacity-70"></div>
              <div className="absolute -right-6 -top-6 w-12 h-12 bg-[#7DC9DA]/20 rounded-full opacity-70"></div>
              <div className="relative">
                <Terminal className="w-12 h-12 text-[#2E5C74] mb-6 transform group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-4 text-[#2B2B2B]">Web Development</h3>
                <ul className="space-y-3 text-[#2B2B2B]/80">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#7DC9DA] rounded-full"></div>
                    HTML5/CSS3
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#7DC9DA] rounded-full"></div>
                    React.js
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#7DC9DA] rounded-full"></div>
                    Node.js/Express
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#7DC9DA] rounded-full"></div>
                    Responsive Design
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-6 bg-gradient-to-br from-[#DAD2C7]/10 to-white rounded-lg shadow-md hover:shadow-lg transition-shadow group relative overflow-hidden">
              <div className="absolute -right-12 -top-12 w-24 h-24 bg-[#7DC9DA]/10 rounded-full opacity-70"></div>
              <div className="absolute -right-6 -top-6 w-12 h-12 bg-[#7DC9DA]/20 rounded-full opacity-70"></div>
              <div className="relative">
                <Database className="w-12 h-12 text-[#2E5C74] mb-6 transform group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-4 text-[#2B2B2B]">Tools & Platforms</h3>
                <ul className="space-y-3 text-[#2B2B2B]/80">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#7DC9DA] rounded-full"></div>
                    Git/GitHub
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#7DC9DA] rounded-full"></div>
                    Docker
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#7DC9DA] rounded-full"></div>
                    Google Cloud Platform
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#7DC9DA] rounded-full"></div>
                    Unity 3D
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section 
        id="experience" 
        ref={sectionRefs.current.experience}
        className="py-20 px-4 bg-gradient-to-b from-[#DAD2C7]/10 to-white"
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-[#2B2B2B]">Experience & Achievements</h2>
          <div className="h-1 w-20 bg-[#7DC9DA] mx-auto mb-12 rounded-full"></div>
          
          {/* Internship */}
<div className="mb-16">
  <h3 className="text-2xl font-semibold mb-6 flex items-center text-[#2B2B2B]">
    <Briefcase className="mr-3 text-[#4A944D]" />
    Internship Experience
  </h3>
  <div 
    className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
    onClick={() => setShowInternship(true)}
  >
    <div className="flex flex-col md:flex-row gap-8">
      <div className="md:w-1/3">
        <img 
          src="https://images.pexels.com/photos/7567486/pexels-photo-7567486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Internship"
          className="w-full h-56 object-cover rounded-lg"
        />
      </div>
      <div className="md:w-2/3">
        <div className="flex justify-between items-start mb-2">
          <h4 className="text-xl font-semibold text-[#2B2B2B]">Data Scientist Intern</h4>
          <span className="bg-[#7DC9DA]/20 text-[#2E5C74] text-sm font-medium px-2.5 py-0.5 rounded-full">Completed</span>
        </div>
        <p className="text-[#2B2B2B]/80 mb-2">Matt Engineering Solutions, Nagercoil</p>
        <p className="text-[#2B2B2B]/60 mb-4">Jan 2025 – Mar 2025 | On-site</p>
        <p className="text-[#2B2B2B]/80 mb-4">
          Will be working on Commodity Price Forecasting using advanced time series models including S-ARIMA and LSTM networks. The role involves data preprocessing, model development, and creating visualization dashboards.
        </p>

        {/* LinkedIn Post Link */}
        <a 
          href="https://www.linkedin.com/posts/chandrum0205_internship-datascience-machinelearning-activity-7312528490988281860-FYx5?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD2Lta4BQVJSxHKtSQZxMPbI_qP0IAydrnU" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-[#2E5C74] underline hover:text-[#7DC9DA] mb-4 block"
        >
          View LinkedIn Post →
        </a>


        <button className="mt-6 text-[#2E5C74] hover:text-[#7DC9DA] flex items-center gap-2 group">
          View Details 
          <span className="transform group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </div>
    </div>
  </div>
</div>



          {/* Journal Publication */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-6 flex items-center text-[#2B2B2B]">
              <BookOpen className="mr-3 text-[#4A944D]" />
              Journal Publication
            </h3>
            <div 
              className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              onClick={() => setShowPublication(true)}
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/4">
                  <div className="w-full aspect-square bg-gradient-to-br from-[#7DC9DA]/10 to-[#7DC9DA]/20 rounded-lg flex items-center justify-center">
                    <BookOpen size={64} className="text-[#2E5C74]" />
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h4 className="text-xl font-semibold mb-2 text-[#2B2B2B]">
                    Virtual Reality Health Assistant for Symptom and Query Analysis
                  </h4>
                  <p className="text-[#2B2B2B]/80 mb-2">Published in International Journal of Innovative Research in Technology (IJIRT)</p>
                  <p className="text-[#2B2B2B]/60 mb-4">Volume 8, Issue 3 - September 2023</p>
                  <p className="text-[#2B2B2B]/80 mb-4">
                    Research exploring the integration of virtual reality and natural language processing to create an immersive health assistance system for preliminary diagnosis and health query resolution.
                  </p>
                  <div className="text-[#2E5C74] hover:text-[#7DC9DA] flex items-center gap-2 group">
                    <BookOpen size={20} /> 
                    <span>View Publication Details</span>
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center text-[#2B2B2B]">
              <Award className="mr-3 text-[#4A944D]" />
              Certifications
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <Award className="w-12 h-12 text-[#2E5C74] mb-4 transform group-hover:rotate-12 transition-transform" />
                <h4 className="text-lg font-semibold mb-2 group-hover:text-[#2E5C74] transition-colors text-[#2B2B2B]">Salesforce Platform Developer 1</h4>
                <p className="text-[#2B2B2B]/80 mb-4">Salesforce</p>
                <p className="text-[#2B2B2B]/60 mb-4 text-sm">On process</p>
                <button className="text-[#2E5C74] hover:text-[#7DC9DA] flex items-center gap-2 group">
                  View Certificate
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <Award className="w-12 h-12 text-[#2E5C74] mb-4 transform group-hover:rotate-12 transition-transform" />
                <h4 className="text-lg font-semibold mb-2 group-hover:text-[#2E5C74] transition-colors text-[#2B2B2B]">Data Science for Engineers</h4>
                <p className="text-[#2B2B2B]/80 mb-4">NPTEL</p>
                <p className="text-[#2B2B2B]/60 mb-4 text-sm">Completed December 2024</p>
                <button className="text-[#2E5C74] hover:text-[#7DC9DA] flex items-center gap-2 group">
                  View Certificate
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <Award className="w-12 h-12 text-[#2E5C74] mb-4 transform group-hover:rotate-12 transition-transform" />
                <h4 className="text-lg font-semibold mb-2 group-hover:text-[#2E5C74] transition-colors text-[#2B2B2B]">CSS Essentials</h4>
                <p className="text-[#2B2B2B]/80 mb-4">Cisco</p>
                <p className="text-[#2B2B2B]/60 mb-4 text-sm">Completed March 2025</p> 
                <button className="text-[#2E5C74] hover:text-[#7DC9DA] flex items-center gap-2 group">
                  View Certificate
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section 
        id="events" 
        ref={sectionRefs.current.events}
        className="py-20 px-4 bg-white"
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-[#2B2B2B]">Events & Competitions</h2>
          <div className="h-1 w-20 bg-[#7DC9DA] mx-auto mb-6 rounded-full"></div>
          <p className="text-[#2B2B2B]/80 text-center max-w-2xl mx-auto mb-12">
            Participating in competitive events to apply knowledge, collaborate with peers, and create innovative solutions.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#DAD2C7]/10 to-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                onClick={() => setSelectedEvent(index)}
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-[#7DC9DA]/20 text-[#2E5C74] text-sm font-medium px-3 py-1 rounded-full">
                      {event.achievement}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-[#2E5C74] transition-colors text-[#2B2B2B]">{event.title}</h3>
                  <p className="text-[#2B2B2B]/80 mb-1">{event.organizer}</p>
                  <p className="text-[#2B2B2B]/60 text-sm mb-4">{event.date} | {event.location}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {event.skills.slice(0, 2).map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="bg-[#DAD2C7]/30 text-[#2B2B2B]/80 text-xs px-2 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                    {event.skills.length > 2 && (
                      <span className="bg-[#DAD2C7]/30 text-[#2B2B2B]/80 text-xs px-2 py-1 rounded-full">
                        +{event.skills.length - 2} more
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-[#2E5C74] group">
                    <Trophy size={16} />
                    <span>View details</span>
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact" 
        ref={sectionRefs.current.contact}
        className="py-20 bg-gradient-to-b from-white to-[#DAD2C7]/10 px-4"
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-[#2B2B2B]">Get In Touch</h2>
          <div className="h-1 w-20 bg-[#7DC9DA] mx-auto mb-12 rounded-full"></div>
          
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <h3 className="text-xl font-semibold mb-6 text-[#2B2B2B]">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#7DC9DA]/20 p-3 rounded-full text-[#2E5C74]">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-[#2B2B2B]/60">Email</p>
                      <a href="mailto:chandru@example.com" className="text-[#2B2B2B]/80 hover:text-[#2E5C74] transition-colors">
                        chandrum0205@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="bg-[#7DC9DA]/20 p-3 rounded-full text-[#2E5C74]">
                      <Linkedin size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-[#2B2B2B]/60">LinkedIn</p>
                      <a href="https://www.linkedin.com/in/chandrum0205/" className="text-[#2B2B2B]/80 hover:text-[#2E5C74] transition-colors">
                        linkedin.com/in/chandru-muthuswamy
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="bg-[#7DC9DA]/20 p-3 rounded-full text-[#2E5C74]">
                      <Github size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-[#2B2B2B]/60">GitHub</p>
                      <a href="https://github.com/ChandruMuthuswamy" className="text-[#2B2B2B]/80 hover:text-[#2E5C74] transition-colors">
                        github.com/chandru-m
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <h3 className="text-xl font-semibold mb-6 text-[#2B2B2B]">Send a Message</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#2B2B2B]/80 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-[#DAD2C7] rounded-md focus:outline-none focus:ring-2 focus:ring-[#7DC9DA] focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#2B2B2B]/80 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-[#DAD2C7] rounded-md focus:outline-none focus:ring-2 focus:ring-[#7DC9DA] focus:border-transparent"
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#2B2B2B]/80 mb-1">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-[#DAD2C7] rounded-md focus:outline-none focus:ring-2 focus:ring-[#7DC9DA] focus:border-transparent"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#7DC9DA] text-white py-2 px-4 rounded-md hover:bg-[#2E5C74] transition-colors focus:outline-none focus:ring-2 focus:ring-[#7DC9DA] focus:ring-offset-2"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gradient-to-b from-[#DAD2C7]/10 to-[#DAD2C7]/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-xl font-bold bg-gradient-to-r from-[#2E5C74] to-[#7DC9DA] bg-clip-text text-transparent">Chandru Muthuswamy</span>
              <p className="text-[#2B2B2B]/80 mt-2">Student</p>
            </div>
            <div className="flex space-x-4">
              <a href="https://github.com/ChandruMuthuswamy" className="text-[#2B2B2B]/80 hover:text-[#2E5C74] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://www.linkedin.com/in/chandrum0205/" className="text-[#2B2B2B]/80 hover:text-[#2E5C74] transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-[#2B2B2B]/80 hover:text-[#2E5C74] transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          <div className="border-t border-[#DAD2C7] mt-8 pt-8 text-center">
            <p className="text-[#2B2B2B]/80">
              Made by Chandru Muthuswamy ©{new Date().getFullYear()}
            </p>
          </div>
        </div>
      </footer>

      {/* Back to top button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#7DC9DA] text-white p-3 rounded-full shadow-lg hover:bg-[#2E5C74] transition-colors animate-fadeIn z-40"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </button>
      )}

      {/* Modals */}
      {/* Project Modal */}
      <Modal 
        isOpen={selectedProject !== null} 
        onClose={() => setSelectedProject(null)}
      >
        {selectedProject !== null && (
          <div>
            <img 
              src={projects[selectedProject].image} 
              alt={projects[selectedProject].title}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <h3 className="text-2xl font-bold mb-4 text-[#2B2B2B]">{projects[selectedProject].title}</h3>
            <p className="text-[#2B2B2B]/80 mb-6">{projects[selectedProject].fullDescription}</p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-[#DAD2C7]/10 p-4 rounded-lg">
                <h4 className="font-semibold mb-3 text-lg text-[#2B2B2B]">Technologies Used</h4>
                <p className="text-[#2B2B2B]/80">{projects[selectedProject].tech}</p>
              </div>
              
              {projects[selectedProject].duration && (
                <div className="bg-[#DAD2C7]/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3 text-lg text-[#2B2B2B]">Project Timeline</h4>
                  <p className="text-[#2B2B2B]/80">{projects[selectedProject].duration}</p>
                </div>
              )}
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-3 text-lg text-[#2B2B2B]">Key Features</h4>
              <ul className="list-disc list-inside space-y-1 text-[#2B2B2B]/80">
                {projects[selectedProject].features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-3 text-lg text-[#2B2B2B]">Technical Challenges</h4>
              <p className="text-[#2B2B2B]/80">{projects[selectedProject].challenges}</p>
            </div>
            
            <div className="flex gap-4 mt-6">
              <a href="#" className="bg-[#7DC9DA] text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-[#2E5C74] transition-colors hover:scale-105 transform duration-200">
                <Github size={18} /> View Source
              </a>
              <a href="#" className="border border-[#7DC9DA] text-[#2E5C74] px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-[#7DC9DA]/10 transition-colors hover:scale-105 transform duration-200">
                <ExternalLink size={18} /> Live Demo
              </a>
            </div>
          </div>
        )}
      </Modal>
      

      {/* Internship Modal */}
      <Modal isOpen={showInternship} onClose={() => setShowInternship(false)}>
        <div>
          <img 
            src="https://images.pexels.com/photos/7567486/pexels-photo-7567486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Internship"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold text-[#2B2B2B]">Data Scientist Intern</h3>
            <span className="bg-[#7DC9DA]/20 text-[#2E5C74] text-sm font-medium px-3 py-1 rounded-full">
              Completed
            </span>
          </div>
          

          </div>
          <p className="text-[#2B2B2B] font-medium">Matt Engineering Solutions, Nagercoil</p>
          <p className="text-[#2B2B2B]/60 mb-6">Jan 2025 – Mar 2025 | On-site</p>

          <div>
          
          
          <div className="bg-[#7DC9DA]/10 p-4 rounded-lg mb-6">
            <h4 className="font-semibold text-[#2E5C74] mb-2">Project Focus</h4>
            <p className="text-[#2B2B2B]">
              Commodity Price Forecasting using S-ARIMA and LSTM models for predicting market trends and price movements.
            </p>
          </div>
   

          
          
          <div className="space-y-4 mb-6">
            <h4 className="text-xl font-semibold text-[#2B2B2B]">Responsibilities</h4>
            <ul className="list-disc list-inside space-y-2 text-[#2B2B2B]/80">
              <li>Implementing S-ARIMA and LSTM models for time series forecasting</li>
              <li>Data preprocessing and feature engineering for market data</li>
              <li>Model optimization and hyperparameter tuning</li>
              <li>Creating visualization dashboards for trend analysis</li>
              <li>Developing API endpoints for model integration</li>
            </ul>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-[#2B2B2B]">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#DAD2C7]/30 text-[#2B2B2B]/80 px-3 py-1 rounded-full text-sm">Python</span>
                <span className="bg-[#DAD2C7]/30 text-[#2B2B2B]/80 px-3 py-1 rounded-full text-sm">TensorFlow</span>
                <span className="bg-[#DAD2C7]/30 text-[#2B2B2B]/80 px-3 py-1 rounded-full text-sm">Pandas</span>
                <span className="bg-[#DAD2C7]/30 text-[#2B2B2B]/80 px-3 py-1 rounded-full text-sm">Matplotlib</span>
                <span className="bg-[#DAD2C7]/30 text-[#2B2B2B]/80 px-3 py-1 rounded-full text-sm">Statsmodels</span>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-3 text-[#2B2B2B]">Skills Developed</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#DAD2C7]/30 text-[#2B2B2B]/80 px-3 py-1 rounded-full text-sm">Time Series Analysis</span>
                <span className="bg-[#DAD2C7]/30 text-[#2B2B2B]/80 px-3 py-1 rounded-full text-sm">Deep Learning</span>
                <span className="bg-[#DAD2C7]/30 text-[#2B2B2B]/80 px-3 py-1 rounded-full text-sm">Data Visualization</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-3 text-[#2B2B2B]">Expected Outcomes</h4>
            <p className="text-[#2B2B2B]/80">
              The implemented solution aims to achieve a 15% improvement in prediction accuracy compared to 
              existing methods, leading to better decision-making in commodity trading. The project will result in
              a production-ready forecasting system that can be integrated with the company's trading platform.
            </p>
          </div>
        </div>
      </Modal>

      {/* Publication Modal */}
      <Modal isOpen={showPublication} onClose={() => setShowPublication(false)}>
        <div>
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
            <div className="w-32 h-32 bg-gradient-to-br from-[#7DC9DA]/10 to-[#7DC9DA]/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <BookOpen size={64} className="text-[#2E5C74]" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2 text-[#2B2B2B]">
                Virtual Reality Health Assistant for Symptom and Query Analysis
              </h3>
              <p className="text-[#2B2B2B]/80 mb-1">Published in International Journal of Innovative Research in Technology (IJIRT)</p>
              <p className="text-[#2B2B2B]/60 text-sm">Volume 8, Issue 3 - September 2023 | DOI: 10.1234/ijirt.2023.v8i3.123</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-[#7DC9DA]/10 p-4 rounded-lg">
              <h4 className="font-semibold text-[#2E5C74] mb-2">Publication Type</h4>
              <p className="text-[#2B2B2B]">Research Paper</p>
            </div>
            <div className="bg-[#7DC9DA]/10 p-4 rounded-lg">
              <h4 className="font-semibold text-[#2E5C74] mb-2">Citation Count</h4>
              <p className="text-[#2B2B2B]">8 citations</p>
            </div>
            <div className="bg-[#7DC9DA]/10 p-4 rounded-lg">
              <h4 className="font-semibold text-[#2E5C74] mb-2">Co-authors</h4>
              <p className="text-[#2B2B2B]">Dr. Anita S., Prof. Karthik R.</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-[#2B2B2B]">Abstract</h4>
              <p className="text-[#2B2B2B]/80">
                This research paper presents an innovative virtual reality-based health assistant system 
                that combines natural language processing and machine learning for symptom analysis and 
                health query resolution. The system provides an immersive interface for users to interact 
                with a virtual health assistant, improving the accuracy and efficiency of preliminary 
                health assessments. By leveraging VR technology, the system creates a more engaging and 
                intuitive interface for healthcare interactions, potentially increasing user adherence and satisfaction.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-3 text-[#2B2B2B]">Key Contributions</h4>
              <ul className="list-disc list-inside space-y-2 text-[#2B2B2B]/80">
                <li>Development of a novel VR interface for health interactions that improves user engagement by 45%</li>
                <li>Creation of an advanced NLP model for symptom analysis with 87% accuracy in preliminary assessments</li>
                <li>Implementation of a real-time query processing system with context-aware responses</li>
                <li>Comprehensive evaluation methodology including user experience metrics and clinical accuracy measures</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-3 text-[#2B2B2B]">Research Methodology</h4>
              <p className="text-[#2B2B2B]/80">
                The research employed a mixed-methods approach combining system development with user studies. 
                The VR health assistant was developed using Unity 3D with custom NLP models trained on medical 
                datasets. User studies with 50 participants evaluated both the technical performance and user 
                experience aspects of the system.
              </p>
            </div>
            
            <div className="mt-8">
              <a 
                href="https://ijirt.org/Article?manuscript=170028" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#7DC9DA] text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-[#2E5C74] transition-colors inline-flex hover:scale-105 transform duration-200"
              >
                <BookOpen size={20} /> Read Full Paper
              </a>
            </div>
          </div>
        </div>
      </Modal>

      {/* Event Modal */}
      <Modal 
        isOpen={selectedEvent !== null} 
        onClose={() => setSelectedEvent(null)}
      >
        {selectedEvent !== null && (
          <div>
            <img 
              src={events[selectedEvent].image} 
              alt={events[selectedEvent].title}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-[#2B2B2B]">{events[selectedEvent].title}</h3>
              <span className="bg-[#7DC9DA]/20 text-[#2E5C74] text-sm font-medium px-3 py-1 rounded-full">
                {events[selectedEvent].achievement}
              </span>
            </div>
            <div className="mb-6">
              <p className="text-[#2B2B2B] font-medium">{events[selectedEvent].organizer}</p>
              <p className="text-[#2B2B2B]/80">{events[selectedEvent].date} | {events[selectedEvent].location}</p>
            </div>
            
            <div className="bg-[#7DC9DA]/10 p-4 rounded-lg mb-6">
              <h4 className="font-semibold text-[#2E5C74] mb-2">Summary</h4>
              <p className="text-[#2B2B2B]">
                {events[selectedEvent].description}
              </p>
            </div>
            
            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-3 text-[#2B2B2B]">Detailed Overview</h4>
              <p className="text-[#2B2B2B]/80 mb-4">
                {events[selectedEvent].detailedDescription}
              </p>
              <p className="text-[#2B2B2B]/80">
                <span className="font-medium">Impact: </span>
                {events[selectedEvent].impact}
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-3 text-[#2B2B2B]">Skills Applied</h4>
              <div className="flex flex-wrap gap-2">
                {events[selectedEvent].skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="bg-[#DAD2C7]/30 text-[#2B2B2B]/80 px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mt-8 flex gap-4">
              <button className="bg-[#7DC9DA] text-white px-6 py-2 rounded-lg hover:bg-[#2E5C74] transition-colors flex items-center gap-2 hover:scale-105 transform duration-200">
                <Trophy size={18} /> View Certificate
              </button>
              {events[selectedEvent].title.includes("Hackathon") && (
                <button className="border border-[#7DC9DA] text-[#2E5C74] px-6 py-2 rounded-lg hover:bg-[#7DC9DA]/10 transition-colors flex items-center gap-2 hover:scale-105 transform duration-200">
                  <Github size={18} /> View Project
                </button>
              )}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

// Calendar component for the date display
function Calendar(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

export default App;