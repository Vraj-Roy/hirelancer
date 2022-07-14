import ContentLoader from "react-content-loader"  

const FreelancerLoader = (props)  => (

  <ContentLoader
  uniqueKey="loader" 
    speed={2}   
    viewBox="0 0 800 220"
    backgroundColor="#e6e6e6"
    foregroundColor="#ff6600"
    {...props}
  >
    <circle cx="40" cy="40" r="30" /> 
    <rect x="700" y="28" rx="5" ry="5" width="100" height="25" /> 
    <rect x="0" y="90" rx="0" ry="0" width="150" height="20" />  
    <rect x="180" y="90" rx="0" ry="0" width="50" height="20" /> 
    <rect x="0" y="130" rx="0" ry="0" width="1000" height="50" /> 
    <rect x="0" y="190" rx="5" ry="5" width="50" height="30" /> 
    <rect x="60" y="190" rx="5" ry="5" width="70" height="30" />
  </ContentLoader>
)
export {FreelancerLoader}

const AssignMentLoader = (props)  => (

  <ContentLoader
  uniqueKey="loader" 
    speed={2}   
    viewBox="0 0 800 310"
    backgroundColor="#e6e6e6"
    foregroundColor="#ff6600"
    {...props}
  >
    <rect x="0" y="0" rx="5" ry="5" width="150" height="20" /> 
    <rect x="0" y="40" rx="5" ry="5" width="600" height="25" />  
    <rect x="650" y="30" rx="5" ry="5" width="150" height="40" />  
    <rect x="0" y="85" rx="5" ry="5" width="100" height="20" /> 
    <rect x="120" y="85" rx="5" ry="5" width="100" height="20" /> 
    <rect x="0" y="120" rx="5" ry="5" width="800" height="50" /> 
    <rect x="0" y="180" rx="5" ry="5" width="100" height="25" /> 
    <rect x="110" y="180" rx="5" ry="5" width="100" height="25" /> 
    <rect x="220" y="180" rx="5" ry="5" width="100" height="25" /> 
    <circle cx="40" cy="260" r="40" /> 
    <rect x="95" y="248" rx="5" ry="5" width="100" height="25" /> 
    {/* <rect x="60" y="190" rx="5" ry="5" width="70" height="30" /> */}
  </ContentLoader>
)
export {AssignMentLoader}