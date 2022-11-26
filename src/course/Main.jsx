// import "./App.css";
import React, { useEffect, useState } from "react";
import topImage from "../images/top_image.jpg";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CourseDescription from "./CourseDescription";
import Syllabus from "./Syllabus";
import WhySpecials from "./WhySpecials";
import ProjectAssignments from "./ProjectAssignments";
import SimpleAccordian from "./SimpleAccordian";
import WithCarousel from "./WithCarousel";
import CouresMaterial from "./CouresMaterial";
import { Link } from "react-router-dom";

// import {NavLink, Route, Routes} from "react-router-dom"




let selectedValues = [
  "বিশ্ববিদ্যালয় পর্যায়ের শিক্ষার্থী (কম্পিউটার সায়েন্স/আইটি বিভাগ)",
  "বিশ্ববিদ্যালয় পর্যায়ের শিক্ষার্থী (নন-কম্পিউটার সায়েন্স বিভাগ)",
  "ইয়াং প্রফেশনাল",
  "ফ্রিল্যান্সার",
  "উদ্যোক্তা",
  "অন্যান্য",
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, maxHeight: "100vh", overflowX: "auto" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Main() {
  const [value, setValue] = React.useState(0);
  const [isTabWindow, setIsTabWindow] = useState(window.innerWidth)

  const handleChange = (event, newValue) => {
    setValue(newValue);
};


useEffect(()=> {
  function resizewidth(){
    setIsTabWindow(window.innerWidth)
  }
window.addEventListener('resize', resizewidth)
return ()=> window.removeEventListener('resize',resizewidth)
})

 useEffect(()=> {
  let footer = document.querySelector("footer");
  let stickyDiv = document.querySelector('.sticky__sidebar__section');
  if(isTabWindow >=768){

    let  observer = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting && stickyDiv){
        
        console.log(entries);
        console.log("dhukse");
        stickyDiv.style.position = "absolute";
        stickyDiv.style.top = `${footer.offsetTop - stickyDiv.clientHeight}px`
        
      }else{
        if(stickyDiv){
          stickyDiv.style.position = "fixed"
          stickyDiv.style.top = "1rem"
        }
      }
      // 0.15
    }, {threshold: isTabWindow < 1000 ? 0 : 0.2})
    observer.observe(footer)
  }
 }, [isTabWindow])
  return (
    <>

      {/* <div className="div__overlay"></div> */}
      <main >
        <section className="course__top__section">
          <div className="course__top__section__wrapper">
            <div className="course__top">
              <div className="course__top_wrapper">
                <div className="top_text_content">
                  <div className="top-h1">
                    <h1>কমপ্লিট ফ্রন্ট-এন্ড ডেভেলপমেন্ট শিখুন (জাভাস্ক্রিপ্ট)</h1>
                  </div>
                  <div className="top-p">
                    <p>
                      ফ্রন্ট এন্ড ওয়েব ডেভেলপমেন্টের উপর আকর্ষণীয় ক্যারিয়ার বানানোর
                      জন্য প্রয়োজনীয় প্রোগ্রামিং স্কিলগুলো শিখুন ৪ মাসের মধ্যে, ১৪টি
                      প্র্যাকটিক্যাল প্রজেক্টের মাধ্যমে।
                    </p>
                  </div>
                </div>
                <div className="top-image">
                  <img src={topImage} alt="top pic" className="" />
                </div>
              </div>
            </div>
            {isTabWindow <= 768 && (
              <div>
                <aside className="course_side_content">
                  <CouresMaterial />
                </aside>
              </div>
            )}

            <div className="" style={{}}>

              {isTabWindow > 768 ?(

              <Box className="box__class_tab">
                <Tabs
                  className="tabs"

                  variant="fullwidth"
                  sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    color: "black",
                    backgroundColor: "gray",
                    borderRadius: '10px',
                    "& button": { fontSize: "1rem", width: "25%" },
                    "& button:active": {
                      backgroundColor: "rgb(175, 19, 112)",
                      color: "black",
                    },
                    "& button:hover": {
                      backgroundColor: "rgb(175, 19, 112)",
                      color: "black",
                    },
                    
                  }}
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                    <Tab id="tab" label="কোর্সের বিস্তারিত" {...a11yProps(0)}/>
                    <Tab className="tab" label="সিলেবাস" {...a11yProps(1)} />
                    <Tab className="tab" label="কেন স্পেশাল" {...a11yProps(2)} />
                    <Tab className="tab" label="প্রজেক্ট ও অ্যাসাইনমেন্ট" {...a11yProps(2)}/>
                </Tabs>
                <TabPanel value={value} index={0}>
                  {/* course description */}
                  <CourseDescription />
                </TabPanel>
                <TabPanel value={value} index={1}>
                  {/* syllabus */}

                  <Syllabus />
                </TabPanel>
                <TabPanel value={value} index={2}>
                  {/* Why Specials */}

                  <WhySpecials />
                </TabPanel>
                <TabPanel value={value} index={3}>
                  {/* project assignment */}

                  <ProjectAssignments />
                </TabPanel>
                <div className="email__subcription">
                  <p>পূর্ণাঙ্গ সিলেবাস ইমেইলে পেতে নিচের ফর্মটি পূরণ করুন</p>
                  <div className="form__sub">
                    <div className="form__contrl">
                      <div className="input__fields">
                        <input type={"text"} placeholder="আপনার নাম" />
                      </div>
                      <div className="input__fields">
                        <input type={"text"} placeholder="আপনার ফোন নাম্বার" />
                      </div>
                      <div className="input__fields">
                        <select>
                          <option disabled selected>আপনি একজন –</option>
                          {selectedValues.map(v => <option>{v}</option>)}
                        </select>
                      </div>
                      <div className="input__fields">
                        <input type={"email"} placeholder="আপনার ইমেইল" />
                      </div>

                      <div className="input__fields" style={{ cursor: "pointer !important", width: "45%" }}>
                        <input type={"button"} value="Email Me The Syllabus" />
                      </div>

                    </div>
                    <p>
                      নিচের ফর্মটি পূরণ করলে আপনার ইমেইলে এ ক্যারিয়ার ট্র্যাক
                      প্রোগ্রামের পুরো সিলেবাস পাঠিয়ে দেবো আমরা! সেখান থেকে প্রয়োজনীয়
                      সব তথ্য পেয়ে যাবেন।
                    </p>
                  </div>
                </div>

                <section className="career__track" >
                  <div className="career__track__div">
                    <div className="career__track__wrapper">
                      <h2>ক্যারিয়ার ট্র্যাকের শিক্ষার্থীরা কী বলছেন?</h2>
                      <div className="comment__slider">
                        <WithCarousel />
                      </div>
                      <div className="faq__div">
                        <div className="faq__div__wrapper">
                          <h2>Frequently Answered Questions</h2>
                          <SimpleAccordian />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>


              </Box>

              ): (
                <div className="minified__pannel">
                <div><CourseDescription /></div>
                <div><Syllabus /></div>
                <div><WhySpecials /></div>
                <div><ProjectAssignments /></div>
                </div>
              )}
            </div>

          </div>


        </section>

        {isTabWindow > 768 && (<aside className="sticky__sidebar__section ">
          <CouresMaterial />
        </aside>)}
      </main>

        {isTabWindow <= 768 && (
          <div className="sticky__bottom">
                 <div className='coures__pricing priceing'>
                 মূল্য:<span>৳ ৭,০০০</span>
                </div>
                    <div className="coures__pricing admission_now">
                    <Link role={"button"}><span>এখনই ভর্তি হোন</span></Link>
                    </div>
                    <div className="coures__pricing download__syllabus">
                    <Link role={"button"}> <span>ডাউনলোড সিলেবাস</span></Link>
                    </div>
                </div>   
        )}



      <footer>Footer</footer>
    </>
  );
}

export default Main;
