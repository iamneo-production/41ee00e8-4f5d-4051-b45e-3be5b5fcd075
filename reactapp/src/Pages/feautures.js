import React from "react";
import po from './feautures-removebg-preview.png'
import Topnav from "../Components/Topnav";

export default function Feauture(){

    return(

        <>
        <div>

            <Topnav/>
        </div>
        <div style={{width:'100vw',display:'flex',flexDirection:'row'}}>

            <div style={{width:'80%'}}>  


            <div style={{width:'80%',height:'30%',display:'flex',flexDirection:'row'}}>

                <div style={{width:'20%',border: '1px solid #ccc',justifyContent:'space-between',marginLeft:'2em',marginTop:'3em',borderWidth:'2px',borderColor:'black',paddingLeft:'1em',paddingRight:'1em',paddingTop:'1em',paddingBottom:'1em'}}>

                    <h1>Cashless Claim settlement</h1>
                    <span>Cashless claim settlement is a facility provided by the car insurance company in which the insurer is associated with</span>

                    <span></span>
                </div>
                <div style={{width:'20%',border: '1px solid #ccc',justifyContent:'space-between',marginLeft:'5em',marginTop:'3em',borderWidth:'2px',borderColor:'black',paddingLeft:'1em',paddingRight:'1em',paddingTop:'1em',paddingBottom:'1em'}}>

                    <h1>24x7 roadside Assistance / Towing facility</h1>
                    <span>A Roadside Assistance cover can be of great help, in case your two‐wheeler suffers a breakdown or encounters a major snag</span>
                </div>
                <div style={{width:'20%',border: '1px solid #ccc',justifyContent:'space-between',marginLeft:'5em',marginTop:'3em',borderWidth:'2px',borderColor:'black',paddingLeft:'1em',paddingRight:'1em',paddingTop:'1em',paddingBottom:'1em'}}>

                    <h1>Zero depreciation cover</h1>
                    <span>Depreciation refers to the gradual decline in value of an asset over time due to a combination of factors such as age, wear, tear and</span>
                </div>


            </div>
            <div style={{width:'80%',height:'30%',display:'flex',flexDirection:'row'}}>

                <div style={{width:'20%',border: '1px solid #ccc',justifyContent:'space-between',marginLeft:'2em',marginTop:'3em',borderWidth:'2px',borderColor:'black',paddingLeft:'1em',paddingRight:'1em',paddingTop:'1em',paddingBottom:'1em'}}>

                    <h1>Personal Baggage</h1>

                    <span>Losing baggage during travel is fairly common. It can cause anxiety unless you have personal baggage insurance…</span>
                </div>
                <div style={{width:'20%',border: '1px solid #ccc',justifyContent:'space-between',marginLeft:'5em',marginTop:'3em',borderWidth:'2px',borderColor:'black',paddingLeft:'1em',paddingRight:'1em',paddingTop:'1em',paddingBottom:'1em'}}>

                    <h1>Accident shield</h1>
                    <span>According to the Motor Vehicles Act, 1988, buying a car in India requires you to purchase a Third-Party Liability Only Policy…</span>
                </div>
                <div style={{width:'20%',border: '1px solid #ccc',justifyContent:'space-between',marginLeft:'5em',marginTop:'3em',borderWidth:'2px',borderColor:'black',paddingLeft:'1em',paddingRight:'1em',paddingTop:'1em',paddingBottom:'1em'}}>

                    <h1>Lock key replacement cover</h1>
                    <span>Sample this: It is a busy morning and you have an urgent meeting slated soon. Just when you dash for your car, you realize…</span>
                </div>


            </div>
            <div style={{width:'80%',height:'30%',display:'flex',flexDirection:'row'}}>

                <div style={{width:'20%',border: '1px solid #ccc',justifyContent:'space-between',marginLeft:'2em',marginTop:'3em',borderWidth:'2px',borderColor:'black',paddingLeft:'1em',paddingRight:'1em',paddingTop:'1em',paddingBottom:'1em'}}>

                    <h1>Driver cover/passenger Cover</h1>
                    <span>Personal Accident Coverage for owner-drivers is mandatory. However, there are options available to insure the Personal Accident…</span>

                </div>
                <div style={{width:'20%',border: '1px solid #ccc',justifyContent:'space-between',marginLeft:'5em',marginTop:'3em',borderWidth:'2px',borderColor:'black',paddingLeft:'1em',paddingRight:'1em',paddingTop:'1em',paddingBottom:'1em'}}>

                    <h1>Engine Protector</h1>
                    <span>An Engine Protector plan covers damage to the engine caused due to leakage of lubricants, damage to the gearbox and water…</span>
                </div>
                <div style={{width:'20%',border: '1px solid #ccc',justifyContent:'space-between',marginLeft:'5em',marginTop:'3em',borderWidth:'2px',borderColor:'black',paddingLeft:'1em',paddingRight:'1em',paddingTop:'1em',paddingBottom:'1em'}}>

                    <h1>Personal Accident cover</h1>
                    <span>Road accidents account for a disproportionate number of deaths in India. Depending on how severe the injury is, a prolonged period…</span>
                </div>


            </div>
            <div style={{width:'80%',height:'30%',display:'flex',flexDirection:'row'}}>

                <div style={{width:'20%',border: '1px solid #ccc',justifyContent:'space-between',marginLeft:'2em',marginTop:'3em',borderWidth:'2px',borderColor:'black',paddingLeft:'1em',paddingRight:'1em',paddingTop:'1em',paddingBottom:'1em'}}>

                    <h1>Motor OTS</h1>
                    <span>In this rapidly changing world, the technology is constantly expanding its horizons. The insurance industry, too, is witnessing…</span>

                </div>
                <div style={{width:'20%',border: '1px solid #ccc',justifyContent:'space-between',marginLeft:'5em',marginTop:'3em',borderWidth:'2px',borderColor:'black',paddingLeft:'1em',paddingRight:'1em',paddingTop:'1em',paddingBottom:'1em'}}>

                <h1>Conveyance Benefit</h1>
                    <span>Conveyance benefit is an add-on cover wherein your car insurer would provide a daily cash benefit in case your claim has…</span>
                    
                </div>
                


            </div>
        </div>

        <div style={{marginLeft:'-25em',marginTop:'10em'}}>

            <img style={{height:"60%" , width:'90%'}} src={po} alt="pic"></img>


        </div>

    </div>

        
        
        </>


    );
}