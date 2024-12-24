import React from 'react'
import PuffLoader from "react-spinners/PuffLoader";

const Loading = () => {
 const [loading, setLoading]=React.useState(true)
  return (

    <section>

     <div className={` flex justify-center pt-16`}>

        <PuffLoader
        color='#5591C5'
        loading={loading}
        size={50}
        />
    </div>

    </section>
  )
}

export default Loading
