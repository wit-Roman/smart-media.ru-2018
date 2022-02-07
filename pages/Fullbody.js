//import { Component } from "react"
import ReactFullpage from "@fullpage/react-fullpage"

import SectionTop from './SectionTop'
import SectionWedo from './SectionWedo'
import SectionCases from './SectionCases'
import SectionCasesDetail from './SectionCasesDetail'
import SectionRecommend from './SectionRecommend'
import SectionAboutus from './SectionAboutus'
import SectionTeam from './SectionTeam'
import SectionAchievement from './SectionAchievement'
//import SectionBlog from './SectionBlog'
import SectionContact from './SectionContact'

const anchors = ["Top","Wedo","Cases","CasesDetail","Recommend","Aboutus","Team","Achievement","Contact"]

const Fullbody = () =>
    <div className="App">
        <ReactFullpage
        anchors={anchors}
        navigation={false}
        navigationTooltips={anchors}
        controlArrows={false}
        afterLoad={(origin, destination, direction)=>{}}
        render={({ state, fullpageApi }) => {
            let isAnimate = false
            if (!!state.destination) {
                if (state.destination.anchor === "Team" && state.lastEvent === "afterLoad") isAnimate = true;
                if (state.destination.anchor === "Team" && state.lastEvent === "onLeave") isAnimate = false;
            }
            return (
                <div>
                    <div className="section">
                        <SectionTop />
                        <div className="scroll-button" onClick={()=>fullpageApi.moveSectionDown()} />
                    </div>
                    <div className="section">
                        <SectionWedo fullpageApi={fullpageApi} />
                        <div className="scroll-button wide" onClick={()=>fullpageApi.moveSectionDown()} />
                    </div>
                    <div className="section">
                        <SectionCases fullpageApi={fullpageApi} />
                        <div className="scroll-button blue" onClick={()=>fullpageApi.moveSectionDown()} />
                    </div> 
                    <div className="section">
                        <SectionCasesDetail fullpageApi={fullpageApi} />
                        <div className="scroll-button blue" onClick={()=>fullpageApi.moveSectionDown()} />
                    </div>
                    <div className="section">
                        <SectionRecommend fullpageApi={fullpageApi} />
                        <div className="scroll-button blue" onClick={()=>fullpageApi.moveSectionDown()} />
                    </div>
                    <div className="section">
                        <SectionAboutus />
                        <div className="scroll-button blue" onClick={()=>fullpageApi.moveSectionDown()} />
                    </div>
                    <div className="section">
                        <SectionTeam animate={isAnimate} />
                        <div className="scroll-button blue" onClick={()=>fullpageApi.moveSectionDown()} />
                    </div>
                    <div className="section">
                        <SectionAchievement fullpageApi={fullpageApi} />
                        <div className="scroll-button blue" onClick={()=>fullpageApi.moveSectionDown()} />
                    </div>
                    <div className="section">
                        <SectionContact />
                    </div>
                </div>
            )
        }} />
    </div>

export default Fullbody;

/*
<div className="section">
    <SectionBlog />
    <div className="scroll-button blue" onClick={()=>fullpageApi.moveSectionDown()} />
</div>
*/