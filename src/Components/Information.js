import React from 'react'
import './information.css'
const Info=()=>{
    return (      <div class="userguide">
    <h1>User Manual</h1>
    <div class="information">
        
        <h3>1.Voter Registration</h3>
        <li>
            For casting the vote user need to register first on registration form provided on website.
        </li>
        <li>
            For registration user have to enter his name,citizenship number.
        </li>
        <li>
           Verification of voter is done by face recognation.
        </li>
        <li>
            User should have ethereum wallet address.
        </li>
        
        <h3>2.Voting Process</h3>
            <li>
                Overall voting phase is conducted in three phase.All of which will be initialized and terminated &emsp; by admin.
                User have to participate in the process according to current phase.
            </li>
            <li>
               <span> Registration phase: </span>During this phase registration of the voter takes place.
            </li>
            <li>
                <span> Voting phase: </span>After initialization of voting phase from the admin,user can cast 
                the vote in voting &emsp;phase .The casting of vote can be done by clicking on 'VOTE' button
                ,after which transaction will &emsp; be initiated and after conforming transaction the vote will
                get successfully casted .
             </li>
             <li>
                <span> Result phase: </span>This is the final stage of whole voting process during which the 
                result will be &emsp; &emsp; displayed at 'Result' section.
             </li>
        

    </div>
</div>)
}
export default Info