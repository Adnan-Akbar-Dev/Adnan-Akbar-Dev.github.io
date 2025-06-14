import { useEffect, useState } from "react";
// for work_images
import Icustoms from "../assets/images/work_images/lumbarfy.png";
import trenda from "../assets/images/work_images/skillgigs.jpeg";
import Homie from "../assets/images/work_images/caesar-big.jpeg"
// import work3 from "../assets/images/work_images/3.jpg";
// works small images
import icustomSmall from "../assets/images/work_images/small/lumbarfy-small.png";
import trendaSmall from "../assets/images/work_images/small/skillgigs-small.jpeg";
import homieSmall from "../assets/images/work_images/small/caesar-small.jpeg"
// import workSmall3 from "../assets/images/work_images/small/3.jpg";
// blog post images
import blog6 from "../assets/images/blog_images/6.jpg";
import blog4 from "../assets/images/blog_images/4.jpg";
import blog2 from "../assets/images/blog_images/2.jpg";
import blog1 from "../assets/images/blog_images/1.jpg";
import blog3 from "../assets/images/blog_images/3.jpg";
import blog5 from "../assets/images/blog_images/5.jpg";
// blog image small
import blogSmall6 from "../assets/images/blog_images/small/6.jpg";
import blogSmall4 from "../assets/images/blog_images/small/4.jpg";
import blogSmall2 from "../assets/images/blog_images/small/2.jpg";
import blogSmall1 from "../assets/images/blog_images/small/1.jpg";
import blogSmall3 from "../assets/images/blog_images/small/3.jpg";
import blogSmall5 from "../assets/images/blog_images/small/5.jpg";

import img1 from "../assets/images/slider/brand-1.png";
import img2 from "../assets/images/slider/brand-2.png";
import img3 from "../assets/images/slider/brand-3.png";
import img4 from "../assets/images/slider/brand-4.png";
import img5 from "../assets/images/slider/brand-5.png";
//  icon use as img here
import icon from "../assets/images/icons/icon-1.svg";
import icon1 from "../assets/images/icons/icon-2.svg";
import icon2 from "../assets/images/icons/icon-3.svg";
import icon3 from "../assets/images/icons/icon-4.svg";
import icon4 from "../assets/images/icons/icon-5.svg";
// contact image
import { CgNotes } from "react-icons/cg";
import { FaBlogger, FaRegUser } from "react-icons/fa";
import { FiCodesandbox } from "react-icons/fi";
import { RiContactsBookLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const AllData = () => {
  const [check, setCheck] = useState(false);
  const [local, setLocal] = useState(localStorage.getItem("theme"));
  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  // dark and light theme controls
  useEffect(() => {
    const themeValue = localStorage?.getItem("theme");

    if (!themeValue) {
      setCheck(false);
      localStorage.setItem("theme", "light");
    } else {
      themeValue === "dark" && setCheck(true);
      themeValue === "light" && setCheck(false);
    }

    localStorage?.getItem("theme") === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, []);

  // Create and light theme function
  const handleTheme = (value) => {
    if (value === "light") {
      setCheck(false);
      localStorage.setItem("theme", "light");
      setLocal("light");
    } else {
      setCheck(true);
      localStorage.setItem("theme", "dark");
      setLocal("dark");
    }
    localStorage?.getItem("theme") === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  };

  // fillter portfilo data
  const handleData = (text) => {
    if (text === "All") {
      setData(workItems);
    } else {
      const findData = workItems.filter((item) => item.tag === text);
      setData(findData);
    }
  };

  // find items for portfilo  modal open
  const handleModelData = (id) => {
    const find = workItems.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  // find items for Blogs  modal open
  const handleBlogsData = (id) => {
    const find = blogsData.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  // Active navlinks function
  function NavLink({
    to,
    className,
    activeClassName,
    inactiveClassName,
    ...rest
  }) {
    let location = useLocation();
    let isActive = location.pathname === to;
    let allClassNames =
      className + (isActive ? `${activeClassName}` : `${inactiveClassName}`);
    return <Link className={allClassNames} to={to} {...rest} />;
  }

  // Elements for protfilo section
  const workItems = [
    {
      id: "1",
      tag: "Laravel Vue Js",
      title: "Icustoms",
      img: Icustoms,
      imgSmall: icustomSmall,
      bg: "#FFF0F0",
      client: "Icustoms",
      langages: "Laravel, VueJs(Pinia,VUEX),",
      link: "https://app.customscloud.co/",
      linkText: "live",
      description: "Managed import/export customs declarations across the UK and Ireland via HMRC. Supported multiple submission methods for efficient customs management.",
    },
    {
      id: "2",
      tag: "Yii2",
      title: "Homie Australia",
      img: Homie,
      imgSmall: homieSmall,
      bg: "#FFF3FC",
      client: "Work Tech",
      langages: "Yii2, React Js, PHP, MySQL",
      // link: "https://www.npmjs.com/package/caesar-crypt",
      linkText: "Private Project",
      description:"platform connecting suppliers with customers. Suppliers showcase services while customers browse and purchase, creating a seamless transaction experience",
    },
    {
      id: "3",
      tag: "Laravel",
      title: "Trenda Australia",
      img: trenda,
      imgSmall: trendaSmall,
      bg: "#FFF3FC",
      client: "GlobeWyze Inc.",
      langages: "JavaScript",
      // link: "https://skillgigs.com/",
      linkText: "Private Project",
      description: "A barber management system connecting barbers and customers.Barbers showcase services, and customers book appointments effortlessly.",
    },
    // {
    //   id: "3",
    //   tag: "Logo",
    //   title: "Chul urina",
    //   img: work3,
    //   imgSmall: workSmall3,
    //   bg: "#FFF0F0",
    //   client: "Freepik",
    //   langages: "Illustrator",
    //   link: "https://www.freepik.com/free-photos-vectors/market-logo",
    //   linkText: "www.freepik.com",
    //   description:
    //     "  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate non suscipit voluptatibus minima ullam maiores sequi nihil placeat error, vero eaque doloremque reiciendis amet pariatur consequuntur. Nostrum, dolore, amet eligendi ipsam enim quisquam, corrupti asperiores nihil excepturi aspernatur placeat iure.",
    // },
  ];
  const [data, setData] = useState(workItems);

  // Elements for Blogs section
  const blogsData = [
    {
      id: "1",
      img: blog1,
      imgSmall: blogSmall1,
      date: "177 April",
      category: "Inspiration",
      title: "How to Own Your Audience by Creating an Email List.",
      bg: "#FCF4FF",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ",
    },
    {
      id: "4",
      img: blog4,
      imgSmall: blogSmall4,
      date: "000 April",
      category: "Inspiration",
      title: "Everything You Need to Know About Web Accessibility.",
      bg: "#EEFBFF",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ",
    },
    {
      id: "2",
      img: blog2,
      imgSmall: blogSmall2,
      date: "21 April",
      category: "Web Design",
      title: "The window know to say beside you",
      bg: "#FFF0F0",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ",
    },
    {
      id: "5",
      img: blog5,
      imgSmall: blogSmall5,
      date: "27 April",
      category: "Inspiration",
      title: "Top 10 Toolkits for Deep Learning in 2021.",
      bg: "#FCF4FF",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ",
    },
    {
      id: "3",
      img: blog3,
      imgSmall: blogSmall3,
      date: "27 April",
      category: "Inspiration",
      title: "How to Own Your Audience by Creating an Email List.",
      bg: "#FCF4FF",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ",
    },
    {
      id: "6",
      img: blog6,
      imgSmall: blogSmall6,
      date: "27 April",
      category: "Inspiration",
      title: "Everything You Need to Know About Web Accessibility.",
      bg: "#EEFBFF",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ",
    },
  ];

  // Menu items for Homepage Two
  const menuItemTwo = [
    {
      id: "01",
      name: "About",
      link: "/about",
      icon: <FaRegUser />,
    },
    {
      id: "02",
      name: "Resume",
      link: "/resume",
      icon: <CgNotes />,
    },
    {
      id: "03",
      name: "Works",
      link: "/works",
      icon: <FiCodesandbox />,
    },
    // {
    //   id: "04",
    //   name: "Blogs",
    //   link: "/homeTwo/blogs",
    //   icon: <FaBlogger />,
    // },
    {
      id: "05",
      name: "Contact",
      link: "/contact",
      icon: <RiContactsBookLine />,
    },
  ];

  // Slider image for Clients
  const sliderImg = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img1,
    img2,
    img3,
    img4,
    img5,
  ];

  // serviceArray items for about page
  const serviceArray = [
    {
      id: "1",
      icon: icon,
      title: "Frontend Development",
      des: "Building dynamic, responsive web applications from scratch and enhance existing apps.",
      color: "#D566FF",
      bg: "#FCF4FF",
    },
    {
      id: "2",
      icon: icon1,
      title: "Backend Development",
      des: "Developing robust server-side applications using PHP Laravel, Yii2, CodeIgniter and slim PHP Designing and implementing RESTful APIs.",
      color: "#DDA10C",
      bg: "#FEFAF0",
    },
    {
      id: "3",
      icon: icon2,
      title: "Database Management",
      des: "Setting up and managing databases, including MySQL or PostgreSQL. Designing efficient database schemas and optimizing queries.",
      color: "#8774FF",
      bg: "#FCF4FF",
    },
    {
      id: "4",
      icon: icon3,
      title: "Authentication and Authorization",
      des: "Implementing user authentication systems using OAuth, JWT, or other methods. Configuring role-based access control (RBAC) for user permissions.",
      color: "#FF6080",
      bg: "#FFF4F4",
    },
    {
      id: "5",
      icon: icon4,
      title: "API Integration",
      des: "Connecting to third-party APIs to fetch and display data within web applications. Developing custom APIs for clients or partners.",
      color: "#FF75D8",
      bg: "#FFF0F8",
    },
  ];

  // educationArray items for Resume page
  const educationArray = [
    {
      id: 1,
      date: "2015-2019",
      title: "Bachelor of Science in Software Engineering",
      place: "COMSATS University Islamabad (CUI)",
      bg: "#FFF4F4",
    },
  ];
  // experiencesArray items for Resume page
  // Change some code so I can easily display experiences in reverse order where the array is being rendered.
  const experiencesArray = [
    
    {
      id: 5,
      date: "June 2019 - August 2019",
      title: "Internship",
      place: "Innovo Technologies",
      bg: "#EEF5FA",
    },
    {
      id: 4,
      date: "September 2019 - May 2020",
      title: "Junior Laravel Developer",
      place: "Innovo Technologies",
      bg: "#EEF5FA",
    },
    {
      id: 3,
      date: "August 2020 - July 2021",
      title: "Laravel Developer",
      place: "Al Burraq Technology",
      bg: "#F2F4FF",
    },
    {
      id: 2,
      date: "August 2021 -  January 2024",
      title: "Sr. Full Stack Engineer (Team Lead)",
      place: "Work Tech",
      bg: "#F2F4FF",
    },
    {
      id: 1,
      date: "February 2024 - Preset",
      title: "Sr. Full Stack Developer (Team Lead)",
      place: "iCustoms | UK",
      bg: "#F2F4FF",
    },
  ];

  // Working Skills items for Resume page
  const lineArray = [
    {
      id: "01",
      color: "#FF6464",
      name: "JavaScript",
      number: "90",
    },
    {
      id: "02",
      color: "#9272D4",
      name: "Laravel",
      number: "90",
    },
    {
      id: "03",
      color: "#9272D4",
      name: "Yii2",
      number: "60",
    },
    {
      id: "04",
      color: "#9272D4",
      name: "CodeIgniter",
      number: "60",
    },
    {
      id: "05",
      color: "#5185D4",
      name: "VUE JS",
      number: "80",
    },
    {
      id: "06",
      color: "#CA56F2",
      name: "DataBase",
      number: "90",
    },
  ];


  return {
    handleTheme,
    check,
    local,
    handleData,
    data,
    singleData,
    handleModelData,
    isOpen,
    setIsOpen,
    blogsData,
    handleBlogsData,
    NavLink,
    menuItemTwo,
    serviceArray,
    sliderImg,
    educationArray,
    experiencesArray,
    lineArray,
  };
};

export default AllData;
